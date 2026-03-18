import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '$30 an Hour After Taxes 2026 — Take-Home Pay by State | PrivatePaycheck',
  description: 'How much is $30 an hour after taxes in 2026? $30/hr = $62,400/year gross. Take-home: $48,000–$53,000 depending on state.',
  keywords: '30 dollars an hour after taxes, 30 an hour take home 2026, 30 per hour net pay',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/30-dollars-an-hour-after-taxes' },
}
export default function Page() {
  const rows: string[][] = [["Texas","None","$53,040","$25.50"],["Florida","None","$53,040","$25.50"],["California","9.30%","$47,400","$22.79"],["New York","6.85%","$49,200","$23.65"],["Illinois","4.95%","$50,580","$24.32"],["Washington","None","$53,040","$25.50"]]
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $30 an hour after taxes?","acceptedAnswer":{"@type":"Answer","text":"$30/hr = $62,400/year gross. In a no-tax state like Texas, take-home is approximately $53,040/year ($25.50/hr effective). In California, about $47,400/year."}},{"@type":"Question","name":"Is $30 an hour a good wage in 2026?","acceptedAnswer":{"@type":"Answer","text":"$30/hr = $62,400/year, which is above the US median individual income. It provides a comfortable living in most states outside high cost-of-living metros."}},{"@type":"Question","name":"How much is $30 an hour monthly after taxes?","acceptedAnswer":{"@type":"Answer","text":"In Texas, $30/hr = $4,420/month take-home. In California, approximately $3,950/month after state and federal taxes."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › <a href="/blog" style={{ color: '#666' }}>Blog</a> › $30 an Hour After Taxes 2026
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$30 an Hour After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 32 }}><strong>$62,400/year gross</strong>. Take-home varies by state — see exact numbers below or use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a>.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Take-Home Pay by State</h2>
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
            <td style={{ padding: '10px 14px' }}>{h}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#f0f4ff', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Get your exact take-home pay →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $30 an hour after taxes?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>$30/hr = $62,400/year gross. In a no-tax state like Texas, take-home is approximately $53,040/year ($25.50/hr effective). In California, about $47,400/year.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Is $30 an hour a good wage in 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>$30/hr = $62,400/year, which is above the US median individual income. It provides a comfortable living in most states outside high cost-of-living metros.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $30 an hour monthly after taxes?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>In Texas, $30/hr = $4,420/month take-home. In California, approximately $3,950/month after state and federal taxes.</p>
    </main>
  )
}
