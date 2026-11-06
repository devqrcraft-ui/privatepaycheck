import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBox from '@/app/components/AuthorBox';

const IRS_TIPS = 'https://www.irs.gov/newsroom/one-big-beautiful-bill-how-to-take-advantage-of-no-tax-on-tips-and-overtime';
const IRS_OCCUPATIONS = 'https://www.irs.gov/newsroom/treasury-irs-issue-guidance-listing-occupations-where-workers-customarily-and-regularly-receive-tips-under-the-one-big-beautiful-bill';

export const metadata: Metadata = {
  title: 'No Tax on Tips: 2026 Federal Deduction, Limits and Eligibility',
  description: 'Understand the federal deduction for qualified tips in 2026: eligible occupations, the $25,000 cap, income phase-out, and taxes that still apply.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/no-tax-on-tips-explained' },
  openGraph: {
    title: 'No Tax on Tips: 2026 Federal Deduction, Limits and Eligibility',
    description: 'IRS-based guide to qualified tips, the deduction cap, income phase-out, and remaining payroll taxes.',
    url: 'https://www.privatepaycheck.com/blog/no-tax-on-tips-explained',
    siteName: 'PrivatePaycheck',
    type: 'article',
  },
};

export default function NoTaxOnTipsGuide() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.privatepaycheck.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.privatepaycheck.com/blog' },
      { '@type': 'ListItem', position: 3, name: 'No Tax on Tips Explained', item: 'https://www.privatepaycheck.com/blog/no-tax-on-tips-explained' },
    ],
  };
  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'No Tax on Tips: 2026 Federal Deduction, Limits and Eligibility',
    description: 'IRS-based guide to qualified tips, the deduction cap, income phase-out, and remaining payroll taxes.',
    url: 'https://www.privatepaycheck.com/blog/no-tax-on-tips-explained',
    datePublished: '2026-01-01',
    dateModified: '2026-11-06',
    author: { '@type': 'Organization', name: 'PrivatePaycheck Editorial Team', url: 'https://www.privatepaycheck.com' },
    publisher: { '@type': 'Organization', name: 'PrivatePaycheck', url: 'https://www.privatepaycheck.com' },
  };

  return (
    <main style={{ minHeight: '100vh', background: '#07111f', color: '#e8edf8', fontFamily: 'system-ui,sans-serif' }}>
      <article style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(6px,1.5vw,24px)', fontSize: 17, lineHeight: 1.75 }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
        <nav aria-label="Breadcrumb" style={{ marginBottom: 24, fontSize: 16 }}>
          <Link href="/" style={{ color: '#e8b84b' }}>Home</Link> › <Link href="/blog" style={{ color: '#e8b84b' }}>Blog</Link> › No Tax on Tips
        </nav>
        <h1 style={{ margin: '0 0 16px', color: '#fff', fontSize: 'clamp(28px,5vw,42px)', lineHeight: 1.2 }}>
          No Tax on Tips: 2026 Federal Deduction, Limits and Eligibility
        </h1>
        <p style={{ color: '#c4d2e3' }}>
          The 2025 federal tax law created a temporary deduction for qualified tips for tax years 2025 through 2028. It is a deduction from federal income—not a blanket exemption from every tax on tips.
        </p>

        <h2 style={{ marginTop: 32, color: '#fff', fontSize: 24 }}>Who may claim the deduction?</h2>
        <p>
          Employees and self-employed individuals may qualify when their tips meet the IRS definition and come from a listed occupation. Qualified tips generally are voluntary cash or charged tips paid by customers, including eligible amounts received through tip sharing. A mandatory service charge is not automatically a qualified tip.
        </p>
        <p>Check the <a href={IRS_OCCUPATIONS} target="_blank" rel="noopener noreferrer" style={{ color: '#e8b84b', textDecoration: 'underline' }}>IRS occupation guidance</a> and current IRS instructions for the exact rules. A calculator cannot determine occupation eligibility or validate the way income was reported.</p>

        <h2 style={{ marginTop: 32, color: '#fff', fontSize: 24 }}>Deduction cap and income phase-out</h2>
        <ul style={{ paddingLeft: 24 }}>
          <li>The maximum annual deduction is $25,000.</li>
          <li>The deduction is reduced when modified adjusted gross income exceeds $150,000 ($300,000 for married filing jointly).</li>
          <li>For self-employed taxpayers, the deduction cannot exceed the relevant net income from the trade or business where the tips were earned.</li>
        </ul>
        <p>These are federal rules. State treatment varies, so this page does not claim that the federal deduction automatically reduces state income tax.</p>

        <h2 style={{ marginTop: 32, color: '#fff', fontSize: 24 }}>Taxes that still apply</h2>
        <p>
          Qualified tips remain reportable. The deduction reduces eligible federal income subject to the statutory limits; it does not eliminate Social Security or Medicare taxes. The effect on state or local taxes depends on the applicable jurisdiction.
        </p>

        <h2 style={{ marginTop: 32, color: '#fff', fontSize: 24 }}>Estimate your federal savings</h2>
        <p>
          Our <Link href="/no-tax-on-tips-calculator" style={{ color: '#e8b84b', textDecoration: 'underline' }}>tip deduction calculator</Link> estimates federal income-tax savings using the wages and tips entered. It approximates modified adjusted gross income from those inputs and does not model state taxes, all deductions, credits, or every eligibility rule.
        </p>
        <p>For primary-source details, see the <a href={IRS_TIPS} target="_blank" rel="noopener noreferrer" style={{ color: '#e8b84b', textDecoration: 'underline' }}>IRS overview of the tips and overtime deductions</a>. PrivatePaycheck is not affiliated with the IRS and this guide is for general information, not tax advice.</p>
        <AuthorBox />
      </article>
    </main>
  );
}
