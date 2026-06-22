import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Missouri Paycheck Calculator 2026 — Take-Home Pay After Taxes',
  description: 'Missouri paycheck calculator 2026. See exact take-home pay after federal + Missouri state tax (up to 4.95%) and FICA. All salary levels. Free & private.',
  keywords: 'missouri paycheck calculator 2026, mo take home pay, missouri salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/missouri-paycheck-calculator' },
}

export default function Page() {
  return (
    <main style={{ maxWidth:860, margin:'0 auto', padding:'48px 24px', fontFamily:'system-ui,sans-serif', background:'#0f0c29', minHeight:'100vh', color:'white' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Missouri income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"Missouri top income tax rate is 4.95% in 2026 (2%–4.95% (6 brackets))."}},{"@type":"Question","name":"How much is $50,000 take-home in Missouri?","acceptedAnswer":{"@type":"Answer","text":"Approximately $3,127/month after federal, FICA, and MO state tax."}},{"@type":"Question","name":"Does Missouri tax retirement income?","acceptedAnswer":{"@type":"Answer","text":"Missouri offers a Social Security deduction for residents with adjusted gross income under $100,000."}},{"@type":"Question","name":"How is Missouri paycheck calculated?","acceptedAnswer":{"@type":"Answer","text":"Your Missouri paycheck is reduced by federal income tax (10%–37%), FICA (7.65%), and Missouri state income tax (2%–4.95% (6 brackets)). Use the free calculator for your exact number."}},{"@type":"Question","name":"Is Missouri a tax-friendly state?","acceptedAnswer":{"@type":"Answer","text":"Missouri has a 4.95% income tax rate. Compare with neighboring states using the links below."}}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Missouri Paycheck Calculator","item":"https://www.privatepaycheck.com/missouri-paycheck-calculator"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Missouri Paycheck Calculator 2026","datePublished":"2026-05-15","dateModified":"2026-06-01","author":{"@type":"Person","name":"Ethan Blake"},"reviewedBy":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"PrivatePaycheck"},"mainEntityOfPage":"https://www.privatepaycheck.com/missouri-paycheck-calculator"}' }} />

      <nav style={{ fontSize:13, color:'#b8c8dc', marginBottom:24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> › Missouri Paycheck Calculator
      </nav>

      <h1 style={{ fontSize:34, fontWeight:900, marginBottom:8 }}>Missouri Paycheck Calculator 2026</h1>
      <div style={{ fontSize:12, color:'rgba(255,255,255,0.65)', marginBottom:16 }}>
        Last updated: June 2026 · By Ethan Blake · Tax Compliance Specialist · 4 min read
      </div>

      <div style={{ background:'rgba(245,200,66,0.07)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:12, padding:'16px 20px', marginBottom:24 }}>
        <div style={{ fontWeight:800, color:'#F5C842', marginBottom:8, fontSize:13 }}>QUICK ANSWER</div>
        <p style={{ fontSize:14, lineHeight:1.8, margin:0, color:'rgba(255,255,255,0.85)' }}>
          Missouri state income tax is 4.95% (2%–4.95% (6 brackets)) in 2026. A worker earning $50,000 takes home about $3,127/month after federal, FICA, and MO state tax.
        </p>
      </div>

      <div style={{ background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.25)', borderRadius:8, padding:'16px 20px', marginBottom:28 }}>
        <div style={{ fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13 }}>KEY TAKEAWAYS</div>
        <ul style={{ margin:0, padding:'0 0 0 18px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)' }}>
          <li>Missouri state income tax: <strong>2%–4.95% (6 brackets)</strong></li>
          <li>A $50,000 salary nets roughly <strong>$3,127/month</strong> after all taxes</li>
          <li>FICA (Social Security 6.2% + Medicare 1.45%) applies to all Missouri workers</li>
          <li>Missouri offers a Social Security deduction for residents with adjusted gross income under $100,000.</li>
          <li>SS wage base: <strong>$184,500</strong> | Standard deduction: <strong>$16,100</strong> (single, 2026)</li>
        </ul>
      </div>

      <h2 style={{ fontSize:22, fontWeight:800, marginBottom:12 }}>How much is take-home pay in Missouri in 2026?</h2>
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
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>$1,988</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>$1,835</td>
          </tr>
          <tr>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>$40,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>$3,333</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>$2,581</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>$2,383</td>
          </tr>
          <tr>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>$50,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>$4,167</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>$3,127</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>$2,888</td>
          </tr>
          <tr>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>$60,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>$5,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>$3,633</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>$3,354</td>
          </tr>
          <tr>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>$75,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>$6,250</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>$4,330</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>$3,997</td>
          </tr>
          <tr>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>$100,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>$8,333</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>$5,519</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>$5,094</td>
          </tr>
            <tr>
              <td colSpan={4} style={{ padding:'10px 14px', fontSize:13, background:'rgba(245,200,66,0.08)', borderTop:'1px solid rgba(245,200,66,0.3)', color:'#F5C842', fontWeight:700 }}>
                Use the <a href="/" style={{ color:'#F5C842' }}>free calculator</a> for your exact Missouri take-home pay
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ background:'rgba(15,22,41,0.9)', border:'1px solid rgba(245,200,66,0.15)', borderRadius:12, padding:'20px 24px', marginBottom:32 }}>
        <h2 style={{ fontSize:20, fontWeight:800, color:'#f8fafc', marginBottom:12 }}>How Missouri Income Tax Works in 2026</h2>
        <ul style={{ margin:0, padding:'0 0 0 18px', fontSize:14, color:'rgba(255,255,255,0.80)', lineHeight:1.8 }}>
          <li>Progressive tax: 2%–4.95% (6 brackets) — higher income = higher bracket</li>
          <li>FICA: Social Security 6.2% (up to $184,500 wage base) + Medicare 1.45%</li>
          <li>2026 standard deduction: $16,100 (single) / $32,200 (married filing jointly)</li>
          <li>This calculator uses 2026 IRS Publication 15-T tables and Missouri 2026 withholding rates</li>
        </ul>
        <div style={{ marginTop:12, padding:'10px 14px', background:'rgba(245,200,66,0.06)', borderRadius:8, fontSize:13, color:'#fde68a' }}>
          Missouri state income tax: <strong>up to 4.95%</strong> · FICA: 7.65% · SS wage base: $184,500
        </div>
      </div>

      <p style={{ fontSize:13, color:'rgba(255,255,255,0.65)', marginBottom:24, lineHeight:1.7 }}>
        Source: <a href="https://www.irs.gov/pub/irs-pdf/p15t.pdf" rel="nofollow" target="_blank" style={{ color:'#F5C842' }}>IRS Publication 15-T (2026)</a> · Federal brackets, FICA rates, and Missouri state withholding tables
      </p>

      <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'24px', marginBottom:24 }}>
        <h2 style={{ fontSize:18, fontWeight:800, marginBottom:16 }}>Missouri Paycheck FAQ</h2>
        
          <div style={{ marginBottom:'14px', paddingBottom:'14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'5px', color:'#F5C842' }}>What is Missouri income tax rate 2026?</h3>
            <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.75)', lineHeight:1.7, margin:0 }}>Missouri top income tax rate is 4.95% in 2026 (2%–4.95% (6 brackets)).</p>
          </div>
          <div style={{ marginBottom:'14px', paddingBottom:'14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'5px', color:'#F5C842' }}>How much is $50,000 take-home in Missouri?</h3>
            <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.75)', lineHeight:1.7, margin:0 }}>Approximately $3,127/month after federal, FICA, and MO state tax.</p>
          </div>
          <div style={{ marginBottom:'14px', paddingBottom:'14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'5px', color:'#F5C842' }}>Does Missouri tax retirement income?</h3>
            <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.75)', lineHeight:1.7, margin:0 }}>Missouri offers a Social Security deduction for residents with adjusted gross income under $100,000.</p>
          </div>
          <div style={{ marginBottom:'14px', paddingBottom:'14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'5px', color:'#F5C842' }}>How is Missouri paycheck calculated?</h3>
            <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.75)', lineHeight:1.7, margin:0 }}>Your Missouri paycheck is reduced by federal income tax (10%–37%), FICA (7.65%), and Missouri state income tax (2%–4.95% (6 brackets)). Use the free calculator for your exact number.</p>
          </div>
          <div style={{ marginBottom:'14px', paddingBottom:'14px', borderBottom: 'none' }}>
            <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'5px', color:'#F5C842' }}>Is Missouri a tax-friendly state?</h3>
            <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.75)', lineHeight:1.7, margin:0 }}>Missouri has a 4.95% income tax rate. Compare with neighboring states using the links below.</p>
          </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:12, marginBottom:32 }}>
        <a href="/all-states" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>All States Calculator</div>
          <div style={{ fontSize:11, color:'rgba(255,255,255,0.65)', marginTop:4 }}>Compare all 50 states →</div>
        </a>
        <a href="/kansas-paycheck-calculator" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>Kansas Paycheck Calculator</div>
          <div style={{ fontSize:11, opacity:0.7, marginTop:4 }}>Kansas take-home 2026 →</div>
        </a>
        <a href="/illinois-paycheck-calculator" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>Illinois Paycheck Calculator</div>
          <div style={{ fontSize:11, opacity:0.7, marginTop:4 }}>Illinois take-home 2026 →</div>
        </a>
        <a href="/arkansas-paycheck-calculator" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>Arkansas Paycheck Calculator</div>
          <div style={{ fontSize:11, opacity:0.7, marginTop:4 }}>Arkansas take-home 2026 →</div>
        </a>
        <a href="/tennessee-paycheck-calculator" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>Tennessee Paycheck Calculator</div>
          <div style={{ fontSize:11, opacity:0.7, marginTop:4 }}>Tennessee take-home 2026 →</div>
        </a>
      </div>

      <AuthorBox />
    </main>
  )
}
