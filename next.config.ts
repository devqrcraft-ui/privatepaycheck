import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/california',
        destination: '/california-paycheck-calculator',
        permanent: true,
      },
      {
        source: '/texas',
        destination: '/texas-paycheck-calculator',
        permanent: true,
      },
      {
        source: '/pennsylvania',
        destination: '/pennsylvania-paycheck-calculator',
        permanent: true,
      },
      {
        source: '/:state(wisconsin|colorado|wyoming|indiana|nebraska|washington|tennessee|ohio|alaska)',
        destination: '/all-states',
        permanent: true,
      },
      {
        source: '/bonus-calculator/california',
        destination: '/bonus-tax-calculator/california',
        permanent: true,
      },
      {
        source: '/bonus-calculator/texas',
        destination: '/bonus-tax-calculator/texas',
        permanent: true,
      },
      {
        source: '/bonus-calculator/pennsylvania',
        destination: '/bonus-tax-calculator/pennsylvania',
        permanent: true,
      },
      {
        source: '/bonus-calculator/:state',
        destination: '/bonus-tax-calculator',
        permanent: true,
      },
      {
        source: '/bonus-calculator',
        destination: '/bonus-tax-calculator',
        permanent: true,
      },
      {
        source: '/blog/california-paycheck-calculator',
        destination: '/blog/california-paycheck-calculator-guide',
        permanent: true,
      },
      {
        source: '/blog/texas-paycheck-calculator',
        destination: '/blog/texas-paycheck-calculator-guide',
        permanent: true,
      },
      {
        source: '/blog/:state-paycheck-calculator',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/:calc/methodology',
        destination: '/:calc',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
