import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Qualified Overtime Deduction Calculator 2026',
  description: 'Estimate the federal deduction for qualified overtime premiums. Eligibility, filing status, and income limits affect results.',
  alternates: { canonical: 'https://www.privatepaycheck.com/no-tax-on-overtime-deduction' },
  openGraph: {
    title: 'Qualified Overtime Deduction Calculator 2026',
    description: 'Estimate the federal deduction for qualified overtime premiums. Eligibility and income limits apply.',
    url: 'https://www.privatepaycheck.com/no-tax-on-overtime-deduction',
    type: 'website',
  },
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>{children}</>
  );
}
