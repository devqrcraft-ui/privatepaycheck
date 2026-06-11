import type { Metadata } from 'next';
import SigningBonusClient from './SigningBonusClient';

export const metadata: Metadata = {
  title: 'Signing Bonus Tax Calculator 2026 — How Much Do You Keep?',
  description: 'Calculate take-home on your signing bonus after 22% federal flat rate + state tax. $50K signing bonus = ~$33,000 after tax.',
  alternates: { canonical: 'https://www.privatepaycheck.com/signing-bonus-tax-calculator' },
  authors: [{ name: 'Ethan Blake' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
};

export default function Page() {
  return <SigningBonusClient />;
}
