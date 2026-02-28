import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: '2026 Federal Income Tax Brackets — Complete Guide',
  description: '2026 federal tax brackets for single, married, and head of household filers. Standard deduction $15,000 single. Updated FICA rates and limits.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/2026-federal-tax-brackets' },
};
const SINGLE=[[0,11600,'10%'],[11600,47150,'12%'],[47150,100525,'22%'],[100525,191950,'24%'],[191950,243725,'32%'],[243725,609350,'35%'],[609350,Infinity,'37%']];
const MARRIED=[[0,23200,'10%'],[23200,94300,'12%'],[94300,201050,'22%'],[201050,383900,'24%'],[383900,487450,'32%'],[487450,731200,'35%'],[731200,Infinity,'37%']];
export default function Post(){return(<main style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',color:'white',fontFamily:'system-ui,sans-serif'}}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'BlogPosting',headline:'2026 Federal Income Tax Brackets — Complete Guide',url:'https://www.privatepaycheck.com/blog/2026-federal-tax-brackets',datePublished:'2026-01-10',author:{'@type':'Organization',name:'PrivatePaycheck'}})}}/>
<nav style={{padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'rgba(0,0,0,0.3)',position:'sticky',top:0,zIndex:100}}><Link href="/" style={{fontWeight:800,fontSize:'18px',color:'white',textDecoration:'none'}}><span style={{color:'#4ade80'}}>$</span> PrivatePaycheck</Link><Link href="/blog" style={{color:'#818cf8',fontSize:'13px',textDecoration:'none'}}>← Blog</Link></nav>
<div style={{maxWidth:'740px',margin:'0 auto',padding:'40px 16px'}}>
<div style={{fontSize:'13px',opacity:0.5,marginBottom:'24px'}}><Link href="/" style={{color:'inherit',textDecoration:'none'}}>Home</Link> › <Link href="/blog" style={{color:'inherit',textDecoration:'none'}}>Blog</Link> › 2026 Tax Brackets</div>
<div style={{display:'inline-block',background:'rgba(74,222,128,0.1)',color:'#4ade80',padding:'4px 12px',borderRadius:'20px',fontSize:'11px',fontWeight:700,marginBottom:'16px'}}>TAX BASICS</div>
<h1 style={{fontSize:'clamp(22px,4vw,38px)',fontWeight:900,margin:'0 0 16px',lineHeight:1.25}}>2026 Federal Income Tax Brackets — Complete Guide</h1>
<p style={{opacity:0.5,fontSize:'13px',marginBottom:'32px'}}>January 10, 2026 · 5 min read</p>
<div style={{fontSize:'15px',lineHeight:1.9,opacity:0.85}}>
<p>The IRS adjusts tax brackets annually for inflation. Here are the official 2026 federal income tax brackets for all filing statuses, plus the standard deduction, FICA rates, and key limits.</p>
<h2 style={{fontSize:'22px',fontWeight:800,margin:'32px 0 12px',color:'white'}}>2026 Standard Deduction</h2>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:'12px',marginBottom:'28px'}}>
{[{l:'Single',v:'$15,000'},{l:'Married Filing Jointly',v:'$30,000'},{l:'Head of Household',v:'$22,500'},{l:'Married Filing Separately',v:'$15,000'}].map(b=>(<div key={b.l} style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px',padding:'14px',textAlign:'center'}}><div style={{fontSize:'11px',opacity:0.5,marginBottom:'6px'}}>{b.l}</div><div style={{fontSize:'20px',fontWeight:900,color:'#4ade80'}}>{b.v}</div></div>))}
</div>
<h2 style={{fontSize:'22px',fontWeight:800,margin:'0 0 12px',color:'white'}}>2026 Tax Brackets — Single Filers</h2>
</div>
<div style={{overflowX:'auto',margin:'12px 0 28px'}}>
<table style={{width:'100%',borderCollapse:'collapse',fontSize:'14px'}}>
<thead><tr style={{borderBottom:'1px solid rgba(255,255,255,0.1)'}}>{['Tax Rate','Taxable Income Range'].map(h=>(<th key={h} style={{textAlign:'left',padding:'10px 12px',opacity:0.6,fontSize:'11px',textTransform:'uppercase'}}>{h}</th>))}</tr></thead>
<tbody>{SINGLE.map(([lo,hi,rate])=>(<tr key={String(rate)+lo} style={{borderBottom:'1px solid rgba(255,255,255,0.05)'}}><td style={{padding:'10px 12px',fontWeight:800,color:'#818cf8'}}>{rate}</td><td style={{padding:'10px 12px'}}>${Number(lo).toLocaleString()} – {hi===Infinity?'$609,350+':('$'+Number(hi).toLocaleString())}</td></tr>))}</tbody>
</table>
</div>
<div style={{fontSize:'15px',lineHeight:1.9,opacity:0.85}}>
<h2 style={{fontSize:'22px',fontWeight:800,margin:'0 0 12px',color:'white'}}>2026 Tax Brackets — Married Filing Jointly</h2>
</div>
<div style={{overflowX:'auto',margin:'12px 0 28px'}}>
<table style={{width:'100%',borderCollapse:'collapse',fontSize:'14px'}}>
<thead><tr style={{borderBottom:'1px solid rgba(255,255,255,0.1)'}}>{['Tax Rate','Taxable Income Range'].map(h=>(<th key={h} style={{textAlign:'left',padding:'10px 12px',opacity:0.6,fontSize:'11px',textTransform:'uppercase'}}>{h}</th>))}</tr></thead>
<tbody>{MARRIED.map(([lo,hi,rate])=>(<tr key={String(rate)+lo} style={{borderBottom:'1px solid rgba(255,255,255,0.05)'}}><td style={{padding:'10px 12px',fontWeight:800,color:'#fbbf24'}}>{rate}</td><td style={{padding:'10px 12px'}}>${Number(lo).toLocaleString()} – {hi===Infinity?'$731,200+':('$'+Number(hi).toLocaleString())}</td></tr>))}</tbody>
</table>
</div>
<div style={{fontSize:'15px',lineHeight:1.9,opacity:0.85}}>
<h2 style={{fontSize:'22px',fontWeight:800,margin:'0 0 12px',color:'white'}}>2026 FICA Rates</h2>
<ul style={{paddingLeft:'20px'}}><li style={{marginBottom:'8px'}}><strong>Social Security: 6.2%</strong> on wages up to $176,100 (wage base)</li><li style={{marginBottom:'8px'}}><strong>Medicare: 1.45%</strong> on all wages, no cap</li><li style={{marginBottom:'8px'}}><strong>Additional Medicare: 0.9%</strong> on wages over $200k (single) / $250k (married)</li></ul>
<h2 style={{fontSize:'22px',fontWeight:800,margin:'32px 0 12px',color:'white'}}>Key 2026 Limits</h2>
<ul style={{paddingLeft:'20px'}}><li style={{marginBottom:'8px'}}>401(k) employee limit: <strong>$23,500</strong> ($31,000 if age 50+)</li><li style={{marginBottom:'8px'}}>HSA individual: <strong>$4,300</strong> / family: <strong>$8,550</strong></li><li style={{marginBottom:'8px'}}>IRA limit: <strong>$7,000</strong> ($8,000 if 50+)</li><li style={{marginBottom:'8px'}}>FSA health: <strong>$3,300</strong></li></ul>
<h2 style={{fontSize:'22px',fontWeight:800,margin:'32px 0 12px',color:'white'}}>How Marginal Tax Rates Work</h2>
<p>A common misconception: earning more money does NOT mean all your income gets taxed at a higher rate. Only the income in each bracket gets taxed at that bracket's rate. Example: a single filer earning $60,000 pays 10% on the first $11,600, 12% on the next $35,550, and 22% on only the last $12,850. Their average (effective) rate is about 13.7% — not 22%.</p>
</div>
<div style={{marginTop:'32px',background:'rgba(74,222,128,0.08)',border:'1px solid rgba(74,222,128,0.2)',borderRadius:'14px',padding:'24px',textAlign:'center'}}>
<h3 style={{fontWeight:800,marginBottom:'8px'}}>Calculate Your 2026 Tax</h3>
<p style={{opacity:0.65,fontSize:'14px',marginBottom:'16px'}}>Enter your salary to see exact federal, state, and FICA breakdown.</p>
<Link href="/" style={{display:'inline-block',background:'linear-gradient(135deg,#4ade80,#22c55e)',color:'#052e16',fontWeight:800,padding:'11px 24px',borderRadius:'9px',textDecoration:'none',fontSize:'14px'}}>Open Paycheck Calculator →</Link>
</div>
</div>
<footer style={{textAlign:'center',padding:'24px',fontSize:'12px',opacity:0.4,borderTop:'1px solid rgba(255,255,255,0.06)',marginTop:'40px'}}>© 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{color:'inherit'}}>Privacy Policy</Link> · <Link href="/terms" style={{color:'inherit'}}>Terms</Link></footer>
</main>);}
