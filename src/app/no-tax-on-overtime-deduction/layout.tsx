import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'No Tax on Overtime 2026 — Calculator & IRS Rules Explained',
  description: 'See how the proposed no-tax-on-overtime deduction affects your 2026 paycheck. Free calculator for all 50 states.',
  alternates: { canonical: 'https://www.privatepaycheck.com/no-tax-on-overtime-deduction' },
  openGraph: {
    title: 'No Tax on Overtime 2026 — Calculator & IRS Rules Explained',
    description: 'See how the proposed no-tax-on-overtime deduction affects your 2026 paycheck. Free calculator for all 50 states.',
    url: 'https://www.privatepaycheck.com/no-tax-on-overtime-deduction',
    type: 'website',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
