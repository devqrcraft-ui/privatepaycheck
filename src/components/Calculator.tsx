'use client';
import { useState } from 'react';

const STATES = [
  {v:'0',     l:'No income tax (TX, FL, WA\u2026)'},
  {v:'9.3',   l:'California (up to 13.3%)'},
  {v:'10.9',  l:'New York (up to 10.9%)'},
  {v:'10.75', l:'New Jersey (up to 10.75%)'},
  {v:'9.85',  l:'Minnesota (up to 9.85%)'},
  {v:'9.9',   l:'Oregon (up to 9.9%)'},
  {v:'8.75',  l:'Vermont (up to 8.75%)'},
  {v:'7.65',  l:'Wisconsin (7.65%)'},
  {v:'6.99',  l:'Connecticut (6.99%)'},
  {v:'6.84',  l:'Nebraska (up to 6.84%)'},
  {v:'5.75a', l:'Georgia (5.75%)'},
  {v:'5.75b', l:'Maryland (up to 5.75%)'},
  {v:'5.75c', l:'Virginia (5.75%)'},
  {v:'5.3',   l:'Missouri (up to 5.3%)'},
  {v:'5.0',   l:'Massachusetts (5%)'},
  {v:'4.95',  l:'Illinois (4.95%)'},
  {v:'4.85',  l:'Utah (4.85%)'},
  {v:'4.4',   l:'Colorado (4.4%)'},
  {v:'4.25',  l:'Michigan (4.25%)'},
  {v:'3.99',  l:'Ohio (up to 3.99%)'},
  {v:'3.07',  l:'Pennsylvania (3.07%)'},
  {v:'2.5',   l:'Arizona (2.5%)'},
  {v:'2.0',   l:'Indiana (3.15%)'},
];

const BRACKETS: Record<string,[number,number][]> = {
  single:  [[11600,.10],[47150,.12],[100525,.22],[191950,.24],[243725,.32],[609350,.35],[Infinity,.37]],
  married: [[23200,.10],[94300,.12],[201050,.22],[383900,.24],[487450,.32],[731200,.35],[Infinity,.37]],
  head:    [[16550,.10],[63100,.12],[100500,.22],[191950,.24],[243700,.32],[609350,.35],[Infinity,.37]],
};

function fmt(n: number){ return '$'+n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,','); }

