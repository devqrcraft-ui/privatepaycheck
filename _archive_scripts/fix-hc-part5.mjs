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
rep("A \$60,000 salary in Texas takes home ~\$47,000. The same salary in California takes home ~\$44,000 after state income tax up to 9.3%.", "A \$60,000 salary in Texas takes home ~\$50,390. The same salary in California takes home ~\$47,725 after state income tax up to 9.3%.");
rep("Example: \$75,000 ÷ 26 = \$2,884 gross → ~\$2,150 net in Texas, ~\$1,980 net in California.", "Example: \$75,000 ÷ 26 = \$2,884 gross → ~\$2,369 net in Texas, ~\$2,212 net in California.");
rep("~\$33,000/yr in Texas (no state tax), ~\$30,500/yr in California. That is ~\$1,270/biweekly in Texas.", "~\$35,606/yr in Texas (no state tax), ~\$34,227/yr in California. That is ~\$1,369/biweekly in Texas.");
fs.writeFileSync(file, content);
console.log('ЧАСТИНА 5:', total);
