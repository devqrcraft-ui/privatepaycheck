import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Software Engineer Paycheck Calculator 2026 — Take-Home Pay by State',
  description: 'Calculate your real software engineer take-home pay after federal tax, FICA, and state tax. All 51 states. Includes RSU and bonus tax guidance. Free, no signup.',
  alternates: { canonical: 'https://www.privatepaycheck.com/software-engineer-paycheck-calculator' },
  robots: 'noindex',
};

const STATES = [
  { slug: 'alabama', name: 'Alabama' },{ slug: 'alaska', name: 'Alaska' },{ slug: 'arizona', name: 'Arizona' },
  { slug: 'arkansas', name: 'Arkansas' },{ slug: 'california', name: 'California' },{ slug: 'colorado', name: 'Colorado' },
  { slug: 'connecticut', name: 'Connecticut' },{ slug: 'delaware', name: 'Delaware' },{ slug: 'florida', name: 'Florida' },
  { slug: 'georgia', name: 'Georgia' },{ slug: 'hawaii', name: 'Hawaii' },{ slug: 'idaho', name: 'Idaho' },
  { slug: 'illinois', name: 'Illinois' },{ slug: 'indiana', name: 'Indiana' },{ slug: 'iowa', name: 'Iowa' },
  { slug: 'kansas', name: 'Kansas' },{ slug: 'kentucky', name: 'Kentucky' },{ slug: 'louisiana', name: 'Louisiana' },
  { slug: 'maine', name: 'Maine' },{ slug: 'maryland', name: 'Maryland' },{ slug: 'massachusetts', name: 'Massachusetts' },
  { slug: 'michigan', name: 'Michigan' },{ slug: 'minnesota', name: 'Minnesota' },{ slug: 'mississippi', name: 'Mississippi' },
  { slug: 'missouri', name: 'Missouri' },{ slug: 'montana', name: 'Montana' },{ slug: 'nebraska', name: 'Nebraska' },
  { slug: 'nevada', name: 'Nevada' },{ slug: 'new-hampshire', name: 'New Hampshire' },{ slug: 'new-jersey', name: 'New Jersey' },
  { slug: 'new-mexico', name: 'New Mexico' },{ slug: 'new-york', name: 'New York' },{ slug: 'north-carolina', name: 'North Carolina' },
  { slug: 'north-dakota', name: 'North Dakota' },{ slug: 'ohio', name: 'Ohio' },{ slug: 'oklahoma', name: 'Oklahoma' },
  { slug: 'oregon', name: 'Oregon' },{ slug: 'pennsylvania', name: 'Pennsylvania' },{ slug: 'rhode-island', name: 'Rhode Island' },
  { slug: 'south-carolina', name: 'South Carolina' },{ slug: 'south-dakota', name: 'South Dakota' },{ slug: 'tennessee', name: 'Tennessee' },
  { slug: 'texas', name: 'Texas' },{ slug: 'utah', name: 'Utah' },{ slug: 'vermont', name: 'Vermont' },
  { slug: 'virginia', name: 'Virginia' },{ slug: 'washington', name: 'Washington' },{ slug: 'washington-dc', name: 'Washington DC' },
  { slug: 'west-virginia', name: 'West Virginia' },{ slug: 'wisconsin', name: 'Wisconsin' },{ slug: 'wyoming', name: 'Wyoming' },
];

const NO_TAX = new Set(['alaska','florida','nevada','new-hampshire','south-dakota','tennessee','texas','washington','wyoming']);

