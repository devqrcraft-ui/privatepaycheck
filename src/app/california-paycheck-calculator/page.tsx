import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'California Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: 'California paycheck calculator 2026. See exact take-home pay after federal + CA state tax (up to 13.3%), SDI, and FICA. All salary levels. 100% private.',
  keywords: 'california paycheck calculator 2026, california take home pay, california salary after taxes, ca paycheck calculator',
  alternates: { canonical: 'https://www.privatepaycheck.com/california-paycheck-calculator' },
}
export default function Page() {
  const rows = [
    ['$30,000','$2,500','$1,942','$1,617'],
    ['$40,000','$3,333','$2,558','$2,090'],
    ['$50,000','$4,167','$3,117','$2,512'],
    ['$60,000','$5,000','$3,650','$2,896'],
    ['$75,000','$6,250','$4,375','$3,388'],
    ['$100,000','$8,333','$5,540','$4,158'],
    ['$150,000','$12,500','$7,650','$5,412'],
  ]
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"How much is taken out of a paycheck in California 2026?","acceptedAnswer":{"@type":"Answer","text":"California withholds federal income tax, Social Security (6.2%), Medicare (1.45%), California state income tax (1%–13.3%), and SDI (0.9%). On a $60,000 salary, total withholding is roughly 27%–31% depending on filing status."}},
          {"@type":"Question","name":"What is California state income tax rate in 2026?","acceptedAnswer":{"@type":"Answer","text":"California has 9 tax brackets in 2026 ranging from 1% to 13.3%. The 13.3% rate applies only to income over $1 million. Most middle-income earners fall in the 6%–9.3% range."}},
          {"@type":"Question","name":"Does California have SDI tax?","acceptedAnswer":{"@type":"Answer","text":"Yes. California SDI (State Disability Insurance) is 0.9% of gross wages in 2026 with no wage base cap. It is withheld from every paycheck automatically."}},
          {"@type":"Question","name":"How much is $75,000 salary take-home in California?","acceptedAnswer":{"@type":"Answer","text":"A $75,000 salary in California results in approximately $52,650/year take-home ($4,375/month) for a single filer after federal tax, FICA, CA state tax, and SDI."}}
        ]
      }) }} />
      <nav style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
        <a href="/" style={{ color: '#666' }}>Home</a> › California Paycheck Calculator
      </nav>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>California Paycheck Calculator 2026</h1>
      <p style={{ fontSize: 17, color: '#444', marginBottom: 12 }}>California has the highest state income tax in the US — up to <strong>13.3%</strong> — plus SDI. Use the table below to see your exact take-home pay, or use the <a href="/" style={{ color: '#1a56db' }}>free calculator</a> for your specific situation.</p>
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8, padding: '12px 16px', marginBottom: 28, fontSize: 14 }}>
        CA state tax rates 2026: 1% – 9.3% for most earners. SDI: 0.9% (no cap). CA SDI changed in 2024 — no wage base limit.
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>California Take-Home Pay by Salary (Single Filer, 2026)</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#f0f4ff' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Annual Salary</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Gross</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Monthly Net</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Biweekly Net</th>
        </tr></thead>
        <tbody>{rows.map(([sal,gross,net,bw]) => (
          <tr key={sal} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{sal}</td>
            <td style={{ padding: '10px 14px', color: '#555' }}>{gross}</td>
            <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1a56db' }}>{net}</td>
            <td style={{ padding: '10px 14px' }}>{bw}</td>
          </tr>
        ))}</tbody>
      </table>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>California Paycheck Deductions Breakdown</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: '#f0f4ff' }}>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Deduction</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Rate</th>
          <th style={{ padding: '10px 14px', textAlign: 'left' }}>Notes</th>
        </tr></thead>
        <tbody>{[
          ['Federal Income Tax','10%–37%','Based on taxable income after $15,000 standard deduction'],
          ['Social Security','6.2%','On wages up to $176,100'],
          ['Medicare','1.45%','No wage cap; +0.9% over $200k'],
          ['CA State Income Tax','1%–13.3%','9 brackets; most earners pay 6%–9.3%'],
          ['CA SDI','0.9%','No wage base cap since 2024'],
        ].map(([d,r,n]) => (
          <tr key={d} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 14px', fontWeight: 600 }}>{d}</td>
            <td style={{ padding: '10px 14px', color: '#c00', fontWeight: 700 }}>{r}</td>
            <td style={{ padding: '10px 14px', color: '#555', fontSize: 13 }}>{n}</td>
          </tr>
        ))}</tbody>
      </table>
      <div style={{ background: '#f0f4ff', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <strong>Want the exact number?</strong> The table uses single-filer estimates. Your actual take-home depends on filing status, allowances, and pre-tax deductions (401k, health insurance).{' '}
        <a href="/" style={{ color: '#1a56db', fontWeight: 700 }}>Calculate your exact California paycheck →</a>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Frequently Asked Questions</h2>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>Is California the highest taxed state?</h3>
      <p style={{ color: '#444', lineHeight: 1.7 }}>Yes, for high earners. California top rate of 13.3% is the highest state income tax in the US. However, for earners under $60,000, the effective state rate is typically 4%–6%, which is moderate compared to other high-tax states like New York or Oregon.</p>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 20 }}>How do I reduce my California paycheck taxes?</h3>
      <p style={{ color: '#444', lineHeight: 1.7 }}>Maximize pre-tax contributions: 401(k) up to $23,500 in 2026, HSA up to $4,300 (self-only). These reduce both federal and CA state taxable income. California does not conform to HSA deductions, but federal savings still apply.</p>
    
      <div style={{ borderTop: '2px solid #e5e7eb', marginTop: 40, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>Compare Other States</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 8, marginBottom: 24 }}>
          {([['California','california'],['Texas','texas'],['Florida','florida'],['New York','new-york'],['Illinois','illinois'],['Washington','washington'],['Nevada','nevada'],['Arizona','arizona'],['Colorado','colorado'],['Pennsylvania','pennsylvania']] as [string,string][]).map(([n,s]) => (
            <a key={s} href={"/" + s + "-paycheck-calculator"} style={{ display:'block', padding:'8px 12px', background:'#f8faff', border:'1px solid #e5e7eb', borderRadius:6, fontSize:13, fontWeight:600, color:'#1a56db', textDecoration:'none' }}>{n} Calculator</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
          <a href="/" style={{ color: '#1a56db', fontSize: 14 }}>Free Paycheck Calculator</a>
          <a href="/blog" style={{ color: '#1a56db', fontSize: 14 }}>Tax & Paycheck Blog</a>
          <a href="/blog/no-income-tax-states-2026" style={{ color: '#1a56db', fontSize: 14 }}>No Income Tax States</a>
          <a href="/blog/2026-federal-tax-brackets" style={{ color: '#1a56db', fontSize: 14 }}>2026 Tax Brackets</a>
        </div>
      </div>
    </main>
  )
}
