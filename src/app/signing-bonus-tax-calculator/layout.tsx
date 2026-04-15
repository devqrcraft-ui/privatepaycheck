import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Signing Bonus Tax Calculator 2026 — How Much Do You Keep? | PrivatePaycheck',
  description: 'Calculate exactly how much of your signing bonus you keep after federal 22% withholding + state taxes. All 50 states. Free, instant, private — no signup needed.',
  alternates: { canonical: 'https://www.privatepaycheck.com/signing-bonus-tax-calculator' },
  openGraph: {
    title: 'Signing Bonus Tax Calculator 2026 — How Much Do You Keep? | PrivatePaycheck',
    description: 'Calculate exactly how much of your signing bonus you keep after federal 22% withholding + state taxes. All 50 states. Free, instant, private — no signup needed.',
    url: 'https://www.privatepaycheck.com/signing-bonus-tax-calculator',
    type: 'website',
  },
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>{children}</>
  );
}
