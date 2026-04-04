import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'No Tax on Tips Calculator 2026 — Save Up to $5,500/Year | PrivatePaycheck',
  description: 'Calculate your tip income tax savings under the 2026 No Tax on Tips law. Up to $25,000 tip deduction for servers, bartenders, drivers. See exact savings free.',
  alternates: { canonical: 'https://www.privatepaycheck.com/no-tax-on-tips-calculator' },
  openGraph: {
    title: 'No Tax on Tips Calculator 2026 — Save Up to $5,500/Year | PrivatePaycheck',
    description: 'Calculate your tip income tax savings under the 2026 No Tax on Tips law. Up to $25,000 tip deduction for servers, bartenders, drivers. See exact savings free.',
    url: 'https://www.privatepaycheck.com/no-tax-on-tips-calculator',
    type: 'website',
  },
};

const FAQ_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Are tips tax-free in 2026?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The No Tax on Tips provision allows workers to deduct up to $25,000 in tip income from their federal taxable income for 2025-2028.\"}},{\"@type\":\"Question\",\"name\":\"How much can I save?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"At 22% bracket, a server earning $25,000 in tips saves up to $5,500/year. At 12%, savings are $3,000.\"}},{\"@type\":\"Question\",\"name\":\"Who qualifies?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Servers, bartenders, hotel staff, taxi drivers, salon workers, delivery drivers. Tips must be voluntary customer payments.\"}}]}";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FAQ_SCHEMA }}
      />
      {children}
    </>
  );
}
