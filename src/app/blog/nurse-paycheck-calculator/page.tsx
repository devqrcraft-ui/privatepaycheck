import type { Metadata } from 'next';
import AuthorBox from '@/app/components/AuthorBox';
import { estimatePaycheck, K401_LIMIT_2026 } from '@/lib/paycheck';
import { FICA, STANDARD_DEDUCTION } from '@/lib/taxRates2026';

const EXAMPLE_SALARY = 77600;
const STATES = [
  { code: 'tx', name: 'Texas' },
  { code: 'fl', name: 'Florida' },
  { code: 'ca', name: 'California' },
  { code: 'ny', name: 'New York' },
];

function getEstimate(annual: number, stateCode: string) {
  return estimatePaycheck({
    annual,
    freq: 1,
    stateRatePct: 0,
    stateCode,
    filing: 'single',
    k401Pct: 0,
  });
}

function money(value: number) {
  return '$' + Math.round(value).toLocaleString('en-US');
}

const stateEstimates = STATES.map((state) => ({
  ...state,
  ...getEstimate(EXAMPLE_SALARY, state.code),
}));
const texasEstimate = getEstimate(EXAMPLE_SALARY, 'tx');
const shiftEstimate = getEstimate(EXAMPLE_SALARY * 1.15, 'tx');
const shiftNetChange = shiftEstimate.net - texasEstimate.net;
const ficaEstimate = texasEstimate.ss + texasEstimate.med;

const faqItems = [
  {
    question: 'How much does a nurse take home after taxes?',
    answer: `For the illustrative $${EXAMPLE_SALARY.toLocaleString('en-US')} salary used here, the estimated annual take-home is ${money(texasEstimate.net)} in Texas and ${money(getEstimate(EXAMPLE_SALARY, 'ca').net)} in California. These are modeled examples, not a national salary statistic or a personalized withholding quote.`,
  },
  {
    question: 'How much FICA is withheld from a nurse paycheck?',
    answer: `At this example salary, estimated employee Social Security and Medicare total ${money(ficaEstimate)} for the year. FICA depends on wages and the annual Social Security wage base; this estimate does not include Additional Medicare Tax because the example is below its threshold.`,
  },
  {
    question: 'Are night-shift differentials and overtime taxable?',
    answer:
      'Shift differentials are generally wage income. Overtime is also generally taxable wages, although certain eligible workers may qualify for a federal overtime deduction under current law. This page does not estimate that deduction or determine eligibility.',
  },
  {
    question: 'Are travel-nurse stipends tax-free?',
    answer:
      'Not automatically. Tax treatment depends on the worker’s tax home, assignment facts, and whether the applicable IRS requirements for temporary travel and business expenses are met. Do not assume a stipend is tax-free based only on how an employer labels it.',
  },
];

export const metadata: Metadata = {
  title: 'Nurse Paycheck Calculator 2026 | Estimated Take-Home by State',
  description:
    'Estimate registered-nurse take-home pay by state with transparent 2026 tax assumptions. Compare an illustrative salary, shift differentials, FICA, and travel-nurse tax considerations.',
  alternates: {
    canonical: 'https://www.privatepaycheck.com/blog/nurse-paycheck-calculator',
  },
  openGraph: {
    title: 'Nurse Paycheck Calculator 2026: Estimated Take-Home by State',
    description:
      'Compare modeled nurse take-home pay across states and review the assumptions behind the estimate.',
    url: 'https://www.privatepaycheck.com/blog/nurse-paycheck-calculator',
    siteName: 'PrivatePaycheck',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'PrivatePaycheck nurse paycheck estimates' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nurse Paycheck Calculator 2026: Estimated Take-Home by State',
    description:
      'Compare modeled nurse take-home pay across states and review the assumptions behind the estimate.',
    images: ['/og-image.svg'],
  },
};

