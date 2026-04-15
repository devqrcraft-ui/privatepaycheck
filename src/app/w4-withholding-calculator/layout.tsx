import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'W-4 Withholding Calculator 2026 — Avoid Owing Taxes or Over-Withholding | PrivatePaycheck',
  description: "Free W-4 withholding calculator 2026. See if you're withholding too much or too little. Adjust your W-4 to match your actual tax liability. All 50 states, instant results.",
  alternates: { canonical: 'https://www.privatepaycheck.com/w4-withholding-calculator' },
  openGraph: {
    title: 'W-4 Withholding Calculator 2026 — Avoid Owing Taxes or Over-Withholding | PrivatePaycheck',
    description: "Free W-4 withholding calculator 2026. See if you're withholding too much or too little. Adjust your W-4 to match your actual tax liability. All 50 states, instant results.",
    url: 'https://www.privatepaycheck.com/w4-withholding-calculator',
    type: 'website',
  },
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>{children}</>
  );
}
