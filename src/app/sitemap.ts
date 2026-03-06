import { MetadataRoute } from 'next';
import { STATE_SLUG_MAP } from '@/lib/taxRates2026';

const BASE_URL = 'https://www.privatepaycheck.com';

const STATE_SLUGS = [
  'alabama','alaska','arizona','arkansas','california','colorado','connecticut',
  'delaware','florida','georgia','hawaii','idaho','illinois','indiana','iowa',
  'kansas','kentucky','louisiana','maine','maryland','massachusetts','michigan',
  'minnesota','mississippi','missouri','montana','nebraska','nevada','new-hampshire',
  'new-jersey','new-mexico','new-york','north-carolina','north-dakota','ohio',
  'oklahoma','oregon','pennsylvania','rhode-island','south-carolina','south-dakota',
  'tennessee','texas','utah','vermont','virginia','washington','west-virginia',
  'wisconsin','wyoming',
];

const BLOG_SLUGS = [
  'how-to-read-your-pay-stub',
  'no-income-tax-states-2026',
  '401k-contribution-limits-2026',
  'california-paycheck-calculator-guide',
  'overtime-pay-rules-by-state',
  'hsa-contribution-limits-2026',
  'texas-paycheck-calculator-guide',
  'florida-unemployment-benefits-2026',
  'what-is-fica-tax',
  'california-minimum-wage-2026',
  'how-to-calculate-paycheck-taxes',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const stateSlugs = Object.keys(STATE_SLUG_MAP);

  return [
    // ── Core ──────────────────────────────────────────────
    { url: BASE_URL,                                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/all-states`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/hourly-paycheck-calculator`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/overtime-calculator`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/unemployment-calculator`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/minimum-wage`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/bonus-tax-calculator`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/tip-calculator`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/blog`,                          lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/no-tax-on-overtime-deduction`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/no-tax-on-tips-calculator`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/raise-calculator`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/signing-bonus-tax-calculator`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/two-jobs-tax-calculator`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/w4-withholding-calculator`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy`,                lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/terms`,                         lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },

    // ── [state]-paycheck-calculator ───────────────────────
    ...stateSlugs.map(slug => ({
      url: `${BASE_URL}/${slug}-paycheck-calculator`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // ── overtime/[state] ──────────────────────────────────
    ...STATE_SLUGS.map(slug => ({
      url: `${BASE_URL}/overtime-calculator/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),

    // ── unemployment/[state] ──────────────────────────────
    ...STATE_SLUGS.map(slug => ({
      url: `${BASE_URL}/unemployment-calculator/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),

    // ── minimum-wage/[state] ──────────────────────────────
    ...STATE_SLUGS.map(slug => ({
      url: `${BASE_URL}/minimum-wage/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),

    // ── bonus-calculator/[state] ──────────────────────────
    ...STATE_SLUGS.map(slug => ({
      url: `${BASE_URL}/bonus-tax-calculator/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),

    // ── tip-calculator/[state] ────────────────────────────
    ...STATE_SLUGS.map(slug => ({
      url: `${BASE_URL}/tip-calculator/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),

    // ── Blog posts ────────────────────────────────────────
    ...BLOG_SLUGS.map(slug => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
