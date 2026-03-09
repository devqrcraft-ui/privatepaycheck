import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/calculator", destination: "/", permanent: true },
      { source: "/hr/week/hourly-paycheck-calculator", destination: "/hourly-paycheck-calculator", permanent: true },
      { source: "/texas", destination: "/texas-paycheck-calculator", permanent: true },
      { source: "/florida", destination: "/florida-paycheck-calculator", permanent: true },
      { source: "/california", destination: "/california-paycheck-calculator", permanent: true },
      { source: "/new-york", destination: "/new-york-paycheck-calculator", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/(.*)", headers: [{ key: "X-Robots-Tag", value: "index, follow" }] }];
  },
};

export default nextConfig;
