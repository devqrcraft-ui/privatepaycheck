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
      // 2a. Phantom /blog/STATE-paycheck-calculator -> root calculator
      //     Never existed in src/app; sitemap artifact, found across multiple GSC batches.
      //     Uses full BONUS_TAX_STATES list (51) minus TX/CA which have real blog guides.
      ...BONUS_TAX_STATES.filter((s) => s !== 'texas' && s !== 'california').map((state) => ({
        source: '/blog/' + state + '-paycheck-calculator',
        destination: '/' + state + '-paycheck-calculator',
        permanent: true,
      })),

      {
        source: '/blog/texas-paycheck-calculator',
        destination: '/blog/texas-paycheck-calculator-guide',
        permanent: true,
      },
      {
        source: '/blog/california-paycheck-calculator',
        destination: '/blog/california-paycheck-calculator-guide',
        permanent: true,
      },

      // 2b. /bonus-calculator/STATE -> /bonus-tax-calculator
      //     Prior commit 6483e66 only redirected bare /bonus-calculator, missed /STATE subpaths
      ...BONUS_TAX_STATES.map((state) => ({
        source: '/bonus-calculator/' + state,
        destination: '/bonus-tax-calculator/' + state,
        permanent: true,
      })),

      // 2c. Short state slug -> full paycheck calculator page
      //     GSC saw these as redirects on 2026-06-08/09, now 404 (rule likely lost in refactor)
      ...BONUS_TAX_STATES.map((state) => ({
        source: '/' + state,
        destination: '/' + state + '-paycheck-calculator',
        permanent: true,
      })),

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
      {
        source: '/blog/software-engineer-salary-after-taxes',
        destination: '/blog/software-engineer-take-home-pay',
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
