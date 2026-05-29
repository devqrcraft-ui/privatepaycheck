import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Illinois Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Illinois paycheck calculator 2026. See exact take-home pay after federal + Illinois state tax (4.95% flat) and FICA. All salary levels. 100% private.',
  keywords: 'illinois paycheck calculator 2026, il take home pay, illinois salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/illinois-paycheck-calculator' },
}

export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$1,982","$1,829"],["$40,000","$3,333","$2,562","$2,363"],["$50,000","$4,167","$3,096","$2,856"],["$60,000","$5,000","$3,596","$3,317"],["$75,000","$6,250","$4,284","$3,953"],["$100,000","$8,333","$5,450","$5,030"]]
  const thS = 'padding:10px 14px;background:rgba(255,255,255,0.06);color:#b8c8dc;font-size:13px;text-align:left;font-weight:600;border-bottom:1px solid rgba(255,255,255,0.08)'
  const tdS = 'padding:10px 14px;font-size:14px;border-bottom:1px solid rgba(255,255,255,0.05)'
  const faqs: [string,string][] = [["What is Illinois income tax rate 2026?","Illinois has a flat 4.95% state income tax rate that applies to all income levels equally."],["How much is $50,000 take-home in Illinois?","Approximately $37,152/year ($3,096/month) after federal, FICA, and IL state tax (4.95% flat)."],["Does Illinois tax retirement income?","Illinois does not tax most retirement income including Social Security, pensions, and 401(k) distributions."]];
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif', background: '#0f0c29', minHeight: '100vh', color: 'white' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Illinois income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"Illinois has a flat 4.95% state income tax rate that applies to all income levels equally."}},{"@type":"Question","name":"How much is $50,000 take-home in Illinois?","acceptedAnswer":{"@type":"Answer","text":"Approximately $37,152/year ($3,096/month) after federal, FICA, and IL state tax (4.95% flat)."}},{"@type":"Question","name":"Does Illinois tax retirement income?","acceptedAnswer":{"@type":"Answer","text":"Illinois does not tax most retirement income including Social Security, pensions, and 401(k) distributions."}}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Illinois Paycheck Calculator","item":"https://www.privatepaycheck.com/illinois-paycheck-calculator"}]}' }} />
      <nav style={{ fontSize: 13, color: '#b8c8dc', marginBottom: 24 }}>
        <a href="/" style={{ color: '#b8c8dc' }}>Home</a> › Illinois Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Illinois Paycheck Calculator 2026</h1>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginBottom: 12 }}>Last updated: May 2026 · By Ethan Blake · Tax Compliance Specialist</div>
      <p style={{ fontSize: 16, color: '#c8d4e8', marginBottom: 12 }}>Illinois state income tax: <strong>4.95% flat</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#F5C842' }}>free paycheck calculator</a> for your exact situation.</p>
      <div style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.25)', borderRadius: 8, padding: '16px 20px', marginBottom: 28 }}>
        <div style={{ fontWeight: 800, color: '#F5C842', marginBottom: 10, fontSize: 13 }}>✅ KEY TAKEAWAYS</div>
        <ul style={{ margin: 0, padding: '0 0 0 18px', fontSize: 14, lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
          <li>Illinois has a <strong>flat 4.95%</strong> state income tax — same rate for all income levels</li>
          <li>A $50,000 salary nets roughly <strong>$3,096/month</strong> after federal, state, and FICA taxes</li>
          <li>Illinois does <strong>not</strong> tax Social Security, pensions, or 401(k) distributions</li>
          <li>FICA (Social Security 6.2% + Medicare 1.45%) applies to all Illinois workers</li>
          <li>No local income tax in most Illinois cities outside Chicago</li>
        </ul>
      </div>
      <div style={{ background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.35)', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14, color: '#fde68a' }}>Illinois has a flat 4.95% income tax rate for all income levels.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Illinois Take-Home Pay by Salary (Single Filer, 2026)</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead>
          <tr>
            <th style={{ padding:'10px 14px', background:'rgba(255,255,255,0.06)', color:'#b8c8dc', fontSize:13, textAlign:'left', fontWeight:600, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>Annual Salary</th>
            <th style={{ padding:'10px 14px', background:'rgba(255,255,255,0.06)', color:'#b8c8dc', fontSize:13, textAlign:'left', fontWeight:600, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>Monthly Gross</th>
            <th style={{ padding:'10px 14px', background:'rgba(255,255,255,0.06)', color:'#b8c8dc', fontSize:13, textAlign:'left', fontWeight:600, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>Monthly Take-Home</th>
            <th style={{ padding:'10px 14px', background:'rgba(255,255,255,0.06)', color:'#b8c8dc', fontSize:13, textAlign:'left', fontWeight:600, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>Biweekly Take-Home</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([sal, mo, takeMo, takeBi]) => (
            <tr key={sal}>
              <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>{sal}</td>
              <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>{mo}</td>
              <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>{takeMo}</td>
              <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>{takeBi}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>Frequently Asked Questions</h2>
      {faqs.map(([q,a]:[string,string]) => (
        <div key={q} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: 14, marginBottom: 14 }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{q}</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75 }}>{a}</div>
        </div>
      ))}
      <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 12 }}>
        <a href="/california-paycheck-calculator" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>California Paycheck Calculator</div>
          <div style={{ fontSize:11, opacity:0.7, marginTop:4 }}>Highest tax state 2026 →</div>
        </a>
        <a href="/texas-paycheck-calculator-guide" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>Texas Paycheck Calculator</div>
          <div style={{ fontSize:11, opacity:0.7, marginTop:4 }}>No state income tax →</div>
        </a>
        <a href="/federal-paycheck-calculator" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>Federal Paycheck Calculator</div>
          <div style={{ fontSize:11, opacity:0.7, marginTop:4 }}>All 50 states →</div>
        </a>
      </div>
      <AuthorBox />
    </main>
  )
}
