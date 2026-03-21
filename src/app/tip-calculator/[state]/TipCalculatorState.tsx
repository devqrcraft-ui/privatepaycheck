'use client';
import { useState } from 'react';
import Link from 'next/link';

interface Props {
  stateName: string;
  stateAbbr: string;
  stateTax: number;
  noStateTax: boolean;
  stateSlug: string;
}

const BG: React.CSSProperties = { minHeight: '100vh', background: '#091526', color: '#fff', fontFamily: 'system-ui,sans-serif' };
const CARD: React.CSSProperties = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '28px' };
const LABEL: React.CSSProperties = { fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: '8px', display: 'block' };
const INPUT_S: React.CSSProperties = { width: '100%', background: '#1e293b', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '12px 14px', color: '#fff', fontSize: '16px', boxSizing: 'border-box', outline: 'none' , colorScheme: 'dark' as const };
const ROW: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' };

export default function TipCalculatorState({ stateName, stateTax, noStateTax, stateSlug }: Props) {
  const [tips, setTips] = useState(15000);
  const [salary, setSalary] = useState(40000);
  const [filing, setFiling] = useState('single');

  // No Tax on Tips: deduct up to $25,000 from federal income
  const tipDeduction = Math.min(tips, 25000);
  const taxableTips = Math.max(0, tips - tipDeduction);

  // Federal brackets
  function fedTax(income: number) {
    const b = filing === 'married'
      ? [[23200,0.10],[94300,0.12],[201050,0.22],[383900,0.24],[487450,0.32],[731200,0.35],[Infinity,0.37]]
      : [[11600,0.10],[47150,0.12],[100525,0.22],[191950,0.24],[243725,0.32],[609350,0.35],[Infinity,0.37]];
    let tax = 0, prev = 0;
    for (const [lim, rate] of b as [number,number][]) {
      if (income <= prev) break;
      tax += (Math.min(income, lim as number) - prev) * rate;
      prev = lim as number;
    }
    return tax;
  }

  const federalWithLaw = fedTax(salary + taxableTips);
  const federalWithoutLaw = fedTax(salary + tips);
  const federalSavings = federalWithoutLaw - federalWithLaw;
  const stateSavings = noStateTax ? 0 : tipDeduction * (stateTax / 100);
  const ficaOnTips = tips * (0.062 + 0.0145); // FICA still applies
  const totalSavings = federalSavings + stateSavings;

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();

  return (
    <main style={BG}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 16px' }}>

        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link href="/tip-calculator" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Tip Tax Calculator</Link>
          <span>/</span>
          <span style={{ color: '#fff' }}>{stateName}</span>
        </div>

        <div style={{ marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(244,114,182,0.08)', border: '1px solid rgba(244,114,182,0.25)', borderRadius: '20px', padding: '5px 14px', fontSize: '12px', marginBottom: '16px', color: '#f472b6' }}>
            <span></span><span>NEW 2025 LAW — Up to $25,000 in tips are now federal tax-free</span>
          </div>
          <h1 style={{ fontSize: 'clamp(26px,4.5vw,46px)', fontWeight: 900, margin: '0 0 14px', lineHeight: 1.1 }}>
            {stateName} Tip Tax
            <br /><span style={{ color: '#F5C842' }}>Calculator 2026</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', maxWidth: '580px', lineHeight: 1.75, margin: '0 0 20px' }}>
            {noStateTax
              ? 'In ' + stateName + ', tipped workers pay NO state income tax on tips. Plus, the federal No Tax on Tips law lets you deduct up to $25,000 — saving you thousands.'
              : 'In ' + stateName + ', the No Tax on Tips law removes federal tax on up to $25,000 of tips. You also save on ' + stateTax + '% state income tax.'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[' No Tax on Tips Law', ' Federal + State', ' 2026 Rules', ' 100% Private'].map(tag => (
              <span key={tag} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '5px 14px', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Law Stats */}
        <div style={{ background: 'rgba(244,114,182,0.06)', border: '1px solid rgba(244,114,182,0.18)', borderRadius: '14px', padding: '20px', marginBottom: '28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: '16px' }}>
          {[
            { label: 'Max Tip Deduction', value: '$25,000', icon: '' },
            { label: 'Effective From', value: 'Jan 1, 2025', icon: '' },
            { label: 'Income Phase-Out', value: '$150,000', icon: '' },
            { label: 'Your State Tax', value: noStateTax ? '0%' : stateTax + '%', icon: '' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '22px', marginBottom: '4px' }}>{s.icon}</div>
              <div style={{ fontSize: '11px', opacity: 0.5, marginBottom: '2px' }}>{s.label}</div>
              <div style={{ fontWeight: 800, fontSize: '18px', color: '#f472b6' }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '24px', marginBottom: '40px' }}>
          <div style={CARD}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#f472b6', marginBottom: '4px' }}>TIP TAX CALCULATOR</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '24px' }}>2026 NO TAX ON TIPS LAW</div>
            <div style={{ marginBottom: '16px' }}>
              <label style={LABEL}>Annual Tips Earned ($)</label>
              <input type="number" value={tips} onChange={e => setTips(Number(e.target.value))} style={INPUT_S} min={0} />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={LABEL}>Annual Salary (non-tip, $)</label>
              <input type="number" value={salary} onChange={e => setSalary(Number(e.target.value))} style={INPUT_S} min={0} />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={LABEL}>Filing Status</label>
              <select value={filing} onChange={e => setFiling(e.target.value)} style={{...INPUT_S, cursor:'pointer', colorScheme:'dark'}}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>
            <div style={{ background: 'rgba(244,114,182,0.08)', border: '1px solid rgba(244,114,182,0.2)', borderRadius: '10px', padding: '14px', marginTop: '8px' }}>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Tax Deduction Applied</div>
              <div style={{ fontSize: '28px', fontWeight: 900, color: '#f472b6' }}>{fmt(tipDeduction)}</div>
            </div>
          </div>

          <div style={CARD}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#f472b6', marginBottom: '4px' }}>YOUR SAVINGS</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '24px' }}>{stateName.toUpperCase()} · 2026</div>
            <div style={ROW}><span style={{ opacity: 0.7 }}>Tips Earned</span><span style={{ fontWeight: 700 }}>{fmt(tips)}</span></div>
            <div style={ROW}><span style={{ opacity: 0.7 }}>Tax-Free Deduction</span><span style={{ color: '#4ade80', fontWeight: 600 }}>{fmt(tipDeduction)}</span></div>
            <div style={ROW}><span style={{ opacity: 0.7 }}>Taxable Tips Remaining</span><span style={{ color: taxableTips > 0 ? '#f87171' : '#4ade80' }}>{fmt(taxableTips)}</span></div>
            <div style={ROW}><span style={{ opacity: 0.7 }}>Federal Tax Saved</span><span style={{ color: '#4ade80', fontWeight: 600 }}>+{fmt(federalSavings)}</span></div>
            <div style={ROW}>
              <span style={{ opacity: 0.7 }}>{stateName} State Tax Saved</span>
              <span style={noStateTax ? { color: '#4ade80', fontWeight: 600 } : { color: '#4ade80', fontWeight: 600 }}>
                {noStateTax ? '$0 (no state tax)' : '+' + fmt(stateSavings)}
              </span>
            </div>
            <div style={{ ...ROW, borderBottom: 'none' }}><span style={{ opacity: 0.7, fontSize: '12px' }}>FICA (still owed on tips)</span><span style={{ color: '#f87171', fontSize: '13px' }}>-{fmt(ficaOnTips)}</span></div>
            <div style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: '12px', padding: '16px', marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700 }}>Total Tax Saved</span>
              <span style={{ fontWeight: 900, fontSize: '26px', color: '#4ade80' }}>+{fmt(totalSavings)}</span>
            </div>
          </div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '32px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 14px' }}>No Tax on Tips in {stateName} — 2026 Guide</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: '16px' }}>
            The No Tax on Tips law, effective January 1, 2025, allows tipped workers to deduct up to <strong style={{ color: '#fff' }}>$25,000 in tip income</strong> from their federal taxable income. This applies to workers in traditional tipping industries — restaurants, hotels, salons, and more.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: '24px' }}>
            {noStateTax
              ? stateName + ' workers get a double benefit: no federal tax on tips (up to $25,000) AND no state income tax — making ' + stateName + ' one of the best states for tipped workers.'
              : 'In ' + stateName + ', the federal deduction reduces your ' + stateTax + '% state tax burden too — since many state tax calculations start from federal adjusted gross income.'}
          </p>
          <Link href="/tip-calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(244,114,182,0.1)', border: '1px solid rgba(244,114,182,0.3)', borderRadius: '8px', padding: '10px 18px', color: '#f472b6', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>
            Compare tip taxes across all 50 states →
          </Link>
        </div>
      </div>
    </main>
  );
}
