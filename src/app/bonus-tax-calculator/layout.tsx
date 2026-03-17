
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: "How much tax do I pay on a bonus in 2026?", acceptedAnswer: { '@type': 'Answer', text: "The IRS withholds 22% federal tax on bonuses under $1 million. State taxes also apply. On a $10,000 bonus in Texas (no state tax), you keep about $7,820. In California, roughly $6,200." } },
    { '@type': 'Question', name: "What states have no bonus tax?", acceptedAnswer: { '@type': 'Answer', text: "Nine states have no income tax: Texas, Florida, Nevada, Washington, Wyoming, South Dakota, Tennessee, New Hampshire, and Alaska. Workers in these states only pay 22% federal withholding on bonuses." } },
    { '@type': 'Question', name: "Is bonus tax the same as regular income tax?", acceptedAnswer: { '@type': 'Answer', text: "Bonuses are taxed as supplemental wages. The IRS flat rate method withholds 22% federal regardless of your bracket. At tax time, if your effective rate is lower, you may get a refund on the difference." } }
  ],
};
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Bonus Tax Calculator 2026 — Exact Federal + State Tax on Bonus',
  description: 'Calculate exact federal and state tax on your bonus in 2026. IRS 22% flat rate or aggregate method. All 50 states. Free, instant, no signup.',
  alternates: { canonical: 'https://privatepaycheck.com/bonus-tax-calculator' },
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
