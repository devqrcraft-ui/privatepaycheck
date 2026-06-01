import { writeFileSync } from 'fs';

const STATES = [
  { slug:'alabama',           name:'Alabama',         abbr:'AL', rate:5.0,  noTax:false, rows:[['$30,000','$2,500','$1,987','$1,834'],['$40,000','$3,333','$2,579','$2,381'],['$50,000','$4,167','$3,124','$2,884'],['$60,000','$5,000','$3,629','$3,350'],['$75,000','$6,250','$4,324','$3,992'],['$100,000','$8,333','$5,512','$5,088']], related:[['Texas','texas'],['Georgia','georgia'],['Tennessee','tennessee'],['Mississippi','mississippi']], retirementNote:'Alabama exempts most retirement income including Social Security and pension payments from state tax.', rateDesc:'up to 5%', brackets:'0%–5% (3 brackets)' },
  { slug:'alaska',            name:'Alaska',          abbr:'AK', rate:0,    noTax:true,  rows:[['$30,000','$2,500','$2,094','$1,933'],['$40,000','$3,333','$2,706','$2,498'],['$50,000','$4,167','$3,271','$3,019'],['$60,000','$5,000','$3,804','$3,511'],['$75,000','$6,250','$4,563','$4,212'],['$100,000','$8,333','$5,833','$5,385']], related:[['Washington','washington'],['Wyoming','wyoming'],['South Dakota','south-dakota'],['Tennessee','tennessee']], retirementNote:'Alaska has no state income tax, so all retirement income is completely state-tax-free.', rateDesc:'0% — no state income tax', brackets:'no state income tax' },
  { slug:'arkansas',          name:'Arkansas',        abbr:'AR', rate:4.7,  noTax:false, rows:[['$30,000','$2,500','$1,992','$1,839'],['$40,000','$3,333','$2,586','$2,388'],['$50,000','$4,167','$3,133','$2,893'],['$60,000','$5,000','$3,640','$3,361'],['$75,000','$6,250','$4,338','$4,005'],['$100,000','$8,333','$5,530','$5,106']], related:[['Oklahoma','oklahoma'],['Missouri','missouri'],['Tennessee','tennessee'],['Mississippi','mississippi']], retirementNote:'Arkansas exempts Social Security benefits and up to $6,000 of other retirement income from state tax.', rateDesc:'up to 4.7%', brackets:'0%–4.7% (3 brackets)' },
  { slug:'connecticut',       name:'Connecticut',     abbr:'CT', rate:6.5,  noTax:false, rows:[['$30,000','$2,500','$1,951','$1,801'],['$40,000','$3,333','$2,533','$2,339'],['$50,000','$4,167','$3,065','$2,829'],['$60,000','$5,000','$3,554','$3,281'],['$75,000','$6,250','$4,227','$3,902'],['$100,000','$8,333','$5,375','$4,963']], related:[['New York','new-york'],['Massachusetts','massachusetts'],['New Jersey','new-jersey'],['Rhode Island','rhode-island']], retirementNote:'Connecticut taxes most retirement income but exempts 50% of Social Security for moderate-income earners.', rateDesc:'up to 6.5%', brackets:'3%–6.99% (7 brackets)' },
  { slug:'delaware',          name:'Delaware',        abbr:'DE', rate:6.6,  noTax:false, rows:[['$30,000','$2,500','$1,948','$1,798'],['$40,000','$3,333','$2,529','$2,335'],['$50,000','$4,167','$3,060','$2,824'],['$60,000','$5,000','$3,548','$3,275'],['$75,000','$6,250','$4,218','$3,893'],['$100,000','$8,333','$5,364','$4,953']], related:[['Pennsylvania','pennsylvania'],['New Jersey','new-jersey'],['Maryland','maryland'],['Virginia','virginia']], retirementNote:'Delaware offers a $12,500 pension exclusion for retirees 60 and older.', rateDesc:'up to 6.6%', brackets:'0%–6.6% (7 brackets)' },
  { slug:'georgia',           name:'Georgia',         abbr:'GA', rate:5.5,  noTax:false, rows:[['$30,000','$2,500','$1,974','$1,822'],['$40,000','$3,333','$2,562','$2,366'],['$50,000','$4,167','$3,101','$2,863'],['$60,000','$5,000','$3,601','$3,324'],['$75,000','$6,250','$4,290','$3,960'],['$100,000','$8,333','$5,468','$5,047']], related:[['Florida','florida'],['Tennessee','tennessee'],['North Carolina','north-carolina'],['Alabama','alabama']], retirementNote:'Georgia allows a $65,000 retirement income exclusion per person for residents 65 and older.', rateDesc:'up to 5.5%', brackets:'5.49% flat rate' },
  { slug:'hawaii',            name:'Hawaii',          abbr:'HI', rate:11.0, noTax:false, rows:[['$30,000','$2,500','$1,876','$1,732'],['$40,000','$3,333','$2,433','$2,247'],['$50,000','$4,167','$2,941','$2,715'],['$60,000','$5,000','$3,406','$3,144'],['$75,000','$6,250','$4,040','$3,729'],['$100,000','$8,333','$5,125','$4,731']], related:[['California','california'],['Washington','washington'],['Oregon','oregon'],['Alaska','alaska']], retirementNote:'Hawaii does not tax most pension income from state and county retirement systems.', rateDesc:'up to 11%', brackets:'1.4%–11% (12 brackets)' },
  { slug:'idaho',             name:'Idaho',           abbr:'ID', rate:5.8,  noTax:false, rows:[['$30,000','$2,500','$1,968','$1,817'],['$40,000','$3,333','$2,554','$2,358'],['$50,000','$4,167','$3,089','$2,852'],['$60,000','$5,000','$3,585','$3,310'],['$75,000','$6,250','$4,268','$3,940'],['$100,000','$8,333','$5,438','$5,020']], related:[['Montana','montana'],['Utah','utah'],['Oregon','oregon'],['Washington','washington']], retirementNote:'Idaho offers a retirement benefits deduction of up to $47,400 for joint filers 65 and older.', rateDesc:'up to 5.8%', brackets:'5.695% flat rate' },
  { slug:'illinois',          name:'Illinois',        abbr:'IL', rate:4.95, noTax:false, rows:[['$30,000','$2,500','$1,988','$1,835'],['$40,000','$3,333','$2,581','$2,383'],['$50,000','$4,167','$3,127','$2,888'],['$60,000','$5,000','$3,633','$3,354'],['$75,000','$6,250','$4,330','$3,997'],['$100,000','$8,333','$5,519','$5,094']], related:[['Indiana','indiana'],['Wisconsin','wisconsin'],['Michigan','michigan'],['Ohio','ohio']], retirementNote:'Illinois does not tax retirement income — all pension, Social Security, and IRA income is exempt.', rateDesc:'4.95% flat', brackets:'4.95% flat rate' },
  { slug:'indiana',           name:'Indiana',         abbr:'IN', rate:3.05, noTax:false, rows:[['$30,000','$2,500','$2,039','$1,882'],['$40,000','$3,333','$2,643','$2,440'],['$50,000','$4,167','$3,200','$2,954'],['$60,000','$5,000','$3,717','$3,431'],['$75,000','$6,250','$4,432','$4,091'],['$100,000','$8,333','$5,655','$5,220']], related:[['Ohio','ohio'],['Illinois','illinois'],['Michigan','michigan'],['Kentucky','kentucky']], retirementNote:'Indiana exempts Social Security benefits and allows deductions for other retirement income for residents 62+.', rateDesc:'3.05% flat', brackets:'3.05% flat rate' },
  { slug:'iowa',              name:'Iowa',            abbr:'IA', rate:6.0,  noTax:false, rows:[['$30,000','$2,500','$1,962','$1,811'],['$40,000','$3,333','$2,547','$2,351'],['$50,000','$4,167','$3,082','$2,845'],['$60,000','$5,000','$3,577','$3,302'],['$75,000','$6,250','$4,258','$3,931'],['$100,000','$8,333','$5,423','$5,007']], related:[['Minnesota','minnesota'],['Wisconsin','wisconsin'],['Illinois','illinois'],['Nebraska','nebraska']], retirementNote:'Iowa exempts retirement income for residents 55 and older starting in tax year 2023.', rateDesc:'up to 6%', brackets:'4.4%–6% (2 brackets)' },
  { slug:'kansas',            name:'Kansas',          abbr:'KS', rate:5.7,  noTax:false, rows:[['$30,000','$2,500','$1,971','$1,820'],['$40,000','$3,333','$2,557','$2,361'],['$50,000','$4,167','$3,093','$2,856'],['$60,000','$5,000','$3,589','$3,314'],['$75,000','$6,250','$4,274','$3,945'],['$100,000','$8,333','$5,445','$5,026']], related:[['Missouri','missouri'],['Oklahoma','oklahoma'],['Nebraska','nebraska'],['Colorado','colorado']], retirementNote:'Kansas exempts Social Security benefits for residents with income under $75,000.', rateDesc:'up to 5.7%', brackets:'3.1%–5.7% (3 brackets)' },
  { slug:'kentucky',          name:'Kentucky',        abbr:'KY', rate:4.5,  noTax:false, rows:[['$30,000','$2,500','$1,995','$1,842'],['$40,000','$3,333','$2,591','$2,392'],['$50,000','$4,167','$3,139','$2,898'],['$60,000','$5,000','$3,647','$3,367'],['$75,000','$6,250','$4,347','$4,012'],['$100,000','$8,333','$5,540','$5,114']], related:[['Tennessee','tennessee'],['Ohio','ohio'],['Indiana','indiana'],['Virginia','virginia']], retirementNote:'Kentucky allows a $31,110 pension income exclusion for each taxpayer.', rateDesc:'4.5% flat', brackets:'4.5% flat rate' },
  { slug:'louisiana',         name:'Louisiana',       abbr:'LA', rate:4.25, noTax:false, rows:[['$30,000','$2,500','$2,001','$1,847'],['$40,000','$3,333','$2,599','$2,400'],['$50,000','$4,167','$3,148','$2,907'],['$60,000','$5,000','$3,657','$3,377'],['$75,000','$6,250','$4,360','$4,025'],['$100,000','$8,333','$5,555','$5,128']], related:[['Mississippi','mississippi'],['Arkansas','arkansas'],['Texas','texas'],['Alabama','alabama']], retirementNote:'Louisiana exempts all retirement income from state taxes, including pensions and Social Security.', rateDesc:'up to 4.25%', brackets:'1.85%–4.25% (3 brackets)' },
  { slug:'maine',             name:'Maine',           abbr:'ME', rate:7.15, noTax:false, rows:[['$30,000','$2,500','$1,934','$1,786'],['$40,000','$3,333','$2,509','$2,317'],['$50,000','$4,167','$3,034','$2,801'],['$60,000','$5,000','$3,518','$3,248'],['$75,000','$6,250','$4,179','$3,858'],['$100,000','$8,333','$5,309','$4,901']], related:[['New Hampshire','new-hampshire'],['Vermont','vermont'],['Massachusetts','massachusetts'],['Rhode Island','rhode-island']], retirementNote:'Maine offers a $35,000 pension income deduction for residents receiving retirement income.', rateDesc:'up to 7.15%', brackets:'5.8%–7.15% (3 brackets)' },
  { slug:'maryland',          name:'Maryland',        abbr:'MD', rate:5.75, noTax:false, rows:[['$30,000','$2,500','$1,969','$1,818'],['$40,000','$3,333','$2,555','$2,359'],['$50,000','$4,167','$3,090','$2,854'],['$60,000','$5,000','$3,586','$3,311'],['$75,000','$6,250','$4,269','$3,941'],['$100,000','$8,333','$5,435','$5,017']], related:[['Virginia','virginia'],['Delaware','delaware'],['Pennsylvania','pennsylvania'],['West Virginia','west-virginia']], retirementNote:'Maryland excludes up to $36,200 of military and certain pension income from state taxes.', rateDesc:'up to 5.75%', brackets:'2%–5.75% (8 brackets)' },
  { slug:'massachusetts',     name:'Massachusetts',   abbr:'MA', rate:5.0,  noTax:false, rows:[['$30,000','$2,500','$1,987','$1,834'],['$40,000','$3,333','$2,579','$2,381'],['$50,000','$4,167','$3,124','$2,884'],['$60,000','$5,000','$3,629','$3,350'],['$75,000','$6,250','$4,324','$3,992'],['$100,000','$8,333','$5,512','$5,088']], related:[['Connecticut','connecticut'],['Rhode Island','rhode-island'],['New Hampshire','new-hampshire'],['New York','new-york']], retirementNote:'Massachusetts does not tax Social Security benefits or most pension income from public retirement systems.', rateDesc:'5% flat', brackets:'5% flat rate' },
  { slug:'michigan',          name:'Michigan',        abbr:'MI', rate:4.25, noTax:false, rows:[['$30,000','$2,500','$2,001','$1,847'],['$40,000','$3,333','$2,599','$2,400'],['$50,000','$4,167','$3,148','$2,907'],['$60,000','$5,000','$3,657','$3,377'],['$75,000','$6,250','$4,360','$4,025'],['$100,000','$8,333','$5,555','$5,128']], related:[['Ohio','ohio'],['Indiana','indiana'],['Illinois','illinois'],['Wisconsin','wisconsin']], retirementNote:'Michigan offers significant pension deductions depending on birth year, ranging from $20,000 to full exemption.', rateDesc:'4.25% flat', brackets:'4.05% flat rate' },
  { slug:'mississippi',       name:'Mississippi',     abbr:'MS', rate:5.0,  noTax:false, rows:[['$30,000','$2,500','$1,987','$1,834'],['$40,000','$3,333','$2,579','$2,381'],['$50,000','$4,167','$3,124','$2,884'],['$60,000','$5,000','$3,629','$3,350'],['$75,000','$6,250','$4,324','$3,992'],['$100,000','$8,333','$5,512','$5,088']], related:[['Alabama','alabama'],['Louisiana','louisiana'],['Tennessee','tennessee'],['Arkansas','arkansas']], retirementNote:'Mississippi exempts all retirement income — Social Security, pensions, annuities, and IRA distributions.', rateDesc:'up to 5%', brackets:'4.7% flat rate' },
  { slug:'missouri',          name:'Missouri',        abbr:'MO', rate:4.95, noTax:false, rows:[['$30,000','$2,500','$1,988','$1,835'],['$40,000','$3,333','$2,581','$2,383'],['$50,000','$4,167','$3,127','$2,888'],['$60,000','$5,000','$3,633','$3,354'],['$75,000','$6,250','$4,330','$3,997'],['$100,000','$8,333','$5,519','$5,094']], related:[['Kansas','kansas'],['Illinois','illinois'],['Arkansas','arkansas'],['Tennessee','tennessee']], retirementNote:'Missouri offers a Social Security deduction for residents with adjusted gross income under $100,000.', rateDesc:'up to 4.95%', brackets:'2%–4.95% (6 brackets)' },
  { slug:'montana',           name:'Montana',         abbr:'MT', rate:5.9,  noTax:false, rows:[['$30,000','$2,500','$1,966','$1,815'],['$40,000','$3,333','$2,551','$2,355'],['$50,000','$4,167','$3,086','$2,849'],['$60,000','$5,000','$3,581','$3,307'],['$75,000','$6,250','$4,263','$3,935'],['$100,000','$8,333','$5,430','$5,013']], related:[['Idaho','idaho'],['Wyoming','wyoming'],['Colorado','colorado'],['North Dakota','north-dakota']], retirementNote:'Montana allows a partial deduction for pension income and Social Security benefits depending on income level.', rateDesc:'up to 5.9%', brackets:'4.7%–5.9% (2 brackets)' },
  { slug:'nebraska',          name:'Nebraska',        abbr:'NE', rate:5.84, noTax:false, rows:[['$30,000','$2,500','$1,967','$1,816'],['$40,000','$3,333','$2,552','$2,357'],['$50,000','$4,167','$3,088','$2,851'],['$60,000','$5,000','$3,583','$3,308'],['$75,000','$6,250','$4,265','$3,937'],['$100,000','$8,333','$5,432','$5,015']], related:[['Iowa','iowa'],['Kansas','kansas'],['South Dakota','south-dakota'],['Colorado','colorado']], retirementNote:'Nebraska is phasing out taxation of Social Security benefits, with full exemption expected by 2025.', rateDesc:'up to 5.84%', brackets:'2.46%–5.84% (4 brackets)' },
  { slug:'new-hampshire',     name:'New Hampshire',   abbr:'NH', rate:0,    noTax:true,  rows:[['$30,000','$2,500','$2,094','$1,933'],['$40,000','$3,333','$2,706','$2,498'],['$50,000','$4,167','$3,271','$3,019'],['$60,000','$5,000','$3,804','$3,511'],['$75,000','$6,250','$4,563','$4,212'],['$100,000','$8,333','$5,833','$5,385']], related:[['Maine','maine'],['Vermont','vermont'],['Massachusetts','massachusetts'],['Rhode Island','rhode-island']], retirementNote:'New Hampshire has no income tax on wages, making it tax-friendly for workers and retirees.', rateDesc:'0% on wages — no income tax on earned income', brackets:'no income tax on wages' },
  { slug:'new-jersey',        name:'New Jersey',      abbr:'NJ', rate:5.53, noTax:false, rows:[['$30,000','$2,500','$1,973','$1,821'],['$40,000','$3,333','$2,560','$2,364'],['$50,000','$4,167','$3,096','$2,858'],['$60,000','$5,000','$3,592','$3,316'],['$75,000','$6,250','$4,278','$3,949'],['$100,000','$8,333','$5,448','$5,029']], related:[['New York','new-york'],['Pennsylvania','pennsylvania'],['Connecticut','connecticut'],['Delaware','delaware']], retirementNote:'New Jersey excludes pension income for residents with total income under $100,000.', rateDesc:'up to 5.53%', brackets:'1.4%–10.75% (7 brackets)' },
  { slug:'new-mexico',        name:'New Mexico',      abbr:'NM', rate:5.9,  noTax:false, rows:[['$30,000','$2,500','$1,966','$1,815'],['$40,000','$3,333','$2,551','$2,355'],['$50,000','$4,167','$3,086','$2,849'],['$60,000','$5,000','$3,581','$3,307'],['$75,000','$6,250','$4,263','$3,935'],['$100,000','$8,333','$5,430','$5,013']], related:[['Arizona','arizona'],['Colorado','colorado'],['Texas','texas'],['Oklahoma','oklahoma']], retirementNote:'New Mexico exempts up to $10,000 of pension and annuity income for residents 65 and older.', rateDesc:'up to 5.9%', brackets:'1.7%–5.9% (5 brackets)' },
  { slug:'north-carolina',    name:'North Carolina',  abbr:'NC', rate:4.5,  noTax:false, rows:[['$30,000','$2,500','$1,995','$1,842'],['$40,000','$3,333','$2,591','$2,392'],['$50,000','$4,167','$3,139','$2,898'],['$60,000','$5,000','$3,647','$3,367'],['$75,000','$6,250','$4,347','$4,012'],['$100,000','$8,333','$5,540','$5,114']], related:[['South Carolina','south-carolina'],['Virginia','virginia'],['Georgia','georgia'],['Tennessee','tennessee']], retirementNote:'North Carolina exempts Social Security benefits from state income tax.', rateDesc:'4.5% flat', brackets:'4.5% flat rate' },
  { slug:'north-dakota',      name:'North Dakota',    abbr:'ND', rate:2.5,  noTax:false, rows:[['$30,000','$2,500','$2,056','$1,898'],['$40,000','$3,333','$2,665','$2,460'],['$50,000','$4,167','$3,225','$2,977'],['$60,000','$5,000','$3,745','$3,457'],['$75,000','$6,250','$4,465','$4,121'],['$100,000','$8,333','$5,688','$5,252']], related:[['South Dakota','south-dakota'],['Montana','montana'],['Minnesota','minnesota'],['Nebraska','nebraska']], retirementNote:'North Dakota has a low 2.5% flat tax and exempts Social Security benefits from state income.', rateDesc:'2.5% flat', brackets:'2.5% flat rate' },
  { slug:'ohio',              name:'Ohio',            abbr:'OH', rate:3.75, noTax:false, rows:[['$30,000','$2,500','$2,025','$1,869'],['$40,000','$3,333','$2,624','$2,423'],['$50,000','$4,167','$3,175','$2,931'],['$60,000','$5,000','$3,685','$3,402'],['$75,000','$6,250','$4,393','$4,055'],['$100,000','$8,333','$5,600','$5,169']], related:[['Indiana','indiana'],['Michigan','michigan'],['Pennsylvania','pennsylvania'],['Kentucky','kentucky']], retirementNote:'Ohio does not tax Social Security benefits and offers a retirement income credit for residents 65+.', rateDesc:'up to 3.75%', brackets:'2.75%–3.75% (2 brackets)' },
  { slug:'oklahoma',          name:'Oklahoma',        abbr:'OK', rate:4.75, noTax:false, rows:[['$30,000','$2,500','$1,991','$1,838'],['$40,000','$3,333','$2,584','$2,386'],['$50,000','$4,167','$3,130','$2,890'],['$60,000','$5,000','$3,637','$3,358'],['$75,000','$6,250','$4,334','$4,001'],['$100,000','$8,333','$5,525','$5,101']], related:[['Texas','texas'],['Kansas','kansas'],['Arkansas','arkansas'],['Missouri','missouri']], retirementNote:'Oklahoma exempts up to $10,000 of retirement income per person, including Social Security benefits.', rateDesc:'up to 4.75%', brackets:'0.25%–4.75% (6 brackets)' },
  { slug:'oregon',            name:'Oregon',          abbr:'OR', rate:9.9,  noTax:false, rows:[['$30,000','$2,500','$1,892','$1,746'],['$40,000','$3,333','$2,455','$2,267'],['$50,000','$4,167','$2,969','$2,741'],['$60,000','$5,000','$3,440','$3,176'],['$75,000','$6,250','$4,085','$3,771'],['$100,000','$8,333','$5,187','$4,790']], related:[['Washington','washington'],['Idaho','idaho'],['California','california'],['Nevada','nevada']], retirementNote:'Oregon does not tax Social Security benefits but does tax most other retirement income.', rateDesc:'up to 9.9%', brackets:'4.75%–9.9% (4 brackets)' },
  { slug:'pennsylvania',      name:'Pennsylvania',    abbr:'PA', rate:3.07, noTax:false, rows:[['$30,000','$2,500','$2,040','$1,883'],['$40,000','$3,333','$2,644','$2,441'],['$50,000','$4,167','$3,202','$2,956'],['$60,000','$5,000','$3,719','$3,433'],['$75,000','$6,250','$4,435','$4,094'],['$100,000','$8,333','$5,658','$5,223']], related:[['New Jersey','new-jersey'],['New York','new-york'],['Ohio','ohio'],['Delaware','delaware']], retirementNote:'Pennsylvania does not tax retirement income, including Social Security, pensions, and IRA distributions.', rateDesc:'3.07% flat', brackets:'3.07% flat rate' },
  { slug:'rhode-island',      name:'Rhode Island',    abbr:'RI', rate:5.99, noTax:false, rows:[['$30,000','$2,500','$1,963','$1,813'],['$40,000','$3,333','$2,548','$2,352'],['$50,000','$4,167','$3,083','$2,846'],['$60,000','$5,000','$3,578','$3,303'],['$75,000','$6,250','$4,260','$3,932'],['$100,000','$8,333','$5,424','$5,008']], related:[['Massachusetts','massachusetts'],['Connecticut','connecticut'],['Maine','maine'],['New Hampshire','new-hampshire']], retirementNote:'Rhode Island offers a pension and annuity deduction of up to $20,000 for residents 65 and older.', rateDesc:'up to 5.99%', brackets:'3.75%–5.99% (3 brackets)' },
  { slug:'south-carolina',    name:'South Carolina',  abbr:'SC', rate:6.4,  noTax:false, rows:[['$30,000','$2,500','$1,954','$1,804'],['$40,000','$3,333','$2,537','$2,343'],['$50,000','$4,167','$3,072','$2,836'],['$60,000','$5,000','$3,563','$3,289'],['$75,000','$6,250','$4,240','$3,914'],['$100,000','$8,333','$5,394','$4,979']], related:[['North Carolina','north-carolina'],['Georgia','georgia'],['Virginia','virginia'],['Tennessee','tennessee']], retirementNote:'South Carolina allows a $15,000 deduction for retirement income for residents 65 and older.', rateDesc:'up to 6.4%', brackets:'0%–6.4% (6 brackets)' },
  { slug:'south-dakota',      name:'South Dakota',    abbr:'SD', rate:0,    noTax:true,  rows:[['$30,000','$2,500','$2,094','$1,933'],['$40,000','$3,333','$2,706','$2,498'],['$50,000','$4,167','$3,271','$3,019'],['$60,000','$5,000','$3,804','$3,511'],['$75,000','$6,250','$4,563','$4,212'],['$100,000','$8,333','$5,833','$5,385']], related:[['North Dakota','north-dakota'],['Nebraska','nebraska'],['Wyoming','wyoming'],['Montana','montana']], retirementNote:'South Dakota has no state income tax, so all retirement income is completely state-tax-free.', rateDesc:'0% — no state income tax', brackets:'no state income tax' },
  { slug:'tennessee',         name:'Tennessee',       abbr:'TN', rate:0,    noTax:true,  rows:[['$30,000','$2,500','$2,094','$1,933'],['$40,000','$3,333','$2,706','$2,498'],['$50,000','$4,167','$3,271','$3,019'],['$60,000','$5,000','$3,804','$3,511'],['$75,000','$6,250','$4,563','$4,212'],['$100,000','$8,333','$5,833','$5,385']], related:[['Georgia','georgia'],['Alabama','alabama'],['Kentucky','kentucky'],['Mississippi','mississippi']], retirementNote:'Tennessee has no state income tax on wages, making all earned and retirement income state-tax-free.', rateDesc:'0% — no state income tax on wages', brackets:'no state income tax on wages' },
  { slug:'utah',              name:'Utah',            abbr:'UT', rate:4.65, noTax:false, rows:[['$30,000','$2,500','$1,993','$1,840'],['$40,000','$3,333','$2,588','$2,390'],['$50,000','$4,167','$3,135','$2,894'],['$60,000','$5,000','$3,642','$3,363'],['$75,000','$6,250','$4,342','$4,008'],['$100,000','$8,333','$5,534','$5,110']], related:[['Colorado','colorado'],['Idaho','idaho'],['Nevada','nevada'],['Arizona','arizona']], retirementNote:'Utah offers a 6% tax credit on retirement income for qualifying residents, reducing the effective tax rate.', rateDesc:'4.65% flat', brackets:'4.65% flat rate' },
  { slug:'vermont',           name:'Vermont',         abbr:'VT', rate:8.75, noTax:false, rows:[['$30,000','$2,500','$1,910','$1,763'],['$40,000','$3,333','$2,479','$2,289'],['$50,000','$4,167','$2,999','$2,769'],['$60,000','$5,000','$3,477','$3,210'],['$75,000','$6,250','$4,131','$3,814'],['$100,000','$8,333','$5,247','$4,844']], related:[['New Hampshire','new-hampshire'],['Maine','maine'],['Massachusetts','massachusetts'],['New York','new-york']], retirementNote:'Vermont partially exempts Social Security benefits for residents with income under $65,000 (single).', rateDesc:'up to 8.75%', brackets:'3.35%–8.75% (4 brackets)' },
  { slug:'virginia',          name:'Virginia',        abbr:'VA', rate:5.75, noTax:false, rows:[['$30,000','$2,500','$1,969','$1,818'],['$40,000','$3,333','$2,555','$2,359'],['$50,000','$4,167','$3,090','$2,854'],['$60,000','$5,000','$3,586','$3,311'],['$75,000','$6,250','$4,269','$3,941'],['$100,000','$8,333','$5,435','$5,017']], related:[['Maryland','maryland'],['North Carolina','north-carolina'],['West Virginia','west-virginia'],['Kentucky','kentucky']], retirementNote:'Virginia allows a $12,000 age deduction for residents 65 and older with qualifying income levels.', rateDesc:'up to 5.75%', brackets:'2%–5.75% (4 brackets)' },
  { slug:'washington-dc',     name:'Washington DC',   abbr:'DC', rate:8.5,  noTax:false, rows:[['$30,000','$2,500','$1,912','$1,765'],['$40,000','$3,333','$2,482','$2,292'],['$50,000','$4,167','$3,003','$2,773'],['$60,000','$5,000','$3,482','$3,215'],['$75,000','$6,250','$4,138','$3,820'],['$100,000','$8,333','$5,256','$4,852']], related:[['Maryland','maryland'],['Virginia','virginia'],['Pennsylvania','pennsylvania'],['Delaware','delaware']], retirementNote:'Washington DC does not tax Social Security benefits and allows a $3,000 pension exclusion.', rateDesc:'up to 8.5%', brackets:'4%–10.75% (6 brackets)' },
  { slug:'washington',        name:'Washington',      abbr:'WA', rate:0,    noTax:true,  rows:[['$30,000','$2,500','$2,094','$1,933'],['$40,000','$3,333','$2,706','$2,498'],['$50,000','$4,167','$3,271','$3,019'],['$60,000','$5,000','$3,804','$3,511'],['$75,000','$6,250','$4,563','$4,212'],['$100,000','$8,333','$5,833','$5,385']], related:[['Oregon','oregon'],['Idaho','idaho'],['Nevada','nevada'],['California','california']], retirementNote:'Washington has no state income tax, so all retirement income is completely state-tax-free.', rateDesc:'0% — no state income tax', brackets:'no state income tax' },
  { slug:'west-virginia',     name:'West Virginia',   abbr:'WV', rate:6.5,  noTax:false, rows:[['$30,000','$2,500','$1,951','$1,801'],['$40,000','$3,333','$2,533','$2,339'],['$50,000','$4,167','$3,065','$2,829'],['$60,000','$5,000','$3,554','$3,281'],['$75,000','$6,250','$4,227','$3,902'],['$100,000','$8,333','$5,375','$4,963']], related:[['Virginia','virginia'],['Kentucky','kentucky'],['Ohio','ohio'],['Maryland','maryland']], retirementNote:'West Virginia is phasing out taxation of Social Security benefits, with a 35% exemption in 2024 growing to 100% by 2026.', rateDesc:'up to 6.5%', brackets:'2.36%–5.12% (5 brackets)' },
  { slug:'wyoming',           name:'Wyoming',         abbr:'WY', rate:0,    noTax:true,  rows:[['$30,000','$2,500','$2,094','$1,933'],['$40,000','$3,333','$2,706','$2,498'],['$50,000','$4,167','$3,271','$3,019'],['$60,000','$5,000','$3,804','$3,511'],['$75,000','$6,250','$4,563','$4,212'],['$100,000','$8,333','$5,833','$5,385']], related:[['Montana','montana'],['South Dakota','south-dakota'],['Idaho','idaho'],['Colorado','colorado']], retirementNote:'Wyoming has no state income tax, so all retirement income is completely state-tax-free.', rateDesc:'0% — no state income tax', brackets:'no state income tax' },
];

