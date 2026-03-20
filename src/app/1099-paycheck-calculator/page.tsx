import type { Metadata } from 'next';
import PaycheckCalculator1099Client from './client';

export const metadata: Metadata = {
  title: '1099 Paycheck Calculator 2026 — Self-Employed & Contractor Take-Home Pay',
  description: 'Free 1099 paycheck calculator for 2026. Calculates self-employment tax (15.3%), federal income tax, QBI deduction, quarterly estimated taxes. No data stored.',
  alternates: { canonical: 'https://www.privatepaycheck.com/1099-paycheck-calculator' },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do 1099 contractors pay more taxes than W-2 employees?","acceptedAnswer":{"@type":"Answer","text":"Yes. 1099 contractors pay self-employment tax (15.3%) covering both halves of FICA, plus federal and state income tax. W-2 employees split FICA 50/50 with their employer, paying only 7.65%."}},{"@type":"Question","name":"What is the self-employment tax rate for 1099 workers in 2026?","acceptedAnswer":{"@type":"Answer","text":"The SE tax rate is 15.3% on 92.35% of net self-employment income — Social Security 12.4% + Medicare 2.9%. You can deduct 50% of SE tax on Form 1040."}},{"@type":"Question","name":"How much should a 1099 contractor set aside for taxes?","acceptedAnswer":{"@type":"Answer","text":"Most 1099 contractors should set aside 25-35% of gross income. This covers SE tax (15.3%), federal income tax (10-22%), and state income tax. Use the calculator above for your exact amount."}},{"@type":"Question","name":"What IRS forms do 1099 contractors file?","acceptedAnswer":{"@type":"Answer","text":"1099 contractors file Schedule C, Schedule SE, and Form 1040. If you expect to owe over $1,000 in taxes, make quarterly estimated payments using Form 1040-ES."}}]}' }} />
      <PaycheckCalculator1099Client />
    </>
  );
}
