import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Utah Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Utah paycheck calculator 2026. See exact take-home pay after federal + Utah state tax (4.55% flat) and FICA. All salary levels. 100% private.',
  keywords: 'utah paycheck calculator 2026, utah take home pay, utah salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/utah-paycheck-calculator' },
}
export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$2,043","$1,886"],["$40,000","$3,333","$2,644","$2,440"],["$50,000","$4,167","$3,194","$2,949"],["$60,000","$5,000","$3,708","$3,423"],["$75,000","$6,250","$4,419","$4,079"],["$100,000","$8,333","$5,630","$5,197"]]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Utah state income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"Utah has a flat 4.55% income tax rate in 2026."}},{"@type":"Question","name":"How much is $50,000 take-home in Utah?","acceptedAnswer":{"@type":"Answer","text":"Approximately $38,328/year ($3,194/month) after federal, FICA, and 4.55% UT state tax."}},{"@type":"Question","name":"Does Utah have a standard deduction?","acceptedAnswer":{"@type":"Answer","text":"Utah offers a non-refundable personal exemption credit rather than a standard deduction, which slightly differs from federal calculations."}}]}) }} />
      <nav style={{ fontSize: 13, color:'#b8c8dc', marginBottom: 24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> › Utah Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Utah Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color:'#c8d4e8', marginBottom: 12 }}>Utah state income tax: <strong>4.55% flat</strong>. See your exact take-home below. Use the <a href="/" style={{ color:'#F5C842' }}>free calculator</a> for your exact situation.</p>
      <div style={{ background: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.4)', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14, color: '#fde68a' }}>Utah state income tax: 4.55% flat in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Utah Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
            <td style={{ padding: '10px 14px', color:'#c8d4e8' }}>{gross}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color:'#F5C842' }}>{net}</td>
            <td style={{ padding: '10px 14px' }}>{bw}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: 'rgba(99,102,241,0.2)', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <a href="/" style={{ color:'#F5C842', fontWeight: 700 }}>Calculate your exact Utah paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>What is Utah state income tax rate 2026?</h3><p style={{ color:'#c8d4e8', lineHeight: 1.7 }}>Utah has a flat 4.55% income tax rate in 2026.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How much is $50,000 take-home in Utah?</h3><p style={{ color:'#c8d4e8', lineHeight: 1.7 }}>Approximately $38,328/year ($3,194/month) after federal, FICA, and 4.55% UT state tax.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Does Utah have a standard deduction?</h3><p style={{ color:'#c8d4e8', lineHeight: 1.7 }}>Utah offers a non-refundable personal exemption credit rather than a standard deduction, which slightly differs from federal calculations.</p>
    
      
      {/* HOW STATE TAX WORKS */}
      <div style={{ background: 'rgba(15,22,41,0.8)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: 12, padding: '28px 32px', marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: '#f1f5f9', marginBottom: 20, letterSpacing: '-0.3px' }}>How Utah Income Tax Works in 2026</h2>
        <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 12, marginBottom: 20 }}>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14, color: '#cbd5e1', lineHeight: 1.6 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>Utah has a flat state income tax rate of 4.55% on all taxable income</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14, color: '#cbd5e1', lineHeight: 1.6 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>No local income tax in Utah cities or counties</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14, color: '#cbd5e1', lineHeight: 1.6 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>FICA applies: Social Security 6.2% + Medicare 1.45%</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14, color: '#cbd5e1', lineHeight: 1.6 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>Simple to estimate: flat rate means no bracket calculations needed</span></li>
          <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14, color: '#cbd5e1', lineHeight: 1.6 }}><span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0 }}>+</span><span>This calculator uses the 2026 Utah flat rate of 4.55%</span></li>
        </ul>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>How much income tax will I pay in Utah?</h3>
        <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7, margin: 0 }}>Utah uses a simple flat income tax of 4.55%, making it easy to predict your state tax bill. Combined with federal tax (10–22% for most earners) and FICA (7.65%), total withholding on a $60,000 salary is typically around 24–27%.</p>
      </div>
      <div style={{ borderTop: '2px solid #e5e7eb', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Compare Other States</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 8, marginBottom: 24 }}>
          {([['California','california'],['Texas','texas'],['Florida','florida'],['New York','new-york'],['Illinois','illinois'],['Washington','washington'],['Nevada','nevada'],['Arizona','arizona'],['Colorado','colorado'],['Pennsylvania','pennsylvania']] as [string,string][]).map(([n,s]) => (
            <a key={s} href={"/" + s + "-paycheck-calculator"} style={{ display:'block', padding:'8px 12px', background:'rgba(99,102,241,0.15)', border:'1px solid rgba(99,102,241,0.3)', borderRadius:6, fontSize:13, fontWeight:600, color:'#818cf8', textDecoration:'none' }}>{n} Calculator</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
          <a href="/" style={{ color:'#F5C842', fontSize: 14 }}>Free Paycheck Calculator</a>
          <a href="/blog" style={{ color:'#F5C842', fontSize: 14 }}>Tax & Paycheck Blog</a>
          <a href="/blog/no-income-tax-states-2026" style={{ color:'#F5C842', fontSize: 14 }}>No Income Tax States</a>
          <a href="/blog/2026-federal-tax-brackets" style={{ color:'#F5C842', fontSize: 14 }}>2026 Tax Brackets</a>
        </div>
      </div>
    </main>
  )
}
