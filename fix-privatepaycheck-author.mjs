import fs from 'fs';
import path from 'path';

const ROOT = 'C:/Users/RUSLAN/Desktop/privatepaycheck/src/app';

// ============================
// КРОК 1: AuthorBox.tsx
// ============================
console.log('=== КРОК 1: AuthorBox.tsx ===');
const abPath = path.join(ROOT, 'components/AuthorBox.tsx').replace(/\\/g, '/');
let ab = fs.readFileSync(abPath, 'utf8').replace(/\r\n/g, '\n');
const abBefore = ab;

// Прибираємо "· Since 2017" з jobTitle рядка
ab = ab.split('Tax Compliance Specialist \xb7 Since 2017').join('Tax Compliance Specialist');
ab = ab.split('Tax Compliance Specialist · Since 2017').join('Tax Compliance Specialist');

// Замінюємо вигадану біографію на нейтральну (зберігаємо суть про payroll)
const OLD_BIO = "Helped 5,000+ freelancers navigate IRS rules. Specializes in payroll and W-2 income taxation.";
const NEW_BIO = "Writes about US payroll, federal and state income tax, and take-home pay calculations for employees and freelancers.";
ab = ab.split(OLD_BIO).join(NEW_BIO);

if (ab !== abBefore) {
  fs.writeFileSync(abPath, ab, 'utf8');
  console.log('FIXED: AuthorBox.tsx');
} else {
  console.log('SKIP: точні рядки не знайдено — перевірте вручну');
}

// ============================
// КРОК 2: page.tsx (головна)
// ============================
console.log('\n=== КРОК 2: page.tsx (головна) ===');
const homePath = path.join(ROOT, 'page.tsx').replace(/\\/g, '/');
let home = fs.readFileSync(homePath, 'utf8').replace(/\r\n/g, '\n');
const homeBefore = home;

const OLD_PERSON = '"@context":"https://schema.org","@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","description":"Tax compliance specialist since 2017. Helped 5,000+ freelancers navigate IRS rules.","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center","https://www.gov.uk/self-assessment-tax-returns"]';
const NEW_PERSON = '"@context":"https://schema.org","@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"';

if (home.includes(OLD_PERSON)) {
  home = home.split(OLD_PERSON).join(NEW_PERSON);
  fs.writeFileSync(homePath, home, 'utf8');
  console.log('FIXED: page.tsx — Person-схема очищена');
} else {
  console.log('SKIP: точний рядок не знайдено — перевірте вручну');
}

// ============================
// КРОК 3: перевіряємо blog/page файли (чи є там окремі author блоки)
// ============================
console.log('\n=== КРОК 3: перевірка blog файлів ===');
let blogCount = 0;
function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) { scanDir(full); continue; }
    if (!f.endsWith('.tsx') && !f.endsWith('.ts')) continue;
    const txt = fs.readFileSync(full, 'utf8');
    if (txt.includes('Helped 5,000') || txt.includes('Since 2017') && txt.includes('Tax Compliance')) {
      console.log('ЗНАЙДЕНО в:', full.replace(ROOT, ''));
      blogCount++;
    }
  }
}
scanDir(ROOT);
if (blogCount === 0) console.log('Інших файлів з вигаданими цифрами не знайдено ✓');

// ============================
// ФІНАЛЬНА ПЕРЕВІРКА
// ============================
console.log('\n=== ФІНАЛЬНА ПЕРЕВІРКА ===');
const checkFiles = [abPath, homePath];
let remaining = 0;
for (const f of checkFiles) {
  const txt = fs.readFileSync(f, 'utf8');
  if (txt.includes('Helped 5,000')) { remaining++; console.log('ЗАЛИШИВСЯ "Helped 5,000":', f); }
  if (txt.includes('Since 2017')) { remaining++; console.log('ЗАЛИШИВСЯ "Since 2017":', f); }
  if (txt.includes('irs.gov/businesses') && txt.includes('sameAs')) { remaining++; console.log('ЗАЛИШИВСЯ IRS sameAs:', f); }
}
console.log('\nПроблем залишилось:', remaining, remaining === 0 ? '✓ ЧИСТО' : '!!! ПЕРЕВІРТЕ');
console.log('\nГотово. Запустіть:');
console.log('npm run build');
console.log('git add -A && git commit -m "fix: remove fabricated author stats from AuthorBox and home schema" && git push');
