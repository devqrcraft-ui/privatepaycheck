import type { Metadata } from 'next';
import TeacherPaycheckCalculator from './TeacherPaycheckClient';
import { calcTeacher } from '@/lib/teacherCalc';

export const metadata: Metadata = {
  title: 'Teacher Paycheck Calculator 2026 — Estimate Pay After Taxes & Pension',
  description:
    'Estimate teacher take-home pay after modeled TRS/STRS/PSERS pension contributions, federal tax, and state tax across 50 states and DC. Local taxes and individual plan details may change results.',
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
    description: 'Estimate teacher take-home pay after modeled pension contributions and taxes. Results vary by plan and local tax rules.',
    url: 'https://www.privatepaycheck.com/teacher-paycheck-calculator',
    siteName: 'PrivatePaycheck',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.privatepaycheck.com/teacher-paycheck-calculator',
  },
  authors: [{ name: 'the PrivatePaycheck Team' }],
};

export default function TeacherPaycheckPage() {
  const formatCurrency = (amount: number) => '$' + Math.round(amount).toLocaleString('en-US');
  const texas55k = calcTeacher(55000, 'TX', 'single', 40);
  const texas68k = calcTeacher(68000, 'TX', 'single', 40);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much do teachers take home after taxes in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Under this model, a single Texas teacher earning $55,000 with an 8% TRS contribution and no Social Security withholding has estimated take-home pay of ${formatCurrency(texas55k.takeHome)} per year. Results vary by plan, coverage, filing status, local taxes, and other deductions.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Do teachers pay Social Security in all states?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Social Security coverage depends on the employer, position, and applicable pension system. Check your pay statement or ask your employer; this calculator uses state-level default assumptions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the average teacher salary after taxes in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `This calculator does not claim a current national average salary. Take-home depends on salary, state, pension contribution, coverage, and filing status. For example, its $68,000 Texas input estimates ${formatCurrency(texas68k.takeHome)} per year under the listed assumptions.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Are teacher pension contributions pre-tax?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tax treatment depends on the plan and state. This estimate treats the listed employee contribution as reducing federal and modeled state taxable wages; actual withholding and tax treatment may differ.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TeacherPaycheckCalculator />
    </>
  );
}
