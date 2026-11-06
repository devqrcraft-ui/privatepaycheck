import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBox from '@/app/components/AuthorBox';

const IRS_FAQ = 'https://www.irs.gov/faqs/trump-accounts-frequently-asked-questions';

export const metadata: Metadata = {
  title: 'Trump Accounts in 2026: Eligibility and the $1,000 Pilot Contribution',
  description: 'Learn who may qualify for a Trump Account, the limited $1,000 pilot contribution rules, and how to model a hypothetical balance.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/trump-account-calculator' },
  openGraph: {
    title: 'Trump Accounts in 2026: Eligibility and the $1,000 Pilot Contribution',
    description: 'IRS eligibility, contribution election requirements, and a cautious balance projection.',
    url: 'https://www.privatepaycheck.com/blog/trump-account-calculator',
    siteName: 'PrivatePaycheck',
    type: 'article',
  },
};

export default function TrumpAccountGuide() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.privatepaycheck.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.privatepaycheck.com/blog' },
      { '@type': 'ListItem', position: 3, name: 'Trump Accounts in 2026', item: 'https://www.privatepaycheck.com/blog/trump-account-calculator' },
    ],
  };

  return (
    <main style={{ minHeight: '100vh', background: '#07111f', color: '#e8edf8', fontFamily: 'system-ui,sans-serif' }}>
      <article style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(6px,1.5vw,24px)', fontSize: 17, lineHeight: 1.75 }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
        <nav aria-label="Breadcrumb" style={{ marginBottom: 24, fontSize: 16 }}>
          <Link href="/" style={{ color: '#e8b84b' }}>Home</Link> › <Link href="/blog" style={{ color: '#e8b84b' }}>Blog</Link> › Trump Accounts
        </nav>
        <h1 style={{ margin: '0 0 16px', color: '#fff', fontSize: 'clamp(28px,5vw,42px)', lineHeight: 1.2 }}>
          Trump Accounts in 2026: Eligibility and the $1,000 Pilot Contribution
        </h1>
        <p style={{ color: '#c4d2e3' }}>
          A Trump Account is a new type of individual retirement account for eligible children. The IRS sets separate rules for establishing an account and receiving the one-time pilot contribution.
        </p>

        <h2 style={{ marginTop: 32, color: '#fff', fontSize: 24 }}>Who may qualify for an account?</h2>
        <p>The IRS says a child must have a valid Social Security number and must not turn 18 before the end of the calendar year in which the account is established. Account eligibility is not the same as eligibility for the pilot contribution.</p>

        <h2 style={{ marginTop: 32, color: '#fff', fontSize: 24 }}>Who may receive the $1,000 pilot contribution?</h2>
        <p>
          The one-time federal $1,000 contribution is for eligible U.S. citizens born from January 1, 2025, through December 31, 2028. The contribution must be elected. Even when an account is automatically established, the IRS says the eligible child’s account must be claimed and activated, and the pilot contribution still requires an election.
        </p>
        <p>
          Do not assume every child automatically receives the contribution. Confirm the current requirements and submission options in the <a href={IRS_FAQ} target="_blank" rel="noopener noreferrer" style={{ color: '#e8b84b', textDecoration: 'underline' }}>IRS Trump Accounts FAQ</a>.
        </p>

        <h2 style={{ marginTop: 32, color: '#fff', fontSize: 24 }}>How to interpret a balance projection</h2>
        <p>
          A future balance depends on the starting amount, investment returns, time, contributions, fees, taxes, and withdrawals. A calculator can illustrate a selected return assumption, but it cannot predict market performance or establish eligibility. The estimate on our <Link href="/trump-account-calculator" style={{ color: '#e8b84b', textDecoration: 'underline' }}>Trump Account calculator</Link> models only a starting balance compounded annually; it does not model additional contributions, fees, taxes, or account rules.
        </p>

        <h2 style={{ marginTop: 32, color: '#fff', fontSize: 24 }}>Official information</h2>
        <p>For current eligibility, claiming, and election instructions, rely on the <a href={IRS_FAQ} target="_blank" rel="noopener noreferrer" style={{ color: '#e8b84b', textDecoration: 'underline' }}>IRS FAQ</a>. PrivatePaycheck is not affiliated with the U.S. government or the IRS.</p>

        <p style={{ marginTop: 32 }}><Link href="/trump-account-calculator" style={{ color: '#e8b84b', textDecoration: 'underline' }}>Use the hypothetical balance calculator →</Link></p>
        <p><Link href="/blog/no-tax-on-tips-explained" style={{ color: '#e8b84b', textDecoration: 'underline' }}>Read about the qualified tips deduction →</Link></p>
        <AuthorBox />
      </article>
    </main>
  );
}
