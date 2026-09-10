'use client';
import { useState, useEffect } from 'react';

const FEDERAL_BRACKETS_SINGLE = [
  { min:0, max:12400, rate:0.10 },
  { min:12400, max:50400, rate:0.12 },
  { min:50400, max:105700, rate:0.22 },
  { min:105700, max:201775, rate:0.24 },
  { min:201775, max:256225, rate:0.32 },
  { min:256225, max:640600, rate:0.35 },
  { min:640600, max:Infinity, rate:0.37 },
];
const FEDERAL_BRACKETS_MARRIED = [
  { min:0, max:24800, rate:0.10 },
  { min:24800, max:100800, rate:0.12 },
  { min:100800, max:211400, rate:0.22 },
  { min:211400, max:403550, rate:0.24 },
  { min:403550, max:512450, rate:0.32 },
  { min:512450, max:768700, rate:0.35 },
  { min:768700, max:Infinity, rate:0.37 },
];

function calcFedTax(income: number, married: boolean): number {
  const brackets = married ? FEDERAL_BRACKETS_MARRIED : FEDERAL_BRACKETS_SINGLE;
  const stdDed = married ? 32200 : 16100;
  const taxable = Math.max(0, income - stdDed);
  let tax = 0;
  for (const b of brackets) {
    if (taxable <= b.min) break;
    tax += (Math.min(taxable, b.max) - b.min) * b.rate;
  }
  return tax;
}

// No Tax on Tips deduction: up to $25,000, phases out $100 per $1000 over $150,000
function calcTipDeduction(totalIncome: number, tips: number): number {
  const maxDeduction = 25000;
  const phaseOutStart = 150000;
  const reduction = Math.max(0, Math.floor((totalIncome - phaseOutStart) / 1000) * 100);
  const allowedDeduction = Math.max(0, maxDeduction - reduction);
  return Math.min(tips, allowedDeduction);
}

interface Props {
  stateName: string;
  stateRate: number;
  noTax: boolean;
}

