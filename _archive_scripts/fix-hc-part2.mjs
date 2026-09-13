import fs from 'fs';
const file = 'src/app/home-client.tsx';
let content = fs.readFileSync(file, 'utf8');
let total = 0;
function rep(oldV, newV) {
  const c = content.split(oldV).length - 1;
  content = content.split(oldV).join(newV);
  console.log(c, '|', oldV.slice(0, 60));
  total += c;
}
rep("Standard deduction \$15,000 (single) / \$30,000 (married). Rates 10%–37%.", "Standard deduction \$16,100 (single) / \$32,200 (married). Rates 10%–37%.");
rep("Standard deduction \$15,000 (single) / \$30,000 (married). Progressive rates 10%–37%.", "Standard deduction \$16,100 (single) / \$32,200 (married). Progressive rates 10%–37%.");
rep("standard deductions: \$15,000 single / \$30,000 married filing jointly.", "standard deductions: \$16,100 single / \$32,200 married filing jointly.");
rep("applies above <strong style={{color:'#fff'}}>\$626,350</strong> (single)", "applies above <strong style={{color:'#fff'}}>\$640,600</strong> (single)");
fs.writeFileSync(file, content);
console.log('ЧАСТИНА 2:', total);
