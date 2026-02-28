'use client';
import { useState, useEffect } from 'react';

const FEDERAL_BRACKETS_SINGLE = [
  { min:0, max:11925, rate:0.10 },
  { min:11925, max:48475, rate:0.12 },
  { min:48475, max:103350, rate:0.22 },
  { min:103350, max:197300, rate:0.24 },
  { min:197300, max:250525, rate:0.32 },
  { min:250525, max:626350, rate:0.35 },
  { min:626350, max:Infinity, rate:0.37 },
];
const FEDERAL_BRACKETS_MARRIED = [
  { min:0, max:23850, rate:0.10 },
  { min:23850, max:96950, rate:0.12 },
  { min:96950, max:206700, rate:0.22 },
  { min:206700, max:394600, rate:0.24 },
  { min:394600, max:501050, rate:0.32 },
  { min:501050, max:751600, rate:0.35 },
  { min:751600, max:Infinity, rate:0.37 },
];

function calcFedTax(income: number, married: boolean): number {
  const brackets = married ? FEDERAL_BRACKETS_MARRIED : FEDERAL_BRACKETS_SINGLE;
  const stdDed = married ? 30000 : 15000;
  const taxable = Math.max(0, income - stdDed);
  let tax = 0;
  for (const b of brackets) {
    if (taxable <= b.min) break;
    tax += (Math.min(taxable, b.max) - b.min) * b.rate;
  }
  return tax;
}

interface Props {
  stateName: string;
  stateRate: number;
  noTax: boolean;
}

export default function BonusCalculatorClient({ stateName, stateRate, noTax }: Props) {
  const [bonus, setBonus] = useState('10000');
  const [salary, setSalary] = useState('75000');
  const [method, setMethod] = useState<'flat' | 'aggregate'>('flat');
  const [filing, setFiling] = useState<'single' | 'married'>('single');
  const [result, setResult] = useState<{ federal: number; state: number; ss: number; medicare: number; net: number; effective: number } | null>(null);

  useEffect(() => {
    const b = parseFloat(bonus) || 0;
    const s = parseFloat(salary) || 0;
    if (b <= 0) { setResult(null); return; }

    const married = filing === 'married';
    const ss = Math.min(b, Math.max(0, 176100 - s)) * 0.062;
    const medicare = b * 0.0145;
    const stateTax = noTax ? 0 : b * stateRate;

    let federal: number;
    if (method === 'flat') {
      federal = b * 0.22;
    } else {
      // aggregate: marginal rate on bonus
      const taxWithBonus = calcFedTax(s + b, married);
      const taxWithout = calcFedTax(s, married);
      federal = Math.max(0, taxWithBonus - taxWithout);
    }

    const total = federal + stateTax + ss + medicare;
    const net = b - total;
    const effective = b > 0 ? (total / b) * 100 : 0;
    setResult({ federal, state: stateTax, ss, medicare, net, effective });
  }, [bonus, salary, method, filing, stateRate, noTax]);

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();

  return (
    <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(251,146,60,0.3)', borderRadius:'16px', padding:'28px' }}>
      {/* Method toggle */}
      <div style={{ display:'flex', gap:'8px', marginBottom:'20px', justifyContent:'center' }}>
        {(['flat','aggregate'] as const).map(m => (
          <button key={m} onClick={() => setMethod(m)} style={{ padding:'8px 20px', borderRadius:'8px', border:'none', cursor:'pointer', fontWeight:700, fontSize:'13px', background: method === m ? '#fb923c' : 'rgba(255,255,255,0.08)', color: method === m ? '#0f0c29' : 'rgba(255,255,255,0.7)' }}>
            {m === 'flat' ? '22% Flat Rate' : 'Aggregate Method'}
          </button>
        ))}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'16px', marginBottom:'20px' }}>
        {[
          { label:'Bonus Amount ($)', value:bonus, set:setBonus, placeholder:'10000' },
          { label:'Annual Salary ($)', value:salary, set:setSalary, placeholder:'75000' },
        ].map(f => (
          <div key={f.label}>
            <label style={{ fontSize:'11px', color:'rgba(255,255,255,0.45)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:'6px', display:'block' }}>{f.label}</label>
            <input type="number" value={f.value} onChange={e => f.set(e.target.value)} placeholder={f.placeholder}
              style={{ width:'100%', background:'rgba(255,255,255,0.07)', border:'1.5px solid rgba(255,255,255,0.12)', borderRadius:'10px', padding:'11px 14px', color:'white', fontSize:'15px', fontFamily:'inherit', outline:'none', boxSizing:'border-box' as const }} />
          </div>
        ))}
        <div>
          <label style={{ fontSize:'11px', color:'rgba(255,255,255,0.45)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:'6px', display:'block' }}>Filing Status</label>
          <select value={filing} onChange={e => setFiling(e.target.value as 'single'|'married')}
            style={{ width:'100%', background:'rgba(255,255,255,0.07)', border:'1.5px solid rgba(255,255,255,0.12)', borderRadius:'10px', padding:'11px 14px', color:'white', fontSize:'15px', fontFamily:'inherit', outline:'none', boxSizing:'border-box' as const }}>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </div>
      </div>

      {result ? (
        <div style={{ background:'linear-gradient(135deg,rgba(251,146,60,0.15),rgba(251,191,36,0.1))', border:'1px solid rgba(251,146,60,0.3)', borderRadius:'12px', padding:'20px' }}>
          <div style={{ textAlign:'center', marginBottom:'16px' }}>
            <div style={{ fontSize:'12px', opacity:0.6, marginBottom:'4px' }}>Take-Home Bonus · {stateName}</div>
            <div style={{ fontSize:'40px', fontWeight:900, color:'#4ade80' }}>{fmt(result.net)}</div>
            <div style={{ fontSize:'13px', opacity:0.6 }}>out of {fmt(parseFloat(bonus))} ({result.effective.toFixed(1)}% total tax)</div>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
            {[
              { label:'Federal Income Tax', value: result.federal, color:'#f87171' },
              { label:`${stateName} State Tax`, value: result.state, color: noTax ? '#4ade80' : '#fb923c' },
              { label:'Social Security (6.2%)', value: result.ss, color:'#fbbf24' },
              { label:'Medicare (1.45%)', value: result.medicare, color:'#fbbf24' },
            ].map(r => (
              <div key={r.label} style={{ display:'flex', justifyContent:'space-between', fontSize:'14px' }}>
                <span style={{ opacity:0.7 }}>{r.label}</span>
                <strong style={{ color: r.color }}>{noTax && r.label.includes('State') ? '$0 ✅' : '−' + fmt(r.value)}</strong>
              </div>
            ))}
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:'15px', borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:'8px', marginTop:'4px' }}>
              <strong>Net Bonus</strong>
              <strong style={{ color:'#4ade80' }}>{fmt(result.net)}</strong>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'12px', padding:'20px', textAlign:'center', color:'rgba(255,255,255,0.5)', fontSize:'14px' }}>
          Enter your bonus amount above to see the tax breakdown
        </div>
      )}
      <p style={{ textAlign:'center', fontSize:'11px', opacity:0.3, marginTop:'12px' }}>🔒 All calculations happen in your browser</p>
    </div>
  );
}
