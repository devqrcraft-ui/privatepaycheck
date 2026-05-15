import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Arizona Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'Arizona paycheck calculator 2026. See exact take-home pay after federal + Arizona state tax (2.5%) and FICA. All salary levels. Free & private.',
  keywords: 'arizona paycheck calculator 2026, az take home pay, arizona salary after taxes',
  alternates: { canonical: 'https://www.privatepaycheck.com/arizona-paycheck-calculator' },
}

export default function Page() {
  return (
    <main style={{ maxWidth:860, margin:'0 auto', padding:'48px 24px', fontFamily:'system-ui,sans-serif', background:'#0f0c29', minHeight:'100vh', color:'white' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Arizona income tax rate 2026?","acceptedAnswer":{"@type":"Answer","text":"Flat rate: 2.5% on all income."}},{"@type":"Question","name":"How much is $50,000 take-home in Arizona?","acceptedAnswer":{"@type":"Answer","text":"Approximately $3,134/month ($37,608/year) after federal, FICA, and AZ state tax."}},{"@type":"Question","name":"Does Arizona tax retirement income?","acceptedAnswer":{"@type":"Answer","text":"Arizona does not tax Social Security income. Up to $2,500 of federal, state, and local government pensions may be subtracted."}},{"@type":"Question","name":"How is Arizona paycheck calculated?","acceptedAnswer":{"@type":"Answer","text":"Your Arizona paycheck is reduced by federal income tax (10%–37% brackets), FICA (7.65%), and AZ state income tax (2.5%). Use the calculator at privatepaycheck.com for your exact number."}},{"@type":"Question","name":"Is Arizona a tax-friendly state?","acceptedAnswer":{"@type":"Answer","text":"Arizona is moderately tax-friendly with a flat 2.5% rate for all income levels."}}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Arizona Paycheck Calculator","item":"https://www.privatepaycheck.com/arizona-paycheck-calculator"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Arizona Paycheck Calculator 2026","datePublished":"2026-05-15","dateModified":"2026-05-15","author":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"PrivatePaycheck"},"mainEntityOfPage":"https://www.privatepaycheck.com/arizona-paycheck-calculator"}' }} />

      <nav style={{ fontSize:13, color:'#b8c8dc', marginBottom:24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> › Arizona Paycheck Calculator
      </nav>

      <h1 style={{ fontSize:34, fontWeight:900, marginBottom:8 }}>Arizona Paycheck Calculator 2026</h1>
      <div style={{ fontSize:12, color:'rgba(255,255,255,0.45)', marginBottom:16 }}>
        Last updated: May 2026 · By Ethan Blake · Tax Compliance Specialist
      </div>

      {/* Answer-First */}
      <div style={{ background:'rgba(245,200,66,0.07)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:12, padding:'16px 20px', marginBottom:24 }}>
        <div style={{ fontWeight:800, color:'#F5C842', marginBottom:8, fontSize:13 }}>QUICK ANSWER</div>
        <p style={{ fontSize:14, lineHeight:1.8, margin:0, color:'rgba(255,255,255,0.85)' }}>
          Arizona has a flat 2.5% state income tax in 2026 — among the lowest flat rates in the US. A worker earning $50,000 takes home about $3,134/month. Social Security is fully exempt from Arizona state tax.
        </p>
      </div>

      {/* Key Takeaways */}
      <div style={{ background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.25)', borderRadius:8, padding:'16px 20px', marginBottom:28 }}>
        <div style={{ fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13 }}>✅ KEY TAKEAWAYS</div>
        <ul style={{ margin:0, padding:'0 0 0 18px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)' }}>
        <li dangerouslySetInnerHTML={{ __html: 'Arizona has a <strong>flat 2.5%</strong> state income tax — one of the lowest in the nation in 2026' }} />
        <li dangerouslySetInnerHTML={{ __html: 'A $50,000 salary nets roughly <strong>$3,134/month</strong> after federal, state, and FICA taxes' }} />
        <li dangerouslySetInnerHTML={{ __html: 'Social Security income is <strong>fully exempt</strong> from Arizona state tax' }} />
        <li dangerouslySetInnerHTML={{ __html: 'FICA (Social Security 6.2% + Medicare 1.45%) applies to all Arizona workers' }} />
        <li dangerouslySetInnerHTML={{ __html: 'Arizona is one of the most tax-friendly states for workers and retirees alike' }} />
        </ul>
      </div>

      <h2 style={{ fontSize:22, fontWeight:800, marginBottom:12 }}>Arizona Take-Home Pay by Salary (Single Filer, 2026)</h2>
      <table style={{ width:'100%', borderCollapse:'collapse', marginBottom:32 }}>
        <thead>
          <tr>
            <th style={{ padding:'10px 14px', background:'rgba(255,255,255,0.06)', color:'#b8c8dc', fontSize:13, textAlign:'left', fontWeight:600, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>Annual Salary</th>
            <th style={{ padding:'10px 14px', background:'rgba(255,255,255,0.06)', color:'#b8c8dc', fontSize:13, textAlign:'left', fontWeight:600, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>Monthly Gross</th>
            <th style={{ padding:'10px 14px', background:'rgba(255,255,255,0.06)', color:'#b8c8dc', fontSize:13, textAlign:'left', fontWeight:600, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>Monthly Take-Home</th>
            <th style={{ padding:'10px 14px', background:'rgba(255,255,255,0.06)', color:'#b8c8dc', fontSize:13, textAlign:'left', fontWeight:600, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>Biweekly Take-Home</th>
          </tr>
        </thead>
        <tbody>
          <tr key="$30,000">
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>$30,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>$2,500</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>$2,007</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>$1,852</td>
          </tr>
          <tr key="$40,000">
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>$40,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>$3,333</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>$2,596</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>$2,397</td>
          </tr>
          <tr key="$50,000">
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>$50,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>$4,167</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>$3,134</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>$2,893</td>
          </tr>
          <tr key="$60,000">
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>$60,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>$5,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>$3,639</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>$3,359</td>
          </tr>
          <tr key="$75,000">
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>$75,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>$6,250</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>$4,343</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>$4,009</td>
          </tr>
          <tr key="$100,000">
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>$100,000</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>$8,333</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>$5,521</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>$5,097</td>
          </tr>
        </tbody>
      </table>

      <div style={{ background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:8, padding:'14px 18px', marginBottom:32, fontSize:14 }}>
        <a href="/" style={{ color:'#F5C842', fontWeight:700 }}>Calculate your exact Arizona paycheck →</a>
        <span style={{ fontSize:12, color:'rgba(255,255,255,0.45)', marginLeft:12 }}>Enter your salary for a precise number</span>
      </div>

      {/* How it works */}
      <div style={{ background:'rgba(15,22,41,0.9)', border:'1px solid rgba(245,200,66,0.15)', borderRadius:12, padding:'20px 24px', marginBottom:32 }}>
        <h2 style={{ fontSize:20, fontWeight:800, color:'#f8fafc', marginBottom:12 }}>How Arizona Income Tax Works in 2026</h2>
        <p style={{ fontSize:14, color:'rgba(255,255,255,0.8)', lineHeight:1.8, margin:0 }}>Arizona has a flat 2.5% income tax rate as of 2023 — one of the lowest flat rates in the US. Social Security is fully exempt. Arizona is attractive for retirees and workers looking to minimize state tax burden.</p>
        <div style={{ marginTop:12, padding:'10px 14px', background:'rgba(245,200,66,0.06)', borderRadius:8, fontSize:13, color:'#fde68a' }}>
          Arizona state income tax: <strong>2.5%</strong> · FICA: 7.65% · SS wage base: $184,500
        </div>
      </div>

      {/* FAQ */}
      <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'24px', marginBottom:24 }}>
        <h2 style={{ fontSize:18, fontWeight:800, marginBottom:16 }}>Arizona Paycheck FAQ</h2>
          <div key={0} style={{ marginBottom:'14px', paddingBottom:'14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'5px', color:'#F5C842' }}>What is Arizona income tax rate 2026?</h3>
            <p style={{ fontSize:'13px', opacity:0.75, lineHeight:1.7, margin:0 }}>Flat rate: 2.5% on all income.</p>
          </div>
          <div key={1} style={{ marginBottom:'14px', paddingBottom:'14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'5px', color:'#F5C842' }}>How much is $50,000 take-home in Arizona?</h3>
            <p style={{ fontSize:'13px', opacity:0.75, lineHeight:1.7, margin:0 }}>Approximately $3,134/month ($37,608/year) after federal, FICA, and AZ state tax.</p>
          </div>
          <div key={2} style={{ marginBottom:'14px', paddingBottom:'14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'5px', color:'#F5C842' }}>Does Arizona tax retirement income?</h3>
            <p style={{ fontSize:'13px', opacity:0.75, lineHeight:1.7, margin:0 }}>Arizona does not tax Social Security income. Up to $2,500 of federal, state, and local government pensions may be subtracted.</p>
          </div>
          <div key={3} style={{ marginBottom:'14px', paddingBottom:'14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'5px', color:'#F5C842' }}>How is Arizona paycheck calculated?</h3>
            <p style={{ fontSize:'13px', opacity:0.75, lineHeight:1.7, margin:0 }}>Your Arizona paycheck is reduced by federal income tax (10%–37% brackets), FICA (7.65%), and AZ state income tax (2.5%). Use the calculator at privatepaycheck.com for your exact number.</p>
          </div>
          <div key={4} style={{ marginBottom:'14px', paddingBottom:'14px', borderBottom: 'none' }}>
            <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'5px', color:'#F5C842' }}>Is Arizona a tax-friendly state?</h3>
            <p style={{ fontSize:'13px', opacity:0.75, lineHeight:1.7, margin:0 }}>Arizona is moderately tax-friendly with a flat 2.5% rate for all income levels.</p>
          </div>
      </div>

      {/* External link E-E-A-T */}
      <p style={{ fontSize:13, color:'rgba(255,255,255,0.5)', marginBottom:24, lineHeight:1.7 }}>
        Source: <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{ color:'#F5C842' }}>IRS.gov Tax Center</a> · 2026 federal brackets + state withholding tables
      </p>

      {/* Related Articles */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:12, marginBottom:32 }}>
        <a href="/all-states" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>All States Calculator</div>
          <div style={{ fontSize:11, opacity:0.7, marginTop:4 }}>Compare all 50 states →</div>
        </a>
        <a href="/nevada-paycheck-calculator" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>Nevada Paycheck Calculator</div>
          <div style={{ fontSize:11, opacity:0.7, marginTop:4 }}>Nevada take-home 2026 →</div>
        </a>
        <a href="/colorado-paycheck-calculator" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>Colorado Paycheck Calculator</div>
          <div style={{ fontSize:11, opacity:0.7, marginTop:4 }}>Colorado take-home 2026 →</div>
        </a>
        <a href="/utah-paycheck-calculator" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>Utah Paycheck Calculator</div>
          <div style={{ fontSize:11, opacity:0.7, marginTop:4 }}>Utah take-home 2026 →</div>
        </a>
      </div>

      <AuthorBox />
    </main>
  )
}
