import type { Metadata } from 'next';
import NoTaxOvertimeClient from './NoTaxOvertimeClient';

export const metadata: Metadata = {
  title: 'No Tax on Overtime Calculator 2026 — OBBBA Deduction',
  description: 'Calculate overtime tax savings under OBBBA 2026. See your new take-home pay with no federal tax on overtime. All 50 states.',
  alternates: { canonical: 'https://www.privatepaycheck.com/no-tax-on-overtime-deduction' },
  authors: [{ name: 'Ethan Blake' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
};

export default function Page() {
  return <NoTaxOvertimeClient />;
}
