import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/static/',
          '/_next/image/',
          '/api/',
          '/*.js$',
          '/*.css$',
          '/*.woff2$',
          '/hr',
          '/week',
          '/tip-calculator/methodology',
          '/unemployment-calculator/methodology',
          '/bonus-tax-calculator/methodology',
          '/hourly-paycheck-calculator/methodology',
          '/minimum-wage/methodology',
          '/sitemap.xml',
        ],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Google-Extended',
          'GoogleOther',
          'Googlebot',
          'Bingbot',
          'Applebot',
          'YouBot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://www.privatepaycheck.com/sitemap.xml',
  };
}
