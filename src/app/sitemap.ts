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
  'wisconsin','wyoming','washington-dc',
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
  '2026-federal-tax-brackets',
  'how-much-is-50k-a-year-hourly',
  'how-much-of-my-raise-do-i-keep',
  'how-to-increase-take-home-pay',
  'no-tax-on-tips-explained',
  'one-big-beautiful-bill-tax-calculator-2026',
  '20-dollars-an-hour-after-taxes',
  '25-dollars-an-hour-after-taxes',
  'biweekly-paycheck-after-taxes',
  '50k-a-year-after-taxes',
  'texas-vs-california-salary',
  'two-jobs-tax-withholding',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const stateSlugs = Object.keys(STATE_SLUG_MAP);
  const now = new Date();

  return [
    { url: BASE_URL,                                      lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/all-states`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/hourly-paycheck-calculator`,      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/overtime-calculator`,             lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/unemployment-calculator`,         lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/minimum-wage`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/bonus-tax-calculator`,            lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/tip-calculator`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/blog`,                            lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/no-tax-on-overtime-deduction`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/no-tax-on-tips-calculator`,       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/raise-calculator`,                lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/signing-bonus-tax-calculator`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/two-jobs-tax-calculator`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/w4-withholding-calculator`,       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/senior-deduction-calculator`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/trump-account-calculator`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy`,                  lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/terms`,                           lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },

    ...stateSlugs.map(slug => ({
      url: `${BASE_URL}/${slug}-paycheck-calculator`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    ...STATE_SLUGS.map(slug => ({
      url: `${BASE_URL}/overtime-calculator/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),

    ...STATE_SLUGS.map(slug => ({
      url: `${BASE_URL}/unemployment-calculator/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),

    ...STATE_SLUGS.map(slug => ({
      url: `${BASE_URL}/minimum-wage/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),

    ...STATE_SLUGS.map(slug => ({
      url: `${BASE_URL}/bonus-tax-calculator/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),

    ...STATE_SLUGS.map(slug => ({
      url: `${BASE_URL}/hourly-paycheck-calculator/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),

    ...STATE_SLUGS.map(slug => ({
      url: `${BASE_URL}/tip-calculator/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),

    ...BLOG_SLUGS.map(slug => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
