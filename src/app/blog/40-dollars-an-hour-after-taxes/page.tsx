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
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}>
        <a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › $40 an Hour After Taxes 2026
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$40 an Hour After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}><strong>$83,200/year gross</strong>. Take-home varies by state — see exact numbers below or use the <a href="/" style={{ color:'#F5C842' }}>free calculator</a>.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Take-Home Pay by State</h2>
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
            <td style={{ padding: '10px 14px' }}>{h}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#1a2550', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Get your exact take-home pay →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $40 an hour after taxes?</h3><p style={{ color: '#c8d0e7', lineHeight: 1.7 }}>$40/hr = $83,200/year gross. Take-home in Texas: ~$67,716/year ($32.55/hr). In California: ~$60,480/year after all taxes.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Is $40 an hour a good salary?</h3><p style={{ color: '#c8d0e7', lineHeight: 1.7 }}>$40/hr = $83,200/year — this is above the US median household income. It provides a solid middle-class lifestyle in most US cities.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $40 an hour monthly after taxes?</h3><p style={{ color: '#c8d0e7', lineHeight: 1.7 }}>In Texas: ~$5,643/month take-home. In California: ~$5,040/month after federal and state taxes.</p>
    
      <div style={{ borderTop: '2px solid #2a3a6a', marginTop: 40, paddingTop: 32 }}>
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
            <a key={s} href={"/blog/" + s} style={{ display:'block', padding:'8px 12px', background:'#0f1a3a', border:'1px solid #2a3a6a', borderRadius:6, fontSize:13, fontWeight:600, color:'#F5C842', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
          <a href="/" style={{ color:'#F5C842', fontSize: 14 }}>Free Paycheck Calculator</a>
          <a href="/blog" style={{ color:'#F5C842', fontSize: 14 }}>All Tax Guides</a>
          <a href="/california-paycheck-calculator" style={{ color:'#F5C842', fontSize: 14 }}>California Calculator</a>
          <a href="/texas-paycheck-calculator" style={{ color:'#F5C842', fontSize: 14 }}>Texas Calculator</a>
        </div>
      </div>
    </main>
  )
}
