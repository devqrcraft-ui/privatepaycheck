import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      { source: "/calculator", destination: "/", permanent: true },
      { source: "/hr/week/hourly-paycheck-calculator", destination: "/hourly-paycheck-calculator", permanent: true },
      { source: "/bonus-calculator", destination: "/bonus-tax-calculator", permanent: true },
      { source: "/bonus-calculator/:state", destination: "/bonus-tax-calculator/:state", permanent: true },
      { source: "/unemployment-calculator", destination: "/unemployment-calculator/california", permanent: false },
      { source: "/overtime-calculator", destination: "/overtime-calculator/california", permanent: false },
    ];
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, s-maxage=31536000, stale-while-revalidate=86400" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
      ],
    },
    {
      source: "/_next/static/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
  ],
};

export default nextConfig;
