'use client';
import { useState } from 'react';

export default function UnemployCalc({ maxWBA, minWBA, stateName }: { maxWBA: number; minWBA: number; stateName: string }) {
  const [wage, setWage] = useState('');
  const [period, setPeriod] = useState('weekly');
  const [result, setResult] = useState<{ wba: number; total: number; weeks: number } | null>(null);

  function calculate() {
    let weekly = parseFloat(wage.replace(/,/g, '')) || 0;
    if (period === 'annual') weekly = weekly / 52;
    else if (period === 'hourly') weekly = weekly * 40;
    else if (period === 'biweekly') weekly = weekly / 2;

    const wba = Math.min(maxWBA, Math.max(minWBA, Math.round(weekly * 0.47)));
    const weeks = 26;
    setResult({ wba, total: wba * weeks, weeks });
  }

  const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <div style={{ background:'#1a1040', border:'1px solid #F5C84233', borderRadius:12, padding:24, margin:'24px 0', maxWidth:480 }}>
      <h3 style={{ color:'#F5C842', margin:'0 0 4px', fontSize:17, fontWeight:800 }}>{stateName} Unemployment Benefit Estimator</h3>
      <p style={{ color:'#8892b0', fontSize:13, margin:'0 0 18px' }}>Enter your wages to estimate your weekly benefit amount (WBA)</p>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:12 }}>
        <div>
          <label style={{ color:'#e8edf8', fontSize:13, display:'block', marginBottom:4 }}>Your wage</label>
          <input type="number" placeholder="e.g. 1000" value={wage} onChange={e => setWage(e.target.value)}
            style={{ width:'100%', padding:'11px 14px', borderRadius:8, border:'1px solid #F5C84244', background:'#0f0c29', color:'#e8edf8', fontSize:15, boxSizing:'border-box' as const }} />
        </div>
        <div>
          <label style={{ color:'#e8edf8', fontSize:13, display:'block', marginBottom:4 }}>Period</label>
          <select value={period} onChange={e => setPeriod(e.target.value)}
            style={{ width:'100%', padding:'11px', borderRadius:8, border:'1px solid #F5C84244', background:'#0f0c29', color:'#e8edf8', fontSize:14 }}>
            <option value="weekly">Weekly</option>
            <option value="biweekly">Bi-weekly</option>
            <option value="annual">Annual</option>
            <option value="hourly">Hourly</option>
          </select>
        </div>
      </div>
      <button onClick={calculate} style={{ width:'100%', padding:13, background:'#F5C842', color:'#0f0c29', fontWeight:800, fontSize:15, border:'none', borderRadius:8, cursor:'pointer' }}>
        Estimate My Benefits
      </button>
      {result && (
        <div style={{ marginTop:18, borderTop:'1px solid #F5C84222', paddingTop:18 }}>
          <div style={{ background:'#0f0c29', borderRadius:10, padding:14, textAlign:'center', marginBottom:12 }}>
            <div style={{ color:'#8892b0', fontSize:12 }}>ESTIMATED WEEKLY BENEFIT</div>
            <div style={{ color:'#F5C842', fontSize:34, fontWeight:900 }}>{fmt(result.wba)}</div>
            <div style={{ color:'#8892b0', fontSize:12 }}>Total for {result.weeks} weeks: {fmt(result.total)}</div>
          </div>
          <p style={{ color:'#8892b0', fontSize:11, margin:0 }}>Estimate only. Actual WBA depends on your exact base-period wages. File at your state's unemployment office to confirm.</p>
        </div>
      )}
    </div>
  );
}
