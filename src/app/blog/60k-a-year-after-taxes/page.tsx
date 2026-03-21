import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '$60,000 a Year After Taxes 2026 — Monthly & Hourly Take-Home | PrivatePaycheck',
  description: 'How much is $60k a year after taxes in 2026? Monthly: $3,163–$3,912. Hourly: $15.21–$18.81. See exact numbers for all 50 states.',
  keywords: '60k a year after taxes, 60000 salary after taxes 2026, 60k take home pay, 60000 a year is how much an hour after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/60k-a-year-after-taxes' },
}
export default function Page() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $60,000 a year after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"$60k gross. In Texas: approximately $46,944/year ($3,912/month). In California: approximately $43,800/year ($3,650/month). In New York: approximately $41,844/year."}},{"@type":"Question","name":"How much is $60k a year per hour after taxes?","acceptedAnswer":{"@type":"Answer","text":"$60,000 / 2,080 hours = $28.85/hr gross. After taxes in Texas: approximately $22.57/hr. In California: approximately $21.06/hr."}},{"@type":"Question","name":"Is $60,000 a good salary in 2026?","acceptedAnswer":{"@type":"Answer","text":"$60k is above the US median individual income. It provides a comfortable lifestyle in most mid-cost states. In high cost-of-living cities like NYC or SF, it is lower-middle class."}},{"@type":"Question","name":"How much is $60,000 a year monthly after taxes?","acceptedAnswer":{"@type":"Answer","text":"$60,000/year = $5,000/month gross. After taxes: Texas $3,912/month, California $3,650/month, New York $3,487/month, Illinois $3,700/month."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}><a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › $60k After Taxes</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$60,000 a Year After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}><strong>$60k/year gross = $28.85/hour.</strong> After federal taxes and FICA, take-home ranges from <strong>$41,844 to $46,944</strong> by state.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>$60k Salary — Annual, Monthly, Biweekly, Hourly</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#1a2550' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Period</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Gross</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Net (Texas)</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Net (California)</th>
        </tr></thead>
        <tbody>{[
          ['Annual','$60,000','$46,944','$43,800'],
          ['Monthly','$5,000','$3,912','$3,650'],
          ['Biweekly','$2,308','$1,805','$1,685'],
          ['Hourly','$28.85','$22.57','$21.06'],
        ].map(([p,g,t,c]) => (
          <tr key={p} style={{ borderBottom: '1px solid #1e2d5a' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{p}</td>
            <td style={{ padding: '10px 14px', color: '#b0b8d1' }}>{g}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{t}</td>
            <td style={{ padding: '10px 14px', color: '#8892aa' }}>{c}</td>
          </tr>
        ))}</tbody>
      </table>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>$60k Take-Home by State</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#1a2550' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>State</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>State Tax</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Annual Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Net</th>
        </tr></thead>
        <tbody>{[
          ['Texas','None','$46,944','$3,912'],
          ['Florida','None','$46,944','$3,912'],
          ['Washington','None','$46,944','$3,912'],
          ['Arizona','2.5%','$45,444','$3,787'],
          ['Indiana','3.05%','$45,144','$3,762'],
          ['Pennsylvania','3.07%','$45,120','$3,760'],
          ['Illinois','4.95%','$44,400','$3,700'],
          ['Georgia','5.39%','$44,016','$3,668'],
          ['Virginia','5.75%','$43,620','$3,635'],
          ['California','9.30%','$43,800','$3,650'],
          ['New York','6.85%','$41,844','$3,487'],
          ['Minnesota','9.85%','$41,580','$3,465'],
        ].map(([s,t,a,m]) => (
          <tr key={s} style={{ borderBottom: '1px solid #1e2d5a' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{s}</td>
            <td style={{ padding: '10px 14px', color: '#b0b8d1' }}>{t}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{a}</td>
            <td style={{ padding: '10px 14px' }}>{m}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#1a2550', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact $60k take-home →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #2a3a6a', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$50k After Taxes','/blog/50k-a-year-after-taxes'],['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['$150k After Taxes','/blog/150k-a-year-after-taxes'],['All Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#0f1a3a', border:'1px solid #2a3a6a', borderRadius:6, fontSize:13, fontWeight:600, color:'#1a56db', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
