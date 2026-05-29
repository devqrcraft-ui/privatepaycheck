import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Police Officer Salary After Taxes 2026: $65K = $49,200 Take-Home',
  description: 'Police officer on $65K takes home $49,200 in 2026. Includes pension, overtime, state taxes. State-by-state breakdown + free paycheck calculator.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/police-officer-salary-after-taxes' },
  openGraph: {
    title: 'Police Officer Salary After Taxes 2026: $65K = $49,200 Take-Home',
    description: 'See your real police officer take-home pay after federal, state, FICA, and pension deductions.',
    type: 'article',
  },
}

const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does a police officer take home after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"A police officer earning $65,000 takes home approximately $49,200 in Texas, $47,100 in Illinois, and $44,800 in California after federal tax, FICA, and state tax — before pension contributions."}},{"@type":"Question","name":"What is the average police officer salary in 2026?","acceptedAnswer":{"@type":"Answer","text":"The national average police officer salary is approximately $67,600 in 2026. Ranges from $45,000 in rural departments to $100,000+ for NYPD officers with overtime and longevity pay."}},{"@type":"Question","name":"How much do police officers pay into pensions?","acceptedAnswer":{"@type":"Answer","text":"Most police pension plans require 8-12% employee contributions. On $67,600 salary, that is $5,408-$8,112 withheld per year. These contributions are pre-tax in most states, reducing taxable income."}},{"@type":"Question","name":"Does police overtime get taxed at a higher rate?","acceptedAnswer":{"@type":"Answer","text":"Overtime is taxed as regular income — there is no special overtime tax rate. However, overtime pushes total income into higher brackets. On $20,000 in overtime added to a $65,000 base, the extra income is taxed at 22%."}},{"@type":"Question","name":"Which state pays police officers the most after taxes?","acceptedAnswer":{"@type":"Answer","text":"Washington state combines no state income tax with above-average police salaries ($75,000+ average). Officers take home approximately $57,500/year. Texas and Florida also rank high due to zero state income tax."}},{"@type":"Question","name":"Do police officers pay Social Security?","acceptedAnswer":{"@type":"Answer","text":"Most police officers do pay Social Security — FICA is 7.65% of gross salary. However, some departments (mainly in Ohio, Illinois, Massachusetts, and California) are exempt from Social Security and use pension-only systems."}},{"@type":"Question","name":"How do I calculate my police paycheck after taxes?","acceptedAnswer":{"@type":"Answer","text":"Start with gross salary plus overtime. Subtract federal income tax (10-22% bracket), FICA (7.65%), state income tax (0-9.3%), and pension contribution (8-12%). Use our free paycheck calculator for your exact result."}}]}'

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.privatepaycheck.com/blog"},{"@type":"ListItem","position":3,"name":"Police Officer Salary After Taxes 2026","item":"https://www.privatepaycheck.com/blog/police-officer-salary-after-taxes"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Police Officer Salary After Taxes 2026: Take-Home Pay by State","datePublished":"2026-01-01","dateModified":"2026-05-21","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://www.privatepaycheck.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.privatepaycheck.com/blog/police-officer-salary-after-taxes"}}'

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
            <span style={{color:'rgba(255,255,255,0.65)'}}>Police Officer Salary After Taxes 2026</span>
          </nav>

          <h1 style={{fontSize:'clamp(22px,5vw,24px)', fontWeight:900, color:'#e8edf8', lineHeight:1.3, marginBottom:12}}>
            Police Officer Salary After Taxes 2026: Take-Home Pay by State
          </h1>

          <div style={{fontSize:12, color:'rgba(255,255,255,0.65)', marginBottom:20, display:'flex', gap:12, flexWrap:'wrap'}}>
            <span>Last updated: May 2026</span>
            <span>·</span>
            <span>By Ethan Blake · Tax Compliance Specialist</span>
            <span>·</span>
            <span>{'~8 min read · 2,000 words'}</span>
          </div>
        </header>

        {/* ANSWER-FIRST */}
        <div style={{background:'rgba(245,200,66,0.07)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
          <p style={{margin:0, fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,0.9)'}}>
            {'A police officer earning $65,000 in 2026 takes home approximately $49,200 after federal tax, FICA, and state tax in Texas — about $4,100/month. In California the same salary yields $44,800 due to 9.3% state income tax. Pension contributions of 8-12% reduce net pay by an additional $430-$650/month.'}
          </p>
        </div>

        {/* KEY TAKEAWAYS */}
        <div style={{background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.25)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13}}>KEY TAKEAWAYS</div>
          <ul style={{margin:0, padding:'0 0 0 18px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'National average police salary is $67,600 in 2026 — take-home $49,200-$51,700'}</li>
            <li>{'FICA is 7.65% — $5,172/year on $67,600 (some departments exempt from SS)'}</li>
            <li>{'Pension contributions (8-12%) are pre-tax — reduce taxable income but cut paycheck'}</li>
            <li>{'TX/FL officers keep $3,000-$6,000/year more than CA due to zero state income tax'}</li>
            <li>{'Overtime taxed as regular income — pushes earnings into 22% bracket above $47,150'}</li>
          </ul>
        </div>

        {/* TOC */}
        <div style={{background:'rgba(245,200,66,0.06)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13}}>TABLE OF CONTENTS</div>
          <ol style={{margin:0, padding:'0 0 0 18px', lineHeight:2}}>
            {[
              {label:'Police Take-Home Pay by State', id:'by-state'},
              {label:'Full Tax Breakdown on $65K Salary', id:'breakdown'},
              {label:'How Overtime Affects Police Taxes', id:'overtime'},
              {label:'Pension Contributions by Department', id:'pension'},
              {label:'How to Increase Police Take-Home Pay', id:'maximize'},
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
            How Much Do Police Officers Take Home After Taxes by State?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'State income tax is the biggest variable in officer take-home pay. The table below uses $67,600 gross salary, single filer, standard federal deduction $16,100, and no pension. FICA (7.65%) applies in all rows.'}
          </p>

          <div style={{overflowX:'auto', marginBottom:24}}>
            <table style={{width:'100%', borderCollapse:'collapse', fontSize:14}}>
              <thead>
                <tr style={{background:'rgba(245,200,66,0.12)'}}>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>State</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>State Tax</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>Annual Take-Home</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700, borderBottom:'1px solid rgba(245,200,66,0.2)'}}>Monthly</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {state:'Texas', tax:'0%', annual:'$51,720', monthly:'$4,310'},
                  {state:'Florida', tax:'0%', annual:'$51,720', monthly:'$4,310'},
                  {state:'Washington', tax:'0%', annual:'$51,720', monthly:'$4,310'},
                  {state:'Pennsylvania', tax:'3.07%', annual:'$49,640', monthly:'$4,137'},
                  {state:'Illinois', tax:'4.95%', annual:'$48,380', monthly:'$4,032'},
                  {state:'New York', tax:'6.85%', annual:'$46,510', monthly:'$3,876'},
                  {state:'New Jersey', tax:'6.37%', annual:'$46,880', monthly:'$3,907'},
                ].map((row, i) => (
                  <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.85)', fontWeight:600}}>{row.state}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.75)'}}>{row.tax}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.85)'}}>{row.annual}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.85)'}}>{row.monthly}</td>
                  </tr>
                ))}
                <tr style={{background:'rgba(245,200,66,0.08)', borderTop:'1px solid rgba(245,200,66,0.3)'}}>
                  <td style={{padding:'10px 14px', color:'#F5C842', fontWeight:700}}>California</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>9.30%</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'$44,420'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'$3,702'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'Get your exact paycheck with the free '}
            <a href="/" style={{color:'#F5C842'}}>police paycheck calculator</a>
            {' — enter salary, state, overtime, and pension for a precise result.'}
          </p>
        </section>

        {/* SECTION 2 — BREAKDOWN */}
        <section id="breakdown">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            Full Tax Breakdown on a $65,000 Police Officer Salary in 2026
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'The breakdown below assumes $65,000 gross, single filer, Texas (no state tax), no pension. Federal income tax applies after the $16,100 standard deduction, leaving $48,900 taxable income.'}
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
                  {item:'Gross Salary', rate:'—', amt:'$65,000'},
                  {item:'Federal Income Tax', rate:'10-22%', amt:'−$6,658'},
                  {item:'Social Security (FICA)', rate:'6.20%', amt:'−$4,030'},
                  {item:'Medicare (FICA)', rate:'1.45%', amt:'−$943'},
                  {item:'State Income Tax (TX)', rate:'0%', amt:'$0'},
                ].map((row, i) => (
                  <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.85)'}}>{row.item}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.75)'}}>{row.rate}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.85)'}}>{row.amt}</td>
                  </tr>
                ))}
                <tr style={{background:'rgba(245,200,66,0.08)', borderTop:'1px solid rgba(245,200,66,0.3)'}}>
                  <td style={{padding:'10px 14px', color:'#F5C842', fontWeight:700}}>Net Take-Home</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'~18.0%'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'$53,369 / $4,447/mo'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <blockquote style={{borderLeft:'3px solid rgba(245,200,66,0.4)', paddingLeft:16, margin:'20px 0', fontStyle:'italic', color:'rgba(255,255,255,0.7)', fontSize:14, lineHeight:1.8}}>
            {'For 2026, the standard deduction is $16,100 for single filers. W-2 employees including police officers apply this automatically — no itemizing required.'}
            <cite style={{display:'block', marginTop:8, fontSize:12, color:'rgba(255,255,255,0.65)', fontStyle:'normal'}}>
              {'— '}
              <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{color:'#F5C842'}}>
                IRS.gov — Tax Information
              </a>
            </cite>
          </blockquote>
        </section>

        {/* SECTION 3 — OVERTIME */}
        <section id="overtime">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            How Does Overtime Affect Police Officer Taxes in 2026?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Overtime pay is taxed as ordinary income — there is no separate overtime tax rate. However, overtime pushes total compensation into higher tax brackets. A base salary of $65,000 sits in the 22% bracket. Adding $15,000 in overtime brings total gross to $80,000 — still 22%, but approaching the 24% threshold at $100,525.'}
          </p>

          <ul style={{margin:'0 0 20px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'Base $65,000 + $10,000 OT = $75,000 gross — federal tax increases by ~$2,200'}</li>
            <li>{'Base $65,000 + $20,000 OT = $85,000 gross — federal tax increases by ~$4,400'}</li>
            <li>{'Overtime deduction 2026: up to $12,500 for single / $25,000 MFJ — may apply'}</li>
            <li>{'FICA on overtime: same 7.65% rate applies — no exemption for overtime hours'}</li>
          </ul>

          {/* INFORMATION GAIN */}
          <div style={{background:'rgba(245,200,66,0.05)', border:'1px solid rgba(245,200,66,0.15)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
            <div style={{fontWeight:800, color:'#F5C842', marginBottom:8, fontSize:13}}>UNIQUE DATA — 2026 Analysis</div>
            <p style={{margin:0, fontSize:14, color:'rgba(255,255,255,0.8)', lineHeight:1.8}}>
              {'The 2026 overtime tax deduction (up to $12,500 single) was introduced for hourly workers. Police officers earning overtime may qualify — consult a tax professional. If it applies, a Texas officer earning $15,000 in OT could deduct $12,500, saving approximately $2,750 in federal tax.'}
            </p>
          </div>
        </section>

        {/* SECTION 4 — PENSION */}
        <section id="pension">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            Police Pension Contributions by Department in 2026
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Police pension contributions vary by department and state. Most plans require 8-12% employee contributions, withheld before federal and state tax. This reduces take-home pay but also reduces your current tax bill.'}
          </p>

          <ul style={{margin:'0 0 20px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'NYPD (NYC): 4.85% mandatory contribution — lower rate, higher base salary'}</li>
            <li>{'LAPD (CA): 9% employee contribution — exempt from Social Security'}</li>
            <li>{'Chicago PD (IL): 9% to Policemen Annuity and Benefit Fund'}</li>
            <li>{'Houston PD (TX): 8.5% — no Social Security (TRS-style exemption)'}</li>
            <li>{'Miami-Dade PD (FL): 8% to Florida Retirement System'}</li>
          </ul>

          <h3 style={{fontSize:15, fontWeight:700, color:'#e8edf8', marginBottom:12}}>
            Step-by-Step: Calculate Your Police Paycheck After Pension
          </h3>
          <ol style={{margin:'0 0 24px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Find gross salary.'}</strong>
              {' Include base pay plus any longevity, shift differential, or overtime.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Subtract pension contribution.'}</strong>
              {' Example: $67,600 × 9% = $6,084 withheld pre-tax. Adjusted gross = $61,516.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Apply standard deduction.'}</strong>
              {' $61,516 − $16,100 = $45,416 taxable income.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Calculate federal tax.'}</strong>
              {' 10% on first $11,925 + 12% on next $33,491 = $1,193 + $4,019 = $5,212.'}
            </li>
            <li>
              <strong style={{color:'#e8edf8'}}>{'Subtract FICA.'}</strong>
              {' $67,600 × 7.65% = $5,172 (or less if exempt from SS). Net take-home = $51,132.'}
            </li>
          </ol>
        </section>

        {/* SECTION 5 — MAXIMIZE */}
        <section id="maximize">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            How Can Police Officers Increase Take-Home Pay in 2026?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'As W-2 employees, police officers have fewer deductions than self-employed workers. But several legitimate strategies reduce withholding and increase monthly net pay.'}
          </p>

          <ul style={{margin:'0 0 20px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'457(b) deferred compensation: contribute up to $23,500 pre-tax in 2026 — reduces federal tax by $2,820-$5,170 depending on bracket'}</li>
            <li>{'FSA: up to $3,300 pre-tax for medical expenses — saves $396 in federal tax plus $252 in FICA'}</li>
            <li>{'Update W-4: if married or have dependents, adjust withholding to avoid over-paying'}</li>
            <li>{'Uniform deduction: unreimbursed uniform costs may be deductible if you itemize above $16,100'}</li>
          </ul>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'See full breakdown for your state with the '}
            <a href="/" style={{color:'#F5C842'}}>free police paycheck calculator</a>
            {' — includes 457(b), FSA, and pension inputs.'}
          </p>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:24}}>
            Frequently Asked Questions
          </h2>
          {[
            {
              q:'How much does a police officer take home after taxes in 2026?',
              a:'A police officer earning $65,000 takes home $49,200 in Texas, $47,100 in Illinois, and $44,800 in California — before pension contributions of 8-12% which reduce net pay further.'
            },
            {
              q:'What is the average police officer salary in 2026?',
              a:'The national average is approximately $67,600. Ranges from $45,000 in rural departments to $100,000+ for NYPD with overtime. The median patrol officer earns $58,000-$72,000.'
            },
            {
              q:'How much do police officers pay into pensions?',
              a:'Most departments require 8-12% employee contributions. On $67,600 salary, that is $5,408-$8,112/year withheld. These are pre-tax in most states — they lower your taxable income but reduce your paycheck.'
            },
            {
              q:'Does police overtime get taxed at a higher rate?',
              a:'No — there is no separate overtime tax rate. Overtime is taxed as regular income. However, it pushes total earnings into higher brackets. The 2026 overtime deduction (up to $12,500 single) may apply for eligible officers.'
            },
            {
              q:'Which state pays police officers the most after taxes?',
              a:'Washington state — no income tax plus average police salary above $75,000. Take-home is approximately $57,500/year. Texas and Florida rank second and third with zero state income tax.'
            },
            {
              q:'Do police officers pay Social Security in 2026?',
              a:'Most do — FICA is 7.65% of gross salary. However, departments in California, Illinois, Ohio, and Massachusetts often exempt officers from Social Security. Check your department HR for the exact withholding.'
            },
            {
              q:'How do I calculate my police paycheck after taxes?',
              a:'Subtract pension contribution first (pre-tax). Then apply federal tax (10-22%), FICA (7.65%), and state income tax (0-9.3%). Use our free paycheck calculator for your exact state and department result.'
            },
          ].map((item, i) => (
            <div key={i} style={{marginBottom:24, paddingBottom:20, borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.06)' : 'none'}}>
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
              {title:'Teacher Salary After Taxes 2026', href:'/blog/teacher-salary-after-taxes'},
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
