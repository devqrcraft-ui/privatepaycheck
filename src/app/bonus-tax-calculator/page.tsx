import type { Metadata } from 'next';
import BonusCalculatorClient from './BonusCalculatorClient';

export const metadata: Metadata = {
  title: 'Bonus Tax Calculator 2026 — How Much of Your Bonus Do You Keep? | PrivatePaycheck',
  description: 'Calculate exactly how much of your bonus you keep after federal and state taxes in 2026. All 50 states, IRS aggregate & flat rate methods. Free & 100% private.',
  alternates: { canonical: 'https://www.privatepaycheck.com/bonus-tax-calculator' },
  openGraph: {
    title: 'Bonus Tax Calculator 2026 — How Much Do You Keep?',
    description: 'See your bonus after taxes for all 50 US states. IRS 2026 rates. Free & private.',
    url: 'https://www.privatepaycheck.com/bonus-tax-calculator',
    siteName: 'PrivatePaycheck',
    type: 'website',
  },
};

export default function BonusTaxCalculatorPage() {
  return <BonusCalculatorClient />;
}
