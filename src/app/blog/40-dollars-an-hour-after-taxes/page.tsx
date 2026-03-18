import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '$40 an Hour After Taxes 2026 — Take-Home Pay by State | PrivatePaycheck',
  description: 'How much is $40 an hour after taxes in 2026? $40/hr = $83,200/year gross. See exact take-home for all 50 states.',
  keywords: '40 dollars an hour after taxes, 40 an hour take home 2026, 83200 salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/40-dollars-an-hour-after-taxes' },
}
export default function Page() {
  const rows: string[][] = [["Texas","None","$67,716","$32.55"],["Florida","None","$67,716","$32.55"],["California","9.30%","$60,480","$29.08"],["New York","6.85%","$62,880","$30.23"],["Illinois","4.95%","$64,800","$31.15"],["Washington","None","$67,716","$32.55"]]
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $40 an hour after taxes?","acceptedAnswer":{"@type":"Answer","text":"$40/hr = $83,200/year gross. Take-home in Texas: ~$67,716/year ($32.55/hr). In California: ~$60,480/year after all taxes."}},{"@type":"Question","name":"Is $40 an hour a good salary?","acceptedAnswer":{"@type":"Answer","text":"$40/hr = $83,200/year — this is above the US median household income. It provides a solid middle-class lifestyle in most US cities."}},{"@type":"Question","name":"How much is $40 an hour monthly after taxes?","acceptedAnswer":{"@type":"Answer","text":"In Texas: ~$5,643/month take-home. In California: ~$5,040/month after federal and state taxes."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › <a href="/blog" style={{ color: '#666' }}>Blog</a> › $40 an Hour After Taxes 2026
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$40 an Hour After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 32 }}><strong>$83,200/year gross</strong>. Take-home varies by state — see exact numbers below or use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a>.</p>
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
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $40 an hour after taxes?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>$40/hr = $83,200/year gross. Take-home in Texas: ~$67,716/year ($32.55/hr). In California: ~$60,480/year after all taxes.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Is $40 an hour a good salary?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>$40/hr = $83,200/year — this is above the US median household income. It provides a solid middle-class lifestyle in most US cities.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $40 an hour monthly after taxes?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>In Texas: ~$5,643/month take-home. In California: ~$5,040/month after federal and state taxes.</p>
    </main>
  )
}
