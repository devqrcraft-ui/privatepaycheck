import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const sitemapUrl = `https://www.privatepaycheck.com/sitemap.xml`;
    const indexNowUrl = `https://api.indexnow.org/indexnow?url=${encodeURIComponent(sitemapUrl)}&key=b2c3d4e5f6789012345678901234ab12`;
    const res = await fetch(indexNowUrl, { method: 'GET' });
    return NextResponse.json({ ok: true, status: res.status, url: sitemapUrl });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
