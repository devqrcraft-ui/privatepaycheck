import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { STATE_TAXES, STATE_SLUG_MAP } from '@/lib/taxRates2026';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(STATE_SLUG_MAP).map(s => ({ state: s }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const code = STATE_SLUG_MAP[state];
  const st = STATE_TAXES[code];
  if (!st) return { title: 'Nurse Paycheck Calculator' };
  const noTax = st.noTax;
  return {
    title: noTax
      ? `Nurse Paycheck Calculator ${st.name} 2026 — No State Tax, Higher Take-Home`
      : `Nurse Paycheck Calculator ${st.name} 2026 — Net Pay After ${(st.rate * 100).toFixed(1)}% State Tax`,
    description: noTax
      ? `Calculate your real nurse take-home pay in ${st.name} 2026. No state income tax — only federal + FICA. See biweekly and monthly net pay instantly. No signup.`
      : `Free nurse paycheck calculator for ${st.name} 2026. See exact take-home after ${(st.rate * 100).toFixed(1)}% state tax, federal tax, and FICA. Biweekly and monthly breakdown.`,
    alternates: { canonical: `https://www.privatepaycheck.com/nurse-paycheck-calculator/${state}` },
  };
}

const NURSE_SALARY: Record<string, { median: number; low: number; high: number; unionNote?: string }> = {
  al: { median: 62000, low: 52000, high: 78000 },
  ak: { median: 95000, low: 78000, high: 115000 },
  az: { median: 80000, low: 65000, high: 98000 },
  ar: { median: 60000, low: 50000, high: 74000 },
  ca: { median: 130000, low: 105000, high: 160000, unionNote: 'California RNs are protected by strong union contracts; many earn 20-30% above median.' },
  co: { median: 82000, low: 67000, high: 100000 },
  ct: { median: 90000, low: 74000, high: 110000 },
  de: { median: 78000, low: 64000, high: 95000 },
  fl: { median: 72000, low: 58000, high: 90000 },
  ga: { median: 70000, low: 58000, high: 88000 },
  hi: { median: 106000, low: 88000, high: 128000 },
  id: { median: 68000, low: 56000, high: 84000 },
  il: { median: 78000, low: 63000, high: 96000 },
  in: { median: 68000, low: 56000, high: 84000 },
  ia: { median: 64000, low: 53000, high: 78000 },
  ks: { median: 62000, low: 52000, high: 76000 },
  ky: { median: 64000, low: 53000, high: 80000 },
  la: { median: 65000, low: 54000, high: 80000 },
  me: { median: 72000, low: 59000, high: 88000 },
  md: { median: 84000, low: 69000, high: 104000 },
  ma: { median: 98000, low: 80000, high: 120000 },
  mi: { median: 72000, low: 59000, high: 90000 },
  mn: { median: 82000, low: 67000, high: 102000 },
  ms: { median: 58000, low: 48000, high: 72000 },
  mo: { median: 64000, low: 53000, high: 80000 },
  mt: { median: 70000, low: 57000, high: 86000 },
  ne: { median: 66000, low: 54000, high: 82000 },
  nv: { median: 90000, low: 74000, high: 110000 },
  nh: { median: 78000, low: 64000, high: 96000 },
  nj: { median: 94000, low: 77000, high: 116000 },
  nm: { median: 72000, low: 59000, high: 90000 },
  ny: { median: 98000, low: 80000, high: 122000, unionNote: 'NYC-area hospital nurses often earn $110,000-$140,000 with union differentials.' },
  nc: { median: 70000, low: 58000, high: 88000 },
  nd: { median: 66000, low: 54000, high: 82000 },
  oh: { median: 68000, low: 56000, high: 86000 },
  ok: { median: 62000, low: 51000, high: 78000 },
  or: { median: 98000, low: 80000, high: 120000 },
  pa: { median: 74000, low: 61000, high: 92000 },
  ri: { median: 82000, low: 67000, high: 102000 },
  sc: { median: 64000, low: 53000, high: 80000 },
  sd: { median: 60000, low: 50000, high: 74000 },
  tn: { median: 64000, low: 53000, high: 80000 },
  tx: { median: 78000, low: 63000, high: 98000 },
  ut: { median: 72000, low: 59000, high: 90000 },
  vt: { median: 74000, low: 61000, high: 92000 },
  va: { median: 76000, low: 62000, high: 96000 },
  wa: { median: 98000, low: 80000, high: 122000 },
  wv: { median: 60000, low: 50000, high: 74000 },
  wi: { median: 70000, low: 57000, high: 88000 },
  wy: { median: 68000, low: 56000, high: 84000 },
  dc: { median: 98000, low: 80000, high: 122000 },
};

function calcNet(gross: number, stateTaxRate: number): { annual: number; monthly: number; biweekly: number } {
  const taxable = Math.max(0, gross - 15000);
  const brackets = [
    { min: 0, max: 11925, rate: 0.10 },
    { min: 11925, max: 48475, rate: 0.12 },
    { min: 48475, max: 103350, rate: 0.22 },
    { min: 103350, max: 197300, rate: 0.24 },
    { min: 197300, max: Infinity, rate: 0.32 },
  ];
  let federal = 0;
  for (const b of brackets) {
    if (taxable <= b.min) break;
    federal += (Math.min(taxable, b.max) - b.min) * b.rate;
  }
  const fica = gross * 0.0765;
  const state = gross * stateTaxRate;
  const annual = Math.round(gross - federal - fica - state);
  return { annual, monthly: Math.round(annual / 12), biweekly: Math.round(annual / 26) };
}

export default async function Page({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const code = STATE_SLUG_MAP[state];
  const st = STATE_TAXES[code];
  if (!st) notFound();

  const ns = NURSE_SALARY[code] || { median: 72000, low: 58000, high: 90000 };
  const noTax = !!st.noTax;
  const stateRate = st.rate;

  const examples = [
    { label: 'Entry-Level RN', gross: ns.low },
    { label: 'Median RN', gross: ns.median },
    { label: 'Senior / ICU RN', gross: ns.high },
  ].map(e => ({ ...e, ...calcNet(e.gross, stateRate) }));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much do nurses take home after taxes in ${st.name} in 2026?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `A median RN in ${st.name} earning $${ns.median.toLocaleString()} takes home approximately $${examples[1].annual.toLocaleString()}/year ($${examples[1].biweekly.toLocaleString()} biweekly) after federal tax, FICA${noTax ? '.' : ` and ${(stateRate * 100).toFixed(1)}% ${st.name} state income tax.`}`,
        },
      },
      {
        '@type': 'Question',
        name: `What is the average nurse salary in ${st.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The median registered nurse salary in ${st.name} is approximately $${ns.median.toLocaleString()}/year in 2026, ranging from $${ns.low.toLocaleString()} for entry-level RNs to $${ns.high.toLocaleString()} for senior or specialty nurses.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Do nurses pay Social Security and Medicare taxes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Most hospital-employed nurses pay 6.2% Social Security and 1.45% Medicare (FICA) on their full salary. Travel nurses on agency contracts also pay FICA on taxable wages.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do 401(k) contributions affect my nurse paycheck?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pre-tax 401(k) contributions reduce your federal and state taxable income dollar-for-dollar. A nurse contributing 6% of an $80,000 salary saves approximately $1,056 in federal taxes annually at the 22% bracket.',
        },
      },
      {
        '@type': 'Question',
        name: `Does ${st.name} tax nurse income?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: noTax
            ? `${st.name} has no state income tax. Nurses keep more of their paycheck compared to high-tax states — only federal income tax and FICA apply.`
            : `Yes. ${st.name} taxes nurse income at ${(stateRate * 100).toFixed(1)}%. On a median salary this reduces annual take-home by approximately $${Math.round(ns.median * stateRate).toLocaleString()}.`,
        },
      },
    ],
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${st.name} Nurse Paycheck Calculator 2026`,
    url: `https://www.privatepaycheck.com/nurse-paycheck-calculator/${state}`,
    description: `Calculate real nurse take-home pay in ${st.name} after all taxes. 2026 IRS brackets.`,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <main style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>
          <span style={{ color: '#4ade80' }}>$</span> PrivatePaycheck
        </Link>
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>
          <Link href="/nurse-paycheck-calculator" style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: 700 }}>All States</Link>
          <Link href="/teacher-paycheck-calculator" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Teacher</Link>
          <Link href="/unemployment-calculator" style={{ color: '#6ee7b7', textDecoration: 'none' }}>Unemployment</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 16px' }}>

        <div style={{ fontSize: '13px', opacity: 0.8, marginBottom: '24px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          {' > '}
          <Link href="/nurse-paycheck-calculator" style={{ color: 'inherit', textDecoration: 'none' }}>Nurse Paycheck Calculator</Link>
          {' > '}
          <span>{st.name}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(22px,4vw,40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>
          Nurse Paycheck Calculator — {st.name} 2026
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.7, opacity: 0.75, maxWidth: '680px', marginBottom: '32px' }}>
          Calculate your real RN take-home pay in {st.name} after federal tax, FICA
          {noTax ? '. ' : `, and ${(stateRate * 100).toFixed(1)}% ${st.name} state income tax. `}
          All calculations happen in your browser — no account required.
          {ns.unionNote && ` ${ns.unionNote}`}
        </p>

        <div style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: '14px', padding: '20px 24px', marginBottom: '36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>Use the Full Paycheck Calculator</div>
            <div style={{ fontSize: '13px', opacity: 0.65 }}>Enter your exact salary, filing status, 401(k), and health insurance deductions</div>
          </div>
          <Link href={`/${state}-paycheck-calculator`} style={{ background: '#4ade80', color: '#091526', borderRadius: '10px', padding: '10px 22px', fontWeight: 800, fontSize: '14px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Calculate My Pay
          </Link>
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
          Example Nurse Paychecks in {st.name} 2026
        </h2>
        <p style={{ fontSize: '14px', opacity: 0.6, marginBottom: '16px' }}>
          Filing single, standard deduction, no pre-tax deductions. Actual pay varies by filing status, benefits, and local taxes.
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '36px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                {['Experience Level', 'Annual Gross', 'Annual Net', 'Monthly Net', 'Biweekly Net'].map(h => (
                  <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.8, fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {examples.map((e, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: i === 1 ? 'rgba(74,222,128,0.05)' : 'transparent' }}>
                  <td style={{ padding: '12px', fontWeight: 600 }}>{e.label}</td>
                  <td style={{ padding: '12px', opacity: 0.8 }}>$${e.gross.toLocaleString()}</td>
                  <td style={{ padding: '12px', color: '#4ade80', fontWeight: 700 }}>$${e.annual.toLocaleString()}</td>
                  <td style={{ padding: '12px' }}>$${e.monthly.toLocaleString()}</td>
                  <td style={{ padding: '12px', color: '#7dd3fc' }}>$${e.biweekly.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
          What Affects Your Nurse Take-Home Pay in {st.name}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '14px', marginBottom: '36px' }}>
          {[
            { title: 'Federal Tax Brackets', desc: 'Most RNs fall in the 22-24% federal bracket. Married filing jointly significantly lowers your rate.' },
            { title: `${st.name} State Tax`, desc: noTax ? `${st.name} has no state income tax — every dollar saved vs. high-tax states goes directly to your paycheck.` : `${st.name} taxes income at ${(stateRate * 100).toFixed(1)}%. On an $80k salary this reduces take-home by approximately $${Math.round(80000 * stateRate).toLocaleString()}/year.` },
            { title: 'Health Insurance', desc: 'Employer-sponsored health plan premiums are pre-tax, reducing your federal and state taxable income.' },
            { title: '401(k) / 403(b)', desc: 'Hospital employers often match 3-6%. Pre-tax contributions lower taxable income by the full contribution amount.' },
            { title: 'Shift Differentials', desc: 'Night, weekend, and holiday differentials are taxable income. Budget an extra 22-24% federal withholding on these.' },
            { title: 'Travel Nurse Stipends', desc: 'Non-taxable housing and meal stipends for travel nurses are not subject to federal or state income tax when properly structured.' },
          ].map(f => (
            <div key={f.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontWeight: 700, fontSize: '13px', marginBottom: '6px' }}>{f.title}</div>
              <div style={{ fontSize: '12px', opacity: 0.65, lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '20px' }}>
          {st.name} Nurse Paycheck FAQ
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
          {faqSchema.mainEntity.map((item: { name: string; acceptedAnswer: { text: string } }) => (
            <div key={item.name} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '18px 20px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: '#7dd3fc' }}>{item.name}</h3>
              <p style={{ fontSize: '13px', opacity: 0.75, lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '14px', opacity: 0.7 }}>
          More {st.name} Calculators
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '10px', marginBottom: '40px' }}>
          {[
            { label: `${st.name} Paycheck Calculator`, href: `/${state}-paycheck-calculator`, color: 'rgba(74,222,128,0.15)', border: 'rgba(74,222,128,0.3)' },
            { label: `${st.name} Unemployment Calculator`, href: `/unemployment-calculator/${state}`, color: 'rgba(99,102,241,0.15)', border: 'rgba(99,102,241,0.3)' },
            { label: `${st.name} Overtime Calculator`, href: `/overtime-calculator/${state}`, color: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.3)' },
            { label: `${st.name} Bonus Tax Calculator`, href: `/bonus-tax-calculator/${state}`, color: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.3)' },
            { label: 'Teacher Paycheck Calculator', href: '/teacher-paycheck-calculator', color: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.3)' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ display: 'block', background: l.color, border: `1px solid ${l.border}`, borderRadius: '10px', padding: '14px 16px', color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
              {l.label}
            </Link>
          ))}
        </div>

        <p style={{ fontSize: '11px', opacity: 0.35, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
          Disclaimer: Estimates only. Based on 2026 IRS tax brackets, standard deduction, filing single. Actual take-home depends on W-4 withholding, pre-tax deductions, local taxes, and other factors. Not financial or tax advice.
        </p>
      </div>

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.8 borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '20px' }}>
        © 2026 PrivatePaycheck.com
        {' · '}
        <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link>
        {' · '}
        <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
