import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const file = join(process.env.USERPROFILE, 'Desktop/privatepaycheck/src/app/california-paycheck-calculator/page.tsx');
if (!existsSync(file)) { console.error('NOT FOUND:', file); process.exit(1); }

let c = readFileSync(file, 'utf8');
const before = c;

c = c.replace(
  `title: 'California Paycheck Calculator 2026 — Take Home Pay After Taxes',`,
  `title: 'California Paycheck Calculator 2026 — See Your Exact Take-Home Pay',`
);

c = c.replace(
  `description: 'Free California paycheck calculator 2026. See exact take-home pay after federal income tax, CA state tax (up to 12.3%), SDI & FICA. Hourly & salary. Instant, private.',`,
  `description: '$75,000 salary in CA = ~$3,388/month take-home. Free California paycheck calculator 2026 — federal + CA state tax (up to 12.3%), SDI & FICA. Instant results.',`
);

if (c === before) { console.log('НІЧОГО НЕ ЗМІНИЛОСЬ — перевір патерн'); process.exit(0); }
writeFileSync(file, c, 'utf8');
console.log('DONE — california title/description оновлено');
