import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'No Tax on Tips Calculator 2026 — Save Up to $5,500/Year | PrivatePaycheck',
  description: 'Calculate your tip income tax savings under the 2026 No Tax on Tips law. Up to $25,000 tip deduction for servers, bartenders, drivers. See exact savings free.',
  alternates: { canonical: 'https://privatepaycheck.com/no-tax-on-tips-calculator' },
  openGraph: {
    title: 'No Tax on Tips Calculator 2026 — Save Up to $5,500/Year | PrivatePaycheck',
    description: 'Calculate your tip income tax savings under the 2026 No Tax on Tips law. Up to $25,000 tip deduction for servers, bartenders, drivers. See exact savings free.',
    url: 'https://privatepaycheck.com/no-tax-on-tips-calculator',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are tips tax-free in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'The No Tax on Tips provision allows workers to deduct up to $25,000 in tip income from their federal taxable income for 2025-2028. Tips are still reported on your W-2, but the deduction reduces your tax liability.' },
    },
    {
      '@type': 'Question',
      name: 'How much can I save with the no tax on tips deduction?',
      acceptedAnswer: { '@type': 'Answer', text: 'At the 22% bracket, a server earning $25,000 in tips saves up to $5,500/year in federal taxes. At 12%, savings are $3,000. The deduction phases out for incomes above $150,000.' },
    },
    {
      '@type': 'Question',
      name: 'Who qualifies for the no tax on tips deduction?',
      acceptedAnswer: { '@type': 'Answer', text: 'Workers in traditionally tipped occupations qualify: servers, bartenders, hotel staff, taxi and rideshare drivers, salon workers, and delivery drivers. The tips must be voluntary customer payments.' },
    },
    {
      '@type': 'Question',
      name: 'Do I still report tips on my W-2?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — tips are still reported as income on your W-2. The deduction is claimed on your federal tax return (Schedule A or new deduction line). Your employer still withholds taxes on tips during the year.' },
    }
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
