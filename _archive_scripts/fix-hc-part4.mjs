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
rep("{salary:'\$20/hr in Texas',net:'~\$33,200/yr · \$1,277/biweekly',note:'No state tax. Federal + FICA only.',href:'/hourly-paycheck-calculator/texas'}", "{salary:'\$20/hr in Texas',net:'~\$35,606/yr · \$1,369/biweekly',note:'No state tax. Federal + FICA only.',href:'/hourly-paycheck-calculator/texas'}");
rep("{salary:'\$20/hr in California',net:'~\$30,400/yr · \$1,169/biweekly',note:'State tax up to 9.3% applies.',href:'/hourly-paycheck-calculator/california'}", "{salary:'\$20/hr in California',net:'~\$34,227/yr · \$1,316/biweekly',note:'State tax up to 9.3% applies.',href:'/hourly-paycheck-calculator/california'}");
rep("{salary:'\$60,000 salary Florida',net:'~\$47,200/yr · \$1,815/biweekly',note:'No Florida state income tax.',href:'/florida-paycheck-calculator'}", "{salary:'\$60,000 salary Florida',net:'~\$50,390/yr · \$1,938/biweekly',note:'No Florida state income tax.',href:'/florida-paycheck-calculator'}");
rep("{salary:'\$75,000 salary New York',net:'~\$53,800/yr · \$2,069/biweekly',note:'NYC adds extra local tax if applicable.',href:'/new-york-paycheck-calculator'}", "{salary:'\$75,000 salary New York',net:'~\$58,108/yr · \$2,235/biweekly',note:'NYC adds extra local tax if applicable.',href:'/new-york-paycheck-calculator'}");
rep("{salary:'\$50,000 salary Illinois',net:'~\$38,900/yr · \$1,496/biweekly',note:'Flat 4.95% state tax rate.',href:'/illinois-paycheck-calculator'}", "{salary:'\$50,000 salary Illinois',net:'~\$39,880/yr · \$1,534/biweekly',note:'Flat 4.95% state tax rate.',href:'/illinois-paycheck-calculator'}");
rep("{salary:'\$100,000 salary California',net:'~\$70,500/yr · \$2,712/biweekly',note:'SDI + state up to 9.3% + federal.',href:'/california-paycheck-calculator'}", "{salary:'\$100,000 salary California',net:'~\$72,458/yr · \$2,787/biweekly',note:'SDI + state up to 9.3% + federal.',href:'/california-paycheck-calculator'}");
fs.writeFileSync(file, content);
console.log('ЧАСТИНА 4:', total);
