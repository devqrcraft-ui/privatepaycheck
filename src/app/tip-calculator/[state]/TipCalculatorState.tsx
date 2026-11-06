'use client';
import { useState } from 'react';
import Link from 'next/link';
import CalculatorResultActions from '@/components/CalculatorResultActions';
import { estimateFederalIncomeTax } from '@/lib/paycheck';
import { FICA } from '@/lib/taxRates2026';

interface Props {
  stateName: string;
  noStateTax: boolean;
  noTipCredit?: boolean | null;
  minWage: number;
}

const BG: React.CSSProperties = { minHeight: '100vh', background: '#091526', color: '#fff', fontFamily: 'system-ui,sans-serif' };
const CARD: React.CSSProperties = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' };
const LABEL: React.CSSProperties = { fontSize: '16px', fontWeight: 700, color: '#c4d2e3', marginBottom: '8px', display: 'block' };
const INPUT_S: React.CSSProperties = { width: '100%', background:'#1e2a4a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px 16px', color: '#fff', fontSize: '18px', boxSizing: 'border-box', outline: 'none' , colorScheme: 'dark' as const };
const ROW: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' };

export default function TipCalculatorState({ stateName, noStateTax, noTipCredit, minWage }: Props) {
  const [tips, setTips] = useState(15000);
  const [salary, setSalary] = useState(40000);
  const [filing, setFiling] = useState<'single' | 'married' | 'hoh'>('single');

  // No Tax on Tips: deduct up to $25,000 from federal income
  const tipThresh = filing === 'married' ? 300000 : 150000;
  const tipPhaseOut = Math.max(0, Math.ceil((salary + tips - tipThresh) / 1000) * 100);
  const tipDeduction = Math.max(0, Math.min(tips, 25000) - tipPhaseOut);
  const taxableTips = Math.max(0, tips - tipDeduction);

  // Federal brackets
  const filingStatus = filing === 'married' ? 'married' : filing === 'hoh' ? 'head' : 'single';
  const federalWithLaw = estimateFederalIncomeTax(salary + taxableTips, filingStatus);
  const federalWithoutLaw = estimateFederalIncomeTax(salary + tips, filingStatus);
  const federalSavings = federalWithoutLaw - federalWithLaw;
  const totalWages = salary + tips;
  const socialSecurityOnTips = Math.max(
    0,
    Math.min(totalWages, FICA.socialSecurity.cap) - Math.min(salary, FICA.socialSecurity.cap),
  ) * FICA.socialSecurity.rate;
  const additionalMedicareThreshold = filing === 'married' ? 250000 : FICA.additionalMedicare.threshold;
  const additionalMedicareOnTips = Math.max(0, totalWages - additionalMedicareThreshold)
    - Math.max(0, salary - additionalMedicareThreshold);
  const ficaOnTips = socialSecurityOnTips
    + tips * FICA.medicare.rate
    + additionalMedicareOnTips * FICA.additionalMedicare.rate;
  const totalSavings = federalSavings;

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();

  return (
    <div style={BG}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 6px' }}>

        <div style={{ fontSize: '14px', color: '#b8c8d8', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link href="/tip-calculator" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Tip Tax Calculator</Link>
          <span>/</span>
          <span style={{ color: '#fff' }}>{stateName}</span>
        </div>

        <div style={{ marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(244,114,182,0.08)', border: '1px solid rgba(244,114,182,0.25)', borderRadius: '20px', padding: '5px 14px', fontSize: '14px', marginBottom: '16px', color: '#f472b6' }}>
            <span>Federal deduction for qualified tips · Tax years 2025–2028</span>
          </div>
          <h1 style={{ fontSize: 'clamp(26px,4.5vw,46px)', fontWeight: 900, margin: '0 0 14px', lineHeight: 1.1 }}>
            {stateName} Tip Tax
            <br /><span style={{ color: '#F5C842' }}>Calculator 2026</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', maxWidth: '580px', lineHeight: 1.75, margin: '0 0 20px' }}>
            {'Estimate federal income-tax savings from a possible deduction for qualified tips. State income-tax treatment varies and is not modeled here. The state minimum wage is $' + minWage + '/hr in 2026.'}
          </p>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.78)', maxWidth: '680px', lineHeight: 1.65, margin: '0 0 20px' }}>
            This scenario assumes employee wages and that all tips entered qualify. It approximates modified adjusted gross income using only wages and tips; self-employment income, other income, credits, and individual eligibility are not evaluated.
          </p>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.78)', maxWidth: '680px', lineHeight: 1.65, margin: '0 0 20px' }}>
            Review the <a href="https://www.irs.gov/newsroom/one-big-beautiful-bill-how-to-take-advantage-of-no-tax-on-tips-and-overtime" target="_blank" rel="noopener noreferrer" style={{ color: '#f472b6', textDecoration: 'underline' }}>IRS deduction guidance</a> and its <a href="https://www.irs.gov/newsroom/treasury-irs-issue-guidance-listing-occupations-where-workers-customarily-and-regularly-receive-tips-under-the-one-big-beautiful-bill" target="_blank" rel="noopener noreferrer" style={{ color: '#f472b6', textDecoration: 'underline' }}>occupation guidance</a> to assess eligibility.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[' Federal deduction', ' Qualified tips only', ' Tax year 2026', ' Runs in your browser'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '5px 14px', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Law Stats */}
        <div style={{ background: 'rgba(244,114,182,0.06)', border: '1px solid rgba(244,114,182,0.18)', borderRadius: '14px', padding: '20px', marginBottom: '28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: '16px' }}>
          {[
            { label: 'Max Tip Deduction', value: '$25,000', icon: '' },
            { label: 'Effective From', value: 'Jan 1, 2025', icon: '' },
            { label: 'Income Phase-Out', value: '$150k / $300k joint', icon: '' },
            { label: 'State Income Tax', value: noStateTax ? 'No individual income tax' : 'Not modeled', icon: '' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '22px', marginBottom: '4px' }}>{s.icon}</div>
              <div style={{ fontSize: '14px', color: '#c4d2e3', marginBottom: '2px' }}>{s.label}</div>
              <div style={{ fontWeight: 800, fontSize: '18px', color: '#f472b6' }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '24px', marginBottom: '40px' }}>
          <div style={CARD}>
            <div style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.1em', color: '#f472b6', marginBottom: '4px' }}>TIP TAX CALCULATOR</div>
            <div style={{ fontSize: '14px', color: '#b8c8d8', marginBottom: '24px' }}>2026 NO TAX ON TIPS LAW</div>
            <div style={{ marginBottom: '16px' }}>
              <label style={LABEL}>Annual tips entered (assumed qualified, $)</label>
              <input type="number" value={tips} onChange={e => setTips(Number(e.target.value))} onFocus={e => e.target.select()} style={INPUT_S} min={0} step="100" />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={LABEL}>Annual employee wages excluding tips ($)</label>
              <input type="number" value={salary} onChange={e => setSalary(Number(e.target.value))} onFocus={e => e.target.select()} style={INPUT_S} min={0} step="100" />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={LABEL}>Filing Status</label>
              <select value={filing} onChange={e => {
                const value = e.target.value;
                if (value === 'single' || value === 'married' || value === 'hoh') setFiling(value);
              }} style={{...INPUT_S, cursor:'pointer', colorScheme:'dark'}}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>
            <div style={{ background: 'rgba(244,114,182,0.08)', border: '1px solid rgba(244,114,182,0.2)', borderRadius: '10px', padding: '14px', marginTop: '8px' }}>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>Estimated qualified tips deduction</div>
              <div style={{ fontSize: '28px', fontWeight: 900, color: '#f472b6' }}>{fmt(tipDeduction)}</div>
            </div>
          </div>

          <div style={CARD}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#f472b6', marginBottom: '4px' }}>YOUR SAVINGS</div>
            <div style={{ fontSize: '14px', color: '#b8c8d8', marginBottom: '24px' }}>{stateName.toUpperCase()} · 2026</div>
            <div style={ROW}><span style={{ opacity: 0.7 }}>Tips entered</span><span style={{ fontWeight: 700 }}>{fmt(tips)}</span></div>
            <div style={ROW}><span style={{ opacity: 0.7 }}>Estimated qualified tips deduction</span><span style={{ color: '#4ade80', fontWeight: 600 }}>{fmt(tipDeduction)}</span></div>
            <div style={ROW}><span style={{ opacity: 0.7 }}>Entered tips not deducted in this estimate</span><span style={{ color: taxableTips > 0 ? '#f87171' : '#4ade80' }}>{fmt(taxableTips)}</span></div>
            <div style={ROW}><span style={{ opacity: 0.7 }}>Estimated federal income tax saved</span><span style={{ color: '#4ade80', fontWeight: 600 }}>+{fmt(federalSavings)}</span></div>
            <div style={ROW}>
              <span style={{ opacity: 0.7 }}>State income-tax effect</span>
              <span style={{ color: '#c4d2e3', fontWeight: 600 }}>
                {noStateTax ? '$0 (no individual income tax)' : 'Not modeled'}
              </span>
            </div>
            <div style={{ ...ROW, borderBottom: 'none' }}>
              <span style={{ opacity: 0.7, fontSize: '16px' }}>Estimated employee FICA on tips</span>
              <span style={{ color: '#f87171', fontSize: '16px' }}>-{fmt(ficaOnTips)}</span>
            </div>
            <div style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: '12px', padding: '16px', marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700 }}>Estimated federal tax saved</span>
              <span style={{ fontWeight: 900, fontSize: '26px', color: '#4ade80' }}>+{fmt(totalSavings)}</span>
            </div>
          </div>
        </div>

        <CalculatorResultActions
          summary={`2026 ${stateName} qualified-tips deduction scenario (${filing === 'married' ? 'Married Filing Jointly' : filing === 'hoh' ? 'Head of Household' : 'Single'})\nAnnual employee wages excluding tips: ${fmt(salary)}\nAnnual tips entered (assumed qualified): ${fmt(tips)}\nEstimated qualified tips deduction: ${fmt(tipDeduction)}\nEstimated federal income-tax savings: ${fmt(federalSavings)}\nState income-tax impact: ${noStateTax ? 'no broad individual income tax in this state; state payroll taxes are not modeled' : 'not modeled; state treatment varies'}\nEstimated employee FICA on tips: ${fmt(ficaOnTips)}. MAGI is approximated as wages plus tips. Other income, self-employment income/tax, credits, deductions, and occupation eligibility are not modeled.`}
          relatedLinks={[
            { href: '/tip-calculator', label: 'Compare tip taxes by state →' },
            { href: '/no-tax-on-tips-calculator', label: 'Federal tip deduction calculator →' },
            { href: '/federal-paycheck-calculator', label: 'Federal paycheck calculator →' },
          ]}
        />

        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '32px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 14px' }}>No Tax on Tips in {stateName} — 2026 Guide</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: '16px' }}>
            For tax years 2025–2028, eligible workers may claim a federal deduction of up to <strong style={{ color: '#fff' }}>$25,000 for qualified tips</strong>, subject to occupation, income, and other rules. This is a deduction, not a blanket exemption from every tax on tips.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: '24px' }}>
            {noStateTax
              ? stateName + ' has no broad individual income tax. This calculator estimates federal income-tax savings only; employee FICA and state payroll taxes may still apply.'
              : 'State conformity to the federal deduction varies. This calculator does not estimate state income-tax savings; check current guidance from the state tax agency.'}
          </p>
          {noTipCredit !== null && noTipCredit !== undefined && (
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: '24px' }}>
              {noTipCredit
                ? stateName + ' is one of 7 states that ban the tip credit entirely (with Alaska, Minnesota, Montana, Nevada, Oregon, and Washington). Employers must pay the full state minimum wage of $' + minWage + '/hr in cash before tips — tips cannot offset base pay.'
                : stateName + ' follows the federal tip credit rule: employers may pay tipped workers a cash wage as low as $2.13/hr, using up to $5.12/hr in tips to reach the $7.25/hr federal floor. If tips fall short in any week, the employer must make up the difference.'}
            </p>
          )}
          <Link href="/tip-calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(244,114,182,0.1)', border: '1px solid rgba(244,114,182,0.3)', borderRadius: '8px', padding: '10px 18px', color: '#f472b6', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>
            Compare tip taxes across all 50 states →
          </Link>
        </div>
      </div>
    </div>
  );
}
