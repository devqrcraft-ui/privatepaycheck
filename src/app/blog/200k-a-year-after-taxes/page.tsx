import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '$200,000 a Year After Taxes 2026 — Take-Home Pay by State | PrivatePaycheck',
  description: 'How much is $200k a year after taxes in 2026? Monthly: $8,767–$10,867. See exact take-home for TX, CA, NY, FL, WA.',
  keywords: '200k a year after taxes, 200000 salary after taxes 2026, 200k take home pay, high income after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/200k-a-year-after-taxes' },
}
export default function Page() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much is $200,000 a year after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"$200k gross. In Texas: approximately $130,404/year ($10,867/month). In California: approximately $117,204/year ($9,767/month). In NYC: approximately $105,204/year ($8,767/month)."}},{"@type":"Question","name":"What tax bracket is $200k in 2026?","acceptedAnswer":{"@type":"Answer","text":"At $200k, you are in the 32% federal marginal bracket in 2026 (income between $197,301–$250,525). Your effective federal rate is approximately 27%–28% after the standard deduction."}},{"@type":"Question","name":"How much is $200k per hour after taxes?","acceptedAnswer":{"@type":"Answer","text":"$200,000 / 2,080 hours = $96.15/hr gross. After taxes in Texas: approximately $62.69/hr. In California: approximately $56.35/hr."}},{"@type":"Question","name":"Does $200k qualify for the 0.9% Medicare surtax?","acceptedAnswer":{"@type":"Answer","text":"Yes. Wages over $200,000 are subject to an additional 0.9% Medicare tax withheld by employers. This applies to the amount over $200,000, not the entire salary."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}><a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › $200k After Taxes</nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>$200,000 a Year After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}><strong>$200k/year gross = $96.15/hour.</strong> After federal taxes (32% bracket), FICA, and state taxes, take-home ranges from <strong>$105,204 (NYC) to $130,404 (Texas)</strong> — a $25,200 gap from taxes alone.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>$200k Salary Breakdown</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#1a2550' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Period</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Gross</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Net (Texas)</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Net (California)</th>
        </tr></thead>
        <tbody>{[
          ['Annual','$200,000','$130,404','$117,204'],
          ['Monthly','$16,667','$10,867','$9,767'],
          ['Biweekly','$7,692','$5,015','$4,508'],
          ['Hourly','$96.15','$62.69','$56.35'],
        ].map(([p,g,t,c]) => (
          <tr key={p} style={{ borderBottom: '1px solid #1e2d5a' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{p}</td>
            <td style={{ padding: '10px 14px', color: '#b0b8d1' }}>{g}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{t}</td>
            <td style={{ padding: '10px 14px', color: '#8892aa' }}>{c}</td>
          </tr>
        ))}</tbody>
      </table>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>$200k Take-Home by State</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#1a2550' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>State</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>State Tax</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Annual Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Net</th>
        </tr></thead>
        <tbody>{[
          ['Texas','None','$130,404','$10,867'],
          ['Florida','None','$130,404','$10,867'],
          ['Washington','None','$130,404','$10,867'],
          ['Nevada','None','$130,404','$10,867'],
          ['Arizona','2.5%','$126,204','$10,517'],
          ['Illinois','4.95%','$122,004','$10,167'],
          ['California','13.3%','$117,204','$9,767'],
          ['New York (state)','6.85%','$123,204','$10,267'],
          ['NYC','10.75%','$105,204','$8,767'],
          ['New Jersey','10.75%','$118,404','$9,867'],
          ['Oregon','9.9%','$119,604','$9,967'],
          ['Minnesota','9.85%','$119,604','$9,967'],
        ].map(([s,t,a,m]) => (
          <tr key={s} style={{ borderBottom: '1px solid #1e2d5a' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{s}</td>
            <td style={{ padding: '10px 14px', color: '#b0b8d1' }}>{t}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{a}</td>
            <td style={{ padding: '10px 14px' }}>{m}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#fff3cd', color: '#1a1a2e', border:'1px solid #ffc107', borderRadius: 8, padding: '14px 18px', marginBottom: 24, fontSize: 14 }}>
        <strong>Note:</strong> At $200k, the additional 0.9% Medicare surtax applies to wages over $200,000. Also, FICA Social Security (6.2%) only applies up to the $184,500 wage base.
      </div>
      <div style={{ background: '#1a2550', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact $200k take-home →</a>
      </div>
      
      <div style={{ borderTop: '2px solid #2a3a6a', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 16 }}>
          {([['$75k After Taxes','/blog/75k-a-year-after-taxes'],['$100k After Taxes','/blog/100k-a-year-after-taxes'],['All Guides','/blog'],['Free Calculator','/']] as [string,string][]).map(([t,h]) => (
            <a key={h} href={h} style={{ padding:'8px 14px', background:'#0f1a3a', border:'1px solid #2a3a6a', borderRadius:6, fontSize:13, fontWeight:600, color:'#1a56db', textDecoration:'none' }}>{t}</a>
          ))}
        </div>
      </div>
    </main>
  )
}
