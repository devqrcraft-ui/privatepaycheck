import { MetadataRoute } from 'next';
import { STATE_SLUG_MAP } from '@/lib/taxRates2026';

const BASE = 'https://www.privatepaycheck.com';

const HOURLY_SLUGS = [
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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const stateSlugs = Object.keys(STATE_SLUG_MAP);

  return [
    // ── Core ──────────────────────────────────────────────────────────────
    { url: BASE,                                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/all-states`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/hourly-paycheck-calculator`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/overtime-calculator`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/unemployment-calculator`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/minimum-wage`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog`,                          lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },

    // ── Paycheck by state (/[state]-paycheck-calculator) ──────────────────
    ...stateSlugs.map(slug => ({
      url: `${BASE}/${slug}-paycheck-calculator`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // ── Hourly by state (/hourly-paycheck-calculator/[state]) ─────────────
    ...HOURLY_SLUGS.map(slug => ({
      url: `${BASE}/hourly-paycheck-calculator/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),

    // ── Overtime by state (/overtime-calculator/[state]) ──────────────────
    ...HOURLY_SLUGS.map(slug => ({
      url: `${BASE}/overtime-calculator/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),

    // ── Unemployment by state (/unemployment-calculator/[state]) ──────────
    ...HOURLY_SLUGS.map(slug => ({
      url: `${BASE}/unemployment-calculator/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),

    // ── Minimum wage by state (/minimum-wage/[state]) ─────────────────────
    ...HOURLY_SLUGS.map(slug => ({
      url: `${BASE}/minimum-wage/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),

    // ── Blog posts ────────────────────────────────────────────────────────
    ...BLOG_SLUGS.map(slug => ({
      url: `${BASE}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
