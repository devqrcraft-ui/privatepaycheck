import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '$120,000 a Year After Taxes 2026 — Monthly & Hourly Take-Home | PrivatePaycheck',
  description: 'How much is $120k a year after taxes in 2026? Monthly: $5,558–$6,892. See take-home for all 50 states.',
  keywords: '120k a year after taxes, 120000 salary after taxes 2026, 120k take home pay',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/120k-a-year-after-taxes' },
}
export default function Page() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $120,000 a year after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"$120k gross. In Texas: approximately $82,704/year ($6,892/month). In California: approximately $77,916/year ($6,493/month). In NYC: approximately $66,696/year ($5,558/month)."}},{"@type":"Question","name":"How much is $120k per hour after taxes?","acceptedAnswer":{"@type":"Answer","text":"$120,000 / 2,080 hours = $57.69/hr gross. After taxes in Texas: approximately $39.76/hr. In California: approximately $37.46/hr."}},{"@type":"Question","name":"Is $120,000 a good salary in 2026?","acceptedAnswer":{"@type":"Answer","text":"$120k puts you in approximately the top 20% of US earners. After taxes in Texas you keep $82,704 — very comfortable. In NYC after taxes you keep $66,696 which is solid but not lavish given local costs."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}><a href="/" style={{ color: '#666' }}>Home</a> › <a href="/blog" style={{ color: '#666' }}>Blog</a> › $120k After Taxes</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$120,000 a Year After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 32 }}><strong>$120k/year gross = $57.69/hour.</strong> Take-home ranges from <strong>$66,696 (NYC) to $82,704 (Texas)</strong>.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>$120k Salary Breakdown</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#f0f4ff' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Period</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Gross</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Net (Texas)</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Net (California)</th>
        </tr></thead>
        <tbody>{[
          ['Annual','$120,000','$82,704','$77,916'],
          ['Monthly','$10,000','$6,892','$6,493'],
          ['Biweekly','$4,615','$3,181','$2,997'],
          ['Hourly','$57.69','$39.76','$37.46'],
        ].map(([p,g,t,c]) => (
          <tr key={p} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{p}</td>
            <td style={{ padding: '10px 14px', color: '#555' }}>{g}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{t}</td>
            <td style={{ padding: '10px 14px', color: '#888' }}>{c}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#f0f4ff', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact $120k take-home →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #e5e7eb', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$50k After Taxes','/blog/50k-a-year-after-taxes'],['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['$150k After Taxes','/blog/150k-a-year-after-taxes'],['All Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#f8faff', border:'1px solid #e5e7eb', borderRadius:6, fontSize:13, fontWeight:600, color:'#1a56db', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
