import type { Metadata } from 'next';
import BonusCalculatorClient from './BonusCalculatorClient';

export const metadata: Metadata = {
  title: 'Bonus Tax Calculator 2026 — 22% Flat Rate or Aggregate? See Your Real Take-Home',
  description: 'Bonus tax calculator 2026: IRS taxes bonuses at 22% flat rate (or aggregate). Enter your bonus to see exact take-home after federal + state taxes. All 50 states, free & private.',
  alternates: { canonical: 'https://privatepaycheck.com/bonus-tax-calculator' },
  openGraph: {
    title: 'Bonus Tax Calculator 2026 — How Much Do You Keep?',
    description: 'See your bonus after taxes for all 50 US states. IRS 2026 rates. Free & private.',
    url: 'https://privatepaycheck.com/bonus-tax-calculator',
    siteName: 'PrivatePaycheck',
    type: 'website',
  },
};


const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Bonus Tax Calculator 2026',
  url: 'https://privatepaycheck.com/bonus-tax-calculator',
  description: 'Calculate exact take-home pay on your bonus after federal 22% flat rate or aggregate method, plus state taxes for all 50 states.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is a bonus taxed in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The IRS taxes bonuses as supplemental wages. The flat withholding rate is 22% for bonuses under $1 million, and 37% for the amount above $1 million. Alternatively, employers may use the aggregate method combining your regular salary and bonus.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the flat rate and aggregate method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The flat rate method withholds a fixed 22% federal tax on your bonus. The aggregate method adds your bonus to your regular paycheck and withholds based on your total income bracket, which may result in higher withholding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I pay state tax on my bonus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most states tax bonuses as regular income. Nine states have no income tax: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I reduce taxes on my bonus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can reduce taxes on your bonus by contributing to a 401(k), HSA, or FSA before year-end, timing the bonus payment to a lower-income year, or requesting your employer use the aggregate method if it results in lower withholding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this bonus tax calculator free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely free. No signup required and no data is stored — all calculations happen in your browser.',
      },
    },
  ],
};

export default function BonusTaxCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BonusCalculatorClient />
    </>
  );
}
