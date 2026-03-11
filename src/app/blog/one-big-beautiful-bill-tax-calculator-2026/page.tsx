import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'One Big Beautiful Bill Tax Calculator 2026 — Overtime, Tips & Senior Savings',
  description: 'Calculate your exact tax savings under the One Big Beautiful Bill 2026. No tax on overtime up to $12,500, no tax on tips up to $25,000, extra $6,000 for seniors 65+.',
  alternates: { canonical: 'https://www.privatepaycheck.com/blog/one-big-beautiful-bill-tax-calculator-2026' },
  keywords: 'one big beautiful bill calculator, one big beautiful bill 2026 tax savings, no tax overtime tips 2026, OBBB tax calculator',
  openGraph: {
    title: 'One Big Beautiful Bill Tax Calculator 2026',
    description: 'Calculate your savings: no tax on overtime, tips, $6,000 senior deduction. Signed into law.',
    url: 'https://www.privatepaycheck.com/blog/one-big-beautiful-bill-tax-calculator-2026',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': 'One Big Beautiful Bill Tax Calculator 2026 — What You Actually Save',
  'description': 'Complete guide to tax savings under the One Big Beautiful Bill: overtime deduction, tips deduction, senior $6K deduction, Trump Accounts.',
  'url': 'https://www.privatepaycheck.com/blog/one-big-beautiful-bill-tax-calculator-2026',
  'datePublished': '2026-03-12',
  'dateModified': '2026-03-12',
  'author': { '@type': 'Organization', 'name': 'PrivatePaycheck', 'url': 'https://www.privatepaycheck.com' },
  'publisher': { '@type': 'Organization', 'name': 'PrivatePaycheck', 'url': 'https://www.privatepaycheck.com' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    { '@type': 'Question', 'name': 'What is the One Big Beautiful Bill?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'The One Big Beautiful Bill is signed US law eliminating federal income tax on overtime pay (up to $12,500/year) and tips (up to $25,000/year), adding a $6,000 deduction for age 65+, and creating Trump Accounts for children. Applies 2025-2028.' } },
    { '@type': 'Question', 'name': 'How much can I save with no tax on overtime in 2026?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'You can deduct up to $12,500 of overtime pay from federal taxable income per year. At the 22% tax bracket that saves up to $2,750 annually. Phaseout begins at $150,000 income (single).' } },
    { '@type': 'Question', 'name': 'How much can I save with no tax on tips in 2026?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Tipped workers can deduct up to $25,000 in tips from federal taxes. At 22% bracket that saves up to $5,500/year. Applies to servers, bartenders, hotel staff, delivery drivers.' } },
    { '@type': 'Question', 'name': 'Who qualifies for the $6,000 senior deduction?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Americans age 65+ get an additional $6,000 above-the-line deduction. Phases out at $75,000 income (single) or $150,000 (married filing jointly).' } },
    { '@type': 'Question', 'name': 'What is a Trump Account and how much will my child have at 18?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Trump Accounts are tax-advantaged savings accounts for children under 18. Government seeds $1,000 at birth. Employers contribute up to $2,500/year tax-free. Invested in a stock index fund. A child born today with $1,000 seed plus $1,000/year reaches 18 with over $38,000 at 7% return.' } },
  ]
};

