import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'
export const metadata: Metadata = {
  title: '$15 an Hour After Taxes 2026 — Take-Home Pay by State',
  description: 'How much is $15 an hour after taxes in 2026? $15/hr = $31,200/year gross. Take-home: $25,500–$27,600 depending on state. See exact numbers.',
  keywords: '15 dollars an hour after taxes, 15 an hour take home 2026, minimum wage after taxes 2026',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/15-dollars-an-hour-after-taxes' },
}
export default function Page() {
  const rows: string[][] = [
    ['Texas','None','$27,612','$13.27'],
    ['Florida','None','$27,612','$13.27'],
    ['California','9.30%','$24,948','$11.99'],
    ['New York','6.85%','$25,740','$12.38'],
    ['Illinois','4.95%','$26,244','$12.62'],
    ['Washington','None','$27,612','$13.27'],
    ['Nevada','None','$27,612','$13.27'],
  ]
  return (
    <>
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $15 an hour after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"$15/hr x 2,080 hours = $31,200/year gross. In Texas (no state tax), take-home is approximately $27,612/year or $13.27/hr effective. In California, take-home drops to about $24,948/year."}},{"@type":"Question","name":"Is $15 an hour enough to live on in 2026?","acceptedAnswer":{"@type":"Answer","text":"$15/hr = $31,200/year gross, $27,600 take-home in no-tax states. This is above the federal poverty line for a single adult but tight in high cost-of-living cities. It works in lower-cost states like Texas, Tennessee, or Ohio."}},{"@type":"Question","name":"What is $15 an hour monthly after taxes?","acceptedAnswer":{"@type":"Answer","text":"$15/hr monthly gross = $2,600. After taxes in Texas: approximately $2,301/month. In California: approximately $2,079/month."}},{"@type":"Question","name":"What states have $15 minimum wage in 2026?","acceptedAnswer":{"@type":"Answer","text":"California, New York, Washington, Connecticut, Massachusetts, New Jersey, and several other states have minimum wages at or above $15/hr in 2026."}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://privatepaycheck.com/blog"},{"@type":"ListItem","position":3,"name":"$15 an Hour After Taxes 2026 — Take-Home Pay by State","item":"https://privatepaycheck.com/blog/15-dollars-an-hour-after-taxes"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"$15 an Hour After Taxes 2026 — Take-Home Pay by State","description":"How much is $15 an hour after taxes in 2026? $15/hr = $31,200/year gross. Take-home: $25,500–$27,600 depending on state. See exact numbers.","url":"https://privatepaycheck.com/blog/15-dollars-an-hour-after-taxes","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://privatepaycheck.com"}}' }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}><a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › $15 an Hour After Taxes</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$15 an Hour After Taxes 2026</h1>
      <p style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 20 }}>By <span itemProp="author">Ethan Blake</span> · Updated May 2026 · ~5 min read</p>
      <div className="answer-first" style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.25)', borderRadius: '10px', padding: '16px 20px', marginBottom: '24px' }}>
        <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.75, color: '#e8edf8' }}>
          <strong style={{ color: '#F5C842' }}>Quick answer:</strong> $15/hour after taxes = <strong style={{color:"#fff"}}>~$23,400–$26,100/year</strong> take-home ($1,950–$2,175/month). Gross annual: $31,200. After FICA (7.65%) and federal income tax, you keep 75–84% depending on your state.
        </p>
      </div>
      <div style={{ background: '#0f1a3a', border: '1px solid #2a3a6a', borderRadius: 10, padding: '18px 22px', marginBottom: 32 }}>
        <p style={{ fontSize: 14, fontWeight: 800, color: '#F5C842', marginBottom: 12, marginTop: 0 }}>Key Takeaways</p>
        <ul style={{ margin: 0, paddingLeft: 20, color: '#c8d0e7', fontSize: 14, lineHeight: 1.85 }}>
          <li>Federal effective tax rate depends on your total gross income and filing status</li>
          <li>FICA (Social Security 6.2% + Medicare 1.45%) = <strong style={{ color: '#fff' }}>7.65%</strong> for all W-2 employees</li>
          <li>No state income tax in TX, FL, WA, NV, SD, WY, AK — keeps more in your pocket</li>
          <li>Standard deduction 2026: <strong style={{ color: '#fff' }}>$16,100</strong> single / $32,200 MFJ</li>
          <li>401(k) limit 2026: <strong style={{ color: '#fff' }}>$23,500</strong> — reduces federal taxable income dollar-for-dollar</li>
          <li>Use the free calculator above for your exact state + filing status breakdown</li>
        </ul>
      </div>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}><strong>$15/hr × 2,080 hours = $31,200/year gross.</strong> After federal taxes and FICA, take-home ranges from <strong>$24,948 to $27,612</strong> depending on your state.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Take-Home Pay at $15/Hour by State</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#1a2550' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>State</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>State Tax</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Annual Take-Home</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Effective Hourly</th>
        </tr></thead>
        <tbody>{rows.map(([s,t,a,h]) => (
          <tr key={s} style={{ borderBottom: '1px solid #1e2d5a' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{s}</td>
            <td style={{ padding: '10px 14px', color: '#b0b8d1' }}>{t}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color:'#F5C842' }}>{a}</td>
            <td style={{ padding: '10px 14px' }}>{h}/hr</td>
          </tr>
        ))}</tbody>
      </table>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>$15/Hour Pay Breakdown (Single Filer, Texas)</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#1a2550' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Item</th>
          <th style={{ padding: '10px 14px', textAlign: 'right' }}>Amount</th>
        </tr></thead>
        <tbody>{[['Gross Annual','$31,200'],['Standard Deduction 2026','−$15,000'],['Taxable Income','$16,200'],['Federal Income Tax (10%)','−$1,620'],['Social Security (6.2%)','−$1,934'],['Medicare (1.45%)','−$452'],['State Tax','$0'],['Net Take-Home','$27,194']].map(([l,v]) => (
          <tr key={l} style={{ borderBottom: '1px solid #1e2d5a' }}>
            <td style={{ padding: '10px 14px' }}>{l}</td>
            <td style={{ padding: '10px 14px', textAlign: 'right', fontWeight: l === 'Net Take-Home' ? 700 : 400, color: l === 'Net Take-Home' ? '#F5C842' : 'inherit' }}>{v}</td>
          </tr>
        ))}</tbody>
      </table>
      
            <blockquote style={{borderLeft:'3px solid rgba(245,200,66,0.4)',paddingLeft:16,margin:'20px 0',fontStyle:'italic',color:'rgba(255,255,255,0.7)',fontSize:14,lineHeight:1.8}}>
        {'The Internal Revenue Service requires self-employed individuals and freelancers to pay estimated taxes quarterly if they expect to owe at least $1,000 in federal tax for the year.'}
        <cite style={{display:'block',marginTop:8,fontSize:12,color:'rgba(255,255,255,0.65)',fontStyle:'normal'}}>
          {'— '}<a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{color:'#F5C842'}}>IRS.gov — Self-Employed Tax Center</a>
        </cite>
      </blockquote>
