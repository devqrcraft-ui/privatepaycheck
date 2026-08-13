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
  if (!st) return { title: 'Software Engineer Paycheck Calculator' };
  return {
    title: st.noTax
      ? `Software Engineer Paycheck Calculator ${st.name} 2026 — No State Tax Take-Home`
      : `Software Engineer Paycheck Calculator ${st.name} 2026 — Net Pay After ${(st.rate * 100).toFixed(1)}% State Tax`,
    description: st.noTax
      ? `Calculate your real software engineer take-home pay in ${st.name} 2026. No state income tax — see exact biweekly and monthly net pay after federal tax and FICA only.`
      : `Free software engineer paycheck calculator for ${st.name} 2026. See take-home after ${(st.rate * 100).toFixed(1)}% state tax, federal tax, and FICA. RSU and bonus tax tips included.`,
    alternates: { canonical: `https://www.privatepaycheck.com/software-engineer-paycheck-calculator/${state}` },
  };
}

const SWE_SALARY: Record<string, { median: number; low: number; high: number; note?: string }> = {
  al: { median: 122540, low: 92000, high: 178000 },
  ak: { median: 105000, low: 80000, high: 145000 },
  az: { median: 129690, low: 97000, high: 188000 },
  ar: { median: 104490, low: 78000, high: 152000 },
  ca: { median: 174410, low: 131000, high: 253000, note: 'California is the highest-paying state for software engineers. FAANG engineers in the Bay Area often earn $200,000-$400,000+ in total comp including RSUs.' },
  co: { median: 138390, low: 104000, high: 201000, note: 'Denver and Boulder have become major tech hubs. Many remote engineers based in Colorado earn Bay Area salaries with lower cost of living.' },
  ct: { median: 134120, low: 101000, high: 194000 },
  de: { median: 133020, low: 100000, high: 193000 },
  fl: { median: 130980, low: 98000, high: 190000, note: 'Florida has no state income tax, making it a popular destination for remote engineers. Miami and Tampa tech scenes are growing rapidly.' },
  ga: { median: 131010, low: 98000, high: 190000 },
  hi: { median: 124040, low: 93000, high: 180000 },
  id: { median: 131590, low: 99000, high: 191000 },
  il: { median: 132110, low: 99000, high: 192000, note: 'Chicago is a major tech hub with strong demand in fintech, healthcare tech, and enterprise software.' },
  in: { median: 105920, low: 79000, high: 154000 },
  ia: { median: 114890, low: 86000, high: 167000 },
  ks: { median: 113420, low: 85000, high: 165000 },
  ky: { median: 109010, low: 82000, high: 158000 },
  la: { median: 102800, low: 77000, high: 149000 },
  me: { median: 123120, low: 92000, high: 179000 },
  md: { median: 138680, low: 104000, high: 201000, note: 'Maryland benefits from proximity to DC. Cybersecurity and government tech contractors command premium salaries.' },
  ma: { median: 165210, low: 124000, high: 240000, note: 'Boston is a top-5 tech market. Strong demand in biotech software, fintech, and AI/ML roles.' },
  mi: { median: 125570, low: 94000, high: 182000 },
  mn: { median: 130050, low: 98000, high: 189000 },
  ms: { median: 95330, low: 72000, high: 138000 },
  mo: { median: 126120, low: 95000, high: 183000 },
  mt: { median: 121990, low: 92000, high: 177000 },
  ne: { median: 110900, low: 83000, high: 161000 },
  nv: { median: 128810, low: 97000, high: 187000, note: 'Nevada has no state income tax. Las Vegas and Reno are growing tech markets with significant remote worker relocation.' },
  nh: { median: 139720, low: 105000, high: 203000, note: 'New Hampshire has no state income tax and is popular with Boston-area remote workers.' },
  nj: { median: 135940, low: 102000, high: 197000 },
  nm: { median: 124520, low: 93000, high: 181000 },
  ny: { median: 166180, low: 125000, high: 241000, note: 'New York City is a top-3 tech market. High salaries are partially offset by combined state and city income taxes reaching 14%+.' },
  nc: { median: 134710, low: 101000, high: 195000, note: 'Research Triangle (Raleigh-Durham) is one of the fastest-growing tech hubs in the US.' },
  nd: { median: 105600, low: 79000, high: 153000 },
  oh: { median: 114090, low: 86000, high: 165000 },
  ok: { median: 118100, low: 89000, high: 171000 },
  or: { median: 142720, low: 107000, high: 207000, note: 'Portland and the broader Oregon tech scene benefit from proximity to Silicon Valley without California tax rates — until Oregon added its own high rates.' },
  pa: { median: 126550, low: 95000, high: 183000 },
  ri: { median: 130590, low: 98000, high: 189000 },
  sc: { median: 129450, low: 97000, high: 188000 },
  sd: { median: 96310, low: 72000, high: 140000 },
  tn: { median: 122430, low: 92000, high: 178000, note: 'Tennessee has no state income tax. Nashville is growing as a tech hub, and many remote workers have relocated here.' },
  tx: { median: 132150, low: 99000, high: 192000, note: 'Texas has no state income tax. Austin is now a top-5 tech market with major offices from Tesla, Apple, and dozens of startups.' },
  ut: { median: 128810, low: 97000, high: 187000, note: 'Silicon Slopes (Salt Lake City area) has become a major tech hub with fast-growing startup and enterprise software scenes.' },
  vt: { median: 125280, low: 94000, high: 182000 },
  va: { median: 136460, low: 102000, high: 198000, note: 'Northern Virginia (DC suburbs) is home to major cloud providers and government tech contractors. AWS HQ2 anchors the region.' },
  wa: { median: 166540, low: 125000, high: 242000, note: 'Washington has no state income tax. Seattle is home to Amazon, Microsoft, and hundreds of tech companies. One of the best states for engineer net pay.' },
  wv: { median: 121000, low: 91000, high: 176000 },
  wi: { median: 122660, low: 92000, high: 178000 },
  wy: { median: 115170, low: 86000, high: 167000 },
  dc: { median: 136880, low: 103000, high: 199000, note: 'Washington DC commands high salaries driven by government contracting and policy-tech. Combined DC tax rates are among the highest in the country.' },
};

