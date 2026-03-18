import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '$25 an Hour After Taxes 2026 — Take-Home Pay by State | PrivatePaycheck',
  description: 'How much is $25 an hour after taxes in 2026? $25/hr = $52,000/year gross. After all taxes, take-home is $40,000–$44,000. See exact numbers for every state.',
  keywords: '25 dollars an hour after taxes, 25 an hour take home 2026, 25 per hour net pay',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/25-dollars-an-hour-after-taxes' },
}
export default function Page() {
  const rows = [
    ['Texas',      'None',   '$43,576', '$20.95'],
    ['Florida',    'None',   '$43,576', '$20.95'],
    ['California', '9.30%',  '$38,800', '$18.65'],
    ['New York',   '6.85%',  '$40,400', '$19.42'],
    ['Illinois',   '4.95%',  '$41,250', '$19.83'],
  ]
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"How much is $25 an hour after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"$25/hr × 2,080 hours = $52,000/year gross. After federal income tax, Social Security, and Medicare, take-home in a no-tax state is approximately $43,576/year or $20.95/hr effective."}},
          {"@type":"Question","name":"How much is $25 an hour monthly after taxes?","acceptedAnswer":{"@type":"Answer","text":"$25/hr = $52,000/year. Divided by 12, monthly take-home (Texas/Florida) ≈ $3,631. In California, ≈ $3,233 per month after state income tax."}},
          {"@type":"Question","name":"Is $25 an hour middle class in 2026?","acceptedAnswer":{"@type":"Answer","text":"$25/hr = $52,000/year. This is near the US median individual income. It qualifies as lower-middle class in high cost states like California, and comfortably middle class in states like Texas or Ohio."}}
        ]
      }) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › <a href="/blog" style={{ color: '#666' }}>Blog</a> › $25 an Hour After Taxes
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$25 an Hour After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 32 }}>$25/hr × 2,080 hours = <strong>$52,000/year gross</strong>. Your actual take-home pay ranges from <strong>$38,800 to $43,576</strong> depending on your state.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Take-Home Pay by State at $25/Hour</h2>
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
      <p style={{ color: '#555' }}>Calculate your exact take-home for $25/hr → <a href="/" style={{ color: '#1a56db' }}>PrivatePaycheck calculator</a></p>
    
      <div style={{ borderTop: '2px solid #e5e7eb', marginTop: 40, paddingTop: 32 }}>
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
            <a key={s} href={"/blog/" + s} style={{ display:'block', padding:'8px 12px', background:'#f8faff', border:'1px solid #e5e7eb', borderRadius:6, fontSize:13, fontWeight:600, color:'#1a56db', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
          <a href="/" style={{ color: '#1a56db', fontSize: 14 }}>Free Paycheck Calculator</a>
          <a href="/blog" style={{ color: '#1a56db', fontSize: 14 }}>All Tax Guides</a>
          <a href="/california-paycheck-calculator" style={{ color: '#1a56db', fontSize: 14 }}>California Calculator</a>
          <a href="/texas-paycheck-calculator" style={{ color: '#1a56db', fontSize: 14 }}>Texas Calculator</a>
        </div>
      </div>
    </main>
  )
}
