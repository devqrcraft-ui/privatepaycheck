import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Не використовуємо output: 'export' — бо є динамічні роути [state]
  // Vercel сам підхопить Next.js SSR/ISR
  
  async redirects() {
    return [
      // Старі редіректи
      {
        source: "/hr/week/hourly-paycheck-calculator",
        destination: "/hourly-paycheck-calculator",
        permanent: true,
      },
      {
        source: "/texas",
        destination: "/texas-paycheck-calculator",
        permanent: true,
      },
      {
        source: "/florida",
        destination: "/florida-paycheck-calculator",
        permanent: true,
      },
      // Фікс можливих 404 — state без суфікса
      {
        source: "/california",
        destination: "/california-paycheck-calculator",
        permanent: true,
      },
      {
        source: "/new-york",
        destination: "/new-york-paycheck-calculator",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