export default function OBBBBlogPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f172a 0%,#1e293b 100%)', color: 'white', fontFamily: 'Inter,sans-serif', padding: '40px 20px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <Link href="/blog" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 14 }}>All articles</Link>
        <h1 style={{ fontSize: 32, fontWeight: 900, marginTop: 16, marginBottom: 8, lineHeight: 1.2 }}>
          One Big Beautiful Bill Tax Calculator 2026 — What You Actually Save
        </h1>
        <p style={{ color: '#64748b', fontSize: 14, marginBottom: 32 }}>Updated March 12, 2026 · 5 min read</p>

        <div style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 16, padding: 24, marginBottom: 32 }}>
          <p style={{ margin: '0 0 14px', fontSize: 15, fontWeight: 700, color: '#a5b4fc' }}>Calculate your savings now:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Link href="/no-tax-on-overtime-deduction" style={{ color: '#818cf8', fontSize: 15, textDecoration: 'none' }}>No Tax on Overtime — save up to $2,750/year</Link>
            <Link href="/no-tax-on-tips-calculator" style={{ color: '#818cf8', fontSize: 15, textDecoration: 'none' }}>No Tax on Tips — save up to $5,500/year</Link>
            <Link href="/senior-deduction-calculator" style={{ color: '#818cf8', fontSize: 15, textDecoration: 'none' }}>Senior $6,000 Deduction — age 65+</Link>
            <Link href="/trump-account-calculator" style={{ color: '#818cf8', fontSize: 15, textDecoration: 'none' }}>Trump Account — child savings at 18</Link>
          </div>
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>What is the One Big Beautiful Bill?</h2>
        <p style={{ color: '#cbd5e1', lineHeight: 1.7, marginBottom: 24 }}>
          The One Big Beautiful Bill is now signed US federal law. It delivers four major tax changes affecting tens of millions of Americans from 2025 through 2028: no federal tax on overtime pay, no federal tax on tips, an extra $6,000 deduction for seniors 65 and older, and new Trump Accounts for children.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>No Tax on Overtime — Up to $12,500 Deduction</h2>
        <p style={{ color: '#cbd5e1', lineHeight: 1.7, marginBottom: 12 }}>
          If you earn overtime pay, you can deduct up to $12,500 of that overtime from your federal taxable income each year. The deduction phases out for higher earners above $150,000 (single) or $300,000 (married filing jointly).
        </p>
        <p style={{ color: '#cbd5e1', lineHeight: 1.7, marginBottom: 8 }}>
          At the 22% tax bracket, that is up to <strong style={{ color: '#4ade80' }}>$2,750 in annual savings</strong>. At 24%, up to $3,000.
        </p>
        <p style={{ marginBottom: 24 }}><Link href="/no-tax-on-overtime-deduction" style={{ color: '#818cf8' }}>Calculate your exact overtime savings</Link></p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>No Tax on Tips — Up to $25,000 Deduction</h2>
        <p style={{ color: '#cbd5e1', lineHeight: 1.7, marginBottom: 12 }}>
          Tipped workers — restaurant servers, bartenders, hotel staff, delivery drivers — can deduct up to $25,000 in tip income from federal taxes annually.
        </p>
        <p style={{ color: '#cbd5e1', lineHeight: 1.7, marginBottom: 8 }}>
          A server earning $800/week in tips saves over <strong style={{ color: '#4ade80' }}>$5,500 per year</strong> in federal taxes. Phases out above $160,000 total income.
        </p>
        <p style={{ marginBottom: 24 }}><Link href="/no-tax-on-tips-calculator" style={{ color: '#818cf8' }}>Calculate your exact tips savings</Link></p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Senior $6,000 Deduction — Age 65+</h2>
        <p style={{ color: '#cbd5e1', lineHeight: 1.7, marginBottom: 8 }}>
          Americans 65 and older get an additional $6,000 above-the-line deduction on top of the standard deduction. Phases out at $75,000 (single) or $150,000 (married), reducing $1 per $1 over the threshold.
        </p>
        <p style={{ marginBottom: 24 }}><Link href="/senior-deduction-calculator" style={{ color: '#818cf8' }}>Calculate your senior deduction</Link></p>

        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Trump Accounts — $1,000 Seed for Every Child</h2>
        <p style={{ color: '#cbd5e1', lineHeight: 1.7, marginBottom: 8 }}>
          Children born in the US receive a $1,000 government seed in a Trump Account — invested in a stock index fund. Employers can contribute up to $2,500/year tax-free. At 7% average annual return, a newborn with $1,000 seed and $1,000/year employer contribution reaches 18 with over <strong style={{ color: '#818cf8' }}>$38,000</strong>.
        </p>
        <p style={{ marginBottom: 32 }}><Link href="/trump-account-calculator" style={{ color: '#818cf8' }}>Calculate your child Trump Account balance</Link></p>

        <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 20, fontSize: 13, color: '#64748b' }}>
          For informational purposes only. Tax laws may change. Consult a qualified tax professional for advice specific to your situation.
        </div>
      </div>
    </main>
  );
}
