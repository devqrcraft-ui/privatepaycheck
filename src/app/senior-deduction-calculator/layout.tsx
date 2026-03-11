import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Senior Tax Deduction Calculator 2026 — Extra $6,000 for Age 65+',
  description: 'Calculate your extra $6,000 senior deduction under the One Big Beautiful Bill 2026. Ages 65+, phaseout at $75K single / $150K joint. Free, instant.',
  alternates: { canonical: 'https://www.privatepaycheck.com/senior-deduction-calculator' },
  keywords: 'senior deduction 2026, extra deduction age 65 one big beautiful bill, senior tax calculator 2026, 6000 senior deduction',
  openGraph: {
    title: 'Senior Tax Deduction Calculator 2026 — Extra $6,000 for Age 65+',
    description: 'Calculate your extra $6,000 senior deduction under the One Big Beautiful Bill. Free, instant, all filing statuses.',
    url: 'https://www.privatepaycheck.com/senior-deduction-calculator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
