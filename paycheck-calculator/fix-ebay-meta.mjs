import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const file = join(process.env.USERPROFILE, 'Desktop/imagecompress-ultra/src/app/blog/best-image-size-for-ebay-listings/page.tsx');
if (!existsSync(file)) { console.error('NOT FOUND:', file); process.exit(1); }

let c = readFileSync(file, 'utf8');
const before = c;

c = c.replace(
  `title: 'eBay Image Size 2026: Min 1600px, Max 7MB — Free Resize Tool',`,
  `title: 'eBay Image Size Requirements 2026: Resize to Exact Specs in Seconds',`
);

c = c.replace(
  `description: 'eBay requires images min 1600px, max 7MB, JPEG. Resize and compress your listing photos to exact eBay specs free — no upload, instant, browser-only.',`,
  `description: 'eBay needs min 1600px, max 7MB JPEG. Resize & compress listing photos to exact eBay specs in seconds — free, no upload, works in browser. More views = more sales.',`
);

if (c === before) { console.log('НІЧОГО НЕ ЗМІНИЛОСЬ — перевір патерн'); process.exit(0); }
writeFileSync(file, c, 'utf8');
console.log('DONE — ebay blog title/description оновлено');
