import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'No Tax on Overtime Calculator 2026 — One Big Beautiful Bill Savings',
  description: 'Calculate exact federal tax savings on overtime pay under the One Big Beautiful Bill. Up to $12,500 overtime deduction for 2025-2028. Free, all 50 states.',
  alternates: { canonical: 'https://www.privatepaycheck.com/no-tax-on-overtime-deduction' },
  keywords: 'no tax on overtime 2026, overtime deduction one big beautiful bill, overtime tax calculator 2026, no tax overtime calculator',
  openGraph: {
    title: 'No Tax on Overtime Calculator 2026 — One Big Beautiful Bill',
    description: 'Calculate exact federal tax savings on overtime under the One Big Beautiful Bill. Up to $12,500 deduction for 2025-2028.',
    url: 'https://www.privatepaycheck.com/no-tax-on-overtime-deduction',
    type: 'website',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
