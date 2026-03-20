import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'W-4 Withholding Calculator 2026 — Avoid Owing Taxes or Over-Withholding | PrivatePaycheck',
  description: "Free W-4 withholding calculator 2026. See if you're withholding too much or too little. Adjust your W-4 to match your actual tax liability. All 50 states, instant results.",
  alternates: { canonical: 'https://www.privatepaycheck.com/w4-withholding-calculator' },
  openGraph: {
    title: 'W-4 Withholding Calculator 2026 — Avoid Owing Taxes or Over-Withholding | PrivatePaycheck',
    description: "Free W-4 withholding calculator 2026. See if you're withholding too much or too little. Adjust your W-4 to match your actual tax liability. All 50 states, instant results.",
    url: 'https://privatepaycheck.com/w4-withholding-calculator',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I fill out a W-4 in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Enter your name, SSN, and filing status on Step 1. Complete Step 2 if you have multiple jobs or a working spouse. Add dependents on Step 3 for the child tax credit. Use Step 4 for extra withholding. Most single-job filers only need Steps 1 and 5.' },
    },
    {
      '@type': 'Question',
      name: 'How much should I withhold on my W-4?',
      acceptedAnswer: { '@type': 'Answer', text: 'You should withhold enough to cover your annual tax liability. Use this calculator to estimate your liability, then adjust your W-4 withholding to match. Aim for a small refund ($500 or less) rather than owing money.' },
    },
    {
      '@type': 'Question',
      name: 'What happens if I claim too many allowances on my W-4?',
      acceptedAnswer: { '@type': 'Answer', text: 'Under-withholding results in a tax bill plus potential underpayment penalties (0.5% per month) when you file. If you owe more than $1,000 after withholding, you may face an IRS penalty.' },
    },
    {
      '@type': 'Question',
      name: 'How do I change my W-4 withholding?',
      acceptedAnswer: { '@type': 'Answer', text: 'Submit a new W-4 form to your employer at any time — changes take effect within 1-2 pay periods. You can update your W-4 online through your employer\'s payroll portal or by submitting a paper form to HR.' },
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
