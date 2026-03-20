import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Raise Calculator 2026 — See Exact Take-Home Pay After Your Raise',
  description: 'Free raise calculator: enter your salary and raise % to see exact new take-home pay after federal & state taxes. A 10% raise = ~6-7% more in your pocket. All 50 states, instant results.',
  alternates: { canonical: 'https://www.privatepaycheck.com/raise-calculator' },
  openGraph: {
    title: 'Raise Calculator 2026 — How Much Will You Actually Take Home?',
    description: 'A 10% raise does not mean 10% more net pay. See the real number after taxes for all 50 states.',
    url: 'https://privatepaycheck.com/raise-calculator',
    type: 'website',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do I keep less than my raise percentage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As your salary increases, more income falls into higher tax brackets. A 10% raise typically results in only 6-7% more net pay after federal, state, and FICA taxes. The exact amount depends on your state and filing status.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much of my raise will I actually take home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typically you keep 60-70% of a raise after taxes. For example, a $5,000 raise in California nets roughly $3,000-$3,200 in extra take-home pay. In Texas or Florida (no state income tax), you keep closer to $3,500-$3,800 of the same raise.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a raise push me into a higher tax bracket?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only the dollars above the bracket threshold are taxed at the higher rate — not your entire salary. A raise never makes you take home less money. For 2026, the federal brackets are 10%, 12%, 22%, 24%, 32%, 35%, and 37%.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I use a raise calculator to negotiate salary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Work backwards from your desired net increase. Decide how much extra monthly income you need, then use the calculator to find the required gross raise. To get $500/month more in Texas, you need roughly a $7,800 gross raise. In California, you may need $10,000+.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this raise calculator free and accurate for 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — completely free, no signup required. Uses 2026 IRS federal tax brackets, current FICA rates (6.2% Social Security + 1.45% Medicare), and state income tax rates for all 50 states and DC. All calculations happen in your browser.',
      },
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
