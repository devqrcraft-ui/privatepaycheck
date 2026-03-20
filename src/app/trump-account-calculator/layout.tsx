import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Trump Account Calculator 2026 — See Your Child's Balance at Age 18 | PrivatePaycheck",
  description: "Calculate your child's Trump Account (MAGA Account) balance at age 18. $1,000 government seed + $2,500/yr employer contributions. See exact growth free.",
  alternates: { canonical: 'https://www.privatepaycheck.com/trump-account-calculator' },
  openGraph: {
    title: "Trump Account Calculator 2026 — See Your Child's Balance at Age 18 | PrivatePaycheck",
    description: "Calculate your child's Trump Account (MAGA Account) balance at age 18. $1,000 government seed + $2,500/yr employer contributions. See exact growth free.",
    url: 'https://privatepaycheck.com/trump-account-calculator',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Trump Account (MAGA Account)?',
      acceptedAnswer: { '@type': 'Answer', text: 'Trump Accounts are new tax-advantaged savings accounts for children created by the One Big Beautiful Bill. The government seeds each account with $1,000 at birth. Parents and employers can contribute up to $2,500/year. Funds grow tax-free and can be used at age 18.' },
    },
    {
      '@type': 'Question',
      name: 'How much will a Trump Account be worth at age 18?',
      acceptedAnswer: { '@type': 'Answer', text: 'With the $1,000 government seed and $2,500/year contributions at a 7% annual return, the account reaches approximately $38,000 by age 18. With employer matching, this can exceed $75,000.' },
    },
    {
      '@type': 'Question',
      name: 'Who qualifies for a Trump Account?',
      acceptedAnswer: { '@type': 'Answer', text: 'All US citizen children born after December 31, 2024 qualify for the $1,000 government seed contribution. Parents can open accounts for existing children as well and contribute up to $2,500/year.' },
    },
    {
      '@type': 'Question',
      name: 'What can Trump Account funds be used for?',
      acceptedAnswer: { '@type': 'Answer', text: 'At age 18, funds can be used for education, a first home purchase, or starting a business. Qualified withdrawals are tax-free. Non-qualified withdrawals are subject to income tax and a 10% penalty.' },
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
