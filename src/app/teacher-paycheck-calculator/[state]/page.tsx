// src/app/teacher-paycheck-calculator/[state]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  STATE_NAMES, STATE_SLUG_TO_CODE, PENSION_RATE, STATE_TAX, calcTeacher,
} from '@/lib/teacherCalc';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(STATE_SLUG_TO_CODE).map(state => ({ state }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const code = STATE_SLUG_TO_CODE[state];
  const name = STATE_NAMES[code];
  if (!name) return { title: 'Teacher Paycheck Calculator' };
  const p = PENSION_RATE[code];
  return {
    title: `${name} Teacher Paycheck Calculator`,
    description: `See ${name} teacher take-home pay 2026 after ${p.system} pension (${(p.rate*100).toFixed(1)}%), federal and state tax. SS Fairness Act 2025 included.`,
    alternates: { canonical: `https://www.privatepaycheck.com/teacher-paycheck-calculator/${state}` },
    authors: [{ name: 'the PrivatePaycheck Team' }],
  };
}

// Источник: NEA "Educator Pay in America" 2024 report — национальные показатели,
// использованы одинаково для всех штатов; штатная разница показывается через
// реальный pension rate и state tax rate (не через выдуманную зарплату по штату).
const BENCHMARK_SALARIES = [
  { label: 'Starting Teacher (NEA national avg)', gross: 44530 },
  { label: 'Average Teacher (NEA national avg)',  gross: 69544 },
] as const;

const CARD = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '20px' };

