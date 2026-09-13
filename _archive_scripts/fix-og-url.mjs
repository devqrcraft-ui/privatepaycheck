import fs from 'fs';

const STATE_SLUGS = [
  'alabama','alaska','arizona','arkansas','california','colorado','connecticut',
  'delaware','florida','georgia','hawaii','idaho','illinois','indiana','iowa',
  'kansas','kentucky','louisiana','maine','maryland','massachusetts','michigan',
  'minnesota','mississippi','missouri','montana','nebraska','nevada','new-hampshire',
  'new-jersey','new-mexico','new-york','north-carolina','north-dakota','ohio',
  'oklahoma','oregon','pennsylvania','rhode-island','south-carolina','south-dakota',
  'tennessee','texas','utah','vermont','virginia','washington','west-virginia',
  'wisconsin','wyoming','washington-dc',
];

let changed = [], skipped = [];

for (const slug of STATE_SLUGS) {
  const file = `src/app/${slug}-paycheck-calculator/page.tsx`;
  if (!fs.existsSync(file)) { skipped.push(`${file} (не знайдено)`); continue; }
  let content = fs.readFileSync(file, 'utf8');

  const canonicalMatch = content.match(/canonical:\s*'([^']+)'/);
  if (!canonicalMatch) { skipped.push(`${file} (canonical не знайдено)`); continue; }
  const canonical = canonicalMatch[1];

  if (/openGraph:\s*{/.test(content)) {
    if (/openGraph:\s*{[^}]*url:/s.test(content)) { skipped.push(`${file} (url вже є)`); continue; }
    content = content.replace(/openGraph:\s*{/, `openGraph: {\n    url: '${canonical}',`);
    fs.writeFileSync(file, content);
    changed.push(`${file} (додано url в існуючий openGraph)`);
  } else {
    const before = content;
    content = content.replace(
      /(alternates:\s*{\s*canonical:\s*'[^']+'\s*},)/,
      `$1\n  openGraph: {\n    url: '${canonical}',\n    type: 'website',\n  },`
    );
    if (content === before) { skipped.push(`${file} (patern alternates не збігся)`); continue; }
    fs.writeFileSync(file, content);
    changed.push(`${file} (додано новий openGraph)`);
  }
}

console.log(`Змінено: ${changed.length}`);
changed.forEach(f => console.log('  ' + f));
console.log(`Пропущено: ${skipped.length}`);
skipped.forEach(f => console.log('  ' + f));
