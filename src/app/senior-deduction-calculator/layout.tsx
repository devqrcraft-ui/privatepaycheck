import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Senior Tax Deduction Calculator 2026 — Estimate the $6,000 Deduction | PrivatePaycheck',
  description: 'Estimate eligibility for the 2026 additional senior deduction of up to $6,000 per eligible person age 65+. The deduction phases out at higher modified AGI; tax savings depend on your return.',
  alternates: { canonical: 'https://www.privatepaycheck.com/senior-deduction-calculator' },
  openGraph: {
    title: 'Senior Tax Deduction Calculator 2026 — Estimate the $6,000 Deduction | PrivatePaycheck',
    description: 'Estimate eligibility for the 2026 additional senior deduction of up to $6,000 per eligible person age 65+. The deduction phases out at higher modified AGI; tax savings depend on your return.',
    url: 'https://www.privatepaycheck.com/senior-deduction-calculator',
    type: 'website',
  },
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>{children}</>
  );
}
