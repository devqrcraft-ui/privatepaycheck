import type { Metadata } from 'next';
import Link from 'next/link';
import TeacherPaycheckCalculator from './TeacherPaycheckClient';
import { calcTeacher, STATE_NAMES, STATE_SLUG_TO_CODE } from '@/lib/teacherCalc';

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
  const states = Object.entries(STATE_SLUG_TO_CODE)
    .map(([slug, code]) => ({ slug, name: STATE_NAMES[code] }))
    .filter((state): state is { slug: string; name: string } => Boolean(state.name))
    .sort((a, b) => a.name.localeCompare(b.name));
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
      <section aria-labelledby="teacher-state-links-title" style={{ maxWidth: '928px', margin: '0 auto', padding: '0 16px 40px', color: '#fff', fontFamily: 'system-ui,sans-serif' }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.78)', marginBottom: '20px' }}>
          <Link href="/" style={{ color: '#e8b84b' }}>Home</Link>
          {' / '}
          <span>Teacher Paycheck Calculator</span>
        </nav>
        <h2 id="teacher-state-links-title" style={{ fontSize: '24px', margin: '0 0 8px' }}>Teacher paycheck calculators by state</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.65, color: 'rgba(255,255,255,0.78)', margin: '0 0 18px' }}>
          Open a state page for its modeled teacher pension, payroll-tax assumptions, and an illustrative take-home estimate. Verify plan-specific rates and Social Security coverage with your employer or pension system.
        </p>
        <style>{`
          .teacher-state-links { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
          .teacher-state-link:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }
          .teacher-state-link:hover { border-color: #e8b84b !important; background: rgba(232,184,75,0.12) !important; }
          @media (max-width: 600px) {
            .teacher-state-links { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .teacher-state-link:last-child { grid-column: span 2; }
          }
        `}</style>
        <div className="teacher-state-links">
          {states.map(({ slug, name }) => (
            <Link
              className="teacher-state-link"
              key={slug}
              href={`/teacher-paycheck-calculator/${slug}`}
              style={{ display: 'block', minWidth: 0, padding: '14px 16px', border: '1px solid rgba(255,255,255,0.16)', borderRadius: '10px', color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 700, textAlign: 'center', background: 'rgba(255,255,255,0.04)' }}
            >
              {name}
            </Link>
          ))}
        </div>
        <p style={{ margin: '18px 0 0', fontSize: '15px' }}>
          Compare hourly take-home estimates with the <Link href="/hourly-paycheck-calculator" style={{ color: '#e8b84b', textDecoration: 'underline' }}>hourly paycheck calculator</Link>.
        </p>
      </section>
    </>
  );
}