export default function Calculator() {
  const [payType, setPayType] = useState('salary');
  const [income,  setIncome]  = useState('');
  const [freq,    setFreq]    = useState('26');
  const [stateR,  setStateR]  = useState('0');
  const [filing,  setFiling]  = useState('single');
  const [result,  setResult]  = useState<null|{gross:number,fed:number,ss:number,med:number,state:number,net:number}>(null);
  const [err,     setErr]     = useState('');

  function calculate(){
    const raw = parseFloat(income);
    if(!raw||raw<=0){setErr('Please enter your income.');return;}
    setErr('');
    const f = parseInt(freq);
    const sr = parseFloat(stateR)||0;
    const annual = payType==='hourly' ? raw*40*52 : raw;
    const gross = annual/f;
    const br = BRACKETS[filing];
    let fed=0,prev=0,inc=annual;
    for(const [lim,rate] of br){
      if(inc<=0)break;
      const chunk=Math.min(inc,lim-prev);
      fed+=chunk*rate; inc-=chunk; prev=lim;
    }
    const fedPer=fed/f;
    const ss=Math.min(annual,168600)*0.062/f;
    const med=annual*0.0145/f;
    const state=gross*(sr/100);
    const net=gross-fedPer-ss-med-state;
    setResult({gross,fed:fedPer,ss,med,state,net});
  }

  const inp: React.CSSProperties = {
    width:'100%',background:'rgba(255,255,255,.07)',
    border:'1.5px solid rgba(245,200,66,.28)',color:'#fff',
    padding:'12px 13px',borderRadius:7,fontSize:14,
    fontFamily:'inherit',marginBottom:14,
    WebkitAppearance:'none',appearance:'none' as 'none',
  };

  return (
    <>
      <style>{`
        .calc-card{background:linear-gradient(165deg,#122050 0%,#091526 100%);border:2px solid rgba(245,200,66,.48);border-radius:12px;padding:30px 28px;box-shadow:0 24px 64px rgba(0,0,0,.60),inset 0 1px 0 rgba(245,200,66,.15);}
        .card-title{font-family:'Playfair Display',serif;font-size:21px;font-weight:700;color:#FFD700;margin-bottom:3px;}
        .card-sub{font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#7A9FBF;padding-bottom:16px;border-bottom:1px solid rgba(245,200,66,.3);margin-bottom:20px;}
        .fl{display:block;font-size:11px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:#88AACC;margin-bottom:6px;}
        .calc-btn{width:100%;background:linear-gradient(135deg,#E8B820,#FFD700);color:#091526;padding:15px;border:none;border-radius:8px;font-size:15px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;transition:transform .22s,box-shadow .22s;box-shadow:0 4px 20px rgba(245,200,66,.40);margin-top:4px;font-family:inherit;}
        .calc-btn:hover{transform:translateY(-3px);box-shadow:0 10px 32px rgba(255,215,0,.60);}
        .results{margin-top:18px;background:rgba(245,200,66,.07);border:1px solid rgba(245,200,66,.32);border-radius:8px;padding:16px;}
        .r-row{display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.07);font-size:13px;gap:8px;}
        .r-row:last-child{border:none;font-size:15px;font-weight:800;color:#FFD700;padding-top:11px;}
        .r-row span:first-child{color:#88AACC;flex-shrink:0;}
        .r-row span:last-child{font-weight:700;text-align:right;}
        .err-msg{color:#f87171;font-size:13px;margin-bottom:8px;}
        select option{background:#0F2040;color:#fff;}
      `}</style>
      <div className="calc-card">
        <div className="card-title">Paycheck Calculator</div>
        <div className="card-sub">2026 IRS Rules &middot; Instant Results</div>

        <label className="fl">Pay Type</label>
        <select value={payType} onChange={e=>setPayType(e.target.value)} style={inp}>
          <option value="salary">Annual Salary</option>
          <option value="hourly">Hourly Wage</option>
        </select>

        <label className="fl">{payType==='hourly'?'Hourly Rate ($)':'Annual Gross Salary ($)'}</label>
        <input type="number" value={income} onChange={e=>setIncome(e.target.value)}
          placeholder={payType==='hourly'?'e.g. 25.00':'e.g. 65000'}
          min="0" inputMode="decimal" style={inp}/>

        <label className="fl">Pay Frequency</label>
        <select value={freq} onChange={e=>setFreq(e.target.value)} style={inp}>
          <option value="26">Bi-Weekly (every 2 weeks)</option>
          <option value="24">Semi-Monthly (twice/month)</option>
          <option value="12">Monthly</option>
          <option value="52">Weekly</option>
        </select>

        <label className="fl">State of Residence</label>
        <select value={stateR} onChange={e=>setStateR(e.target.value)} style={inp}>
          {STATES.map(s=><option key={s.v} value={parseFloat(s.v).toString()}>{s.l}</option>)}
        </select>

        <label className="fl">Filing Status</label>
        <select value={filing} onChange={e=>setFiling(e.target.value)} style={inp}>
          <option value="single">Single</option>
          <option value="married">Married Filing Jointly</option>
          <option value="head">Head of Household</option>
        </select>

        {err && <div className="err-msg">{err}</div>}
        <button className="calc-btn" onClick={calculate}>Calculate My Take-Home Pay &rarr;</button>

        {result && (
          <div className="results">
            <div className="r-row"><span>Gross Pay (per period)</span><span>{fmt(result.gross)}</span></div>
            <div className="r-row"><span>Federal Income Tax</span><span>&minus;{fmt(result.fed)}</span></div>
            <div className="r-row"><span>Social Security (6.2%)</span><span>&minus;{fmt(result.ss)}</span></div>
            <div className="r-row"><span>Medicare (1.45%)</span><span>&minus;{fmt(result.med)}</span></div>
            <div className="r-row"><span>State Income Tax</span><span>&minus;{fmt(result.state)}</span></div>
            <div className="r-row"><span>&#x1F3E6; Net Take-Home Pay</span><span>{fmt(result.net)}</span></div>
          </div>
        )}
      </div>
    </>
  );
}
