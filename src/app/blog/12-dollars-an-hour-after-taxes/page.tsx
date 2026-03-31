import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '$12 an Hour After Taxes 2026 — Take-Home Pay by State | PrivatePaycheck',
  description: 'How much is $12 an hour after taxes in 2026? $12/hr = $24,960/year gross. Take-home: $21,400–$23,200 by state.',
  keywords: '12 dollars an hour after taxes, 12 an hour take home 2026, 24960 salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/12-dollars-an-hour-after-taxes' },
}
export default function Page() {
  const rows: string[][] = [
    ['Texas','None','$22,848','$10.98'],
    ['Florida','None','$22,848','$10.98'],
    ['California','9.30%','$20,736','$9.97'],
    ['New York','6.85%','$21,348','$10.26'],
    ['Illinois','4.95%','$21,756','$10.46'],
    ['Washington','None','$22,848','$10.98'],
  ]
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $12 an hour after taxes?","acceptedAnswer":{"@type":"Answer","text":"$12/hr x 2,080 hours = $24,960/year gross. In Texas, take-home is approximately $22,848/year ($10.98/hr). In California, approximately $20,736/year after all taxes."}},{"@type":"Question","name":"How much is $12 an hour monthly after taxes?","acceptedAnswer":{"@type":"Answer","text":"$12/hr = $2,080/month gross. After taxes in Texas: approximately $1,904/month. In California: approximately $1,728/month."}},{"@type":"Question","name":"Can you live on $12 an hour in 2026?","acceptedAnswer":{"@type":"Answer","text":"$12/hr = $22,848 take-home in Texas. This is very tight in most cities but possible in low cost-of-living areas with roommates or subsidized housing."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}><a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › $12 an Hour After Taxes</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$12 an Hour After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}><strong>$12/hr x 2,080 hours = $24,960/year gross.</strong> Take-home ranges from <strong>$20,736 to $22,848</strong> depending on your state.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Take-Home Pay at $12/Hour by State</h2>
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
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Calculate exact take-home for $12/hr →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #2a3a6a', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$50k After Taxes','/blog/50k-a-year-after-taxes'],['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['$150k After Taxes','/blog/150k-a-year-after-taxes'],['All Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#0f1a3a', border:'1px solid #2a3a6a', borderRadius:6, fontSize:13, fontWeight:600, color:'#F5C842', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
