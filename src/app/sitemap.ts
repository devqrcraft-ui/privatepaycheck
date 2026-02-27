import { MetadataRoute } from 'next';
import { STATE_SLUG_MAP } from '@/lib/taxRates2026';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.privatepaycheck.com';
  const now = new Date();
  const slugs = Object.keys(STATE_SLUG_MAP);

  const paycheckPages = slugs.map(slug => ({
    url: `${base}/${slug}-paycheck-calculator`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const overtimePages = slugs.map(slug => ({
    url: `${base}/overtime-calculator/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const unemploymentPages = slugs.map(slug => ({
    url: `${base}/unemployment-calculator/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const minWagePages = slugs.map(slug => ({
    url: `${base}/minimum-wage/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [
    // Core pages
    { url: base,                                          lastModified: now, changeFrequency: 'weekly',   priority: 1.0 },
    { url: `${base}/hourly-paycheck-calculator`,          lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${base}/overtime-calculator`,                 lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${base}/unemployment-calculator`,             lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${base}/minimum-wage`,                        lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    // State pages (51 each × 4 types = 204 state pages)
    ...paycheckPages,
    ...overtimePages,
    ...unemploymentPages,
    ...minWagePages,
  ];
}
