import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: '1099 vs W-2 Taxes 2026: Which Costs You More?',
  description: '1099 workers pay 7.65% more in taxes than W-2 on same income. On $50K that is $3,825 extra. Full 2026 comparison with calculator.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/1099-vs-w2-taxes-2026' }
}

const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do 1099 workers pay more taxes than W-2 employees?","acceptedAnswer":{"@type":"Answer","text":"Yes. 1099 workers pay the full 15.3% self-employment tax (Social Security + Medicare). W-2 employees pay only 7.65% because their employer covers the other half. On $50,000 income, that is $3,825 more in taxes for a 1099 worker."}},{"@type":"Question","name":"What is the self-employment tax rate in 2026?","acceptedAnswer":{"@type":"Answer","text":"The self-employment tax rate is 15.3% in 2026: 12.4% for Social Security (on income up to $184,500) and 2.9% for Medicare (no cap). You can deduct half of this tax on your federal return."}},{"@type":"Question","name":"Can a 1099 worker deduct the extra self-employment tax?","acceptedAnswer":{"@type":"Answer","text":"Yes. The IRS allows you to deduct 50% of your self-employment tax from gross income on Schedule 1. On $50,000 net profit, your SE tax is about $7,065 and you can deduct $3,533 before calculating income tax."}},{"@type":"Question","name":"What deductions can reduce a 1099 worker\'s tax bill?","acceptedAnswer":{"@type":"Answer","text":"1099 workers can deduct business mileage (72.5 cents per mile in 2026), home office, health insurance premiums (100% deductible), retirement contributions (up to $23,500 in a Solo 401k), and business equipment under Section 179."}},{"@type":"Question","name":"Does a W-2 employee pay any self-employment tax?","acceptedAnswer":{"@type":"Answer","text":"No. W-2 employees do not pay self-employment tax. Their employer withholds 7.65% (employee share of FICA) and pays a matching 7.65% (employer share). The employee never sees or pays the employer half."}},{"@type":"Question","name":"At what income does the 1099 tax burden become significant?","acceptedAnswer":{"@type":"Answer","text":"The self-employment tax applies from the first dollar of net profit above $400. At $20,000 net profit, a 1099 worker owes about $2,826 in SE tax alone. At $50,000, that rises to $7,065. At $100,000, it is $14,130."}},{"@type":"Question","name":"How do quarterly taxes work for 1099 workers?","acceptedAnswer":{"@type":"Answer","text":"1099 workers must pay estimated taxes four times per year: April 15, June 16, September 15, and January 15. The IRS expects you to pay at least 90% of the current year\'s tax or 100% of last year\'s tax to avoid an underpayment penalty."}}]}'

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"1099 vs W-2 Taxes 2026","item":"https://www.gigwisetax.com/blog/1099-vs-w2-taxes-2026"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"1099 vs W-2 Taxes 2026: Which Costs You More?","datePublished":"2026-05-21","dateModified":"2026-05-21","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/blog/1099-vs-w2-taxes-2026"}}'

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
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 20 }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</a>
            {' › '}
            <a href="/blog" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Blog</a>
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
            1099 vs W-2 Taxes 2026: Which Costs You More?
          </h1>

          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginBottom: 20, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
            <span>Last updated: May 2026</span>
            <span>·</span>
            <span>By Ethan Blake · Tax Compliance Specialist</span>
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
              {'A 1099 independent contractor pays 15.3% self-employment tax — the full FICA amount. A W-2 employee pays only 7.65% because the employer covers the other half. On $50,000 net income, that difference is $3,825 per year. However, 1099 workers get powerful deductions — mileage, home office, health insurance — that W-2 employees cannot claim.'}
            </p>
          </div>
        </section>

        {/* KEY TAKEAWAYS */}
        <section id="key-takeaways">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8b84b', margin: '0 0 14px' }}>
            Key Takeaways
          </h2>
          <ul style={{ margin: '0 0 32px', paddingLeft: 20, lineHeight: 1.85, fontSize: 14, color: '#C8D8EC' }}>
            <li>{'1099 workers pay 15.3% SE tax vs 7.65% for W-2 — a gap of 7.65% on all earned income'}</li>
            <li>{'On $50,000, the extra SE tax burden is $3,825 before any deductions'}</li>
            <li>{'1099 workers can deduct 50% of SE tax, reducing their taxable income by up to $3,533 at $50K'}</li>
            <li>{'Mileage deduction at 72.5 cents/mile (2026) can offset thousands in SE tax'}</li>
            <li>{'Solo 401(k) contributions up to $23,500 slash taxable income significantly'}</li>
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
            {'The IRS does give 1099 workers one offset: you can deduct 50% of SE tax from gross income. So the actual extra cost is closer to 5.6% after the deduction — but still real money.'}
          </p>
        </section>

        {/* SECTION 2 */}
        <section id="se-tax-explained">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            What Is Self-Employment Tax?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'Self-employment tax covers Social Security and Medicare for people who work for themselves. It applies to net profit above $400. The IRS calculates it on 92.35% of your net earnings (not 100%) to simulate the employer deduction a W-2 worker would receive.'}
          </p>

          <blockquote style={{
            borderLeft: '3px solid #e8b84b',
            margin: '0 0 24px',
            padding: '12px 18px',
            background: 'rgba(232,184,75,0.05)',
            borderRadius: '0 8px 8px 0',
          }}>
            <p style={{ margin: 0, fontSize: 13, fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
              {'The IRS states: "If you are self-employed, you are responsible for paying the full 15.3% self-employment tax. However, you can deduct one-half of the self-employment tax as an adjustment to income."'}
            </p>
            <p style={{ margin: '8px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
              — <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{ color: '#e8b84b', textDecoration: 'none' }}>IRS Self-Employed Tax Center</a>
            </p>
          </blockquote>

          <ul style={{ margin: '0 0 28px', paddingLeft: 20, lineHeight: 1.85, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <li>{'Social Security: 12.4% on income up to $184,500 (2026 wage base)'}</li>
            <li>{'Medicare: 2.9% on all net earnings, no cap'}</li>
            <li>{'Additional Medicare: 0.9% on earnings above $200,000 single / $250,000 MFJ'}</li>
            <li>{'SE tax deduction: 50% of total SE tax reduces your adjusted gross income'}</li>
          </ul>
        </section>

        {/* SECTION 3 — TABLE */}
        <section id="comparison-table">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            Side-by-Side Tax Comparison 2026
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'Both workers earn $50,000 gross. Single filer, standard deduction $16,100. No other adjustments.'}
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
                  ['Gross income', '$50,000', '$50,000'],
                  ['Self-employment tax (15.3%)', '$7,065', '—'],
                  ['Employee FICA (7.65%)', '—', '$3,825'],
                  ['Employer FICA (you pay as 1099)', '$3,825 hidden', 'Employer pays'],
                  ['SE tax deduction (50%)', '−$3,533', '—'],
                  ['Standard deduction 2026', '−$16,100', '−$16,100'],
                  ['Taxable income', '$30,367', '$33,900'],
                  ['Federal income tax (est.)', '$3,378', '$3,859'],
                ].map(([item, col1, col2], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>{item}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'right', color: 'rgba(255,255,255,0.85)' }}>{col1}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'right', color: 'rgba(255,255,255,0.85)' }}>{col2}</td>
                  </tr>
                ))}
                <tr style={{ background: 'rgba(232,184,75,0.08)', borderTop: '1px solid rgba(232,184,75,0.3)' }}>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>Total tax burden</td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>$10,443</td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>$7,684</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '0 0 28px', fontStyle: 'italic' }}>
            {'Difference: $2,759 more for 1099 worker at $50K after the SE tax deduction. Before deduction the gap is $3,825.'}
          </p>
        </section>

        {/* SECTION 4 — DEDUCTIONS */}
        <section id="deductions">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            Deductions That Close the Gap
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'1099 workers have access to deductions unavailable to W-2 employees. Used correctly, these can eliminate most or all of the SE tax penalty.'}
          </p>

          <ol style={{ margin: '0 0 20px', paddingLeft: 20, lineHeight: 1.95, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <li><strong style={{ color: '#C8D8EC' }}>{'Mileage deduction'}</strong>{' — 72.5 cents per mile in 2026. Drive 10,000 miles for work and deduct $7,250 from gross income.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Home office'}</strong>{' — $5 per square foot, up to $1,500 (simplified method). Or deduct actual expenses proportionally.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Health insurance'}</strong>{' — 100% of premiums deductible on Schedule 1 if you are not eligible for employer coverage.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Solo 401(k)'}</strong>{' — Contribute up to $23,500 as employee + 25% of net earnings as employer. Massive taxable income reduction.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Business expenses'}</strong>{' — Phone, internet, equipment, software — deductible if used for business.'}</li>
          </ol>

          <ul style={{ margin: '0 0 28px', paddingLeft: 20, lineHeight: 1.85, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <li>{'W-2 employees cannot deduct unreimbursed work expenses under current law (suspended through 2025, extended 2026)'}</li>
            <li>{'W-2 workers cannot contribute to a Solo 401(k) — only employer-sponsored plans'}</li>
            <li>{'W-2 workers cannot deduct home office unless an employer mandates remote work with no office available'}</li>
          </ul>
        </section>

        {/* SECTION 5 — REAL NUMBERS TABLE */}
        <section id="real-numbers">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            Real Numbers: $35K, $50K, $75K, $100K
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'SE tax owed at each income level. Single filer, no deductions beyond SE deduction and standard deduction.'}
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
                <tr style={{ background: 'rgba(232,184,75,0.08)', borderTop: '1px solid rgba(232,184,75,0.3)' }}>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>$184,500 (SS cap)</td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>$26,100</td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>$14,114</td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>+$11,986</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '0 0 28px', fontStyle: 'italic' }}>
            {'Extra cost = additional SE tax before the 50% SE deduction. After deduction, effective extra cost is roughly 5.6% of net income.'}
          </p>
        </section>

        {/* SECTION 6 — QUARTERLY */}
        <section id="quarterly-taxes">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            Quarterly Estimated Taxes for 1099 Workers
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'W-2 employees have taxes withheld automatically each paycheck. 1099 workers must send payments to the IRS four times a year. Missing a deadline triggers an underpayment penalty — currently around 7% annualized.'}
          </p>

          <ul style={{ margin: '0 0 20px', paddingLeft: 20, lineHeight: 1.85, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <li>{'Q1 (Jan–Mar): due April 15, 2026'}</li>
            <li>{'Q2 (Apr–May): due June 16, 2026'}</li>
            <li>{'Q3 (Jun–Aug): due September 15, 2026'}</li>
            <li>{'Q4 (Sep–Dec): due January 15, 2027'}</li>
          </ul>

          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 28px', color: 'rgba(255,255,255,0.85)' }}>
            {'A safe rule: set aside 25–30% of every payment you receive. Pay quarterly using IRS Direct Pay or Form 1040-ES. See our full guide on '}
            <a href="/blog/quarterly-taxes-gig-workers" style={{ color: '#e8b84b', textDecoration: 'none' }}>quarterly taxes for gig workers</a>
            {' for step-by-step instructions.'}
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
              Break-Even Calculation
            </div>
            <p style={{ margin: '0 0 12px', fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.85)' }}>
              {'How many business miles does a DoorDash driver need to drive to fully offset the 1099 SE tax penalty vs W-2?'}
            </p>
            <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.85, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
              <li>{'At $50K income, SE tax penalty after deduction: ~$2,759'}</li>
              <li>{'Mileage deduction rate 2026: 72.5 cents/mile'}</li>
              <li>{'Tax value per mile (22% bracket): ~15.9 cents'}</li>
              <li><strong style={{ color: '#C8D8EC' }}>{'Break-even: ~17,350 miles — roughly 47 miles per day'}</strong></li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 20px' }}>
            Frequently Asked Questions
          </h2>

          {[
            {
              q: 'Do 1099 workers pay more taxes than W-2 employees?',
              a: 'Yes. 1099 workers pay the full 15.3% self-employment tax. W-2 employees pay only 7.65% because their employer covers the other half. On $50,000 income, that is $3,825 more for a 1099 worker before any deductions.',
            },
            {
              q: 'What is the self-employment tax rate in 2026?',
              a: '15.3% — 12.4% for Social Security (on income up to $184,500) and 2.9% for Medicare. You can deduct 50% of SE tax on your federal return, reducing taxable income.',
            },
            {
              q: 'Can a 1099 worker deduct the extra self-employment tax?',
              a: 'Yes. The IRS allows a deduction of 50% of SE tax on Schedule 1. On $50,000, your SE tax is ~$7,065 and you deduct $3,533 before calculating income tax.',
            },
            {
              q: 'What deductions can reduce a 1099 worker\'s tax bill?',
              a: 'Business mileage (72.5 cents/mile), home office, 100% health insurance premiums, Solo 401(k) contributions up to $23,500, and business equipment under Section 179.',
            },
            {
              q: 'Does a W-2 employee pay any self-employment tax?',
              a: 'No. W-2 employees do not pay SE tax. Their employer withholds 7.65% employee FICA and pays a matching 7.65% separately. The employee never pays the employer half.',
            },
            {
              q: 'At what income does the 1099 tax burden become significant?',
              a: 'SE tax applies from the first $400 of net profit. At $20,000, you owe ~$2,826 SE tax. At $50,000, ~$7,065. At $100,000, ~$14,130.',
            },
            {
              q: 'How do quarterly taxes work for 1099 workers?',
              a: '1099 workers must pay estimated taxes by April 15, June 16, September 15, and January 15. Pay at least 90% of current-year tax or 100% of last year\'s tax to avoid penalties.',
            },
          ].map(({ q, a }, i) => (
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
            <li><a href="/blog/self-employment-tax-rate-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>Self-Employment Tax Rate 2026: 15.3% Explained</a></li>
            <li><a href="/blog/quarterly-taxes-gig-workers" style={{ color: '#e8b84b', textDecoration: 'none' }}>Quarterly Taxes for Gig Workers: Deadlines and How to Pay</a></li>
            <li><a href="/doordash" style={{ color: '#e8b84b', textDecoration: 'none' }}>DoorDash Tax Calculator 2026</a></li>
          </ul>
        </section>

        <AuthorBox />
      </article>
    </>
  )
}
