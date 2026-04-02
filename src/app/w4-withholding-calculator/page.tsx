'use client';
'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

function fedTax(income: number, filing: string): number {
  const b: [number,number][] = filing === 'married'
    ? [[23200,.10],[94300,.12],[201050,.22],[383900,.24],[487450,.32],[731200,.35],[Infinity,.37]]
    : [[11600,.10],[47150,.12],[100525,.22],[191950,.24],[243725,.32],[609350,.35],[Infinity,.37]];
  let tax=0,prev=0;
  for(const[lim,rate] of b){if(income<=prev)break;tax+=(Math.min(income,lim)-prev)*rate;prev=lim;}
  return tax;
}


export const metadata = {
  alternates: { canonical: 'https://www.privatepaycheck.com/w4-withholding-calculator' },
};

export default function W4Calculator(){
  const[salary,setSalary]=useState('75000');
  const[filing,setFiling]=useState('single');
  const[k401,setK401]=useState('5000');
  const[otherIncome,setOtherIncome]=useState('0');
  const[deductions,setDeductions]=useState('0');
  const[credits,setCredits]=useState('0');

  const r=useMemo(()=>{
    const s=parseFloat(salary)||0;
    const k=Math.min(parseFloat(k401)||0,23500);
    const oi=parseFloat(otherIncome)||0;
    const ded=parseFloat(deductions)||0;
    const cred=parseFloat(credits)||0;
    const std=filing==='married'?30000:15000;
    const totalIncome=s+oi-k;
    const itemizedOrStd=Math.max(std,ded);
    const taxable=Math.max(0,totalIncome-itemizedOrStd);
    const fedOwed=Math.max(0,fedTax(taxable,filing)-cred);
    const perPaycheck26=fedOwed/26;
    const perPaycheck24=fedOwed/24;
    const perPaycheck52=fedOwed/52;
    // Step 4b: deductions above standard
    const extraDed=Math.max(0,ded-std);
    // Step 4c: extra withholding if other income
    const extraWithholding=oi>0?fedTax(oi,filing)/26:0;
    return{fedOwed,perPaycheck26,perPaycheck24,perPaycheck52,extraDed,extraWithholding,taxable,totalIncome};
  },[salary,filing,k401,otherIncome,deductions,credits]);

  const fmt=(n:number)=>'$'+Math.round(n).toLocaleString();
  const fmtD=(n:number)=>'$'+(n).toFixed(2);
  const inp:React.CSSProperties={width:'100%',padding:'10px 14px',background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'8px',color:'white',fontSize:'15px',outline:'none',boxSizing:'border-box',fontFamily:'inherit'};
  const lbl:React.CSSProperties={fontSize:'11px',color:'rgba(255,255,255,0.45)',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'6px',display:'block'};

  return(
    <main style={{minHeight:'100vh',background:'#091526',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <div style={{maxWidth:'900px',margin:'0 auto',padding:'32px 16px'}}>
        <div style={{textAlign:'center',marginBottom:'28px'}}>
          <h1 style={{fontSize:'clamp(24px,4vw,42px)',fontWeight:900,margin:'0 0 12px',lineHeight:1.2}}>W-4 Withholding Calculator 2026</h1>
          <p style={{fontSize:'15px',opacity:0.65,maxWidth:'560px',margin:'0 auto',lineHeight:1.7}}>Find the exact numbers to enter on your W-4 so you get the right refund "— not too big, not too small.</p>
        </div>

        <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(201,168,76,0.3)',borderRadius:'16px',padding:'28px',marginBottom:'24px'}}>
          <h2 style={{fontSize:'15px',fontWeight:800,marginBottom:'16px',color:'#F5C842'}}>Your Tax Situation</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(170px,1fr))',gap:'16px',marginBottom:'16px'}}>
            <div><label style={lbl}>Annual Salary ($)</label><input type="number" value={salary} onChange={e=>setSalary(e.target.value)} style={inp}/></div>
            <div>
              <label style={lbl}>Filing Status</label>
              <select value={filing} onChange={e=>setFiling(e.target.value)} style={{...inp, colorScheme:'dark', background:'#1e293b', color:'#fff'}}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
              </select>
            </div>
            <div><label style={lbl}>401(k) Contribution/yr</label><input type="number" value={k401} onChange={e=>setK401(e.target.value)} style={inp} placeholder="0"/></div>
            <div><label style={lbl}>Other Income/yr (freelance, etc)</label><input type="number" value={otherIncome} onChange={e=>setOtherIncome(e.target.value)} style={inp} placeholder="0"/></div>
            <div><label style={lbl}>Itemized Deductions/yr</label><input type="number" value={deductions} onChange={e=>setDeductions(e.target.value)} style={inp} placeholder="0"/></div>
            <div><label style={lbl}>Tax Credits/yr (child, etc)</label><input type="number" value={credits} onChange={e=>setCredits(e.target.value)} style={inp} placeholder="0"/></div>
          </div>

          <div style={{background:'linear-gradient(135deg,rgba(201,168,76,0.12),rgba(129,140,248,0.08))',border:'1px solid rgba(201,168,76,0.25)',borderRadius:'12px',padding:'24px'}}>
            <h3 style={{fontSize:'16px',fontWeight:800,marginBottom:'16px',color:'#F5C842'}}> Enter These Numbers on Your W-4</h3>
            <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
              {[
                {step:'Step 1',field:'Filing Status',value:filing==='married'?'Married Filing Jointly':'Single or Married Filing Separately',note:'Check the appropriate box'},
                {step:'Step 3',field:'Tax Credits',value:fmt(parseFloat(credits)||0),note:'Enter total annual credits (child tax credit = $2,000/child)'},
                {step:'Step 4(a)',field:'Other Income',value:fmt(parseFloat(otherIncome)||0),note:'Freelance, rental, investment income not from this job'},
                {step:'Step 4(b)',field:'Deductions',value:fmt(Math.max(0,parseFloat(deductions)||0)),note:'Only if itemizing MORE than standard deduction'},
                {step:'Step 4(c)',field:'Extra Withholding/paycheck',value:fmtD(r.extraWithholding),note:'Add this if you have other income sources'},
              ].map(row=>(
                <div key={row.step} style={{display:'flex',alignItems:'flex-start',gap:'12px',background:'rgba(0,0,0,0.2)',borderRadius:'8px',padding:'12px'}}>
                  <div style={{background:'rgba(201,168,76,0.15)',color:'#F5C842',padding:'4px 10px',borderRadius:'6px',fontSize:'11px',fontWeight:700,whiteSpace:'nowrap'}}>{row.step}</div>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:700,fontSize:'13px',marginBottom:'2px'}}>{row.field}: <span style={{color:'#4ade80'}}>{row.value}</span></div>
                    <div style={{fontSize:'11px',opacity:0.5}}>{row.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{marginTop:'16px',background:'rgba(255,255,255,0.03)',borderRadius:'10px',padding:'16px',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:'10px',textAlign:'center',fontSize:'13px'}}>
            <div><div style={{opacity:0.5,fontSize:'11px',marginBottom:'3px'}}>Annual Fed Tax</div><div style={{fontWeight:800,color:'#f87171'}}>{fmt(r.fedOwed)}</div></div>
            <div><div style={{opacity:0.5,fontSize:'11px',marginBottom:'3px'}}>Per Biweekly Check</div><div style={{fontWeight:800}}>{fmtD(r.perPaycheck26)}</div></div>
            <div><div style={{opacity:0.5,fontSize:'11px',marginBottom:'3px'}}>Per Semi-Monthly</div><div style={{fontWeight:800}}>{fmtD(r.perPaycheck24)}</div></div>
            <div><div style={{opacity:0.5,fontSize:'11px',marginBottom:'3px'}}>Per Weekly Check</div><div style={{fontWeight:800}}>{fmtD(r.perPaycheck52)}</div></div>
          </div>
          <p style={{textAlign:'center',fontSize:'11px',opacity:0.3,margin:'10px 0 0'}}> All calculations in your browser "— data never sent anywhere</p>
        </div>

        <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'24px',marginBottom:'24px'}}>
          <h2 style={{fontSize:'18px',fontWeight:800,marginBottom:'14px'}}>W-4 FAQ 2026</h2>
          {[
            {q:'How often should I update my W-4?',a:'Update whenever your life changes: marriage, divorce, new child, second job, side income, buying a home. Also review after filing taxes if you got a surprise bill or large refund.'},
            {q:'Big refund = good thing?',a:'Not necessarily. A large refund means you overpaid taxes throughout the year "— essentially giving the IRS an interest-free loan. Adjust withholding to get more in each paycheck instead.'},
            {q:'What if I owe taxes every year?',a:'Increase withholding in Step 4(c) "— add a fixed dollar amount per paycheck. This calculator shows you exactly how much to add based on your situation.'},
            {q:'Do I need to submit a new W-4 every year?',a:'No "— your W-4 stays in effect until you change it. But it is good practice to review it annually, especially after tax law changes.'},
          ].map(item=>(
            <div key={item.q} style={{marginBottom:'14px',paddingBottom:'14px',borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
              <h3 style={{fontSize:'14px',fontWeight:700,marginBottom:'5px'}}>{item.q}</h3>
              <p style={{fontSize:'13px',opacity:0.7,lineHeight:1.7,margin:0}}>{item.a}</p>
            </div>
          ))}
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'12px'}}>
          <Link href="/two-jobs-tax-calculator" style={{display:'block',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(201,168,76,0.15)',borderRadius:'12px',padding:'14px',color:'white',textDecoration:'none',textAlign:'center'}}>
            <div style={{fontSize:'20px',marginBottom:'6px'}}></div>
            <div style={{fontWeight:700,fontSize:'13px'}}>Two Jobs Tax Calculator</div>
            <div style={{fontSize:'11px',opacity:0.5,marginTop:'3px'}}>Fix two-job shortfall в†’</div>
          </Link>
          <Link href="/" style={{display:'block',background:'rgba(74,222,128,0.08)',border:'1px solid rgba(74,222,128,0.2)',borderRadius:'12px',padding:'14px',color:'white',textDecoration:'none',textAlign:'center'}}>
            <div style={{fontSize:'20px',marginBottom:'6px'}}></div>
            <div style={{fontWeight:700,fontSize:'13px'}}>Paycheck Calculator</div>
            <div style={{fontSize:'11px',opacity:0.5,marginTop:'3px'}}>See take-home pay в†’</div>
          </Link>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'24px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)',marginTop:'40px'}}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{color:'inherit'}}>Privacy Policy</Link> · <Link href="/terms" style={{color:'inherit'}}>Terms</Link>
      </footer>
    </main>
  );
}
