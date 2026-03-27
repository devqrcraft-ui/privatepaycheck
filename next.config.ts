import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
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
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
};
export default nextConfig;
