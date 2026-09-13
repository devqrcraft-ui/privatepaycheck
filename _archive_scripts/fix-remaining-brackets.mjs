import fs from 'fs';

const wrongSingle = '[[11925,.10],[48475,.12],[103350,.22],[197300,.24],[250525,.32],[626350,.35],[999999999,.37]]';
const correctSingle = '[[12400,.10],[50400,.12],[105700,.22],[201775,.24],[256225,.32],[640600,.35],[999999999,.37]]';
const wrongMFJ = '[[23850,.10],[96950,.12],[206700,.22],[394600,.24],[501050,.32],[751600,.35],[999999999,.37]]';
const correctMFJ = '[[24800,.10],[100800,.12],[211400,.22],[403550,.24],[512450,.32],[768700,.35],[999999999,.37]]';

for (const file of [
  'src/app/1099-paycheck-calculator/client.tsx',
  'src/app/federal-paycheck-calculator/client.tsx',
]) {
  let c = fs.readFileSync(file, 'utf8');
  const hasS = c.includes(wrongSingle);
  const hasM = c.includes(wrongMFJ);
  console.log(file, '-> single знайдено:', hasS, '| married знайдено:', hasM);
  if (hasS) c = c.split(wrongSingle).join(correctSingle);
  if (hasM) c = c.split(wrongMFJ).join(correctMFJ);
  fs.writeFileSync(file, c);
}

// methodology.tsx: bracket table
let m = fs.readFileSync('src/app/methodology/page.tsx', 'utf8');
const bracketPairs = [
  ["['10%','$0 – $11,925']", "['10%','$0 – $12,400']"],
  ["['12%','$11,926 – $48,475']", "['12%','$12,401 – $50,400']"],
  ["['22%','$48,476 – $103,350']", "['22%','$50,401 – $105,700']"],
  ["['24%','$103,351 – $197,300']", "['24%','$105,701 – $201,775']"],
  ["['32%','$197,301 – $250,525']", "['32%','$201,776 – $256,225']"],
  ["['35%','$250,526 – $626,350']", "['35%','$256,226 – $640,600']"],
  ["['37%','Over $626,350']", "['37%','Over $640,600']"],
];
for (const [oldV, newV] of bracketPairs) {
  const found = m.includes(oldV);
  console.log('methodology:', oldV, '-> знайдено:', found);
  if (found) m = m.split(oldV).join(newV);
}
// std deduction fix, окрема стара знахідка
const oldStd = 'Standard deduction 2026:</strong> $15,000 single / $30,000 married filing jointly';
if (m.includes(oldStd)) {
  m = m.split(oldStd).join('Standard deduction 2026:</strong> $16,100 single / $32,200 married filing jointly');
  console.log('methodology: std deduction $15,000->$16,100 замінено');
} else {
  console.log('methodology: std deduction рядок НЕ знайдено точним патерном, треба показати контекст окремо');
}

fs.writeFileSync('src/app/methodology/page.tsx', m);
