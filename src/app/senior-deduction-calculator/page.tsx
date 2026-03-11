'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

export default function SeniorDeductionCalculator() {
  const [income, setIncome] = useState('55000');
  const [filing, setFiling] = useState('single');
  const [age, setAge] = useState('68');

  const r = useMemo(() => {
    const inc = parseFloat(income) || 0;
    const ag = parseInt(age) || 0;
    const isEligible = ag >= 65;
    const phaseoutStart = filing === 'married' ? 150000 : 75000;
    const seniorBonus = 6000;
    const overThreshold = Math.max(0, inc - phaseoutStart);
    const reducedBonus = Math.max(0, seniorBonus - overThreshold);
    const actualBonus = isEligible ? reducedBonus : 0;
    const stdDed = filing === 'married' ? 30000 : 15000;

    function fedTax(taxable: number) {
      const b: [number, number][] = filing === 'married'
        ? [[23200,.10],[94300,.12],[201050,.22],[383900,.24],[487450,.32],[731200,.35],[Infinity,.37]]
        : [[11600,.10],[47150,.12],[100525,.22],[191950,.24],[243725,.32],[609350,.35],[Infinity,.37]];
      let tax = 0, prev = 0;
      for (const [lim, rate] of b) {
        if (taxable <= prev) break;
        tax += (Math.min(taxable, lim) - prev) * rate;
        prev = lim;
      }
      return tax;
    }

    const taxableOld = Math.max(0, inc - stdDed);
    const taxableNew = Math.max(0, inc - stdDed - actualBonus);
    const taxOld = fedTax(taxableOld);
    const taxNew = fedTax(taxableNew);
    const savings = taxOld - taxNew;
    return { isEligible, actualBonus, savings, monthly: savings / 12, taxOld, taxNew, phaseoutStart };
  }, [income, filing, age]);

  const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f172a 0%,#1e293b 100%)', color: 'white', fontFamily: 'Inter,sans-serif', padding: '40px 20px' }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 14 }}>Back to all calculators</Link>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginTop: 16, marginBottom: 8 }}>Senior Tax Deduction Calculator 2026</h1>
        <p style={{ color: '#94a3b8', fontSize: 15, marginBottom: 28 }}>
          Extra <strong style={{ color: '#fbbf24' }}>$6,000 deduction</strong> for Americans 65+ under the One Big Beautiful Bill (2025-2028).
          Phases out above $75,000 income (single) or $150,000 (married).
        </p>

        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <label style={{ display: 'block', fontSize: 13, color: '#94a3b8', marginBottom: 6 }}>Annual Income</label>
          <input type="number" value={income} onChange={e => setIncome(e.target.value)}
            style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.08)', color: 'white', fontSize: 16, boxSizing: 'border-box' }} />

          <label style={{ display: 'block', fontSize: 13, color: '#94a3b8', marginBottom: 6, marginTop: 16 }}>Your Age</label>
          <input type="number" value={age} onChange={e => setAge(e.target.value)} min="0" max="100"
            style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.08)', color: 'white', fontSize: 16, boxSizing: 'border-box' }} />

          <label style={{ display: 'block', fontSize: 13, color: '#94a3b8', marginBottom: 6, marginTop: 16 }}>Filing Status</label>
          <select value={filing} onChange={e => setFiling(e.target.value)}
            style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.15)', background: '#1e293b', color: 'white', fontSize: 16, boxSizing: 'border-box' }}>
            <option value="single">Single</option>
            <option value="married">Married Filing Jointly</option>
          </select>
        </div>

        {!r.isEligible ? (
          <div style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 12, padding: 20, textAlign: 'center' }}>
            <p style={{ fontSize: 16, color: '#fca5a5', margin: 0 }}>Must be age 65 or older to qualify.</p>
          </div>
        ) : r.actualBonus === 0 ? (
          <div style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 12, padding: 20, textAlign: 'center' }}>
            <p style={{ fontSize: 16, color: '#fca5a5', margin: 0 }}>Income exceeds phaseout threshold of {fmt(r.phaseoutStart)} — deduction fully phased out.</p>
          </div>
        ) : (
          <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 16, padding: 24 }}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div style={{ fontSize: 13, color: '#86efac', marginBottom: 4 }}>Your Senior Deduction</div>
              <div style={{ fontSize: 42, fontWeight: 900, color: '#4ade80' }}>{fmt(r.actualBonus)}</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {([['Annual Tax Savings', fmt(r.savings)], ['Monthly Savings', fmt(r.monthly)], ['Tax Without Deduction', fmt(r.taxOld)], ['Tax With Deduction', fmt(r.taxNew)]] as [string,string][]).map(([label, value]) => (
                <div key={label} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 10, padding: '12px 16px' }}>
                  <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 20, fontWeight: 700 }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 24, background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 20, fontSize: 13, color: '#94a3b8' }}>
          <p style={{ margin: '0 0 8px', fontWeight: 600, color: '#cbd5e1' }}>How it works:</p>
          <p style={{ margin: '0 0 6px' }}>The One Big Beautiful Bill adds a $6,000 above-the-line deduction for taxpayers age 65+.</p>
          <p style={{ margin: '0 0 6px' }}>Phaseout starts at $75,000 (single) or $150,000 (married) — reduces $1 for every $1 over the threshold.</p>
          <p style={{ margin: 0 }}>Applies to tax years 2025 through 2028.</p>
        </div>

        <div style={{ marginTop: 20, textAlign: 'center', fontSize: 13, color: '#64748b' }}>
          <Link href="/no-tax-on-overtime-deduction" style={{ color: '#818cf8', marginRight: 16 }}>Overtime Calculator</Link>
          <Link href="/no-tax-on-tips-calculator" style={{ color: '#818cf8', marginRight: 16 }}>Tips Calculator</Link>
          <Link href="/trump-account-calculator" style={{ color: '#818cf8' }}>Trump Account</Link>
        </div>
      </div>
    </main>
  );
}
