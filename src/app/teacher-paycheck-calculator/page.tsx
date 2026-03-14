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
  return <TeacherPaycheckCalculator />;
}