export default async function Page({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const code = STATE_SLUG_TO_CODE[state];
  const name = STATE_NAMES[code];
  if (!name) notFound();

  const p = PENSION_RATE[code];
  const stateRate = STATE_TAX[code] ?? 0;
  const noTax = stateRate === 0;

  const examples = BENCHMARK_SALARIES.map(e => ({
    ...e,
    ...calcTeacher(e.gross, code, 'single', 0, 40),
  }));

  const faqItems = [
    {
      q: `How much do teachers take home after taxes in ${name} in 2026?`,
      a: `A teacher earning the national average salary of $${examples[1].gross.toLocaleString()} in ${name} takes home approximately $${Math.round(examples[1].takeHome).toLocaleString()}/year ($${Math.round(examples[1].monthlyTakeHome).toLocaleString()}/month) after ${p.system} pension (${(p.rate*100).toFixed(1)}%), federal tax${noTax ? ', and FICA.' : `, ${(stateRate*100).toFixed(1)}% ${name} state tax, and FICA.`}`,
    },
    {
      q: `Do ${name} teachers pay Social Security?`,
      a: p.ss
        ? `Yes. ${name} teachers are covered by Social Security through ${p.system} in addition to their pension, so 6.2% Social Security tax applies alongside 1.45% Medicare.`
        : `No. ${name} teachers are NOT covered by Social Security through ${p.system} — only 1.45% Medicare tax applies, not the 6.2% Social Security portion. Since the SS Fairness Act (Jan 2025) fully repealed WEP/GPO, ${name} teachers with outside SS-covered work now receive their full Social Security benefit from that other work.`,
    },
    {
      q: `What is the ${p.system} pension contribution rate?`,
      a: `${name} teachers contribute ${(p.rate*100).toFixed(2)}% of gross salary to ${p.system}, pre-tax. On the national average salary of $69,544, that is $${Math.round(69544*p.rate).toLocaleString()}/year taken before federal and state tax are calculated.`,
    },
    {
      q: `Does ${name} tax teacher income?`,
      a: noTax
        ? `${name} has no state income tax. Teachers here keep more of their paycheck than in high-tax states — only federal tax, ${p.system}, and FICA${p.ss ? '' : ' (Medicare only)'} apply.`
        : `Yes. ${name} taxes income at ${(stateRate*100).toFixed(1)}%. On the national average teacher salary, this reduces take-home by approximately $${Math.round((69544 - 69544*p.rate) * stateRate).toLocaleString()}/year.`,
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(f => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${name} Teacher Paycheck Calculator 2026`,
    url: `https://www.privatepaycheck.com/teacher-paycheck-calculator/${state}`,
    description: `Calculate real teacher take-home pay in ${name} after ${p.system} pension and all taxes. 2026 IRS brackets.`,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Organization', name: 'the PrivatePaycheck Team', url: 'https://www.privatepaycheck.com' },
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
          <Link href="/teacher-paycheck-calculator" style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: 700 }}>All States</Link>
          <Link href="/nurse-paycheck-calculator" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Nurse</Link>
          <Link href="/unemployment-calculator" style={{ color: '#6ee7b7', textDecoration: 'none' }}>Unemployment</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '32px 16px' }}>

        <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '20px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          {' > '}
          <Link href="/teacher-paycheck-calculator" style={{ color: 'inherit', textDecoration: 'none' }}>Teacher Paycheck Calculator</Link>
          {' > '}
          <span>{name}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px,6vw,40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>
          Teacher Paycheck Calculator — {name} 2026
        </h1>
        <p style={{ fontSize: '18px', lineHeight: 1.75, opacity: 0.85, marginBottom: '28px' }}>
          See your real take-home pay as a {name} teacher after {p.system} pension
          ({(p.rate*100).toFixed(1)}% pre-tax), federal tax, {noTax ? 'and FICA' : `${(stateRate*100).toFixed(1)}% ${name} state tax, and FICA`}.
          {!p.ss && ' This calculator also accounts for the SS Fairness Act 2025 — WEP/GPO are fully repealed.'}
        </p>

        <div style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: '14px', padding: '20px', marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '17px', marginBottom: '4px' }}>Use the Full Interactive Calculator</div>
            <div style={{ fontSize: '15px', opacity: 0.75 }}>Enter your exact salary, filing status, age, and years of outside SS-covered work</div>
          </div>
          <Link href="/teacher-paycheck-calculator" style={{ background: '#4ade80', color: '#091526', borderRadius: '10px', padding: '12px 24px', fontWeight: 800, fontSize: '15px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Calculate My Pay
          </Link>
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '14px' }}>
          Example Teacher Paychecks in {name} 2026
        </h2>
        <p style={{ fontSize: '15px', opacity: 0.65, marginBottom: '18px', lineHeight: 1.6 }}>
          National-average salary levels (NEA "Educator Pay in America" 2024). Filing single, no additional deductions.
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                {['Salary Level', 'Gross', `${p.system}`, 'Annual Net', 'Monthly Net'].map(h => (
                  <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.8, fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {examples.map((e, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: i === 1 ? 'rgba(74,222,128,0.05)' : 'transparent' }}>
                  <td style={{ padding: '12px', fontWeight: 600 }}>{e.label}</td>
                  <td style={{ padding: '12px', opacity: 0.8 }}>{'$' + e.gross.toLocaleString()}</td>
                  <td style={{ padding: '12px', color: '#f87171' }}>{'-$' + Math.round(e.pensionDeduction).toLocaleString()}</td>
                  <td style={{ padding: '12px', color: '#4ade80', fontWeight: 700 }}>{'$' + Math.round(e.takeHome).toLocaleString()}</td>
                  <td style={{ padding: '12px', color: '#7dd3fc' }}>{'$' + Math.round(e.monthlyTakeHome).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px' }}>
          What Affects Your {name} Teacher Take-Home Pay
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '14px', marginBottom: '32px' }}>
          {[
            { title: `${p.system} Pension`, desc: `${(p.rate*100).toFixed(2)}% of gross salary, pre-tax, comes out before federal or state tax is calculated.` },
            { title: noTax ? `${name} Has No State Tax` : `${name} State Tax`, desc: noTax ? `Every dollar you save vs. high-tax states goes straight to your paycheck.` : `Taxed at ${(stateRate*100).toFixed(1)}% on income after your pension deduction.` },
            { title: 'Social Security', desc: p.ss ? `${name} teachers pay 6.2% Social Security plus 1.45% Medicare.` : `${name} teachers pay only 1.45% Medicare — no 6.2% Social Security withholding through this job.` },
            { title: 'SS Fairness Act 2025', desc: p.ss ? `Not applicable — ${name} teachers are already SS-covered.` : `WEP/GPO fully repealed Jan 2025. Outside SS-covered work now counts toward a full benefit.` },
          ].map(f => (
            <div key={f.title} style={CARD}>
              <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '6px' }}>{f.title}</div>
              <div style={{ fontSize: '14px', opacity: 0.7, lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '18px' }}>
          {name} Teacher Paycheck FAQ
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
          {faqItems.map(item => (
            <div key={item.q} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '18px 20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: '#7dd3fc' }}>{item.q}</h3>
              <p style={{ fontSize: '15px', opacity: 0.8, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '17px', fontWeight: 800, marginBottom: '14px', opacity: 0.7 }}>
          More {name} Calculators
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '10px', marginBottom: '36px' }}>
          {[
            { label: `${name} Paycheck Calculator`, href: `/${state}-paycheck-calculator`, color: 'rgba(74,222,128,0.15)', border: 'rgba(74,222,128,0.3)' },
            { label: `${name} Unemployment Calculator`, href: `/unemployment-calculator/${state}`, color: 'rgba(99,102,241,0.15)', border: 'rgba(99,102,241,0.3)' },
            { label: `${name} Nurse Paycheck Calculator`, href: `/nurse-paycheck-calculator/${state}`, color: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.3)' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ display: 'block', background: l.color, border: `1px solid ${l.border}`, borderRadius: '10px', padding: '14px 16px', color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '13px', opacity: 0.8, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
        <br /><span style={{ fontSize: '12px', marginTop: '6px', display: 'block' }}>
          Pension rates sourced from official state TRS/STRS/PSERS websites. Salary benchmarks: NEA "Educator Pay in America" 2024. For informational purposes only — not tax advice.
        </span>
      </footer>
    </main>
  );
}
