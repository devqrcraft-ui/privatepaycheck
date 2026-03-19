import HomeClient from './home-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Paycheck Calculator 2026 — All 50 States | PrivatePaycheck',
  description: 'Calculate your exact take-home pay after federal, state, and FICA taxes for all 50 US states. Free, private, no signup. Updated for 2026 tax brackets.',
  alternates: { canonical: 'https://www.privatepaycheck.com' },
  openGraph: {
    title: 'Free Paycheck Calculator 2026 — All 50 States',
    description: 'See your exact take-home pay after all taxes. 100% private — runs in your browser.',
    url: 'https://www.privatepaycheck.com',
    siteName: 'PrivatePaycheck',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How accurate is the paycheck calculator?","acceptedAnswer":{"@type":"Answer","text":"PrivatePaycheck uses official 2026 IRS Publication 15-T federal tax brackets, current FICA rates (6.2% SS + 1.45% Medicare), and verified state income tax rates for all 50 states. Results are typically within 1-2% of actual withholding."}},{"@type":"Question","name":"Does this paycheck calculator store my data?","acceptedAnswer":{"@type":"Answer","text":"No. All calculations run entirely in your browser. Your salary, filing status, and results are never sent to any server. Zero data collection, zero tracking."}},{"@type":"Question","name":"Which states have no income tax in 2026?","acceptedAnswer":{"@type":"Answer","text":"Nine states have no individual income tax in 2026: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming."}},{"@type":"Question","name":"How do I calculate my take-home pay?","acceptedAnswer":{"@type":"Answer","text":"Enter your salary or hourly rate, select your state, filing status, and pay frequency. The calculator deducts federal income tax, FICA (Social Security + Medicare), and state income tax to show your exact net pay per paycheck."}}]}) }} />
      <HomeClient />
    </>
  );
}
