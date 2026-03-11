import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'No Tax on Tips Calculator 2026 — One Big Beautiful Bill Savings',
  description: 'Calculate exact federal tax savings on tips under the One Big Beautiful Bill. Up to $25,000 tip deduction for 2025-2028. Free calculator for tipped workers, all 50 states.',
  alternates: { canonical: 'https://www.privatepaycheck.com/no-tax-on-tips-calculator' },
  keywords: 'no tax on tips 2026, tips deduction one big beautiful bill, tip tax calculator 2026, no tax tips calculator',
  openGraph: {
    title: 'No Tax on Tips Calculator 2026 — One Big Beautiful Bill',
    description: 'Calculate exact federal tax savings on tips under the One Big Beautiful Bill. Up to $25,000 tip deduction for 2025-2028.',
    url: 'https://www.privatepaycheck.com/no-tax-on-tips-calculator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
