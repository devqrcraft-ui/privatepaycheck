import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'
export const metadata: Metadata = {
  title: '$10 an Hour After Taxes 2026 — Take-Home Pay by State | PrivatePaycheck',
  description: 'How much is $10 an hour after taxes in 2026? $10/hr = $20,800/year gross. Take-home: $18,200–$19,700 by state.',
  keywords: '10 dollars an hour after taxes, 10 an hour take home 2026, 20800 salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/10-dollars-an-hour-after-taxes' },
}
export default function Page() {
  const rows: string[][] = [
    ['Texas','None','$19,344','$9.30'],
    ['Florida','None','$19,344','$9.30'],
    ['California','1%','$18,528','$8.91'],
    ['New York','4%','$18,948','$9.11'],
    ['Illinois','4.95%','$18,756','$9.02'],
    ['Washington','None','$19,344','$9.30'],
  ]
  return (
    <>
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $10 an hour after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"$10/hr x 2,080 hours = $20,800/year gross. In Texas, take-home is approximately $19,344/year ($9.30/hr). In California, approximately $18,528/year after all taxes."}},{"@type":"Question","name":"Is $10 an hour above minimum wage?","acceptedAnswer":{"@type":"Answer","text":"The federal minimum wage is $7.25/hr. $10/hr is above federal minimum but below state minimums in California ($16/hr+), New York ($16/hr+), and Washington ($16.28/hr)."}},{"@type":"Question","name":"How much is $10 an hour monthly after taxes?","acceptedAnswer":{"@type":"Answer","text":"$10/hr = $1,733/month gross. After taxes in Texas: approximately $1,612/month. In California: approximately $1,544/month."}}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://privatepaycheck.com/blog"},{"@type":"ListItem","position":3,"name":"$10 an Hour After Taxes 2026 — Take-Home Pay by State","item":"https://privatepaycheck.com/blog/10-dollars-an-hour-after-taxes"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"$10 an Hour After Taxes 2026 — Take-Home Pay by State","description":"How much is $10 an hour after taxes in 2026? $10/hr = $20,800/year gross. Take-home: $18,200–$19,700 by state.","url":"https://privatepaycheck.com/blog/10-dollars-an-hour-after-taxes","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://privatepaycheck.com"}}' }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}><a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › $10 an Hour After Taxes</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$10 an Hour After Taxes 2026</h1>
      <div style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.25)', borderRadius: '10px', padding: '16px 20px', marginBottom: '24px' }}>
        <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.75, color: '#e8edf8' }}>
          <strong style={{ color: '#F5C842' }}>Quick answer:</strong> $10/hour after taxes = <strong style={{color:"#fff"}}>~$15,600–$17,400/year</strong> take-home depending on state. Federal income tax + FICA (7.65%) apply. No state income tax in TX/FL/WA boosts your net. Use the calculator above to see your exact monthly and biweekly paycheck.
        </p>
      </div>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}><strong>$10/hr x 2,080 hours = $20,800/year gross.</strong> Take-home: <strong>$18,528–$19,344</strong> by state.</p>
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
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Calculate exact take-home for $10/hr →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #2a3a6a', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['All Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
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
