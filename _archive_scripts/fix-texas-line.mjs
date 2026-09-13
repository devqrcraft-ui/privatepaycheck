import fs from 'fs';

const file = 'src/app/texas-paycheck-calculator/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const old1 = "On a $75,000 salary, Texas workers take home ~$57,200/year vs ~$52,650 in California. The difference compounds: over 10 years that's <strong style={{color:'#4ade80'}}>$45,000+ more</strong> in your pocket.";
const new1 = "On a $75,000 salary, Texas workers take home ~$61,593/year vs ~$57,520 in California. The difference compounds: over 10 years that's <strong style={{color:'#4ade80'}}>$40,000+ more</strong> in your pocket.";

const found1 = content.includes(old1);
console.log('Рядок 148 знайдено:', found1);
if (found1) content = content.split(old1).join(new1);

const old2 = "['$75,000','$6,250','$57,200','$2,200']";
const new2 = "['$75,000','$6,250','$61,593','$2,369']";
const found2 = content.includes(old2);
console.log('Рядок 165 знайдено:', found2);
if (found2) content = content.split(old2).join(new2);

fs.writeFileSync(file, content);
