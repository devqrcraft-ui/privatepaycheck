'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const BS = [{min:0,max:11925,rate:0.10},{min:11925,max:48475,rate:0.12},{min:48475,max:103350,rate:0.22},{min:103350,max:197300,rate:0.24},{min:197300,max:250525,rate:0.32},{min:250525,max:626350,rate:0.35},{min:626350,max:1e9,rate:0.37}];
const BM = [{min:0,max:23850,rate:0.10},{min:23850,max:96950,rate:0.12},{min:96950,max:206700,rate:0.22},{min:206700,max:394600,rate:0.24},{min:394600,max:501050,rate:0.32},{min:501050,max:751600,rate:0.35},{min:751600,max:1e9,rate:0.37}];

function fedTax(income: number, filing: string): number {
  const br = filing === 'married' ? BM : BS;
  const taxable = Math.max(0, income - (filing === 'married' ? 30000 : 15000));
  let tax = 0;
  for (const b of br) { if (taxable <= b.min) break; tax += (Math.min(taxable, b.max) - b.min) * b.rate; }
  return tax;
}

const ST: Record<string,number> = {al:0.05,ak:0,az:0.025,ar:0.047,ca:0.093,co:0.044,ct:0.07,de:0.066,fl:0,ga:0.055,hi:0.11,id:0.058,il:0.049,in:0.03,ia:0.06,ks:0.057,ky:0.045,la:0.043,me:0.075,md:0.058,ma:0.05,mi:0.042,mn:0.098,ms:0.05,mo:0.049,mt:0.069,ne:0.068,nv:0,nh:0,nj:0.108,nm:0.059,ny:0.109,nc:0.045,nd:0.025,oh:0.04,ok:0.05,or:0.099,pa:0.031,ri:0.059,sc:0.07,sd:0,tn:0,tx:0,ut:0.046,vt:0.086,va:0.058,wa:0,wv:0.065,wi:0.076,wy:0,dc:0.109};
const SN: Record<string,string> = {al:'Alabama',ak:'Alaska',az:'Arizona',ar:'Arkansas',ca:'California',co:'Colorado',ct:'Connecticut',de:'Delaware',fl:'Florida',ga:'Georgia',hi:'Hawaii',id:'Idaho',il:'Illinois',in:'Indiana',ia:'Iowa',ks:'Kansas',ky:'Kentucky',la:'Louisiana',me:'Maine',md:'Maryland',ma:'Massachusetts',mi:'Michigan',mn:'Minnesota',ms:'Mississippi',mo:'Missouri',mt:'Montana',ne:'Nebraska',nv:'Nevada',nh:'New Hampshire',nj:'New Jersey',nm:'New Mexico',ny:'New York',nc:'North Carolina',nd:'North Dakota',oh:'Ohio',ok:'Oklahoma',or:'Oregon',pa:'Pennsylvania',ri:'Rhode Island',sc:'South Carolina',sd:'South Dakota',tn:'Tennessee',tx:'Texas',ut:'Utah',vt:'Vermont',va:'Virginia',wa:'Washington',wv:'West Virginia',wi:'Wisconsin',wy:'Wyoming',dc:'DC'};

