import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '$80,000 a Year After Taxes 2026 — Monthly & Hourly Take-Home | PrivatePaycheck',
  description: 'How much is $80k a year after taxes in 2026? Monthly: $4,283–$5,125. Hourly: $20.59–$24.64. See exact numbers for all 50 states.',
  keywords: '80k a year after taxes, 80000 salary after taxes 2026, 80k take home pay, 80000 a year is how much an hour',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/80k-a-year-after-taxes' },
}
export default function Page() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $80,000 a year after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"$80k gross. In Texas: approximately $61,500/year ($5,125/month). In California: approximately $57,396/year ($4,783/month)."}},{"@type":"Question","name":"How much is $80k a year per hour after taxes?","acceptedAnswer":{"@type":"Answer","text":"$80,000 / 2,080 hours = $38.46/hr gross. After taxes in Texas: approximately $29.57/hr. In California: approximately $27.59/hr."}},{"@type":"Question","name":"Is $80,000 a good salary?","acceptedAnswer":{"@type":"Answer","text":"$80k is well above the US median household income and provides a comfortable lifestyle in most US cities outside of the highest cost-of-living areas like NYC or SF."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}><a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › $80k After Taxes</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$80,000 a Year After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}><strong>$80k/year gross = $38.46/hour.</strong> Take-home ranges from <strong>$57,396 to $61,500</strong> depending on state.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>$80k Salary — Annual, Monthly, Biweekly, Hourly</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#1a2550' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Period</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Gross</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Net (Texas)</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Net (California)</th>
        </tr></thead>
        <tbody>{[
          ['Annual','$80,000','$61,500','$57,396'],
          ['Monthly','$6,667','$5,125','$4,783'],
          ['Biweekly','$3,077','$2,365','$2,207'],
          ['Hourly','$38.46','$29.57','$27.59'],
        ].map(([p,g,t,c]) => (
          <tr key={p} style={{ borderBottom: '1px solid #1e2d5a' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{p}</td>
            <td style={{ padding: '10px 14px', color: '#b0b8d1' }}>{g}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color:'#F5C842' }}>{t}</td>
            <td style={{ padding: '10px 14px', color: '#8892aa' }}>{c}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#1a2550', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Calculate your exact $80k take-home →</a>
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
