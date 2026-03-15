import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How We Calculate Your Paycheck | PrivatePaycheck',
  description: 'Transparent methodology: federal tax brackets, FICA, state taxes, 2026 overtime and tip deductions. Every formula sourced from IRS Publication 15-T.',
  alternates: { canonical: 'https://privatepaycheck.com/how-we-calculate' },
};

const CSS = `
  .hwc-wrap{max-width:860px;margin:0 auto;padding:60px 24px 80px;color:#c8d8e8;font-family:'Inter',sans-serif;}
  .hwc-badge{display:inline-block;background:rgba(99,102,241,.15);border:1px solid rgba(99,102,241,.35);color:#a5b4fc;font-size:12px;font-weight:600;letter-spacing:.08em;padding:4px 14px;border-radius:20px;margin-bottom:20px;}
  .hwc-h1{font-size:clamp(28px,5vw,42px);font-weight:700;color:#fff;line-height:1.2;margin-bottom:16px;}
  .hwc-h1 em{color:#818cf8;font-style:normal;}
  .hwc-lead{font-size:16px;color:#7a9fbf;line-height:1.7;margin-bottom:48px;max-width:680px;}
  .hwc-section{margin-bottom:52px;}
  .hwc-h2{font-size:22px;font-weight:700;color:#fff;margin-bottom:8px;display:flex;align-items:center;gap:10px;}
  .hwc-h2 span{font-size:22px;}
  .hwc-p{font-size:15px;color:#8aa4be;line-height:1.75;margin-bottom:12px;}
  .hwc-table{width:100%;border-collapse:collapse;margin:16px 0 8px;font-size:14px;}
  .hwc-table th{text-align:left;padding:8px 12px;background:rgba(99,102,241,.12);color:#a5b4fc;font-weight:600;border-bottom:1px solid rgba(99,102,241,.2);}
  .hwc-table td{padding:8px 12px;border-bottom:1px solid rgba(255,255,255,.06);color:#c8d8e8;}
  .hwc-table tr:last-child td{border-bottom:none;}
  .hwc-note{background:rgba(99,102,241,.08);border-left:3px solid #818cf8;padding:14px 18px;border-radius:0 8px 8px 0;font-size:14px;color:#a5b4fc;margin:16px 0;}
  .hwc-sources{margin-top:52px;padding-top:28px;border-top:1px solid rgba(255,255,255,.08);}
  .hwc-sources h3{font-size:16px;font-weight:600;color:#fff;margin-bottom:14px;}
  .hwc-src-list{display:flex;flex-direction:column;gap:8px;}
  .hwc-src-list a{font-size:14px;color:#F5C842;text-decoration:none;}
  .hwc-src-list a:hover{text-decoration:underline;}
  .hwc-faq{margin-top:52px;}
  .hwc-faq h2{font-size:22px;font-weight:700;color:#fff;margin-bottom:24px;}
  .hwc-q{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:18px 20px;margin-bottom:12px;}
  .hwc-q-title{font-size:15px;font-weight:600;color:#fff;margin-bottom:6px;}
  .hwc-q-ans{font-size:14px;color:#8aa4be;line-height:1.7;}
  .hwc-cta{margin-top:52px;text-align:center;background:rgba(99,102,241,.1);border:1px solid rgba(99,102,241,.3);border-radius:16px;padding:36px 24px;}
  .hwc-cta h3{font-size:22px;font-weight:700;color:#fff;margin-bottom:10px;}
  .hwc-cta p{font-size:15px;color:#8aa4be;margin-bottom:20px;}
  .hwc-cta a{display:inline-block;background:#818cf8;color:#fff;font-weight:700;font-size:15px;padding:12px 32px;border-radius:10px;text-decoration:none;}
  .hwc-cta a:hover{background:#6366f1;}
  body{background:#0a1628;}
`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How accurate is the PrivatePaycheck calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our calculator uses the official 2026 IRS Publication 15-T withholding tables for federal tax, the SSA-announced $176,100 Social Security wage base, and official state tax rates from each state's revenue department. Results are accurate for standard W-2 employees. Self-employed workers should use our 1099 calculator."
      }
    },
    {
      "@type": "Question",
      "name": "Does the calculator include the 2026 overtime tax exemption?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The One Big Beautiful Bill signed in 2025 allows eligible W-2 workers to deduct up to $12,500 in overtime pay from federal taxable income. Our overtime and no-tax-on-overtime calculators include this deduction for tax years 2025–2028."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data stored or shared?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. All calculations run entirely in your browser using JavaScript. No salary data, personal information, or results are ever transmitted to our servers, stored in a database, or shared with third parties."
      }
    },
    {
      "@type": "Question",
      "name": "What is the 2026 standard deduction?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For 2026: $14,600 for Single filers, $29,200 for Married Filing Jointly, and $21,900 for Head of Household. These are built into every federal tax calculation on this site."
      }
    },
    {
      "@type": "Question",
      "name": "How is FICA tax calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FICA consists of two parts: Social Security tax at 6.2% on wages up to $176,100 (2026 wage base), and Medicare tax at 1.45% on all wages. High earners above $200,000 pay an additional 0.9% Additional Medicare Tax. Your employer matches the 6.2% and 1.45% portions."
      }
    }
  ]
};

