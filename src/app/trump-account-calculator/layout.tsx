import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Trump Account Calculator 2026 — Project a Balance at Age 18',
  description: 'Model a hypothetical account balance and review current IRS eligibility and the limited $1,000 pilot contribution rules.',
  alternates: { canonical: 'https://www.privatepaycheck.com/trump-account-calculator' },
  openGraph: {
    title: 'Trump Account Calculator 2026 — Project a Balance at Age 18',
    description: 'Estimate a hypothetical account balance and review current IRS eligibility and pilot contribution rules.',
    url: 'https://www.privatepaycheck.com/trump-account-calculator',
    type: 'website',
  },
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>{children}</>
  );
}
