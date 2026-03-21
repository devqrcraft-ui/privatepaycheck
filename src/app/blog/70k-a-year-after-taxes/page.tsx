import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '$70,000 a Year After Taxes 2026 — Monthly & Hourly Take-Home | PrivatePaycheck',
  description: 'How much is $70k a year after taxes in 2026? Monthly: $4,048–$4,594. Hourly: $19.46–$22.09. See exact numbers for all 50 states.',
  keywords: '70k a year after taxes, 70000 salary after taxes 2026, 70k take home pay, 70000 a year is how much an hour after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/70k-a-year-after-taxes' },
}
export default function Page() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $70,000 a year after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"$70k gross. In Texas: approximately $55,128/year ($4,594/month). In California: approximately $49,716/year ($4,143/month)."}},{"@type":"Question","name":"How much is $70k a year per hour after taxes?","acceptedAnswer":{"@type":"Answer","text":"$70,000 / 2,080 hours = $33.65/hr gross. After taxes in Texas: approximately $26.50/hr. In California: approximately $23.90/hr."}},{"@type":"Question","name":"Is $70,000 a good salary in 2026?","acceptedAnswer":{"@type":"Answer","text":"$70k is above the US median household income of approximately $60,000. It provides a comfortable lifestyle in most mid-cost cities and is considered solidly middle class."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}><a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › $70k After Taxes</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$70,000 a Year After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}><strong>$70k/year gross = $33.65/hour.</strong> Take-home ranges from <strong>$49,716 to $55,128</strong> by state.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>$70k Salary Breakdown</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#1a2550' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Period</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Gross</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Net (Texas)</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Net (California)</th>
        </tr></thead>
        <tbody>{[
          ['Annual','$70,000','$55,128','$49,716'],
          ['Monthly','$5,833','$4,594','$4,143'],
          ['Biweekly','$2,692','$2,120','$1,912'],
          ['Hourly','$33.65','$26.50','$23.90'],
        ].map(([p,g,t,c]) => (
          <tr key={p} style={{ borderBottom: '1px solid #1e2d5a' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{p}</td>
            <td style={{ padding: '10px 14px', color: '#b0b8d1' }}>{g}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{t}</td>
            <td style={{ padding: '10px 14px', color: '#8892aa' }}>{c}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#1a2550', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact $70k take-home →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #2a3a6a', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$60k After Taxes','/blog/60k-a-year-after-taxes'],['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['All Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#0f1a3a', border:'1px solid #2a3a6a', borderRadius:6, fontSize:13, fontWeight:600, color:'#1a56db', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
