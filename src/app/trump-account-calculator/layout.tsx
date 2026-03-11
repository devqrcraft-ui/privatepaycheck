import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Trump Account Calculator 2026 — How Much Will My Child Have at 18?',
  description: 'Calculate how much your child accumulates in a Trump Account by age 18. Government seeds $1,000 at birth + employer contributions up to $2,500/year. One Big Beautiful Bill.',
  alternates: { canonical: 'https://www.privatepaycheck.com/trump-account-calculator' },
  keywords: 'trump account calculator, trump account 2026, MAGA account calculator, one big beautiful bill child savings, trump baby bonus',
  openGraph: {
    title: 'Trump Account Calculator 2026 — Child Savings at Age 18',
    description: 'See how much your child will have at 18. $1,000 government seed + employer contributions up to $2,500/year.',
    url: 'https://www.privatepaycheck.com/trump-account-calculator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
