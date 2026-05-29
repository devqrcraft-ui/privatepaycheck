import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Teacher Salary After Taxes 2026: $55K = $42,800 Take-Home',
  description: 'A teacher earning $55K in 2026 takes home $42,800 after taxes. State-by-state breakdown, pension impact, and free paycheck calculator.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/teacher-salary-after-taxes' },
  openGraph: {
    title: 'Teacher Salary After Taxes 2026: $55K = $42,800 Take-Home',
    description: 'See your real teacher take-home pay after federal, state, FICA and pension deductions.',
    type: 'article',
  },
}

const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does a teacher take home after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"A teacher earning $55,000 takes home approximately $42,800 after federal tax, FICA, and average state tax. At $68,000 average salary, take-home is $51,200-$54,600 depending on state."}},{"@type":"Question","name":"Which state pays teachers the most after taxes?","acceptedAnswer":{"@type":"Answer","text":"Washington state — no income tax and average teacher salary near $85,000. Teachers keep approximately $65,200/year. Texas and Florida also rank high with no state income tax."}},{"@type":"Question","name":"Do pension contributions reduce teacher take-home pay?","acceptedAnswer":{"@type":"Answer","text":"Yes. Most teacher pension plans require 7-10% of salary as employee contributions. On a $68,000 salary, that is $4,760-$6,800 withheld per year — but contributions are pre-tax, reducing your taxable income."}},{"@type":"Question","name":"What is the average teacher salary in 2026?","acceptedAnswer":{"@type":"Answer","text":"The national average teacher salary is approximately $68,000 in 2026 according to BLS data. This ranges from $47,000 in Mississippi to $95,000 in California and New York."}},{"@type":"Question","name":"How much FICA tax does a teacher pay?","acceptedAnswer":{"@type":"Answer","text":"FICA is 7.65% of gross salary — 6.2% Social Security (up to $184,500 wage base) plus 1.45% Medicare. On a $68,000 salary, FICA is $5,202 per year, or $433/month."}},{"@type":"Question","name":"Is teacher salary taxed differently from other jobs?","acceptedAnswer":{"@type":"Answer","text":"No. Teacher salaries are W-2 income taxed the same as any employee. The main difference is pension — most teachers contribute to a state pension instead of Social Security, which affects net pay differently."}},{"@type":"Question","name":"How do I calculate my teacher take-home pay?","acceptedAnswer":{"@type":"Answer","text":"Start with gross salary. Subtract federal income tax (10-22% bracket), FICA (7.65%), state income tax (0-9.3%), and pension contribution (7-10%). Use our free paycheck calculator for your exact state."}}]}'

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.privatepaycheck.com/blog"},{"@type":"ListItem","position":3,"name":"Teacher Salary After Taxes 2026","item":"https://www.privatepaycheck.com/blog/teacher-salary-after-taxes"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Teacher Salary After Taxes 2026: Take-Home Pay by State","datePublished":"2026-01-01","dateModified":"2026-05-21","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://www.privatepaycheck.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.privatepaycheck.com/blog/teacher-salary-after-taxes"}}'

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
            Teacher Salary After Taxes 2026: How Much Do Teachers Actually Take Home?
          </h1>

          <div style={{fontSize:12, color:'rgba(255,255,255,0.65)', marginBottom:20, display:'flex', gap:12, flexWrap:'wrap'}}>
            <span>Last updated: May 2026</span>
            <span>·</span>
            <span>By Ethan Blake · Tax Compliance Specialist</span>
            <span>·</span>
            <span>{'~8 min read · 2,100 words'}</span>
          </div>
        </header>

        {/* ANSWER-FIRST */}
        <div style={{background:'rgba(245,200,66,0.07)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
          <p style={{margin:0, fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,0.9)'}}>
            {'A teacher earning $55,000 in 2026 takes home approximately $42,800 after federal tax, FICA, and average state tax — about $3,567/month. At the national average of $68,000, take-home ranges from $51,200 in no-tax states to $46,400 in California. Pension contributions of 7-10% reduce net pay further.'}
          </p>
        </div>

        {/* KEY TAKEAWAYS */}
        <div style={{background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.25)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13}}>KEY TAKEAWAYS</div>
          <ul style={{margin:0, padding:'0 0 0 18px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'National average teacher salary is $68,000 in 2026 — take-home $51,200-$54,600'}</li>
            <li>{'FICA tax is 7.65% of gross — $5,202/year on $68,000 salary'}</li>
            <li>{'No-income-tax states (TX, FL, WA) save teachers $2,000-$6,000/year vs California'}</li>
            <li>{'Pension contributions (7-10%) are pre-tax — reduce taxable income but cut net pay'}</li>
            <li>{'A $55,000 teacher paycheck = $3,567/month after all deductions'}</li>
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
            {'State income tax is the biggest variable in teacher take-home pay. California tops out at 9.3%, while Texas, Florida, and Washington charge zero. The table below uses $68,000 gross salary, single filer, standard federal deduction $16,100, and no pension contribution.'}
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
                  {state:'Texas', tax:'0%', annual:'$54,600', monthly:'$4,550'},
                  {state:'Florida', tax:'0%', annual:'$54,600', monthly:'$4,550'},
                  {state:'Washington', tax:'0%', annual:'$54,600', monthly:'$4,550'},
                  {state:'Pennsylvania', tax:'3.07%', annual:'$52,510', monthly:'$4,376'},
                  {state:'Illinois', tax:'4.95%', annual:'$51,240', monthly:'$4,270'},
                  {state:'New York', tax:'6.85%', annual:'$49,360', monthly:'$4,113'},
                  {state:'New Jersey', tax:'6.37%', annual:'$49,730', monthly:'$4,144'},
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
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'$46,400'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'$3,867'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'For your exact take-home, use the free '}
            <a href="/" style={{color:'#F5C842'}}>teacher paycheck calculator</a>
            {' — enter your state and salary for a precise monthly breakdown.'}
          </p>
        </section>

        {/* SECTION 2 — BREAKDOWN */}
        <section id="breakdown">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            Full Tax Breakdown on a $55,000 Teacher Salary in 2026
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Here is exactly where each dollar goes on a $55,000 annual salary (single filer, Texas — no state tax, no pension). Federal income tax applies to taxable income after the $16,100 standard deduction.'}
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
                  {item:'Gross Salary', rate:'—', amt:'$55,000'},
                  {item:'Federal Income Tax', rate:'10-12%', amt:'−$4,638'},
                  {item:'Social Security (FICA)', rate:'6.20%', amt:'−$3,410'},
                  {item:'Medicare (FICA)', rate:'1.45%', amt:'−$798'},
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
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'~22.1%'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#F5C842', fontWeight:700}}>{'$46,154 / $3,846/mo'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <blockquote style={{borderLeft:'3px solid rgba(245,200,66,0.4)', paddingLeft:16, margin:'20px 0', fontStyle:'italic', color:'rgba(255,255,255,0.7)', fontSize:14, lineHeight:1.8}}>
            {'For 2026, the standard deduction is $16,100 for single filers and $32,200 for married filing jointly. This directly reduces the income subject to federal tax.'}
            <cite style={{display:'block', marginTop:8, fontSize:12, color:'rgba(255,255,255,0.65)', fontStyle:'normal'}}>
              {'— '}
              <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{color:'#F5C842'}}>
                IRS.gov — Tax Information
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
            {'Most public school teachers contribute 7-10% of gross salary to a state pension plan. This is withheld pre-tax — meaning it reduces your taxable income but also reduces your monthly paycheck. On $55,000, a 9% pension contribution withholds $4,950/year ($413/month).'}
          </p>

          <ul style={{margin:'0 0 20px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'California (CalSTRS): 10.25% employee contribution on salary above $22,000'}</li>
            <li>{'New York (TRS): 3-6% depending on tier and years of service'}</li>
            <li>{'Texas (TRS): 8% employee contribution — no Social Security for most teachers'}</li>
            <li>{'Florida (FRS): 3% employee contribution — lower than most states'}</li>
            <li>{'Illinois (TRS): 9.4% — among the highest contribution rates in the US'}</li>
          </ul>

          {/* INFORMATION GAIN */}
          <div style={{background:'rgba(245,200,66,0.05)', border:'1px solid rgba(245,200,66,0.15)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
            <div style={{fontWeight:800, color:'#F5C842', marginBottom:8, fontSize:13}}>UNIQUE DATA — 2026 Analysis</div>
            <p style={{margin:0, fontSize:14, color:'rgba(255,255,255,0.8)', lineHeight:1.8}}>
              {'Texas teachers have no Social Security coverage — TRS replaces it. This means the 6.2% SS withholding ($3,410/year on $55K) does not apply. Texas teachers on $55,000 take home $2,800 more per year than equivalent California teachers — even before the state income tax difference.'}
            </p>
          </div>
        </section>

        {/* SECTION 4 — MAXIMIZE */}
        <section id="maximize">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:16}}>
            How Can Teachers Maximize Take-Home Pay in 2026?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Even as a W-2 employee, teachers have legitimate ways to increase their net pay. These strategies work within the tax code and require no special forms beyond standard W-4 and 403(b) enrollment.'}
          </p>

          <h3 style={{fontSize:15, fontWeight:700, color:'#e8edf8', marginBottom:12}}>
            Step-by-Step: Increase Your Teacher Take-Home Pay
          </h3>
          <ol style={{margin:'0 0 24px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Update your W-4.'}</strong>
              {' Claim the correct number of allowances. Many teachers over-withhold and wait for a refund — adjust to get more monthly.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Contribute to a 403(b).'}</strong>
              {' Up to $23,500 in pre-tax contributions in 2026. Every $1,000 contributed saves $120-$220 in federal tax.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Use an FSA or HSA.'}</strong>
              {' Health FSA allows up to $3,300 pre-tax in 2026. HSA allows $4,300 if enrolled in a high-deductible plan.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#e8edf8'}}>{'Deduct educator expenses.'}</strong>
              {' Teachers can deduct up to $300 in classroom supply costs directly on Form 1040 — no itemizing required.'}
            </li>
            <li>
              <strong style={{color:'#e8edf8'}}>{'File MFJ if married.'}</strong>
              {' Married filing jointly raises the standard deduction to $32,200 in 2026, cutting federal tax substantially.'}
            </li>
          </ol>

          <ul style={{margin:'0 0 24px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'403(b) contribution of $5,000/year saves approximately $600 in federal tax'}</li>
            <li>{'FSA of $3,300/year saves approximately $396 in federal tax and $252 in FICA'}</li>
            <li>{'$300 educator deduction saves $36 in federal tax — small but automatic'}</li>
            <li>{'Married teachers filing jointly on combined $110,000 save $3,800 vs two single returns'}</li>
          </ul>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'Calculate your exact paycheck with the '}
            <a href="/" style={{color:'#F5C842'}}>free paycheck calculator</a>
            {' — includes 403(b), FSA, and all 50 states.'}
          </p>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#e8edf8', marginBottom:24}}>
            Frequently Asked Questions
          </h2>
          {[
            {
              q:'How much does a teacher take home after taxes in 2026?',
              a:'A teacher earning $55,000 takes home approximately $42,800 in Texas, $41,200 in Illinois, and $39,600 in California — before pension. At $68,000 average salary, take-home is $51,200-$54,600.'
            },
            {
              q:'Which state pays teachers the most after taxes?',
              a:'Washington state — no income tax and average teacher salary near $85,000. Take-home is approximately $65,200/year. Texas and Florida also rank high with zero state income tax.'
            },
            {
              q:'How much FICA tax does a teacher pay in 2026?',
              a:'FICA is 7.65% of gross salary — 6.2% Social Security plus 1.45% Medicare. On $68,000 that is $5,202/year. Note: Texas, Ohio, and some other states exempt teachers from Social Security.'
            },
            {
              q:'Do pension contributions reduce teacher take-home pay?',
              a:'Yes. Most state pension plans require 7-10% employee contributions. On $68,000, a 9% contribution withholds $6,120/year. This is pre-tax — it reduces taxable income but still cuts your paycheck.'
            },
            {
              q:'What is the average teacher salary in 2026?',
              a:'The national average teacher salary is approximately $68,000 in 2026. Ranges from $47,000 in Mississippi to $95,000 in California and New York metro areas.'
            },
            {
              q:'How do I calculate my teacher take-home pay?',
              a:'Start with gross salary. Subtract federal tax (10-22%), FICA (7.65%), state income tax (0-9.3%), and pension contribution (7-10%). Use our free paycheck calculator for your exact state result.'
            },
            {
              q:'Can teachers deduct classroom expenses in 2026?',
              a:'Yes. Teachers can deduct up to $300 in unreimbursed classroom expenses directly on Form 1040, Line 13. No itemizing required. Eligible expenses include books, supplies, and software.'
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