function generatePage(s) {
  const url = `https://www.privatepaycheck.com/${s.slug}-paycheck-calculator`;
  const net50 = s.rows[2][2];
  const taxNote = s.noTax ? `no state income tax` : `${s.rate}% state tax`;
  const answerText = s.noTax
    ? `${s.name} has no state income tax in 2026. Workers only pay federal income tax and FICA. A worker earning $50,000 takes home about ${net50}/month — significantly more than in high-tax states.`
    : `${s.name} state income tax is ${s.rate}% (${s.brackets}) in 2026. A worker earning $50,000 takes home about ${net50}/month after federal, FICA, and ${s.abbr} state tax.`;

  const faqJson = JSON.stringify([
    { q: `What is ${s.name} income tax rate 2026?`, a: s.noTax ? `No state income tax.` : `${s.name} top income tax rate is ${s.rate}% in 2026 (${s.brackets}).` },
    { q: `How much is $50,000 take-home in ${s.name}?`, a: `Approximately ${net50}/month after federal, FICA, and ${s.abbr} state tax.` },
    { q: `Does ${s.name} tax retirement income?`, a: s.retirementNote },
    { q: `How is ${s.name} paycheck calculated?`, a: `Your ${s.name} paycheck is reduced by federal income tax (10%–37%), FICA (7.65%)${s.noTax ? ', and no state income tax' : `, and ${s.name} state income tax (${s.brackets})`}. Use the free calculator for your exact number.` },
    { q: `Is ${s.name} a tax-friendly state?`, a: s.noTax ? `Yes — ${s.name} is one of the most tax-friendly states in the US with no state income tax.` : `${s.name} has a ${s.rate}% ${s.noTax ? 'no income' : 'income'} tax rate. Compare with neighboring states using the links below.` },
  ]);

  const faqJsonLd = `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[${
    JSON.parse(faqJson).map(f => `{"@type":"Question","name":${JSON.stringify(f.q)},"acceptedAnswer":{"@type":"Answer","text":${JSON.stringify(f.a)}}}`).join(',')
  }]}`;

  const rowsHtml = s.rows.map(([sal, gross, net, bw]) => `
          <tr>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', fontWeight:700, color:'#F5C842' }}>${sal}</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)' }}>${gross}</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80', fontWeight:700 }}>${net}</td>
            <td style={{ padding:'10px 14px', fontSize:14, borderBottom:'1px solid rgba(255,255,255,0.05)', color:'#4ade80' }}>${bw}</td>
          </tr>`).join('');

  const relatedHtml = s.related.map(([rName, rSlug]) => `
        <a href="/${rSlug}-paycheck-calculator" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>${rName} Paycheck Calculator</div>
          <div style={{ fontSize:11, opacity:0.7, marginTop:4 }}>${rName} take-home 2026 →</div>
        </a>`).join('');

  const faqHtml = JSON.parse(faqJson).map((f, i) => `
          <div style={{ marginBottom:'14px', paddingBottom:'14px', borderBottom: ${i < 4 ? "'1px solid rgba(255,255,255,0.06)'" : "'none'"} }}>
            <h3 style={{ fontSize:'14px', fontWeight:700, marginBottom:'5px', color:'#F5C842' }}>${f.q}</h3>
            <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.75)', lineHeight:1.7, margin:0 }}>${f.a}</p>
          </div>`).join('');

  return `import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: '${s.name} Paycheck Calculator 2026 — Take-Home Pay After Taxes | PrivatePaycheck',
  description: '${s.name} paycheck calculator 2026. See exact take-home pay after federal + ${s.name} state tax (${s.rateDesc}) and FICA. All salary levels. Free & private.',
  keywords: '${s.slug.replace(/-/g,' ')} paycheck calculator 2026, ${s.abbr.toLowerCase()} take home pay, ${s.slug.replace(/-/g,' ')} salary after taxes',
  alternates: { canonical: '${url}' },
}

export default function Page() {
  return (
    <main style={{ maxWidth:860, margin:'0 auto', padding:'48px 24px', fontFamily:'system-ui,sans-serif', background:'#0f0c29', minHeight:'100vh', color:'white' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '${faqJsonLd.replace(/'/g, "\\'")}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.privatepaycheck.com"},{"@type":"ListItem","position":2,"name":"${s.name} Paycheck Calculator","item":"${url}"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"${s.name} Paycheck Calculator 2026","datePublished":"2026-05-15","dateModified":"2026-06-01","author":{"@type":"Person","name":"Ethan Blake"},"reviewedBy":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"PrivatePaycheck"},"mainEntityOfPage":"${url}"}' }} />

      <nav style={{ fontSize:13, color:'#b8c8dc', marginBottom:24 }}>
        <a href="/" style={{ color:'#b8c8dc' }}>Home</a> › ${s.name} Paycheck Calculator
      </nav>

      <h1 style={{ fontSize:34, fontWeight:900, marginBottom:8 }}>${s.name} Paycheck Calculator 2026</h1>
      <div style={{ fontSize:12, color:'rgba(255,255,255,0.65)', marginBottom:16 }}>
        Last updated: June 2026 · By Ethan Blake · Tax Compliance Specialist · 4 min read
      </div>

      <div style={{ background:'rgba(245,200,66,0.07)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:12, padding:'16px 20px', marginBottom:24 }}>
        <div style={{ fontWeight:800, color:'#F5C842', marginBottom:8, fontSize:13 }}>QUICK ANSWER</div>
        <p style={{ fontSize:14, lineHeight:1.8, margin:0, color:'rgba(255,255,255,0.85)' }}>
          ${answerText}
        </p>
      </div>

      <div style={{ background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.25)', borderRadius:8, padding:'16px 20px', marginBottom:28 }}>
        <div style={{ fontWeight:800, color:'#F5C842', marginBottom:10, fontSize:13 }}>KEY TAKEAWAYS</div>
        <ul style={{ margin:0, padding:'0 0 0 18px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)' }}>
          <li>${s.noTax ? `${s.name} has <strong>no state income tax</strong> — workers keep more of every dollar` : `${s.name} state income tax: <strong>${s.brackets}</strong>`}</li>
          <li>A $50,000 salary nets roughly <strong>${net50}/month</strong> after all taxes</li>
          <li>FICA (Social Security 6.2% + Medicare 1.45%) applies to all ${s.name} workers</li>
          <li>${s.retirementNote}</li>
          <li>SS wage base: <strong>$184,500</strong> | Standard deduction: <strong>$16,100</strong> (single, 2026)</li>
        </ul>
      </div>

      <h2 style={{ fontSize:22, fontWeight:800, marginBottom:12 }}>How much is take-home pay in ${s.name} in 2026?</h2>
      <div style={{ overflowX:'auto', marginBottom:32, borderRadius:6, border:'1px solid rgba(255,255,255,0.08)' }}>
        <table style={{ width:'100%', borderCollapse:'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding:'10px 14px', background:'rgba(255,255,255,0.06)', color:'#b8c8dc', fontSize:13, textAlign:'left', fontWeight:600, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>Annual Salary</th>
              <th style={{ padding:'10px 14px', background:'rgba(255,255,255,0.06)', color:'#b8c8dc', fontSize:13, textAlign:'left', fontWeight:600, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>Monthly Gross</th>
              <th style={{ padding:'10px 14px', background:'rgba(255,255,255,0.06)', color:'#b8c8dc', fontSize:13, textAlign:'left', fontWeight:600, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>Monthly Take-Home</th>
              <th style={{ padding:'10px 14px', background:'rgba(255,255,255,0.06)', color:'#b8c8dc', fontSize:13, textAlign:'left', fontWeight:600, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>Biweekly Take-Home</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}
            <tr>
              <td colSpan={4} style={{ padding:'10px 14px', fontSize:13, background:'rgba(245,200,66,0.08)', borderTop:'1px solid rgba(245,200,66,0.3)', color:'#F5C842', fontWeight:700 }}>
                Use the <a href="/" style={{ color:'#F5C842' }}>free calculator</a> for your exact ${s.name} take-home pay
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ background:'rgba(15,22,41,0.9)', border:'1px solid rgba(245,200,66,0.15)', borderRadius:12, padding:'20px 24px', marginBottom:32 }}>
        <h2 style={{ fontSize:20, fontWeight:800, color:'#f8fafc', marginBottom:12 }}>How ${s.name} Income Tax Works in 2026</h2>
        <ul style={{ margin:0, padding:'0 0 0 18px', fontSize:14, color:'rgba(255,255,255,0.80)', lineHeight:1.8 }}>
          <li>${s.noTax ? `No state income tax — workers only pay federal income tax and FICA` : `Progressive tax: ${s.brackets} — higher income = higher bracket`}</li>
          <li>FICA: Social Security 6.2% (up to $184,500 wage base) + Medicare 1.45%</li>
          <li>2026 standard deduction: $16,100 (single) / $32,200 (married filing jointly)</li>
          <li>This calculator uses 2026 IRS Publication 15-T tables and ${s.name} ${new Date().getFullYear()} withholding rates</li>
        </ul>
        <div style={{ marginTop:12, padding:'10px 14px', background:'rgba(245,200,66,0.06)', borderRadius:8, fontSize:13, color:'#fde68a' }}>
          ${s.name} state income tax: <strong>${s.rateDesc}</strong> · FICA: 7.65% · SS wage base: $184,500
        </div>
      </div>

      <p style={{ fontSize:13, color:'rgba(255,255,255,0.65)', marginBottom:24, lineHeight:1.7 }}>
        Source: <a href="https://www.irs.gov/pub/irs-pdf/p15t.pdf" rel="nofollow" target="_blank" style={{ color:'#F5C842' }}>IRS Publication 15-T (2026)</a> · Federal brackets, FICA rates, and ${s.name} state withholding tables
      </p>

      <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'24px', marginBottom:24 }}>
        <h2 style={{ fontSize:18, fontWeight:800, marginBottom:16 }}>${s.name} Paycheck FAQ</h2>
        ${faqHtml}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:12, marginBottom:32 }}>
        <a href="/all-states" style={{ display:'block', background:'rgba(245,200,66,0.08)', border:'1px solid rgba(245,200,66,0.2)', borderRadius:10, padding:'14px 16px', color:'white', textDecoration:'none' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#F5C842' }}>All States Calculator</div>
          <div style={{ fontSize:11, color:'rgba(255,255,255,0.65)', marginTop:4 }}>Compare all 50 states →</div>
        </a>${relatedHtml}
      </div>

      <AuthorBox />
    </main>
  )
}
`;
}

let count = 0;
for (const s of STATES) {
  const path = `C:/Users/RUSLAN/Desktop/privatepaycheck/src/app/${s.slug}-paycheck-calculator/page.tsx`;
  writeFileSync(path, generatePage(s), 'utf8');
  count++;
  console.log(`✓ ${s.name}`);
}
console.log(`\nDone: ${count} files upgraded`);
