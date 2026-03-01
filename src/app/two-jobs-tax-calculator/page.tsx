'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

export const metadata = undefined;

function fedTax(income: number, filing: string): number {
  const b: [number,number][] = filing === 'married'
    ? [[23200,.10],[94300,.12],[201050,.22],[383900,.24],[487450,.32],[731200,.35],[Infinity,.37]]
    : [[11600,.10],[47150,.12],[100525,.22],[191950,.24],[243725,.32],[609350,.35],[Infinity,.37]];
  let tax=0,prev=0;
  for(const[lim,rate] of b){if(income<=prev)break;tax+=(Math.min(income,lim)-prev)*rate;prev=lim;}
  return tax;
}

export default function TwoJobsCalculator(){
  const[job1,setJob1]=useState('60000');
  const[job2,setJob2]=useState('25000');
  const[filing,setFiling]=useState('single');
  const[state1,setState1]=useState('0.05');

  const r=useMemo(()=>{
    const j1=parseFloat(job1)||0,j2=parseFloat(job2)||0;
    const sr=parseFloat(state1)||0;
    const std=filing==='married'?30000:15000;
    const combined=j1+j2;
    // Tax if filed separately (each job withholds as if only job)
    const withheldJ1=fedTax(Math.max(0,j1-std),filing);
    const withheldJ2=fedTax(Math.max(0,j2-std),filing);
    const totalWithheld=withheldJ1+withheldJ2;
    // Actual tax on combined income
    const actualFed=fedTax(Math.max(0,combined-std),filing);
    const shortfall=Math.max(0,actualFed-totalWithheld);
    const fica=Math.min(combined,176100)*0.062+combined*0.0145;
    const stateTax=Math.max(0,combined-std)*sr;
    const net=combined-actualFed-fica-stateTax;
    const extraW4=shortfall/26;
    return{combined,withheldJ1,withheldJ2,totalWithheld,actualFed,shortfall,fica,stateTax,net,extraW4};
  },[job1,job2,filing,state1]);

  const fmt=(n:number)=>'$'+Math.round(n).toLocaleString();
  const inp:React.CSSProperties={width:'100%',padding:'10px 14px',background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'8px',color:'white',fontSize:'15px',outline:'none',boxSizing:'border-box',fontFamily:'inherit'};
  const lbl:React.CSSProperties={fontSize:'11px',color:'rgba(255,255,255,0.45)',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'6px',display:'block'};

  return(
    <main style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}>
        <Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}><span style={{color:'#4ade80'}}>$</span> PrivatePaycheck</Link>
        <div style={{display:'flex',gap:'16px',fontSize:'13px'}}>
          <Link href="/w4-withholding-calculator" style={{color:'#818cf8',textDecoration:'none'}}>W-4 Calculator</Link>
          <Link href="/" style={{color:'rgba(255,255,255,0.6)',textDecoration:'none'}}>Calculator</Link>
        </div>
      </nav>
      <div style={{maxWidth:'900px',margin:'0 auto',padding:'32px 16px'}}>
        <div style={{textAlign:'center',marginBottom:'28px'}}>
          <div style={{display:'inline-block',background:'rgba(129,140,248,0.1)',border:'1px solid rgba(129,140,248,0.3)',borderRadius:'20px',padding:'6px 16px',fontSize:'13px',marginBottom:'12px',color:'#818cf8'}}>Two Jobs = Higher Tax Bracket</div>
          <h1 style={{fontSize:'clamp(24px,4vw,42px)',fontWeight:900,margin:'0 0 12px',lineHeight:1.2}}>Two Jobs Tax Calculator 2026</h1>
          <p style={{fontSize:'15px',opacity:0.65,maxWidth:'560px',margin:'0 auto',lineHeight:1.7}}>Working two jobs? See your real combined tax bill, how much each employer under-withholds, and exactly how much extra to put on your W-4.</p>
        </div>

        <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(129,140,248,0.3)',borderRadius:'16px',padding:'28px',marginBottom:'24px'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(170px,1fr))',gap:'16px',marginBottom:'16px'}}>
            <div><label style={lbl}>Job 1 вЂ” Annual Salary ($)</label><input type="number" value={job1} onChange={e=>setJob1(e.target.value)} style={inp} placeholder="60000"/></div>
            <div><label style={lbl}>Job 2 вЂ” Annual Salary ($)</label><input type="number" value={job2} onChange={e=>setJob2(e.target.value)} style={inp} placeholder="25000"/></div>
            <div>
              <label style={lbl}>Filing Status</label>
              <select value={filing} onChange={e=>setFiling(e.target.value)} style={inp}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
              </select>
            </div>
            <div>
              <label style={lbl}>State Tax Rate</label>
              <select value={state1} onChange={e=>setState1(e.target.value)} style={inp}>
                <option value="0">No state tax (TX, FL, NV...)</option>
                <option value="0.03">3% (ND, AZ low)</option>
                <option value="0.05">5% (MA, AL avg)</option>
                <option value="0.06">6% (GA, SC)</option>
                <option value="0.0685">6.85% (NY)</option>
                <option value="0.093">9.3% (CA)</option>
                <option value="0.099">9.9% (OR)</option>
              </select>
            </div>
          </div>

          <div style={{background:'linear-gradient(135deg,rgba(129,140,248,0.12),rgba(99,102,241,0.12))',border:'1px solid rgba(129,140,248,0.25)',borderRadius:'12px',padding:'24px'}}>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))',gap:'12px',marginBottom:'20px',textAlign:'center'}}>
              <div style={{background:'rgba(0,0,0,0.3)',borderRadius:'10px',padding:'14px'}}>
                <div style={{fontSize:'11px',opacity:0.5,marginBottom:'4px'}}>Combined Income</div>
                <div style={{fontSize:'22px',fontWeight:900}}>{fmt(r.combined)}</div>
              </div>
              <div style={{background:'rgba(0,0,0,0.3)',borderRadius:'10px',padding:'14px'}}>
                <div style={{fontSize:'11px',opacity:0.5,marginBottom:'4px'}}>Actual Fed Tax</div>
                <div style={{fontSize:'22px',fontWeight:900,color:'#f87171'}}>{fmt(r.actualFed)}</div>
              </div>
              <div style={{background:'rgba(248,113,113,0.15)',border:'1px solid rgba(248,113,113,0.3)',borderRadius:'10px',padding:'14px'}}>
                <div style={{fontSize:'11px',opacity:0.5,marginBottom:'4px'}}>Tax Shortfall вљ пёЏ</div>
                <div style={{fontSize:'22px',fontWeight:900,color:'#f87171'}}>{fmt(r.shortfall)}</div>
              </div>
              <div style={{background:'rgba(74,222,128,0.1)',border:'1px solid rgba(74,222,128,0.2)',borderRadius:'10px',padding:'14px'}}>
                <div style={{fontSize:'11px',opacity:0.5,marginBottom:'4px'}}>Annual Take-Home</div>
                <div style={{fontSize:'22px',fontWeight:900,color:'#4ade80'}}>{fmt(r.net)}</div>
              </div>
            </div>

            {r.shortfall>0&&(
              <div style={{background:'rgba(248,113,113,0.1)',border:'1px solid rgba(248,113,113,0.25)',borderRadius:'10px',padding:'16px',textAlign:'center'}}>
                <div style={{fontSize:'13px',opacity:0.7,marginBottom:'6px'}}>To avoid a tax bill, add this much extra withholding on your W-4 (Job 2):</div>
                <div style={{fontSize:'32px',fontWeight:900,color:'#f87171'}}>{fmt(r.extraW4)}<span style={{fontSize:'14px',opacity:0.6}}>/paycheck</span></div>
                <div style={{fontSize:'12px',opacity:0.5,marginTop:'4px'}}>Based on 26 biweekly paychecks</div>
              </div>
            )}
            {r.shortfall===0&&(
              <div style={{background:'rgba(74,222,128,0.08)',border:'1px solid rgba(74,222,128,0.2)',borderRadius:'10px',padding:'16px',textAlign:'center'}}>
                <div style={{fontSize:'15px',color:'#4ade80',fontWeight:700}}>вњ… No shortfall вЂ” your withholding covers your tax bill</div>
              </div>
            )}
          </div>

          <div style={{marginTop:'16px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px',fontSize:'13px',opacity:0.7}}>
            <div>Job 1 withholds: {fmt(r.withheldJ1)}</div>
            <div>Job 2 withholds: {fmt(r.withheldJ2)}</div>
            <div>Combined withheld: {fmt(r.totalWithheld)}</div>
            <div>FICA total: {fmt(r.fica)}</div>
          </div>
          <p style={{textAlign:'center',fontSize:'11px',opacity:0.3,margin:'10px 0 0'}}>рџ”’ All calculations in your browser вЂ” data never sent anywhere</p>
        </div>

        <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'24px',marginBottom:'24px'}}>
          <h2 style={{fontSize:'18px',fontWeight:800,marginBottom:'16px'}}>Why Two Jobs Means a Higher Tax Bill</h2>
          <div style={{fontSize:'14px',lineHeight:1.8,opacity:0.8}}>
            <p>Each employer withholds taxes as if their job is your <strong>only</strong> source of income. They give you the full standard deduction ($15,000) and start withholding from the lowest tax bracket.</p>
            <p style={{marginTop:'12px'}}>But when you file, the IRS combines both salaries. Your combined income may push you into a higher bracket вЂ” and you only get one standard deduction. The result: you owe more than was withheld.</p>
            <p style={{marginTop:'12px'}}><strong>Fix:</strong> On your lower-paying job, check &quot;Step 2: Multiple Jobs&quot; on your W-4, or add extra withholding in Step 4(c). This calculator tells you exactly how much extra to withhold.</p>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'12px'}}>
          <Link href="/w4-withholding-calculator" style={{display:'block',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',borderRadius:'12px',padding:'14px',color:'white',textDecoration:'none',textAlign:'center'}}>
            <div style={{fontSize:'20px',marginBottom:'6px'}}>рџ“ќ</div>
            <div style={{fontWeight:700,fontSize:'13px'}}>W-4 Calculator</div>
            <div style={{fontSize:'11px',opacity:0.5,marginTop:'3px'}}>Fix your withholding в†’</div>
          </Link>
          <Link href="/" style={{display:'block',background:'rgba(74,222,128,0.08)',border:'1px solid rgba(74,222,128,0.2)',borderRadius:'12px',padding:'14px',color:'white',textDecoration:'none',textAlign:'center'}}>
            <div style={{fontSize:'20px',marginBottom:'6px'}}>рџ’°</div>
            <div style={{fontWeight:700,fontSize:'13px'}}>Paycheck Calculator</div>
            <div style={{fontSize:'11px',opacity:0.5,marginTop:'3px'}}>Single job breakdown в†’</div>
          </Link>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'24px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)',marginTop:'40px'}}>
        В© 2026 PrivatePaycheck.com В· <Link href="/privacy-policy" style={{color:'inherit'}}>Privacy Policy</Link> В· <Link href="/terms" style={{color:'inherit'}}>Terms</Link>
      </footer>
    </main>
  );
}