export default function TwoJobsClient() {
  const [j1,setJ1]=useState('60000');
  const [j2,setJ2]=useState('25000');
  const [filing,setFiling]=useState('single');
  const [state,setState]=useState('tx');
  const [pp,setPp]=useState('26');
  const [res,setRes]=useState<{combined:number;total:number;shortfall:number;extra:number;rate:number}|null>(null);

  useEffect(()=>{
    const a=parseFloat(j1)||0, b=parseFloat(j2)||0, p=parseInt(pp)||26;
    if(a<=0){setRes(null);return;}
    const combined=a+b, sr=ST[state]||0;
    const correctTotal=fedTax(combined,filing)+combined*sr+combined*0.0765;
    const separateTotal=fedTax(a,filing)+(b>0?fedTax(b,filing):0)+combined*sr+combined*0.0765;
    const shortfall=Math.max(0,correctTotal-separateTotal);
    setRes({combined,total:correctTotal,shortfall,extra:shortfall/p,rate:combined>0?(correctTotal/combined)*100:0});
  },[j1,j2,filing,state,pp]);

  const fmt=(n:number)=>'$'+Math.round(n).toLocaleString();
  const sel=(label:string,val:string,set:(v:string)=>void,opts:[string,string][])=>(
    <div key={label}>
      <label style={{fontSize:'11px',color:'rgba(255,255,255,0.45)',fontWeight:600,textTransform:'uppercase' as const,letterSpacing:'0.06em',marginBottom:'6px',display:'block'}}>{label}</label>
      <select value={val} onChange={e=>set(e.target.value)} style={{width:'100%',background:'rgba(255,255,255,0.07)',border:'1.5px solid rgba(255,255,255,0.12)',borderRadius:'10px',padding:'11px 14px',color:'white',fontSize:'15px',fontFamily:'inherit',outline:'none',boxSizing:'border-box' as const}}>
        {opts.map(([v,l])=><option key={v} value={v}>{l}</option>)}
      </select>
    </div>
  );

  return (
    <main style={{minHeight:'100vh',background:'#091526',color:'white',fontFamily:'system-ui,sans-serif'}}>
      <div style={{maxWidth:'860px',margin:'0 auto',padding:'40px 16px'}}>
        <div style={{fontSize:'13px',opacity:0.5,marginBottom:'24px'}}>
          <Link href="/" style={{color:'inherit',textDecoration:'none'}}>Home</Link>{' › Two Jobs Tax Calculator'}
        </div>
        <div style={{textAlign:'center',marginBottom:'36px'}}>
          <h1 style={{fontSize:'clamp(24px,4vw,42px)',fontWeight:900,margin:'0 0 12px'}}>Two Jobs Tax Calculator 2026</h1>
          <p style={{fontSize:'15px',opacity:0.65,maxWidth:'540px',margin:'0 auto',lineHeight:1.7}}>Each employer withholds taxes as if it is your only job. Calculate your shortfall and how much extra to add on your W-4.</p>
        </div>
        <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(129,140,248,0.3)',borderRadius:'16px',padding:'28px',marginBottom:'24px'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'16px',marginBottom:'20px'}}>
            {[['Job 1 Annual Salary ($)',j1,setJ1,'60000'],['Job 2 Annual Salary ($)',j2,setJ2,'25000']].map(([label,val,set,ph])=>(
              <div key={label as string}>
                <label style={{fontSize:'11px',color:'rgba(255,255,255,0.45)',fontWeight:600,textTransform:'uppercase' as const,letterSpacing:'0.06em',marginBottom:'6px',display:'block'}}>{label as string}</label>
                <input type="number" value={val as string} onChange={e=>(set as (v:string)=>void)(e.target.value)} placeholder={ph as string} style={{width:'100%',background:'rgba(255,255,255,0.07)',border:'1.5px solid rgba(255,255,255,0.12)',borderRadius:'10px',padding:'11px 14px',color:'white',fontSize:'15px',fontFamily:'inherit',outline:'none',boxSizing:'border-box' as const}}/>
              </div>
            ))}
            {sel('Filing Status',filing,setFiling,[['single','Single'],['married','Married']])}
            {sel('Pay Periods / Year',pp,setPp,[['52','Weekly (52)'],['26','Bi-weekly (26)'],['24','Semi-monthly (24)'],['12','Monthly (12)']])}
            <div>
              <label style={{fontSize:'11px',color:'rgba(255,255,255,0.45)',fontWeight:600,textTransform:'uppercase' as const,letterSpacing:'0.06em',marginBottom:'6px',display:'block'}}>State</label>
              <select value={state} onChange={e=>setState(e.target.value)} style={{width:'100%',background:'rgba(255,255,255,0.07)',border:'1.5px solid rgba(255,255,255,0.12)',borderRadius:'10px',padding:'11px 14px',color:'white',fontSize:'15px',fontFamily:'inherit',outline:'none',boxSizing:'border-box' as const}}>
                {Object.entries(SN).sort((a,b)=>a[1].localeCompare(b[1])).map(([code,name])=><option key={code} value={code}>{name}</option>)}
              </select>
            </div>
          </div>
          {res ? (
            <div>
              <div style={{background:res.shortfall>0?'rgba(248,113,113,0.1)':'rgba(74,222,128,0.1)',border:`1px solid ${res.shortfall>0?'rgba(248,113,113,0.3)':'rgba(74,222,128,0.3)'}`,borderRadius:'12px',padding:'20px',marginBottom:'16px',textAlign:'center'}}>
                {res.shortfall>0 ? (<>
                  <div style={{fontSize:'13px',opacity:0.7,marginBottom:'8px'}}>Annual Tax Shortfall</div>
                  <div style={{fontSize:'44px',fontWeight:900,color:'#f87171'}}>{fmt(res.shortfall)}</div>
                  <div style={{fontSize:'15px',color:'#fbbf24',marginTop:'8px',fontWeight:700}}>Add {fmt(res.extra)}/paycheck on W-4 Step 4c</div>
                </>) : (<>
                  <div style={{fontSize:'13px',opacity:0.7,marginBottom:'8px'}}>No Additional Withholding Needed</div>
                  <div style={{fontSize:'32px',fontWeight:900,color:'#4ade80'}}>You are covered</div>
                </>)}
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:'12px'}}>
                {[{label:'Combined Income',value:fmt(res.combined),color:'white'},{label:'Total Tax Owed',value:fmt(res.total),color:'#f87171'},{label:'Effective Rate',value:res.rate.toFixed(1)+'%',color:'#fbbf24'},{label:'Extra Per Paycheck',value:res.shortfall>0?fmt(res.extra):'$0',color:res.shortfall>0?'#f87171':'#4ade80'}].map(r=>(
                  <div key={r.label} style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px',textAlign:'center'}}>
                    <div style={{fontSize:'11px',opacity:0.5,marginBottom:'4px',textTransform:'uppercase' as const}}>{r.label}</div>
                    <div style={{fontWeight:800,fontSize:'18px',color:r.color}}>{r.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'20px',textAlign:'center',color:'rgba(255,255,255,0.5)',fontSize:'14px'}}>Enter both salaries above to calculate</div>
          )}
          <p style={{textAlign:'center',fontSize:'11px',opacity:0.3,marginTop:'12px'}}>All calculations happen in your browser</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'12px'}}>
          <Link href="/w4-withholding-calculator" style={{display:'block',background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.2)',borderRadius:'12px',padding:'16px',color:'white',textDecoration:'none'}}>
            <div style={{fontSize:'20px',marginBottom:'8px'}}>📋</div>
            <div style={{fontWeight:700,fontSize:'14px',marginBottom:'4px'}}>W-4 Withholding Calculator</div>
            <div style={{fontSize:'12px',opacity:0.55}}>Fill out W-4 correctly</div>
          </Link>
          <Link href="/" style={{display:'block',background:'rgba(74,222,128,0.08)',border:'1px solid rgba(74,222,128,0.2)',borderRadius:'12px',padding:'16px',color:'white',textDecoration:'none'}}>
            <div style={{fontSize:'20px',marginBottom:'8px'}}>💰</div>
            <div style={{fontWeight:700,fontSize:'14px',marginBottom:'4px'}}>Paycheck Calculator</div>
            <div style={{fontSize:'12px',opacity:0.55}}>Take-home pay by state</div>
          </Link>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'24px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)',marginTop:'40px'}}>
        2026 PrivatePaycheck.com
      </footer>
    </main>
  );
}
