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
rep("{label:'\$65,000 salary · Texas',net:'~\$51,200/yr · \$1,969/biweekly',color:'#4ade80'}", "{label:'\$65,000 salary · Texas',net:'~\$54,408/yr · \$2,093/biweekly',color:'#4ade80'}");
rep("{label:'\$85,000 salary · California',net:'~\$60,100/yr · \$2,312/biweekly',color:'#4ade80'}", "{label:'\$85,000 salary · California',net:'~\$63,495/yr · \$2,442/biweekly',color:'#4ade80'}");
rep("{label:'\$20/hr · Florida',net:'~\$33,400/yr · \$1,285/biweekly',color:'#4ade80'}", "{label:'\$20/hr · Florida',net:'~\$35,606/yr · \$1,369/biweekly',color:'#4ade80'}");
rep("{label:'\$120,000 salary · New York',net:'~\$79,800/yr · \$3,069/biweekly',color:'#4ade80'}", "{label:'\$120,000 salary · New York',net:'~\$87,179/yr · \$3,353/biweekly',color:'#4ade80'}");
fs.writeFileSync(file, content);
console.log('ЧАСТИНА 1:', total);
