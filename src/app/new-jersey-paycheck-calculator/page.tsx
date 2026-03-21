import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'New Jersey Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'New Jersey paycheck calculator 2026. See exact take-home pay after federal + New Jersey state tax (up to 10.75%) and FICA. All salary levels. 100% private.',
  keywords: 'new jersey paycheck calculator 2026, new jersey take home pay, new jersey salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/new-jersey-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$1,930","$1,782"],["$40,000","$3,333","$2,479","$2,289"],["$50,000","$4,167","$2,990","$2,760"],["$60,000","$5,000","$3,457","$3,191"],["$75,000","$6,250","$4,083","$3,769"],["$100,000","$8,333","$5,143","$4,748"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is New Jersey income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"New Jersey top income tax rate is 10.75% for income over $1 million. Most middle-income earners fall in the 5.525%–6.37% range."}},{"@type":"Question","name":"How much is $60,000 take-home in New Jersey?","acceptedAnswer":{"@type":"Answer","text":"Approximately $41,484/year ($3,457/month) after federal, FICA, and NJ state tax."}},{"@type":"Question","name":"Does New Jersey have local income tax?","acceptedAnswer":{"@type":"Answer","text":"No local income tax in NJ, but NJ has a mandatory payroll deduction for Unemployment Insurance and Family Leave Insurance."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › New Jersey Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>New Jersey Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>New Jersey state income tax: <strong>up to 10.75%</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.4)', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14, color: '#fde68a' }}>New Jersey state income tax: up to 10.75% in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>New Jersey Take-Home Pay by Salary (Single Filer, 2026)</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: 'rgba(99,102,241,0.2)' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Annual Salary</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Gross</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Biweekly Net</th>
        </tr></thead>
        <tbody>{rows.map(([sal,gross,net,bw]) => (
          <tr key={sal} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{sal}</td>
            <td style={{ padding: '10px 14px', color: '#555' }}>{gross}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{net}</td>
            <td style={{ padding: '10px 14px' }}>{bw}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: 'rgba(99,102,241,0.2)', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact New Jersey paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is New Jersey income tax rate 2026?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>New Jersey top income tax rate is 10.75% for income over $1 million. Most middle-income earners fall in the 5.525%–6.37% range.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $60,000 take-home in New Jersey?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Approximately $41,484/year ($3,457/month) after federal, FICA, and NJ state tax.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Does New Jersey have local income tax?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>No local income tax in NJ, but NJ has a mandatory payroll deduction for Unemployment Insurance and Family Leave Insurance.</p>
    
      <div style={{ borderTop: '2px solid #e5e7eb', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Compare Other States</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 8, marginBottom: 24 }}>
          {([['California','california'],['Texas','texas'],['Florida','florida'],['New York','new-york'],['Illinois','illinois'],['Washington','washington'],['Nevada','nevada'],['Arizona','arizona'],['Colorado','colorado'],['Pennsylvania','pennsylvania']] as [string,string][]).map(([n,s]) => (
            <a key={s} href={"/" + s + "-paycheck-calculator"} style={{ display:'block', padding:'8px 12px', background:'rgba(99,102,241,0.15)', border:'1px solid rgba(99,102,241,0.3)', borderRadius:6, fontSize:13, fontWeight:600, color:'#818cf8', textDecoration:'none' }}>{n} Calculator</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
          <a href="/" style={{ color: '#1a56db', fontSize: 14 }}>Free Paycheck Calculator</a>
          <a href="/blog" style={{ color: '#1a56db', fontSize: 14 }}>Tax & Paycheck Blog</a>
          <a href="/blog/no-income-tax-states-2026" style={{ color: '#1a56db', fontSize: 14 }}>No Income Tax States</a>
          <a href="/blog/2026-federal-tax-brackets" style={{ color: '#1a56db', fontSize: 14 }}>2026 Tax Brackets</a>
        </div>
      </div>
    </main>
  )
}
