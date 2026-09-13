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
rep("> \$75,000 salary → ~\$58,500 take-home</div>", "> \$75,000 salary → ~\$61,593 take-home</div>");
rep("> \$75,000 salary → ~\$52,000 take-home</div>", "> \$75,000 salary → ~\$57,520 take-home</div>");
fs.writeFileSync(file, content);
console.log('ЧАСТИНА 3b:', total);
