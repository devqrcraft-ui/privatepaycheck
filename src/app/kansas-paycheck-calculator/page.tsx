import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Kansas Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Kansas paycheck calculator 2026. See exact take-home pay after federal + Kansas state tax (up to 5.7%) and FICA. All salary levels. Free & private.',
  keywords: 'kansas paycheck calculator 2026, ks take home pay, kansas salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/kansas-paycheck-calculator' },
}

export default function Page() {
  return (
    <main style={{ maxWidth:860, margin:'0 auto', padding:'48px 24px', fontFamily:'system-ui,sans-serif', background:'#0f0c29', minHeight:'100vh', color:'white' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Kansas income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"Kansas top income tax rate is 5.7% in 2026 (3.1%–5.7% (3 brackets))."}},{"@type":"Question","name":"How much is $50,000 take-home in Kansas?","acceptedAnswer":{"@type":"Answer","text":"Approximately $3,093/month after federal, FICA, and KS state tax."}},{"@type":"Question","name":"Does Kansas tax retirement income?","acceptedAnswer":{"@type":"Answer","text":"Kansas exempts Social Security benefits for residents with income under $75,000."}},{"@type":"Question","name":"How is Kansas paycheck calculated?","acceptedAnswer":{"@type":"Answer","text":"Your Kansas paycheck is reduced by federal income tax (10%–37%), FICA (7.65%), and Kansas state income tax (3.1%–5.7% (3 brackets)). Use the free calculator for your exact number."}},{"@type":"Question","name":"Is Kansas a tax-friendly state?","acceptedAnswer":{"@type":"Answer","text":"Kansas has a 5.7% income tax rate. Compare with neighboring states using the links below."}}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Kansas Paycheck Calculator","item":"https://www.privatepaycheck.com/kansas-paycheck-calculator"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Kansas Paycheck Calculator 2026","datePublished":"2026-05-15","dateModified":"2026-06-01","author":{"@type":"Person","name":"Ethan Blake"},"reviewedBy":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"PrivatePaycheck"},"mainEntityOfPage":"https://www.privatepaycheck.com/kansas-paycheck-calculator"}' }} />

      <nav style={{ fontSize:13, color:'#b8c8dc', marginBottom:24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> › Kansas Paycheck Calculator
      </nav>

      <h1 style={{ fontSize:34, fontWeight:900, marginBottom:8 }}>Kansas Paycheck Calculator 2026</h1>
      <div style={{ fontSize:12, color:'rgba(255,255,255,0.65)', marginBottom:16 }}>
        Last updated: June 2026 · By Ethan Blake · Tax Compliance Specialist · 4 min read
      </div>

      <div style={{ background:'rgba(245,200,66,0.07)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:12, padding:'16px 20px', marginBottom:24 }}>
        <div style={{ fontWeight:800, color:'#F5C842', marginBottom:8, fontSize:13 }}>QUICK ANSWER</div>
        <p style={{ fontSize:14, lineHeight:1.8, margin:0, color:'rgba(255,255,255,0.85)' }}>
          Kansas state income tax is 5.7% (3.1%–5.7% (3 brackets)) in 2026. A worker earning $50,000 takes home about $3,093/month after federal, FICA, and KS state tax.
        </p>
      </div>

      <div style={{ background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.25)', borderRadius:8, padding:'16px 20px', marginBottom:28 }}>
        <div style={{ fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13 }}>KEY TAKEAWAYS</div>
        <ul style={{ margin:0, padding:'0 0 0 18px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)' }}>
          <li>Kansas state income tax: <strong>3.1%–5.7% (3 brackets)</strong></li>
          <li>A $50,000 salary nets roughly <strong>$3,093/month</strong> after all taxes</li>
          <li>FICA (Social Security 6.2% + Medicare 1.45%) applies to all Kansas workers</li>
          <li>Kansas exempts Social Security benefits for residents with income under $75,000.</li>
          <li>SS wage base: <strong>$184,500</strong> | Standard deduction: <strong>$16,100</strong> (single, 2026)</li>
        </ul>
      </div>

      <h2 style={{ fontSize:22, fontWeight:800, marginBottom:12 }}>How much is take-home pay in Kansas in 2026?</h2>
      <div style={{ overflowX:'auto', marginBottom:32, borderRadius:6, border:'1px solid rgba(255,255,255,0.08)' }}>
        <table style={{ width:'100%', borderCollapse:'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding:'10px 14px', background:'rgba(255,255,255,0.06)', color:'#b8c8dc', fontSize:13, textAlign:'left', fontWeight:600, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>Annual Salary</th>
              <th style={{ padding:'10px 14px', background:'rgba(255,255,255,0.06)', color:'#b8c8dc', fontSize:13, textAlign:'left', fontWeight:600, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>Monthly Gross</th>
              <th style={{ padding:'10px 14px', background:'rgba(255,255,255,0.06)', color:'#b8c8dc', fontSize:13, textAlign:'left', fontWeight:600, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>Monthly Take-Home</th>
              <th style={{ padding:'10px 14px', background:'rgba(255,255,255,0.06)', color:'#b8c8dc', fontSize:13, textAlign:'left', fontWeight:600, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>Biweekly Take-Home</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>$30,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>$2,500</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>$1,971</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>$1,820</td>
          </tr>
          <tr>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>$40,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>$3,333</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>$2,557</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>$2,361</td>
          </tr>
          <tr>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>$50,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>$4,167</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>$3,093</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>$2,856</td>
          </tr>
          <tr>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>$60,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>$5,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>$3,589</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>$3,314</td>
          </tr>
          <tr>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>$75,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>$6,250</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>$4,274</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>$3,945</td>
          </tr>
          <tr>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>$100,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>$8,333</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>$5,445</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>$5,026</td>
          </tr>
            <tr>
              <td colSpan={4} style={{ padding:'10px 14px', fontSize:13, background:'rgba(245,200,66,0.08)', borderTop:'1px solid rgba(245,200,66,0.3)', color:'#F5C842', fontWeight:700 }}>
                Use the <a href="/" style={{ color:'#F5C842' }}>free calculator</a> for your exact Kansas take-home pay
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ background:'rgba(15,22,41,0.9)', border:'1px solid rgba(245,200,66,0.15)', borderRadius:12, padding:'20px 24px', marginBottom:32 }}>
        <h2 style={{ fontSize:20, fontWeight:800, color:'#f8fafc', marginBottom:12 }}>How Kansas Income Tax Works in 2026</h2>
        <ul style={{ margin:0, padding:'0 0 0 18px', fontSize:14, color:'rgba(255,255,255,0.80)', lineHeight:1.8 }}>
          <li>Progressive tax: 3.1%–5.7% (3 brackets) — higher income = higher bracket</li>
          <li>FICA: Social Security 6.2% (up to $184,500 wage base) + Medicare 1.45%</li>
          <li>2026 standard deduction: $16,100 (single) / $32,200 (married filing jointly)</li>
          <li>This calculator uses 2026 IRS Publication 15-T tables and Kansas 2026 withholding rates</li>
        </ul>
        <div style={{ marginTop:12, padding:'10px 14px', background:'rgba(245,200,66,0.06)', borderRadius:8, fontSize:13, color:'#fde68a' }}>
          Kansas state income tax: <strong>up to 5.7%</strong> · FICA: 7.65% · SS wage base: $184,500
        </div>
      </div>

      <p style={{ fontSize:13, color:'rgba(255,255,255,0.65)', marginBottom:24, lineHeight:1.7 }}>
        Source: <a href="https://www.irs.gov/pub/irs-pdf/p15t.pdf" rel="nofollow" target="_blank" style={{ color:'#F5C842' }}>IRS Publication 15-T (2026)</a> · Federal brackets, FICA rates, and Kansas state withholding tables
      </p>

      <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'24px', marginBottom:24 }}>
        <h2 style={{ fontSize:18, fontWeight:800, marginBottom:16 }}>Kansas Paycheck FAQ</h2>
        
          <div style={{ marginBottom:'14px', paddingBottom:'14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'5px', color:'#F5C842' }}>What is Kansas income tax rate 2026?</h3>
            <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.75)', lineHeight:1.7, margin:0 }}>Kansas top income tax rate is 5.7% in 2026 (3.1%–5.7% (3 brackets)).</p>
          </div>
          <div style={{ marginBottom:'14px', paddingBottom:'14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'5px', color:'#F5C842' }}>How much is $50,000 take-home in Kansas?</h3>
            <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.75)', lineHeight:1.7, margin:0 }}>Approximately $3,093/month after federal, FICA, and KS state tax.</p>
          </div>
          <div style={{ marginBottom:'14px', paddingBottom:'14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'5px', color:'#F5C842' }}>Does Kansas tax retirement income?</h3>
            <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.75)', lineHeight:1.7, margin:0 }}>Kansas exempts Social Security benefits for residents with income under $75,000.</p>
          </div>
          <div style={{ marginBottom:'14px', paddingBottom:'14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'5px', color:'#F5C842' }}>How is Kansas paycheck calculated?</h3>
            <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.75)', lineHeight:1.7, margin:0 }}>Your Kansas paycheck is reduced by federal income tax (10%–37%), FICA (7.65%), and Kansas state income tax (3.1%–5.7% (3 brackets)). Use the free calculator for your exact number.</p>
          </div>
          <div style={{ marginBottom:'14px', paddingBottom:'14px', borderBottom: 'none' }}>
            <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'5px', color:'#F5C842' }}>Is Kansas a tax-friendly state?</h3>
            <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.75)', lineHeight:1.7, margin:0 }}>Kansas has a 5.7% income tax rate. Compare with neighboring states using the links below.</p>
          </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:12, marginBottom:32 }}>
        <a href="/all-states" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>All States Calculator</div>
          <div style={{ fontSize:11, color:'rgba(255,255,255,0.65)', marginTop:4 }}>Compare all 50 states →</div>
        </a>
        <a href="/missouri-paycheck-calculator" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>Missouri Paycheck Calculator</div>
          <div style={{ fontSize:11, opacity:0.7, marginTop:4 }}>Missouri take-home 2026 →</div>
        </a>
        <a href="/oklahoma-paycheck-calculator" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>Oklahoma Paycheck Calculator</div>
          <div style={{ fontSize:11, opacity:0.7, marginTop:4 }}>Oklahoma take-home 2026 →</div>
        </a>
        <a href="/nebraska-paycheck-calculator" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>Nebraska Paycheck Calculator</div>
          <div style={{ fontSize:11, opacity:0.7, marginTop:4 }}>Nebraska take-home 2026 →</div>
        </a>
        <a href="/colorado-paycheck-calculator" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>Colorado Paycheck Calculator</div>
          <div style={{ fontSize:11, opacity:0.7, marginTop:4 }}>Colorado take-home 2026 →</div>
        </a>
      </div>

      <AuthorBox />
    </main>
  )
}
