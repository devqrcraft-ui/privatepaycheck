import fs from 'fs';

const file = 'src/app/california-paycheck-calculator/page.tsx';
let content = fs.readFileSync(file, 'utf8');
let log = [];

function replaceAll(oldV, newV) {
  const count = content.split(oldV).length - 1;
  content = content.split(oldV).join(newV);
  log.push(`${oldV} -> ${newV} : ${count}`);
}

replaceAll('57,318', '57,520');
replaceAll('$7,872', '$7,670');
replaceAll('$17,682', '$17,480');
replaceAll('$4,777', '$4,793');
replaceAll('Effective total tax rate: 26%', 'Effective total tax rate: 23.3%');

fs.writeFileSync(file, content);
console.log(log.join('\n'));
