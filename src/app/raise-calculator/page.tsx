import type { Metadata } from 'next';
import RaiseCalculatorClient from './RaiseCalculatorClient';

export const metadata: Metadata = {
  title: 'Raise Calculator 2026 — See Your New Take-Home Pay',
  description: 'Calculate your new paycheck after a raise. See federal + state tax impact on salary increase. All 50 states. Free, instant.',
  alternates: { canonical: 'https://www.privatepaycheck.com/raise-calculator' },
  authors: [{ name: 'Ethan Blake' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
};

export default function Page() {
  return <RaiseCalculatorClient />;
}
