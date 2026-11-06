import type { Metadata } from 'next';
import HourlyCalculatorClient from './HourlyCalculatorClient';

export const metadata: Metadata = {
  title: 'Hourly Paycheck Calculator 2026 — Federal and State Tax Estimate',
  description: 'Estimate hourly take-home pay in all 50 states using modeled federal, state, and payroll taxes. Includes optional 401(k) and HSA inputs; actual withholding may differ.',
  alternates: { canonical: 'https://www.privatepaycheck.com/hourly-paycheck-calculator' },
  authors: [{ name: 'the PrivatePaycheck Team' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Hourly Paycheck Calculator 2026 — Federal and State Tax Estimate',
    description: 'Estimate hourly take-home pay in all 50 states using modeled federal, state, and payroll taxes.',
    url: 'https://www.privatepaycheck.com/hourly-paycheck-calculator',
  },
};
export default function HourlyPaycheckPage() {

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Hourly Paycheck Calculator 2026',
    'url': 'https://www.privatepaycheck.com/hourly-paycheck-calculator',
    'description': 'Free hourly paycheck calculator providing modeled federal, state, and payroll-tax estimates for all 50 states.',
    'applicationCategory': 'FinanceApplication',
    'operatingSystem': 'Web',
    'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      { '@type': 'Question', 'name': 'How do I estimate my hourly paycheck after taxes?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Enter your hourly rate, hours, weeks worked, filing status, state, and optional contributions. The calculator applies modeled federal, state, and payroll taxes; actual withholding and local taxes may differ.' } },
      { '@type': 'Question', 'name': 'What affects take-home pay?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Take-home pay depends on gross wages, filing status, federal and state tax rules, payroll taxes, benefits, withholding elections, local taxes, and individual circumstances.' } },
      { '@type': 'Question', 'name': 'Is this hourly paycheck calculator free?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, completely free. No signup required and no data is stored — all calculations happen in your browser.' } },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HourlyCalculatorClient />
    </>
  );
}
