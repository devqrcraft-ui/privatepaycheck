import type { Metadata } from 'next';
import SeniorDeductionClient from './SeniorDeductionClient';

export const metadata: Metadata = {
  title: 'Senior Tax Deduction Calculator 2026 — Extra $1,950 Deduction',
  description: 'Seniors 65+ get extra standard deduction of $1,950 (single) in 2026. Calculate your senior tax savings free. All 50 states.',
  alternates: { canonical: 'https://www.privatepaycheck.com/senior-deduction-calculator' },
  authors: [{ name: 'Ethan Blake' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
};

export default function Page() {
  return <SeniorDeductionClient />;
}
