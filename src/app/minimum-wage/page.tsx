import type { Metadata } from 'next';
import Link from 'next/link';
import { STATE_TAXES, STATE_SLUG_MAP } from '@/lib/taxRates2026';

export const metadata: Metadata = {
  title: 'Minimum Wage by State 2026 — All 51 States + DC | PrivatePaycheck',
  description: 'Current minimum wage rates for all 50 US states and DC in 2026. See hourly, weekly, monthly and annual earnings. DC leads at $17.50/hr. Federal minimum: $7.25/hr.',
  alternates: { canonical: 'https://www.privatepaycheck.com/minimum-wage' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Minimum Wage by State 2026 — All 51 States',
    description: 'Find your state minimum wage for 2026. Updated rates, tipped worker rules, and take-home pay calculator.',
    url: 'https://www.privatepaycheck.com/minimum-wage',
  },
};

const STATE_MIN_WAGE: Record<string, number> = {
  al:7.25, ak:11.73, az:14.35, ar:11.00, ca:16.50, co:14.42, ct:16.35,
  de:15.00, fl:13.00, ga:7.25,  hi:14.00, id:7.25,  il:15.00, in:7.25,
  ia:7.25,  ks:7.25,  ky:7.25,  la:7.25,  me:14.65, md:15.00, ma:15.00,
  mi:10.56, mn:10.85, ms:7.25,  mo:13.75, mt:10.55, ne:13.50, nv:12.00,
  nh:7.25,  nj:15.49, nm:12.00, ny:16.00, nc:7.25,  nd:7.25,  oh:10.45,
  ok:7.25,  or:14.70, pa:7.25,  ri:14.00, sc:7.25,  sd:11.50, tn:7.25,
  tx:7.25,  ut:7.25,  vt:14.01, va:12.41, wa:16.28, wv:8.75,  wi:7.25,
  wy:7.25,  dc:17.50,
};

const FEDERAL_MIN = 7.25;

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the federal minimum wage in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'The federal minimum wage is $7.25/hour in 2026. States can set higher rates — and over 30 states do. The highest state minimum wage is in Washington DC at $17.50/hour.' },
    },
    {
      '@type': 'Question',
      name: 'Which state has the highest minimum wage in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Washington DC has the highest minimum wage at $17.50/hour in 2026. Among US states, California leads at $16.50/hour, followed by Connecticut at $16.35/hour and Washington State at $16.28/hour.' },
    },
    {
      '@type': 'Question',
      name: 'Which states follow the federal minimum wage in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'States that follow the federal minimum wage of $7.25/hour include Alabama, Georgia, Idaho, Indiana, Iowa, Kansas, Kentucky, Louisiana, Mississippi, New Hampshire, North Carolina, North Dakota, Oklahoma, Pennsylvania, South Carolina, Tennessee, Texas, Utah, Wisconsin, and Wyoming.' },
    },
    {
      '@type': 'Question',
      name: 'How much is minimum wage per year in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: "At the federal minimum wage of $7.25/hour, a full-time worker (40 hrs/week, 52 weeks) earns $15,080/year before taxes. At California's $16.50/hour, that rises to $34,320/year. Use our state pages to see exact take-home pay after taxes." },
    },
  ],
};

export default function MinWageHubPage() {
  const slugs = Object.keys(STATE_SLUG_MAP);
  const getWage = (slug: string) => STATE_MIN_WAGE[slug] ?? FEDERAL_MIN;

  return (
    <main style={{ minHeight: '100vh', background: '#091526', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Minimum Wage by State 2026',
        url: 'https://www.privatepaycheck.com/minimum-wage',
        description: 'Current 2026 minimum wage rates for all 51 US states and DC.',
      })}} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 16px' }}>
        <div style={{ fontSize: '13px', opacity: 0.5, marginBottom: '24px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          {' › '}
          <span>Minimum Wage by State</span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', marginBottom: '16px', color: '#6ee7b7' }}>
             2026 Rates — All 51 States + DC
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.15 }}>
            Minimum Wage by State 2026
          </h1>
          <p style={{ fontSize: '17px', opacity: 0.65, maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            The federal minimum wage is ${FEDERAL_MIN}/hour but 30+ states pay more. DC leads at $17.50/hr, California at $16.50/hr. Find your state below.
          </p>
        </div>

        <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '12px', padding: '20px 24px', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '12px', opacity: 0.6, marginBottom: '4px' }}>FEDERAL MINIMUM WAGE 2026</div>
            <div style={{ fontSize: '36px', fontWeight: 900, color: '#10b981' }}>${FEDERAL_MIN}/hr</div>
          </div>
          <div style={{ opacity: 0.6, fontSize: '14px', maxWidth: '400px' }}>
            States can set higher minimums. If your state has a higher rate, that rate applies to most workers.
          </div>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '20px' }}>All 51 States — 2026 Minimum Wage</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: '10px' }}>
          {slugs.map(slug => {
            const st = STATE_TAXES[slug];
            const wage = getWage(slug);
            const aboveFederal = wage > FEDERAL_MIN;
            return (
              <Link key={slug} href={`/minimum-wage/${slug}`} style={{
                display: 'block',
                background: aboveFederal ? 'rgba(16,185,129,0.07)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${aboveFederal ? 'rgba(16,185,129,0.25)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '10px', padding: '14px 16px', color: 'white', textDecoration: 'none',
              }}>
                <div style={{ fontWeight: 700, fontSize: '14px' }}>{st?.name ?? slug}</div>
                <div style={{ fontSize: '16px', fontWeight: 800, marginTop: '6px', color: aboveFederal ? '#10b981' : 'rgba(255,255,255,0.5)' }}>
                  ${wage.toFixed(2)}/hr
                </div>
              </Link>
            );
          })}
        </div>

        <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '12px' }}>
          <Link href="/overtime-calculator" style={{ display: 'block', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.25)', borderRadius: '12px', padding: '18px', color: 'white', textDecoration: 'none' }}>
            <div style={{ fontSize: '20px', marginBottom: '8px' }}></div>
            <div style={{ fontWeight: 700, marginBottom: '4px' }}>Overtime Calculator</div>
            <div style={{ fontSize: '12px', opacity: 0.55 }}>Calculate overtime pay by state →</div>
          </Link>
          <Link href="/unemployment-calculator" style={{ display: 'block', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: '12px', padding: '18px', color: 'white', textDecoration: 'none' }}>
            <div style={{ fontSize: '20px', marginBottom: '8px' }}></div>
            <div style={{ fontWeight: 700, marginBottom: '4px' }}>Unemployment Calculator</div>
            <div style={{ fontSize: '12px', opacity: 0.55 }}>Estimate unemployment benefits →</div>
          </Link>
          <Link href="/" style={{ display: 'block', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: '12px', padding: '18px', color: 'white', textDecoration: 'none' }}>
            <div style={{ fontSize: '20px', marginBottom: '8px' }}></div>
            <div style={{ fontWeight: 700, marginBottom: '4px' }}>Paycheck Calculator</div>
            <div style={{ fontSize: '12px', opacity: 0.55 }}>Calculate take-home pay →</div>
          </Link>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '24px', fontSize: '12px', opacity: 0.4, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '16px' }}>
        © 2026 PrivatePaycheck.com · <Link href="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</Link> · <Link href="/terms" style={{ color: 'inherit' }}>Terms</Link>
      </footer>
    </main>
  );
}
