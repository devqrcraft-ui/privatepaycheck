import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const base = join(process.env.USERPROFILE, 'Desktop/privatepaycheck/src/app');

const fixes = [
  {
    file: join(base, 'montana-paycheck-calculator/page.tsx'),
    oldTitle: `title: 'Montana Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',`,
    newTitle: `title: 'Montana Paycheck Calculator 2026 — See Your Exact Take-Home Pay',`,
    oldDesc: `description: 'Montana paycheck calculator 2026. See exact take-home pay after federal + Montana state tax (up to 5.9%) and FICA. All salary levels. 100% private.',`,
    newDesc: `description: '$60,000 salary in MT = ~$4,200/month take-home. Free Montana paycheck calculator 2026 — federal + MT state tax (up to 5.9%) & FICA. Instant results.',`,
  },
  {
    file: join(base, 'utah-paycheck-calculator/page.tsx'),
    oldTitle: `title: 'Utah Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',`,
    newTitle: `title: 'Utah Paycheck Calculator 2026 — See Your Exact Take-Home Pay',`,
    oldDesc: `description: 'Utah paycheck calculator 2026. See exact take-home pay after federal + Utah state tax (4.55% flat) and FICA. All salary levels. 100% private.',`,
    newDesc: `description: '$60,000 salary in UT = ~$4,280/month take-home. Free Utah paycheck calculator 2026 — federal + UT flat tax (4.55%) & FICA. Instant results.',`,
  },
  {
    file: join(base, 'virginia-paycheck-calculator/page.tsx'),
    oldTitle: `title: 'Virginia Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',`,
    newTitle: `title: 'Virginia Paycheck Calculator 2026 — See Your Exact Take-Home Pay',`,
    oldDesc: `description: 'Virginia paycheck calculator 2026. See exact take-home pay after federal + Virginia state tax (up to 5.75%) and FICA. All salary levels. 100% private.',`,
    newDesc: `description: '$60,000 salary in VA = ~$4,150/month take-home. Free Virginia paycheck calculator 2026 — federal + VA state tax (up to 5.75%) & FICA. Instant results.',`,
  },
  {
    file: join(base, 'bonus-tax-calculator/page.tsx'),
    oldTitle: `title: 'Bonus Tax Calculator 2026 — 22% Flat Rate or Aggregate? See Your Real Take-Home',`,
    newTitle: `title: 'Bonus Tax Calculator 2026 — How Much of Your Bonus Do You Keep?',`,
    oldDesc: `description: 'Bonus tax calculator 2026: IRS taxes bonuses at 22% flat rate (or aggregate). Enter your bonus to see exact take-home after federal + state taxes. All 50 states, free & private.',`,
    newDesc: `description: '$5,000 bonus? You keep ~$3,500 after 22% federal withholding + state tax. Free bonus tax calculator 2026 — all 50 states, instant results, 100% private.',`,
  },
];

let totalChanged = 0;

for (const fix of fixes) {
  if (!existsSync(fix.file)) { console.error('NOT FOUND:', fix.file); continue; }
  let c = readFileSync(fix.file, 'utf8');
  const before = c;
  c = c.replace(fix.oldTitle, fix.newTitle);
  c = c.replace(fix.oldDesc, fix.newDesc);
  if (c === before) {
    console.log('НІЧОГО НЕ ЗМІНИЛОСЬ:', fix.file);
  } else {
    writeFileSync(fix.file, c, 'utf8');
    console.log('DONE:', fix.file.split('/').pop());
    totalChanged++;
  }
}

console.log(`\nРезультат: ${totalChanged}/4 файлів оновлено`);
