import type { Metadata } from 'next';
import TwoJobsClient from './TwoJobsClient';

export const metadata: Metadata = {
  title: 'Two Jobs Tax Calculator 2026 — Avoid Underpayment',
  description: 'Working two jobs? Calculate extra withholding needed on your W-4 to avoid a surprise tax bill. Free & private.',
  alternates: { canonical: 'https://www.privatepaycheck.com/two-jobs-tax-calculator' },
};

export default function TwoJobsPage() {
  return <TwoJobsClient />;
}
