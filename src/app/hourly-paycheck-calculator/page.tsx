import type { Metadata } from 'next';
import HourlyCalculatorClient from './HourlyCalculatorClient';

export const metadata: Metadata = {
  title: 'Hourly Paycheck Calculator 2026 — Free & Private | PrivatePaycheck',
  description: 'Free hourly paycheck calculator for all 50 US states. Enter your hourly rate and hours worked to see exact take-home pay after federal, state, FICA taxes, 401k and HSA. Your data never leaves your browser.',
  alternates: { canonical: 'https://www.privatepaycheck.com/hourly-paycheck-calculator' },
  openGraph: {
    title: 'Hourly Paycheck Calculator 2026 — Free & Private',
    description: 'Calculate take-home pay from your hourly wage. All 50 states. Federal + state taxes, FICA, 401k, HSA.',
    url: 'https://www.privatepaycheck.com/hourly-paycheck-calculator',
  },
};

export default function HourlyPaycheckPage() {
  return <HourlyCalculatorClient />;
}
