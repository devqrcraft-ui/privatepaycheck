import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/hr/week/hourly-paycheck-calculator",
        destination: "/hourly-paycheck-calculator",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
