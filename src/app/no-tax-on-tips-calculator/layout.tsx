import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Qualified Tips Deduction Calculator 2026 | PrivatePaycheck',
  description: 'Estimate federal income-tax savings for qualified tips in 2026. The $25,000 deduction limit, income phase-out, occupation rules, and state-tax limitations apply.',
  alternates: { canonical: 'https://www.privatepaycheck.com/no-tax-on-tips-calculator' },
  openGraph: {
    title: 'Qualified Tips Deduction Calculator 2026 | PrivatePaycheck',
    description: 'Estimate the federal deduction for qualified tips; eligibility and income limits apply, and state taxes are not modeled.',
    url: 'https://www.privatepaycheck.com/no-tax-on-tips-calculator',
    siteName: 'PrivatePaycheck',
    type: 'website',
  },
};

const faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who may qualify for the qualified tips deduction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Employees and self-employed individuals may qualify for qualified tips from occupations identified by the IRS, subject to income and other rules. Tip type and reporting matter, and this calculator does not determine eligibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the maximum deduction for qualified tips?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The maximum annual federal deduction is $25,000. It phases out above modified adjusted gross income of $150,000 ($300,000 for married filing jointly). Self-employed taxpayers are also subject to a business-income limit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the deduction eliminate Social Security or Medicare taxes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The federal income-tax deduction does not itself eliminate Social Security or Medicare taxes. Qualified tips remain reportable.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does the qualified tips deduction apply?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The deduction currently applies to tax years 2025 through 2028, subject to the law and current IRS guidance.',
      },
    },
  ],
};

const app = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Qualified Tips Deduction Calculator 2026',
  url: 'https://www.privatepaycheck.com/no-tax-on-tips-calculator',
  description: 'Estimate federal income-tax savings from a possible deduction for qualified tips. Eligibility and income limits apply; state tax is not modeled.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.privatepaycheck.com' },
    { '@type': 'ListItem', position: 2, name: 'Qualified Tips Deduction Calculator', item: 'https://www.privatepaycheck.com/no-tax-on-tips-calculator' },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
