'use client';
import { useState } from 'react';

const CA_BRACKETS_SINGLE: [number,number][] = [
  [10412,.01],[24684,.02],[38959,.04],[54081,.06],[68350,.08],
  [349137,.093],[418961,.103],[698274,.113],[1000000,.123],[Infinity,.133]
];
const FED_BRACKETS_SINGLE: [number,number][] = [
  [12400,.10],[50400,.12],[105700,.22],[201775,.24],
  [256225,.32],[640600,.35],[Infinity,.37]
];

function calcTax(brackets: [number,number][], income: number): number {
  let tax = 0, prev = 0;
  for (const [lim, rate] of brackets) {
    if (income <= prev) break;
    tax += (Math.min(income, lim) - prev) * rate;
    prev = lim;
  }
  return tax;
}

function fmt(n: number) {
  return '$' + Math.round(n).toLocaleString('en-US');
}

export default function CaCalcEmbed() {
  const [salary, setSalary] = useState('');
  const [period, setPeriod] = useState('26');
  const [filing, setFiling] = useState('single');
  const [result, setResult] = useState<null|{
    gross:number; fed:number; ss:number; med:number;
    caState:number; caSDI:number; net:number; netYear:number; pct:number;
  }>(null);

  function calculate() {
    const annual = parseFloat(salary.replace(/[^0-9.]/g,''));
    if (!annual || annual <= 0) return;
    const f = parseInt(period);
    const stdDed = filing === 'married' ? 32200 : 16100;
    const fedTaxable = Math.max(0, annual - stdDed);
    const fed = calcTax(FED_BRACKETS_SINGLE, fedTaxable);
    const ss  = Math.min(annual, 184500) * 0.062;
    const med = annual * 0.0145;
    const caSDI = annual * 0.009;
    const caStdDed = filing === 'married' ? 11412 : 5706;
    const caTaxable = Math.max(0, annual - caStdDed);
    const caState = calcTax(CA_BRACKETS_SINGLE, caTaxable);
    const totalTax = fed + ss + med + caState + caSDI;
    const netYear = annual - totalTax;
    const gross = annual / f;
    const net = netYear / f;
    const pct = (totalTax / annual) * 100;
    setResult({ gross, fed:fed/f, ss:ss/f, med:med/f,
      caState:caState/f, caSDI:caSDI/f, net, netYear, pct });
  }

  const inp: React.CSSProperties = {
    width:'100%', padding:'10px 14px', borderRadius:8,
    border:'1px solid rgba(245,200,66,0.35)', background:'rgba(15,12,41,0.8)',
    color:'#e8edf8', fontSize:15, outline:'none', boxSizing:'border-box'
  };
  const lbl: React.CSSProperties = {
    fontSize:12, fontWeight:700, color:'#94a3b8',
    textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:4, display:'block'
  };

  return (
    <div style={{
      background:'rgba(245,200,66,0.06)', border:'1.5px solid rgba(245,200,66,0.3)',
      borderRadius:14, padding:'24px 20px', marginBottom:32, marginTop:8
    }}>
      <div style={{ fontSize:16, fontWeight:800, color:'#F5C842', marginBottom:16 }}>
        🧮 Calculate Your California Take-Home
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:12 }}>
        <div>
          <label style={lbl}>Annual Salary ($)</label>
          <input
            style={inp} type="number" placeholder="e.g. 75000"
            value={salary} onChange={e=>setSalary(Math.max(1,+e.target.value).toString())} min={0}
            onKeyDown={e=>e.key==='Enter'&&calculate()}
            aria-label="Annual salary in dollars"
          />
        </div>
        <div>
          <label style={lbl}>Pay Period</label>
          <select
            style={inp} value={period} onChange={e=>setPeriod(e.target.value)}
            aria-label="Pay period frequency"
          >
            <option value="52">Weekly (52/yr)</option>
            <option value="26">Bi-weekly (26/yr)</option>
            <option value="24">Semi-monthly (24/yr)</option>
            <option value="12">Monthly (12/yr)</option>
          </select>
        </div>
      </div>
      <div style={{ marginBottom:14 }}>
        <label style={lbl}>Filing Status</label>
        <div style={{ display:'flex', gap:8 }}>
          {[['single','Single'],['married','Married']].map(([v,l])=>(
            <button key={v} onClick={()=>setFiling(v)}
              style={{
                flex:1, padding:'9px 0', borderRadius:8, fontSize:14, fontWeight:700,
                border: filing===v ? '2px solid #F5C842' : '1px solid rgba(255,255,255,0.15)',
                background: filing===v ? 'rgba(245,200,66,0.15)' : 'rgba(255,255,255,0.04)',
                color: filing===v ? '#F5C842' : '#94a3b8', cursor:'pointer'
              }}
            >{l}</button>
          ))}
        </div>
      </div>
      <button onClick={calculate} style={{
        width:'100%', padding:'13px 0', borderRadius:10, border:'none',
        background:'linear-gradient(135deg,#F5C842,#e0a800)',
        color:'#0f0c29', fontWeight:900, fontSize:16, cursor:'pointer', marginBottom:16
      }}>
        Calculate My California Paycheck →
      </button>

      {result && (
        <div style={{
          background:'rgba(15,12,41,0.9)', borderRadius:10, padding:'16px 18px',
          border:'1px solid rgba(245,200,66,0.2)'
        }}>
          <div style={{
            display:'flex', justifyContent:'space-between', alignItems:'center',
            marginBottom:14, paddingBottom:12, borderBottom:'1px solid rgba(255,255,255,0.08)'
          }}>
            <span style={{ fontSize:13, color:'#94a3b8' }}>Take-home per period</span>
            <span style={{ fontSize:26, fontWeight:900, color:'#F5C842' }}>{fmt(result.net)}</span>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
            {[
              ['Gross Pay',       fmt(result.gross),    '#e8edf8'],
              ['Federal Tax',     '-'+fmt(result.fed),  '#f87171'],
              ['Social Security', '-'+fmt(result.ss),   '#fb923c'],
              ['Medicare',        '-'+fmt(result.med),  '#fb923c'],
              ['CA State Tax',    '-'+fmt(result.caState),'#c084fc'],
              ['CA SDI (0.9%)',   '-'+fmt(result.caSDI),'#c084fc'],
            ].map(([label,val,col])=>(
              <div key={label} style={{ display:'flex', justifyContent:'space-between', fontSize:14 }}>
                <span style={{ color:'#94a3b8' }}>{label}</span>
                <span style={{ fontWeight:700, color:col }}>{val}</span>
              </div>
            ))}
          </div>
          <div style={{
            marginTop:12, paddingTop:10, borderTop:'1px solid rgba(255,255,255,0.08)',
            display:'flex', justifyContent:'space-between', fontSize:13
          }}>
            <span style={{ color:'#64748b' }}>Annual take-home</span>
            <span style={{ color:'#F5C842', fontWeight:700 }}>{fmt(result.netYear)}/yr · {result.pct.toFixed(1)}% total tax</span>
          </div>
        </div>
      )}

      <style>{`
        @media(max-width:540px){
          .ca-grid { grid-template-columns: 1fr !important; }
        }
        input[type=number]::-webkit-outer-spin-button,
        input[type=number]::-webkit-inner-spin-button { -webkit-appearance:none; }
      `}</style>
    </div>
  );
}
