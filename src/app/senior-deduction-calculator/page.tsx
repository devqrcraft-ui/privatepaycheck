import type { Metadata } from 'next';
import SeniorDeductionClient from './SeniorDeductionClient';

export const metadata: Metadata = {
  title: 'Senior Tax Deduction Calculator 2026 — Up to $6,000 Estimate',
  description: 'Estimate the 2026 senior deduction: up to $6,000 per eligible person age 65+, reduced above $75,000 ($150,000 joint) income. Estimate only; not tax advice.',
  alternates: { canonical: 'https://www.privatepaycheck.com/senior-deduction-calculator' },
  authors: [{ name: 'the PrivatePaycheck Team' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
};

export default function Page() {
  return <SeniorDeductionClient />;
}