function calcNet(gross: number, stateTaxRate: number): { annual: number; monthly: number; biweekly: number } {
  const taxable = Math.max(0, gross - 15000);
  const brackets = [
    { min: 0, max: 11925, rate: 0.10 },
    { min: 11925, max: 48475, rate: 0.12 },
    { min: 48475, max: 103350, rate: 0.22 },
    { min: 103350, max: 197300, rate: 0.24 },
    { min: 197300, max: 250525, rate: 0.32 },
    { min: 250525, max: Infinity, rate: 0.35 },
  ];
  let federal = 0;
  for (const b of brackets) {
    if (taxable <= b.min) break;
    federal += (Math.min(taxable, b.max) - b.min) * b.rate;
  }
  const fica = Math.min(gross, 184500) * 0.062 + gross * 0.0145;
  const state = gross * stateTaxRate;
  const annual = Math.round(gross - federal - fica - state);
  return { annual, monthly: Math.round(annual / 12), biweekly: Math.round(annual / 26) };
}

export default async function Page({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const code = STATE_SLUG_MAP[state];
  const st = STATE_TAXES[code];
  if (!st) notFound();

  const sd = SWE_SALARY[code] || { median: 115000, low: 86000, high: 165000 };
  const noTax = !!st.noTax;
  const stateRate = st.rate;

  const examples = [
    { label: 'Junior SWE', gross: sd.low },
    { label: 'Mid-Level SWE', gross: sd.median },
    { label: 'Senior / Staff SWE', gross: sd.high },
  ].map(e => ({ ...e, ...calcNet(e.gross, stateRate) }));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much do software engineers take home after taxes in ${st.name} in 2026?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `A mid-level software engineer in ${st.name} earning $${sd.median.toLocaleString()} takes home approximately $${examples[1].annual.toLocaleString()}/year ($${examples[1].biweekly.toLocaleString()} biweekly) after federal tax, FICA${noTax ? '.' : ` and ${(stateRate * 100).toFixed(1)}% ${st.name} state income tax.`}`,
        },
      },
      {
        '@type': 'Question',
        name: `What is the average software engineer salary in ${st.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The median software engineer salary in ${st.name} is approximately $${sd.median.toLocaleString()}/year in 2026, ranging from $${sd.low.toLocaleString()} for junior roles to $${sd.high.toLocaleString()} for senior and staff engineers. These figures cover base salary only — RSUs and bonuses can add 20-60% in total comp at larger companies.`,
        },
      },
      {
        '@type': 'Question',
        name: 'How are RSUs taxed for software engineers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'RSUs (restricted stock units) are taxed as ordinary income when they vest, at your marginal federal and state rate. Your employer withholds at the 22% federal supplemental rate by default, but if your total income puts you in a higher bracket, you may owe additional taxes at filing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does contributing to a 401(k) significantly reduce my tax bill as a software engineer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The 2026 401(k) contribution limit is $23,500. A software engineer earning $150,000 who maxes out their 401(k) reduces taxable income by $23,500, saving approximately $5,640 in federal taxes alone at the 24% bracket — plus state tax savings.',
        },
      },
      {
        '@type': 'Question',
        name: `Does ${st.name} tax software engineer income?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: noTax
            ? `${st.name} has no state income tax. Software engineers keep significantly more of their paycheck compared to high-tax states like California or New York.`
            : `Yes. ${st.name} taxes income at ${(stateRate * 100).toFixed(1)}%. On a median SWE salary of $${sd.median.toLocaleString()}, this costs approximately $${Math.round(sd.median * stateRate).toLocaleString()}/year in state taxes alone.`,
        },
      },
    ],
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${st.name} Software Engineer Paycheck Calculator 2026`,
    url: `https://www.privatepaycheck.com/software-engineer-paycheck-calculator/${state}`,
    description: `Calculate real software engineer take-home pay in ${st.name} after all taxes. 2026 IRS brackets.`,
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
          <Link href="/software-engineer-paycheck-calculator" style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: 700 }}>All States</Link>
          <Link href="/nurse-paycheck-calculator" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Nurse</Link>
          <Link href="/bonus-tax-calculator" style={{ color: '#6ee7b7', textDecoration: 'none' }}>Bonus Tax</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 16px' }}>

        <div style={{ fontSize: '13px', opacity: 0.8, marginBottom: '24px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          {' > '}
          <Link href="/software-engineer-paycheck-calculator" style={{ color: 'inherit', textDecoration: 'none' }}>Software Engineer Paycheck Calculator</Link>
          {' > '}
          <span>{st.name}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(22px,4vw,40px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>
          Software Engineer Paycheck Calculator — {st.name} 2026
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.75, opacity: 0.75, maxWidth: '680px', marginBottom: '12px' }}>
          See your real take-home pay as a software engineer in {st.name} after federal tax, FICA
          {noTax ? '. ' : `, and ${(stateRate * 100).toFixed(1)}% ${st.name} state income tax. `}
          Covers base salary — for RSU and bonus tax, use the full calculator below.
        </p>
        {sd.note && (
          <p style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.6, maxWidth: '680px', marginBottom: '24px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '10px', padding: '14px 16px' }}>
            {sd.note}
          </p>
        )}

        <div style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: '14px', padding: '20px 24px', marginBottom: '36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>Calculate Your Exact Take-Home Pay</div>
            <div style={{ fontSize: '13px', opacity: 0.65 }}>Include 401(k), health insurance, RSU vesting, filing status, and pay frequency</div>
          </div>
          <Link href={`/${state}-paycheck-calculator`} style={{ background: '#4ade80', color: '#091526', borderRadius: '10px', padding: '10px 22px', fontWeight: 800, fontSize: '14px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Open Calculator
          </Link>
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
          Example Software Engineer Paychecks in {st.name} 2026
        </h2>
        <p style={{ fontSize: '14px', opacity: 0.6, marginBottom: '16px' }}>
          Base salary only, filing single, standard deduction, no pre-tax deductions. RSUs and bonuses taxed separately.
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '36px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                {['Level', 'Annual Base', 'Annual Net', 'Monthly Net', 'Biweekly Net'].map(h => (
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
          What Affects Your Software Engineer Paycheck in {st.name}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '14px', marginBottom: '36px' }}>
          {[
            { title: 'Federal Tax Brackets', desc: 'Most mid-level engineers fall in the 22-24% federal bracket. Senior and staff engineers earning $200k+ enter the 32-35% bracket.' },
            { title: `${st.name} State Tax`, desc: noTax ? `${st.name} has no state income tax — engineers keep significantly more vs. California or New York at similar salaries.` : `${st.name} taxes income at ${(stateRate * 100).toFixed(1)}%. On a $150k salary this is $${Math.round(150000 * stateRate).toLocaleString()}/year in state taxes.` },
            { title: '401(k) Max-Out', desc: 'The 2026 limit is $23,500 ($31,000 if 50+). At the 24% bracket, maxing out saves $5,640/year in federal taxes alone.' },
            { title: 'RSU Vesting', desc: 'RSUs vest as ordinary income. Default withholding is 22% federal but your effective rate may be higher. Model your tax bill before year-end.' },
            { title: 'Bonus Withholding', desc: 'Sign-on and performance bonuses are withheld at the 22% federal supplemental rate. Higher earners often owe additional tax at filing.' },
            { title: 'Health / Dental / Vision', desc: 'Employer plans are pre-tax. A $500/month premium reduces your taxable income by $6,000/year, saving roughly $1,320 at the 22% bracket.' },
          ].map(f => (
            <div key={f.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontWeight: 700, fontSize: '13px', marginBottom: '6px' }}>{f.title}</div>
              <div style={{ fontSize: '12px', opacity: 0.65, lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '20px' }}>
          {st.name} Software Engineer Paycheck FAQ
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
          {faqSchema.mainEntity.map((item: { name: string; acceptedAnswer: { text: string } }) => (
            <div key={item.name} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '18px 20px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: '#7dd3fc' }}>{item.name}</h3>
              <p style={{ fontSize: '13px', opacity: 0.75, lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(236,72,153,0.06)', border: '1px solid rgba(236,72,153,0.2)', borderRadius: '14px', padding: '20px 24px', marginBottom: '32px' }}>
          <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '6px' }}>Bonus Tax Calculator</div>
          <p style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.6, marginBottom: '12px' }}>
            Getting a year-end bonus or RSU vest? See exactly how much you keep after the 22% IRS supplemental rate and {st.name} state tax.
          </p>
          <Link href={`/bonus-tax-calculator/${state}`} style={{ display: 'inline-block', background: 'rgba(236,72,153,0.2)', border: '1px solid rgba(236,72,153,0.4)', borderRadius: '8px', padding: '8px 18px', color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: 700 }}>
            {st.name} Bonus Tax Calculator
          </Link>
        </div>

        <h2 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '14px', opacity: 0.7 }}>
          More {st.name} Calculators
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '10px', marginBottom: '40px' }}>
          {[
            { label: `${st.name} Paycheck Calculator`, href: `/${state}-paycheck-calculator`, color: 'rgba(74,222,128,0.1)', border: 'rgba(74,222,128,0.25)' },
            { label: `${st.name} Bonus Tax Calculator`, href: `/bonus-tax-calculator/${state}`, color: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.25)' },
            { label: `${st.name} Overtime Calculator`, href: `/overtime-calculator/${state}`, color: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.25)' },
            { label: `${st.name} Unemployment Calculator`, href: `/unemployment-calculator/${state}`, color: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.25)' },
            { label: 'Nurse Paycheck Calculator', href: `/nurse-paycheck-calculator/${state}`, color: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ display: 'block', background: l.color, border: `1px solid ${l.border}`, borderRadius: '10px', padding: '14px 16px', color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
              {l.label}
            </Link>
          ))}
        </div>

        <p style={{ fontSize: '11px', opacity: 0.35, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
          Disclaimer: Estimates only. Based on 2026 IRS tax brackets, standard deduction, filing single, base salary only. RSUs, bonuses, stock options, and local taxes not included. Not financial or tax advice.
        </p>
      </div>

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.8, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '20px' }}>
        © 2026 PrivatePaycheck.com
        {' · '}
        <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link>
        {' · '}
        <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
