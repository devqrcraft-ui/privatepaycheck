'use client';

import Link from 'next/link';
import { useState } from 'react';
import LinkCardGrid from '@/components/LinkCardGrid'
import CalculatorResultActions from '@/components/CalculatorResultActions';

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
  const [hasCalculated, setHasCalculated] = useState(false);

  const res = calcTeacher(salary, state, filing as Filing, age);
  const fmt = (n: number) => '$' + (Math.round(n) || 0).toLocaleString('en-US');
  const pct = (n: number) => (n * 100).toFixed(1) + '%';
  const stateName = STATE_NAMES[state] ?? state;
  const pensionInfo = PENSION_RATE[state] ?? { rate: 0.07, system: 'State TRS', ss: true };

  return (
    <div style={BG}>
      

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 16px' }}>

        {/* HERO */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', marginBottom: '12px', color: '#4ade80' }}>
             2026 tax estimate · All 50 States + DC
          </div>
          <h1 style={{ fontSize: 'clamp(24px,5vw,44px)', fontWeight: 900, margin: '0 0 12px', lineHeight: 1.15 }}>
            Teacher Paycheck Calculator 2026
            <br /><span style={{ color: '#F5C842' }}>Estimated Take-Home After Pension & Taxes</span>
          </h1>
          <p style={{ fontSize: '16px', opacity: 0.65, maxWidth: '580px', margin: '0 auto', lineHeight: 1.7 }}>
            Estimate take-home pay using the listed state pension rate, 2026 federal tax rules and modeled state taxes. Local taxes, benefits and individual plan differences can change your paycheck.
          </p>
        </div>

        {/* GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: hasCalculated ? '1fr 1fr' : '1fr', gap: '24px' }}>

          {/* INPUTS */}
          <div style={CARD}>
            <h2 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 20px' }}>Enter Your Details</h2>

            <div style={{ marginBottom: '16px' }}>
              <div style={LABEL}>Annual Gross Salary</div>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#4ade80', fontWeight: 700 }}>$</span>
                <input
                  type="number"
                  value={salary}
                  onChange={e => {
                    const nextSalary = e.target.valueAsNumber;
                    if (Number.isFinite(nextSalary)) {
                      setSalary(Math.max(1, nextSalary));
                      setHasCalculated(false);
                    }
                  }}
                  min={1}
                  style={{ ...INPUT_S, paddingLeft: '28px' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={LABEL}>State</div>
              <select value={state} onChange={e => { setState(e.target.value); setHasCalculated(false); }} style={{...SELECT_S, colorScheme:'dark'}}>
                {Object.entries(STATE_NAMES).sort((a,b) => a[1].localeCompare(b[1])).map(([k,v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '4px' }}>
                {pensionInfo.system} · {pct(pensionInfo.rate)} modeled employee contribution
                {!pensionInfo.ss && <span style={{ color: '#fbbf24', marginLeft: '6px' }}> model assumes no Social Security</span>}
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={LABEL}>Filing Status</div>
              <select value={filing} onChange={e => { setFiling(e.target.value); setHasCalculated(false); }} style={{...SELECT_S, colorScheme:'dark'}}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={LABEL}>Your Age</div>
              <input
                type="number"
                value={age}
                onChange={e => {
                  setAge(Number.isFinite(e.target.valueAsNumber) ? Math.min(120, Math.max(0, e.target.valueAsNumber)) : 0);
                  setHasCalculated(false);
                }}
                min={0}
                max={120}
                style={INPUT_S}
              />
              {res.seniorDeduction > 0 && (
                <div style={{ fontSize: '11px', color: '#4ade80', marginTop: '4px' }}>
                  Includes an estimated ${Math.round(res.seniorDeduction).toLocaleString()} senior deduction for one eligible person
                </div>
              )}
            </div>

            {/* SSA benefit estimates require a complete earnings record and claiming age. */}
            {!pensionInfo.ss && (
              <div style={{ marginTop: '8px', padding: '12px', background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.15)', borderRadius: '10px', fontSize: '12px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                WEP/GPO repeal does not determine your Social Security benefit amount. This calculator does not estimate retirement benefits; use your full earnings record and claiming age with the{' '}
                <a href="https://www.ssa.gov/prepare/plan-retirement" target="_blank" rel="noreferrer" style={{ color: '#fbbf24' }}>Social Security Administration tools</a>.
              </div>
            )}
            <button type="button" onClick={() => setHasCalculated(true)} style={{ width: '100%', padding: '13px 16px', marginTop: '16px', border: 0, borderRadius: '9px', background: 'linear-gradient(135deg,#F5C842,#FFD700)', color: '#091526', fontSize: '15px', fontWeight: 800, cursor: 'pointer' }}>
              Calculate My Teacher Take-Home →
            </button>
          </div>

          {/* RESULTS */}
          {hasCalculated && (
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

            <CalculatorResultActions
              summary={`2026 ${stateName} teacher paycheck estimate (${filing}, age ${age})\nAnnual gross salary: ${fmt(res.gross)}\nModeled pension contribution (${pct(res.pensionRate)}): ${fmt(res.pensionDeduction)}\nFederal income tax: ${fmt(res.fedTax)}\nState tax estimate: ${fmt(res.stateTax)}\nFICA: ${fmt(res.fica)}\nEstimated annual take-home: ${fmt(res.takeHome)}\nEstimated monthly take-home: ${fmt(res.monthlyTakeHome)}\nState pension and tax treatment depend on employer and individual details; local taxes and benefits are not fully modeled.`}
              relatedLinks={[
                { href: '/hourly-paycheck-calculator', label: 'Hourly paycheck →' },
                { href: '/1099-paycheck-calculator', label: '1099 tax calculator →' },
              ]}
            />
          </div>
          )}
        </div>

        {/* INFO CARDS */}
        <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '16px' }}>
          {[
            { icon: '', title: 'Why Your Pension Rate Matters', body: `In Ohio, STRS takes 14% before taxes. In Florida, FRS takes only 3%. That single difference on a $60k salary means $6,600 less take-home before any taxes are calculated. Most salary comparison sites ignore this entirely.` },
            { icon: '', title: 'Social Security Fairness Act', body: 'The Act repealed WEP and GPO for benefits payable after December 2023. It does not change paycheck deductions or determine an individual benefit amount; eligibility and benefits depend on the person’s earnings record.' },
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
            This model treats these five listed teacher pension systems as not covered by Social Security. Coverage can vary by employer and position; the WEP/GPO repeal does not change paycheck calculations.
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
                  const r = calcTeacher(60000, s, 'single', 40);
                  const p = PENSION_RATE[s];
                  return (
                    <tr key={s} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '10px 10px', fontWeight: 700 }}>{STATE_NAMES[s]}</td>
                      <td style={{ padding: '10px 10px', opacity: 0.6 }}>{p.system}</td>
                      <td style={{ padding: '10px 10px', color: '#f87171' }}>{pct(p.rate)}</td>
                      <td style={{ padding: '10px 10px', color: '#4ade80', fontWeight: 700 }}>{fmt(r.monthlyTakeHome)}</td>
                      <td style={{ padding: '10px 10px' }}><span style={{ background: p.ss ? 'rgba(74,222,128,0.15)' : 'rgba(251,191,36,0.15)', color: p.ss ? '#4ade80' : '#fbbf24', padding: '2px 8px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>{p.ss ? 'Yes in model' : 'No in model'}</span></td>
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
            { q: 'Why is my teacher take-home pay lower than my contract salary?', a: 'Contract salary is gross pay. Pension contributions, federal income tax, state income tax, Medicare, and sometimes Social Security or state payroll programs reduce the amount received. The displayed pension rate is a model default; your plan and pay statement control your actual deductions.' },
            { q: 'Do teachers pay Social Security?', a: 'Coverage depends on the state pension system and employment. This estimator models whether the listed state system is covered; verify coverage with your employer and Social Security record.' },
            { q: 'What did the Social Security Fairness Act change?', a: 'The Social Security Fairness Act repealed WEP and GPO for benefits payable after December 2023. It does not determine an individual benefit amount. Use your complete earnings history and claiming age with Social Security Administration tools.' },
            { q: 'What is the $6,000 Senior Deduction?', a: 'For tax years 2025–2028, eligible people age 65 or older may qualify for an additional federal deduction of up to $6,000 per person, subject to income phase-outs. This calculator models one eligible person based on the entered age and filing status; it does not collect a spouse’s age.' },
            { q: 'Are pension contributions pre-tax?', a: 'Tax treatment depends on the plan and state. This estimate treats the listed employee contribution as reducing federal and modeled state taxable wages; actual withholding and tax treatment may differ. Check your plan documents and state tax rules.' },
          ].map(({ q, a }) => (
            <div key={q} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>{q}</div>
              <div style={{ fontSize: '13px', opacity: 0.6, lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "32px" }}>
          <LinkCardGrid title="Related Calculators" minCardWidth={150} links={[["/bonus-tax-calculator","Bonus Tax Calculator"],["/hourly-paycheck-calculator","Hourly Paycheck"],["/","Salary Paycheck"],["/blog/one-big-beautiful-bill-tax-calculator-2026","OBBB Tax Guide"]]} />
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.8, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '16px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
        <br /><span style={{ fontSize: '11px', marginTop: '6px', display: 'block' }}>Estimate only: local taxes and personal credits are excluded; state tax for Head of Household uses the single-filer model. Pension rates and plan treatment vary—verify them with your plan and tax agency. Not tax advice.</span>
      </footer>
    </div>
  );
}
