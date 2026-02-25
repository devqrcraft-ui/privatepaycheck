import { MetadataRoute } from 'next';
import { STATE_SLUG_MAP } from '@/lib/taxRates2026';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://privatepaycheck.com';
  const statePages = Object.keys(STATE_SLUG_MAP).map(slug => ({
    url: `${base}/${slug}-paycheck-calculator`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/hourly-paycheck-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ...statePages,
  ];
}