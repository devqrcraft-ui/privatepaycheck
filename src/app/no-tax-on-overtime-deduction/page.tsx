import type { Metadata } from 'next';
import NoTaxOvertimeClient from './NoTaxOvertimeClient';

export const metadata: Metadata = {
  title: 'Qualified Overtime Deduction Calculator 2026',
  description: 'Estimate federal income-tax savings from the deduction for qualified overtime compensation. Only the eligible premium portion counts; income and eligibility limits apply.',
  alternates: { canonical: 'https://www.privatepaycheck.com/no-tax-on-overtime-deduction' },
  openGraph: {
    title: 'Qualified Overtime Deduction Calculator 2026',
    description: 'Estimate the federal deduction for qualified overtime premiums. Eligibility and income limits apply.',
    url: 'https://www.privatepaycheck.com/no-tax-on-overtime-deduction',
    siteName: 'PrivatePaycheck',
    type: 'website',
  },
  authors: [{ name: 'the PrivatePaycheck Team' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
};

export default function Page() {
  return <NoTaxOvertimeClient />;
}
