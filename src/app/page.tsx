import HomeClient from './home-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paycheck Calculator 2026: Take-Home Pay by State | PrivatePaycheck',
  description: 'Free 2026 paycheck calculator for all 50 U.S. states. See your estimated take-home pay after federal, state and FICA taxes. No signup — calculator inputs stay in your browser.',
  alternates: { canonical: 'https://www.privatepaycheck.com' },
  openGraph: {
    title: 'Free Paycheck Calculator 2026 — All 50 States',
    description: 'Estimate take-home pay using 2026 federal, FICA, and modeled state-tax assumptions. Calculator inputs stay in your browser.',
    url: 'https://www.privatepaycheck.com',
    siteName: 'PrivatePaycheck',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"PrivatePaycheck — Paycheck Calculator","url":"https://www.privatepaycheck.com","description":"Free paycheck calculator for all 50 US states. Calculate take-home pay after federal, state, FICA taxes. Salary and hourly. 2026 IRS brackets.","applicationCategory":"FinanceApplication","operatingSystem":"Any","browserRequirements":"Requires JavaScript","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"WebSite","name":"PrivatePaycheck","url":"https://www.privatepaycheck.com","potentialAction":{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://www.privatepaycheck.com/blog?q={search_term_string}"},"query-input":"required name=search_term_string"}}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How accurate is the paycheck calculator?","acceptedAnswer":{"@type":"Answer","text":"PrivatePaycheck provides estimates using 2026 federal brackets, FICA rates, and modeled state income-tax schedules. Local taxes, credits, benefit deductions, and withholding elections can change your paycheck and final tax."}},{"@type":"Question","name":"Does this paycheck calculator store my data?","acceptedAnswer":{"@type":"Answer","text":"Calculator inputs and results are processed in your browser and are not sent to our servers. We do not store the salary, filing status, or results you enter."}},{"@type":"Question","name":"Which states have no income tax on wages in 2026?","acceptedAnswer":{"@type":"Answer","text":"Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming do not impose an individual income tax on wage income."}},{"@type":"Question","name":"How do I calculate my take-home pay?","acceptedAnswer":{"@type":"Answer","text":"Enter your salary or hourly rate, choose your state, filing status, and pay frequency. The calculator estimates net pay after modeled federal income tax, FICA, and state income tax. Employer benefits, local taxes, and individual withholding may change your result."}}]}) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Organization","name":"the PrivatePaycheck Team","url":"https://www.privatepaycheck.com"}' }} />
      <HomeClient />
    </>
  );
}
