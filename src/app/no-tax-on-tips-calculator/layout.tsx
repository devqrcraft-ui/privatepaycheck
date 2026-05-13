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
export default function Layout({ children }: { children: ReactNode }) {
  const faq='{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Who qualifies for No Tax on Tips?","acceptedAnswer":{"@type":"Answer","text":"Workers in traditionally tipped occupations: servers, bartenders, hotel staff, hair stylists, valets. Income threshold is 160,000 or less in wages."}},{"@type":"Question","name":"Is there a cap on tax-free tip income?","acceptedAnswer":{"@type":"Answer","text":"Yes, the exemption caps at 25,000 per year. Tips above 25,000 are taxed normally."}},{"@type":"Question","name":"Does No Tax on Tips eliminate FICA?","acceptedAnswer":{"@type":"Answer","text":"No. Social Security 6.2% and Medicare 1.45% still apply to tips. Only federal income tax is exempt."}},{"@type":"Question","name":"Do I still need to report tips?","acceptedAnswer":{"@type":"Answer","text":"Yes, all tips must be reported on your tax return. They are not subject to federal income tax but count for Social Security."}},{"@type":"Question","name":"When did No Tax on Tips become law?","acceptedAnswer":{"@type":"Answer","text":"Signed into law as part of the One Big Beautiful Bill on July 4, 2025, effective tax year 2026."}}]}';
  const blog='{"@context":"https://schema.org","@type":"BlogPosting","headline":"No Tax on Tips Calculator 2026","description":"Calculate your tip income tax savings under the 2026 No Tax on Tips law. Up to 25,000 tip deduction for servers, bartenders, drivers.","url":"https://www.privatepaycheck.com/no-tax-on-tips-calculator","datePublished":"2026-05-13","dateModified":"2026-05-13","author":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"publisher":{"@type":"Organization","name":"PrivatePaycheck","url":"https://www.privatepaycheck.com"}}';
  const bc='{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"No Tax on Tips Calculator","item":"https://www.privatepaycheck.com/no-tax-on-tips-calculator"}]}';
  return (<><script type='application/ld+json' dangerouslySetInnerHTML={{ __html: faq }} /><script type='application/ld+json' dangerouslySetInnerHTML={{ __html: blog }} /><script type='application/ld+json' dangerouslySetInnerHTML={{ __html: bc }} />{children}</>);
}