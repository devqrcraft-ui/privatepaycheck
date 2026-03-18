import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '$75,000 a Year After Taxes 2026 — Monthly & Hourly Take-Home | PrivatePaycheck',
  description: 'How much is $75k a year after taxes in 2026? Monthly: $4,318–$4,677. Hourly: $20.76–$22.49. See exact numbers for all 50 states.',
  keywords: '75k a year after taxes, 75000 salary after taxes 2026, 75k take home pay, 75000 a year is how much an hour after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/75k-a-year-after-taxes' },
}
export default function Page() {
  const rows: string[][] = [["Texas","None","$56,124","$26.98"],["Florida","None","$56,124","$26.98"],["California","9.30%","$52,500","$25.24"],["New York","6.85%","$49,716","$23.90"],["Illinois","4.95%","$52,872","$25.42"],["Washington","None","$56,124","$26.98"]]
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $75,000 a year after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"$75k gross. In Texas: ~$56,124/year ($4,677/month). In California: ~$52,500/year ($4,375/month). In New York: ~$49,716/year."}},{"@type":"Question","name":"How much is $75k a year per hour after taxes?","acceptedAnswer":{"@type":"Answer","text":"$75,000 ÷ 2,080 hours = $36.06/hr gross. After taxes in Texas: ~$26.98/hr effective. In California: ~$25.24/hr."}},{"@type":"Question","name":"Is $75,000 a good salary in 2026?","acceptedAnswer":{"@type":"Answer","text":"$75k is above the US median household income and provides a comfortable lifestyle in most states. In high cost-of-living cities like NYC or San Francisco, it is lower-middle class."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › <a href="/blog" style={{ color: '#666' }}>Blog</a> › $75,000 a Year After Taxes 2026
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$75,000 a Year After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 32 }}><strong>$75,000/year gross</strong>. Take-home varies by state — see exact numbers below or use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a>.</p>
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
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $75,000 a year after taxes in 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>$75k gross. In Texas: ~$56,124/year ($4,677/month). In California: ~$52,500/year ($4,375/month). In New York: ~$49,716/year.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $75k a year per hour after taxes?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>$75,000 ÷ 2,080 hours = $36.06/hr gross. After taxes in Texas: ~$26.98/hr effective. In California: ~$25.24/hr.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Is $75,000 a good salary in 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>$75k is above the US median household income and provides a comfortable lifestyle in most states. In high cost-of-living cities like NYC or San Francisco, it is lower-middle class.</p>
    </main>
  )
}
