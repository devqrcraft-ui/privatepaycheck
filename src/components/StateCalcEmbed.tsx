'use client';
import { useState } from 'react';

interface Props {
  stateName: string;
  stateTaxRate: number;
  hasSDI?: boolean;
  sdiRate?: number;
  noStateTax?: boolean;
}

export default function StateCalcEmbed({ stateName, stateTaxRate, hasSDI = false, sdiRate = 0, noStateTax = false }: Props) {
  const [salary, setSalary] = useState('');
  const [period, setPeriod] = useState('annual');
  const [filing, setFiling] = useState('single');
  const [result, setResult] = useState<{
    annual:number; takeHome:number; biweekly:number; monthly:number;
    fed:number; ss:number; medicare:number; stateTax:number; sdi:number; eff:string;
  }|null>(null);

  function calculate() {
    let annual = parseFloat(salary.replace(/,/g,'')) || 0;
    if (period === 'hourly') annual = annual * 40 * 52;
    else if (period === 'monthly') annual = annual * 12;
    else if (period === 'biweekly') annual = annual * 26;

    const stdDeduct = filing === 'married' ? 32200 : 16100;
    const taxable = Math.max(0, annual - stdDeduct);
    const brackets = filing === 'married'
      ? [[0,24800,0.10],[24800,100800,0.12],[100800,211400,0.22],[211400,403550,0.24],[403550,512450,0.32],[512450,768700,0.35],[768700,Infinity,0.37]]
      : [[0,12400,0.10],[12400,50400,0.12],[50400,105700,0.22],[105700,201775,0.24],[201775,256225,0.32],[256225,640600,0.35],[640600,Infinity,0.37]];
    let fed = 0;
    for (const [lo,hi,r] of brackets) if (taxable > lo) fed += (Math.min(taxable,hi)-lo)*r;

    const ssBase = Math.min(annual, 184500);
    const ss = ssBase * 0.062;
    const medicare = annual * 0.0145 + (annual > 200000 ? (annual-200000)*0.009 : 0);
    const stateTax = noStateTax ? 0 : annual * (stateTaxRate/100);
    const sdi = hasSDI ? Math.min(annual, 153164) * (sdiRate/100) : 0;

    const total = fed + ss + medicare + stateTax + sdi;
    const takeHome = annual - total;
    setResult({ annual, takeHome, biweekly: takeHome/26, monthly: takeHome/12, fed, ss, medicare, stateTax, sdi, eff: annual>0 ? (total/annual*100).toFixed(1) : '0' });
  }

  const fmt = (n: number) => Math.round(n||0).toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});

  return (
    <div style={{ background:'#1a1040', border:'1px solid #F5C84233', borderRadius:12, padding:24, margin:'24px 0', maxWidth:520 }}>
      <h3 style={{ color:'#F5C842', margin:'0 0 4px', fontSize:18, fontWeight:800 }}>{stateName} Paycheck Calculator 2026</h3>
      <p style={{ color:'#8892b0', fontSize:13, margin:'0 0 20px' }}>Free take-home pay estimator — no signup, 100% private</p>

      <div style={{ display:'grid', gap:12 }}>
        <div>
          <label style={{ color:'#e8edf8', fontSize:13, display:'block', marginBottom:4 }}>Salary or hourly wage</label>
          <input type="number" placeholder="e.g. 75000" value={salary} onChange={e=>setSalary(e.target.value)}
            style={{ width:'100%', padding:'12px 14px', borderRadius:8, border:'1px solid #F5C84244',
              background:'#0f0c29', color:'#e8edf8', fontSize:15, boxSizing:'border-box' }} />
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
          <div>
            <label style={{ color:'#e8edf8', fontSize:13, display:'block', marginBottom:4 }}>Pay period</label>
            <select value={period} onChange={e=>setPeriod(e.target.value)}
              style={{ width:'100%', padding:'11px', borderRadius:8, border:'1px solid #F5C84244', background:'#0f0c29', color:'#e8edf8', fontSize:14 }}>
              <option value="annual">Annual</option>
              <option value="monthly">Monthly</option>
              <option value="biweekly">Bi-weekly</option>
              <option value="hourly">Hourly</option>
            </select>
          </div>
          <div>
            <label style={{ color:'#e8edf8', fontSize:13, display:'block', marginBottom:4 }}>Filing status</label>
            <select value={filing} onChange={e=>setFiling(e.target.value)}
              style={{ width:'100%', padding:'11px', borderRadius:8, border:'1px solid #F5C84244', background:'#0f0c29', color:'#e8edf8', fontSize:14 }}>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
          </div>
        </div>
        <button onClick={calculate}
          style={{ padding:14, background:'#F5C842', color:'#0f0c29', fontWeight:800, fontSize:16, border:'none', borderRadius:8, cursor:'pointer' }}>
          Calculate Take-Home Pay
        </button>
      </div>

      {result && (
        <div style={{ marginTop:20, borderTop:'1px solid #F5C84233', paddingTop:20 }}>
          <div style={{ background:'#0f0c29', borderRadius:10, padding:16, marginBottom:14, textAlign:'center' }}>
            <div style={{ color:'#8892b0', fontSize:12 }}>BI-WEEKLY TAKE-HOME</div>
            <div style={{ color:'#F5C842', fontSize:34, fontWeight:900 }}>{fmt(result.biweekly)}</div>
            <div style={{ color:'#8892b0', fontSize:12 }}>Annual: {fmt(result.takeHome)} · Effective rate: {result.eff}%</div>
          </div>
          <div style={{ display:'grid', gap:8 }}>
            {[
              ['Federal income tax', result.fed],
              ['Social Security (6.2%)', result.ss],
              ['Medicare (1.45%+)', result.medicare],
              ...(!noStateTax ? [[stateName + ' state tax', result.stateTax]] : [['State tax', 0]]),
              ...(hasSDI ? [['SDI', result.sdi]] : []),
            ].map(([label, val]) => (
              <div key={String(label)} style={{ display:'flex', justifyContent:'space-between', padding:'5px 0', borderBottom:'1px solid #ffffff0a' }}>
                <span style={{ color:'#8892b0', fontSize:13 }}>{label}</span>
                <span style={{ color:'#e8edf8', fontSize:13, fontWeight:700 }}>{fmt(val as number)}</span>
              </div>
            ))}
          </div>
          <p style={{ color:'#8892b0', fontSize:11, margin:'14px 0 0' }}>Estimate only. Actual taxes vary by deductions and filing details.</p>
        </div>
      )}
    </div>
  );
}
