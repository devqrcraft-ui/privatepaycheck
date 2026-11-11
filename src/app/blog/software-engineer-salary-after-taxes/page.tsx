import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: '1099 vs W-2 Taxes 2026: Federal Tax Comparison',
  description: 'Compare estimated 2026 federal income and payroll taxes for $50,000 of W-2 wages and self-employment profit, with assumptions and deductions explained.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/software-engineer-salary-after-taxes' },
  openGraph: {
    title: '1099 vs W-2 Taxes 2026: Federal Tax Comparison',
    description: 'Compare estimated 2026 federal income and payroll taxes for $50,000 of W-2 wages and self-employment profit, with assumptions and deductions explained.',
    url: 'https://www.privatepaycheck.com/blog/software-engineer-salary-after-taxes',
    siteName: 'PrivatePaycheck',
    type: 'article',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'PrivatePaycheck 1099 vs W-2 tax comparison' }],
  },
}

const faqItems = [
  {
    q: 'Do 1099 workers pay more taxes than W-2 employees?',
    a: 'It depends on net business profit, deductions, filing status, and withholding. In this simplified 2026 federal comparison, a single filer with $50,000 of W-2 wages has about $7,645 in employee FICA and federal income tax; a sole proprietor with $50,000 of net profit has about $10,461 in self-employment tax and federal income tax before QBI or other business deductions. That is about $2,816 more under these assumptions, not a universal result.',
  },
  {
    q: 'What is the self-employment tax rate in 2026?',
    a: 'The general rate is 15.3% on 92.35% of net earnings from self-employment, subject to the Social Security wage base and Additional Medicare Tax rules. Generally, half of self-employment tax is deductible when figuring adjusted gross income.',
  },
  {
    q: 'Can a 1099 worker deduct the extra self-employment tax?',
    a: 'Generally, you can deduct one-half of self-employment tax as an adjustment to income. On $50,000 of net profit in this example, estimated self-employment tax is about $7,065 and the deduction is about $3,532.',
  },
  {
    q: 'What deductions can reduce a 1099 worker\'s tax bill?',
    a: 'Eligible business mileage, a qualifying home office, certain health insurance premiums, retirement contributions, and ordinary and necessary business expenses may reduce taxable income or profit. Rules and limits apply; a deduction does not reduce tax dollar-for-dollar.',
  },
  {
    q: 'Does a W-2 employee pay any self-employment tax?',
    a: 'No. A W-2 employee generally pays the employee share of Social Security and Medicare through payroll withholding. The employer separately pays its matching share. A person can have both W-2 wages and self-employment income.',
  },
  {
    q: 'At what income does the 1099 tax burden become significant?',
    a: 'Self-employment tax generally applies when net earnings from self-employment are $400 or more. For example, estimated self-employment tax is about $2,826 on $20,000 of net profit, $7,065 on $50,000, and $14,130 on $100,000, before considering the Social Security wage base or Additional Medicare Tax.',
  },
  {
    q: 'How do quarterly taxes work for 1099 workers?',
    a: 'You generally need estimated payments if you expect to owe at least $1,000 after withholding and refundable credits, though exceptions and safe-harbor rules apply. Withholding can count toward the requirement. Use IRS Form 1040-ES to determine whether and when to pay.',
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

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.privatepaycheck.com/blog"},{"@type":"ListItem","position":3,"name":"1099 vs W-2 Taxes 2026","item":"https://www.privatepaycheck.com/blog/software-engineer-salary-after-taxes"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"1099 vs W-2 Taxes 2026: Federal Tax Comparison","datePublished":"2026-05-21","dateModified":"2026-11-03","author":{"@type":"Organization","name":"the PrivatePaycheck Team","url":"https://www.privatepaycheck.com"},"reviewedBy":{"@type":"Organization","name":"the PrivatePaycheck Team","url":"https://www.privatepaycheck.com"},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://www.privatepaycheck.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.privatepaycheck.com/blog/software-engineer-salary-after-taxes"}}'

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleSchema }} />

      <article
        itemScope
        itemType="https://schema.org/BlogPosting"
        style={{
          maxWidth: 780,
          margin: '0 auto',
          padding: 'clamp(14px,4vw,28px)',
          background: '#07111F',
          color: '#C8D8EC',
          minHeight: '100vh',
        }}
      >
        <header>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 20 }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>Home</a>
            {' › '}
            <a href="/blog" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>Blog</a>
            {' › '}
            <span style={{ color: '#C8D8EC' }}>1099 vs W-2 Taxes 2026</span>
          </nav>

          <h1
            itemProp="headline"
            style={{
              fontSize: 'clamp(22px,5vw,24px)',
              fontWeight: 900,
              lineHeight: 1.3,
              color: '#C8D8EC',
              margin: '0 0 16px',
            }}
          >
            1099 vs W-2 Taxes 2026: Federal Tax Comparison
          </h1>

          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginBottom: 20, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
            <span>Last updated: November 3, 2026</span>
            <span>·</span>
            <span>By the PrivatePaycheck Team</span>
            <span>·</span>
            <span>{'~7 min read · 1,850 words'}</span>
          </div>
        </header>

        {/* ANSWER-FIRST */}
        <section id="answer">
          <div style={{
            background: 'rgba(232,184,75,0.07)',
            border: '1px solid rgba(232,184,75,0.25)',
            borderRadius: 10,
            padding: '18px 22px',
            marginBottom: 28,
          }}>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: '#C8D8EC' }}>
              {'On $50,000 of net self-employment profit, estimated self-employment tax is about $7,065. A W-2 employee earning $50,000 pays about $3,825 in employee FICA. In this simplified 2026 federal comparison for a single filer, total employee-level federal income and payroll taxes are about $10,461 for the self-employed worker versus $7,645 for the W-2 employee — a difference of about $2,816. This excludes state and local taxes, QBI, other deductions, credits, and employer payroll costs; actual results vary.'}
            </p>
          </div>
        </section>

        {/* KEY TAKEAWAYS */}
        <section id="key-takeaways">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8b84b', margin: '0 0 14px' }}>
            Key Takeaways
          </h2>
          <ul style={{ margin: '0 0 32px', paddingLeft: 20, lineHeight: 1.85, fontSize: 14, color: '#C8D8EC' }}>
            <li>{'Self-employment tax is generally 15.3% of 92.35% of net self-employment earnings, subject to Social Security and Additional Medicare rules'}</li>
            <li>{'In the stated $50,000 example, estimated federal income and payroll taxes differ by about $2,816 before QBI or other business deductions'}</li>
            <li>{'Half of the estimated $7,065 SE tax is about $3,532 and generally reduces adjusted gross income'}</li>
            <li>{'The 2026 business mileage rate is 72.5¢/mile Jan–Jun and 76¢/mile Jul–Dec; the trip date matters'}</li>
            <li>{'The 2026 401(k) employee elective-deferral limit is $24,500; plan and eligibility limits also apply'}</li>
          </ul>
        </section>

        {/* TABLE OF CONTENTS */}
        <section id="toc">
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 10,
            padding: '18px 22px',
            marginBottom: 32,
          }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#C8D8EC', marginBottom: 12 }}>
              Table of Contents
            </div>
            <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2, fontSize: 13 }}>
              <li><a href="#tax-difference" style={{ color: '#e8b84b', textDecoration: 'none' }}>How Much More Tax Does a 1099 Worker Pay?</a></li>
              <li><a href="#se-tax-explained" style={{ color: '#e8b84b', textDecoration: 'none' }}>What Is Self-Employment Tax?</a></li>
              <li><a href="#comparison-table" style={{ color: '#e8b84b', textDecoration: 'none' }}>Side-by-Side Tax Comparison 2026</a></li>
              <li><a href="#deductions" style={{ color: '#e8b84b', textDecoration: 'none' }}>Deductions That Close the Gap</a></li>
              <li><a href="#real-numbers" style={{ color: '#e8b84b', textDecoration: 'none' }}>Real Numbers: $35K, $50K, $75K, $100K</a></li>
              <li><a href="#quarterly-taxes" style={{ color: '#e8b84b', textDecoration: 'none' }}>Quarterly Estimated Taxes</a></li>
              <li><a href="#faq" style={{ color: '#e8b84b', textDecoration: 'none' }}>Frequently Asked Questions</a></li>
            </ol>
          </div>
        </section>

        {/* SECTION 1 */}
        <section id="tax-difference">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            How Much More Tax Does a 1099 Worker Pay?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'The core difference is who pays the employer share of FICA. W-2 employers pay 7.65% on top of your salary — you never see it. As a 1099 contractor, you are both employee and employer. You pay both halves yourself: 12.4% Social Security + 2.9% Medicare = 15.3% total.'}
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 24px', color: 'rgba(255,255,255,0.85)' }}>
            {'The deduction for one-half of SE tax generally reduces adjusted gross income; it does not reduce the SE tax itself. The total comparison also depends on income-tax deductions and credits.'}
          </p>
        </section>

        {/* SECTION 2 */}
        <section id="se-tax-explained">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            What Is Self-Employment Tax?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'Self-employment tax covers Social Security and Medicare for people who work for themselves. It generally applies when net earnings from self-employment are $400 or more. The IRS generally calculates it on 92.35% of net profit. The Social Security wage base applies, and Additional Medicare Tax may apply based on filing status and combined wages and self-employment income.'}
          </p>

          <blockquote style={{
            borderLeft: '3px solid #e8b84b',
            margin: '0 0 24px',
            padding: '12px 18px',
            background: 'rgba(232,184,75,0.05)',
            borderRadius: '0 8px 8px 0',
          }}>
            <p style={{ margin: 0, fontSize: 13, fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
              {'Self-employed people generally pay Social Security and Medicare taxes through self-employment tax and may deduct one-half of that tax as an adjustment to income.'}
            </p>
            <p style={{ margin: '8px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>
              — <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{ color: '#e8b84b', textDecoration: 'none' }}>IRS Self-Employed Tax Center</a>
            </p>
          </blockquote>

          <ul style={{ margin: '0 0 28px', paddingLeft: 20, lineHeight: 1.85, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <li>{'Social Security: 12.4% up to the 2026 wage base of $184,500; wages from employment also count toward the limit'}</li>
            <li>{'Medicare: 2.9% on all net earnings, no cap'}</li>
            <li>{'Additional Medicare Tax: 0.9% may apply above $200,000 for most filers, $125,000 for married filing separately, or $250,000 for married filing jointly; wages and self-employment income can both matter'}</li>
            <li>{'SE tax deduction: 50% of total SE tax reduces your adjusted gross income'}</li>
          </ul>
        </section>

        {/* SECTION 3 — TABLE */}
        <section id="comparison-table">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            Side-by-Side Tax Comparison 2026
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'Assumptions: $50,000 W-2 wages or $50,000 net sole-proprietor profit; single filer; 2026 standard deduction of $16,100; no state/local tax, QBI deduction, other adjustments, or credits. This is an estimate, not a payroll quote or tax return.'}
          </p>
          <div style={{ overflowX: 'auto', marginBottom: 28 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 520 }}>
              <thead>
                <tr style={{ background: 'rgba(232,184,75,0.12)', borderBottom: '2px solid rgba(232,184,75,0.3)' }}>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Item</th>
                  <th style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>1099 Worker</th>
                  <th style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>W-2 Employee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['W-2 wages / 1099 net profit', '$50,000', '$50,000'],
                  ['Self-employment tax (15.3%)', '$7,065', '—'],
                  ['Employee FICA (7.65%)', '—', '$3,825'],
                  ['SE tax deduction (50%)', '−$3,532', '—'],
                  ['Standard deduction 2026', '−$16,100', '−$16,100'],
                  ['Taxable income', '$30,368', '$33,900'],
                  ['Federal income tax (est.)', '$3,396', '$3,820'],
                ].map(([item, col1, col2], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>{item}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'right', color: 'rgba(255,255,255,0.85)' }}>{col1}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'right', color: 'rgba(255,255,255,0.85)' }}>{col2}</td>
                  </tr>
                ))}
                <tr style={{ background: 'rgba(232,184,75,0.08)', borderTop: '1px solid rgba(232,184,75,0.3)' }}>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>Total tax burden</td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>$10,461</td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>$7,645</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '0 0 28px', fontStyle: 'italic' }}>
            {'Difference: about $2,816 in this simplified example. It includes estimated federal income tax and employee-level Social Security and Medicare taxes; it is not a universal 1099-versus-W-2 difference.'}
          </p>
        </section>

        {/* SECTION 4 — DEDUCTIONS */}
        <section id="deductions">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            Deductions That Close the Gap
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'Eligible business expenses and adjustments may reduce taxable profit or income, but a deduction is not a dollar-for-dollar tax credit and does not automatically eliminate self-employment tax.'}
          </p>

          <ol style={{ margin: '0 0 20px', paddingLeft: 20, lineHeight: 1.95, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <li><strong style={{ color: '#C8D8EC' }}>{'Mileage deduction'}</strong>{' — The IRS standard business mileage rate is 72.5 cents per mile from January 1 through June 30, 2026, and 76 cents per mile from July 1 through December 31. See the '}<a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" target="_blank" rel="noopener noreferrer" style={{ color: '#e8b84b', textDecoration: 'none' }}>IRS mileage-rate table</a>{'.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Home office'}</strong>{' — The simplified method is generally $5 per square foot, up to 300 square feet, if the home-office requirements are met.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Health insurance'}</strong>{' — Premiums may qualify for the self-employed health-insurance deduction, subject to eligibility and earned-income limits.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Solo 401(k)'}</strong>{' — The 2026 employee elective-deferral limit is $24,500, plus an eligible employer contribution subject to plan and tax-law limits. See the '}<a href="https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500" target="_blank" rel="noopener noreferrer" style={{ color: '#e8b84b', textDecoration: 'none' }}>IRS 2026 limits</a>{'.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Business expenses'}</strong>{' — Phone, internet, equipment, software — deductible if used for business.'}</li>
          </ol>

          <ul style={{ margin: '0 0 28px', paddingLeft: 20, lineHeight: 1.85, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <li>{'Most W-2 employees cannot deduct ordinary unreimbursed employee business expenses on a federal return; limited exceptions may apply.'}</li>
            <li>{'A W-2 employee cannot contribute to a Solo 401(k) through that job; qualifying self-employment income may create separate eligibility.'}</li>
            <li>{'Federal employee home-office deductions are generally unavailable; state rules may differ.'}</li>
          </ul>
        </section>

        {/* SECTION 5 — REAL NUMBERS TABLE */}
        <section id="real-numbers">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            Real Numbers: $35K, $50K, $75K, $100K
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'Payroll-tax comparison only. SE tax is calculated on 92.35% of net earnings; W-2 employee FICA is 7.65% of wages. Federal income tax, the employer share of W-2 payroll tax, and state/local taxes are not included.'}
          </p>
          <div style={{ overflowX: 'auto', marginBottom: 28 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 480 }}>
              <thead>
                <tr style={{ background: 'rgba(232,184,75,0.12)', borderBottom: '2px solid rgba(232,184,75,0.3)' }}>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Net Income</th>
                  <th style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>SE Tax (1099)</th>
                  <th style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>FICA (W-2)</th>
                  <th style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>Extra Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['$35,000', '$4,945', '$2,678', '+$2,267'],
                  ['$50,000', '$7,065', '$3,825', '+$3,240'],
                  ['$75,000', '$10,597', '$5,738', '+$4,860'],
                  ['$100,000', '$14,130', '$7,650', '+$6,480'],
                ].map(([inc, se, fica, extra], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>{inc}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'right', color: 'rgba(255,255,255,0.85)' }}>{se}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'right', color: 'rgba(255,255,255,0.85)' }}>{fica}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'right', color: '#ff8a80', fontWeight: 600 }}>{extra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '0 0 28px', fontStyle: 'italic' }}>
            {'These figures compare the self-employed person’s SE tax with the employee share of W-2 FICA. They do not compare total tax liability or include the employer-side W-2 payroll cost.'}
          </p>
        </section>

        {/* SECTION 6 — QUARTERLY */}
        <section id="quarterly-taxes">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            Quarterly Estimated Taxes for 1099 Workers
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'W-2 employees usually pay through payroll withholding. Self-employed people generally need estimated payments if they expect to owe at least $1,000 after withholding and refundable credits; exceptions and safe-harbor rules apply. Underpayments may trigger an IRS penalty, which can vary by period.'}
          </p>

          <ul style={{ margin: '0 0 20px', paddingLeft: 20, lineHeight: 1.85, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <li>{'Q1 (Jan–Mar): due April 15, 2026'}</li>
            <li>{'Q2 (Apr–May): due June 15, 2026'}</li>
            <li>{'Q3 (Jun–Aug): due September 15, 2026'}</li>
            <li>{'Q4 (Sep–Dec): due January 15, 2027'}</li>
          </ul>

          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 28px', color: 'rgba(255,255,255,0.85)' }}>
            {'Use IRS Form 1040-ES to determine whether and how much to pay; withholding can count toward the requirement. See the '}<a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer" style={{ color: '#e8b84b', textDecoration: 'none' }}>IRS estimated-tax guidance</a>{'.'}
          </p>
        </section>

        {/* INFORMATION GAIN */}
        <section id="information-gain">
          <div style={{
            background: 'rgba(232,184,75,0.05)',
            border: '1px solid rgba(232,184,75,0.2)',
            borderRadius: 10,
            padding: '18px 22px',
            marginBottom: 32,
          }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: '#e8b84b', marginBottom: 10, textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>
              Mileage Deduction Example
            </div>
            <p style={{ margin: '0 0 12px', fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.85)' }}>
              {'A mileage deduction reduces eligible business profit; it does not reduce tax dollar-for-dollar. For 2026, 10,000 eligible, documented business miles yield $7,250 if driven January–June or $7,600 if driven July–December. Apply each rate to miles driven in its period.'}
            </p>
            <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.85, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
              <li>{'Only eligible business miles count; commuting and personal miles do not qualify.'}</li>
              <li>{'Actual tax savings depend on net profit, filing status, other deductions, and state rules.'}</li>
              <li><a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" target="_blank" rel="noopener noreferrer" style={{ color: '#e8b84b', textDecoration: 'none' }}>Check the IRS 2026 standard mileage rates and rules.</a></li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 20px' }}>
            Frequently Asked Questions
          </h2>

          {faqItems.map(({ q, a }, i) => (
            <div key={i} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#C8D8EC', margin: '0 0 8px' }}>{q}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.8)' }}>{a}</p>
            </div>
          ))}
        </section>

        {/* RELATED ARTICLES */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 16px' }}>
            Related Articles
          </h2>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 2, fontSize: 14 }}>
            <li><a href="/blog/software-engineer-take-home-pay" style={{ color: '#e8b84b', textDecoration: 'none' }}>Software Engineer Take-Home Pay</a></li>
            <li><a href="/1099-paycheck-calculator" style={{ color: '#e8b84b', textDecoration: 'none' }}>1099 Paycheck Calculator</a></li>
            <li><a href="/raise-calculator" style={{ color: '#e8b84b', textDecoration: 'none' }}>Raise Calculator</a></li>
          </ul>
        </section>

        <AuthorBox />
      </article>
    </>
  )
}
