'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import AuthorBox from '@/app/components/AuthorBox';
import CalculatorResultActions from '@/components/CalculatorResultActions';
import { estimateFederalIncomeTax } from '@/lib/paycheck';
import { FICA } from '@/lib/taxRates2026';

export default function NoTaxOnTipsCalculator() {
  const [tips, setTips] = useState('800');
  const [wages, setWages] = useState('600');
  const [filing, setFiling] = useState<'single' | 'married' | 'hoh'>('single');
  const [weeks, setWeeks] = useState('52');
  const inputError = useMemo(() => {
    const values = [tips, wages, weeks];
    if (values.some(value => value.trim() === '')) return 'Complete all fields with valid numbers.';
    const [tipValue, wageValue, weekValue] = values.map(Number);
    if (!Number.isFinite(tipValue) || tipValue < 0 || !Number.isFinite(wageValue) || wageValue < 0) {
      return 'Enter non-negative weekly tips and wages.';
    }
    if (tipValue > 1000000000 || wageValue > 1000000000) {
      return 'Weekly tips and wages must each be $1,000,000,000 or less.';
    }
    if (!Number.isInteger(weekValue) || weekValue < 1 || weekValue > 52) {
      return 'Enter 1 to 52 whole weeks per year.';
    }
    return '';
  }, [tips, wages, weeks]);

  const r = useMemo(() => {
    const t = Number(tips);
    const w = Number(wages);
    const wk = Number(weeks);
    const annualTips = t * wk;
    const annualWages = w * wk;
    const annualTotal = annualTips + annualWages;
    const cap = 25000;
    const tipThresh = filing === 'married' ? 300000 : 150000;
    const tipPhaseOut = Math.max(0, Math.ceil((annualTotal - tipThresh) / 1000) * 100);
    const deductedTips = Math.max(0, Math.min(annualTips, cap) - tipPhaseOut);
    const tipsOutsideDeduction = Math.max(0, annualTips - deductedTips);
    const filingStatus = filing === 'married' ? 'married' : filing === 'hoh' ? 'head' : 'single';
    const fedOld = estimateFederalIncomeTax(annualTotal, filingStatus);
    const fedNew = estimateFederalIncomeTax(annualTotal - deductedTips, filingStatus);
    const savings = fedOld - fedNew;
    const socialSecurityOnTips = Math.max(
      0,
      Math.min(annualTotal, FICA.socialSecurity.cap) - Math.min(annualWages, FICA.socialSecurity.cap),
    ) * FICA.socialSecurity.rate;
    const additionalMedicareThreshold = filing === 'married' ? 250000 : FICA.additionalMedicare.threshold;
    const additionalMedicareOnTips = Math.max(0, annualTotal - additionalMedicareThreshold)
      - Math.max(0, annualWages - additionalMedicareThreshold);
    const ficaOnTips = socialSecurityOnTips
      + annualTips * FICA.medicare.rate
      + additionalMedicareOnTips * FICA.additionalMedicare.rate;

    return { annualTips, annualWages, annualTotal, deductedTips, tipsOutsideDeduction, fedOld, fedNew, savings, totalSavings: savings, cap, ficaOnTips };
  }, [tips, wages, filing, weeks]);

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-US');
  const inp: React.CSSProperties = { width: '100%', minHeight: 46, padding: '10px 14px', background: '#1e2a4a', border: '1px solid rgba(245,200,66,0.3)', borderRadius: '8px', color: 'white', fontSize: '16px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', colorScheme: 'dark' };
  const lbl: React.CSSProperties = { fontSize: '16px', color: '#c4d2e3', fontWeight: 600, marginBottom: '6px', display: 'block' };

  return (
    <div style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 6px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', marginBottom: '12px', color: '#4ade80' }}>Qualified tips deduction · Tax years 2025–2028</div>
          <h1 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, margin: '0 0 12px', lineHeight: 1.2 }}>No Tax on Tips Calculator 2026</h1>
          <p style={{ fontSize: '16px', color: '#c4d2e3', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>Estimate federal income-tax savings from a possible deduction of up to $25,000 for qualified tips. This is not a blanket exemption from every tax on tips.</p>
          <div style={{ fontSize: '14px', color: '#b8c8d8', marginTop: 8 }}>Last updated: May 2026 · By the PrivatePaycheck Team</div>
        </div>
        <div style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.25)', borderRadius: 8, padding: '16px 20px', marginBottom: 24 }}>
          <div style={{ fontWeight: 800, color: '#F5C842', marginBottom: 10, fontSize: 16 }}>KEY TAKEAWAYS</div>
          <ul style={{ margin: 0, padding: '0 0 0 18px', fontSize: 16, lineHeight: 1.7, color: '#e2e8f0' }}>
            <li>Eligible workers may deduct up to <strong>$25,000</strong> of qualified tips from federal income for tax years 2025–2028</li>
            <li>The deduction phases out above $150,000 MAGI ($300,000 joint) and depends on occupation, tip type, and other IRS rules</li>
            <li>Social Security and Medicare taxes are not removed by this deduction</li>
            <li>Tips must still be <strong>reported</strong>; state and local tax treatment varies</li>
            <li>Tax savings depend on income, filing status, and eligibility; use the estimate below</li>
          </ul>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,200,66,0.3)', borderRadius: '16px', padding: 'clamp(16px,4vw,28px)', marginBottom: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: '16px', marginBottom: '16px' }}>
            <div><label htmlFor="tip-weekly-tips" style={lbl}>Weekly Tips ($)</label><input id="tip-weekly-tips" type="number" value={tips} onChange={e => setTips(e.target.value)} min={0} step="0.01" style={inp} placeholder="800" /></div>
            <div><label htmlFor="tip-weekly-wages" style={lbl}>Weekly Wages ($)</label><input id="tip-weekly-wages" type="number" value={wages} onChange={e => setWages(e.target.value)} min={0} step="0.01" style={inp} placeholder="600" /></div>
            <div><label htmlFor="tip-weeks" style={lbl}>Weeks Worked/Year</label><input id="tip-weeks" type="number" value={weeks} onChange={e => setWeeks(e.target.value)} min={1} max={52} step={1} style={inp} placeholder="52" /></div>
            <div>
              <label style={lbl}>Filing Status</label>
              <select value={filing} onChange={e => {
                const value = e.target.value;
                if (value === 'single' || value === 'married' || value === 'hoh') setFiling(value);
              }} style={inp}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>
          </div>

          {inputError && <p role="alert" style={{ color: '#fca5a5', fontSize: 16, lineHeight: 1.5 }}>{inputError}</p>}
          <div aria-label="Estimated tax savings" style={{ background: 'linear-gradient(135deg,rgba(245,200,66,0.12),rgba(245,200,66,0.04))', border: '1px solid rgba(245,200,66,0.3)', borderRadius: '12px', padding: 'clamp(16px,4vw,24px)', display: inputError ? 'none' : undefined }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '16px', color: '#c4d2e3', marginBottom: '4px' }}>Estimated Annual Federal Tax Savings</div>
              <div style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: '#F5C842', lineHeight: 1 }}>{fmt(r.totalSavings)}</div>
              <div style={{ fontSize: '15px', color: '#b8c8d8', marginTop: '6px' }}>FICA still applies to tips; see the estimate below.</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '10px', marginBottom: '16px' }}>
              {[
                { l: 'Annual Tips', v: fmt(r.annualTips) },
                { l: 'Qualified tips deduction', v: fmt(r.deductedTips), c: '#4ade80' },
                { l: 'Fed Tax Saved', v: fmt(r.savings), c: '#4ade80' },
              ].map(b => (
                <div key={b.l} style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '14px', color: '#c4d2e3', marginBottom: '3px' }}>{b.l}</div>
                  <div style={{ fontWeight: 800, fontSize: '16px', color: b.c || 'white' }}>{b.v}</div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '8px', fontSize: '15px', color: '#c4d2e3' }}>
              <div>Tax WITHOUT deduction: <strong style={{ color: '#fca5a5' }}>{fmt(r.fedOld)}</strong></div>
              <div>Tax WITH deduction: <strong style={{ color: '#F5C842' }}>{fmt(r.fedNew)}</strong></div>
              <div>Estimated FICA on tips: <strong>{fmt(r.ficaOnTips)}</strong></div>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: '14px', color: '#b8c8d8', margin: '10px 0 0' }}>Calculations run in your browser; your inputs are not sent or stored.</p>
          {!inputError && <CalculatorResultActions
            summary={`2026 qualified-tips deduction estimate (${filing === 'married' ? 'Married Filing Jointly' : filing === 'hoh' ? 'Head of Household' : 'Single'})\nWeekly wages: ${fmt(Number(wages))}\nWeekly tips: ${fmt(Number(tips))}\nWeeks worked: ${weeks}\nAnnual tips entered: ${fmt(r.annualTips)}\nEstimated qualified tips deduction: ${fmt(r.deductedTips)}\nTips outside estimated deduction: ${fmt(r.tipsOutsideDeduction)}\nEstimated federal income-tax savings: ${fmt(r.savings)}\nEstimated FICA on tips: ${fmt(r.ficaOnTips)}; this deduction does not remove Social Security or Medicare taxes. MAGI is approximated as entered wages plus tips; state taxes, occupation eligibility, self-employment rules, and other income, credits, and deductions are not modeled.`}
            relatedLinks={[
              { href: '/no-tax-on-overtime-deduction', label: 'Overtime deduction calculator →' },
              { href: '/federal-paycheck-calculator', label: 'Federal paycheck calculator →' },
              { href: '/tip-calculator', label: 'Tip calculator by state →' },
            ]}
          />}
        </div>

        <div style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.15)', borderRadius: '12px', padding: '18px', marginBottom: '24px' }}>
          <h3 style={{ color: '#fbbf24', fontWeight: 800, margin: '0 0 8px', fontSize: '16px' }}>How to read this estimate</h3>
          <p style={{ fontSize: '16px', color: '#e2e8f0', lineHeight: 1.7, margin: 0 }}>
            The law provides a federal deduction for qualified tips for tax years 2025–2028. This calculator approximates modified adjusted gross income as wages plus tips and does not verify occupation or tip eligibility, self-employment limits, state tax treatment, or other income and deductions.{' '}
            <a href="https://www.irs.gov/newsroom/one-big-beautiful-bill-how-to-take-advantage-of-no-tax-on-tips-and-overtime" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24', textDecoration: 'underline' }}>Review IRS guidance</a>.
          </p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>No Tax on Tips &mdash; FAQ</h2>
          {[
            { q: 'Who may qualify for the qualified tips deduction?', a: 'Employees and self-employed individuals may qualify for voluntary tips from occupations identified by the IRS, subject to income and other rules. This calculator does not validate occupation or tip eligibility.' },
            { q: 'What is the maximum deduction?', a: 'The maximum annual federal deduction is $25,000. It phases out when modified adjusted gross income exceeds $150,000 ($300,000 for married filing jointly). Self-employed taxpayers are also subject to a business-income limit.' },
            { q: 'Does the deduction eliminate Social Security or Medicare taxes?', a: 'No. The federal income-tax deduction does not remove Social Security or Medicare taxes. The exact payroll tax treatment depends on the taxpayer and reported income.' },
            { q: 'Do I still need to report tips?', a: 'Yes. Qualified tips remain reportable. The deduction affects federal income tax subject to its rules; it is not an exemption from every tax.' },
          ].map(item => (
            <div key={item.q} style={{ marginBottom: '14px', paddingBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '5px' }}>{item.q}</h3>
              <p style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '12px' }}>
          <Link href="/no-tax-on-overtime-deduction" style={{ display: 'block', background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: '12px', padding: '14px', color: 'white', textDecoration: 'none', textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: '13px' }}>No Tax on Overtime</div>
            <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '3px' }}>Calculate OT savings &rarr;</div>
          </Link>
          <Link href="/" style={{ display: 'block', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '12px', padding: '14px', color: 'white', textDecoration: 'none', textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: '13px' }}>Paycheck Calculator</div>
            <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '3px' }}>Full breakdown &rarr;</div>
          </Link>
        </div>
      </div>

      <AuthorBox />
    </div>
  );
}
