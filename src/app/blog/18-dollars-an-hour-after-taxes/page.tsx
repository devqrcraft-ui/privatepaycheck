import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '$18 an Hour After Taxes 2026 — Take-Home Pay by State | PrivatePaycheck',
  description: 'How much is $18 an hour after taxes in 2026? $18/hr = $37,440/year gross. After taxes: $30,600–$33,200 by state. See full breakdown.',
  keywords: '18 dollars an hour after taxes, 18 an hour take home 2026, 37440 salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/18-dollars-an-hour-after-taxes' },
}
export default function Page() {
  const rows: string[][] = [
    ['Texas','None','$32,148','$15.46'],
    ['Florida','None','$32,148','$15.46'],
    ['California','9.30%','$28,872','$13.88'],
    ['New York','6.85%','$29,868','$14.36'],
    ['Illinois','4.95%','$30,492','$14.66'],
    ['Washington','None','$32,148','$15.46'],
  ]
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $18 an hour after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"$18/hr x 2,080 hours = $37,440/year gross. In Texas, take-home is approximately $32,148/year ($15.46/hr). In California, approximately $28,872/year after state and federal taxes."}},{"@type":"Question","name":"How much is $18 an hour monthly after taxes?","acceptedAnswer":{"@type":"Answer","text":"$18/hr = $3,120/month gross. After taxes in Texas: approximately $2,679/month. In California: approximately $2,406/month."}},{"@type":"Question","name":"Is $18 an hour a good wage in 2026?","acceptedAnswer":{"@type":"Answer","text":"$18/hr = $37,440/year is above federal minimum wage and covers basic expenses in most mid-cost states. It is tight in expensive cities like NYC or San Francisco."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}><a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › $18 an Hour After Taxes</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$18 an Hour After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}><strong>$18/hr × 2,080 hours = $37,440/year gross.</strong> Take-home ranges from <strong>$28,872 to $32,148</strong> depending on state.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Take-Home Pay at $18/Hour by State</h2>
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
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Calculate your exact $18/hr take-home →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #2a3a6a', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$50k After Taxes','/blog/50k-a-year-after-taxes'],['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['Biweekly Pay Guide','/blog/biweekly-paycheck-after-taxes'],['All Tax Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#0f1a3a', border:'1px solid #2a3a6a', borderRadius:6, fontSize:13, fontWeight:600, color:'#F5C842', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
