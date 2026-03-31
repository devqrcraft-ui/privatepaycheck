'use client';
import { useState } from 'react';

function fmt(n: number) { return '$' + Math.round(n).toLocaleString('en-US'); }

export default function IlUnemployCalcEmbed() {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [result, setResult] = useState<null|{
    wba: number; biweekly: number; maxTotal: number; weeks: number;
  }>(null);

  function calculate() {
    const a = parseFloat(q1.replace(/[^0-9.]/g,'')) || 0;
    const b = parseFloat(q2.replace(/[^0-9.]/g,'')) || 0;
    if (a <= 0 && b <= 0) return;
    const highQ = Math.max(a, b);
    const avgWeekly = highQ / 13;
    const rawWBA = avgWeekly * 0.47;
    const wba = Math.min(Math.max(rawWBA, 51), 693);
    const biweekly = wba * 2;
    const maxTotal = wba * 26;
    setResult({ wba, biweekly, maxTotal, weeks: 26 });
  }

  const inp: React.CSSProperties = {
    width:'100%', padding:'10px 14px', borderRadius:8,
    border:'1px solid rgba(245,200,66,0.35)',
    background:'rgba(15,12,41,0.8)', color:'#e8edf8',
    fontSize:15, outline:'none', boxSizing:'border-box'
  };
  const lbl: React.CSSProperties = {
    fontSize:12, fontWeight:700, color:'#94a3b8',
    textTransform:'uppercase', letterSpacing:'0.05em',
    marginBottom:4, display:'block'
  };

  return (
    <div style={{
      background:'rgba(245,200,66,0.06)',
      border:'1.5px solid rgba(245,200,66,0.3)',
      borderRadius:14, padding:'24px 20px', marginBottom:24
    }}>
      <div style={{ fontSize:16, fontWeight:800, color:'#F5C842', marginBottom:4 }}>
        🧮 Illinois Unemployment Benefit Calculator
      </div>
      <div style={{ fontSize:13, color:'#64748b', marginBottom:16 }}>
        Enter your two highest quarterly earnings from the past 18 months
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:14 }}>
        <div>
          <label style={lbl}>Highest Quarter Earnings ($)</label>
          <input style={inp} type="number" placeholder="e.g. 15000"
            value={q1} onChange={e=>setQ1(e.target.value)}
            onKeyDown={e=>e.key==='Enter'&&calculate()}
            aria-label="Highest quarter earnings" />
        </div>
        <div>
          <label style={lbl}>2nd Highest Quarter ($)</label>
          <input style={inp} type="number" placeholder="e.g. 13000"
            value={q2} onChange={e=>setQ2(e.target.value)}
            onKeyDown={e=>e.key==='Enter'&&calculate()}
            aria-label="Second highest quarter earnings" />
        </div>
      </div>
      <button onClick={calculate} style={{
        width:'100%', padding:'13px 0', borderRadius:10, border:'none',
        background:'linear-gradient(135deg,#F5C842,#e0a800)',
        color:'#0f0c29', fontWeight:900, fontSize:16, cursor:'pointer', marginBottom:16
      }}>
        Calculate My Illinois Benefits →
      </button>

      {result && (
        <div style={{
          background:'rgba(15,12,41,0.9)', borderRadius:10,
          padding:'16px 18px', border:'1px solid rgba(245,200,66,0.2)'
        }}>
          <div style={{
            display:'flex', justifyContent:'space-between', alignItems:'center',
            marginBottom:14, paddingBottom:12,
            borderBottom:'1px solid rgba(255,255,255,0.08)'
          }}>
            <span style={{ fontSize:13, color:'#94a3b8' }}>Weekly Benefit Amount</span>
            <span style={{ fontSize:26, fontWeight:900, color:'#F5C842' }}>{fmt(result.wba)}/wk</span>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
            {[
              ['Bi-weekly Payment', fmt(result.biweekly),'#e8edf8'],
              ['Max Duration', result.weeks + ' weeks','#94a3b8'],
              ['Max Total Benefits', fmt(result.maxTotal),'#4ade80'],
              ['IL State Tax on UI', 'None 🎉','#4ade80'],
              ['Federal Tax (optional)', '10% withholding available','#fb923c'],
            ].map(([l,v,col])=>(
              <div key={l} style={{ display:'flex', justifyContent:'space-between', fontSize:14 }}>
                <span style={{ color:'#94a3b8' }}>{l}</span>
                <span style={{ fontWeight:700, color:col }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{
            marginTop:12, paddingTop:10,
            borderTop:'1px solid rgba(255,255,255,0.08)',
            fontSize:12, color:'#64748b'
          }}>
            Based on IL IDES formula: 47% of avg weekly wage in highest quarter. Max $693/wk (2026).
          </div>
        </div>
      )}
    </div>
  );
}
