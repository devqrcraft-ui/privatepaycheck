import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'No Tax on Overtime Calculator 2026 — Save Up to $2,750/Year | PrivatePaycheck',
  description: 'Calculate your overtime tax savings under the 2026 No Tax on Overtime law. Up to $12,500 deduction for 60M+ workers. See your exact savings free & instantly.',
  alternates: { canonical: 'https://www.privatepaycheck.com/no-tax-on-overtime-deduction' },
  openGraph: {
    title: 'No Tax on Overtime Calculator 2026 — Save Up to $2,750/Year | PrivatePaycheck',
    description: 'Calculate your overtime tax savings under the 2026 No Tax on Overtime law. Up to $12,500 deduction for 60M+ workers. See your exact savings free & instantly.',
    url: 'https://www.privatepaycheck.com/no-tax-on-overtime-deduction',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is overtime tax-free in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'The One Big Beautiful Bill signed in 2025 creates a deduction of up to $12,500 for overtime wages earned in 2026-2028. This reduces your taxable income — overtime is still reported on your W-2 but the deduction lowers your tax bill.' },
    },
    {
      '@type': 'Question',
      name: 'How much can I save with the overtime tax deduction?',
      acceptedAnswer: { '@type': 'Answer', text: 'Workers can save up to $2,750/year (22% of $12,500). At the 24% bracket, savings reach $3,000. The deduction phases out for incomes above $150,000 single / $300,000 married.' },
    },
    {
      '@type': 'Question',
      name: 'Who qualifies for the no tax on overtime deduction?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most hourly workers who receive overtime pay under FLSA rules qualify. The deduction applies to overtime wages up to $12,500 per year. Salaried exempt employees who receive overtime bonuses may also qualify.' },
    },
    {
      '@type': 'Question',
      name: 'When does the no tax on overtime take effect?',
      acceptedAnswer: { '@type': 'Answer', text: 'The overtime deduction applies to tax years 2025 through 2028. You will claim it on your 2025 federal tax return filed in 2026.' },
    }
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </div>
  );
}
