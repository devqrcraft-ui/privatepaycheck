import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/hr',
          '/week',
          '/tip-calculator/methodology',
          '/unemployment-calculator/methodology',
          '/bonus-tax-calculator/methodology',
          '/hourly-paycheck-calculator/methodology',
          '/minimum-wage/methodology',
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
