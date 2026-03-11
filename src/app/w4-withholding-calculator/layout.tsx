import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'W-4 Withholding Calculator 2026 — Avoid Underpaying or Overpaying',
  description: 'Free W-4 withholding calculator 2026. See exactly how much federal tax to withhold. All filing statuses, all 50 states.',
  alternates: { canonical: 'https://www.privatepaycheck.com/w4-withholding-calculator' },
  openGraph: {
    title: 'W-4 Withholding Calculator 2026 — Avoid Underpaying or Overpaying',
    description: 'Free W-4 withholding calculator 2026. See exactly how much federal tax to withhold. All filing statuses, all 50 states.',
    url: 'https://www.privatepaycheck.com/w4-withholding-calculator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
