// check-404-urls.js — знаходимо які URL реально дають 404
// Запуск: node ~/Downloads/check-404-urls.js
// Чекай ~2-3 хв — перевіряє всі URL з sitemap

const https = require('https');

const BASE = 'https://www.privatepaycheck.com';

// Всі роути з src/app — що реально існує
const REAL_ROUTES = [
  '/all-states',
  '/blog',
  '/blog/2026-federal-tax-brackets',
  '/blog/401k-contribution-limits-2026',
  '/blog/california-minimum-wage-2026',
  '/blog/california-paycheck-calculator-guide',
  '/blog/florida-unemployment-benefits-2026',
  '/blog/how-much-is-50k-a-year-hourly',
  '/blog/how-much-of-my-raise-do-i-keep',
  '/blog/how-to-calculate-paycheck-taxes',
  '/blog/how-to-increase-take-home-pay',
  '/blog/how-to-read-your-pay-stub',
  '/blog/hsa-contribution-limits-2026',
  '/blog/no-income-tax-states-2026',
  '/blog/no-tax-on-tips-explained',
  '/blog/overtime-pay-rules-by-state',
  '/blog/texas-paycheck-calculator-guide',
  '/blog/texas-vs-california-salary',
  '/blog/two-jobs-tax-withholding',
  '/blog/what-is-fica-tax',
  '/bonus-calculator',
  '/bonus-tax-calculator',
  '/calculator',
  '/hourly-paycheck-calculator',
  '/minimum-wage',
  '/no-tax-on-overtime-deduction',
  '/no-tax-on-tips-calculator',
  '/overtime-calculator',
  '/privacy-policy',
  '/raise-calculator',
  '/signing-bonus-tax-calculator',
  '/terms',
  '/tip-calculator',
  '/two-jobs-tax-calculator',
  '/unemployment-calculator',
  '/w4-withholding-calculator',
  // Динамічні [state] — тестуємо california як приклад
  '/bonus-calculator/california',
  '/bonus-tax-calculator/california',
  '/hourly-paycheck-calculator/california',
  '/minimum-wage/california',
  '/overtime-calculator/california',
  '/tip-calculator/california',
  '/unemployment-calculator/california',
  '/california-paycheck-calculator',
  // Перевіряємо старі URL що могли бути проіндексовані
  '/texas-paycheck-calculator',
  '/florida-paycheck-calculator',
  '/new-york-paycheck-calculator',
];

function checkUrl(path) {
  return new Promise((resolve) => {
    const url = BASE + path;
    const req = https.get(url, { timeout: 8000 }, (res) => {
      resolve({ path, status: res.statusCode });
      res.resume();
    });
    req.on('error', () => resolve({ path, status: 'ERR' }));
    req.on('timeout', () => { req.destroy(); resolve({ path, status: 'TIMEOUT' }); });
  });
}

async function main() {
  console.log('=== ПЕРЕВІРКА URL privatepaycheck.com ===\n');
  console.log(`Перевіряємо ${REAL_ROUTES.length} URL...\n`);

  const results = [];
  // По 5 паралельно щоб не завантажити сервер
  for (let i = 0; i < REAL_ROUTES.length; i += 5) {
    const batch = REAL_ROUTES.slice(i, i + 5);
    const batchResults = await Promise.all(batch.map(checkUrl));
    results.push(...batchResults);
    process.stdout.write('.');
  }
  console.log('\n');

  const ok = results.filter(r => r.status === 200);
  const redirects = results.filter(r => r.status === 301 || r.status === 302 || r.status === 307 || r.status === 308);
  const notFound = results.filter(r => r.status === 404);
  const errors = results.filter(r => r.status !== 200 && r.status !== 301 && r.status !== 302 && r.status !== 307 && r.status !== 308 && r.status !== 404);

  console.log(`✅ 200 OK (${ok.length}):`);
  ok.forEach(r => console.log(`   ${r.path}`));

  console.log(`\n🔀 РЕДІРЕКТИ (${redirects.length}):`);
  redirects.forEach(r => console.log(`   ${r.status} → ${r.path}`));

  console.log(`\n❌ 404 NOT FOUND (${notFound.length}):`);
  notFound.forEach(r => console.log(`   ${r.path}`));

  if (errors.length > 0) {
    console.log(`\n⚠️  ІНШІ ПОМИЛКИ (${errors.length}):`);
    errors.forEach(r => console.log(`   ${r.status} → ${r.path}`));
  }

  console.log('\n--- ВИСНОВОК ---');
  if (notFound.length > 0) {
    console.log('❌ Потрібні редіректи або фікс роутів для 404 URL');
    console.log('Скинь результат — зроблю фікс одразу');
  } else if (redirects.length > 0) {
    console.log('⚠️  Є редіректи — Google може рахувати їх як soft 404');
  } else {
    console.log('✅ Всі перевірені URL відповідають 200');
  }
}

main();
