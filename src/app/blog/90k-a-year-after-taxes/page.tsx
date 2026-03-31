import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '$90,000 a Year After Taxes 2026 — Monthly & Hourly Take-Home | PrivatePaycheck',
  description: 'How much is $90k a year after taxes in 2026? Monthly: $4,891–$5,667. See exact numbers for all 50 states.',
  keywords: '90k a year after taxes, 90000 salary after taxes 2026, 90k take home pay',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/90k-a-year-after-taxes' },
}
export default function Page() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $90,000 a year after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"$90k gross. In Texas: approximately $68,004/year ($5,667/month). In California: approximately $62,604/year ($5,217/month)."}},{"@type":"Question","name":"How much is $90k a year per hour after taxes?","acceptedAnswer":{"@type":"Answer","text":"$90,000 / 2,080 hours = $43.27/hr gross. After taxes in Texas: approximately $32.69/hr. In California: approximately $30.10/hr."}},{"@type":"Question","name":"Is $90,000 a good salary in 2026?","acceptedAnswer":{"@type":"Answer","text":"$90k is in the top 25% of US earners. It provides a comfortable lifestyle in most cities. In expensive metros like NYC or SF, it is solidly middle class."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}><a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › $90k After Taxes</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$90,000 a Year After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}><strong>$90k/year gross = $43.27/hour.</strong> Take-home ranges from <strong>$62,604 to $68,004</strong> by state.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>$90k Salary Breakdown</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#1a2550' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Period</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Gross</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Net (Texas)</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Net (California)</th>
        </tr></thead>
        <tbody>{[
          ['Annual','$90,000','$68,004','$62,604'],
          ['Monthly','$7,500','$5,667','$5,217'],
          ['Biweekly','$3,462','$2,615','$2,408'],
          ['Hourly','$43.27','$32.69','$30.10'],
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
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Calculate your exact $90k take-home →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #2a3a6a', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$60k After Taxes','/blog/60k-a-year-after-taxes'],['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['All Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#0f1a3a', border:'1px solid #2a3a6a', borderRadius:6, fontSize:13, fontWeight:600, color:'#F5C842', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
