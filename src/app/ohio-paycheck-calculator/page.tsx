import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Ohio Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Ohio paycheck calculator 2026. See exact take-home pay after federal + Ohio state tax (2.75%–3.5%) and FICA. All salary levels. 100% private.',
  keywords: 'ohio paycheck calculator 2026, oh take home pay, ohio salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/ohio-paycheck-calculator' },
}

export default function Page() {
  const rows: string[][] = [["$30,000","$2,500","$2,020","$1,864"],["$40,000","$3,333","$2,605","$2,403"],["$50,000","$4,167","$3,148","$2,904"],["$60,000","$5,000","$3,656","$3,373"],["$75,000","$6,250","$4,357","$4,019"],["$100,000","$8,333","$5,540","$5,114"]]
  const thS = 'padding:10px 14px;background:rgba(255,255,255,0.06);color:#b8c8dc;font-size:13px;text-align:left;font-weight:600;border-bottom:1px solid rgba(255,255,255,0.08)'
  const tdS = 'padding:10px 14px;font-size:14px;border-bottom:1px solid rgba(255,255,255,0.05)'
  const faqs: [string,string][] = [["What is Ohio income tax rate 2026?","Ohio has graduated state income tax rates from 2.75% to 3.5% in 2026. The top 3.5% rate applies to income over $115,300."],["How much is $50,000 take-home in Ohio?","Approximately $37,776/year ($3,148/month) after federal, FICA, and OH state tax."],["Does Ohio have local income taxes?","Yes. Many Ohio cities have local income taxes ranging from 1%–3%. Columbus is 2.5%, Cleveland is 2.5%. This calculator shows state tax only."];
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif', background: '#0f0c29', minHeight: '100vh', color: 'white' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Ohio income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"Ohio has graduated state income tax rates from 2.75% to 3.5% in 2026. The top 3.5% rate applies to income over $115,300."}},{"@type":"Question","name":"How much is $50,000 take-home in Ohio?","acceptedAnswer":{"@type":"Answer","text":"Approximately $37,776/year ($3,148/month) after federal, FICA, and OH state tax."}},{"@type":"Question","name":"Does Ohio have local income taxes?","acceptedAnswer":{"@type":"Answer","text":"Yes. Many Ohio cities have local income taxes ranging from 1%–3%. Columbus is 2.5%, Cleveland is 2.5%. This calculator shows state tax only."}}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Ohio Paycheck Calculator","item":"https://www.privatepaycheck.com/ohio-paycheck-calculator"}]}' }} />
      <nav style={{ fontSize: 13, color: '#b8c8dc', marginBottom: 24 }}>
        <a href="/" style={{ color: '#b8c8dc' }}>Home</a> › Ohio Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Ohio Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 16, color: '#c8d4e8', marginBottom: 12 }}>Ohio state income tax: <strong>2.75%–3.5%</strong>. See your exact take-home below. Use the <a href="/" style={{ color: '#F5C842' }}>free paycheck calculator</a> for your exact situation.</p>
      <div style={{ background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.35)', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14, color: '#fde68a' }}>Ohio has graduated rates from 2.75% to 3.5% in 2026.</div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Ohio Take-Home Pay by Salary (Single Filer, 2026)</h2>
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
