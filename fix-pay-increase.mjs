import { readFileSync, writeFileSync } from 'fs';
const f = 'C:/Users/RUSLAN/Desktop/privatepaycheck/src/app/blog/pay-increase-calculator/page.tsx';
let c = readFileSync(f, 'utf8');
// Fix: `${${(ex.from/1000).toFixed(0)}k → ${(ex.to/1000).toFixed(0)}k}` → `${(ex.from/1000).toFixed(0)}k → ${(ex.to/1000).toFixed(0)}k`
c = c.replace(
  '`${${(ex.from/1000).toFixed(0)}k \u2192 ${(ex.to/1000).toFixed(0)}k}`',
  '`${(ex.from/1000).toFixed(0)}k \u2192 ${(ex.to/1000).toFixed(0)}k`'
);
writeFileSync(f, c, 'utf8');
console.log('fixed, line 103 check:');
console.log(c.split('\n')[102].trim().substring(0, 120));
