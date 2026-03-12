import type { Metadata } from 'next';
import HourlyCalculatorClient from './HourlyCalculatorClient';

export const metadata: Metadata = {
  title: 'Hourly Paycheck Calculator 2026 — Free & Private',
  description: 'Free hourly paycheck calculator for all 50 US states. Enter your hourly rate and hours worked to see exact take-home pay after federal, state, FICA taxes, 401k and HSA. Your data never leaves your browser.',
  alternates: { canonical: 'https://www.privatepaycheck.com/hourly-paycheck-calculator' },
  openGraph: {
    title: 'Hourly Paycheck Calculator 2026 — Free & Private',
    description: 'Calculate take-home pay from your hourly wage. All 50 states. Federal + state taxes, FICA, 401k, HSA.',
    url: 'https://www.privatepaycheck.com/hourly-paycheck-calculator',
  },
};
export default function HourlyPaycheckPage() {

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Hourly Paycheck Calculator 2026',
    'url': 'https://www.privatepaycheck.com/hourly-paycheck-calculator',
    'description': 'Free hourly paycheck calculator. Federal + state taxes, FICA for all 50 states.',
    'applicationCategory': 'FinanceApplication',
    'operatingSystem': 'Web',
    'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      { '@type': 'Question', 'name': 'How do I calculate my hourly paycheck after taxes?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Multiply your hourly rate by hours worked, then subtract federal tax, state tax, Social Security (6.2%) and Medicare (1.45%). Use our calculator for exact results.' } },
      { '@type': 'Question', 'name': 'What percentage is taken out of my paycheck?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Typically 20-35% total: federal income tax (10-37%), state tax (0-13%), Social Security (6.2%), Medicare (1.45%).' } },
      { '@type': 'Question', 'name': 'Is this hourly paycheck calculator free?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, completely free. No signup required and no data is stored — all calculations happen in your browser.' } },
    ],
  };
  return <HourlyCalculatorClient />;
}
