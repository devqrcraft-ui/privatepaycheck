'use client';
import { useState } from 'react';

const STATES = [
  { value: '0',     label: 'No income tax (TX, FL, WA…)' },
  { value: '9.3',   label: 'California (up to 13.3%)' },
  { value: '10.9',  label: 'New York (up to 10.9%)' },
  { value: '10.75', label: 'New Jersey (up to 10.75%)' },
  { value: '9.85',  label: 'Minnesota (up to 9.85%)' },
  { value: '9.9',   label: 'Oregon (up to 9.9%)' },
  { value: '8.75',  label: 'Vermont (up to 8.75%)' },
  { value: '7.65',  label: 'Wisconsin (7.65%)' },
  { value: '6.99',  label: 'Connecticut (6.99%)' },
  { value: '6.84',  label: 'Nebraska (up to 6.84%)' },
  { value: '5.75',  label: 'Georgia (5.75%)' },
  { value: '5.75',  label: 'Maryland (up to 5.75%)' },
  { value: '5.75',  label: 'Virginia (5.75%)' },
  { value: '5.3',   label: 'Missouri (up to 5.3%)' },
  { value: '5.0',   label: 'Massachusetts (5%)' },
  { value: '4.95',  label: 'Illinois (4.95%)' },
  { value: '4.85',  label: 'Utah (4.85%)' },
  { value: '4.4',   label: 'Colorado (4.4%)' },
  { value: '4.25',  label: 'Michigan (4.25%)' },
  { value: '3.99',  label: 'Ohio (up to 3.99%)' },
  { value: '3.07',  label: 'Pennsylvania (3.07%)' },
  { value: '2.5',   label: 'Arizona (2.5%)' },
  { value: '2.0',   label: 'Indiana (3.15%)' },
];

const BRACKETS = {
  single:  [[11600,.10],[47150,.12],[100525,.22],[191950,.24],[243725,.32],[609350,.35],[Infinity,.37]] as [number,number][],
  married: [[23200,.10],[94300,.12],[201050,.22],[383900,.24],[487450,.32],[731200,.35],[Infinity,.37]] as [number,number][],
  head:    [[16550,.10],[63100,.12],[100500,.22],[191950,.24],[243700,.32],[609350,.35],[Infinity,.37]] as [number,number][],
};

function fmt(n: number) {
  return '$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function Calculator() {
  const [payType, setPayType] = useState('salary');
  const [income, setIncome] = useState('');
  const [freq, setFreq] = useState('26');
  const [stateRate, setStateRate] = useState('0');
  const [filing, setFiling] = useState('single');
  const [results, setResults] = useState<null|{gross:number,fed:number,ss:number,med:number,state:number,net:number}>(null);

  function calculate() {
    const raw = parseFloat(income);
    if (!raw || raw <= 0) { alert('Please enter your income.'); return; }
    const f = parseInt(freq);
    const sr = parseFloat(stateRate) || 0;
    const annual = payType === 'hourly' ? raw * 40 * 52 : raw;
    const gross = annual / f;
    let fed = 0, prev = 0, inc = annual;
    for (const [lim, rate] of BRACKETS[filing as keyof typeof BRACKETS]) {
      if (inc <= 0) break;
      const chunk = Math.min(inc, lim - prev);
      fed += chunk * rate; inc -= chunk; prev = lim;
    }
    const fedPer = fed / f;
    const ss = Math.min(annual, 168600) * 0.062 / f;
    const med = annual * 0.0145 / f;
    const st = gross * (sr / 100);
    const net = gross - fedPer - ss - med - st;
    setResults({ gross, fed: fedPer, ss, med, state: st, net });
  }

  const css = `
    .calc-card{background:linear-gradient(145deg,#0F2040,#0C1A35);border:1px solid rgba(245,200,66,0.4);border-radius:14px;padding:28px 24px;width:100%;max-width:440px;}
    .card-title{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:#F5C842;margin-bottom:4px;}
    .card-sub{font-size:12px;color:#7A9FBF;letter-spacing:.08em;text-transform:uppercase;margin-bottom:20px;}
    .fl{display:block;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#7A9FBF;margin-bottom:6px;margin-top:14px;}
    .calc-card select,.calc-card input{width:100%;background:#0A1628;border:1px solid rgba(245,200,66,0.25);border-radius:8px;color:#fff;font-size:15px;padding:11px 14px;outline:none;appearance:none;}
    .calc-card select:focus,.calc-card input:focus{border-color:#F5C842;}
    .calc-btn{width:100%;margin-top:20px;background:linear-gradient(135deg,#F5C842,#FFD700);color:#091526;font-size:15px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:14px;border-radius:9px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(245,200,66,0.4);transition:transform .2s,box-shadow .2s;}
    .calc-btn:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(255,215,0,.55);}
    .results{margin-top:20px;border-top:1px solid rgba(245,200,66,0.2);padding-top:16px;}
    .r-row{display:flex;justify-content:space-between;padding:7px 0;font-size:14px;border-bottom:1px solid rgba(255,255,255,0.05);}
    .r-row:last-child{font-weight:800;font-size:16px;color:#F5C842;border-bottom:none;margin-top:4px;}
  `;

  return (
    <>
      <style>{css}</style>
      <div className="calc-card">
        <div className="card-title">Paycheck Calculator</div>
        <div className="card-sub">2026 IRS Rules · Instant Results</div>
        <label className="fl">Pay Type</label>
        <select value={payType} onChange={e=>setPayType(e.target.value)}>
          <option value="salary">Annual Salary</option>
          <option value="hourly">Hourly Wage</option>
        </select>
        <label className="fl">{payType==='hourly'?'Hourly Rate ($)':'Annual Gross Salary ($)'}</label>
        <input type="number" value={income} onChange={e=>setIncome(e.target.value)} placeholder={payType==='hourly'?'e.g. 25.00':'e.g. 65000'} min="0"/>
        <label className="fl">Pay Frequency</label>
        <select value={freq} onChange={e=>setFreq(e.target.value)}>
          <option value="26">Bi-Weekly (every 2 weeks)</option>
          <option value="24">Semi-Monthly (twice/month)</option>
          <option value="12">Monthly</option>
          <option value="52">Weekly</option>
        </select>
        <label className="fl">State of Residence</label>
        <select value={stateRate} onChange={e=>setStateRate(e.target.value)}>
          {STATES.map(s=><option key={s.label} value={s.value}>{s.label}</option>)}
        </select>
        <label className="fl">Filing Status</label>
        <select value={filing} onChange={e=>setFiling(e.target.value)}>
          <option value="single">Single</option>
          <option value="married">Married Filing Jointly</option>
          <option value="head">Head of Household</option>
        </select>
        <button className="calc-btn" onClick={calculate}>Calculate My Take-Home Pay →</button>
        {results && (
          <div className="results">
            <div className="r-row"><span>Gross Pay (per period)</span><span>{fmt(results.gross)}</span></div>
            <div className="r-row"><span>Federal Income Tax</span><span>−{fmt(results.fed)}</span></div>
            <div className="r-row"><span>Social Security (6.2%)</span><span>−{fmt(results.ss)}</span></div>
            <div className="r-row"><span>Medicare (1.45%)</span><span>−{fmt(results.med)}</span></div>
            <div className="r-row"><span>State Income Tax</span><span>−{fmt(results.state)}</span></div>
            <div className="r-row"><span>🏦 Net Take-Home Pay</span><span>{fmt(results.net)}</span></div>
          </div>
        )}
      </div>
    </>
  );
}
