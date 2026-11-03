import type { Metadata } from 'next';
import { estimatePaycheck } from '@/lib/paycheck';
import { FICA, STANDARD_DEDUCTION } from '@/lib/taxRates2026';

const EXAMPLE_SALARIES = [30000, 40000, 50000, 60000, 75000, 100000];
const estimates = EXAMPLE_SALARIES.map((annual) => ({
  annual,
  ...estimatePaycheck({
    annual,
    freq: 1,
    stateRatePct: 0,
    stateCode: 'nj',
    filing: 'single',
    k401Pct: 0,
  }),
}));

const formatMoney = (value: number) =>
  '$' + Math.round(value).toLocaleString('en-US');
const exampleAt50k = estimates.find(({ annual }) => annual === 50000);

export const metadata: Metadata = {
  title: 'New Jersey Paycheck Calculator 2026 | Estimated Take-Home Pay',
  description:
    'Estimate New Jersey take-home pay with 2026 federal, FICA, and progressive NJ income-tax calculations. See salary examples and the assumptions behind each estimate.',
  keywords:
    'new jersey paycheck calculator 2026, nj take home pay, new jersey salary after taxes',
  alternates: {
    canonical: 'https://www.privatepaycheck.com/new-jersey-paycheck-calculator',
  },
  openGraph: {
    title: 'New Jersey Paycheck Calculator 2026',
    description:
      'Estimate New Jersey take-home pay and see how federal, FICA, and state income taxes affect your paycheck.',
    url: 'https://www.privatepaycheck.com/new-jersey-paycheck-calculator',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How is New Jersey paycheck take-home estimated?',
    answer:
      'This estimate subtracts modeled federal income tax, Social Security, Medicare, and New Jersey income tax from annual wages. It assumes a single filer, the standard deduction, no pre-tax benefits, and no local income tax.',
  },
  {
    question: 'Is New Jersey income tax a flat rate?',
    answer:
      'No. New Jersey uses graduated income-tax brackets, so the tax calculation depends on taxable income and filing status. A marginal bracket rate is not the rate applied to every dollar of salary.',
  },
  {
    question: 'Why may my New Jersey paycheck differ from this estimate?',
    answer:
      'Payroll withholding depends on your W-4 and NJ-W4, pay frequency, benefits, retirement contributions, and other deductions. This estimate also excludes employee contributions for New Jersey temporary disability, family leave, and unemployment programs.',
  },
  {
    question: 'Does New Jersey have local wage income tax?',
    answer:
      'This estimate does not include local taxes or other location-specific deductions. Review your pay statement and the current guidance from the New Jersey Division of Taxation.',
  },
];

