import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'
export const metadata: Metadata = {
  title: '$100,000 a Year After Taxes 2026 — Monthly & Hourly Take-Home | PrivatePaycheck',
  description: 'How much is $100k a year after taxes in 2026? Monthly: $4,748–$5,958. Hourly: $22.84–$28.65. See exact numbers for all 50 states.',
  keywords: '100k a year after taxes, 100000 salary after taxes 2026, 100k take home pay, six figures after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/100k-a-year-after-taxes' },
}
export default function Page() {
  const rows: string[][] = [["Texas","None","$71,496","$34.37"],["Florida","None","$71,496","$34.37"],["California","9.30%","$66,480","$31.96"],["New York (state)","6.85%","$62,604","$30.10"],["NYC","10.75%","$55,224","$26.55"],["Illinois","4.95%","$67,404","$32.41"],["Washington","None","$71,496","$34.37"]]
  return (
    <>
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $100,000 a year after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"$100k gross. In Texas: ~$71,496/year ($5,958/month). In California: ~$66,480/year. In NYC: ~$55,224/year after city, state, and federal taxes."}},{"@type":"Question","name":"How much is $100k per hour after taxes?","acceptedAnswer":{"@type":"Answer","text":"$100,000 ÷ 2,080 = $48.08/hr gross. After taxes in Texas: ~$34.37/hr. In California: ~$31.96/hr."}},{"@type":"Question","name":"Is $100,000 a good salary in 2026?","acceptedAnswer":{"@type":"Answer","text":"Six figures puts you in roughly the top 30% of US earners. After taxes in Texas you keep ~$71,500 — comfortable anywhere. In NYC or SF, take-home is closer to $55k which is tight."}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://privatepaycheck.com/blog"},{"@type":"ListItem","position":3,"name":"$100,000 a Year After Taxes 2026 — Monthly & Hourly Take-Home","item":"https://privatepaycheck.com/blog/100k-a-year-after-taxes"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"$100,000 a Year After Taxes 2026 — Monthly & Hourly Take-Home","description":"How much is $100k a year after taxes in 2026? Monthly: $4,748–$5,958. Hourly: $22.84–$28.65. See exact numbers for all 50 states.","url":"https://privatepaycheck.com/blog/100k-a-year-after-taxes","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://privatepaycheck.com"}}' }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}>
        <a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › $100,000 a Year After Taxes 2026
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$100,000 a Year After Taxes 2026</h1>
      <p style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 20 }}>By <span itemProp="author">Ethan Blake</span> · Updated May 2026 · ~5 min read</p>
      <div className="answer-first" style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.25)', borderRadius: '10px', padding: '16px 20px', marginBottom: '24px' }}>
        <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.75, color: '#e8edf8' }}>
          <strong style={{ color: '#F5C842' }}>Quick answer:</strong> $100,000/year after taxes = <strong style={{color:"#fff"}}>$72,000–$78,000/year</strong> take-home depending on state. Federal effective rate ~18%, FICA 7.65%. California takes an extra ~9.3% state tax. Texas/Florida = no state income tax.
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
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}><strong>$100,000/year gross</strong>. Take-home varies by state — see exact numbers below or use the <a href="/" style={{ color:'#F5C842' }}>free calculator</a>.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Take-Home Pay by State</h2>
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
            <td style={{ padding: '10px 14px' }}>{h}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#1a2550', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Get your exact take-home pay →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $100,000 a year after taxes in 2026?</h3><p style={{ color: '#c8d0e7', lineHeight: 1.7 }}>$100k gross. In Texas: ~$71,496/year ($5,958/month). In California: ~$66,480/year. In NYC: ~$55,224/year after city, state, and federal taxes.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $100k per hour after taxes?</h3><p style={{ color: '#c8d0e7', lineHeight: 1.7 }}>$100,000 ÷ 2,080 = $48.08/hr gross. After taxes in Texas: ~$34.37/hr. In California: ~$31.96/hr.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Is $100,000 a good salary in 2026?</h3><p style={{ color: '#c8d0e7', lineHeight: 1.7 }}>Six figures puts you in roughly the top 30% of US earners. After taxes in Texas you keep ~$71,500 — comfortable anywhere. In NYC or SF, take-home is closer to $55k which is tight.</p>
    
            <blockquote style={{borderLeft:'3px solid rgba(245,200,66,0.4)',paddingLeft:16,margin:'20px 0',fontStyle:'italic',color:'rgba(255,255,255,0.7)',fontSize:14,lineHeight:1.8}}>
        {'The Internal Revenue Service requires self-employed individuals and freelancers to pay estimated taxes quarterly if they expect to owe at least $1,000 in federal tax for the year.'}
        <cite style={{display:'block',marginTop:8,fontSize:12,color:'rgba(255,255,255,0.45)',fontStyle:'normal'}}>
          {'— '}<a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{color:'#F5C842'}}>IRS.gov — Self-Employed Tax Center</a>
        </cite>
      </blockquote>
<div style={{ borderTop: '2px solid #2a3a6a', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 8, marginBottom: 24 }}>
          {([
            ['$20 an Hour After Taxes','20-dollars-an-hour-after-taxes'],
            ['$25 an Hour After Taxes','25-dollars-an-hour-after-taxes'],
            ['$30 an Hour After Taxes','30-dollars-an-hour-after-taxes'],
            ['$35 an Hour After Taxes','35-dollars-an-hour-after-taxes'],
            ['$40 an Hour After Taxes','40-dollars-an-hour-after-taxes'],
            ['$50k a Year After Taxes','50k-a-year-after-taxes'],
            ['$75k a Year After Taxes','75k-a-year-after-taxes'],
            ['$100k a Year After Taxes','100k-a-year-after-taxes'],
            ['Biweekly Paycheck Guide','biweekly-paycheck-after-taxes'],
          ] as [string,string][]).map(([t,s]) => (
            <a key={s} href={"/blog/" + s} style={{ display:'block', padding:'8px 12px', background:'#0f1a3a', border:'1px solid #2a3a6a', borderRadius:6, fontSize:13, fontWeight:600, color:'#F5C842', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
          <a href="/" style={{ color:'#F5C842', fontSize: 14 }}>Free Paycheck Calculator</a>
          <a href="/blog" style={{ color:'#F5C842', fontSize: 14 }}>All Tax Guides</a>
          <a href="/california-paycheck-calculator" style={{ color:'#F5C842', fontSize: 14 }}>California Calculator</a>
          <a href="/texas-paycheck-calculator" style={{ color:'#F5C842', fontSize: 14 }}>Texas Calculator</a>
        </div>
      </div>
    </main>
      <AuthorBox />
    </>
  )
}
