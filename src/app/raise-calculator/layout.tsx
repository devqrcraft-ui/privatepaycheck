import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Raise Calculator 2026 — See Exact Take-Home Pay After Your Raise',
  description: 'Free raise calculator: enter your salary and raise % to see exact new take-home pay after federal & state taxes. A 10% raise = ~6-7% more in your pocket. All 50 states, instant results.',
  alternates: { canonical: 'https://www.privatepaycheck.com/raise-calculator' },
  openGraph: {
    title: 'Raise Calculator 2026 — How Much Will You Actually Take Home?',
    description: 'A 10% raise does not mean 10% more net pay. See the real number after taxes for all 50 states.',
    url: 'https://www.privatepaycheck.com/raise-calculator',
    type: 'website',
  },
}
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>{children}</>
  );
}
