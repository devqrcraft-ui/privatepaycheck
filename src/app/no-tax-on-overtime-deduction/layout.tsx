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
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>{children}</>
  );
}
