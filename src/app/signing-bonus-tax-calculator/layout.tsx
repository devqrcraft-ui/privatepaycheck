import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Signing Bonus Tax Calculator 2026 — How Much Do You Keep? | PrivatePaycheck',
  description: 'Calculate exactly how much of your signing bonus you keep after federal 22% withholding + state taxes. All 50 states. Free, instant, private — no signup needed.',
  alternates: { canonical: 'https://www.privatepaycheck.com/signing-bonus-tax-calculator' },
  openGraph: {
    title: 'Signing Bonus Tax Calculator 2026 — How Much Do You Keep? | PrivatePaycheck',
    description: 'Calculate exactly how much of your signing bonus you keep after federal 22% withholding + state taxes. All 50 states. Free, instant, private — no signup needed.',
    url: 'https://www.privatepaycheck.com/signing-bonus-tax-calculator',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is a signing bonus taxed in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Signing bonuses are taxed as supplemental wages. The IRS requires 22% federal withholding for amounts under $1 million. State taxes also apply. On a $10,000 signing bonus in California, you keep roughly $6,200 after all taxes.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a signing bonus and a regular bonus?',
      acceptedAnswer: { '@type': 'Answer', text: 'Both are taxed the same way as supplemental wages at 22% federal flat rate. A signing bonus is paid when you start a job, while a regular bonus is performance-based. Both may require repayment if you leave before a set period.' },
    },
    {
      '@type': 'Question',
      name: 'Do I have to pay back a signing bonus?',
      acceptedAnswer: { '@type': 'Answer', text: 'Many signing bonuses include a clawback clause requiring repayment if you leave within 1-2 years. If you repay, you can claim a tax deduction for the repaid amount. Check your offer letter carefully.' },
    },
    {
      '@type': 'Question',
      name: 'How can I reduce taxes on my signing bonus?',
      acceptedAnswer: { '@type': 'Answer', text: 'Contribute the bonus (or an equivalent amount) to a 401(k) or HSA. If your employer uses the aggregate method, ask to defer to January to spread taxes. You may also receive a refund at tax time if your effective rate is lower than 22%.' },
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
