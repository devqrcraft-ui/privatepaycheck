import fs from 'fs';

const file = 'src/app/california-paycheck-calculator/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const marker = '6,900 less than Texas workers';
const idx = content.indexOf(marker);

if (idx === -1) {
  console.log('НЕ ЗНАЙДЕНО рядок з 6,900');
} else {
  const lineStart = content.lastIndexOf('<li>', idx);
  const lineEnd = content.indexOf('</li>', idx) + '</li>'.length;
  console.log('--- поточний рядок ---');
  console.log(content.slice(lineStart, lineEnd));

  const oldLine = content.slice(lineStart, lineEnd);
  const newLine = "<li>{'On a $75K salary, CA workers take home ~$57,318/year after federal, FICA, state tax and SDI'}</li>";
  content = content.replace(oldLine, newLine);
  fs.writeFileSync(file, content);
  console.log('--- замінено на ---');
  console.log(newLine);
}