export default function SWEHub() {
  return (
    <main style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>
          <span style={{ color: '#4ade80' }}>$</span> PrivatePaycheck
        </Link>
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>
          <Link href="/nurse-paycheck-calculator" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Nurse</Link>
          <Link href="/bonus-tax-calculator" style={{ color: '#fbbf24', textDecoration: 'none' }}>Bonus Tax</Link>
          <Link href="/unemployment-calculator" style={{ color: '#6ee7b7', textDecoration: 'none' }}>Unemployment</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 16px' }}>

        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '24px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          {' > '}
          <span>Software Engineer Paycheck Calculator</span>
        </div>

        <h1 style={{ fontSize: 'clamp(22px,4vw,42px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>
          Software Engineer Paycheck Calculator 2026
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.75, maxWidth: '680px', marginBottom: '12px' }}>
          See your real take-home pay as a software engineer — junior, mid-level, or senior — after federal tax, FICA, and state income tax.
          Select your state for an instant breakdown including biweekly and monthly net pay.
        </p>
        <p style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.55, maxWidth: '680px', marginBottom: '36px' }}>
          Covers base salary. RSU and bonus tax calculated separately in the full calculator.
          All 2026 IRS brackets. Runs in your browser, no signup required.
        </p>

        <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>Select Your State</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '10px', marginBottom: '48px' }}>
          {STATES.map(s => (
            <Link key={s.slug} href={`/software-engineer-paycheck-calculator/${s.slug}`}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '12px 16px', color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
              <span>{s.name}</span>
              {NO_TAX.has(s.slug) && (
                <span style={{ fontSize: '10px', background: 'rgba(74,222,128,0.15)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '4px', padding: '2px 6px', fontWeight: 700 }}>No Tax</span>
              )}
            </Link>
          ))}
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '14px' }}>Top Tech States: Salary vs. Take-Home</h2>
        <div style={{ overflowX: 'auto', marginBottom: '36px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                {['State', 'Median Base', 'State Tax', 'Est. Annual Net'].map(h => (
                  <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.5, fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { state: 'Washington', slug: 'washington', median: '$160,000', tax: 'None', net: '~$115,000' },
                { state: 'California', slug: 'california', median: '$175,000', tax: '9.3%', net: '~$115,000' },
                { state: 'Texas', slug: 'texas', median: '$130,000', tax: 'None', net: '~$96,000' },
                { state: 'New York', slug: 'new-york', median: '$155,000', tax: '10.9%', net: '~$100,000' },
                { state: 'Massachusetts', slug: 'massachusetts', median: '$145,000', tax: '5.0%', net: '~$103,000' },
                { state: 'Florida', slug: 'florida', median: '$115,000', tax: 'None', net: '~$85,000' },
                { state: 'Colorado', slug: 'colorado', median: '$135,000', tax: '4.4%', net: '~$97,000' },
                { state: 'Virginia', slug: 'virginia', median: '$125,000', tax: '5.75%', net: '~$89,000' },
              ].map((r, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '12px' }}><Link href={`/software-engineer-paycheck-calculator/${r.slug}`} style={{ color: '#7dd3fc', textDecoration: 'none', fontWeight: 600 }}>{r.state}</Link></td>
                  <td style={{ padding: '12px', color: '#4ade80', fontWeight: 700 }}>{r.median}</td>
                  <td style={{ padding: '12px', opacity: 0.7 }}>{r.tax}</td>
                  <td style={{ padding: '12px', opacity: 0.8 }}>{r.net}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>Software Engineer Paycheck FAQ</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
          {[
            { q: 'What percentage of my software engineer salary goes to taxes?', a: 'At a $120,000 base salary in a state with average tax rates, total taxes (federal, state, FICA) typically consume 28-34% of gross income. In no-income-tax states like Texas or Washington, total effective tax rate is around 24-27%.' },
            { q: 'How much does a $200k software engineer salary take home?', a: 'A $200,000 salary in Texas (no state tax) yields approximately $140,000/year net. The same salary in California yields approximately $127,000 after 9.3% state tax, federal taxes, and FICA. In New York City, combined taxes can reduce take-home to under $120,000.' },
            { q: 'Should I negotiate salary or equity as a software engineer?', a: 'Both matter — but their tax treatment differs. Base salary is taxed as ordinary income every paycheck. RSUs are taxed when they vest, also as ordinary income. NQSOs are taxed at exercise. ISOs may qualify for capital gains treatment if held long enough. Max your 401(k) before year-end to offset RSU income.' },
            { q: 'How does remote work affect my taxes as a software engineer?', a: 'If you work remotely for a company in another state, you generally owe taxes in the state where you physically work — not where your employer is based. Moving from California to Texas or Florida can save $10,000-$20,000+/year at higher income levels.' },
          ].map(item => (
            <div key={item.q} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '18px 20px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: '#7dd3fc' }}>{item.q}</h3>
              <p style={{ fontSize: '13px', opacity: 0.75, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '14px', opacity: 0.7 }}>Related Calculators</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: '10px', marginBottom: '40px' }}>
          {[
            { label: 'Bonus Tax Calculator', href: '/bonus-tax-calculator', color: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.25)' },
            { label: 'Nurse Paycheck Calculator', href: '/nurse-paycheck-calculator', color: 'rgba(74,222,128,0.1)', border: 'rgba(74,222,128,0.25)' },
            { label: 'Teacher Paycheck Calculator', href: '/teacher-paycheck-calculator', color: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.25)' },
            { label: 'Overtime Calculator', href: '/overtime-calculator', color: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.25)' },
            { label: '1099 Paycheck Calculator', href: '/1099-paycheck-calculator', color: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ display: 'block', background: l.color, border: `1px solid ${l.border}`, borderRadius: '10px', padding: '14px 16px', color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
              {l.label}
            </Link>
          ))}
        </div>

        <p style={{ fontSize: '11px', opacity: 0.35, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
          Disclaimer: All figures are estimates. Based on 2026 IRS tax brackets, standard deduction, filing single, base salary only. RSUs, bonuses, and local taxes not included. Not financial or tax advice.
        </p>
      </div>

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '20px' }}>
        © 2026 PrivatePaycheck.com
        {' · '}
        <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link>
        {' · '}
        <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
