import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Nurse Salary After Taxes 2026: $75K = $57,200 Take-Home',
  description: 'A registered nurse earning $75K in 2026 takes home $57,200 after taxes. State-by-state breakdown, overtime impact, and free paycheck calculator.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/nurse-salary-after-taxes' },
  openGraph: {
    title: 'Nurse Salary After Taxes 2026: $75K = $57,200 Take-Home',
    description: 'See your real nurse take-home pay after federal, state, and FICA deductions.',
    type: 'article',
  },
}

const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does a nurse take home after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"A registered nurse earning $75,000 takes home approximately $57,200 after federal tax, FICA, and average state tax — about $4,767/month. In no-tax states like Texas or Florida, take-home reaches $59,400."}},{"@type":"Question","name":"Which state pays nurses the most after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"Washington state — no income tax and average RN salary near $98,000. Nurses keep approximately $74,800/year. Texas and Florida also rank high with no state income tax on $75,000 salary."}},{"@type":"Question","name":"How much FICA tax does a nurse pay in 2026?","acceptedAnswer":{"@type":"Answer","text":"FICA is 7.65% of gross salary — 6.2% Social Security up to the $184,500 wage base plus 1.45% Medicare. On a $75,000 salary, FICA is $5,738 per year or $478/month."}},{"@type":"Question","name":"Does overtime pay get taxed more for nurses?","acceptedAnswer":{"@type":"Answer","text":"Overtime is taxed at your marginal rate, not a special higher rate. However, large overtime checks push more income into higher brackets. On $75K base plus $10K overtime, your effective rate rises slightly."}},{"@type":"Question","name":"What is the average RN salary in 2026?","acceptedAnswer":{"@type":"Answer","text":"The national average registered nurse salary is approximately $85,000 in 2026 according to BLS data. This ranges from $58,000 in South Dakota to $130,000 in California."}},{"@type":"Question","name":"How does the no-tax-on-overtime rule affect nurses in 2026?","acceptedAnswer":{"@type":"Answer","text":"Under OBBBA 2026, overtime pay up to $12,500 single / $25,000 MFJ is excluded from federal income tax. Nurses who work significant overtime can save up to $2,750 in federal income tax on that income."}},{"@type":"Question","name":"How do I calculate my nurse take-home pay?","acceptedAnswer":{"@type":"Answer","text":"Start with gross salary. Subtract federal income tax (22% bracket at $75K), FICA (7.65%), and state income tax (0-9.3%). Use our free paycheck calculator for your exact state and pay frequency."}}]}'

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.privatepaycheck.com/blog"},{"@type":"ListItem","position":3,"name":"Nurse Salary After Taxes 2026","item":"https://www.privatepaycheck.com/blog/nurse-salary-after-taxes"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Nurse Salary After Taxes 2026: $75K = $57,200 Take-Home","datePublished":"2026-05-28","dateModified":"2026-05-28","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://www.privatepaycheck.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.privatepaycheck.com/blog/nurse-salary-after-taxes"}}'

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
          <nav aria-label="breadcrumb" style={{fontSize:13, color:'rgba(255,255,255,0.45)', marginBottom:16}}>
            <a href="/" style={{color:'rgba(255,255,255,0.45)', textDecoration:'none'}}>Home</a>
            {' › '}
            <a href="/blog" style={{color:'rgba(255,255,255,0.45)', textDecoration:'none'}}>Blog</a>
            {' › '}
            <span style={{color:'rgba(255,255,255,0.65)'}}>Nurse Salary After Taxes 2026</span>
          </nav>

          <h1 itemProp="headline" style={{fontSize:'clamp(22px,5vw,24px)', fontWeight:900, color:'#e8edf8', lineHeight:1.3, marginBottom:12}}>
            Nurse Salary After Taxes 2026: How Much Do RNs Actually Take Home?
          </h1>

          <div style={{fontSize:12, color:'rgba(255,255,255,0.45)', marginBottom:20, display:'flex', gap:12, flexWrap:'wrap' as const}}>
            <span>Last updated: May 2026</span>
            <span>·</span>
            <span>By Ethan Blake · Tax Compliance Specialist</span>
            <span>·</span>
            <span>{'~8 min read · 2,100 words'}</span>
          </div>
        </header>

        <section id="answer-first">
          <div style={{background:'rgba(245,200,66,0.07)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
            <p style={{margin:0, fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,0.9)'}}>
              {'A registered nurse earning $75,000 in 2026 takes home approximately $57,200 after federal tax, FICA, and average state tax — about $4,767/month. In no-tax states like Texas or Florida, take-home reaches $59,400. California nurses at $75K keep only $53,800 due to state income tax up to 9.3%. Overtime exclusion under OBBBA 2026 can save nurses up to $2,750 in federal tax.'}
            </p>
          </div>
        </section>

        <section id="key-takeaways">
          <div style={{background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.25)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
            <div style={{fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13}}>KEY TAKEAWAYS</div>
            <ul style={{margin:0, padding:'0 0 0 18px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
              <li>{'$75K RN salary = $57,200 take-home on average — $4,767/month'}</li>
              <li>{'No-tax states (TX, FL, WA) add $2,200/year vs average state tax'}</li>
              <li>{'FICA: 7.65% = $5,738/year on $75,000 salary'}</li>
              <li>{'OBBBA 2026 overtime exclusion: up to $12,500 overtime tax-free (single)'}</li>
              <li>{'California nurses keep $3,400 less per year than Texas nurses at same salary'}</li>
              <li>{'National average RN salary: $85,000 — take-home $63,800 in Texas'}</li>
            </ul>
          </div>
        </section>

        <section id="toc">
          <div style={{background:'rgba(245,200,66,0.06)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
            <div style={{fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13}}>TABLE OF CONTENTS</div>
            <ol style={{margin:0, padding:'0 0 0 18px', lineHeight:2, fontSize:14}}>
              {[
                {label:'Nurse Take-Home Pay by State', id:'by-state'},
                {label:'Full Tax Breakdown on $75K Salary', id:'breakdown'},
                {label:'How Overtime Affects Nurse Take-Home Pay', id:'overtime'},
                {label:'Nurse Salary After Taxes by Pay Frequency', id:'pay-frequency'},
                {label:'Highest and Lowest Paying States for Nurses', id:'states'},
                {label:'How to Increase Nurse Take-Home Pay', id:'increase'},
                {label:'Frequently Asked Questions', id:'faq'},
              ].map(({label, id}) => (
                <li key={id}><a href={'#'+id} style={{color:'#F5C842', textDecoration:'none'}}>{label}</a></li>
              ))}
            </ol>
          </div>
        </section>

        <section id="by-state">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:800, color:'#e8edf8', margin:'32px 0 14px', lineHeight:1.35}}>
            Nurse Take-Home Pay by State in 2026
          </h2>
          <p style={{fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            State income tax is the biggest variable in nurse take-home pay. On a $75,000 salary, the gap between Texas and California is over $3,400 per year. Here is what RNs keep in major states.
          </p>
          <div style={{overflowX:'auto' as const, marginBottom:24, borderRadius:6, border:'1px solid rgba(255,255,255,0.08)'}}>
            <table style={{width:'100%', borderCollapse:'collapse' as const, fontSize:13}}>
              <thead>
                <tr>
                  {['State','State Tax Rate','Annual Take-Home','Monthly Take-Home'].map(h => (
                    <th key={h} style={{background:'rgba(255,255,255,0.05)', color:'#F5C842', padding:'10px 14px', textAlign:'left' as const, fontSize:12, fontFamily:'monospace', letterSpacing:'0.04em', borderBottom:'1px solid rgba(245,200,66,0.2)'}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Texas','None','$59,400','$4,950'],
                  ['Florida','None','$59,400','$4,950'],
                  ['Washington','None','$59,400','$4,950'],
                  ['New York','6.85%','$55,800','$4,650'],
                  ['Illinois','4.95%','$56,900','$4,742'],
                  ['California','9.30%','$53,800','$4,483'],
                ].map((row, i, arr) => (
                  <tr key={i} style={i === arr.length - 1 ? {background:'rgba(245,200,66,0.08)', borderTop:'1px solid rgba(245,200,66,0.3)'} : {borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
                    {row.map((cell, j) => (
                      <td key={j} style={{padding:'10px 14px', color: i === arr.length - 1 ? '#F5C842' : 'rgba(255,255,255,0.85)', fontWeight: i === arr.length - 1 ? 700 : 400}}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <blockquote style={{borderLeft:'3px solid rgba(245,200,66,0.5)', margin:'24px 0', padding:'12px 20px', background:'rgba(245,200,66,0.04)', borderRadius:'0 6px 6px 0'}}>
            <p style={{margin:0, fontSize:13, fontStyle:'italic', color:'rgba(255,255,255,0.7)', lineHeight:1.7}}>
              "Wages and salaries are subject to federal income tax withholding based on the employee's W-4 and filing status." — <a href="https://www.irs.gov/individuals/employees/tax-withholding" rel="nofollow" target="_blank" style={{color:'#F5C842'}}>IRS Tax Withholding Guide</a>
            </p>
          </blockquote>
        </section>

        <section id="breakdown">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:800, color:'#e8edf8', margin:'32px 0 14px', lineHeight:1.35}}>
            Full Tax Breakdown on $75K Nurse Salary in 2026
          </h2>
          <p style={{fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            On a $75,000 gross salary, here is every deduction a single RN in Texas faces in 2026. State tax is zero — other states add $1,200 to $5,600 on top.
          </p>
          <div style={{overflowX:'auto' as const, marginBottom:24, borderRadius:6, border:'1px solid rgba(255,255,255,0.08)'}}>
            <table style={{width:'100%', borderCollapse:'collapse' as const, fontSize:13}}>
              <thead>
                <tr>
                  {['Deduction','Rate','Annual Amount','Monthly'].map(h => (
                    <th key={h} style={{background:'rgba(255,255,255,0.05)', color:'#F5C842', padding:'10px 14px', textAlign:'left' as const, fontSize:12, fontFamily:'monospace', letterSpacing:'0.04em', borderBottom:'1px solid rgba(245,200,66,0.2)'}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Federal Income Tax','22% marginal','$9,124','$760'],
                  ['Social Security','6.2%','$4,650','$388'],
                  ['Medicare','1.45%','$1,088','$91'],
                  ['State Tax (TX)','0%','$0','$0'],
                  ['Take-Home (TX)','—','$59,400','$4,950'],
                ].map((row, i, arr) => (
                  <tr key={i} style={i === arr.length - 1 ? {background:'rgba(245,200,66,0.08)', borderTop:'1px solid rgba(245,200,66,0.3)'} : {borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
                    {row.map((cell, j) => (
                      <td key={j} style={{padding:'10px 14px', color: i === arr.length - 1 ? '#F5C842' : 'rgba(255,255,255,0.85)', fontWeight: i === arr.length - 1 ? 700 : 400}}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="overtime">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:800, color:'#e8edf8', margin:'32px 0 14px', lineHeight:1.35}}>
            How Overtime Affects Nurse Take-Home Pay in 2026
          </h2>
          <p style={{fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            Nurses frequently work overtime — 12-hour shifts, double shifts, and weekend differentials add up. Under <strong style={{color:'#e8edf8'}}>OBBBA 2026</strong>, overtime pay up to $12,500 (single) is excluded from federal income tax.
          </p>
          <ul style={{paddingLeft:20, marginBottom:16, lineHeight:1.9, fontSize:14, color:'rgba(255,255,255,0.85)'}}>
            <li>Base salary $75,000 + $10,000 overtime = $85,000 gross</li>
            <li>Under OBBBA: $10,000 overtime excluded from federal income tax</li>
            <li>Federal tax savings: approximately $2,200 on excluded overtime</li>
            <li>Overtime still subject to FICA (7.65%) regardless of exclusion</li>
            <li>State taxes still apply to overtime in most states</li>
          </ul>
          <ol style={{paddingLeft:20, marginBottom:16, lineHeight:1.9, fontSize:14, color:'rgba(255,255,255,0.85)'}}>
            <li>Track overtime hours separately on your pay stub</li>
            <li>Confirm your employer correctly excludes overtime from federal withholding</li>
            <li>File Form W-4 update if withholding does not reflect OBBBA changes</li>
            <li>Use our <a href="/blog/how-to-calculate-paycheck-taxes" style={{color:'#F5C842', textDecoration:'none'}}>paycheck calculator</a> to verify your exact overtime take-home</li>
          </ol>
        </section>

        <section id="pay-frequency">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:800, color:'#e8edf8', margin:'32px 0 14px', lineHeight:1.35}}>
            Nurse Salary After Taxes by Pay Frequency in 2026
          </h2>
          <p style={{fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            Most hospitals pay nurses biweekly — 26 paychecks per year. Here is what a $75,000 RN takes home per paycheck in Texas.
          </p>
          <div style={{overflowX:'auto' as const, marginBottom:24, borderRadius:6, border:'1px solid rgba(255,255,255,0.08)'}}>
            <table style={{width:'100%', borderCollapse:'collapse' as const, fontSize:13}}>
              <thead>
                <tr>
                  {['Pay Frequency','Gross Per Check','Take-Home Per Check','Checks/Year'].map(h => (
                    <th key={h} style={{background:'rgba(255,255,255,0.05)', color:'#F5C842', padding:'10px 14px', textAlign:'left' as const, fontSize:12, fontFamily:'monospace', letterSpacing:'0.04em', borderBottom:'1px solid rgba(245,200,66,0.2)'}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Weekly','$1,442','$1,142','52'],
                  ['Biweekly','$2,885','$2,285','26'],
                  ['Semi-monthly','$3,125','$2,475','24'],
                  ['Monthly','$6,250','$4,950','12'],
                ].map((row, i, arr) => (
                  <tr key={i} style={i === arr.length - 1 ? {background:'rgba(245,200,66,0.08)', borderTop:'1px solid rgba(245,200,66,0.3)'} : {borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
                    {row.map((cell, j) => (
                      <td key={j} style={{padding:'10px 14px', color: i === arr.length - 1 ? '#F5C842' : 'rgba(255,255,255,0.85)', fontWeight: i === arr.length - 1 ? 700 : 400}}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="states">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:800, color:'#e8edf8', margin:'32px 0 14px', lineHeight:1.35}}>
            Highest and Lowest Paying States for Nurses After Taxes
          </h2>
          <p style={{fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            Average RN salaries vary by $72,000 between the lowest and highest states. After taxes, the gap narrows but remains significant. See our <a href="/blog/no-income-tax-states-2026" style={{color:'#F5C842', textDecoration:'none'}}>no income tax states guide</a> for full state comparisons.
          </p>
          <ul style={{paddingLeft:20, marginBottom:16, lineHeight:1.9, fontSize:14, color:'rgba(255,255,255,0.85)'}}>
            <li><strong style={{color:'#e8edf8'}}>California</strong> — $130,000 avg, $89,400 after taxes</li>
            <li><strong style={{color:'#e8edf8'}}>Washington</strong> — $98,000 avg, $74,800 after taxes (no state tax)</li>
            <li><strong style={{color:'#e8edf8'}}>New York</strong> — $96,000 avg, $71,200 after taxes</li>
            <li><strong style={{color:'#e8edf8'}}>Texas</strong> — $80,000 avg, $63,200 after taxes (no state tax)</li>
            <li><strong style={{color:'#e8edf8'}}>South Dakota</strong> — $58,000 avg, $46,800 after taxes (no state tax)</li>
          </ul>
        </section>

        <section id="increase">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:800, color:'#e8edf8', margin:'32px 0 14px', lineHeight:1.35}}>
            How to Increase Nurse Take-Home Pay in 2026
          </h2>
          <p style={{fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            Every pre-tax benefit reduces your taxable income and increases take-home pay. Nurses have strong options through employer benefits. See the full guide on <a href="/blog/how-to-increase-take-home-pay" style={{color:'#F5C842', textDecoration:'none'}}>how to increase take-home pay</a>.
          </p>
          <ul style={{paddingLeft:20, marginBottom:16, lineHeight:1.9, fontSize:14, color:'rgba(255,255,255,0.85)'}}>
            <li>401(k) contributions up to $23,500 — reduces federal taxable income dollar for dollar</li>
            <li>HSA contributions up to $4,300 — triple tax advantage for high-deductible plans</li>
            <li>FSA for dependent care — up to $5,000 pre-tax for childcare</li>
            <li>Update W-4 after marriage, child, or major income change</li>
            <li>Work in a no-income-tax state — saves $1,200-$5,600/year at $75K</li>
          </ul>
        </section>

        <section id="faq" style={{marginTop:40}}>
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:800, color:'#e8edf8', margin:'0 0 14px', lineHeight:1.35}}>
            Frequently Asked Questions
          </h2>
          {[
            ['How much does a nurse take home after taxes in 2026?', 'A registered nurse earning $75,000 takes home approximately $57,200 after federal tax, FICA, and average state tax — about $4,767/month. In no-tax states like Texas or Florida, take-home reaches $59,400.'],
            ['Which state pays nurses the most after taxes in 2026?', 'Washington state — no income tax and average RN salary near $98,000. Nurses keep approximately $74,800/year. Texas and Florida also rank high with no state income tax.'],
            ['How much FICA tax does a nurse pay in 2026?', 'FICA is 7.65% of gross salary — 6.2% Social Security plus 1.45% Medicare. On a $75,000 salary, FICA is $5,738 per year or $478/month.'],
            ['Does overtime pay get taxed more for nurses?', 'Overtime is taxed at your marginal rate. Under OBBBA 2026, up to $12,500 in overtime is excluded from federal income tax for single filers — saving nurses up to $2,750.'],
            ['What is the average RN salary in 2026?', 'The national average registered nurse salary is approximately $85,000 in 2026 according to BLS data. This ranges from $58,000 in South Dakota to $130,000 in California.'],
            ['How does the no-tax-on-overtime rule affect nurses in 2026?', 'Under OBBBA 2026, overtime pay up to $12,500 single / $25,000 MFJ is excluded from federal income tax. Nurses who work significant overtime can save up to $2,750 in federal tax.'],
            ['How do I calculate my nurse take-home pay?', 'Start with gross salary. Subtract federal income tax (22% bracket at $75K), FICA (7.65%), and state income tax (0-9.3%). Use our free paycheck calculator for your exact state and pay frequency.'],
          ].map(([q, a], i, arr) => (
            <div key={i} style={{borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', padding:'18px 0'}}>
              <h3 style={{fontSize:15, fontWeight:600, color:'#e8edf8', margin:'0 0 8px'}}>{q}</h3>
              <p style={{fontSize:14, color:'rgba(255,255,255,0.8)', margin:0, lineHeight:1.7}}>{a}</p>
            </div>
          ))}
        </section>

        <section style={{marginTop:40}}>
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:800, color:'#e8edf8', margin:'0 0 16px', lineHeight:1.35}}>Related Salary Guides</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:12}}>
            {[
              ['/blog/teacher-salary-after-taxes', 'Teacher Salary After Taxes 2026', 'GUIDE'],
              ['/blog/electrician-salary-after-taxes', 'Electrician Salary After Taxes 2026', 'GUIDE'],
              ['/blog/75k-a-year-after-taxes', '$75K After Taxes 2026', 'CALCULATOR'],
              ['/blog/how-to-increase-take-home-pay', 'Increase Take-Home Pay', 'GUIDE'],
            ].map(([href, title, tag]) => (
              <a key={href} href={href} style={{background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:6, padding:16, textDecoration:'none', display:'block'}}>
                <div style={{fontSize:10, color:'#F5C842', fontFamily:'monospace', letterSpacing:'0.04em', marginBottom:6}}>{tag}</div>
                <div style={{color:'#e8edf8', fontSize:13, fontWeight:600, lineHeight:1.4}}>{title}</div>
              </a>
            ))}
          </div>
        </section>

        <AuthorBox />
      </article>
    </>
  )
}
