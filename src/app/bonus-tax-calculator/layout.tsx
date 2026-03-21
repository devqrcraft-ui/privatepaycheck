
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Bonus Tax Calculator 2026 — Exact Federal + State Tax on Bonus',
  description: 'Calculate exact federal and state tax on your bonus in 2026. IRS 22% flat rate or aggregate method. All 50 states. Free, instant, no signup.',
  alternates: { canonical: 'https://www.privatepaycheck.com/bonus-tax-calculator' },
  openGraph: {
    title: 'Bonus Tax Calculator 2026 — Exact Federal + State Tax on Bonus',
    description: 'Calculate exact federal and state tax on your bonus in 2026. IRS 22% flat rate or aggregate method. All 50 states. Free, instant, no signup.',
    url: 'https://privatepaycheck.com/bonus-tax-calculator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
