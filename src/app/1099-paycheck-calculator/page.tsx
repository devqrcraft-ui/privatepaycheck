import type { Metadata } from 'next';
import PaycheckCalculator1099Client from './client';

export const metadata: Metadata = {
  title: '1099 Paycheck Calculator 2026 — Self-Employed & Contractor Take-Home Pay',
  description: 'Free 1099 paycheck calculator for 2026. Calculates self-employment tax (15.3%), federal income tax, QBI deduction, quarterly estimated taxes. No data stored.',
  alternates: { canonical: 'https://privatepaycheck.com/1099-paycheck-calculator' },
};

export default function Page() {
  return <PaycheckCalculator1099Client />;
}
