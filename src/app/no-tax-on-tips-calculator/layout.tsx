import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'No Tax on Tips Calculator 2026 — Save Up to $5,500/Year | PrivatePaycheck',
  description: 'Calculate your tip income tax savings under the 2026 No Tax on Tips law. Up to $25,000 tip deduction for servers, bartenders, drivers. See exact savings free.',
  alternates: { canonical: 'https://www.privatepaycheck.com/no-tax-on-tips-calculator' },
  openGraph: {
    title: 'No Tax on Tips Calculator 2026 — Save Up to $5,500/Year | PrivatePaycheck',
    description: 'Calculate your tip income tax savings under the 2026 No Tax on Tips law. Up to $25,000 tip deduction for servers, bartenders, drivers. See exact savings free.',
    url: 'https://www.privatepaycheck.com/no-tax-on-tips-calculator',
    type: 'website',
  },
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>{children}</>
  );
}
