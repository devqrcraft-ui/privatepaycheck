import type { Metadata } from 'next';
import AuthorBox from '@/app/components/AuthorBox'
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Overtime Tax Calculator 2026 — How Much Tax Do You Pay on OT? (OBBBA)',
  description: 'Learn how the 2025–2028 federal deduction for qualified overtime compensation works, including annual limits, income phase-outs, and payroll-tax exclusions.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/overtime-tax-calculator-2026' },
  openGraph: { title: 'Overtime Tax Calculator 2026', description: 'An overview of qualified overtime compensation, deduction limits, and eligibility.', type: 'article', url: 'https://www.privatepaycheck.com/blog/overtime-tax-calculator-2026' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does the overtime deduction work in 2026?","acceptedAnswer":{"@type":"Answer","text":"Eligible taxpayers may deduct qualified overtime compensation from federal taxable income, up to $12,500 or $25,000 on a joint return. Annual limits and income phase-outs apply; the deduction does not make all overtime wages tax-free."}},{"@type":"Question","name":"What counts as qualified overtime compensation?","acceptedAnswer":{"@type":"Answer","text":"The deduction is tied to qualifying overtime compensation under applicable FLSA rules, generally the premium portion above the regular rate, not automatically all wages paid for overtime hours. Consult current IRS guidance."}},{"@type":"Question","name":"Does overtime get taxed more than regular pay?","acceptedAnswer":{"@type":"Answer","text":"Overtime is generally subject to the same marginal tax rates as other wages. Additional income can cross a tax bracket threshold; only income within the higher bracket is taxed at that rate."}},{"@type":"Question","name":"How do I claim the overtime deduction?","acceptedAnswer":{"@type":"Answer","text":"Follow current IRS instructions for the tax year and use employer reporting and records to determine qualified overtime compensation. The deduction is subject to annual caps and income phase-outs."}},{"@type":"Question","name":"Does the overtime deduction apply to FICA?","acceptedAnswer":{"@type":"Answer","text":"No. The federal income-tax deduction does not remove Social Security or Medicare taxes on wages. State tax treatment may also differ."}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.privatepaycheck.com/blog"},{"@type":"ListItem","position":3,"name":"Overtime Tax Calculator 2026","item":"https://www.privatepaycheck.com/blog/overtime-tax-calculator-2026"}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting","headline":"Overtime Tax Calculator 2026","url":"https://www.privatepaycheck.com/blog/overtime-tax-calculator-2026","datePublished":"2026-05-13","dateModified":"2026-11-06","author":{"@type":"Organization","name":"the PrivatePaycheck Team","url":"https://www.privatepaycheck.com"},"reviewedBy":{"@type":"Organization","name":"the PrivatePaycheck Team","url":"https://www.privatepaycheck.com"},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://www.privatepaycheck.com"}}) }} />
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
            <span style={{ background:'rgba(255,255,255,0.07)', color:'rgba(255,255,255,.72)', fontSize:12, padding:'3px 10px', borderRadius:20 }}>Updated November 2026</span>
          </div>
          <h1 style={{ fontSize:'clamp(24px,4vw,36px)', fontWeight:900, color:'#fff', lineHeight:1.25, marginBottom:14 }}>Overtime Tax Calculator 2026: How Much Tax Do You Pay on OT?</h1>
          <p style={{fontSize:13,color:'#b7c1d8',marginBottom:12}}>By the PrivatePaycheck Team · Updated November 2026 · ~6 min read</p>
          <p style={{ fontSize:16, color:'rgba(255,255,255,0.78)', lineHeight:1.7 }}>The 2025–2028 federal deduction is limited to qualified overtime compensation and is subject to caps and income phase-outs. This guide explains what the deduction does—and what it does not do.</p>
        </div>
      </div>
      <div style={{ maxWidth:860, margin:'0 auto', padding:'32px 20px' }}>
        <div style={box}>
          <div style={{ fontSize:13, fontWeight:800, color:accent, textTransform:'uppercase' as const, letterSpacing:'1px', marginBottom:8 }}>Quick Answer</div>
          <p style={{ fontSize:16, color:'rgba(255,255,255,0.9)', lineHeight:1.7, margin:0 }}>Eligible taxpayers may deduct qualified overtime compensation up to <strong>$12,500</strong> or <strong>$25,000 on a joint return</strong>, subject to income phase-outs. The deduction is not an exemption for all overtime wages; the actual tax effect depends on eligibility and tax circumstances. FICA taxes still apply.</p>
        </div>
        <div style={{background:'rgba(245,200,66,0.08)',border:'1px solid rgba(245,200,66,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:28}}>
          <div style={{fontWeight:800,color:'#F5C842',marginBottom:10,fontSize:13}}>KEY TAKEAWAYS</div>
          <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
            <li>The deduction is capped at <strong>$12,500</strong> or <strong>$25,000 for a joint return</strong>; income phase-outs apply</li>
            <li>Qualified overtime compensation is generally the qualifying premium portion, not automatically all overtime wages</li>
            <li>FICA taxes remain due on wages; state tax treatment can differ</li>
            <li>A tax form or worker label alone does not determine eligibility; the qualifying compensation and applicable rules matter</li>
            <li>The provision generally applies to tax years <strong>2025–2028</strong>; follow current IRS filing instructions</li>
          </ul>
        </div>
        <h2 style={h2}>What Is the OBBBA Overtime Deduction?</h2>
        <p style={prose}>The One Big Beautiful Bill Act (OBBBA), enacted in 2025, introduced a temporary federal income-tax deduction for qualified overtime compensation. Eligibility is tied to applicable overtime rules and the qualifying premium, not simply every dollar paid for hours above 40. The deduction is subject to annual caps and income phase-outs, and generally applies to tax years 2025 through 2028.</p>
        <p style={prose}>This is a deduction from federal taxable income, not an exemption from all tax on overtime. Social Security and Medicare taxes still apply to wages, and state tax treatment may differ.</p>
        <h2 style={h2}>How to Calculate Your Overtime Tax in 2026</h2>
        <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, padding:'20px 24px', marginBottom:20 }}>
          <div style={{ fontSize:15, fontWeight:700, color:accent, marginBottom:12 }}>Illustrative calculation</div>
          <p style={{ fontSize:15, color:'rgba(255,255,255,0.85)', lineHeight:1.75, margin:0 }}>
            Start with the amount of overtime compensation that qualifies under current rules—not total overtime wages. Apply the annual cap and any income phase-out, then calculate the federal income-tax effect using the taxpayer’s full return. Hours, hourly rate, and an assumed tax bracket alone are not enough to determine an exact deduction or tax saving.
          </p>
        </div>
        <h2 style={h2}>Who Qualifies for the Overtime Deduction?</h2>
        <p style={prose}>The deduction is limited to qualified overtime compensation under the applicable rules. Work beyond 40 hours does not by itself establish the amount eligible for the deduction; state law, exemptions, how compensation was calculated, income limits, and current IRS guidance matter. A 1099 or W-2 label alone does not determine eligibility.</p>
        <h2 style={h2}>Single vs Married: Deduction Caps</h2>
        <div style={{ overflowX:'auto' as const, marginBottom:20 }}>
          <table style={{ width:'100%', borderCollapse:'collapse' as const, fontSize:14 }}>
            <thead>
              <tr style={{ background:'rgba(245,200,66,0.1)' }}>
                <th style={{ padding:'10px 14px', textAlign:'left' as const, color:accent, fontWeight:700 }}>Filing Status</th>
                <th style={{ padding:'10px 14px', textAlign:'left' as const, color:accent, fontWeight:700 }}>OT Deduction Cap</th>
                <th style={{ padding:'10px 14px', textAlign:'left' as const, color:accent, fontWeight:700 }}>Important limit</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Individual return', '$12,500', 'Income phase-out applies'],
                ['Married filing jointly', '$25,000', 'Income phase-out applies'],
                ['Other filing status', 'Generally $12,500', 'Verify current IRS rules'],
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
            { q:'How much tax do you pay on overtime in 2026?', a:'Overtime wages are generally subject to ordinary income-tax rates. An eligible taxpayer may also claim a deduction for qualified overtime compensation, subject to annual caps and income phase-outs. The tax effect depends on the full tax return.' },
            { q:'Does overtime get taxed more than regular pay?', a:'There is no separate federal overtime tax rate. Additional wages can put part of income into a higher marginal bracket; only income in that bracket is taxed at the higher rate.' },
            { q:'How do I claim the overtime deduction?', a:'Follow current IRS instructions for the tax year and use employer reporting and records to determine qualified overtime compensation. Do not assume that all overtime wages qualify.' },
            { q:'Does the OT deduction apply to FICA taxes?', a:'No. The deduction reduces federal taxable income; Social Security and Medicare taxes still apply to wages. State tax treatment may differ.' },
          ].map(({ q,a },i) => (
            <div key={i} style={{ borderBottom:'1px solid rgba(255,255,255,0.08)', padding:'16px 0' }}>
              <div style={{ fontSize:16, fontWeight:700, color:accent, marginBottom:8 }}>{q}</div>
              <div style={{ fontSize:15, color:'rgba(255,255,255,0.8)', lineHeight:1.7 }}>{a}</div>
            </div>
          ))}
        </div>
        <div style={{ margin:'32px 0 24px', padding:'20px 24px', background:'rgba(245,200,66,0.07)', border:'1px solid rgba(245,200,66,0.25)', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap' as const, gap:12 }}>
          <div style={{ fontSize:15, fontWeight:700, color:'#e8edf8' }}>Explore an estimated paycheck with overtime</div>
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
