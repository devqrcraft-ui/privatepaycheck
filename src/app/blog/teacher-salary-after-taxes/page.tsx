import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'
import { calcTeacher } from '@/lib/teacherCalc'

const formatCurrency = (amount: number) => '$' + Math.round(amount).toLocaleString('en-US')
const tx55k = calcTeacher(55000, 'TX', 'single', 40)
const il55k = calcTeacher(55000, 'IL', 'single', 40)
const ca55k = calcTeacher(55000, 'CA', 'single', 40)
const stateExamples = [
  { state: 'Texas', code: 'TX' },
  { state: 'Florida', code: 'FL' },
  { state: 'Washington', code: 'WA' },
  { state: 'Pennsylvania', code: 'PA' },
  { state: 'Illinois', code: 'IL' },
  { state: 'New York', code: 'NY' },
  { state: 'New Jersey', code: 'NJ' },
  { state: 'California', code: 'CA' },
].map(({ state, code }) => ({
  state,
  ...calcTeacher(68000, code, 'single', 40),
}))

export const metadata: Metadata = {
  title: 'Teacher Salary After Taxes 2026: Estimates by State and Pension',
  description: 'Estimate teacher take-home pay with state pension, federal tax, and state tax assumptions shown. See illustrative $55,000 and $68,000 examples.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/teacher-salary-after-taxes' },
  openGraph: {
    title: 'Teacher Salary After Taxes 2026: Estimates by State and Pension',
    description: 'Illustrative teacher take-home estimates with pension and tax assumptions shown.',
    url: 'https://www.privatepaycheck.com/blog/teacher-salary-after-taxes',
    siteName: 'PrivatePaycheck',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'PrivatePaycheck teacher salary tax estimates' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teacher Salary After Taxes 2026: Estimates by State and Pension',
    description: 'Illustrative teacher take-home estimates with pension and tax assumptions shown.',
    images: ['/og-image.svg'],
  },
}

