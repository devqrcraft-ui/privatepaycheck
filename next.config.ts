import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      { source: '/:path*', has: [{ type: 'host', value: 'www.privatepaycheck.com' }], destination: 'https://privatepaycheck.com/:path*', permanent: true },
      { source: "/calculator", destination: "/", permanent: true },
      { source: "/hr/week/hourly-paycheck-calculator", destination: "/hourly-paycheck-calculator", permanent: true },
      { source: "/bonus-calculator", destination: "/bonus-tax-calculator", permanent: true },
      { source: "/bonus-calculator/:state", destination: "/bonus-tax-calculator/:state", permanent: true },
    ];
  },
};
export default nextConfig;
