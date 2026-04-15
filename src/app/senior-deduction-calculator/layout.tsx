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
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>{children}</>
  );
}
