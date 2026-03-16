import type { Metadata } from 'next';
import FederalPaycheckCalculatorClient from './client';

export const metadata: Metadata = {
  title: 'Federal Paycheck Calculator 2026 — Federal Tax + FICA Withholding',
  description: 'Calculate exact federal income tax and FICA withholding for 2026. Includes overtime and tip deductions from the One Big Beautiful Bill. No data stored.',
  alternates: { canonical: 'https://privatepaycheck.com/federal-paycheck-calculator' },
};

export default function Page() {
  return <FederalPaycheckCalculatorClient />;
}
