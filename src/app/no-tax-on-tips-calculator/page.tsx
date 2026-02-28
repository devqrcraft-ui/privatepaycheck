import type { Metadata } from 'next'
import TipsCalculator from './TipsCalculator'

export const metadata: Metadata = {
  title: 'No Tax on Tips Calculator 2025 — How Much Will You Save?',
  description: 'Calculate your federal tax savings under the new No Tax on Tips law. Up to $25,000 tax-free. 100% private — zero data stored.',
  alternates: { canonical: 'https://www.privatepaycheck.com/no-tax-on-tips-calculator' },
}

export default function Page() {
  return <TipsCalculator />
}
