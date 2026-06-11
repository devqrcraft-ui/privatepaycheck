import type { Metadata } from 'next';
import W4Client from './W4Client';

export const metadata: Metadata = {
  title: 'W-4 Withholding Calculator 2026 — Optimize Your Paycheck',
  description: 'Free W-4 withholding calculator 2026. Adjust allowances to maximize take-home pay or avoid underpayment. All 50 states.',
  alternates: { canonical: 'https://www.privatepaycheck.com/w4-withholding-calculator' },
  authors: [{ name: 'Ethan Blake' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
};

export default function Page() {
  return <W4Client />;
}
