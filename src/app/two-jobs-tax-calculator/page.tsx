import type { Metadata } from 'next';
import TwoJobsClient from './TwoJobsClient';

export const metadata: Metadata = {
  title: 'Two Jobs Tax Calculator 2026 — Avoid Underpayment',
  description: 'Working two jobs? Calculate extra withholding needed on your W-4 to avoid a surprise tax bill. Free & private.',
  alternates: { canonical: 'https://privatepaycheck.com/two-jobs-tax-calculator' },
};


  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Two Jobs Tax Calculator 2026',
    'url': 'https://privatepaycheck.com/two-jobs-tax-calculator',
    'description': 'Free two jobs tax calculator. See combined federal + state tax for all 50 states.',
    'applicationCategory': 'FinanceApplication',
    'operatingSystem': 'Web',
    'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
  }


const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
  {
    '@type': 'Question',
    name: 'Why do I owe more taxes when I have two jobs?',
    acceptedAnswer: { '@type': 'Answer', text: 'Each employer withholds taxes as if that job is your only income. When combined, your total income may push you into a higher bracket — but neither employer withholds enough. You end up owing the difference at tax time.' },
  },
  {
    '@type': 'Question',
    name: 'How do I fix my W-4 for two jobs?',
    acceptedAnswer: { '@type': 'Answer', text: 'On your W-4, check the "Multiple Jobs" box (Step 2) or use the IRS withholding estimator. Alternatively, add extra withholding on Line 4c of your W-4 at one job to cover the shortage.' },
  },
  {
    '@type': 'Question',
    name: 'How much extra should I withhold for a second job?',
    acceptedAnswer: { '@type': 'Answer', text: 'Use this calculator to find the gap between your estimated tax liability and current withholding. A common rule: if your second job pays $20,000/year, withhold an extra $2,400-$4,400 depending on your total income and state.' },
  },
  {
    '@type': 'Question',
    name: 'Is it better to claim 0 on my W-4 for a second job?',
    acceptedAnswer: { '@type': 'Answer', text: 'Claiming 0 on your second job W-4 maximizes withholding but still may not be enough. The correct approach is to calculate your actual liability using this tool and add specific extra withholding rather than relying on allowances.' },
  }
  ],
};

export default function TwoJobsPage() {
  return <TwoJobsClient />;
}
