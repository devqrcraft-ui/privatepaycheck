import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nurse Paycheck Calculator 2026 — RN Take-Home Pay by State',
  description: 'Calculate your real nurse take-home pay after taxes in all 51 states. See biweekly and monthly net pay for RNs in 2026. Free, no signup, instant results.',
  alternates: { canonical: 'https://www.privatepaycheck.com/nurse-paycheck-calculator' },
};

const STATES = [
  { slug: 'alabama', name: 'Alabama' },
  { slug: 'alaska', name: 'Alaska' },
  { slug: 'arizona', name: 'Arizona' },
  { slug: 'arkansas', name: 'Arkansas' },
  { slug: 'california', name: 'California' },
  { slug: 'colorado', name: 'Colorado' },
  { slug: 'connecticut', name: 'Connecticut' },
  { slug: 'delaware', name: 'Delaware' },
  { slug: 'florida', name: 'Florida' },
  { slug: 'georgia', name: 'Georgia' },
  { slug: 'hawaii', name: 'Hawaii' },
  { slug: 'idaho', name: 'Idaho' },
  { slug: 'illinois', name: 'Illinois' },
  { slug: 'indiana', name: 'Indiana' },
  { slug: 'iowa', name: 'Iowa' },
  { slug: 'kansas', name: 'Kansas' },
  { slug: 'kentucky', name: 'Kentucky' },
  { slug: 'louisiana', name: 'Louisiana' },
  { slug: 'maine', name: 'Maine' },
  { slug: 'maryland', name: 'Maryland' },
  { slug: 'massachusetts', name: 'Massachusetts' },
  { slug: 'michigan', name: 'Michigan' },
  { slug: 'minnesota', name: 'Minnesota' },
  { slug: 'mississippi', name: 'Mississippi' },
  { slug: 'missouri', name: 'Missouri' },
  { slug: 'montana', name: 'Montana' },
  { slug: 'nebraska', name: 'Nebraska' },
  { slug: 'nevada', name: 'Nevada' },
  { slug: 'new-hampshire', name: 'New Hampshire' },
  { slug: 'new-jersey', name: 'New Jersey' },
  { slug: 'new-mexico', name: 'New Mexico' },
  { slug: 'new-york', name: 'New York' },
  { slug: 'north-carolina', name: 'North Carolina' },
  { slug: 'north-dakota', name: 'North Dakota' },
  { slug: 'ohio', name: 'Ohio' },
  { slug: 'oklahoma', name: 'Oklahoma' },
  { slug: 'oregon', name: 'Oregon' },
  { slug: 'pennsylvania', name: 'Pennsylvania' },
  { slug: 'rhode-island', name: 'Rhode Island' },
  { slug: 'south-carolina', name: 'South Carolina' },
  { slug: 'south-dakota', name: 'South Dakota' },
  { slug: 'tennessee', name: 'Tennessee' },
  { slug: 'texas', name: 'Texas' },
  { slug: 'utah', name: 'Utah' },
  { slug: 'vermont', name: 'Vermont' },
  { slug: 'virginia', name: 'Virginia' },
  { slug: 'washington', name: 'Washington' },
  { slug: 'washington-dc', name: 'Washington DC' },
  { slug: 'west-virginia', name: 'West Virginia' },
  { slug: 'wisconsin', name: 'Wisconsin' },
  { slug: 'wyoming', name: 'Wyoming' },
];

const NO_TAX = new Set(['alaska','florida','nevada','new-hampshire','south-dakota','tennessee','texas','washington','wyoming']);

