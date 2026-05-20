import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Nurse Paycheck Calculator 2026: RN Take-Home Pay by State',
  description: 'RN median salary $82,000/year. After federal tax, FICA 7.65%, and state tax, take-home is $60,500–$65,000/year. Free calculator, all 50 states, no signup.',
  keywords: 'nurse paycheck calculator 2026, rn take home pay, nurse salary after taxes, registered nurse paycheck',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/nurse-paycheck-calculator' },
}

export default function Page() {

  const h2Style = { fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.95)', margin: '32px 0 12px', lineHeight: 1.3 }
  const h3Style = { fontSize: 17, fontWeight: 700, color: 'rgba(255,255,255,0.9)', margin: '20px 0 8px' }
  const pStyle  = { fontSize: 15, color: 'rgba(255,255,255,0.78)', lineHeight: 1.8, margin: '0 0 14px' }
  const thStyle = { padding: '10px 12px', color: '#F5C842', fontWeight: 700, fontSize: 12, textTransform: 'uppercase' as const, letterSpacing: '0.5px', textAlign: 'left' as const }
  const tdStyle = { padding: '9px 12px', fontSize: 14, color: 'rgba(255,255,255,0.82)', borderBottom: '1px solid rgba(255,255,255,0.07)' }

  const stateRows = [
    ['Texas',        'TX', 'None',  '$82,000', '$61,320', '$5,110', '$29.48'],
    ['Florida',      'FL', 'None',  '$82,000', '$61,320', '$5,110', '$29.48'],
    ['Washington',   'WA', 'None',  '$82,000', '$61,320', '$5,110', '$29.48'],
    ['Pennsylvania', 'PA', '3.07%', '$82,000', '$58,800', '$4,900', '$28.27'],
    ['Illinois',     'IL', '4.95%', '$82,000', '$57,900', '$4,825', '$27.84'],
    ['New York',     'NY', '6.85%', '$82,000', '$56,400', '$4,700', '$27.12'],
    ['California',   'CA', '9.30%', '$82,000', '$54,300', '$4,525', '$26.11'],
    ['Hawaii',       'HI', '11.00%','$82,000', '$52,800', '$4,400', '$25.38'],
  ]

  const specialtyRows = [
    ['Staff RN',             '$77,600',  '$58,200', '$4,850'],
    ['ICU / Critical Care',  '$95,000',  '$70,500', '$5,875'],
    ['Emergency Room RN',    '$88,000',  '$65,400', '$5,450'],
    ['Travel Nurse (TX)',     '$105,000', '$80,100', '$6,675'],
    ['Nurse Practitioner',   '$126,000', '$93,200', '$7,767'],
    ['CRNA',                 '$214,000', '$148,000','$12,333'],
  ]

  const faqs = [
    {
      q: 'How much do nurses take home after taxes in 2026?',
      a: 'An RN earning the median $82,000/year takes home $61,320 in Texas or Florida (no state tax), $57,900 in Illinois, and $54,300 in California after federal tax, FICA 7.65%, and state income tax.',
    },
    {
      q: 'What is FICA tax for nurses?',
      a: 'FICA is 7.65% of gross pay — 6.2% Social Security (up to $184,500 wage base in 2026) plus 1.45% Medicare. On $82,000 salary that is $6,273/year deducted automatically from every paycheck.',
    },
    {
      q: 'Do nurses pay more taxes on overtime?',
      a: 'Yes. Overtime is taxed at your marginal rate. An RN in the 22% federal bracket pays 22% federal + state tax on every overtime dollar. On $5,000 overtime in California, net is roughly $3,100 — about 62 cents per dollar.',
    },
    {
      q: 'How much do travel nurses take home after taxes?',
      a: 'A travel nurse earning $105,000/year in Texas (no state tax) takes home approximately $80,100/year ($6,675/month). Tax-free stipends for housing and meals are not included in taxable income — making travel nursing highly tax-efficient.',
    },
    {
      q: 'What state has the highest nurse take-home pay?',
      a: 'Texas, Florida, Washington, Nevada, and Wyoming have no state income tax — nurses keep the most. California and Hawaii have the highest state tax rates (9.3–11%), significantly reducing take-home pay despite higher gross salaries.',
    },
    {
      q: 'How does the 2026 standard deduction affect nurse take-home pay?',
      a: 'The 2026 standard deduction is $16,100 for single filers. An RN earning $82,000 pays federal income tax on $82,000 minus $16,100 = $65,900 taxable income — reducing the federal tax bill by roughly $3,542 compared to no deduction.',
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.privatepaycheck.com/blog"},{"@type":"ListItem","position":3,"name":"Nurse Paycheck Calculator 2026","item":"https://www.privatepaycheck.com/blog/nurse-paycheck-calculator"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Nurse Paycheck Calculator 2026: RN Take-Home Pay by State","description":"RN median salary $82,000/year. After federal tax, FICA 7.65%, and state tax, take-home is $60,500\u2013$65,000/year. Free calculator, all 50 states, no signup.","url":"https://www.privatepaycheck.com/blog/nurse-paycheck-calculator","datePublished":"2026-01-01","dateModified":"2026-05-19","author":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://privatepaycheck.com"}}' }} />

      <main style={{ maxWidth: 800, margin: '0 auto', padding: '24px 16px 48px', background: '#0f0c29', minHeight: '100vh' }}>

        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 20, display: 'flex', gap: 6, flexWrap: 'wrap' as const }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</a>
          <span>›</span>
          <a href="/blog" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Blog</a>
          <span>›</span>
          <span style={{ color: 'rgba(255,255,255,0.65)' }}>Nurse Paycheck Calculator 2026</span>
        </nav>

        {/* H1 */}
        <h1 style={{ fontSize: 26, fontWeight: 900, color: '#fff', margin: '0 0 8px', lineHeight: 1.25 }}>
          Nurse Paycheck Calculator 2026
        </h1>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
          Last updated: May 2026 · By Ethan Blake · Tax Compliance Specialist
        </div>

        {/* Answer-First */}
        <div style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.25)', borderRadius: 8, padding: '14px 18px', marginBottom: 20 }}>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.88)' }}>
            <strong style={{ color: '#F5C842' }}>Quick answer:</strong>{' '}
            RN median salary in 2026 is <strong style={{ color: '#fff' }}>{'$82,000/year'}</strong>. After federal tax, FICA {'(7.65%)'}, and state tax, take-home is approximately{' '}
            <strong style={{ color: '#fff' }}>{'$54,300–$61,320/year'}</strong>{' '}
            {'($4,525–$5,110/month)'} depending on your state. Texas and Florida nurses keep{' '}
            <strong style={{ color: '#fff' }}>{'$7,000+'}</strong> more per year than California nurses.
          </p>
        </div>

        {/* Key Takeaways */}
        <div style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.25)', borderRadius: 8, padding: '16px 20px', marginBottom: 28 }}>
          <div style={{ fontWeight: 800, color: '#F5C842', marginBottom: 10, fontSize: 13 }}>{'⚡ KEY TAKEAWAYS'}</div>
          <ul style={{ margin: 0, padding: '0 0 0 18px', fontSize: 14, lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
            <li>{'RN median salary 2026: $82,000/year — take-home $54,300–$61,320 by state'}</li>
            <li>{'FICA tax is 7.65% on every paycheck — $6,273/year on $82,000 salary'}</li>
            <li>{'No-tax states (TX, FL, WA) save nurses $3,000–$7,000/year vs California'}</li>
            <li>{'Travel nurses earn $105,000+ with tax-free stipends — best take-home nationally'}</li>
            <li>{'2026 standard deduction $16,100 (single) reduces federal taxable income'}</li>
          </ul>
        </div>

        {/* Take-home by state table */}
        <h2 style={h2Style} id="take-home-by-state">RN Take-Home Pay by State 2026</h2>
        <p style={pStyle}>Based on RN median gross salary of {'$82,000/year'}, single filer, standard deduction {'$16,100'}.</p>
        <div style={{ overflowX: 'auto', marginBottom: 28 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ background: 'rgba(245,200,66,0.08)', borderBottom: '1px solid rgba(245,200,66,0.2)' }}>
                <th style={thStyle}>State</th>
                <th style={thStyle}>State Tax</th>
                <th style={thStyle}>Gross</th>
                <th style={thStyle}>Take-Home/yr</th>
                <th style={thStyle}>Take-Home/mo</th>
                <th style={thStyle}>Hourly Net</th>
              </tr>
            </thead>
            <tbody>
              {stateRows.map(([state, abbr, tax, gross, annual, monthly, hourly], i) => (
                <tr key={abbr} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  <td style={{ ...tdStyle, fontWeight: 700, color: '#fff' }}>{state}</td>
                  <td style={{ ...tdStyle, color: tax === 'None' ? '#34d399' : 'rgba(255,255,255,0.82)' }}>{tax === 'None' ? '0% ✓' : tax}</td>
                  <td style={tdStyle}>{gross}</td>
                  <td style={{ ...tdStyle, fontWeight: 700, color: '#F5C842' }}>{annual}</td>
                  <td style={tdStyle}>{monthly}</td>
                  <td style={tdStyle}>{hourly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* By specialty table */}
        <h2 style={h2Style} id="take-home-by-specialty">Nurse Take-Home Pay by Specialty 2026</h2>
        <p style={pStyle}>Calculated for Texas {'(no state tax)'}, single filer, standard deduction.</p>
        <div style={{ overflowX: 'auto', marginBottom: 28 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ background: 'rgba(245,200,66,0.08)', borderBottom: '1px solid rgba(245,200,66,0.2)' }}>
                <th style={thStyle}>Specialty</th>
                <th style={thStyle}>Gross/yr</th>
                <th style={thStyle}>Take-Home/yr</th>
                <th style={thStyle}>Take-Home/mo</th>
              </tr>
            </thead>
            <tbody>
              {specialtyRows.map(([spec, gross, annual, monthly], i) => (
                <tr key={spec} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  <td style={{ ...tdStyle, fontWeight: 600, color: '#fff' }}>{spec}</td>
                  <td style={tdStyle}>{gross}</td>
                  <td style={{ ...tdStyle, fontWeight: 700, color: '#F5C842' }}>{annual}</td>
                  <td style={tdStyle}>{monthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* How calculated */}
        <h2 style={h2Style} id="how-calculated">How Nurse Take-Home Pay Is Calculated</h2>
        <p style={pStyle}>
          Your paycheck deductions as a W-2 nurse include four main items: federal income tax, FICA {'(Social Security + Medicare)'}, state income tax, and any pre-tax benefits like health insurance or 401k contributions.
        </p>
        <ol style={{ fontSize: 15, color: 'rgba(255,255,255,0.78)', lineHeight: 2, paddingLeft: 20, marginBottom: 20 }}>
          <li><strong style={{ color: '#F5C842' }}>Federal income tax</strong> — 10–22% on most RN salaries. Single RN at {'$82,000'} pays roughly {'$12,500'} federal.</li>
          <li><strong style={{ color: '#F5C842' }}>FICA</strong> — 7.65% flat. Social Security 6.2% {'(capped at $184,500)'} + Medicare 1.45%. On {'$82,000'} = {'$6,273'}.</li>
          <li><strong style={{ color: '#F5C842' }}>State income tax</strong> — 0% {'(TX, FL, WA)'} to 11% {'(HI)'}. Biggest variable in take-home pay.</li>
          <li><strong style={{ color: '#F5C842' }}>Pre-tax deductions</strong> — 401k contributions, health premiums, FSA — all reduce taxable income before tax is calculated.</li>
        </ol>

        {/* IRS Blockquote */}
        <blockquote style={{ borderLeft: '3px solid rgba(245,200,66,0.4)', paddingLeft: 16, margin: '20px 0', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.8 }}>
          {'Employees do not pay self-employment tax. Instead, employers withhold Social Security and Medicare taxes (FICA) — 7.65% from employee wages — and match that amount dollar-for-dollar.'}
          <cite style={{ display: 'block', marginTop: 8, fontSize: 12, color: 'rgba(255,255,255,0.45)', fontStyle: 'normal' }}>
            {'— '}<a href="https://www.irs.gov/taxtopics/tc751" rel="nofollow" target="_blank" style={{ color: '#F5C842' }}>IRS.gov — Topic 751: Social Security and Medicare Withholding Rates</a>
          </cite>
        </blockquote>

        {/* Calculator CTA */}
        <div style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.25)', borderRadius: 8, padding: '16px 20px', margin: '24px 0', textAlign: 'center' as const }}>
          <div style={{ fontWeight: 800, color: '#F5C842', fontSize: 16, marginBottom: 8 }}>Calculate Your Exact Nurse Take-Home Pay</div>
          <p style={{ margin: '0 0 12px', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>Enter your salary, state, filing status, and 401k — get your exact 2026 paycheck breakdown.</p>
          <a href="/" style={{ display: 'inline-block', background: '#F5C842', color: '#0f0c29', fontWeight: 800, fontSize: 15, padding: '10px 28px', borderRadius: 6, textDecoration: 'none' }}>Open Free Calculator →</a>
        </div>

        {/* FAQ */}
        <h2 style={h2Style} id="faq">Frequently Asked Questions</h2>
        {faqs.map((item, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 14, marginBottom: 14 }}>
            <h3 style={h3Style}>{item.q}</h3>
            <p style={{ ...pStyle, marginBottom: 0 }}>{item.a}</p>
          </div>
        ))}

        {/* Related guides */}
        <div style={{ borderTop: '2px solid rgba(245,200,66,0.15)', marginTop: 40, paddingTop: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 16 }}>Related Guides</h2>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' as const }}>
            {([
              ['$75K After Taxes',     '/blog/75k-a-year-after-taxes'],
              ['$100K After Taxes',    '/blog/100k-a-year-after-taxes'],
              ['Overtime Tax Guide',   '/blog/overtime-pay-tax-calculator-2026'],
              ['Biweekly Paycheck',    '/blog/biweekly-paycheck-after-taxes'],
              ['All Tax Guides',       '/blog'],
            ] as [string, string][]).map(([label, href]) => (
              <a key={href} href={href} style={{ padding: '7px 14px', background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.2)', borderRadius: 6, fontSize: 13, fontWeight: 600, color: '#F5C842', textDecoration: 'none' }}>{label}</a>
            ))}
          </div>
        </div>

        {/* State calculators */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 28, paddingTop: 24 }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: '#F5C842', marginBottom: 12 }}>Calculate your exact take-home pay by state:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 10 }}>
            {([
              ['California', '/california-paycheck-calculator'],
              ['Texas',      '/texas-paycheck-calculator'],
              ['Florida',    '/florida-paycheck-calculator'],
              ['New York',   '/new-york-paycheck-calculator'],
              ['Washington', '/washington-paycheck-calculator'],
              ['Illinois',   '/illinois-paycheck-calculator'],
            ] as [string, string][]).map(([label, href]) => (
              <a key={href} href={href} style={{ color: '#F5C842', fontSize: 14, textDecoration: 'none', background: 'rgba(245,200,66,0.08)', padding: '6px 12px', borderRadius: 6, border: '1px solid rgba(245,200,66,0.2)' }}>{label}</a>
            ))}
          </div>
        </div>

      </main>
      <AuthorBox />
    </>
  )
}
