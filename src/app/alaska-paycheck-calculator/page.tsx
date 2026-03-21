import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Alaska Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Alaska paycheck calculator 2026. See exact take-home pay after federal and FICA. All salary levels. 100% private.',
  keywords: 'alaska paycheck calculator 2026, alaska take home pay, alaska salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/alaska-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$2,153","$1,971"],["$40,000","$3,333","$2,783","$2,572"],["$50,000","$4,167","$3,360","$3,103"],["$60,000","$5,000","$3,912","$3,612"],["$75,000","$6,250","$4,677","$4,318"],["$100,000","$8,333","$5,958","$5,498"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Alaska have state income tax?","acceptedAnswer":{"@type":"Answer","text":"No. Alaska has no state income tax and no statewide sales tax. Workers only pay federal income tax and FICA."}},{"@type":"Question","name":"How much is $50,000 take-home in Alaska?","acceptedAnswer":{"@type":"Answer","text":"A $50,000 salary in Alaska gives approximately $40,320/year ($3,360/month) after federal taxes and FICA only."}},{"@type":"Question","name":"Are there other taxes in Alaska?","acceptedAnswer":{"@type":"Answer","text":"Alaska has no state income or sales tax, but some municipalities levy local sales taxes. No paycheck withholding beyond federal."}}]}) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › Alaska Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Alaska Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}><strong>No state income tax</strong> in Alaska — only federal income tax and FICA are withheld. Use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: '#d4edda', color: '#1a1a2e', border: '1px solid #28a745', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>No Alaska state income tax in 2026. Only federal withholding applies.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Alaska Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact Alaska paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Does Alaska have state income tax?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>No. Alaska has no state income tax and no statewide sales tax. Workers only pay federal income tax and FICA.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $50,000 take-home in Alaska?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>A $50,000 salary in Alaska gives approximately $40,320/year ($3,360/month) after federal taxes and FICA only.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Are there other taxes in Alaska?</h3><p style={{ color: '#444', lineHeight: 1.7 }}>Alaska has no state income or sales tax, but some municipalities levy local sales taxes. No paycheck withholding beyond federal.</p>
    
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
