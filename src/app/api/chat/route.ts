import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'llama-3.1-8b-instant',
      max_tokens: 400,
      temperature: 0.7,
      messages: [
        { role: 'system', content: body.system || 'You are PayCheck AI.' },
        ...(body.messages || [])
      ]
    }),
  });
  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content || 'Use our calculator at privatepaycheck.com!';
  return NextResponse.json({ content: [{ type: 'text', text }] });
}
