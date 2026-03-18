import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '$17 an Hour After Taxes 2026 — Take-Home Pay by State | PrivatePaycheck',
  description: 'How much is $17 an hour after taxes in 2026? $17/hr = $35,360/year gross. Take-home: $28,900–$31,500 by state.',
  keywords: '17 dollars an hour after taxes, 17 an hour take home 2026, 35360 salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/17-dollars-an-hour-after-taxes' },
}
export default function Page() {
  const rows: string[][] = [
    ['Texas','None','$30,648','$14.73'],
    ['Florida','None','$30,648','$14.73'],
    ['California','9.30%','$27,504','$13.22'],
    ['New York','6.85%','$28,440','$13.67'],
    ['Illinois','4.95%','$29,028','$13.96'],
    ['Washington','None','$30,648','$14.73'],
  ]
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $17 an hour after taxes?","acceptedAnswer":{"@type":"Answer","text":"$17/hr x 2,080 hours = $35,360/year gross. In Texas, take-home is approximately $30,648/year ($14.73/hr). In California, approximately $27,504/year."}},{"@type":"Question","name":"Is $17 an hour good pay in 2026?","acceptedAnswer":{"@type":"Answer","text":"$17/hr = $35,360/year. This is above minimum wage in most states and provides a livable income in lower cost-of-living areas. It is tight but manageable in mid-size cities."}},{"@type":"Question","name":"How much is $17 an hour biweekly after taxes?","acceptedAnswer":{"@type":"Answer","text":"$17 x 80 hours = $1,360 gross biweekly. After taxes in Texas: approximately $1,177 net per paycheck."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}><a href="/" style={{ color: '#666' }}>Home</a> › <a href="/blog" style={{ color: '#666' }}>Blog</a> › $17 an Hour After Taxes</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$17 an Hour After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 32 }}><strong>$17/hr x 2,080 hours = $35,360/year gross.</strong> Take-home ranges from <strong>$27,504 to $30,648</strong> by state.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Take-Home Pay at $17/Hour by State</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate exact take-home for $17/hr →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #e5e7eb', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$50k After Taxes','/blog/50k-a-year-after-taxes'],['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['$150k After Taxes','/blog/150k-a-year-after-taxes'],['All Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#f8faff', border:'1px solid #e5e7eb', borderRadius:6, fontSize:13, fontWeight:600, color:'#1a56db', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
