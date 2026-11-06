import type { Metadata } from 'next';
import Link from 'next/link';
import TrumpAccountProjection from './TrumpAccountProjection';

export const metadata: Metadata = {
  title: 'Trump Account Calculator 2026 — Project a Balance at Age 18',
  description: 'Model a hypothetical Trump Account balance at age 18 using your starting balance and an assumed return. Review IRS eligibility and the $1,000 pilot contribution rules.',
  alternates: { canonical: 'https://www.privatepaycheck.com/trump-account-calculator' },
  openGraph: {
    title: 'Trump Account Calculator 2026 — Project a Balance at Age 18',
    description: 'Estimate a hypothetical account balance and review current IRS eligibility and pilot contribution rules.',
    url: 'https://www.privatepaycheck.com/trump-account-calculator',
    siteName: 'PrivatePaycheck',
    type: 'website',
  },
};

const IRS_FAQ = 'https://www.irs.gov/faqs/trump-accounts-frequently-asked-questions';

export default function TrumpAccountPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#07111f', color: '#e8edf8', fontFamily: 'system-ui,sans-serif' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(6px,1.5vw,24px)' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 24, fontSize: 16 }}>
          <Link href="/" style={{ color: '#e8b84b' }}>Home</Link>
          <span aria-hidden="true"> › </span>
          <span>Trump Account Calculator</span>
        </nav>

        <h1 style={{ margin: '0 0 12px', fontSize: 'clamp(28px,5vw,44px)', lineHeight: 1.15, color: '#fff' }}>
          Trump Account Balance Calculator
        </h1>
        <p style={{ maxWidth: 720, margin: '0 0 24px', fontSize: 17, lineHeight: 1.7, color: '#c4d2e3' }}>
          Project a hypothetical balance to age 18. The result depends on the assumptions you enter and is not an official benefit estimate or a promise of investment returns.
        </p>

        <div role="note" style={{ padding: 18, marginBottom: 24, background: '#182538', border: '1px solid #e8b84b', color: '#e8edf8', fontSize: 16, lineHeight: 1.65 }}>
          <strong>Current IRS rules:</strong> A child generally must have a valid Social Security number and not turn 18 before the end of the calendar year the account is established. The one-time $1,000 pilot contribution is limited to eligible U.S. citizens born from January 1, 2025, through December 31, 2028, and requires an election. Eligibility for an account does not by itself guarantee the pilot contribution.
          {' '}<a href={IRS_FAQ} target="_blank" rel="noopener noreferrer" style={{ color: '#e8b84b', textDecoration: 'underline' }}>Read the IRS FAQ</a>.
        </div>

        <TrumpAccountProjection />

        <section aria-labelledby="account-rules" style={{ marginBottom: 28, padding: 'clamp(16px,4vw,24px)', background: '#101d30', border: '1px solid #34445a' }}>
          <h2 id="account-rules" style={{ margin: '0 0 12px', fontSize: 22, color: '#fff' }}>What the projection does—and does not—include</h2>
          <ul style={{ margin: 0, paddingLeft: 22, color: '#c4d2e3', fontSize: 16, lineHeight: 1.75 }}>
            <li>The calculator compounds the starting balance once per year at the return you enter.</li>
            <li>It does not determine whether a child qualifies, whether a contribution was elected, or whether an account has been opened.</li>
            <li>It does not model additional contributions, fees, taxes, withdrawals, inflation, or changing returns.</li>
            <li>Investment values can fall as well as rise; the assumed return is not guaranteed.</li>
          </ul>
        </section>

        <p style={{ margin: 0, color: '#c4d2e3', fontSize: 16, lineHeight: 1.7 }}>
          For official enrollment and account questions, use the <a href={IRS_FAQ} target="_blank" rel="noopener noreferrer" style={{ color: '#e8b84b', textDecoration: 'underline' }}>IRS Trump Accounts FAQ</a>. PrivatePaycheck is not affiliated with the U.S. government or the IRS.
        </p>
      </div>
    </main>
  );
}
