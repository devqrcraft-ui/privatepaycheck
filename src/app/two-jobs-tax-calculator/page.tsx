import type { Metadata } from 'next';
import TwoJobsClient from './TwoJobsClient';

export const metadata: Metadata = {
  title: 'Two Jobs Tax Calculator 2026 — Avoid Underpayment',
  description: 'Working two jobs? Calculate extra withholding needed on your W-4 to avoid a surprise tax bill. Free & private.',
  alternates: { canonical: 'https://www.privatepaycheck.com/two-jobs-tax-calculator' },
};


  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Two Jobs Tax Calculator 2026',
    'url': 'https://www.privatepaycheck.com/two-jobs-tax-calculator',
    'description': 'Free two jobs tax calculator. See combined federal + state tax for all 50 states.',
    'applicationCategory': 'FinanceApplication',
    'operatingSystem': 'Web',
    'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
  }

export default function TwoJobsPage() {
  return <TwoJobsClient />;
}
