import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '$50,000 a Year After Taxes 2026 — How Much Per Month & Hourly | PrivatePaycheck',
  description: 'How much is $50k a year after taxes in 2026? Monthly: $3,350–$3,870. Hourly: $16.11–$18.60. See exact numbers for all 50 states.',
  keywords: '50k a year after taxes, 50000 salary after taxes 2026, 50k take home pay, 50000 a year is how much an hour after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/50k-a-year-after-taxes' },
}
export default function Page() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"How much is $50,000 a year after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"A $50,000 salary in 2026 results in approximately $38,700–$46,500 take-home pay depending on your state. In Texas (no state tax), take-home is about $40,320/year. In California, it drops to ~$38,700 due to 9.3% state income tax."}},
          {"@type":"Question","name":"How much is $50k a year per hour after taxes?","acceptedAnswer":{"@type":"Answer","text":"$50,000/year ÷ 2,080 hours = $24.04/hr gross. After taxes in Texas, effective hourly take-home is about $19.38. In California, approximately $18.61/hr."}},
          {"@type":"Question","name":"How much is $50,000 a year monthly after taxes?","acceptedAnswer":{"@type":"Answer","text":"$50,000/year = $4,167/month gross. After taxes, monthly take-home is roughly $3,360 (Texas) to $3,225 (California) for a single filer in 2026."}}
        ]
      }) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › <a href="/blog" style={{ color: '#666' }}>Blog</a> › $50k After Taxes
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$50,000 a Year After Taxes in 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 32 }}>$50k/year gross = <strong>$24.04/hour</strong>. After federal taxes and FICA, take-home pay is <strong>$38,700–$40,320/year</strong> depending on your state.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>$50k Salary — Annual, Monthly, Biweekly, Hourly</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#f0f4ff' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Period</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Gross</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Net (Texas)</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Net (California)</th>
        </tr></thead>
        <tbody>{[
          ['Annual',   '$50,000','$40,320','$38,700'],
          ['Monthly',  '$4,167', '$3,360', '$3,225'],
          ['Biweekly', '$1,923', '$1,550', '$1,488'],
          ['Hourly',   '$24.04', '$19.38', '$18.61'],
        ].map(([p,g,t,c]) => (
          <tr key={p} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{p}</td>
            <td style={{ padding: '10px 14px', color: '#555' }}>{g}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{t}</td>
            <td style={{ padding: '10px 14px', color: '#888' }}>{c}</td>
          </tr>
        ))}</tbody>
      </table>
      <p style={{ color: '#555' }}>Get exact $50k take-home for your specific state → <a href="/" style={{ color: '#1a56db' }}>PrivatePaycheck calculator</a></p>
    </main>
  )
}
