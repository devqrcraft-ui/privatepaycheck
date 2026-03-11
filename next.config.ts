import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      { source: "/calculator", destination: "/", permanent: true },
      { source: "/hr/week/hourly-paycheck-calculator", destination: "/hourly-paycheck-calculator", permanent: true },
    ];
  },
};
export default nextConfig;
