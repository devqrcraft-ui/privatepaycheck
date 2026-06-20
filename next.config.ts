import type { NextConfig } from 'next'

// All US states for bonus-tax-calculator → bonus-tax-calculator redirect
const BONUS_TAX_STATES = [
  'iowa','new-hampshire','west-virginia','alaska','georgia','alabama',
  'south-dakota','wyoming','hawaii','wisconsin','montana','kansas',
  'pennsylvania','delaware','louisiana','ohio','arizona','north-carolina',
  'utah','indiana','illinois','minnesota','nevada','tennessee','idaho',
  'virginia','maine','massachusetts','michigan','new-york','oregon',
  'new-jersey','north-dakota','rhode-island','missouri','nebraska',
  'oklahoma','arkansas','colorado','connecticut','florida','kentucky',
  'maryland','texas','california','new-mexico','south-carolina',
  'mississippi','vermont','washington','washington-dc',
]


const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ─────────────────────────────────────────────────────────────────
      // 1. /bonus-tax-calculator/STATE → /bonus-tax-calculator
      //    Fixes 35+ 404s from old indexed URLs
      // ─────────────────────────────────────────────────────────────────
      ...BONUS_TAX_STATES.map((state) => ({
        source: `/bonus-tax-calculator/${state}`,
        destination: '/bonus-tax-calculator',
        permanent: true,
      })),


      // ─────────────────────────────────────────────────────────────────
      // 3. Methodology pages → parent calculator
      //    (already done in sha ba1e65b — keeping for safety)
      // ─────────────────────────────────────────────────────────────────
      {
        source: '/tip-calculator/methodology',
        destination: '/methodology',
        permanent: true,
      },
      {
        source: '/unemployment-calculator/methodology',
        destination: '/methodology',
        permanent: true,
      },
      {
        source: '/bonus-tax-calculator/methodology',
        destination: '/bonus-tax-calculator',
        permanent: true,
      },
      {
        source: '/hourly-paycheck-calculator/methodology',
        destination: '/hourly-paycheck-calculator',
        permanent: true,
      },
      {
        source: '/minimum-wage/methodology',
        destination: '/minimum-wage',
        permanent: true,
      },

      // ─────────────────────────────────────────────────────────────────
      // 4. Short utility routes that were indexed as 404
      // ─────────────────────────────────────────────────────────────────
      {
        source: '/hr',
        destination: '/hourly-paycheck-calculator',
        permanent: true,
      },
      {
        source: '/week',
        destination: '/hourly-paycheck-calculator',
        permanent: true,
      },

      // ─────────────────────────────────────────────────────────────────
      // 6. texas-paycheck-calculator-guide (5xx in GSC)
      // ─────────────────────────────────────────────────────────────────
      {
        source: '/texas-paycheck-calculator-guide',
        destination: '/texas-paycheck-calculator',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        // Block Google from caching versioned JS/CSS with query params
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ]
  },
}

export default nextConfig
