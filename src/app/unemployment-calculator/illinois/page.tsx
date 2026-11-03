import type { Metadata } from 'next';
import IlUnemployCalcEmbed from '@/components/IlUnemployCalcEmbed';

const weeklyWages = [400, 600, 800, 1000, 1200, 1500];
const formatMoney = (value: number) => '$' + Math.round(value).toLocaleString('en-US');
const MIN_BASE_BENEFIT = 51;
const MAX_BASE_BENEFIT = 628;

export const metadata: Metadata = {
  title: 'Illinois Unemployment Calculator 2026 | Weekly Benefit Estimate',
  description:
    'Estimate Illinois unemployment benefits using an illustrative wage model. Learn what this calculator excludes, how taxes work, and where to confirm your official IDES determination.',
  keywords:
    'illinois unemployment calculator, illinois unemployment benefits 2026, illinois WBA estimate',
  alternates: {
    canonical: 'https://www.privatepaycheck.com/unemployment-calculator/illinois',
  },
  openGraph: {
    title: 'Illinois Unemployment Calculator 2026 | Weekly Benefit Estimate',
    description:
      'Estimate Illinois unemployment benefits using an illustrative wage model. Learn what this calculator excludes, how taxes work, and where to confirm your official IDES determination.',
    url: 'https://www.privatepaycheck.com/unemployment-calculator/illinois',
    siteName: 'PrivatePaycheck',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'PrivatePaycheck Illinois unemployment calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Illinois Unemployment Calculator 2026 | Weekly Benefit Estimate',
    description:
      'Estimate Illinois unemployment benefits using an illustrative wage model. Learn what this calculator excludes, how taxes work, and where to confirm your official IDES determination.',
    images: ['/og-image.svg'],
  },
};

const faqs = [
  {
    question: 'Does this calculator determine my Illinois benefit?',
    answer:
      'No. It estimates the base weekly amount from your two highest base-period quarters using the 2026 47% calculation and base-benefit range. IDES uses your claim-specific wage record, dependent allowances, eligibility rules, and determination process to set the official amount.',
  },
  {
    question: 'Are Illinois unemployment benefits taxable?',
    answer:
      'Unemployment compensation is generally taxable for federal income-tax purposes. Claimants may be able to request federal withholding through the unemployment agency. Check current IDES instructions and IRS guidance; withholding is a prepayment, not your final tax calculation.',
  },
  {
    question: 'How long can I receive Illinois unemployment?',
    answer:
      'For benefit years beginning on or after January 1, 2026, the schedule allows up to 26 weeks, subject to eligibility and claim rules. Illinois also has one unpaid waiting week. Your determination and current IDES guidance control.',
  },
];

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return (
    <main
      style={{
        maxWidth: 860,
        margin: '0 auto',
        padding: '48px 24px',
        fontFamily: 'system-ui,sans-serif',
        color: '#e2e8f0',
        background: '#0f1629',
        minHeight: '100vh',
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
        ›{' '}
        <a href="/unemployment-calculator" style={{ color: '#b8c8dc' }}>
          Unemployment Calculator
        </a>{' '}
        › Illinois
      </nav>
      <h1 style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900, marginBottom: 8 }}>
        Illinois Unemployment Calculator 2026
      </h1>
      <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.8 }}>
        Use this planning tool to estimate the 2026 base weekly benefit from
        your two highest base-period quarters. Illinois claims are determined by the Illinois
        Department of Employment Security (IDES); base-period dates, covered
        wages, eligibility, dependents, and the current benefit schedule can all
        change the result.
      </p>

      <IlUnemployCalcEmbed />

      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>
        Illustrative wage examples
      </h2>
      <p style={{ color: '#94a3b8', fontSize: 13, lineHeight: 1.7 }}>
        For benefit years beginning on or after January 1, 2026, the table
        applies 47% to the illustrative average weekly wage and applies the IDES
        base-benefit range of {formatMoney(MIN_BASE_BENEFIT)}–{formatMoney(MAX_BASE_BENEFIT)}. It excludes
        dependent allowances and claim-specific eligibility rules.
      </p>
      <div style={{ overflowX: 'auto', marginBottom: 28 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 440 }}>
          <thead>
            <tr style={{ background: 'rgba(99,102,241,0.12)' }}>
              {['Illustrative weekly wage', 'Modeled weekly amount', 'Two-week equivalent'].map(
                (label) => (
                  <th key={label} style={{ padding: '10px 14px', textAlign: 'left' }}>
                    {label}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {weeklyWages.map((wage) => {
              const weeklyEstimate = Math.min(
                MAX_BASE_BENEFIT,
                Math.max(MIN_BASE_BENEFIT, wage * 0.47),
              );
              return (
                <tr key={wage} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '10px 14px' }}>{formatMoney(wage)}</td>
                  <td style={{ padding: '10px 14px', color: '#F5C842' }}>
                    {formatMoney(weeklyEstimate)}
                  </td>
                  <td style={{ padding: '10px 14px' }}>
                    {formatMoney(weeklyEstimate * 2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <section aria-labelledby="il-tax-treatment">
        <h2 id="il-tax-treatment" style={{ fontSize: 22, fontWeight: 800 }}>
          Taxes and next steps for Illinois claimants
        </h2>
        <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>
          Unemployment compensation is generally subject to federal income tax.
          Federal withholding, when available and elected, does not determine
          your final tax liability. This page does not estimate withholding or
          state tax on benefits. Review your 1099-G and current IDES and IRS
          instructions before filing.
        </p>
        <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>
          The IDES schedule for benefit years beginning on or after January 1,
          2026 lists base weekly benefits from {formatMoney(MIN_BASE_BENEFIT)} to {formatMoney(MAX_BASE_BENEFIT)}.
          Dependent allowances may increase the payable amount. See the{' '}
          <a
            href="https://ides.illinois.gov/content/dam/soi/en/web/ides/ides_forms_and_publications/CLI110L.pdf"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#F5C842' }}
          >
            official IDES benefit schedule (PDF)
          </a>
          .
        </p>
        <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>
          For the controlling rules and your individual claim, use the{' '}
          <a
            href="https://ides.illinois.gov/"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#F5C842' }}
          >
            official IDES unemployment resources
          </a>
          . The agency’s monetary determination—not this estimate—sets your
          weekly benefit and payable duration.
        </p>
      </section>

      <section aria-labelledby="il-faq">
        <h2 id="il-faq" style={{ fontSize: 22, fontWeight: 800, marginTop: 28 }}>
          Illinois unemployment FAQ
        </h2>
        {faqs.map(({ question, answer }) => (
          <div key={question} style={{ margin: '18px 0' }}>
            <h3 style={{ fontSize: 16, color: '#f1f5f9' }}>{question}</h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.7 }}>{answer}</p>
          </div>
        ))}
      </section>

      <p style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20 }}>
        <a href="/unemployment-calculator/texas" style={{ color: '#F5C842' }}>
          Texas unemployment calculator
        </a>{' '}
        ·{' '}
        <a href="/unemployment-calculator/pennsylvania" style={{ color: '#F5C842' }}>
          Pennsylvania unemployment calculator
        </a>
      </p>
    </main>
  );
}