export default function Page() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.privatepaycheck.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'New Jersey Paycheck Calculator',
          item: 'https://www.privatepaycheck.com/new-jersey-paycheck-calculator',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'New Jersey Paycheck Calculator 2026',
      url: 'https://www.privatepaycheck.com/new-jersey-paycheck-calculator',
    },
  ];

  return (
    <main
      style={{
        maxWidth: 860,
        margin: '0 auto',
        padding: '48px 24px',
        fontFamily: 'system-ui,sans-serif',
        background: '#0f0c29',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav style={{ fontSize: 13, color: '#b8c8dc', marginBottom: 24 }}>
        <a href="/" style={{ color: '#b8c8dc' }}>
          Home
        </a>{' '}
        › New Jersey Paycheck Calculator
      </nav>

      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>
        New Jersey Paycheck Calculator 2026
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
        See an annualized estimate of take-home pay for a New Jersey wage earner.
        The examples below use the shared 2026 federal and state tax models; your
        actual paycheck depends on your withholding elections and deductions.
      </p>

      <section aria-labelledby="salary-examples">
        <h2
          id="salary-examples"
          style={{ fontSize: 22, fontWeight: 800, margin: '28px 0 12px' }}
        >
          Estimated New Jersey take-home pay by salary
        </h2>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['Annual salary', 'Estimated state income tax', 'Monthly net', 'Biweekly net'].map(
                  (label) => (
                    <th
                      key={label}
                      style={{
                        padding: '10px 12px',
                        textAlign: 'left',
                        color: '#F5C842',
                        borderBottom: '1px solid rgba(255,255,255,0.15)',
                      }}
                    >
                      {label}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {estimates.map(({ annual, state, net }) => (
                <tr key={annual}>
                  <td style={{ padding: '10px 12px' }}>{formatMoney(annual)}</td>
                  <td style={{ padding: '10px 12px' }}>{formatMoney(state)}</td>
                  <td style={{ padding: '10px 12px', color: '#4ade80' }}>
                    {formatMoney(net / 12)}
                  </td>
                  <td style={{ padding: '10px 12px', color: '#4ade80' }}>
                    {formatMoney(net / 26)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
          Example assumptions: single filer, 2026 standard deduction of{' '}
          {formatMoney(STANDARD_DEDUCTION.single)}, no 401(k) contribution, no
          dependents, and no local tax or employee benefit deductions. Net pay
          values include estimated federal income tax, Social Security, Medicare,
          and NJ income tax; they do not represent payroll withholding quotes.
        </p>
        {exampleAt50k && (
          <p style={{ color: '#fde68a', lineHeight: 1.7 }}>
            Under those assumptions, a {formatMoney(exampleAt50k.annual)} salary
            produces an estimated {formatMoney(exampleAt50k.net / 12)} per month
            after the modeled taxes.
          </p>
        )}
      </section>

      <section aria-labelledby="nj-tax-details">
        <h2
          id="nj-tax-details"
          style={{ fontSize: 22, fontWeight: 800, margin: '28px 0 12px' }}
        >
          What is specific to New Jersey?
        </h2>
        <ul style={{ paddingLeft: 20, color: 'rgba(255,255,255,0.8)', lineHeight: 1.9 }}>
          <li>
            NJ income tax is progressive: the marginal rate applies only to
            income within its bracket, not to the full salary.
          </li>
          <li>
            Social Security is modeled at {FICA.socialSecurity.rate * 100}% up
            to the 2026 wage base of {formatMoney(FICA.socialSecurity.cap)};
            Medicare is modeled at {FICA.medicare.rate * 100}%.
          </li>
          <li>
            New Jersey employee payroll programs, health insurance, pension
            contributions, and other employer deductions can change deposited
            pay and are not included in this state-income-tax estimate.
          </li>
          <li>
            Withholding is a prepayment. Your final tax bill or refund depends
            on the complete tax return, credits, and household income.
          </li>
        </ul>
      </section>

      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
        Sources: 2026 model assumptions are documented in our{' '}
        <a href="/methodology" style={{ color: '#F5C842' }}>
          calculation methodology
        </a>
        . See the{' '}
        <a
          href="https://www.nj.gov/treasury/taxation/"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#F5C842' }}
        >
          New Jersey Division of Taxation
        </a>{' '}
        and the{' '}
        <a
          href="https://www.irs.gov/"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#F5C842' }}
        >
          IRS
        </a>{' '}
        for current filing and withholding rules.
      </p>

      <section aria-labelledby="nj-paycheck-faq">
        <h2 id="nj-paycheck-faq" style={{ fontSize: 22, fontWeight: 800 }}>
          New Jersey paycheck FAQ
        </h2>
        {faqs.map(({ question, answer }) => (
          <div key={question} style={{ margin: '18px 0' }}>
            <h3 style={{ fontSize: 16, color: '#F5C842' }}>{question}</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>{answer}</p>
          </div>
        ))}
      </section>

      <p>
        <a href="/" style={{ color: '#F5C842' }}>
          Open the paycheck calculator
        </a>{' '}
        ·{' '}
        <a href="/new-york-paycheck-calculator" style={{ color: '#F5C842' }}>
          Compare with New York
        </a>{' '}
        ·{' '}
        <a href="/pennsylvania-paycheck-calculator" style={{ color: '#F5C842' }}>
          Compare with Pennsylvania
        </a>
      </p>
    </main>
  );
}
