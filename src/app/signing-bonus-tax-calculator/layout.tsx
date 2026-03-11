import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Signing Bonus Tax Calculator 2026 — How Much Will You Keep?',
  description: 'Calculate exact taxes on your signing bonus in 2026. Federal 22% + state tax for all 50 states. Free, no signup.',
  alternates: { canonical: 'https://www.privatepaycheck.com/signing-bonus-tax-calculator' },
  openGraph: {
    title: 'Signing Bonus Tax Calculator 2026 — How Much Will You Keep?',
    description: 'Calculate exact taxes on your signing bonus in 2026. Federal 22% + state tax for all 50 states. Free, no signup.',
    url: 'https://www.privatepaycheck.com/signing-bonus-tax-calculator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
