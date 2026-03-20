import type { Metadata } from 'next';
import FederalPaycheckCalculatorClient from './client';

export const metadata: Metadata = {
  title: 'Federal Paycheck Calculator 2026 — Federal Tax + FICA Withholding',
  description: 'Calculate exact federal income tax and FICA withholding for 2026. Includes overtime and tip deductions from the One Big Beautiful Bill. No data stored.',
  alternates: { canonical: 'https://www.privatepaycheck.com/federal-paycheck-calculator' },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How is federal income tax calculated on a paycheck in 2026?","acceptedAnswer":{"@type":"Answer","text":"Federal income tax uses progressive brackets: 10%, 12%, 22%, 24%, 32%, 35%, 37%. Your employer withholds based on your W-4. The 2026 standard deduction is $15,000 single / $30,000 married."}},{"@type":"Question","name":"What is FICA tax in 2026?","acceptedAnswer":{"@type":"Answer","text":"FICA is 7.65% of gross wages: Social Security 6.2% up to $176,100 wage base plus Medicare 1.45% with no cap. Employers match this amount."}},{"@type":"Question","name":"What is the federal standard deduction for 2026?","acceptedAnswer":{"@type":"Answer","text":"The 2026 federal standard deduction is $15,000 for single filers and $30,000 for married filing jointly."}},{"@type":"Question","name":"How do I reduce federal tax withholding?","acceptedAnswer":{"@type":"Answer","text":"Update your W-4, contribute to 401k up to $23,500 in 2026, HSA $4,300 single, or pre-tax health insurance."}}]}) }} />
      <FederalPaycheckCalculatorClient />
    </>
  );
}
