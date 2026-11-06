'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import CalculatorResultActions from '@/components/CalculatorResultActions';
import { estimateFederalIncomeTax } from '@/lib/paycheck';
export default function NoTaxOvertimeClient() {
  const [regular, setRegular] = useState('25');
  const [otHours, setOtHours] = useState('10');
  const [weeks, setWeeks] = useState('52');
  const [filing, setFiling] = useState('single');

  const r = useMemo(() => {
    const reg = Math.min(1000, Math.max(0, parseFloat(regular) || 0));
    const ot = Math.min(80, Math.max(0, parseFloat(otHours) || 0));
    const wk = Math.min(52, Math.max(1, parseFloat(weeks) || 52));
    const otRate = reg * 1.5;
    const annualOT = otRate * ot * wk;
    const annualRegular = reg * 40 * wk;
    const annualTotal = annualRegular + annualOT;
    // IRS: only the premium (0.5x) part of overtime is deductible. Cap 12,500 / 25,000. Phase-out 100 per 1,000 of MAGI over 150k / 300k.
    // MAGI is approximated by total annual pay (assumes no other income).
    const qualifiedPremium = (otRate - reg) * ot * wk;
    const otCap = filing === 'married' ? 25000 : 12500;
    const otThresh = filing === 'married' ? 300000 : 150000;
    const otPhaseOut = Math.max(0, Math.ceil((annualTotal - otThresh) / 1000) * 100);
    const otDeduction = Math.max(0, Math.min(qualifiedPremium, otCap) - otPhaseOut);
    const filingStatus = filing === 'married' ? 'married' : filing === 'hoh' ? 'head' : 'single';
    const fedOld = estimateFederalIncomeTax(annualTotal, filingStatus);
    const fedNew = estimateFederalIncomeTax(annualTotal - otDeduction, filingStatus);
    const savings = fedOld - fedNew;

    return { annualOT, annualRegular, annualTotal, fedOld, fedNew, savings, totalSavings: savings, otRate, qualifiedPremium, otDeduction };
  }, [regular, otHours, weeks, filing]);

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();
  const inp: React.CSSProperties = { width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: 'white', fontSize: '15px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' };
  const lbl: React.CSSProperties = { fontSize: '16px', color: '#c4d2e3', fontWeight: 600, marginBottom: '6px', display: 'block' };

  return (
    <div suppressHydrationWarning style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 6px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '14px', marginBottom: '12px', color: '#fbbf24' }}>Signed Law 2025–2028 — No Tax on Overtime</div>
          <h1 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, margin: '0 0 12px', lineHeight: 1.2 }}>No Tax on Overtime Calculator 2026</h1>
          <p style={{ fontSize: '16px', color: '#c4d2e3', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>Estimate the federal income-tax savings from the qualified 0.5× overtime premium deduction.</p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '16px', padding: '28px', marginBottom: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: '16px', marginBottom: '16px' }}>
            <div><label style={lbl}>Regular Hourly Rate ($)</label><input type="number" value={regular} onChange={e => setRegular(e.target.value)} min={0} style={inp} placeholder="25" /></div>
            <div><label style={lbl}>OT Hours/Week</label><input type="number" value={otHours} onChange={e => setOtHours(e.target.value)} min={0} style={inp} placeholder="10" /></div>
            <div><label style={lbl}>Weeks/Year</label><input type="number" value={weeks} onChange={e => setWeeks(e.target.value)} min={1} style={inp} placeholder="52" /></div>
            <div>
              <label style={lbl}>Filing Status</label>
              <select value={filing} onChange={e => setFiling(e.target.value)} style={{...inp, colorScheme:'dark', color:'#fff', background:'#1e2a4a'}}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>
          </div>

          <div style={{ background: 'linear-gradient(135deg,rgba(251,191,36,0.12),rgba(99,102,241,0.12))', border: '1px solid rgba(251,191,36,0.25)', borderRadius: '12px', padding: '24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '16px', color: '#c4d2e3', marginBottom: '4px' }}>Annual Tax Savings on Overtime</div>
              <div style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: '#fbbf24', lineHeight: 1 }}>{fmt(r.totalSavings)}</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: '10px' }}>
              {[
                { l: 'OT Rate', v: '$' + r.otRate.toFixed(2) + '/hr' },
                { l: 'Annual OT Pay', v: fmt(r.annualOT) },
                { l: 'Fed Tax Saved', v: fmt(r.savings), c: '#fbbf24' },
              ].map(b => (
                <div key={b.l} style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '14px', color: '#c4d2e3', marginBottom: '3px' }}>{b.l}</div>
                  <div style={{ fontWeight: 800, fontSize: '16px', color: b.c || 'white' }}>{b.v}</div>
                </div>
              ))}
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: '14px', color: '#b8c8d8', margin: '10px 0 0' }}>Calculations run in your browser; your data is not sent anywhere.</p>
          <CalculatorResultActions
            summary={`2026 overtime deduction estimate (${filing === 'married' ? 'Married Filing Jointly' : filing === 'hoh' ? 'Head of Household' : 'Single'})\nRegular hourly rate: $${Number(regular).toFixed(2)}\nOvertime rate: $${r.otRate.toFixed(2)} per hour\nAnnual overtime pay: ${fmt(r.annualOT)}\nQualified overtime premium deduction: ${fmt(r.otDeduction)}\nEstimated federal income-tax savings: ${fmt(r.savings)}\nThis is an estimate based on entered overtime and wages; state tax and other income or deductions are not modeled.`}
            relatedLinks={[
              { href: '/no-tax-on-tips-calculator', label: 'Tip deduction calculator →' },
              { href: '/federal-paycheck-calculator', label: 'Federal paycheck calculator →' },
              { href: '/overtime-calculator', label: 'Overtime pay calculator →' },
            ]}
          />
        </div>

        <div style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.15)', borderRadius: '12px', padding: '18px', marginBottom: '24px' }}>
          <h3 style={{ color: '#fbbf24', fontWeight: 800, margin: '0 0 8px', fontSize: '16px' }}>Legislative Status</h3>
          <p style={{ fontSize: '16px', color: '#c4d2e3', lineHeight: 1.7, margin: 0 }}>
            The 2025 law allows a deduction for qualified overtime compensation required under the FLSA, generally the premium above the regular rate, for tax years 2025–2028. The annual limit is generally $12,500 ($25,000 for joint filers), subject to income and eligibility rules. A Form 1099 by itself neither establishes nor rules out eligibility; ordinary independent contractors generally are not entitled to FLSA overtime. This estimate assumes the entered overtime qualifies and does not model state taxes or payroll withholding.{' '}
            <a href="https://www.irs.gov/pub/taxpros/fs-2026-13.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24', textDecoration: 'underline' }}>Review the current IRS fact sheet</a>.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '12px' }}>
          <Link href="/no-tax-on-tips-calculator" style={{ display: 'block', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '12px', padding: '14px', color: 'white', textDecoration: 'none', textAlign: 'center' }}>
            <div style={{ fontSize: '20px', marginBottom: '6px' }}></div>
            <div style={{ fontWeight: 700, fontSize: '16px' }}>No Tax on Tips</div>
            <div style={{ fontSize: '14px', color: '#b8c8d8', marginTop: '4px' }}>Calculate tip savings →</div>
          </Link>
          <Link href="/overtime-calculator" style={{ display: 'block', background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: '12px', padding: '14px', color: 'white', textDecoration: 'none', textAlign: 'center' }}>
            <div style={{ fontSize: '20px', marginBottom: '6px' }}></div>
            <div style={{ fontWeight: 700, fontSize: '16px' }}>Overtime Calculator</div>
            <div style={{ fontSize: '14px', color: '#b8c8d8', marginTop: '4px' }}>Current overtime pay →</div>
          </Link>
          <Link href="/" style={{ display: 'block', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px', padding: '14px', color: 'white', textDecoration: 'none', textAlign: 'center' }}>
            <div style={{ fontSize: '20px', marginBottom: '6px' }}></div>
            <div style={{ fontWeight: 700, fontSize: '16px' }}>Paycheck Calculator</div>
            <div style={{ fontSize: '14px', color: '#b8c8d8', marginTop: '4px' }}>Full tax breakdown →</div>
          </Link>
        </div>
      </div>
      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.8, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '8px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
      </footer>
    </div>
  );
}