<div style={{ borderTop: '2px solid #2a3a6a', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$50k After Taxes','/blog/50k-a-year-after-taxes'],['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['Biweekly Pay Guide','/blog/biweekly-paycheck-after-taxes'],['All Tax Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#0f1a3a', border:'1px solid #2a3a6a', borderRadius:6, fontSize:13, fontWeight:600, color:'#F5C842', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    
      <div style={{ borderTop:'1px solid rgba(255,255,255,0.08)', marginTop:32, paddingTop:24 }}>
        <p style={{ fontSize:14, fontWeight:700, color:'#F5C842', marginBottom:12 }}>Calculate your exact take-home pay by state:</p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
          <a href="/california-paycheck-calculator" style={{ color:'#F5C842', fontSize:14, textDecoration:'none', background:'rgba(245,200,66,0.08)', padding:'6px 12px', borderRadius:6, border:'1px solid rgba(245,200,66,0.2)' }}>California Calculator</a>
          <a href="/texas-paycheck-calculator" style={{ color:'#F5C842', fontSize:14, textDecoration:'none', background:'rgba(245,200,66,0.08)', padding:'6px 12px', borderRadius:6, border:'1px solid rgba(245,200,66,0.2)' }}>Texas Calculator</a>
          <a href="/florida-paycheck-calculator" style={{ color:'#F5C842', fontSize:14, textDecoration:'none', background:'rgba(245,200,66,0.08)', padding:'6px 12px', borderRadius:6, border:'1px solid rgba(245,200,66,0.2)' }}>Florida Calculator</a>
          <a href="/new-york-paycheck-calculator" style={{ color:'#F5C842', fontSize:14, textDecoration:'none', background:'rgba(245,200,66,0.08)', padding:'6px 12px', borderRadius:6, border:'1px solid rgba(245,200,66,0.2)' }}>New York Calculator</a>
          <a href="/washington-paycheck-calculator" style={{ color:'#F5C842', fontSize:14, textDecoration:'none', background:'rgba(245,200,66,0.08)', padding:'6px 12px', borderRadius:6, border:'1px solid rgba(245,200,66,0.2)' }}>Washington Calculator</a>
          <a href="/washington-dc-paycheck-calculator" style={{ color:'#F5C842', fontSize:14, textDecoration:'none', background:'rgba(245,200,66,0.08)', padding:'6px 12px', borderRadius:6, border:'1px solid rgba(245,200,66,0.2)' }}>Washington DC Calculator</a>
        </div>
      </div>
    </main>
      <AuthorBox />
    </>
  )
}
