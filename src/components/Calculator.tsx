'use client';
import { useState } from 'react';

const FEDERAL_SINGLE = [
  { min: 0, max: 11600, rate: 0.10 },
  { min: 11600, max: 47150, rate: 0.12 },
  { min: 47150, max: 100525, rate: 0.22 },
  { min: 100525, max: 191950, rate: 0.24 },
  { min: 191950, max: 243725, rate: 0.32 },
  { min: 243725, max: 609350, rate: 0.35 },
  { min: 609350, max: Infinity, rate: 0.37 },
];
const FEDERAL_MARRIED = [
  { min: 0, max: 23200, rate: 0.10 },
  { min: 23200, max: 94300, rate: 0.12 },
  { min: 94300, max: 201050, rate: 0.22 },
  { min: 201050, max: 383900, rate: 0.24 },
  { min: 383900, max: 487450, rate: 0.32 },
  { min: 487450, max: 731200, rate: 0.35 },
  { min: 731200, max: Infinity, rate: 0.37 },
];
const STATE_TAXES: Record<string, { rate: number; name: string; noTax?: boolean }> = {
  al:{rate:0.050,name:'Alabama'},ak:{rate:0,name:'Alaska',noTax:true},az:{rate:0.025,name:'Arizona'},
  ar:{rate:0.047,name:'Arkansas'},ca:{rate:0.093,name:'California'},co:{rate:0.044,name:'Colorado'},
  ct:{rate:0.070,name:'Connecticut'},de:{rate:0.066,name:'Delaware'},fl:{rate:0,name:'Florida',noTax:true},
  ga:{rate:0.055,name:'Georgia'},hi:{rate:0.110,name:'Hawaii'},id:{rate:0.058,name:'Idaho'},
  il:{rate:0.049,name:'Illinois'},in:{rate:0.030,name:'Indiana'},ia:{rate:0.060,name:'Iowa'},
  ks:{rate:0.057,name:'Kansas'},ky:{rate:0.045,name:'Kentucky'},la:{rate:0.043,name:'Louisiana'},
  me:{rate:0.075,name:'Maine'},md:{rate:0.058,name:'Maryland'},ma:{rate:0.050,name:'Massachusetts'},
  mi:{rate:0.042,name:'Michigan'},mn:{rate:0.098,name:'Minnesota'},ms:{rate:0.050,name:'Mississippi'},
  mo:{rate:0.049,name:'Missouri'},mt:{rate:0.069,name:'Montana'},ne:{rate:0.068,name:'Nebraska'},
  nv:{rate:0,name:'Nevada',noTax:true},nh:{rate:0,name:'New Hampshire',noTax:true},
  nj:{rate:0.108,name:'New Jersey'},nm:{rate:0.059,name:'New Mexico'},ny:{rate:0.109,name:'New York'},
  nc:{rate:0.045,name:'North Carolina'},nd:{rate:0.025,name:'North Dakota'},oh:{rate:0.040,name:'Ohio'},
  ok:{rate:0.050,name:'Oklahoma'},or:{rate:0.099,name:'Oregon'},pa:{rate:0.031,name:'Pennsylvania'},
  ri:{rate:0.059,name:'Rhode Island'},sc:{rate:0.070,name:'South Carolina'},
  sd:{rate:0,name:'South Dakota',noTax:true},tn:{rate:0,name:'Tennessee',noTax:true},
  tx:{rate:0,name:'Texas',noTax:true},ut:{rate:0.046,name:'Utah'},vt:{rate:0.086,name:'Vermont'},
  va:{rate:0.058,name:'Virginia'},wa:{rate:0,name:'Washington',noTax:true},wv:{rate:0.065,name:'West Virginia'},
  wi:{rate:0.076,name:'Wisconsin'},wy:{rate:0,name:'Wyoming',noTax:true},dc:{rate:0.109,name:'DC'},
};
const FREQS = [
  {id:'hourly',label:'Hourly',mult:2080},
  {id:'weekly',label:'Weekly',mult:52},
  {id:'biweekly',label:'Bi-Weekly',mult:26},
  {id:'semimonthly',label:'Semi-Monthly',mult:24},
  {id:'monthly',label:'Monthly',mult:12},
  {id:'annual',label:'Annual',mult:1},
];
function calcFed(annual: number, filing: string) {
  const brackets = filing === 'married' ? FEDERAL_MARRIED : FEDERAL_SINGLE;
  const std = filing === 'married' ? 29200 : 14600;
  const taxable = Math.max(0, annual - std);
  let tax = 0;
  for (const b of brackets) {
    if (taxable <= b.min) break;
    tax += (Math.min(taxable, b.max) - b.min) * b.rate;
  }
  return tax;
}
const fmt = (n: number) => '$' + n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});

