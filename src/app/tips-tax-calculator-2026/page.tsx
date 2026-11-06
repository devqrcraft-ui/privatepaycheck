import { permanentRedirect } from 'next/navigation';

export default function LegacyTipsTaxCalculatorPage(): never {
  permanentRedirect('/no-tax-on-tips-calculator');
}
