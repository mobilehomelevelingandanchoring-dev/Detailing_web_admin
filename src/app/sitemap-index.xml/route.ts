/**
 * /sitemap-index.xml — Sitemap Index
 * ─────────────────────────────────────────────────────────────────────────────
 * References both sitemaps so Google can discover everything from a single URL.
 * Submit https://www.srvdetailing.co.uk/sitemap-index.xml to Google Search Console.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { NextResponse } from 'next/server';

export const dynamic = 'force-static';
export const revalidate = 86400;

const BASE = 'https://www.srvdetailing.co.uk';

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Main page sitemap: all URLs with priorities and change frequencies -->
  <sitemap>
    <loc>${BASE}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>

  <!-- Image sitemap: gallery images attached to page URLs for Google Image indexing -->
  <sitemap>
    <loc>${BASE}/image-sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>

</sitemapindex>`;

  return new NextResponse(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  });
}
