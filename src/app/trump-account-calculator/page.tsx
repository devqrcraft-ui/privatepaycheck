'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

export default function TrumpAccountCalculator() {
  const [childAge, setChildAge] = useState('0');
  const [employerAnnual, setEmployerAnnual] = useState('1000');
  const [returnRate, setReturnRate] = useState('7');

  const r = useMemo(() => {
    const age = Math.min(17, Math.max(0, parseInt(childAge) || 0));
    const employer = Math.min(2500, parseFloat(employerAnnual) || 0);
    const rate = (parseFloat(returnRate) || 7) / 100;
    const yearsLeft = 18 - age;
    const govSeed = 1000;

    const seedTotal = govSeed * Math.pow(1 + rate, yearsLeft);
    let contribTotal = 0;
    for (let y = 0; y < yearsLeft; y++) {
      contribTotal += employer * Math.pow(1 + rate, yearsLeft - y);
    }
    const total = seedTotal + contribTotal;
    const contributed = govSeed + employer * yearsLeft;
    const growth = total - contributed;
    return { total, seedTotal, contribTotal, contributed, growth, yearsLeft };
  }, [childAge, employerAnnual, returnRate]);

  const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f172a 0%,#1e293b 100%)', color: 'white', fontFamily: 'Inter,sans-serif', padding: '40px 20px' }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 14 }}>Back to all calculators</Link>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginTop: 16, marginBottom: 8 }}>Trump Account Calculator 2026</h1>
        <p style={{ color: '#94a3b8', fontSize: 15, marginBottom: 28 }}>
          See how much your child will have at age 18. Government seeds <strong style={{ color: '#fbbf24' }}>$1,000</strong> at birth.
          Employers can contribute up to <strong style={{ color: '#fbbf24' }}>$2,500/year</strong> tax-free.
        </p>

        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <label style={{ display: 'block', fontSize: 13, color: '#94a3b8', marginBottom: 6 }}>Child Current Age (0-17)</label>
          <input type="number" value={childAge} onChange={e => setChildAge(e.target.value)} min="0" max="17"
            style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.08)', color: 'white', fontSize: 16, boxSizing: 'border-box' }} />

          <label style={{ display: 'block', fontSize: 13, color: '#94a3b8', marginBottom: 6, marginTop: 16 }}>Employer Annual Contribution (max $2,500)</label>
          <input type="number" value={employerAnnual} onChange={e => setEmployerAnnual(e.target.value)} min="0" max="2500"
            style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.08)', color: 'white', fontSize: 16, boxSizing: 'border-box' }} />

          <label style={{ display: 'block', fontSize: 13, color: '#94a3b8', marginBottom: 6, marginTop: 16 }}>Expected Annual Return</label>
          <select value={returnRate} onChange={e => setReturnRate(e.target.value)}
            style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.15)', background: '#1e293b', color: 'white', fontSize: 16, boxSizing: 'border-box', colorScheme: 'dark' }}>
            <option value="5">5% — Conservative</option>
            <option value="7">7% — Historical S&P Average</option>
            <option value="10">10% — Optimistic</option>
          </select>
        </div>

        <div style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.4)', borderRadius: 16, padding: 24 }}>
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <div style={{ fontSize: 13, color: '#a5b4fc', marginBottom: 4 }}>Total at Age 18 ({r.yearsLeft} years of growth)</div>
            <div style={{ fontSize: 48, fontWeight: 900, color: '#818cf8' }}>{fmt(r.total)}</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {([['Gov $1K Seed Growth', fmt(r.seedTotal)], ['Contributions Growth', fmt(r.contribTotal)], ['Total Contributed', fmt(r.contributed)], ['Investment Gains', fmt(r.growth)]] as [string,string][]).map(([label, value]) => (
              <div key={label} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 10, padding: '12px 16px' }}>
                <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>{value}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 24, background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 20, fontSize: 13, color: '#94a3b8' }}>
          <p style={{ margin: '0 0 8px', fontWeight: 600, color: '#cbd5e1' }}>How Trump Accounts work:</p>
          <p style={{ margin: '0 0 6px' }}>Created under the One Big Beautiful Bill — tax-advantaged savings for children under 18.</p>
          <p style={{ margin: '0 0 6px' }}>Government seeds $1,000 at birth. Employers can contribute up to $2,500/year tax-free.</p>
          <p style={{ margin: 0 }}>Funds invest in a stock index fund. Available at 18 for education, first home, or business.</p>
        </div>

        <div style={{ marginTop: 20, textAlign: 'center', fontSize: 13, color: '#64748b' }}>
          <Link href="/senior-deduction-calculator" style={{ color: '#818cf8', marginRight: 16 }}>Senior $6K Deduction</Link>
          <Link href="/no-tax-on-overtime-deduction" style={{ color: '#818cf8', marginRight: 16 }}>Overtime Calculator</Link>
          <Link href="/no-tax-on-tips-calculator" style={{ color: '#818cf8' }}>Tips Calculator</Link>
        </div>
      </div>
    </main>
  );
}
