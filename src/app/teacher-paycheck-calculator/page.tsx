import type { Metadata } from 'next';
import TeacherPaycheckCalculator from './TeacherPaycheckClient';

export const metadata: Metadata = {
  title: 'Teacher Paycheck Calculator 2026 — Real Take-Home After TRS Pension & Taxes',
  description:
    'Calculate your actual teacher take-home pay after TRS/STRS/PSERS pension contributions, federal tax, and state tax. All 51 states. Updated for SS Fairness Act 2025 (WEP/GPO repealed) and $6,000 OBBB Senior Deduction.',
  keywords: [
    'teacher paycheck calculator',
    'teacher take home pay 2026',
    'TRS pension calculator',
    'CalSTRS take home pay',
    'teacher salary after taxes',
    'SS fairness act teacher calculator',
    'WEP repeal teacher pension',
    'teacher net pay by state',
  ],
  openGraph: {
    title: 'Teacher Paycheck Calculator 2026',
    description: 'Real teacher take-home pay after TRS/STRS pension, taxes. All 51 states. Includes SS Fairness Act 2025.',
    url: 'https://www.privatepaycheck.com/teacher-paycheck-calculator',
    siteName: 'PrivatePaycheck',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.privatepaycheck.com/teacher-paycheck-calculator',
  },
};

export default function TeacherPaycheckPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much do teachers take home after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"A teacher earning $55,000 in Texas takes home approximately $43,000/year. The same salary in California yields about $39,000/year after federal, state, and FICA taxes."}},{"@type":"Question","name":"Do teachers pay Social Security in all states?","acceptedAnswer":{"@type":"Answer","text":"No. Teachers in 15 states including California, Texas, Illinois, Ohio, and Massachusetts may not pay into Social Security if covered by a state pension such as TRS."}},{"@type":"Question","name":"What is the average teacher salary after taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"Average US teacher salary is approximately $68,000/year. After all taxes, take-home is roughly $49,000-$54,000/year depending on state and filing status."}},{"@type":"Question","name":"Are teacher pension contributions pre-tax?","acceptedAnswer":{"@type":"Answer","text":"Yes. Most TRS pension contributions of 7-10% of salary are pre-tax, reducing taxable income and lowering both federal and state withholding."}}]}) }} />
      <TeacherPaycheckCalculator />
    </>
  );
}
