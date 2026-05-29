import type { Metadata } from 'next';
import AuthorBox from '@/app/components/AuthorBox'
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Overtime Tax Calculator 2026 — How Much Tax Do You Pay on OT? (OBBBA)',
  description: 'Overtime deduction 2026: OBBBA lets you deduct up to $12,500 (single) or $25,000 (joint) in OT pay. Free calculator — enter hours, get exact tax bill.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/overtime-tax-calculator-2026' },
  openGraph: { title: 'Overtime Tax Calculator 2026', description: 'OBBBA 2026 overtime deduction: up to $12,500 single / $25,000 joint.', type: 'article', url: 'https://www.privatepaycheck.com/blog/overtime-tax-calculator-2026' },
};
const RELATED = [
  { href:'/blog/overtime-pay-rules-by-state', tag:'OVERTIME', title:'Overtime Pay Rules by State 2026' },
  { href:'/blog/no-tax-on-tips-explained', tag:'OBBBA', title:'No Tax on Tips 2026 — Full Guide' },
  { href:'/california-paycheck-calculator', tag:'CALCULATOR', title:'California Paycheck Calculator 2026' },
];
export default function Post() {
  const bg = '#0f0c29'; const accent = '#F5C842';
  const prose = { fontSize:16, color:'rgba(255,255,255,0.85)', lineHeight:1.8, marginBottom:16 };
  const h2 = { fontSize:20, fontWeight:800, color:'#fff', marginBottom:12, marginTop:28 };
  const box = { background:'rgba(245,200,66,0.07)', border:'1px solid rgba(245,200,66,0.25)', borderRadius:8, padding:'16px 20px', marginBottom:16 };
  return (
    <>
    <main style={{ background:bg, minHeight:'100vh', color:'#e8edf8', fontFamily:'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much tax do you pay on overtime in 2026?","acceptedAnswer":{"@type":"Answer","text":"Under OBBBA 2026, you can deduct up to $12,500 (single) or $25,000 (married filing jointly) from federal taxable income. Without the deduction, overtime is taxed at your marginal rate — typically 22-24%."}},{"@type":"Question","name":"What is the overtime deduction under OBBBA 2026?","acceptedAnswer":{"@type":"Answer","text":"The One Big Beautiful Bill Act 2026 created a federal deduction for overtime pay: up to $12,500 for single filers and $25,000 for married filing jointly."}},{"@type":"Question","name":"Does overtime get taxed more than regular pay?","acceptedAnswer":{"@type":"Answer","text":"No. Overtime is taxed at your regular marginal rate. However, earning overtime can push you into a higher bracket. The OBBBA 2026 deduction helps offset this."}},{"@type":"Question","name":"How do I claim the overtime deduction in 2026?","acceptedAnswer":{"@type":"Answer","text":"Report total wages on your W-2 as usual. Then deduct qualifying overtime pay (up to $12,500 single or $25,000 joint) as a separate line item on your federal return."}},{"@type":"Question","name":"Does the overtime deduction apply to FICA?","acceptedAnswer":{"@type":"Answer","text":"No. The OBBBA overtime deduction only reduces federal income tax. FICA taxes (Social Security and Medicare) still apply to all wages including overtime."}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://privatepaycheck.com/blog"},{"@type":"ListItem","position":3,"name":"Overtime Tax Calculator 2026","item":"https://privatepaycheck.com/blog/overtime-tax-calculator-2026"}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting","headline":"Overtime Tax Calculator 2026","url":"https://privatepaycheck.com/blog/overtime-tax-calculator-2026","datePublished":"2026-05-13","dateModified":"2026-05-13","author":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://privatepaycheck.com"}}) }} />
      <div style={{ background:'linear-gradient(135deg,#1a1040,#0f0c29)', borderBottom:'1px solid rgba(255,255,255,0.07)', padding:'32px 20px 28px' }}>
        <div style={{ maxWidth:860, margin:'0 auto' }}>
          <nav style={{ fontSize:12, color:'rgba(255,255,255,0.4)', marginBottom:14 }}>
            <Link href="/" style={{ color:'rgba(255,255,255,0.4)', textDecoration:'none' }}>Home</Link>
            <span style={{ margin:'0 6px' }}>›</span>
            <Link href="/blog" style={{ color:'rgba(255,255,255,0.4)', textDecoration:'none' }}>Blog</Link>
            <span style={{ margin:'0 6px' }}>›</span>
            <span style={{ color:'rgba(255,255,255,0.7)' }}>Overtime Tax 2026</span>
          </nav>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' as const, marginBottom:14 }}>
            <span style={{ background:'rgba(245,200,66,0.15)', color:accent, fontSize:12, fontWeight:700, padding:'3px 10px', borderRadius:20 }}>OBBBA 2026</span>
            <span style={{ background:'rgba(255,255,255,0.07)', color:'rgba(255,255,255,.55)', fontSize:12, padding:'3px 10px', borderRadius:20 }}>Updated May 2026</span>
          </div>
          <h1 style={{ fontSize:'clamp(24px,4vw,36px)', fontWeight:900, color:'#fff', lineHeight:1.25, marginBottom:14 }}>Overtime Tax Calculator 2026: How Much Tax Do You Pay on OT?</h1>
          <p style={{fontSize:13,color:'#9aa3bc',marginBottom:12}}>By Ethan Blake · Updated May 2026 · ~6 min read</p>
          <p style={{ fontSize:16, color:'rgba(255,255,255,0.65)', lineHeight:1.7 }}>OBBBA 2026 created a new federal deduction for overtime pay — up to $12,500 for single filers and $25,000 for married couples. Here is exactly how it works and how to calculate your overtime tax bill.</p>
        </div>
      </div>
      <div style={{ maxWidth:860, margin:'0 auto', padding:'32px 20px' }}>
        <div style={box}>
          <div style={{ fontSize:13, fontWeight:800, color:accent, textTransform:'uppercase' as const, letterSpacing:'1px', marginBottom:8 }}>Quick Answer</div>
          <p style={{ fontSize:16, color:'rgba(255,255,255,0.9)', lineHeight:1.7, margin:0 }}>Under OBBBA 2026, you can deduct up to <strong>$12,500 in overtime pay</strong> (single) or <strong>$25,000</strong> (married filing jointly) from federal taxable income. On $10,000 in OT at the 22% bracket, this saves you $2,200 in federal income tax. FICA taxes still apply.</p>
        </div>
        <h2 style={h2}>What Is the OBBBA Overtime Deduction?</h2>
        <p style={prose}>The One Big Beautiful Bill Act (OBBBA), enacted in 2026, introduced a federal deduction for overtime pay received by W-2 employees. If you worked overtime hours paid at 1.5x or 2x your regular rate, that overtime pay is now deductible from your federal taxable income — up to $12,500 for single filers and $25,000 for married filing jointly.</p>
        <p style={prose}>This means overtime pay is effectively excluded from federal income tax up to the cap. It does not affect FICA taxes (Social Security 6.2%, Medicare 1.45%) which still apply to all wages.</p>
        <h2 style={h2}>How to Calculate Your Overtime Tax in 2026</h2>
        <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, padding:'20px 24px', marginBottom:20 }}>
          <div style={{ fontSize:15, fontWeight:700, color:accent, marginBottom:12 }}>Example: Single filer, $55,000 base salary, $8,000 overtime</div>
          <div style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:2 }}>
            Regular wages: $55,000<br/>
            Overtime pay: $8,000<br/>
            Standard deduction: −$16,100<br/>
            OT deduction (OBBBA): −$8,000 (under $12,500 cap)<br/>
            <strong>Taxable income: $38,900</strong><br/>
            Federal income tax: ~$4,507<br/>
            <strong>Saved vs no OT deduction: ~$1,760</strong>
          </div>
        </div>
        <h2 style={h2}>Who Qualifies for the Overtime Deduction?</h2>
        <p style={prose}>W-2 employees who receive overtime pay (hours worked beyond 40 per week at 1.5x or 2x rate) qualify. The deduction applies to overtime received in 2026 and reported on your 2026 tax return. Self-employed workers and independent contractors do not qualify — this deduction is for W-2 overtime only.</p>
        <h2 style={h2}>Single vs Married: Deduction Caps</h2>
        <div style={{ overflowX:'auto' as const, marginBottom:20 }}>
          <table style={{ width:'100%', borderCollapse:'collapse' as const, fontSize:14 }}>
            <thead>
              <tr style={{ background:'rgba(245,200,66,0.1)' }}>
                <th style={{ padding:'10px 14px', textAlign:'left' as const, color:accent, fontWeight:700 }}>Filing Status</th>
                <th style={{ padding:'10px 14px', textAlign:'left' as const, color:accent, fontWeight:700 }}>OT Deduction Cap</th>
                <th style={{ padding:'10px 14px', textAlign:'left' as const, color:accent, fontWeight:700 }}>Max Tax Saved (22%)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Single', '$12,500', '$2,750'],
                ['Married Filing Jointly', '$25,000', '$5,500'],
                ['Head of Household', '$12,500', '$2,750'],
              ].map(([s,c,t],i) => (
                <tr key={i} style={{ borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding:'10px 14px', color:'rgba(255,255,255,0.85)' }}>{s}</td>
                  <td style={{ padding:'10px 14px', color:'rgba(255,255,255,0.85)' }}>{c}</td>
                  <td style={{ padding:'10px 14px', color:'rgba(255,255,255,0.85)' }}>{t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 style={h2}>FAQ</h2>
              <blockquote style={{borderLeft:'3px solid rgba(245,200,66,0.4)',paddingLeft:16,margin:'20px 0',fontStyle:'italic',color:'rgba(255,255,255,0.7)',fontSize:14,lineHeight:1.8}}>
        {'The Internal Revenue Service requires self-employed individuals and freelancers to pay estimated taxes quarterly if they expect to owe at least $1,000 in federal tax for the year.'}
        <cite style={{display:'block',marginTop:8,fontSize:12,color:'rgba(255,255,255,0.65)',fontStyle:'normal'}}>
          {'— '}<a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{color:'#F5C842'}}>IRS.gov — Self-Employed Tax Center</a>
        </cite>
      </blockquote>
      <div style={{ borderTop:'1px solid rgba(255,255,255,0.08)' }}>
          {[
            { q:'How much tax do you pay on overtime in 2026?', a:'With the OBBBA deduction, you save up to $2,750 (single) or $5,500 (joint) in federal income tax on overtime pay. Without the deduction, OT is taxed at your marginal rate — typically 22-24% for most workers.' },
            { q:'Does overtime get taxed more than regular pay?', a:'No. Overtime is taxed at your regular marginal rate, not a higher rate. The OBBBA deduction further reduces the tax impact of overtime for 2026.' },
            { q:'How do I claim the overtime deduction?', a:'Report total W-2 wages as usual. Then deduct qualifying overtime (up to $12,500 single or $25,000 joint) as a separate line item on your federal return. Keep pay stubs as documentation.' },
            { q:'Does the OT deduction apply to FICA taxes?', a:'No. FICA (Social Security 6.2% and Medicare 1.45%) still applies to all wages including overtime. Only federal income tax is reduced.' },
          ].map(({ q,a },i) => (
            <div key={i} style={{ borderBottom:'1px solid rgba(255,255,255,0.08)', padding:'16px 0' }}>
              <div style={{ fontSize:16, fontWeight:700, color:accent, marginBottom:8 }}>{q}</div>
              <div style={{ fontSize:15, color:'rgba(255,255,255,0.8)', lineHeight:1.7 }}>{a}</div>
            </div>
          ))}
        </div>
        <div style={{ margin:'32px 0 24px', padding:'20px 24px', background:'rgba(245,200,66,0.07)', border:'1px solid rgba(245,200,66,0.25)', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap' as const, gap:12 }}>
          <div style={{ fontSize:15, fontWeight:700, color:'#e8edf8' }}>Calculate your exact take-home pay with overtime — free</div>
          <Link href="/new-york-paycheck-calculator" style={{ background:accent, color:'#0f0c29', fontWeight:800, fontSize:14, padding:'10px 22px', borderRadius:7, textDecoration:'none', whiteSpace:'nowrap' as const }}>Paycheck Calculator →</Link>
        </div>
        <div style={{ margin:'0 0 32px', padding:'24px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10 }}>
          <div style={{ fontSize:13, fontWeight:800, color:accent, textTransform:'uppercase' as const, letterSpacing:'1px', marginBottom:16 }}>Related Articles</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:12 }}>
            {RELATED.map(({ href,tag,title },i) => (
              <Link key={i} href={href} style={{ textDecoration:'none' }}>
                <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(245,200,66,0.15)', borderRadius:8, padding:'16px 18px' }}>
                  <div style={{ fontSize:11, fontWeight:700, color:accent, textTransform:'uppercase' as const, marginBottom:6 }}>{tag}</div>
                  <div style={{ fontSize:14, fontWeight:700, color:'#e8edf8', lineHeight:1.4 }}>{title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <footer style={{ textAlign:'center', padding:'24px', fontSize:12, opacity:0.8, borderTop:'1px solid rgba(255,255,255,0.06)', marginTop:40 }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color:'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color:'inherit' }}>Terms</Link>
      </footer>
    </main>
    <AuthorBox />
    </>
  );
}
