import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Senior $6,000 Deduction Calculator 2026 — How Much Do You Save? | PrivatePaycheck',
  description: 'Calculate your $6,000 senior tax deduction for 2026. New law gives age 65+ an extra $6,000 standard deduction. See exact savings by income. Free & instant.',
  alternates: { canonical: 'https://www.privatepaycheck.com/senior-deduction-calculator' },
  openGraph: {
    title: 'Senior $6,000 Deduction Calculator 2026 — How Much Do You Save? | PrivatePaycheck',
    description: 'Calculate your $6,000 senior tax deduction for 2026. New law gives age 65+ an extra $6,000 standard deduction. See exact savings by income. Free & instant.',
    url: 'https://www.privatepaycheck.com/senior-deduction-calculator',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the $6,000 senior deduction in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'The One Big Beautiful Bill adds an extra $6,000 deduction for taxpayers age 65 and older. Combined with the standard deduction ($15,000 single / $30,000 married), seniors can deduct $21,000 single or $42,000 married in 2026.' },
    },
    {
      '@type': 'Question',
      name: 'Who qualifies for the senior $6,000 deduction?',
      acceptedAnswer: { '@type': 'Answer', text: 'Taxpayers who are 65 or older by December 31, 2026 qualify. The deduction phases out starting at $75,000 AGI for single filers and $150,000 for married filing jointly.' },
    },
    {
      '@type': 'Question',
      name: 'How much will I save with the senior deduction?',
      acceptedAnswer: { '@type': 'Answer', text: 'At the 22% bracket, a $6,000 deduction saves $1,320/year. At 12%, savings are $720. The full $6,000 is available for incomes under $75,000 (single) or $150,000 (married).' },
    },
    {
      '@type': 'Question',
      name: 'Is the senior deduction in addition to the standard deduction?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — the $6,000 is an additional deduction on top of the regular standard deduction. You do not need to itemize to claim it. It applies automatically when you file your 2026 federal tax return.' },
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
