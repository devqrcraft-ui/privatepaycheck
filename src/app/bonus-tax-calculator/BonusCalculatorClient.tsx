'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';

// ─── Tax helpers ────────────────────────────────────────────────────────────

function federalTax(income: number, filing: string): number {
  const brackets =
    filing === 'married'
      ? [[23200, 0.10], [94300, 0.12], [201050, 0.22], [383900, 0.24], [487450, 0.32], [731200, 0.35], [Infinity, 0.37]]
      : [[11600, 0.10], [47150, 0.12], [100525, 0.22], [191950, 0.24], [243725, 0.32], [609350, 0.35], [Infinity, 0.37]];
  let tax = 0, prev = 0;
  for (const [limit, rate] of brackets as [number, number][]) {
    if (income <= prev) break;
    tax += (Math.min(income, limit) - prev) * rate;
    prev = limit;
  }
  return tax;
}

const STATE_TAX: Record<string, number> = {
  AL: 0.05, AK: 0, AZ: 0.025, AR: 0.047, CA: 0.093, CO: 0.044, CT: 0.065,
  DE: 0.066, FL: 0, GA: 0.055, HI: 0.08, ID: 0.058, IL: 0.0495, IN: 0.0305,
  IA: 0.06, KS: 0.057, KY: 0.045, LA: 0.0425, ME: 0.075, MD: 0.0575,
  MA: 0.05, MI: 0.0425, MN: 0.0985, MS: 0.05, MO: 0.054, MT: 0.069,
  NE: 0.0684, NV: 0, NH: 0, NJ: 0.0637, NM: 0.059, NY: 0.0685, NC: 0.0499,
  ND: 0.029, OH: 0.04, OK: 0.0475, OR: 0.099, PA: 0.0307, RI: 0.0599,
  SC: 0.07, SD: 0, TN: 0, TX: 0, UT: 0.0465, VT: 0.0875, VA: 0.0575,
  WA: 0, WV: 0.065, WI: 0.0765, WY: 0, DC: 0.085,
};

const STATE_NAMES: Record<string, string> = {
  AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',
  CT:'Connecticut',DE:'Delaware',FL:'Florida',GA:'Georgia',HI:'Hawaii',ID:'Idaho',
  IL:'Illinois',IN:'Indiana',IA:'Iowa',KS:'Kansas',KY:'Kentucky',LA:'Louisiana',
  ME:'Maine',MD:'Maryland',MA:'Massachusetts',MI:'Michigan',MN:'Minnesota',
  MS:'Mississippi',MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',
  NJ:'New Jersey',NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',
  OH:'Ohio',OK:'Oklahoma',OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',
  SD:'South Dakota',TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',
  WA:'Washington',WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming',DC:'Washington DC',
};

function calcBonus(bonus: number, salary: number, state: string, filing: string) {
  const fica = Math.min(bonus, Math.max(0, 184500 - salary)) * 0.062 + bonus * 0.0145;
  const fedWithBonus = federalTax(salary + bonus, filing);
  const fedWithout  = federalTax(salary, filing);
  const fedTax = fedWithBonus - fedWithout;
  const stateTax = bonus * (STATE_TAX[state] ?? 0);
  const total = fedTax + stateTax + fica;
  const takeHome = bonus - total;
  return { fedTax, stateTax, fica, total, takeHome, effectiveRate: total / bonus };
}

// ─── Component ───────────────────────────────────────────────────────────────