export default function Page() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Nurse Paycheck Calculator 2026: Estimated Take-Home by State',
    author: { '@type': 'Organization', name: 'PrivatePaycheck Team' },
    publisher: { '@type': 'Organization', name: 'PrivatePaycheck' },
    mainEntityOfPage:
      'https://www.privatepaycheck.com/blog/nurse-paycheck-calculator',
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.privatepaycheck.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.privatepaycheck.com/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Nurse Paycheck Calculator',
        item: 'https://www.privatepaycheck.com/blog/nurse-paycheck-calculator',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <article
        itemScope
        itemType="https://schema.org/BlogPosting"
        style={{
          maxWidth: 780,
          margin: '0 auto',
          padding: 'clamp(14px,4vw,28px)',
          background: '#0f0c29',
          color: '#e8edf8',
          minHeight: '100vh',
        }}
      >
        <nav
          aria-label="breadcrumb"
          style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 16 }}
        >
          <a href="/" style={{ color: 'inherit' }}>Home</a>
          {' › '}
          <a href="/blog" style={{ color: 'inherit' }}>Blog</a>
          {' › Nurse Paycheck Calculator'}
        </nav>
        <header>
          <h1 style={{ fontSize: 'clamp(24px,5vw,34px)', fontWeight: 900, lineHeight: 1.3 }}>
            Nurse Paycheck Calculator 2026: Estimated Take-Home by State
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
            Nursing pay can include base wages, shift differentials, overtime,
            benefits, and travel reimbursements. This guide separates those
            components and shows how state taxes can affect a paycheck estimate.
          </p>
        </header>

        <section
          aria-labelledby="example-snapshot"
          style={{
            background: 'rgba(245,200,66,0.07)',
            border: '1px solid rgba(245,200,66,0.2)',
            borderRadius: 8,
            padding: '16px 20px',
            margin: '24px 0',
          }}
        >
          <h2 id="example-snapshot" style={{ color: '#F5C842', fontSize: 16 }}>
            Illustrative salary, not a national median
          </h2>
          <p style={{ marginBottom: 0, lineHeight: 1.8 }}>
            The comparison below uses an example gross salary of{' '}
            <strong>{money(EXAMPLE_SALARY)}</strong>, single filing status, the
            2026 standard deduction, and no retirement or health-plan deductions.
            It is a calculation example—not a claim about the current average or
            median registered-nurse wage.
          </p>
        </section>

        <section id="by-state" aria-labelledby="state-comparison">
          <h2 id="state-comparison" style={{ fontSize: 22, fontWeight: 800 }}>
            Estimated take-home by state
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'rgba(245,200,66,0.12)' }}>
                  {['Work state', 'Modeled state tax', 'Annual take-home', 'Monthly equivalent'].map(
                    (label) => (
                      <th
                        key={label}
                        style={{
                          padding: '10px 12px',
                          textAlign: 'left',
                          color: '#F5C842',
                        }}
                      >
                        {label}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {stateEstimates.map((state) => (
                  <tr key={state.code} style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <td style={{ padding: '10px 12px' }}>{state.name}</td>
                    <td style={{ padding: '10px 12px' }}>{money(state.state)}</td>
                    <td style={{ padding: '10px 12px', color: '#4ade80' }}>
                      {money(state.net)}
                    </td>
                    <td style={{ padding: '10px 12px', color: '#4ade80' }}>
                      {money(state.net / 12)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
            State figures are modeled estimates. New York City/local tax is not
            included; the model includes California SDI and New York employee
            payroll deductions where configured. Employer benefits and individual
            withholding elections are excluded.
          </p>
        </section>

        <section id="tax-breakdown" aria-labelledby="breakdown-title">
          <h2 id="breakdown-title" style={{ fontSize: 22, fontWeight: 800 }}>
            What is included in the Texas example?
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Texas has no individual income tax. For this single-filer example,
            the estimate subtracts modeled federal income tax and employee FICA
            from gross wages.
          </p>
          <ul style={{ lineHeight: 1.9 }}>
            <li>Illustrative gross salary: {money(EXAMPLE_SALARY)}</li>
            <li>Federal standard deduction: {money(STANDARD_DEDUCTION.single)}</li>
            <li>Social Security estimate: {money(texasEstimate.ss)}</li>
            <li>Medicare estimate: {money(texasEstimate.med)}</li>
            <li>Combined employee FICA estimate: {money(ficaEstimate)}</li>
            <li>Estimated annual take-home: {money(texasEstimate.net)}</li>
          </ul>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
            FICA rates in the model are {FICA.socialSecurity.rate * 100}% for
            Social Security up to the annual wage base and{' '}
            {FICA.medicare.rate * 100}% for Medicare. Actual payroll withholding
            can differ based on pay frequency, W-4 elections, and other wages.
          </p>
        </section>

        <section id="shift-pay" aria-labelledby="shift-pay-title">
          <h2 id="shift-pay-title" style={{ fontSize: 22, fontWeight: 800 }}>
            Shift differentials and overtime
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            A differential increases taxable wage income in the ordinary
            paycheck model. To illustrate the effect—not to predict a specific
            hospital contract—adding 15% to this example salary changes modeled
            Texas take-home by about <strong>{money(shiftNetChange)}</strong>{' '}
            before benefits or any special deductions.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            Overtime is generally wage income as well. Some eligible workers may
            qualify for a federal deduction under current law, but eligibility,
            limits, and qualifying compensation matter; this estimate does not
            apply that deduction.
          </p>
        </section>

        <section id="travel-nursing" aria-labelledby="travel-title">
          <h2 id="travel-title" style={{ fontSize: 22, fontWeight: 800 }}>
            Travel-nurse stipends: verify before treating them as tax-free
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            A housing or meal stipend is not automatically tax-free because it
            is described as a reimbursement. Tax treatment can depend on
            maintaining a tax home, the temporary nature of an assignment, and
            meeting IRS rules for business-travel expenses. Keep records and
            review the rules for your circumstances.
          </p>
          <p>
            <a
              href="https://www.irs.gov/publications/p463"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#F5C842' }}
            >
              IRS Publication 463: Travel, Gift, and Car Expenses
            </a>
          </p>
        </section>

        <section id="retirement" aria-labelledby="retirement-title">
          <h2 id="retirement-title" style={{ fontSize: 22, fontWeight: 800 }}>
            Pre-tax benefits and retirement contributions
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            A traditional 401(k) contribution can reduce federal taxable wages,
            but it generally does not reduce Social Security or Medicare wages.
            The 2026 employee elective-deferral limit represented in this
            calculator is {money(K401_LIMIT_2026)}; catch-up rules and employer
            plan limits may change what an individual can contribute. Health
            benefits and flexible spending accounts depend on the plan and
            current IRS limits.
          </p>
        </section>

        <section id="faq" aria-labelledby="faq-title">
          <h2 id="faq-title" style={{ fontSize: 22, fontWeight: 800 }}>
            Nurse paycheck FAQ
          </h2>
          {faqItems.map(({ question, answer }) => (
            <div key={question} style={{ margin: '18px 0' }}>
              <h3 style={{ fontSize: 16, color: '#F5C842' }}>{question}</h3>
              <p style={{ lineHeight: 1.8, color: 'rgba(255,255,255,0.8)' }}>{answer}</p>
            </div>
          ))}
        </section>

        <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(255,255,255,0.7)' }}>
          Review current wage data at the{' '}
          <a
            href="https://www.bls.gov/ooh/healthcare/registered-nurses.htm"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#F5C842' }}
          >
            U.S. Bureau of Labor Statistics
          </a>
          . Tax and paycheck outputs on this page are estimates, not tax or
          employment advice. See the{' '}
          <a href="/methodology" style={{ color: '#F5C842' }}>
            calculation methodology
          </a>{' '}
          and use the{' '}
          <a href="/" style={{ color: '#F5C842' }}>
            paycheck calculator
          </a>{' '}
          for a different salary or filing status.
        </p>
        <AuthorBox />
      </article>
    </>
  );
}
