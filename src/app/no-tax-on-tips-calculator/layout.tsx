import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'No Tax on Tips Calculator 2026 — How Much Will You Save?',
  description: 'Calculate your 2026 tax savings if tips become tax-free. Free calculator for tipped workers in all 50 states.',
  alternates: { canonical: 'https://www.privatepaycheck.com/no-tax-on-tips-calculator' },
  openGraph: {
    title: 'No Tax on Tips Calculator 2026 — How Much Will You Save?',
    description: 'Calculate your 2026 tax savings if tips become tax-free. Free calculator for tipped workers in all 50 states.',
    url: 'https://www.privatepaycheck.com/no-tax-on-tips-calculator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
