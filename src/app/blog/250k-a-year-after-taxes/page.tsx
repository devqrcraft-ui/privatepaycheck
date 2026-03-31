import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '$250,000 a Year After Taxes 2026 — Take-Home Pay by State | PrivatePaycheck',
  description: 'How much is $250k a year after taxes in 2026? Monthly: $10,400–$13,200. See exact take-home for all states including CA, TX, NY.',
  keywords: '250k a year after taxes, 250000 salary after taxes 2026, 250k take home pay',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/250k-a-year-after-taxes' },
}
export default function Page() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $250,000 a year after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"$250k gross. In Texas: approximately $158,604/year ($13,217/month). In California: approximately $141,804/year ($11,817/month). In NYC: approximately $125,004/year ($10,417/month)."}},{"@type":"Question","name":"What tax bracket is $250k in 2026?","acceptedAnswer":{"@type":"Answer","text":"At $250k, you are in the 32%–35% federal marginal bracket. The 35% bracket starts at $250,526. Your effective federal rate is approximately 29%–31%."}},{"@type":"Question","name":"Is $250k considered rich in 2026?","acceptedAnswer":{"@type":"Answer","text":"$250k puts you in approximately the top 5% of US earners. After taxes in Texas you keep $158,604 — wealthy in most cities. In NYC after taxes you keep $125,004 which is upper-middle class given local costs."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}><a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › $250k After Taxes</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$250,000 a Year After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}><strong>$250k/year gross = $120.19/hour.</strong> Take-home ranges from <strong>$125,004 (NYC) to $158,604 (Texas)</strong> — a $33,600 gap.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>$250k Salary Breakdown</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#1a2550' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Period</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Gross</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Net (Texas)</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Net (California)</th>
        </tr></thead>
        <tbody>{[
          ['Annual','$250,000','$158,604','$141,804'],
          ['Monthly','$20,833','$13,217','$11,817'],
          ['Biweekly','$9,615','$6,100','$5,454'],
          ['Hourly','$120.19','$76.25','$68.17'],
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
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Calculate your exact $250k take-home →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #2a3a6a', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['All Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#0f1a3a', border:'1px solid #2a3a6a', borderRadius:6, fontSize:13, fontWeight:600, color:'#F5C842', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