export default function NursePaycheckHub() {
  return (
    <main style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>
          <span style={{ color: '#4ade80' }}>$</span> PrivatePaycheck
        </Link>
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>
          <Link href="/teacher-paycheck-calculator" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Teacher</Link>
          <Link href="/unemployment-calculator" style={{ color: '#6ee7b7', textDecoration: 'none' }}>Unemployment</Link>
          <Link href="/overtime-calculator" style={{ color: '#fbbf24', textDecoration: 'none' }}>Overtime</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 16px' }}>

        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '24px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          {' > '}
          <span>Nurse Paycheck Calculator</span>
        </div>

        <h1 style={{ fontSize: 'clamp(22px,4vw,42px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>
          Nurse Paycheck Calculator 2026
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.75, maxWidth: '680px', marginBottom: '12px' }}>
          See your real RN take-home pay after federal tax, FICA, and state income tax — for all 51 states.
          Select your state below to get an instant breakdown with biweekly and monthly net pay.
        </p>
        <p style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.55, maxWidth: '680px', marginBottom: '36px' }}>
          All calculations use 2026 IRS tax brackets and run entirely in your browser. No account, no signup.
        </p>

        <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>
          Select Your State
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '10px', marginBottom: '48px' }}>
          {STATES.map(s => (
            <Link
              key={s.slug}
              href={`/nurse-paycheck-calculator/${s.slug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                padding: '12px 16px',
                color: 'white',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 600,
                transition: 'background 0.15s',
              }}
            >
              <span>{s.name}</span>
              {NO_TAX.has(s.slug) && (
                <span style={{ fontSize: '10px', background: 'rgba(74,222,128,0.15)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '4px', padding: '2px 6px', fontWeight: 700 }}>
                  No Tax
                </span>
              )}
            </Link>
          ))}
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '14px' }}>
          How This Calculator Works
        </h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.7, marginBottom: '12px' }}>
          Enter your state to see pre-calculated take-home pay examples for entry-level, median, and senior RN salaries.
          The calculator applies 2026 federal income tax brackets, 7.65% FICA (Social Security + Medicare), and your state income tax rate.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.7, marginBottom: '32px' }}>
          For a personalized result — including your 401(k) contributions, health insurance premiums, filing status, and pay frequency —
          use the full <Link href="/" style={{ color: '#4ade80' }}>PrivatePaycheck calculator</Link>.
        </p>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '14px' }}>
          Highest-Paying States for Nurses in 2026
        </h2>
        <div style={{ overflowX: 'auto', marginBottom: '36px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                {['State', 'Median RN Salary', 'State Tax', 'Est. Annual Net'].map(h => (
                  <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.5, fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { state: 'California', slug: 'california', median: '$130,000', tax: '9.3%', net: '~$89,000' },
                { state: 'Washington', slug: 'washington', median: '$98,000', tax: 'None', net: '~$76,000' },
                { state: 'Oregon', slug: 'oregon', median: '$98,000', tax: '9.9%', net: '~$71,000' },
                { state: 'Massachusetts', slug: 'massachusetts', median: '$98,000', tax: '5.0%', net: '~$73,000' },
                { state: 'New York', slug: 'new-york', median: '$98,000', tax: '10.9%', net: '~$70,000' },
                { state: 'Hawaii', slug: 'hawaii', median: '$106,000', tax: '11.0%', net: '~$74,000' },
                { state: 'Nevada', slug: 'nevada', median: '$90,000', tax: 'None', net: '~$70,000' },
                { state: 'Alaska', slug: 'alaska', median: '$95,000', tax: 'None', net: '~$74,000' },
              ].map((r, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '12px' }}>
                    <Link href={`/nurse-paycheck-calculator/${r.slug}`} style={{ color: '#7dd3fc', textDecoration: 'none', fontWeight: 600 }}>{r.state}</Link>
                  </td>
                  <td style={{ padding: '12px', color: '#4ade80', fontWeight: 700 }}>{r.median}</td>
                  <td style={{ padding: '12px', opacity: 0.7 }}>{r.tax}</td>
                  <td style={{ padding: '12px', opacity: 0.8 }}>{r.net}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>
          Nurse Paycheck FAQ
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
          {[
            { q: 'What is the average nurse take-home pay in the US?', a: 'The median RN salary in the US is approximately $81,000/year in 2026. After federal tax, FICA, and average state tax, most nurses take home between $58,000 and $68,000/year depending on their state.' },
            { q: 'Which states are best for nurses after taxes?', a: 'No-income-tax states like Washington, Texas, Nevada, and Alaska offer the highest net pay for nurses. Washington RNs earning $98,000 keep approximately $76,000 after taxes — significantly more than nurses in California or New York at similar salaries.' },
            { q: 'Do travel nurses pay taxes differently?', a: 'Travel nurses receive a base taxable wage plus non-taxable stipends for housing and meals. Only the base wage is subject to federal and state income tax and FICA. Stipends are tax-free when you maintain a tax home.' },
            { q: 'How does filing status affect my nurse paycheck?', a: 'Married filing jointly uses wider tax brackets, often moving RNs from the 22% to the 12% bracket on a portion of income. This can increase annual take-home by $2,000 to $5,000 compared to filing single.' },
          ].map(item => (
            <div key={item.q} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '18px 20px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: '#7dd3fc' }}>{item.q}</h3>
              <p style={{ fontSize: '13px', opacity: 0.75, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '14px', opacity: 0.7 }}>
          Related Calculators
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: '10px', marginBottom: '40px' }}>
          {[
            { label: 'Teacher Paycheck Calculator', href: '/teacher-paycheck-calculator', color: 'rgba(74,222,128,0.1)', border: 'rgba(74,222,128,0.25)' },
            { label: 'Unemployment Calculator', href: '/unemployment-calculator', color: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.25)' },
            { label: 'Bonus Tax Calculator', href: '/bonus-tax-calculator', color: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.25)' },
            { label: 'Overtime Calculator', href: '/overtime-calculator', color: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.25)' },
            { label: '1099 Paycheck Calculator', href: '/1099-paycheck-calculator', color: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ display: 'block', background: l.color, border: `1px solid ${l.border}`, borderRadius: '10px', padding: '14px 16px', color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
              {l.label}
            </Link>
          ))}
        </div>

        <p style={{ fontSize: '11px', opacity: 0.35, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
          Disclaimer: All figures are estimates based on 2026 IRS tax brackets, standard deduction, and filing single. Actual take-home depends on W-4 withholding, pre-tax deductions, local taxes, and employer benefits. Not financial or tax advice.
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
