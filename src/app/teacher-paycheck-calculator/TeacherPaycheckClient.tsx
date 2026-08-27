'use client';

import Link from 'next/link';
import { useState } from 'react';

// ─── TRS/STRS Pension rates by state (employee contribution %) ──────────────
// Source: each state's official TRS/STRS/PSERS website, 2025-2026
import { PENSION_RATE, STATE_TAX, STATE_NAMES, calcTeacher, Filing } from '@/lib/teacherCalc';

// ─── Styles (identical to BonusCalculatorClient) ─────────────────────────────
const BG = { minHeight: '100vh', background: '#091526', color: '#fff', fontFamily: 'system-ui,sans-serif' };
const CARD = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px' };
const LABEL = { fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' as const, marginBottom: '8px' };
const INPUT_S = { width: '100%', background:'#1e2a4a', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '12px 14px', color: '#fff', fontSize: '16px', boxSizing: 'border-box' as const, outline: 'none' , colorScheme: 'dark' as const };
const SELECT_S = { ...INPUT_S, cursor: 'pointer' , colorScheme: 'dark' as const };

// ─── Component ───────────────────────────────────────────────────────────────
export default function TeacherPaycheckCalculator() {
  const [salary, setSalary]   = useState(58000);
  const [state, setState]     = useState('TX');
  const [filing, setFiling]   = useState('single');
  const [age, setAge]         = useState(42);
  const [ssYears, setSsYears] = useState(0);
  const [showSS, setShowSS]   = useState(false);

  const res = calcTeacher(salary, state, filing as Filing, ssYears, age);
  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();
  const pct = (n: number) => (n * 100).toFixed(1) + '%';
  const stateName = STATE_NAMES[state] ?? state;
  const pensionInfo = PENSION_RATE[state] ?? { rate: 0.07, system: 'State TRS', ss: true };

  return (
    <div style={BG}>
      

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 16px' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', marginBottom: '12px', color: '#4ade80' }}>
             Updated for SS Fairness Act 2025 · All 50 States + DC
          </div>
          <h1 style={{ fontSize: 'clamp(24px,5vw,44px)', fontWeight: 900, margin: '0 0 12px', lineHeight: 1.15 }}>
            Teacher Paycheck Calculator 2026
            <br /><span style={{ color: '#F5C842' }}>Real Take-Home After Pension & Taxes</span>
          </h1>
          <p style={{ fontSize: '16px', opacity: 0.65, maxWidth: '580px', margin: '0 auto', lineHeight: 1.7 }}>
            See your actual take-home pay after TRS/STRS pension contributions, federal & state taxes. Includes SS Fairness Act impact for non-covered states.
          </p>
        </div>

        {/* GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

          {/* INPUTS */}
          <div style={CARD}>
            <h2 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 20px' }}>Enter Your Details</h2>

            <div style={{ marginBottom: '16px' }}>
              <div style={LABEL}>Annual Gross Salary</div>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#4ade80', fontWeight: 700 }}>$</span>
                <input type="number" value={salary} onChange={e => setSalary(Math.max(1,+e.target.value))} min={1} style={{ ...INPUT_S, paddingLeft: '28px' }} />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={LABEL}>State</div>
              <select value={state} onChange={e => setState(e.target.value)} style={{...SELECT_S, colorScheme:'dark'}}>
                {Object.entries(STATE_NAMES).sort((a,b) => a[1].localeCompare(b[1])).map(([k,v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '4px' }}>
                {pensionInfo.system} · {pct(pensionInfo.rate)} employee contribution
                {!pensionInfo.ss && <span style={{ color: '#fbbf24', marginLeft: '6px' }}> Non-SS state</span>}
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={LABEL}>Filing Status</div>
              <select value={filing} onChange={e => setFiling(e.target.value)} style={{...SELECT_S, colorScheme:'dark'}}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={LABEL}>Your Age</div>
              <input type="number" value={age} onChange={e => setAge(+e.target.value)} min={22} max={75} style={INPUT_S} />
              {age >= 65 && (
                <div style={{ fontSize: '11px', color: '#4ade80', marginTop: '4px' }}>
                   You qualify for the $6,000 OBBB Senior Deduction
                </div>
              )}
            </div>

            {/* SS Fairness Act section — only show for non-SS states */}
            {!pensionInfo.ss && (
              <div style={{ marginTop: '8px' }}>
                <button
                  onClick={() => setShowSS(!showSS)}
                  style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '10px', padding: '10px 14px', color: '#fbbf24', fontSize: '13px', fontWeight: 600, cursor: 'pointer', width: '100%', textAlign: 'left' }}
                >
                   {showSS ? '▼' : '▶'} SS Fairness Act 2025 — WEP/GPO repealed for {stateName} teachers
                </button>
                {showSS && (
                  <div style={{ marginTop: '10px', padding: '12px', background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.15)', borderRadius: '10px' }}>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginBottom: '10px', lineHeight: 1.5 }}>
                      WEP & GPO were fully eliminated Jan 2025. If you also worked in SS-covered jobs, enter your years of SS-covered work below to see your estimated new SS benefit.
                    </div>
                    <div style={LABEL}>Years of SS-covered work (outside teaching)</div>
                    <input type="number" value={ssYears} onChange={e => setSsYears(+e.target.value)} min={0} max={40} style={INPUT_S} placeholder="0" />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* RESULTS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

            {/* Take-home hero */}
            <div style={{ ...CARD, background: 'linear-gradient(135deg,rgba(74,222,128,0.15),rgba(201,168,76,0.15))', border: '1px solid rgba(74,222,128,0.3)', textAlign: 'center', padding: '28px' }}>
              <div style={{ fontSize: '13px', opacity: 0.65, marginBottom: '4px' }}>Monthly Take-Home</div>
              <div style={{ fontSize: '48px', fontWeight: 900, color: '#4ade80' }}>{fmt(res.monthlyTakeHome)}</div>
              <div style={{ fontSize: '13px', opacity: 0.8, marginTop: '4px' }}>
                {fmt(res.takeHome)}/year · {pct(1 - res.effectiveRate)} of gross
              </div>
              {res.seniorDeduction > 0 && (
                <div style={{ marginTop: '10px', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '8px', padding: '6px 10px', fontSize: '12px', color: '#4ade80' }}>
                   Includes ${Math.round(res.seniorTaxSaving).toLocaleString()} saved via $6,000 Senior Deduction
                </div>
              )}
            </div>

            {/* Breakdown */}
            <div style={CARD}>
              <div style={{ fontSize: '13px', fontWeight: 700, marginBottom: '14px', opacity: 0.7 }}>Paycheck Breakdown</div>
              {[
                { label: 'Gross Salary',                              value: res.gross,            color: 'rgba(255,255,255,0.9)', plus: true },
                { label: `${res.pensionSystem} (${pct(res.pensionRate)})`, value: -res.pensionDeduction, color: '#f87171' },
                { label: 'Federal Income Tax',                        value: -res.fedTax,          color: '#fb923c' },
                { label: `State Tax (${stateName})`,                  value: -res.stateTax,        color: '#fbbf24' },
                { label: `FICA (${res.isSScovered ? 'SS + Medicare' : 'Medicare only'})`, value: -res.fica, color: '#e879f9' },
                ...(res.seniorDeduction > 0 ? [{ label: 'OBBB Senior Deduction Savings', value: res.seniorTaxSaving, color: '#4ade80' }] : []),
                { label: 'Annual Take-Home',                          value: res.takeHome,         color: '#4ade80', bold: true },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: '13px', opacity: row.bold ? 1 : 0.7, fontWeight: row.bold ? 700 : 400 }}>{row.label}</span>
                  <span style={{ color: row.color, fontWeight: row.bold ? 700 : 600, fontSize: row.bold ? '15px' : '13px' }}>
                    {row.value < 0 ? '-' + fmt(Math.abs(row.value)) : fmt(row.value)}
                  </span>
                </div>
              ))}
              <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <span style={{ fontSize: '13px', opacity: 0.8 }}>Effective Total Rate: </span>
                <span style={{ color: '#e879f9', fontWeight: 700 }}>{pct(res.effectiveRate)}</span>
              </div>
            </div>

            {/* SS Fairness Act result */}
            {res.ssBenefit > 0 && (
              <div style={{ ...CARD, background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.25)' }}>
                <div style={{ fontSize: '12px', color: '#fbbf24', fontWeight: 700, marginBottom: '6px' }}> SS Fairness Act 2025 Impact</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', opacity: 0.7 }}>Estimated new SS benefit</span>
                  <span style={{ color: '#fbbf24', fontWeight: 700, fontSize: '18px' }}>+{fmt(res.ssBenefit)}/yr</span>
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '6px' }}>
                  WEP/GPO fully repealed. Apply at ssa.gov to claim retroactive payments from Jan 2024.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* INFO CARDS */}
        <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '16px' }}>
          {[
            { icon: '', title: 'Why Your Pension Rate Matters', body: `In Ohio, STRS takes 14% before taxes. In Florida, FRS takes only 3%. That single difference on a $60k salary means $6,600 less take-home before any taxes are calculated. Most salary comparison sites ignore this entirely.` },
            { icon: '', title: 'SS Fairness Act 2025', body: 'WEP and GPO are fully repealed as of January 2025. Teachers in TX, CA, IL, OH, MA and 11 other states who also worked SS-covered jobs can now claim full SS benefits. File at ssa.gov — retroactive to Jan 2024.' },
            { icon: '', title: 'The $6,000 Senior Bonus', body: 'If you\'re 65+ in 2025-2028, you qualify for an additional $6,000 federal deduction under the One Big Beautiful Bill (Public Law 119-21). It phases out at MAGI over $75k (single) or $150k (married).' },
          ].map(f => (
            <div key={f.title} style={CARD}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{f.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>{f.title}</div>
              <div style={{ fontSize: '13px', opacity: 0.6, lineHeight: 1.6 }}>{f.body}</div>
            </div>
          ))}
        </div>

        {/* STATE HIGHLIGHTS */}
        <div style={{ marginTop: '32px', ...CARD }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>
            Big 5 Non-SS States — Teacher Take-Home Comparison
          </h2>
          <p style={{ fontSize: '13px', opacity: 0.55, marginBottom: '16px', lineHeight: 1.6 }}>
            These 5 states have teacher pension systems NOT covered by Social Security. WEP/GPO repeal in 2025 most affects teachers here who also have SS-covered work history.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  {['State', 'Pension System', 'Rate', '$60k Take-Home/mo', 'SS Covered?'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '8px 10px', opacity: 0.8, fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {['TX','CA','IL','OH','MA'].map(s => {
                  const r = calcTeacher(60000, s, 'single', 0, 40);
                  const p = PENSION_RATE[s];
                  return (
                    <tr key={s} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '10px 10px', fontWeight: 700 }}>{STATE_NAMES[s]}</td>
                      <td style={{ padding: '10px 10px', opacity: 0.6 }}>{p.system}</td>
                      <td style={{ padding: '10px 10px', color: '#f87171' }}>{pct(p.rate)}</td>
                      <td style={{ padding: '10px 10px', color: '#4ade80', fontWeight: 700 }}>{fmt(r.monthlyTakeHome)}</td>
                      <td style={{ padding: '10px 10px' }}><span style={{ background: p.ss ? 'rgba(74,222,128,0.15)' : 'rgba(251,191,36,0.15)', color: p.ss ? '#4ade80' : '#fbbf24', padding: '2px 8px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>{p.ss ? 'Yes' : 'No — WEP repealed'}</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: '32px', ...CARD }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '20px' }}>Frequently Asked Questions</h2>
          {[
            { q: 'Why is my teacher take-home pay so much lower than my contract salary?', a: 'Your contract salary is gross pay. Before you see a dollar, your state\'s TRS/STRS pension system takes 3%–14.75% (varies by state), then federal taxes, state income taxes, and Medicare are withheld. In states like Ohio (14% STRS) or Missouri (14% PSERS), pension alone reduces your paycheck significantly.' },
            { q: 'Do teachers pay Social Security?', a: 'It depends on your state. Teachers in 15 states — including Texas, California, Illinois, Ohio, and Massachusetts — are NOT covered by Social Security through their teaching job. Instead, they rely on their state TRS/STRS pension. Since January 2025, WEP and GPO are fully repealed, so teachers with additional SS-covered work now receive full SS benefits.' },
            { q: 'What is the SS Fairness Act 2025?', a: 'The Social Security Fairness Act (signed January 5, 2025) eliminated the Windfall Elimination Provision (WEP) and Government Pension Offset (GPO). These rules used to reduce SS benefits for government workers with pensions. The repeal is retroactive to January 2024 — if you haven\'t yet applied, file at ssa.gov.' },
            { q: 'What is the $6,000 Senior Deduction for teachers?', a: 'Under the One Big Beautiful Bill (Public Law 119-21, signed July 4, 2025), Americans aged 65 and older can deduct an additional $6,000 from federal taxable income for tax years 2025–2028. For married couples where both are 65+, the deduction is $12,000. It phases out at MAGI over $75,000 (single) or $150,000 (married).' },
            { q: 'Is pension contribution pre-tax or post-tax?', a: 'Most state TRS/STRS contributions are pre-tax — meaning they reduce your federal and state taxable income. However, this means your pension benefits in retirement will be taxed as ordinary income. A few states have moved to hybrid or Roth-style plans. This calculator uses the pre-tax default for all states.' },
          ].map(({ q, a }) => (
            <div key={q} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>{q}</div>
              <div style={{ fontSize: '13px', opacity: 0.6, lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>

        {/* RELATED */}
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '12px' }}>Related Calculators</div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { href: '/bonus-tax-calculator', label: ' Bonus Tax Calculator' },
              { href: '/hourly-paycheck-calculator', label: ' Hourly Paycheck' },
              { href: '/', label: ' Salary Paycheck' },
              { href: '/blog/one-big-beautiful-bill-tax-calculator-2026', label: ' OBBB Tax Guide' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ background: 'rgba(129,140,248,0.15)', border: '1px solid rgba(129,140,248,0.3)', borderRadius: '20px', padding: '8px 16px', color: '#a5b4fc', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.8, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '16px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
        <br /><span style={{ fontSize: '11px', marginTop: '6px', display: 'block' }}>Pension rates sourced from official state TRS/STRS/PSERS websites. For informational purposes only — not tax advice.</span>
      </footer>
    </div>
  );
}