export default function HowWeCalculatePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: CSS}} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}
      />

      <div className="hwc-wrap">
        <div className="hwc-badge">Methodology &amp; Transparency</div>
        <h1 className="hwc-h1">How We Calculate <em>Your Paycheck</em></h1>
        <p className="hwc-lead">
          Every calculation on PrivatePaycheck is based on official IRS and state revenue sources.
          Below is the exact methodology — no black boxes, no estimates.
        </p>

        {/* FEDERAL INCOME TAX */}
        <div className="hwc-section">
          <h2 className="hwc-h2"><span>🏛️</span> Federal Income Tax</h2>
          <p className="hwc-p">
            We apply the 2026 IRS Publication 15-T percentage method tables for automated payroll systems.
            The standard deduction is subtracted from gross wages before applying progressive tax brackets.
          </p>
          <table className="hwc-table">
            <thead>
              <tr><th>Rate</th><th>Single — Taxable Income</th><th>Married Filing Jointly</th></tr>
            </thead>
            <tbody>
              <tr><td>10%</td><td>$0 – $11,925</td><td>$0 – $23,850</td></tr>
              <tr><td>12%</td><td>$11,926 – $48,475</td><td>$23,851 – $96,950</td></tr>
              <tr><td>22%</td><td>$48,476 – $103,350</td><td>$96,951 – $206,700</td></tr>
              <tr><td>24%</td><td>$103,351 – $197,300</td><td>$206,701 – $394,600</td></tr>
              <tr><td>32%</td><td>$197,301 – $250,525</td><td>$394,601 – $501,050</td></tr>
              <tr><td>35%</td><td>$250,526 – $626,350</td><td>$501,051 – $751,600</td></tr>
              <tr><td>37%</td><td>Over $626,350</td><td>Over $751,600</td></tr>
            </tbody>
          </table>
          <div className="hwc-note">
            Standard deduction: $14,600 (Single) · $29,200 (Married Filing Jointly) · $21,900 (Head of Household)
          </div>
        </div>

        {/* FICA */}
        <div className="hwc-section">
          <h2 className="hwc-h2"><span>💼</span> FICA Tax (Social Security &amp; Medicare)</h2>
          <p className="hwc-p">
            FICA is split into two mandatory federal payroll taxes. Your employer pays a matching amount on top of your contribution.
          </p>
          <table className="hwc-table">
            <thead>
              <tr><th>Tax</th><th>Rate</th><th>Wage Limit (2026)</th></tr>
            </thead>
            <tbody>
              <tr><td>Social Security</td><td>6.2%</td><td>Up to $176,100</td></tr>
              <tr><td>Medicare</td><td>1.45%</td><td>No limit</td></tr>
              <tr><td>Additional Medicare</td><td>0.9%</td><td>Above $200,000 (single)</td></tr>
            </tbody>
          </table>
          <div className="hwc-note">
            Source: SSA.gov — 2026 Social Security wage base announced October 2025.
          </div>
        </div>

        {/* STATE TAX */}
        <div className="hwc-section">
          <h2 className="hwc-h2"><span>🗺️</span> State Income Tax</h2>
          <p className="hwc-p">
            State tax rates are pulled from each state&apos;s official department of revenue. We update rates each January.
            Nine states have zero income tax: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, Wyoming.
          </p>
          <p className="hwc-p">
            States with flat rates (e.g. Colorado 4.4%, Illinois 4.95%) apply a single percentage to taxable income.
            States with progressive brackets (e.g. California up to 13.3%, New York up to 10.9%) use stepped tables identical in structure to the federal method.
          </p>
          <div className="hwc-note">
            California also includes SDI (State Disability Insurance) at 1.1% on all wages — included in our CA calculator automatically.
          </div>
        </div>

        {/* 2026 NEW LAW */}
        <div className="hwc-section">
          <h2 className="hwc-h2"><span>⚡</span> 2026 New Law Deductions (One Big Beautiful Bill)</h2>
          <p className="hwc-p">
            The legislation signed in 2025 introduced four new above-the-line deductions for federal income tax. These reduce your federal taxable income — they do not affect FICA or most state taxes.
          </p>
          <table className="hwc-table">
            <thead>
              <tr><th>Deduction</th><th>Max Amount</th><th>Who Qualifies</th></tr>
            </thead>
            <tbody>
              <tr><td>No Tax on Overtime</td><td>$12,500 / year</td><td>W-2 employees earning overtime per FLSA</td></tr>
              <tr><td>No Tax on Tips</td><td>$25,000 / year</td><td>Tipped workers in qualifying occupations</td></tr>
              <tr><td>Senior Deduction</td><td>$6,000 / year</td><td>Age 65+, income below $75,000 (phaseout)</td></tr>
              <tr><td>Trump Account</td><td>$2,500 employer + $1,000 gov seed</td><td>Children under 8 at account opening</td></tr>
            </tbody>
          </table>
          <div className="hwc-note">
            These deductions are effective for tax years 2025–2028. Self-employed / 1099 workers do not qualify for the overtime deduction.
          </div>
        </div>

        {/* PAY FREQUENCY */}
        <div className="hwc-section">
          <h2 className="hwc-h2"><span>📅</span> Pay Frequency Annualization</h2>
          <p className="hwc-p">
            We annualize your per-period wages to determine the correct bracket, then divide the annual tax by your pay periods.
            This matches the IRS&apos;s own recommended annualization method from Pub 15-T, Worksheet 1.
          </p>
          <table className="hwc-table">
            <thead>
              <tr><th>Frequency</th><th>Pay Periods / Year</th></tr>
            </thead>
            <tbody>
              <tr><td>Weekly</td><td>52</td></tr>
              <tr><td>Bi-weekly</td><td>26</td></tr>
              <tr><td>Semi-monthly</td><td>24</td></tr>
              <tr><td>Monthly</td><td>12</td></tr>
            </tbody>
          </table>
        </div>

        {/* SOURCES */}
        <div className="hwc-sources">
          <h3>Official Sources Used</h3>
          <div className="hwc-src-list">
            <a href="https://www.irs.gov/publications/p15t" target="_blank" rel="noopener noreferrer">
              IRS Publication 15-T (2026) — Federal Income Tax Withholding Methods
            </a>
            <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer">
              SSA.gov — 2026 Social Security Contribution and Benefit Base ($176,100)
            </a>
            <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer">
              IRS Topic 751 — Social Security and Medicare Withholding Rates
            </a>
            <a href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer">
              IRS Newsroom — 2026 Tax Inflation Adjustments
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div className="hwc-faq">
          <h2>Frequently Asked Questions</h2>

          <div className="hwc-q">
            <div className="hwc-q-title">How accurate is the PrivatePaycheck calculator?</div>
            <div className="hwc-q-ans">We use the official 2026 IRS Pub 15-T withholding tables, the $176,100 SSA wage base, and official state rates. Results are accurate for standard W-2 employees. For 1099/self-employed income, use our dedicated 1099 calculator which includes self-employment tax (15.3%).</div>
          </div>

          <div className="hwc-q">
            <div className="hwc-q-title">Does the calculator include the 2026 overtime tax exemption?</div>
            <div className="hwc-q-ans">Yes. Our overtime and no-tax-on-overtime calculators include the up-to-$12,500 overtime deduction from the One Big Beautiful Bill, effective for tax years 2025–2028.</div>
          </div>

          <div className="hwc-q">
            <div className="hwc-q-title">Is my salary data stored or shared?</div>
            <div className="hwc-q-ans">Never. All calculations run in your browser. Nothing is sent to our servers, stored in any database, or shared with any third party — including advertisers.</div>
          </div>

          <div className="hwc-q">
            <div className="hwc-q-title">What is the 2026 standard deduction?</div>
            <div className="hwc-q-ans">$14,600 for Single · $29,200 for Married Filing Jointly · $21,900 for Head of Household. Applied automatically to every federal calculation.</div>
          </div>

          <div className="hwc-q">
            <div className="hwc-q-title">Why does my take-home differ from my actual paycheck?</div>
            <div className="hwc-q-ans">Our calculator covers federal tax, FICA, and state income tax. Your actual paycheck may also include voluntary deductions (401k, health insurance, FSA) or local city taxes (e.g. NYC, Philadelphia). Add these in the Advanced Options section for a closer match.</div>
          </div>
        </div>

        {/* CTA */}
        <div className="hwc-cta">
          <h3>Ready to calculate your exact take-home pay?</h3>
          <p>Free, private, updated for all 2026 tax laws. No registration required.</p>
          <Link href="/">Calculate My Paycheck →</Link>
        </div>

      </div>
    </>
  );
}
