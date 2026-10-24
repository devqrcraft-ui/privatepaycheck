import { NextRequest, NextResponse } from 'next/server';

const SYSTEM = 'You are PayCheck AI, an assistant on PrivatePaycheck.com. Answer questions about US paychecks, payroll withholding, FICA, W-4, overtime, bonuses and how to use the site calculators. You are not a tax advisor: give general information and estimates, say when the answer depends on the person\'s situation, and point to the site calculators and to IRS.gov or the state tax agency for official figures. Do not quote specific current-year tax amounts or limits from memory; say figures change every year and refer to the calculators. Politely decline anything unrelated to US paychecks and taxes. Keep answers under 120 words. Never ask for SSNs, bank details or other personal identifiers.';
const FALLBACK = 'Please use the calculators on privatepaycheck.com for an estimate.';
const LIMIT = 20;
const WINDOW_MS = 60 * 60 * 1000;
const hits = new Map<string, { n: number; t: number }>();

function reply(text: string, status = 200) {
  return NextResponse.json({ content: [{ type: 'text', text }] }, { status });
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin') || req.headers.get('referer') || '';
  if (origin && !/^(https:\/\/(www\.)?privatepaycheck\.com|http:\/\/localhost(:\d+)?)(\/|$)/.test(origin)) return reply('Not allowed.', 403);
  const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now - h.t > WINDOW_MS) hits.set(ip, { n: 1, t: now });
  else if (h.n >= LIMIT) return reply('Too many questions for now. Please try again later or use the calculators.', 429);
  else h.n += 1;
  if (hits.size > 5000) hits.clear();

  let body: { messages?: unknown };
  try { body = await req.json(); } catch { return reply('Bad request.', 400); }
  const raw = Array.isArray(body.messages) ? body.messages.slice(-6) : [];
  const messages = raw
    .filter((m): m is { role: string; content: string } => !!m && typeof (m as { content?: unknown }).content === 'string' && ((m as { role?: unknown }).role === 'user' || (m as { role?: unknown }).role === 'assistant'))
    .map(m => ({ role: m.role, content: m.content.slice(0, 600) }));
  if (!messages.length || messages[messages.length - 1].role !== 'user') return reply('Bad request.', 400);
  if (!process.env.GROQ_API_KEY) return reply(FALLBACK);

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15000);
  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      signal: ctrl.signal,
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${process.env.GROQ_API_KEY}` },
      body: JSON.stringify({ model: 'llama-3.1-8b-instant', max_tokens: 300, temperature: 0.3, messages: [{ role: 'system', content: SYSTEM }, ...messages] }),
    });
    const data = await res.json();
    return reply(data?.choices?.[0]?.message?.content || FALLBACK);
  } catch {
    return reply(FALLBACK);
  } finally {
    clearTimeout(timer);
  }
}