const NAV_STYLE = { padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky' as const, top: 0, zIndex: 100 };
const BG = { minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' };
const CARD = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px' };
const LABEL = { fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' as const, marginBottom: '8px' };
const INPUT_S = { width: '100%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '12px 14px', color: 'white', fontSize: '16px', boxSizing: 'border-box' as const, outline: 'none' , colorScheme: 'dark' as const };
const SELECT_S = { ...INPUT_S, cursor: 'pointer' , colorScheme: 'dark' as const };

export default function BonusTaxCalculator() {
  const [bonus, setBonus]   = useState(10000);
  const [salary, setSalary] = useState(75000);
  const [state, setState]   = useState('CA');
  const [filing, setFiling] = useState('single');

  const res = calcBonus(bonus, salary, state, filing);
  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();
  const pct = (n: number) => (n * 100).toFixed(1) + '%';

  return (
    <main style={BG}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"WebApplication",
        "name":"Bonus Tax Calculator 2026 — Free & Private",
        "url":"https://privatepaycheck.com/bonus-tax-calculator",
        "description":"Calculate exactly how much of your bonus you'll keep after federal, state, and FICA taxes. Free, private, no signup.",
        "applicationCategory":"FinanceApplication","operatingSystem":"Any",
        "offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},
      })}} />


      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 16px' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', marginBottom: '12px', color: '#4ade80' }}>
             Calculated privately in your browser
          </div>
          <h1 style={{ fontSize: 'clamp(24px,5vw,48px)', fontWeight: 900, margin: '0 0 12px', lineHeight: 1.15 }}>
            Bonus Tax Calculator 2026
            <br/><span style={{ color: '#F5C842' }}>Free & 100% Private</span>
          </h1>
          <p style={{ fontSize: '16px', opacity: 0.65, maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Find out exactly how much of your bonus you'll actually keep after federal taxes, state taxes, and FICA. No signup. No data sent anywhere.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

          {/* INPUTS */}
          <div style={CARD}>
            <h2 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 20px' }}>Enter Your Details</h2>

            <div style={{ marginBottom: '16px' }}>
              <div style={LABEL}>Bonus Amount</div>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#4ade80', fontWeight: 700 }}>$</span>
                <input type="number" value={bonus} onChange={e => setBonus(+e.target.value)} style={{ ...INPUT_S, paddingLeft: '28px' }} />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={LABEL}>Annual Salary (before bonus)</div>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#4ade80', fontWeight: 700 }}>$</span>
                <input type="number" value={salary} onChange={e => setSalary(+e.target.value)} style={{ ...INPUT_S, paddingLeft: '28px' }} />
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '4px' }}>Used to determine your marginal tax bracket</div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={LABEL}>State</div>
              <select value={state} onChange={e => setState(e.target.value)} style={{...SELECT_S, colorScheme:'dark', color:'#fff', background:'#1e293b'}}>
                {Object.entries(STATE_NAMES).sort((a,b)=>a[1].localeCompare(b[1])).map(([k,v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>

            <div>
              <div style={LABEL}>Filing Status</div>
              <select value={filing} onChange={e => setFiling(e.target.value)} style={{...SELECT_S, colorScheme:'dark', color:'#fff', background:'#1e293b'}}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>
          </div>

          {/* RESULTS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

            <div style={{ ...CARD, background: 'linear-gradient(135deg,rgba(74,222,128,0.15),rgba(201,168,76,0.15))', border: '1px solid rgba(74,222,128,0.3)', textAlign: 'center', padding: '28px' }}>
              <div style={{ fontSize: '13px', opacity: 0.65, marginBottom: '6px' }}>You'll Take Home</div>
              <div style={{ fontSize: '48px', fontWeight: 900, color: '#4ade80' }}>{fmt(res.takeHome)}</div>
              <div style={{ fontSize: '13px', opacity: 0.5, marginTop: '6px' }}>out of {fmt(bonus)} bonus</div>
            </div>

            <div style={CARD}>
              <div style={{ fontSize: '13px', fontWeight: 700, marginBottom: '14px', opacity: 0.7 }}>Tax Breakdown</div>
              {[
                { label: 'Federal Income Tax', value: res.fedTax, color: '#f87171' },
                { label: 'State Tax (' + STATE_NAMES[state] + ')', value: res.stateTax, color: '#fb923c' },
                { label: 'FICA (SS + Medicare)', value: res.fica, color: '#facc15' },
                { label: 'Total Tax', value: res.total, color: '#e879f9', bold: true },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: '13px', opacity: row.bold ? 1 : 0.7, fontWeight: row.bold ? 700 : 400 }}>{row.label}</span>
                  <span style={{ color: row.color, fontWeight: 700, fontSize: row.bold ? '16px' : '14px' }}>{fmt(row.value)}</span>
                </div>
              ))}
              <div style={{ marginTop: '12px', textAlign: 'center' }}>
                <span style={{ fontSize: '13px', opacity: 0.5 }}>Effective Tax Rate: </span>
                <span style={{ color: '#e879f9', fontWeight: 700 }}>{pct(res.effectiveRate)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* INFO */}
        <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '16px' }}>
          {[
            { icon: '', title: 'Marginal Rate Method', body: 'Your bonus is taxed at your marginal (highest) federal bracket — not a flat rate. This calculator uses your full salary to determine the exact bracket.' },
            { icon: '', title: 'State Taxes Vary Wildly', body: 'Texas and Florida take $0 in state tax on your bonus. California takes up to 9.3%. Know your state before negotiating.' },
            { icon: '', title: 'Pro Tip: Defer to 401k', body: 'Contributing your bonus to a 401k reduces taxable income and can push you into a lower bracket. Consider timing.' },
          ].map(f => (
            <div key={f.title} style={CARD}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>{f.title}</div>
              <div style={{ fontSize: '13px', opacity: 0.6, lineHeight: 1.6 }}>{f.body}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ marginTop: '40px', ...CARD }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '20px' }}>Frequently Asked Questions</h2>
          {[
            { q: 'What percentage of my bonus goes to taxes?', a: 'It depends on your salary, state, and filing status. Federal tax alone can be 22%–37% for high earners. Add state taxes (0%–13.3%) and FICA (7.65%) and many people lose 35%–50% of their bonus.' },
            { q: 'Is my bonus taxed differently than my salary?', a: 'Your bonus is subject to the same federal tax brackets as your salary — just added on top. Employers may withhold at a flat 22% supplemental rate, but your actual liability is based on your full income.' },
            { q: 'How can I reduce taxes on my bonus?', a: 'Contribute it to a 401k (up to $23,500 in 2026), fund an HSA, or ask your employer to pay it in January to spread income across two tax years.' },
            { q: 'Does FICA apply to bonuses?', a: 'Yes. You pay 7.65% FICA on your bonus up to the Social Security wage base ($184,500 in 2026). If your salary already exceeds that, only Medicare (1.45%) applies.' },
          ].map(({ q, a }) => (
            <div key={q} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>{q}</div>
              <div style={{ fontSize: '13px', opacity: 0.6, lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>

        {/* RELATED */}
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: '14px', opacity: 0.5, marginBottom: '12px' }}>Related Calculators</div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { href: '/signing-bonus-tax-calculator', label: ' Signing Bonus Tax' },
              { href: '/raise-calculator', label: ' Raise Calculator' },
              { href: '/overtime-calculator', label: ' Overtime Calculator' },
              { href: '/', label: ' Paycheck Calculator' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ background: 'rgba(129,140,248,0.15)', border: '1px solid rgba(129,140,248,0.3)', borderRadius: '20px', padding: '8px 16px', color: '#a5b4fc', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '16px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
