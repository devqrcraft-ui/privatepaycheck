import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Biweekly Paycheck After Taxes 2026 — Calculator & Tables | PrivatePaycheck',
  description: 'How much is your biweekly paycheck after taxes? See take-home pay tables for $30k, $40k, $50k, $60k, $75k, $100k salaries. All 50 states covered.',
  keywords: 'biweekly paycheck after taxes 2026, biweekly take home pay, biweekly pay after taxes calculator',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/biweekly-paycheck-after-taxes' },
}
export default function Page() {
  const rows = [
    ['$30,000', '$1,154', '$952',  '$870'],
    ['$40,000', '$1,538', '$1,258','$1,145'],
    ['$50,000', '$1,923', '$1,548','$1,403'],
    ['$60,000', '$2,308', '$1,820','$1,644'],
    ['$75,000', '$2,885', '$2,212','$1,991'],
    ['$100,000','$3,846', '$2,837','$2,520'],
  ]
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"How is a biweekly paycheck calculated after taxes?","acceptedAnswer":{"@type":"Answer","text":"Annual salary ÷ 26 pay periods = gross biweekly pay. Then subtract federal income tax (based on W-4), Social Security (6.2%), Medicare (1.45%), and any state income tax. The result is your net biweekly take-home pay."}},
          {"@type":"Question","name":"How much is a $50,000 salary biweekly after taxes?","acceptedAnswer":{"@type":"Answer","text":"A $50,000 salary gives $1,923 gross per biweekly paycheck. After federal taxes, FICA, and state taxes (varies), take-home is approximately $1,403–$1,548 depending on your state."}},
          {"@type":"Question","name":"How many biweekly paychecks in 2026?","acceptedAnswer":{"@type":"Answer","text":"There are 26 biweekly pay periods in 2026. Some employees may receive 27 paychecks depending on when their pay cycle started."}}
        ]
      }) }} />
      <nav style={{ fontSize: 13, color: '#9aa3bc', marginBottom: 24 }}>
        <a href="/" style={{ color: '#9aa3bc' }}>Home</a> › <a href="/blog" style={{ color: '#9aa3bc' }}>Blog</a> › Biweekly Paycheck After Taxes
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Biweekly Paycheck After Taxes 2026</h1>
      <p style={{ fontSize: 17, color: '#c8d0e7', marginBottom: 32 }}>There are <strong>26 biweekly pay periods</strong> in 2026. Here are exact take-home amounts after federal taxes, FICA, and state taxes for common salaries.</p>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Biweekly Take-Home by Salary (Single Filer)</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#1a2550' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Annual Salary</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Gross/Period</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Net (No State Tax)</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Net (CA/NY)</th>
        </tr></thead>
        <tbody>{rows.map(([sal,gross,net,ca]) => (
          <tr key={sal} style={{ borderBottom: '1px solid #1e2d5a' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{sal}</td>
            <td style={{ padding: '10px 14px' }}>{gross}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color:'#F5C842' }}>{net}</td>
            <td style={{ padding: '10px 14px', color: '#8892aa' }}>{ca}</td>
          </tr>
        ))}</tbody>
      </table>
      <p style={{ color: '#b0b8d1' }}>Get exact biweekly pay for your salary and state → <a href="/" style={{ color:'#F5C842' }}>free private calculator</a></p>
    
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
