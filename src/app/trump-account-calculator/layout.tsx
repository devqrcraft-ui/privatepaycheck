import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Trump Account Calculator 2026 — See Your Child's Balance at Age 18 | PrivatePaycheck",
  description: "Calculate your child's Trump Account (MAGA Account) balance at age 18. $1,000 government seed + $2,500/yr employer contributions. See exact growth free.",
  alternates: { canonical: 'https://www.privatepaycheck.com/trump-account-calculator' },
  openGraph: {
    title: "Trump Account Calculator 2026 — See Your Child's Balance at Age 18 | PrivatePaycheck",
    description: "Calculate your child's Trump Account (MAGA Account) balance at age 18. $1,000 government seed + $2,500/yr employer contributions. See exact growth free.",
    url: 'https://www.privatepaycheck.com/trump-account-calculator',
    type: 'website',
  },
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>{children}</>
  );
}
