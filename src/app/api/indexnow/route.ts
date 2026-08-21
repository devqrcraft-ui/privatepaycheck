import { NextResponse } from 'next/server';

export async function GET() {
  const KEY = '8d4c68f268d242c1b2c4c3b9b4c4c3b9';
  const HOST = 'www.privatepaycheck.com';
  
  // Базові сторінки + нові ніші
  const urlList = [
    `https://${HOST}/`,
    `https://${HOST}/nanny`,
    `https://${HOST}/housekeeper`,
    `https://${HOST}/bonus-tax-calculator`,
    `https://${HOST}/compare-states-taxes`,
    `https://${HOST}/all-states`
  ];

  // Додаємо основні штати для швидкої індексації
  const mainStates = ['california', 'texas', 'florida', 'new-york', 'illinois', 'pennsylvania', 'ohio', 'georgia', 'north-carolina', 'washington'];
  mainStates.forEach(s => {
    urlList.push(`https://${HOST}/hourly-paycheck-calculator/${s}` );
    urlList.push(`https://${HOST}/salary-paycheck-calculator/${s}` );
  });

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `https://${HOST}/${KEY}.txt`,
        urlList: urlList
      } ),
    });
    
    return NextResponse.json({ 
      success: response.ok, 
      total_urls: urlList.length,
      message: response.ok ? "PrivatePaycheck URLs sent to IndexNow" : "Error"
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}