export default function TipCalculatorClient({ stateName, stateRate, noTax }: Props) {
  const [salary, setSalary] = useState('35000');
  const [tips, setTips] = useState('18000');
  const [filing, setFiling] = useState<'single'|'married'>('single');
  const [result, setResult] = useState<{
    withoutLaw: { federal: number; state: number; total: number };
    withLaw: { federal: number; state: number; total: number };
    savings: number;
    deduction: number;
    netTips: number;
  } | null>(null);

  useEffect(() => {
    const s = parseFloat(salary) || 0;
    const t = parseFloat(tips) || 0;
    if (t <= 0) { setResult(null); return; }

    const married = filing === 'married';
    const totalIncome = s + t;

    // WITHOUT new law
    const fedWithout = calcFedTax(totalIncome, married);
    const stateWithout = noTax ? 0 : totalIncome * stateRate;

    // WITH new law — deduct eligible tips
    const deduction = calcTipDeduction(totalIncome, t);
    const taxableWithLaw = totalIncome - deduction;
    const fedWith = calcFedTax(taxableWithLaw, married);
    const stateWith = noTax ? 0 : taxableWithLaw * stateRate; // simplified

    const savings = (fedWithout + stateWithout) - (fedWith + stateWith);
    const netTips = t - (fedWith - calcFedTax(s, married)) - (noTax ? 0 : t * stateRate * (1 - deduction/t));

    setResult({
      withoutLaw: { federal: fedWithout, state: stateWithout, total: fedWithout + stateWithout },
      withLaw: { federal: fedWith, state: stateWith, total: fedWith + stateWith },
      savings,
      deduction,
      netTips: Math.max(0, t - savings > t ? t : t - (fedWithout - fedWith) - (stateWithout - stateWith) * 0),
    });
  }, [salary, tips, filing, stateRate, noTax]);

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();

  return (
    <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(244,114,182,0.3)', borderRadius:'16px', padding:'28px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'16px', marginBottom:'20px' }}>
        {[
          { label:'Annual Salary (excl. tips) ($)', value:salary, set:setSalary, placeholder:'35000' },
          { label:'Annual Tips ($)', value:tips, set:setTips, placeholder:'18000' },
        ].map(f => (
          <div key={f.label}>
            <label style={{ fontSize:'11px', color:'rgba(255,255,255,0.65)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:'6px', display:'block' }}>{f.label}</label>
            <input type="number" value={f.value} onChange={e => f.set(e.target.value)} min={0} placeholder={f.placeholder}
              style={{ width:'100%', background:'#1e2a4a', border:'1.5px solid rgba(255,255,255,0.12)', borderRadius:'10px', padding:'11px 14px', color:'#fff', fontSize:'15px', fontFamily:'inherit', outline:'none', boxSizing:'border-box' as const }} />
          </div>
        ))}
        <div>
          <label style={{ fontSize:'11px', color:'rgba(255,255,255,0.65)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:'6px', display:'block' }}>Filing Status</label>
          <select value={filing} onChange={e => setFiling(e.target.value as 'single'|'married')}
            style={{ width:'100%', background:'#1e2a4a', border:'1.5px solid rgba(255,255,255,0.2)', borderRadius:'10px', padding:'11px 14px', color:'#fff', fontSize:'15px', fontFamily:'inherit', outline:'none', boxSizing:'border-box' as const, colorScheme:'dark' }}>
            <option value="single">Single</option>
            <option value="married">Married Filing Jointly</option>
            <option value="hoh">Head of Household</option>
          </select>
        </div>
      </div>

      {result ? (
        <div>
          {/* Savings highlight */}
          <div style={{ background:'linear-gradient(135deg,rgba(244,114,182,0.2),rgba(251,191,36,0.1))', border:'1px solid rgba(244,114,182,0.4)', borderRadius:'12px', padding:'20px', textAlign:'center', marginBottom:'16px' }}>
            <div style={{ fontSize:'13px', opacity:0.7, marginBottom:'4px' }}> Your Tax Savings — No Tax on Tips Law</div>
            <div style={{ fontSize:'44px', fontWeight:900, color:'#4ade80' }}>{fmt(result.savings)}</div>
            <div style={{ fontSize:'14px', opacity:0.6 }}>per year in {stateName}</div>
            <div style={{ fontSize:'13px', color:'#f472b6', marginTop:'8px' }}>
              Eligible tip deduction: {fmt(result.deduction)} / $25,000 max
            </div>
          </div>

          {/* Comparison table */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
            {[
              { label:'Without New Law', data: result.withoutLaw, color:'#f87171', bg:'rgba(248,113,113,0.05)' },
              { label:'With No-Tax-on-Tips Law', data: result.withLaw, color:'#4ade80', bg:'rgba(74,222,128,0.05)' },
            ].map(col => (
              <div key={col.label} style={{ background:col.bg, border:`1px solid ${col.color}33`, borderRadius:'10px', padding:'14px' }}>
                <div style={{ fontSize:'12px', fontWeight:700, color:col.color, marginBottom:'10px' }}>{col.label}</div>
                <div style={{ fontSize:'13px', display:'flex', flexDirection:'column', gap:'6px' }}>
                  <div style={{ display:'flex', justifyContent:'space-between' }}>
                    <span style={{ opacity:0.6 }}>Federal Tax</span>
                    <strong>{fmt(col.data.federal)}</strong>
                  </div>
                  <div style={{ display:'flex', justifyContent:'space-between' }}>
                    <span style={{ opacity:0.6 }}>{stateName} State</span>
                    <strong>{noTax ? '$0 ' : fmt(col.data.state)}</strong>
                  </div>
                  <div style={{ display:'flex', justifyContent:'space-between', borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:'6px' }}>
                    <strong>Total Tax</strong>
                    <strong style={{ color:col.color }}>{fmt(col.data.total)}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'12px', padding:'20px', textAlign:'center', color:'rgba(255,255,255,0.5)', fontSize:'14px' }}>
          Enter your salary and annual tips to see your tax savings
        </div>
      )}
      <p style={{ textAlign:'center', fontSize:'11px', opacity: 0.8, marginTop:'12px' }}> All calculations happen in your browser · Estimates for planning purposes</p>
    </div>
  );
}