const faqItems = [
  {
    q: 'How much does a teacher take home after taxes in 2026?',
    a: `Under this model, a single Texas teacher earning $55,000 with an 8% TRS contribution and no Social Security withholding has estimated take-home pay of ${formatCurrency(tx55k.takeHome)} per year. Results vary by state pension, filing status, local taxes, and individual plan.`,
  },
  {
    q: 'Do pension contributions reduce teacher take-home pay?',
    a: `Yes. The estimate uses the listed state-plan contribution. For the Texas example, 8% of $55,000 is ${formatCurrency(tx55k.pensionDeduction)} a year. Confirm your rate and tax treatment with your pension plan.`,
  },
  {
    q: 'Do teachers pay Social Security?',
    a: 'Coverage depends on the state pension system and employment. Some teacher positions are not covered by Social Security; verify coverage with your employer and earnings record.',
  },
  {
    q: 'What is the average teacher salary in 2026?',
    a: 'This page does not claim a current national average. The $55,000 and $68,000 amounts below are illustrative inputs, not salary survey results.',
  },
  {
    q: 'How do I calculate my teacher take-home pay?',
    a: 'Enter your salary, state, filing status, and age in the teacher paycheck calculator. It provides an estimate using modeled state pension and tax rules; use your pay statement and official tax resources for your exact situation.',
  },
]
const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
})

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.privatepaycheck.com/blog"},{"@type":"ListItem","position":3,"name":"Teacher Salary After Taxes 2026","item":"https://www.privatepaycheck.com/blog/teacher-salary-after-taxes"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Teacher Salary After Taxes 2026: Estimated Take-Home Pay by State","datePublished":"2026-01-01","dateModified":"2026-11-02","author":{"@type":"Organization","name":"the PrivatePaycheck Team","url":"https://www.privatepaycheck.com"},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://www.privatepaycheck.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.privatepaycheck.com/blog/teacher-salary-after-taxes"}}'

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: faqSchema}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: breadcrumbSchema}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: articleSchema}} />

      <article
        itemScope
        itemType="https://schema.org/BlogPosting"
        style={{maxWidth:780, margin:'0 auto', padding:'clamp(14px,4vw,28px)', background:'#0f0c29', color:'#e8edf8', minHeight:'100vh'}}
      >
        <header>
          <nav aria-label="breadcrumb" style={{fontSize:13, color:'rgba(255,255,255,0.65)', marginBottom:16}}>
            <a href="/" style={{color:'rgba(255,255,255,0.65)', textDecoration:'none'}}>Home</a>
            {' › '}
            <a href="/blog" style={{color:'rgba(255,255,255,0.65)', textDecoration:'none'}}>Blog</a>
            {' › '}
            <span style={{color:'rgba(255,255,255,0.65)'}}>Teacher Salary After Taxes 2026</span>
          </nav>

          <h1 style={{fontSize:'clamp(22px,5vw,24px)', fontWeight:900, color:'#e8edf8', lineHeight:1.3, marginBottom:12}}>
            Teacher Salary After Taxes 2026: Estimated Take-Home Pay by State
          </h1>

          <div style={{fontSize:12, color:'rgba(255,255,255,0.65)', marginBottom:20, display:'flex', gap:12, flexWrap:'wrap'}}>
            <span>Last updated: November 2, 2026</span>
            <span>·</span>
            <span>By the PrivatePaycheck Team</span>
            <span>·</span>
            <span>{'~8 min read · 2,100 words'}</span>
          </div>
        </header>

        {/* ANSWER-FIRST */}
        <div style={{background:'rgba(245,200,66,0.07)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
          <p style={{margin:0, fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,0.9)'}}>
            {`Illustrative model: a single Texas teacher earning $55,000, contributing 8% to TRS and not covered by Social Security through that job, has estimated take-home pay of ${formatCurrency(tx55k.takeHome)} per year (${formatCurrency(tx55k.monthlyTakeHome)} per month). The $68,000 comparisons below are sample salaries, not a claimed national average. Pension and tax assumptions materially change the result.`}
          </p>
        </div>

        {/* KEY TAKEAWAYS */}
        <div style={{background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.25)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13}}>KEY TAKEAWAYS</div>
          <ul style={{margin:0, padding:'0 0 0 18px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{`The $55,000 Texas example estimates ${formatCurrency(tx55k.takeHome)} annual take-home after an 8% TRS contribution, federal tax, and Medicare.`}</li>
            <li>{`For that example, the modeled pension contribution is ${formatCurrency(tx55k.pensionDeduction)} and Medicare is ${formatCurrency(tx55k.fica)} per year; the model does not withhold Social Security for Texas TRS-covered teaching.`}</li>
            <li>{`At the illustrative $68,000 salary, modeled annual take-home is ${formatCurrency(stateExamples.find((item) => item.state === 'Texas')!.takeHome)} in Texas and ${formatCurrency(stateExamples.find((item) => item.state === 'California')!.takeHome)} in California.`}</li>
            <li>{'State-plan contribution and Social Security coverage vary. Check the actual pension and pay-statement rates for your job.'}</li>
            <li>{'These are estimates, not a claim that every teacher receives the same paycheck.'}</li>
          </ul>
        </div>

        {/* TOC */}
        <div style={{background:'rgba(245,200,66,0.06)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13}}>TABLE OF CONTENTS</div>
          <ol style={{margin:0, padding:'0 0 0 18px', lineHeight:2}}>
            {[
              {label:'Teacher Take-Home Pay by State', id:'by-state'},
              {label:'Full Tax Breakdown on $55K Salary', id:'breakdown'},
              {label:'How Pension Contributions Affect Net Pay', id:'pension'},
              {label:'How to Maximize Teacher Take-Home Pay', id:'maximize'},
              {label:'Frequently Asked Questions', id:'faq'},
            ].map((item, i) => (
              <li key={i} style={{marginBottom:6}}>
                <a href={`#${item.id}`} style={{color:'#F5C842', textDecoration:'none', fontSize:14, fontWeight:600}}>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* SECTION 1 — BY STATE */}
        <section id="by-state">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            How Much Do Teachers Take Home After Taxes by State in 2026?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Each row uses the same $68,000 illustrative salary, single filing status, age 40, and the default pension and Social Security coverage assumptions in our teacher calculator. State tax includes modeled state income/payroll taxes; local taxes and individual plan differences are not fully represented.'}
          </p>

          <div style={{overflowX:'auto', marginBottom:24}}>
            <table style={{width:'100%', borderCollapse:'collapse', fontSize:14}}>
              <thead>
                <tr style={{background:'rgba(245,200,66,0.12)'}}>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>State</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>State tax estimate</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>Annual Take-Home</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>Monthly</th>
                </tr>
              </thead>
              <tbody>
                {stateExamples.map((row) => (
                  <tr key={row.state} style={{borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.85)', fontWeight:600}}>{row.state}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.75)'}}>{formatCurrency(row.stateTax)}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.85)'}}>{formatCurrency(row.takeHome)}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.85)'}}>{formatCurrency(row.monthlyTakeHome)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'For a personalized estimate, use the free '}
            <a href="/" style={{color:'#F5C842'}}>teacher paycheck calculator</a>
            {' — enter your state, salary, filing status, and age. It remains an estimate, not payroll advice.'}
          </p>
        </section>

        {/* SECTION 2 — BREAKDOWN */}
        <section id="breakdown">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            Full Tax Breakdown on a $55,000 Teacher Salary in 2026
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Illustrative estimate for a $55,000 Texas teacher salary: single filer, age 40, 8% modeled TRS contribution, no Social Security withholding for a TRS-covered position, and no local tax or other deductions. Federal income tax uses the 2026 standard deduction and brackets.'}
          </p>

          <div style={{overflowX:'auto', marginBottom:24}}>
            <table style={{width:'100%', borderCollapse:'collapse', fontSize:14}}>
              <thead>
                <tr style={{background:'rgba(245,200,66,0.12)'}}>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>Deduction</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>Rate</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>Annual Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {item:'Gross salary', rate:'—', amt:formatCurrency(tx55k.gross)},
                  {item:'Texas TRS contribution (modeled 8%)', rate:'8.00%', amt:'−' + formatCurrency(tx55k.pensionDeduction)},
                  {item:'Federal income tax', rate:'2026 progressive brackets', amt:'−' + formatCurrency(tx55k.fedTax)},
                  {item:'Social Security tax', rate:'Not modeled for this covered position', amt:'$0'},
                  {item:'Medicare tax', rate:'1.45%', amt:'−' + formatCurrency(tx55k.fica)},
                  {item:'Texas state income/payroll tax', rate:'No individual income tax', amt:'−' + formatCurrency(tx55k.stateTax)},
                ].map((row, i) => (
                  <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.85)'}}>{row.item}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.75)'}}>{row.rate}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.85)'}}>{row.amt}</td>
                  </tr>
                ))}
                <tr style={{background:'rgba(245,200,66,0.08)', borderTop:'1px solid rgba(245,200,66,0.3)'}}>
                  <td style={{padding:'10px 14px', color:'#F5C842', fontWeight:700}}>Net Take-Home</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{(tx55k.effectiveRate * 100).toFixed(1) + '% total deductions'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{formatCurrency(tx55k.takeHome) + ' / ' + formatCurrency(tx55k.monthlyTakeHome) + '/mo'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <blockquote style={{borderLeft:'3px solid rgba(245,200,66,0.4)', paddingLeft:16, margin:'20px 0', fontStyle:'italic', color:'rgba(255,255,255,0.7)', fontSize:14, lineHeight:1.8}}>
            {'For 2026, the standard deduction is $16,100 for single filers and $32,200 for married filing jointly. This directly reduces the income subject to federal tax.'}
            <cite style={{display:'block', marginTop:8, fontSize:12, color:'rgba(255,255,255,0.65)', fontStyle:'normal'}}>
              {'— '}
              <a href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" target="_blank" rel="noreferrer" style={{color:'#F5C842'}}>
                IRS Revenue Procedure 2025-32 — 2026 tax brackets and deductions
              </a>
            </cite>
          </blockquote>
        </section>

        {/* SECTION 3 — PENSION */}
        <section id="pension">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            How Do Pension Contributions Affect Teacher Take-Home Pay?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Pension contribution rates depend on the state system, membership tier, and plan. The calculator uses a listed default rate and models it as reducing taxable wages; verify your own contribution and tax treatment with your plan documents and state rules.'}
          </p>

          <ul style={{margin:'0 0 20px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'California (CalSTRS): the calculator models a 10.25% employee contribution.'}</li>
            <li>{'New York (TRS): the calculator models a 3.5% default; actual tier rates can differ.'}</li>
            <li>{'Texas (TRS): the calculator models an 8% employee contribution and no Social Security withholding for a TRS-covered position.'}</li>
            <li>{'Florida (FRS): the calculator models a 3% employee contribution.'}</li>
            <li>{'Illinois (TRS): the calculator models a 9% employee contribution.'}</li>
          </ul>

          {/* INFORMATION GAIN */}
          <div style={{background:'rgba(245,200,66,0.05)', border:'1px solid rgba(245,200,66,0.15)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
            <div style={{fontWeight:800, color:'#F5C842', marginBottom:8, fontSize:13}}>UNIQUE DATA — 2026 Analysis</div>
            <p style={{margin:0, fontSize:14, color:'rgba(255,255,255,0.8)', lineHeight:1.8}}>
              {'For this Texas example, the model uses no Social Security withholding and includes Medicare tax, plus an 8% TRS contribution. This is a scenario for a TRS-covered teaching job, not a rule for every school employee or other employment.'}
            </p>
          </div>
        </section>

        {/* SECTION 4 — MAXIMIZE */}
        <section id="maximize">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            How Can Teachers Maximize Take-Home Pay in 2026?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'For W-2 teachers, review withholding and benefits elections using current IRS guidance and your employer’s plan documents. These choices affect cash flow and tax liability differently.'}
          </p>

          <h3 style={{fontSize:15, fontWeight:700, color:'#e8edf8', marginBottom:12}}>
            Step-by-Step: Increase Your Teacher Take-Home Pay
          </h3>
          <ol style={{margin:'0 0 24px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Update your W-4.'}</strong>
              {' The current W-4 does not use withholding allowances. Review the steps and use the IRS Tax Withholding Estimator; do not change withholding without considering your expected tax bill.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Contribute to a 403(b).'}</strong>
              {' The 2026 employee elective-deferral limit is $24,500 for eligible plans, subject to plan rules and any age-based catch-up limit. Contributions reduce take-home pay; the tax effect depends on your circumstances.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Use an FSA or HSA.'}</strong>
              {' Health FSA and HSA limits and eligibility rules differ and can change annually. Check current IRS limits and your plan terms before contributing.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Deduct educator expenses.'}</strong>
              {' Eligible educators may qualify for a federal deduction for unreimbursed classroom expenses. Check the current IRS instructions for the tax year and eligibility requirements.'}
            </li>
            <li>
              <strong style={{color:'#e8edf8'}}>{'File MFJ if married.'}</strong>
              {' Choose a filing status based on your circumstances. The 2026 standard deduction is $32,200 for married filing jointly, but the result depends on both spouses’ income and other tax details.'}
            </li>
          </ol>

          <ul style={{margin:'0 0 24px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'Pre-tax retirement contributions may reduce federal taxable income, but do not necessarily reduce FICA wages.'}</li>
            <li>{'FSA/HSA tax treatment and contribution limits depend on plan type, eligibility, and current-year rules.'}</li>
            <li>{'Educator-expense deductions require eligible unreimbursed expenses and are subject to current IRS limits.'}</li>
            <li>{'Compare filing statuses using the full household tax situation rather than a fixed savings claim.'}</li>
          </ul>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'Estimate your paycheck with the '}
            <a href="/" style={{color:'#F5C842'}}>free paycheck calculator</a>
            {' — review the stated assumptions and confirm plan-specific deductions separately.'}
          </p>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:24}}>
            Frequently Asked Questions
          </h2>
          {faqItems.map((item, i) => (
            <div key={item.q} style={{marginBottom:24, paddingBottom:20, borderBottom: i < faqItems.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none'}}>
              <h3 style={{fontSize:15, fontWeight:700, color:'#e8edf8', marginBottom:8}}>{item.q}</h3>
              <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.8)', margin:0}}>{item.a}</p>
            </div>
          ))}
        </section>

        {/* RELATED */}
        <section style={{marginTop:32, paddingTop:24, borderTop:'1px solid rgba(255,255,255,0.08)'}}>
          <h2 style={{fontSize:16, fontWeight:700, color:'#e8edf8', marginBottom:16}}>Related Articles</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:12}}>
            {[
              {title:'Police Officer Paycheck 2026', href:'/blog/police-paycheck-calculator'},
              {title:'Nurse Salary After Taxes 2026', href:'/blog/nurse-salary-after-taxes'},
              {title:'Trump Account Calculator 2026', href:'/blog/trump-account-calculator'},
            ].map((a, i) => (
              <a key={i} href={a.href} style={{
                display:'block', padding:'12px 16px',
                background:'rgba(245,200,66,0.06)', border:'1px solid rgba(245,200,66,0.15)',
                borderRadius:8, color:'#F5C842', textDecoration:'none', fontSize:13, fontWeight:600, lineHeight:1.5
              }}>
                {a.title} {'>'}
              </a>
            ))}
          </div>
        </section>

        <AuthorBox />

      </article>
    </>
  )
}
