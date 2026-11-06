import type { Metadata } from 'next';
import Link from 'next/link';
import { STATE_TAXES, STATE_SLUG_MAP, STATE_MIN_WAGE } from '@/lib/taxRates2026';
import LinkCardGrid from '@/components/LinkCardGrid'


export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(STATE_SLUG_MAP).map(s => ({ state: s }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const code = STATE_SLUG_MAP[state];
  const st = STATE_TAXES[code];
  if (!st) return { title: 'Minimum Wage' };
  return {
    title: `${st.name} Minimum Wage 2026: $${STATE_MIN_WAGE[code]?.hourly ?? 7.25}/hr`,
    description: `See the listed ${st.name} minimum wage for 2026 and gross earnings at common work schedules. Use a separate paycheck calculator for a modeled take-home estimate.`,
    openGraph: {
      title: `${st.name} Minimum Wage 2026`,
      description: `See the listed 2026 minimum wage and illustrative gross earnings for ${st.name}.`,
      url: `https://www.privatepaycheck.com/minimum-wage/${state}`,
      siteName: 'PrivatePaycheck',
      type: 'website',
    },
    alternates: { canonical: `https://www.privatepaycheck.com/minimum-wage/${state}` },
  };
}

const FEDERAL_MIN_WAGE = 7.25;


export default async function MinWagePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const code = STATE_SLUG_MAP[state];
  const st = STATE_TAXES[code];
  if (!st) return <div>Not found</div>;
  const mw = STATE_MIN_WAGE[code] || { hourly: 7.25, tipped: 2.13 };

  const annualFT = Math.round(mw.hourly * 2080);
  const monthlyFT = Math.round(annualFT / 12);
  const weeklyFT = Math.round(mw.hourly * 40);
  const aboveFederal = mw.hourly > FEDERAL_MIN_WAGE;

  return (
    <>
      <main style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `${st.name} Minimum Wage 2026`,
        url: `https://www.privatepaycheck.com/minimum-wage/${state}`,
        description: `${st.name} minimum wage 2026: ${mw.hourly}/hr · ${annualFT.toLocaleString()}/year full-time. See monthly, weekly & tipped rates instantly.`,
        mainEntity: {
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: `What is the minimum wage in ${st.name} in 2026?`, acceptedAnswer: { '@type': 'Answer', text: `The minimum wage in ${st.name} is ${mw.hourly}/hour in 2026. Working full-time (40 hrs/week, 52 weeks), that equals ${annualFT.toLocaleString()}/year before taxes.` } },
            { '@type': 'Question', name: `What is the tipped minimum wage in ${st.name}?`, acceptedAnswer: { '@type': 'Answer', text: mw.tipped === mw.hourly ? `${st.name} has no separate tipped minimum wage — all workers receive ${mw.hourly}/hour.` : `The tipped minimum wage in ${st.name} is ${mw.tipped}/hour. Employers must ensure total earnings (tips + wages) reach ${mw.hourly}/hour.` } },
          ],
        },
      })}} />

      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>
          <span style={{ color: '#4ade80' }}>$</span> PrivatePaycheck
        </Link>
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>
          <Link href="/overtime-calculator" style={{ color: '#fbbf24', textDecoration: 'none' }}>Overtime</Link>
          <Link href="/unemployment-calculator" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Unemployment</Link>
          <Link href="/minimum-wage" style={{ color: '#6ee7b7', textDecoration: 'none', fontWeight: 700 }}>← All States</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 16px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '13px', opacity: 0.8, marginBottom: '24px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          {' › '}
          <Link href="/minimum-wage" style={{ color: 'inherit', textDecoration: 'none' }}>Minimum Wage</Link>
          {' › '}
          <span>{st.name}</span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          {aboveFederal && (
            <div style={{ display: 'inline-block', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', marginBottom: '16px', color: '#4ade80' }}>
               Above federal minimum wage of ${FEDERAL_MIN_WAGE}
            </div>
          )}
          <h1 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, margin: '0 0 12px' }}>
            {st.name} Minimum Wage 2026
          </h1>
          <div style={{ fontSize: 'clamp(40px,8vw,72px)', fontWeight: 900, color: '#4ade80', lineHeight: 1 }}>
            ${mw.hourly}/hr
          </div>
          {mw.notes && <p style={{ fontSize: '14px', opacity: 0.6, maxWidth: '500px', margin: '12px auto 0', lineHeight: 1.6 }}>{mw.notes}</p>}
          {mw.scheduled && <p style={{ fontSize: '13px', color: '#fbbf24', marginTop: '8px' }}> {mw.scheduled}</p>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: '14px', marginBottom: '32px' }}>
          {[
            { label: 'Per Hour', value: `${mw.hourly}`, color: '#4ade80' },
            { label: 'Per Day (8h)', value: `${(mw.hourly * 8).toFixed(2)}`, color: '#818cf8' },
            { label: 'Per Week (40h)', value: `${weeklyFT}`, color: '#fbbf24' },
            { label: 'Per Month', value: `${monthlyFT.toLocaleString()}`, color: '#fb923c' },
            { label: 'Per Year (FT)', value: `${annualFT.toLocaleString()}`, color: '#f87171' },
          ].map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '11px', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>{s.label}</div>
              <div style={{ fontWeight: 800, fontSize: '18px', color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>

        {mw.tipped !== mw.hourly && mw.tipped && (
          <div style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
            <h3 style={{ fontWeight: 700, marginBottom: '8px', color: '#fbbf24' }}> Tipped Minimum Wage: ${mw.tipped}/hour</h3>
            <p style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.6, margin: 0 }}>
              Tipped employees in {st.name} can be paid ${mw.tipped}/hour, but total earnings including tips must reach ${mw.hourly}/hour. If tips don't cover the difference, the employer must make up the gap.
            </p>
          </div>
        )}

        {/* FAQ */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '20px' }}>{st.name} Minimum Wage FAQ 2026</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { q: `What is the minimum wage in ${st.name} in 2026?`, a: `The ${st.name} minimum wage is ${mw.hourly}/hour in 2026. This applies to most employees. Working full-time (2,080 hours/year), a minimum wage worker earns ${annualFT.toLocaleString()}/year before taxes.` },
              { q: `How much is ${st.name} minimum wage per year?`, a: `At ${mw.hourly}/hour, a full-time worker (40 hrs/week, 52 weeks) earns ${annualFT.toLocaleString()}/year gross before taxes. A state paycheck calculator can provide a separate estimate, but actual withholding and take-home pay depend on filing status, deductions, and individual circumstances.` },
              { q: `Is ${st.name} minimum wage above federal minimum wage?`, a: aboveFederal ? `Yes — ${st.name}'s minimum wage of ${mw.hourly}/hour is above the federal minimum of ${FEDERAL_MIN_WAGE}/hour. The higher state rate applies.` : `${st.name} follows the federal minimum wage of ${FEDERAL_MIN_WAGE}/hour. State and federal minimums are the same.` },
              { q: 'Who is exempt from minimum wage laws?', a: 'Some workers are exempt including certain farm workers, outside salespeople, and some apprentices/students. Tipped employees can be paid a lower direct wage if tips bring total compensation to minimum wage.' },
            ].map(item => (
              <div key={item.q}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '6px' }}>{item.q}</h3>
                <p style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CROSS-LINKS */}
        <div style={{ marginTop: '8px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '16px', opacity: 0.7 }}>
            More {st.name} Calculators
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: '12px' }}>
            <Link href={`/${state}-paycheck-calculator`} style={{ display: 'block', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '12px', padding: '16px', color: 'white', textDecoration: 'none' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}></div>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{st.name} Paycheck Calculator</div>
              <div style={{ fontSize: '12px', opacity: 0.55 }}>Take-home pay after all taxes →</div>
            </Link>
            <Link href={`/overtime-calculator/${state}`} style={{ display: 'block', background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: '12px', padding: '16px', color: 'white', textDecoration: 'none' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}></div>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{st.name} Overtime Calculator</div>
              <div style={{ fontSize: '12px', opacity: 0.55 }}>Calculate overtime pay →</div>
            </Link>
            <Link href={`/unemployment-calculator/${state}`} style={{ display: 'block', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px', padding: '16px', color: 'white', textDecoration: 'none' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}></div>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{st.name} Unemployment Calculator</div>
              <div style={{ fontSize: '12px', opacity: 0.55 }}>Estimate weekly benefits →</div>
            </Link>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.8, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '40px' }}>
        © 2026 PrivatePaycheck.com ·{' '}
        <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> ·{' '}
        <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
      <div style={{ margin:'40px 0 0', padding:'28px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'16px' }}>
        <LinkCardGrid title="Related Calculators" minCardWidth={130} links={[[`/${state}-paycheck-calculator`,'Paycheck Calculator'],[`/hourly-paycheck-calculator/${state}`,'Hourly Paycheck'],[`/overtime-calculator/${state}`,'Overtime Pay'],[`/bonus-tax-calculator/${state}`,'Bonus Tax'],[`/unemployment-calculator/${state}`,'Unemployment']]} />
      </div>
</footer>
    </main>
    </>
  );
}
