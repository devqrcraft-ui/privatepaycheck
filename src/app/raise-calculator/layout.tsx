import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Raise Calculator 2026 — See Your New Take-Home Pay After Raise',
  description: 'Free raise calculator 2026: see your exact new take-home pay after a raise, including federal and state taxes for all 50 states.',
  alternates: { canonical: 'https://www.privatepaycheck.com/raise-calculator' },
  openGraph: {
    title: 'Raise Calculator 2026 — See Your New Take-Home Pay After Raise',
    description: 'Free raise calculator 2026: see your exact new take-home pay after a raise, including federal and state taxes for all 50 states.',
    url: 'https://www.privatepaycheck.com/raise-calculator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
