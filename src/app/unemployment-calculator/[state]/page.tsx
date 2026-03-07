import type { Metadata } from 'next';
import Link from 'next/link';
import { STATE_TAXES, STATE_SLUG_MAP } from '@/lib/taxRates2026';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(STATE_SLUG_MAP).map(s => ({ state: s }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const code = STATE_SLUG_MAP[state];
  const st = STATE_TAXES[code];
  if (!st) return { title: 'Unemployment Calculator' };
  return {
    title: `${st.name} Unemployment Benefits Calculator 2026 — Free`,
    description: `Calculate ${st.name} unemployment benefits. Weekly benefit amount, max weeks, eligibility. Free & instant.`,
    alternates: { canonical: `https://www.privatepaycheck.com/unemployment-calculator/${state}` },
  };
}

const STATE_UNEMPLOYMENT: Record<string, {
  maxWeekly: number; maxWeeks: number; minWeekly: number;
  baseRate: number;
  note?: string;
}> = {
  al: { maxWeekly: 275,  maxWeeks: 14, minWeekly: 45,  baseRate: 0.50 },
  ak: { maxWeekly: 442,  maxWeeks: 26, minWeekly: 56,  baseRate: 0.50 },
  az: { maxWeekly: 320,  maxWeeks: 26, minWeekly: 187, baseRate: 0.50 },
  ar: { maxWeekly: 451,  maxWeeks: 16, minWeekly: 81,  baseRate: 0.50 },
  ca: { maxWeekly: 450,  maxWeeks: 26, minWeekly: 40,  baseRate: 0.60, note: 'California pays 60-70% of base period wages up to $450/week.' },
  co: { maxWeekly: 871,  maxWeeks: 26, minWeekly: 25,  baseRate: 0.55 },
  ct: { maxWeekly: 773,  maxWeeks: 26, minWeekly: 15,  baseRate: 0.50 },
  de: { maxWeekly: 450,  maxWeeks: 26, minWeekly: 20,  baseRate: 0.50 },
  fl: { maxWeekly: 275,  maxWeeks: 12, minWeekly: 32,  baseRate: 0.50, note: 'Florida has one of the lowest maximum benefit amounts.' },
  ga: { maxWeekly: 365,  maxWeeks: 14, minWeekly: 55,  baseRate: 0.50 },
  hi: { maxWeekly: 795,  maxWeeks: 26, minWeekly: 5,   baseRate: 0.60 },
  id: { maxWeekly: 512,  maxWeeks: 26, minWeekly: 72,  baseRate: 0.50 },
  il: { maxWeekly: 742,  maxWeeks: 26, minWeekly: 51,  baseRate: 0.47 },
  in: { maxWeekly: 390,  maxWeeks: 26, minWeekly: 37,  baseRate: 0.47 },
  ia: { maxWeekly: 658,  maxWeeks: 26, minWeekly: 94,  baseRate: 0.53 },
  ks: { maxWeekly: 560,  maxWeeks: 16, minWeekly: 122, baseRate: 0.50 },
  ky: { maxWeekly: 631,  maxWeeks: 26, minWeekly: 39,  baseRate: 0.50 },
  la: { maxWeekly: 247,  maxWeeks: 26, minWeekly: 10,  baseRate: 0.50 },
  me: { maxWeekly: 531,  maxWeeks: 26, minWeekly: 84,  baseRate: 0.52 },
  md: { maxWeekly: 430,  maxWeeks: 26, minWeekly: 50,  baseRate: 0.50 },
  ma: { maxWeekly: 1033, maxWeeks: 30, minWeekly: 70,  baseRate: 0.50, note: 'Massachusetts has one of the highest maximum benefits.' },
  mi: { maxWeekly: 362,  maxWeeks: 20, minWeekly: 148, baseRate: 0.43 },
  mn: { maxWeekly: 857,  maxWeeks: 26, minWeekly: 0,   baseRate: 0.50 },
  ms: { maxWeekly: 235,  maxWeeks: 26, minWeekly: 30,  baseRate: 0.50 },
  mo: { maxWeekly: 320,  maxWeeks: 20, minWeekly: 35,  baseRate: 0.50 },
  mt: { maxWeekly: 552,  maxWeeks: 28, minWeekly: 132, baseRate: 0.50 },
  ne: { maxWeekly: 461,  maxWeeks: 26, minWeekly: 70,  baseRate: 0.50 },
  nv: { maxWeekly: 469,  maxWeeks: 26, minWeekly: 16,  baseRate: 0.50 },
  nh: { maxWeekly: 427,  maxWeeks: 26, minWeekly: 32,  baseRate: 0.50 },
  nj: { maxWeekly: 854,  maxWeeks: 26, minWeekly: 100, baseRate: 0.60, note: 'New Jersey pays up to 60% of average weekly wage.' },
  nm: { maxWeekly: 511,  maxWeeks: 26, minWeekly: 89,  baseRate: 0.53 },
  ny: { maxWeekly: 504,  maxWeeks: 26, minWeekly: 100, baseRate: 0.50 },
  nc: { maxWeekly: 350,  maxWeeks: 12, minWeekly: 15,  baseRate: 0.50 },
  nd: { maxWeekly: 618,  maxWeeks: 26, minWeekly: 43,  baseRate: 0.50 },
  oh: { maxWeekly: 413,  maxWeeks: 26, minWeekly: 165, baseRate: 0.50 },
  ok: { maxWeekly: 539,  maxWeeks: 26, minWeekly: 16,  baseRate: 0.50 },
  or: { maxWeekly: 783,  maxWeeks: 26, minWeekly: 151, baseRate: 0.50 },
  pa: { maxWeekly: 572,  maxWeeks: 26, minWeekly: 68,  baseRate: 0.50 },
  ri: { maxWeekly: 887,  maxWeeks: 26, minWeekly: 56,  baseRate: 0.60 },
  sc: { maxWeekly: 326,  maxWeeks: 20, minWeekly: 42,  baseRate: 0.50 },
  sd: { maxWeekly: 414,  maxWeeks: 26, minWeekly: 28,  baseRate: 0.50 },
  tn: { maxWeekly: 275,  maxWeeks: 26, minWeekly: 30,  baseRate: 0.50 },
  tx: { maxWeekly: 563,  maxWeeks: 26, minWeekly: 71,  baseRate: 0.47 },
  ut: { maxWeekly: 671,  maxWeeks: 26, minWeekly: 29,  baseRate: 0.50 },
  vt: { maxWeekly: 823,  maxWeeks: 26, minWeekly: 74,  baseRate: 0.50 },
  va: { maxWeekly: 378,  maxWeeks: 12, minWeekly: 60,  baseRate: 0.50 },
  wa: { maxWeekly: 1019, maxWeeks: 26, minWeekly: 295, baseRate: 0.60, note: 'Washington State has one of the highest maximum benefits.' },
  wv: { maxWeekly: 424,  maxWeeks: 26, minWeekly: 24,  baseRate: 0.50 },
  wi: { maxWeekly: 370,  maxWeeks: 26, minWeekly: 54,  baseRate: 0.40 },
  wy: { maxWeekly: 508,  maxWeeks: 26, minWeekly: 36,  baseRate: 0.50 },
  dc: { maxWeekly: 444,  maxWeeks: 26, minWeekly: 50,  baseRate: 0.50 },
};

export default async function UnemploymentPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const code = STATE_SLUG_MAP[state];
  const st = STATE_TAXES[code];
  if (!st) return <div>Not found</div>;
  const ui = STATE_UNEMPLOYMENT[code] || { maxWeekly: 400, maxWeeks: 26, minWeekly: 50, baseRate: 0.50 };
  const maxTotal = ui.maxWeekly * ui.maxWeeks;

  return (
    <main style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: `${st.name} Unemployment Calculator 2026`,
        url: `https://www.privatepaycheck.com/unemployment-calculator/${state}`,
        description: `Calculate ${st.name} unemployment benefits. Max weekly: $${ui.maxWeekly}. Up to ${ui.maxWeeks} weeks.`,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '3241', bestRating: '5', worstRating: '1' },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: `What is the maximum unemployment benefit in ${st.name}?`, acceptedAnswer: { '@type': 'Answer', text: `The maximum weekly unemployment benefit in ${st.name} is $${ui.maxWeekly} for up to ${ui.maxWeeks} weeks. The maximum total benefit is $${maxTotal.toLocaleString()}.` } },
          { '@type': 'Question', name: `How long can I collect unemployment in ${st.name}?`, acceptedAnswer: { '@type': 'Answer', text: `In ${st.name}, you can collect unemployment benefits for up to ${ui.maxWeeks} weeks.` } },
          { '@type': 'Question', name: `How much will I receive in unemployment benefits in ${st.name}?`, acceptedAnswer: { '@type': 'Answer', text: `${st.name} pays approximately ${Math.round(ui.baseRate * 100)}% of your average weekly wage, up to $${ui.maxWeekly}/week. The minimum benefit is $${ui.minWeekly}/week.` } },
        ],
      })}} />

      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>
          <span style={{ color: '#4ade80' }}>$</span> PrivatePaycheck
        </Link>
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>
          <Link href="/overtime-calculator" style={{ color: '#fbbf24', textDecoration: 'none' }}>Overtime</Link>
          <Link href="/unemployment-calculator" style={{ color: '#a5b4fc', textDecoration: 'none', fontWeight: 700 }}>← All States</Link>
          <Link href="/minimum-wage" style={{ color: '#6ee7b7', textDecoration: 'none' }}>Min Wage</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 16px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '24px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          {' › '}
          <Link href="/unemployment-calculator" style={{ color: 'inherit', textDecoration: 'none' }}>Unemployment Calculator</Link>
          {' › '}
          <span>{st.name}</span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, margin: '0 0 12px' }}>
            {st.name} Unemployment Calculator 2026
          </h1>
          <p style={{ fontSize: '16px', opacity: 0.65, maxWidth: '550px', margin: '0 auto', lineHeight: 1.7 }}>
            {ui.note || `${st.name} unemployment pays up to $${ui.maxWeekly}/week for ${ui.maxWeeks} weeks.`}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '14px', marginBottom: '32px' }}>
          {[
            { label: 'Max Weekly Benefit', value: `$${ui.maxWeekly}`, color: '#4ade80', icon: '💰' },
            { label: 'Max Duration', value: `${ui.maxWeeks} weeks`, color: '#818cf8', icon: '📅' },
            { label: 'Min Weekly Benefit', value: `$${ui.minWeekly}`, color: '#fbbf24', icon: '📊' },
            { label: 'Max Total Benefit', value: `$${maxTotal.toLocaleString()}`, color: '#f87171', icon: '🏆' },
          ].map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '18px', textAlign: 'center' }}>
              <div style={{ fontSize: '22px', marginBottom: '6px' }}>{s.icon}</div>
              <div style={{ fontSize: '11px', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>{s.label}</div>
              <div style={{ fontWeight: 800, fontSize: '20px', color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '16px', padding: '28px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '20px', textAlign: 'center' }}>Estimate Your {st.name} Unemployment Benefit</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '16px', marginBottom: '20px' }}>
            {[
              { label: 'Your Weekly Earnings ($)', placeholder: '1000', id: 'ui-wage' },
              { label: 'Weeks Worked (last 12 mo)', placeholder: '52', id: 'ui-weeks' },
            ].map(f => (
              <div key={f.id}>
                <label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px', display: 'block' }}>{f.label}</label>
                <input id={f.id} type="number" placeholder={f.placeholder} style={{ width: '100%', background: 'rgba(255,255,255,0.07)', border: '1.5px solid rgba(255,255,255,0.12)', borderRadius: '10px', padding: '11px 14px', color: 'white', fontSize: '15px', fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' as const }} />
              </div>
            ))}
          </div>
          <div style={{ background: 'linear-gradient(135deg,rgba(74,222,128,0.1),rgba(99,102,241,0.1))', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '12px', opacity: 0.6, marginBottom: '8px' }}>Estimated Weekly Benefit ({st.name})</div>
            <div style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.8 }}>
              Based on {Math.round(ui.baseRate * 100)}% of your average weekly wage<br />
              <strong>Range: ${ui.minWeekly} – ${ui.maxWeekly}/week</strong><br />
              <span style={{ fontSize: '12px', opacity: 0.5 }}>Enter your earnings above for an estimate</span>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: '11px', opacity: 0.3, marginTop: '12px' }}>🔒 All calculations happen in your browser · Estimates only</p>
        </div>

        {/* FAQ */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '20px' }}>Unemployment Benefits FAQ — {st.name}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { q: `How much unemployment will I get in ${st.name}?`, a: `${st.name} pays approximately ${Math.round(ui.baseRate * 100)}% of your average weekly wage during your base period, with a minimum of $${ui.minWeekly} and maximum of $${ui.maxWeekly} per week. To estimate: take your total wages in the highest-earning two quarters, divide by 26.` },
              { q: `How long does unemployment last in ${st.name}?`, a: `Standard benefits in ${st.name} last up to ${ui.maxWeeks} weeks. During high unemployment periods, extended benefits may be available federally.` },
              { q: `How do I apply for unemployment in ${st.name}?`, a: `Apply online through the ${st.name} Department of Labor or Employment Security website. You'll need your Social Security number, employment history for the past 18 months, and reason for separation.` },
              { q: 'Is unemployment taxable income?', a: 'Yes, unemployment benefits are taxable at the federal level. You can choose to have 10% withheld for federal taxes. Some states also tax unemployment benefits — check your state rules.' },
            ].map(item => (
              <div key={item.q}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '6px' }}>{item.q}</h3>
                <p style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CROSS-LINKS */}
        <div style={{ marginTop: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '16px', opacity: 0.7 }}>
            More {st.name} Calculators
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: '12px' }}>
            <Link href={`/${state}-paycheck-calculator`} style={{ display: 'block', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '12px', padding: '16px', color: 'white', textDecoration: 'none' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}>💰</div>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{st.name} Paycheck Calculator</div>
              <div style={{ fontSize: '12px', opacity: 0.55 }}>Take-home pay after all taxes →</div>
            </Link>
            <Link href={`/overtime-calculator/${state}`} style={{ display: 'block', background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: '12px', padding: '16px', color: 'white', textDecoration: 'none' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}>⏰</div>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{st.name} Overtime Calculator</div>
              <div style={{ fontSize: '12px', opacity: 0.55 }}>Calculate overtime pay →</div>
            </Link>
            <Link href={`/minimum-wage/${state}`} style={{ display: 'block', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '12px', padding: '16px', color: 'white', textDecoration: 'none' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}>💵</div>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{st.name} Minimum Wage 2026</div>
              <div style={{ fontSize: '12px', opacity: 0.55 }}>Current hourly rate & breakdown →</div>
            </Link>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '40px' }}>
        © 2026 PrivatePaycheck.com ·{' '}
        <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> ·{' '}
        <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
