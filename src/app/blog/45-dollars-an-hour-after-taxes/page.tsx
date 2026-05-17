import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'
export const metadata: Metadata = {
  title: '$45 an Hour After Taxes 2026 — Take-Home Pay by State | PrivatePaycheck',
  description: 'How much is $45 an hour after taxes in 2026? $45/hr = $93,600/year gross. Take-home: $67,000–$76,000 by state.',
  keywords: '45 dollars an hour after taxes, 45 an hour take home 2026, 93600 salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/45-dollars-an-hour-after-taxes' },
}
export default function Page() {
  const rows: string[][] = [
    ['Texas','None','$75,816','$36.45'],
    ['Florida','None','$75,816','$36.45'],
    ['California','9.30%','$67,644','$32.52'],
    ['New York','6.85%','$70,308','$33.80'],
    ['Illinois','4.95%','$72,396','$34.81'],
    ['Washington','None','$75,816','$36.45'],
    ['New Jersey','6.37%','$70,668','$33.98'],
  ]
  return (
    <>
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $45 an hour after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"$45/hr x 2,080 hours = $93,600/year gross. In Texas, take-home is approximately $75,816/year ($36.45/hr). In California, approximately $67,644/year after all taxes."}},{"@type":"Question","name":"Is $45 an hour a good salary?","acceptedAnswer":{"@type":"Answer","text":"Yes. $45/hr = $93,600/year is well above the US median household income. It provides a comfortable lifestyle in most US cities, including moderately expensive metros."}},{"@type":"Question","name":"How much is $45 an hour monthly after taxes?","acceptedAnswer":{"@type":"Answer","text":"$45/hr = $7,800/month gross. After taxes in Texas: approximately $6,318/month. In California: approximately $5,637/month."}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://privatepaycheck.com/blog"},{"@type":"ListItem","position":3,"name":"$45 an Hour After Taxes 2026 — Take-Home Pay by State","item":"https://privatepaycheck.com/blog/45-dollars-an-hour-after-taxes"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"$45 an Hour After Taxes 2026 — Take-Home Pay by State","description":"How much is $45 an hour after taxes in 2026? $45/hr = $93,600/year gross. Take-home: $67,000–$76,000 by state.","url":"https://privatepaycheck.com/blog/45-dollars-an-hour-after-taxes","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://privatepaycheck.com"}}' }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}><a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › $45 an Hour After Taxes</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$45 an Hour After Taxes 2026</h1>
      <div style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.25)', borderRadius: '10px', padding: '16px 20px', marginBottom: '24px' }}>
        <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.75, color: '#e8edf8' }}>
          <strong style={{ color: '#F5C842' }}>Quick answer:</strong> $45/hour after taxes = <strong style={{color:"#fff"}}>~$70,200–$78,300/year</strong> take-home ($5,850–$6,525/month). Gross: $93,600/year. Federal effective rate ~19–22%, FICA 7.65%.
        </p>
      </div>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}><strong>$45/hr × 2,080 hours = $93,600/year gross.</strong> Take-home ranges from <strong>$67,644 to $75,816</strong> by state.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Take-Home Pay at $45/Hour by State</h2>
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
      <div style={{ background: '#1a2550', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Calculate your exact $45/hr take-home →</a>
      </div>
      
            <blockquote style={{borderLeft:'3px solid rgba(245,200,66,0.4)',paddingLeft:16,margin:'20px 0',fontStyle:'italic',color:'rgba(255,255,255,0.7)',fontSize:14,lineHeight:1.8}}>
        {'The Internal Revenue Service requires self-employed individuals and freelancers to pay estimated taxes quarterly if they expect to owe at least $1,000 in federal tax for the year.'}
        <cite style={{display:'block',marginTop:8,fontSize:12,color:'rgba(255,255,255,0.45)',fontStyle:'normal'}}>
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
