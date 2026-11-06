import type { Metadata } from 'next';
import Link from 'next/link';
import { STATE_TAXES, STATE_SLUG_MAP } from '@/lib/taxRates2026';
import LinkCardGrid from '@/components/LinkCardGrid'
import OvertimeCalculatorWidget from '@/components/OvertimeCalculatorWidget';


export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(STATE_SLUG_MAP).map(s => ({ state: s }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const code = STATE_SLUG_MAP[state];
  const st = STATE_TAXES[code];
  if (!st) return { title: 'Overtime Calculator' };
  return {
    title: `${st.name} Weekly Overtime Calculator 2026 — 1.5× Pay Estimate`,
    description: `Estimate weekly gross pay in ${st.name} using a 1.5× overtime rate. State daily and double-time rules, taxes, and payroll deductions are not modeled.`,
    openGraph: {
      title: `${st.name} Weekly Overtime Calculator 2026 — 1.5× Pay Estimate`,
      description: `Estimate weekly gross overtime pay in ${st.name}; state daily rules and taxes are not modeled.`,
      url: `https://www.privatepaycheck.com/overtime-calculator/${state}`,
      siteName: 'PrivatePaycheck',
      type: 'website',
    },
    alternates: { canonical: `https://www.privatepaycheck.com/overtime-calculator/${state}` },
  };
}

const STATE_OT_RULES: Record<string, { doubleTime?: boolean; dailyOT?: boolean; dailyOTHours?: number; note?: string }> = {
  ca: { doubleTime: true, dailyOT: true, dailyOTHours: 8, note: 'California requires overtime after 8 hours/day AND double time after 12 hours/day or 8 hours on 7th consecutive day.' },
  co: { dailyOT: true, dailyOTHours: 12, note: 'Colorado requires overtime after 12 hours/day or 40 hours/week.' },
  ak: { dailyOT: true, dailyOTHours: 8, note: 'Alaska requires overtime after 8 hours/day.' },
  nv: { dailyOT: true, dailyOTHours: 8, note: 'Nevada requires overtime after 8 hours/day for employees earning less than 1.5x minimum wage.' },
};

export default async function OvertimePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const code = STATE_SLUG_MAP[state];
  const st = STATE_TAXES[code];
  if (!st) return <div>Not found</div>;
  const rules = STATE_OT_RULES[code] || {};

  return (
    <main style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: `How to Estimate Weekly Overtime Pay in ${st.name}`,
        description: `Estimate weekly gross overtime pay in ${st.name} using a 1.5× rate. State daily and double-time rules are not modeled.`,
        step: [
          { '@type': 'HowToStep', name: 'Enter your regular hourly rate', text: 'Input your standard hourly wage before overtime.' },
          { '@type': 'HowToStep', name: 'Enter your regular weekly hours', text: 'Set the weekly hours that receive your regular hourly rate.' },
          { '@type': 'HowToStep', name: 'Enter total weekly hours worked', text: 'Hours above your regular weekly hours are estimated at 1.5× the regular rate.' },
          { '@type': 'HowToStep', name: 'Review the estimate', text: 'The result estimates weekly gross pay; state daily overtime, double-time, taxes, and payroll deductions are not modeled.' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: `${st.name} Overtime Calculator 2026`,
        url: `https://www.privatepaycheck.com/overtime-calculator/${state}`,
        description: `Free weekly gross overtime estimate for ${st.name} using a 1.5× rate. State-specific daily and double-time rules are not modeled.`,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: `How is overtime calculated in ${st.name}?`, acceptedAnswer: { '@type': 'Answer', text: rules.note || `In ${st.name}, overtime is paid at 1.5x your regular rate for hours worked over 40 in a workweek, per federal FLSA law.` } },
          { '@type': 'Question', name: 'What is time-and-a-half?', acceptedAnswer: { '@type': 'Answer', text: 'Time-and-a-half means your overtime rate is 1.5 times your regular hourly rate. For example, if you earn $20/hour, your overtime rate is $30/hour.' } },
          { '@type': 'Question', name: `Does ${st.name} have daily overtime?`, acceptedAnswer: { '@type': 'Answer', text: rules.dailyOT ? rules.note! : `${st.name} follows federal FLSA rules — overtime applies after 40 hours per week, not per day.` } },
        ],
      })}} />

      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>
          <span style={{ color: '#4ade80' }}>$</span> PrivatePaycheck
        </Link>
        <div style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>
          <Link href="/overtime-calculator" style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: 700 }}>← All States</Link>
          <Link href="/unemployment-calculator" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Unemployment</Link>
          <Link href="/minimum-wage" style={{ color: '#6ee7b7', textDecoration: 'none' }}>Min Wage</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 6px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '13px', opacity: 0.8, marginBottom: '24px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          {' › '}
          <Link href="/overtime-calculator" style={{ color: 'inherit', textDecoration: 'none' }}>Overtime Calculator</Link>
          {' › '}
          <span>{st.name}</span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          {rules.doubleTime && (
            <div style={{ display: 'inline-block', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', marginBottom: '16px', color: '#fbbf24' }}>
               {st.name} has DOUBLE TIME rules
            </div>
          )}
          <h1 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, margin: '0 0 12px' }}>
            {st.name} Overtime Pay Calculator 2026
          </h1>
          <p style={{ fontSize: '16px', color: '#c4d2e3', maxWidth: '550px', margin: '0 auto', lineHeight: 1.7 }}>
            {rules.note || `Federal overtime: 1.5x pay after 40 hours/week.`}
          </p>
        </div>

        <OvertimeCalculatorWidget stateName={st.name} stateSlug={state} hasDoubleTime={!!rules.doubleTime} hasDailyOT={!!rules.dailyOT} dailyOTHours={rules.dailyOTHours} />

        {code === 'CA' && (
          <aside style={{ marginTop: '24px', padding: '20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(232,184,75,0.45)' }}>
            <h2 style={{ margin: '0 0 8px', fontSize: '18px' }}>California salary test for some exemptions</h2>
            <p style={{ margin: '0 0 8px', color: '#c4d2e3', lineHeight: 1.7 }}>
              Effective January 1, 2026, the salary threshold for many California executive, administrative, and professional exemptions is $70,304 per year. Salary alone does not establish an exemption; duties and exemption-specific rules also apply. This weekly gross-pay calculator does not determine exempt status.
            </p>
            <a href="https://www.dir.ca.gov/DIRNews/2025/2025-118.html" target="_blank" rel="noopener noreferrer" style={{ color: '#e8b84b', textDecoration: 'underline' }}>
              California DIR: 2026 salary threshold
            </a>
            {' · '}
            <a href="https://www.dir.ca.gov/dlse/faq_overtime.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#e8b84b', textDecoration: 'underline' }}>
              California DIR overtime FAQ
            </a>
          </aside>
        )}

        <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: '16px' }}>
          {[
            { label: 'Federal OT Rule', value: '40 hrs/week' },
            { label: 'OT Rate', value: '1.5× regular pay' },
            { label: 'Double Time', value: rules.doubleTime ? 'Yes' : 'N/A' },
            { label: 'Daily OT', value: rules.dailyOT ? `After ${rules.dailyOTHours}h/day` : 'Weekly only' },
          ].map(b => (
            <div key={b.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '14px', color: '#c4d2e3', marginBottom: '4px' }}>{b.label}</div>
              <div style={{ fontWeight: 700, fontSize: '16px' }}>{b.value}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ marginTop: '32px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '20px' }}>Overtime Rules in {st.name} — FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { q: `How is overtime calculated in ${st.name}?`, a: rules.note || `In ${st.name}, overtime follows federal FLSA law: any hours over 40 in a single workweek must be paid at 1.5x your regular hourly rate. Your employer cannot average hours across multiple weeks.` },
              { q: 'What is the overtime rate for salaried employees?', a: 'A salary alone does not determine whether an employee is exempt. Coverage, duties, salary basis, and applicable state rules matter. Nonexempt salaried employees may still be entitled to overtime; this calculator does not determine exemption status.' },
              { q: 'Can my employer give comp time instead of overtime pay?', a: 'Private sector employers generally cannot substitute comp time for overtime pay under federal law. Government employees may receive comp time. Some states have additional restrictions.' },
              { q: `Does ${st.name} have any additional overtime protections?`, a: rules.note || `${st.name} follows the federal FLSA standard. Overtime is required after 40 hours in a workweek at 1.5x regular pay. Always check with your state labor department for the most current rules.` },
            ].map(item => (
              <div key={item.q}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '6px' }}>{item.q}</h3>
                <p style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CROSS-LINKS — всі 4 розділи для цього штату */}
        <div style={{ marginTop: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '16px', opacity: 0.7 }}>
            More {st.name} Calculators
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: '12px' }}>
            <Link href={`/${state}-paycheck-calculator`} style={{ display: 'block', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '12px', padding: '16px', color: 'white', textDecoration: 'none' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}></div>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{st.name} Paycheck Calculator</div>
              <div style={{ fontSize: '12px', opacity: 0.55 }}>Take-home pay after all taxes →</div>
            </Link>
            <Link href={`/unemployment-calculator/${state}`} style={{ display: 'block', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px', padding: '16px', color: 'white', textDecoration: 'none' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}></div>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{st.name} Unemployment Calculator</div>
              <div style={{ fontSize: '12px', opacity: 0.55 }}>Estimate weekly benefits →</div>
            </Link>
            <Link href={`/minimum-wage/${state}`} style={{ display: 'block', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '12px', padding: '16px', color: 'white', textDecoration: 'none' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}></div>
              <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{st.name} Minimum Wage 2026</div>
              <div style={{ fontSize: '12px', opacity: 0.55 }}>Current hourly rate & breakdown →</div>
            </Link>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.8, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '40px' }}>
        © 2026 PrivatePaycheck.com ·{' '}
        <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> ·{' '}
        <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
      <div style={{ margin: '40px 0 0', padding: '28px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' }}>
        <LinkCardGrid title={`Related Calculators for ${st.name}`} minCardWidth={180} links={[[`/${state}-paycheck-calculator`,'Paycheck Calculator'],[`/hourly-paycheck-calculator/${state}`,'Hourly Paycheck'],[`/unemployment-calculator/${state}`,'Unemployment'],[`/bonus-tax-calculator/${state}`,'Bonus Tax'],[`/minimum-wage/${state}`,'Minimum Wage']]} />
      </div>
      </footer>
    </main>
  );
}
