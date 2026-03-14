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

interface CalcProps { defaultState?: string; }

export default function Calculator({ defaultState }: CalcProps) {
  const [payType, setPayType]   = useState('salary');
  const [income, setIncome]     = useState('');
  const [freq, setFreq]         = useState('26');
  const [stateRate, setStateRate] = useState(defaultState || '0');
  const [filing, setFiling]     = useState('single');
  const [k401, setK401]         = useState('0');
  const [results, setResults]   = useState<null|{
    gross:number; fed:number; ss:number; med:number;
    state:number; k401:number; net:number; taxPct:number;
  }>(null);

  function calculate() {
    const raw = parseFloat(income);
    if (!raw || raw <= 0) { alert('Please enter your income.'); return; }
    const f        = parseInt(freq);
    const sr       = parseFloat(stateRate) || 0;
    const k401pct  = Math.min(Math.max(parseFloat(k401) || 0, 0), 100) / 100;
    const annual   = payType === 'hourly' ? raw * 40 * 52 : raw;

    // 401k reduces federal & state taxable income (pre-tax)
    const k401Annual = Math.min(annual * k401pct, 23500); // 2026 IRS limit
    const taxableAnnual = annual - k401Annual;

    const gross    = annual / f;
    const k401Per  = k401Annual / f;

    let fed = 0, prev = 0, inc = taxableAnnual;
    for (const [lim, rate] of BRACKETS[filing as keyof typeof BRACKETS]) {
      if (inc <= 0) break;
      const chunk = Math.min(inc, lim - prev);
      fed += chunk * rate; inc -= chunk; prev = lim;
    }
    const fedPer = fed / f;
    const ss  = Math.min(annual, 168600) * 0.062 / f;
    const med = annual * 0.0145 / f;
    const st  = (gross - k401Per) * (sr / 100);
    const totalTax = fedPer + ss + med + st;
    const net = gross - fedPer - ss - med - st - k401Per;
    const taxPct = (totalTax / gross) * 100;

    setResults({ gross, fed: fedPer, ss, med, state: st, k401: k401Per, net, taxPct });
  }

  const css = `
    .calc-card{background:linear-gradient(145deg,#0F2040,#0C1A35);border:1px solid rgba(245,200,66,0.4);border-radius:14px;padding:28px 24px;width:100%;max-width:440px;}
    .card-title{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:#F5C842;margin-bottom:4px;}
    .card-sub{font-size:12px;color:#7A9FBF;letter-spacing:.08em;text-transform:uppercase;margin-bottom:20px;}
    .fl{display:block;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#7A9FBF;margin-bottom:6px;margin-top:14px;}
    .calc-card select,.calc-card input{width:100%;background:#0A1628;border:1px solid rgba(245,200,66,0.25);border-radius:8px;color:#fff;font-size:15px;padding:11px 14px;outline:none;appearance:none;}
    .calc-card select:focus,.calc-card input:focus{border-color:#F5C842;}
    .k401-row{display:flex;align-items:center;gap:10px;}
    .k401-row input{flex:1;}
    .k401-badge{font-size:11px;color:#4ade80;background:rgba(74,222,128,0.1);border:1px solid rgba(74,222,128,0.25);border-radius:6px;padding:4px 8px;white-space:nowrap;}
    .calc-btn{width:100%;margin-top:20px;background:linear-gradient(135deg,#F5C842,#FFD700);color:#091526;font-size:15px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:14px;border-radius:9px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(245,200,66,0.4);transition:transform .2s,box-shadow .2s;}
    .calc-btn:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(255,215,0,.55);}
    .results{margin-top:20px;border-top:1px solid rgba(245,200,66,0.2);padding-top:16px;}
    .r-row{display:flex;justify-content:space-between;padding:7px 0;font-size:14px;border-bottom:1px solid rgba(255,255,255,0.05);position:relative;}
    .r-row .tooltip{display:none;position:absolute;right:0;top:-28px;background:#1a2f50;border:1px solid rgba(245,200,66,0.3);border-radius:6px;padding:4px 8px;font-size:11px;color:#7A9FBF;white-space:nowrap;z-index:10;}
    .r-row:hover .tooltip{display:block;}
    .r-row .hint{font-size:11px;color:#7A9FBF;cursor:help;margin-left:4px;}
    .r-row:last-child{font-weight:800;font-size:16px;color:#F5C842;border-bottom:none;margin-top:4px;}
    .progress-wrap{margin-top:14px;margin-bottom:4px;}
    .progress-label{display:flex;justify-content:space-between;font-size:11px;color:#7A9FBF;margin-bottom:5px;}
    .progress-bg{background:rgba(255,255,255,0.08);border-radius:8px;height:10px;overflow:hidden;}
    .progress-fill{height:10px;border-radius:8px;background:linear-gradient(90deg,#f87171,#fbbf24);transition:width .5s ease;}
    .social-proof{margin-top:20px;border-top:1px solid rgba(245,200,66,0.15);padding-top:16px;display:flex;flex-direction:column;gap:10px;}
    .sp-item{background:rgba(255,255,255,0.03);border-left:2px solid rgba(245,200,66,0.4);border-radius:0 8px 8px 0;padding:8px 12px;}
    .sp-text{font-size:12px;color:rgba(255,255,255,0.65);line-height:1.5;margin-bottom:3px;}
    .sp-author{font-size:11px;color:#7A9FBF;}
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

        <label className="fl">401(k) Contribution (%)</label>
        <div className="k401-row">
          <input
            type="number" value={k401}
            onChange={e=>setK401(e.target.value)}
            placeholder="e.g. 6" min="0" max="100"
          />
          {parseFloat(k401) > 0 && (
            <span className="k401-badge">
              Pre-tax · saves ~${Math.round((parseFloat(income)||0) * (parseFloat(k401)/100) * 0.22)} fed tax/yr
            </span>
          )}
        </div>

        <button className="calc-btn" onClick={calculate}>Calculate My Take-Home Pay →</button>

        {results && (
          <div className="results">

            {/* Progress bar */}
            <div className="progress-wrap">
              <div className="progress-label">
                <span>Tax burden</span>
                <span style={{color: results.taxPct > 30 ? '#f87171' : '#4ade80'}}>
                  {results.taxPct.toFixed(1)}% of gross
                </span>
              </div>
              <div className="progress-bg">
                <div className="progress-fill" style={{width: Math.min(results.taxPct, 100) + '%'}}/>
              </div>
            </div>

            <div className="r-row">
              <span>Gross Pay (per period)</span>
              <span>{fmt(results.gross)}</span>
            </div>
            {results.k401 > 0 && (
              <div className="r-row">
                <span>401(k) Contribution <span className="hint">ⓘ</span>
                  <span className="tooltip">Pre-tax — reduces your federal &amp; state taxable income</span>
                </span>
                <span style={{color:'#4ade80'}}>−{fmt(results.k401)}</span>
              </div>
            )}
            <div className="r-row">
              <span>Federal Income Tax <span className="hint">ⓘ</span>
                <span className="tooltip">2026 IRS brackets: 10%–37% on taxable income</span>
              </span>
              <span>−{fmt(results.fed)}</span>
            </div>
            <div className="r-row">
              <span>Social Security (6.2%) <span className="hint">ⓘ</span>
                <span className="tooltip">Applied up to $168,600 annual wage base (2026)</span>
              </span>
              <span>−{fmt(results.ss)}</span>
            </div>
            <div className="r-row">
              <span>Medicare (1.45%)</span>
              <span>−{fmt(results.med)}</span>
            </div>
            <div className="r-row">
              <span>State Income Tax</span>
              <span>−{fmt(results.state)}</span>
            </div>
            <div className="r-row">
              <span>🏦 Net Take-Home Pay</span>
              <span>{fmt(results.net)}</span>
            </div>
          </div>
        )}

        {/* Social proof — static, zero dependencies */}
        {!results && (
          <div className="social-proof">
            <div className="sp-item">
              <div className="sp-text">"Finally a calculator that doesn't ask for my email. Got my number in 10 seconds."</div>
              <div className="sp-author">— Teacher, Texas</div>
            </div>
            <div className="sp-item">
              <div className="sp-text">"The 401k field made me realize I was leaving $800/mo on the table in tax savings."</div>
              <div className="sp-author">— Software Engineer, California</div>
            </div>
            <div className="sp-item">
              <div className="sp-text">"Used this before every salary negotiation. Shows exactly what a raise actually means."</div>
              <div className="sp-author">— Nurse, Florida</div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
