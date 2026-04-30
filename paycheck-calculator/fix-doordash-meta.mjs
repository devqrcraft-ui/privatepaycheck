import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const file = join(process.env.USERPROFILE, 'Desktop/gigwisetax/app/blog/doordash-taxes-2026/page.tsx');
if (!existsSync(file)) { console.error('NOT FOUND:', file); process.exit(1); }

let c = readFileSync(file, 'utf8');
const before = c;

// Замінюємо title
c = c.replace(
  `title: 'DoorDash Taxes 2026: Calculator, 1099 Deductions & Take-Home Pay | GigWiseTax',`,
  `title: 'DoorDash Taxes 2026: Free Tax Calculator — How Much to Set Aside?',`
);

// Замінюємо description
c = c.replace(
  `description: 'Free DoorDash tax calculator 2026. Estimate self-employment tax, quarterly payments & every 1099 deduction for Dashers. Updated April 2026 · IRS compliant · All 51 states.',`,
  `description: 'DoorDash drivers owe 15.3% self-employment tax + income tax. Free calculator: see exactly how much to set aside for 2026. Mileage deduction 72.5¢/mile. All 50 states.',`
);

if (c === before) { console.log('НІЧОГО НЕ ЗМІНИЛОСЬ — перевір патерн'); process.exit(0); }
writeFileSync(file, c, 'utf8');
console.log('DONE — doordash title/description оновлено');
