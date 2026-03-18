import type { Metadata } from 'next'
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
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $45 an hour after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"$45/hr x 2,080 hours = $93,600/year gross. In Texas, take-home is approximately $75,816/year ($36.45/hr). In California, approximately $67,644/year after all taxes."}},{"@type":"Question","name":"Is $45 an hour a good salary?","acceptedAnswer":{"@type":"Answer","text":"Yes. $45/hr = $93,600/year is well above the US median household income. It provides a comfortable lifestyle in most US cities, including moderately expensive metros."}},{"@type":"Question","name":"How much is $45 an hour monthly after taxes?","acceptedAnswer":{"@type":"Answer","text":"$45/hr = $7,800/month gross. After taxes in Texas: approximately $6,318/month. In California: approximately $5,637/month."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}><a href="/" style={{ color: '#666' }}>Home</a> › <a href="/blog" style={{ color: '#666' }}>Blog</a> › $45 an Hour After Taxes</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$45 an Hour After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 32 }}><strong>$45/hr × 2,080 hours = $93,600/year gross.</strong> Take-home ranges from <strong>$67,644 to $75,816</strong> by state.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Take-Home Pay at $45/Hour by State</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#f0f4ff' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>State</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>State Tax</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Annual Take-Home</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Effective Hourly</th>
        </tr></thead>
        <tbody>{rows.map(([s,t,a,h]) => (
          <tr key={s} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{s}</td>
            <td style={{ padding: '10px 14px', color: '#555' }}>{t}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{a}</td>
            <td style={{ padding: '10px 14px' }}>{h}/hr</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#f0f4ff', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact $45/hr take-home →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #e5e7eb', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$50k After Taxes','/blog/50k-a-year-after-taxes'],['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['Biweekly Pay Guide','/blog/biweekly-paycheck-after-taxes'],['All Tax Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#f8faff', border:'1px solid #e5e7eb', borderRadius:6, fontSize:13, fontWeight:600, color:'#1a56db', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