export default function Calculator({ defaultState = 'ca' }: { defaultState?: string }) {
  const [freq, setFreq] = useState('annual');
  const [gross, setGross] = useState('75000');
  const [filing, setFiling] = useState('single');
  const [state, setState] = useState(defaultState);
  const [k401, setK401] = useState('0');
  const [hsa, setHsa] = useState('0');
  const [insurance, setInsurance] = useState('0');

  const f = FREQS.find(x=>x.id===freq)!;
  const g = parseFloat(gross)||0;
  const annual = g * f.mult;
  const preTax = (parseFloat(k401)||0)+(parseFloat(hsa)||0)+(parseFloat(insurance)||0);
  const taxable = Math.max(0, annual - preTax);
  const fed = calcFed(taxable, filing);
  const ss = Math.min(annual,168600)*0.062;
  const med = annual*0.0145;
  const stData = STATE_TAXES[state]||STATE_TAXES.ca;
  const stTax = stData.noTax ? 0 : taxable*stData.rate;
  const totalTax = fed+ss+med+stTax+preTax;
  const netAnnual = annual-totalTax;
  const netPer = netAnnual/f.mult;
  const effRate = annual>0?((fed+ss+med+stTax)/annual*100):0;

  const inp: React.CSSProperties = {width:'100%',background:'rgba(255,255,255,0.07)',border:'1.5px solid rgba(255,255,255,0.12)',borderRadius:'10px',padding:'11px 14px',color:'white',fontSize:'15px',fontFamily:'inherit',outline:'none',boxSizing:'border-box'};
  const lbl: React.CSSProperties = {fontSize:'11px',color:'rgba(255,255,255,0.45)',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'6px',display:'block'};

  return (
    <div style={{fontFamily:"'Inter',-apple-system,sans-serif"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        input:focus,select:focus{border-color:#6366f1!important;box-shadow:0 0 0 3px rgba(99,102,241,0.15);}
        input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;}
        .fb{cursor:pointer;transition:all 0.18s;border:1.5px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.6);border-radius:8px;padding:9px 16px;font-size:13px;font-weight:600;font-family:inherit;white-space:nowrap;}
        .fb:hover{background:rgba(255,255,255,0.1);color:white;}
        .fb.on{background:linear-gradient(135deg,#6366f1,#8b5cf6);border-color:transparent;color:white;box-shadow:0 4px 12px rgba(99,102,241,0.35);}
        .tc{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:14px 16px;}
        .tc:hover{background:rgba(255,255,255,0.08);}
        select option{background:#1e1b4b;}
        .adbox{background:rgba(255,255,255,0.03);border:1.5px dashed rgba(255,255,255,0.1);border-radius:12px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.2);font-size:12px;letter-spacing:0.05em;text-align:center;}
      `}</style>

      <div style={{display:'flex',gap:'28px',alignItems:'flex-start',maxWidth:'1200px',margin:'0 auto',padding:'0 20px'}}>

        {/* CALCULATOR 70% */}
        <div style={{flex:'1 1 0',minWidth:0}}>

          {/* Freq buttons */}
          <div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginBottom:'20px'}}>
            {FREQS.map(x=>(
              <button key={x.id} className={`fb${freq===x.id?' on':''}`} onClick={()=>setFreq(x.id)}>{x.label}</button>
            ))}
          </div>

          {/* Row 1 */}
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'14px',marginBottom:'14px'}}>
            <div>
              <label style={lbl}>{f.id==='hourly'?'Hourly Rate':f.id==='annual'?'Annual Salary':`${f.label} Pay`}</label>
              <div style={{position:'relative'}}>
                <span style={{position:'absolute',left:'13px',top:'50%',transform:'translateY(-50%)',color:'rgba(255,255,255,0.35)',fontSize:'15px'}}>$</span>
                <input type="number" value={gross} onChange={e=>setGross(e.target.value)} style={{...inp,paddingLeft:'28px'}}/>
              </div>
            </div>
            <div>
              <label style={lbl}>Filing Status</label>
              <select value={filing} onChange={e=>setFiling(e.target.value)} style={inp}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="head">Head of Household</option>
              </select>
            </div>
            <div>
              <label style={lbl}>State</label>
              <select value={state} onChange={e=>setState(e.target.value)} style={inp}>
                {Object.entries(STATE_TAXES).sort((a,b)=>a[1].name.localeCompare(b[1].name)).map(([c,d])=>(
                  <option key={c} value={c}>{d.name}{d.noTax?' ✓ No Tax':''}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'14px',marginBottom:'20px'}}>
            {[{l:'Annual 401(k)',v:k401,s:setK401},{l:'Annual HSA',v:hsa,s:setHsa},{l:'Health Insurance/yr',v:insurance,s:setInsurance}].map(x=>(
              <div key={x.l}>
                <label style={lbl}>{x.l}</label>
                <div style={{position:'relative'}}>
                  <span style={{position:'absolute',left:'13px',top:'50%',transform:'translateY(-50%)',color:'rgba(255,255,255,0.35)',fontSize:'15px'}}>$</span>
                  <input type="number" value={x.v} onChange={e=>x.s(e.target.value)} style={{...inp,paddingLeft:'28px'}}/>
                </div>
              </div>
            ))}
          </div>

          {/* Ad leaderboard */}
          <div className="adbox" style={{height:'90px',marginBottom:'20px'}}>
            {/* AdSense 728×90 */}
            Advertisement
          </div>

          {/* Result */}
          <div style={{background:'linear-gradient(135deg,rgba(99,102,241,0.18),rgba(139,92,246,0.12))',border:'1px solid rgba(99,102,241,0.3)',borderRadius:'14px',padding:'22px 24px',marginBottom:'14px'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'16px'}}>
              <div>
                <div style={{fontSize:'12px',color:'rgba(255,255,255,0.5)',marginBottom:'6px',fontWeight:500}}>Take-Home Pay ({f.label})</div>
                <div style={{fontSize:'46px',fontWeight:800,color:'#4ade80',letterSpacing:'-0.02em',lineHeight:1}}>{fmt(netPer)}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontSize:'12px',color:'rgba(255,255,255,0.5)',marginBottom:'4px'}}>Annual Net</div>
                <div style={{fontSize:'26px',fontWeight:700,color:'white'}}>{fmt(netAnnual)}</div>
                <div style={{fontSize:'12px',color:'rgba(255,255,255,0.4)',marginTop:'4px'}}>Effective rate: {effRate.toFixed(1)}%</div>
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(155px,1fr))',gap:'10px',marginBottom:'10px'}}>
            {[
              {l:'Federal Income Tax',v:fed,c:'#f87171'},
              {l:'Social Security',v:ss,c:'#fb923c'},
              {l:'Medicare',v:med,c:'#fbbf24'},
              {l:`State Tax (${stData.name})`,v:stTax,c:'#a78bfa'},
              {l:'Pre-Tax Deductions',v:preTax,c:'#34d399'},
            ].map(x=>(
              <div key={x.l} className="tc">
                <div style={{fontSize:'10px',color:'rgba(255,255,255,0.4)',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:'6px'}}>{x.l}</div>
                <div style={{fontSize:'19px',fontWeight:700,color:x.c}}>{fmt(x.v/f.mult)}</div>
                <div style={{fontSize:'11px',color:'rgba(255,255,255,0.3)',marginTop:'2px'}}>{fmt(x.v)}/yr</div>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center',fontSize:'11px',color:'rgba(255,255,255,0.25)',padding:'8px 0 4px'}}>🔒 2026 tax tables · Your data never leaves your browser</div>
        </div>

        {/* AD SIDEBAR 30% */}
        <div style={{width:'300px',flexShrink:0,display:'flex',flexDirection:'column',gap:'16px',position:'sticky',top:'80px'}}>
          <div className="adbox" style={{height:'250px'}}>
            {/* AdSense 300×250 */}
            Ad · 300×250
          </div>
          <div className="adbox" style={{height:'250px'}}>
            Ad · 300×250
          </div>
          <div className="adbox" style={{height:'600px'}}>
            Ad · 300×600
          </div>
        </div>
      </div>
    </div>
  );
}
