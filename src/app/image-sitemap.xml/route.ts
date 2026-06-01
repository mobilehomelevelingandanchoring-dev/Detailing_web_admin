/**
 * /image-sitemap.xml — Google Image Sitemap
 * ─────────────────────────────────────────────────────────────────────────────
 * Spec: https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
 *
 * Strategy
 * • ALL gallery images attached to /gallery (primary image hub)
 * • Categorised subsets attached to key service pages for contextual relevance
 * • force-static = runs at build time on Vercel → fs.readdirSync is safe
 * • ISR revalidate = 24 h so new images picked up on next redeploy / revalidation
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

const BASE = 'https://www.srvdetailing.co.uk';

// ── Types ────────────────────────────────────────────────────────────────────

interface ImageEntry {
  loc: string;
  title: string;
  caption: string;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Convert a gallery filename into an SEO-friendly title.
 * srv-detailing-ceramic-coating-manchester-01.webp.webp
 *   → "Ceramic Coating Manchester — SRV Detailing"
 */
function toTitle(filename: string): string {
  const stem = filename.split('.')[0]; // strip all extensions
  const clean = stem
    .replace(/^srv-detailing-/, '')   // remove brand prefix
    .replace(/-\d+$/, '')             // strip trailing -01 -02 etc
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
  return `${clean} — SRV Detailing`;
}

/**
 * Generate a descriptive caption for local-SEO signal richness.
 */
function toCaption(filename: string): string {
  const title = toTitle(filename).replace(' — SRV Detailing', '');
  return `${title} by SRV Detailing — professional mobile car detailing and valeting across Manchester, Stockport, Wilmslow & Greater Manchester`;
}

/**
 * Read /public/images/gallery and return structured image data.
 * Skips duplicate files (filenames containing "(").
 */
function readGalleryImages(): ImageEntry[] {
  const dir = path.join(process.cwd(), 'public', 'images', 'gallery');
  let files: string[] = [];

  try {
    files = fs
      .readdirSync(dir)
      .filter((f) => /\.(webp|jpg|jpeg|png)$/i.test(f))
      .filter((f) => !f.includes('(')) // skip "(2)" duplicate copies
      .sort();
  } catch {
    files = [];
  }

  return files.map((filename) => ({
    // encodeURIComponent handles spaces / special chars; standard chars pass through unchanged
    loc: `${BASE}/images/gallery/${encodeURIComponent(filename)}`,
    title: toTitle(filename),
    caption: toCaption(filename),
  }));
}

// ── XML builders ─────────────────────────────────────────────────────────────

function imageBlock(img: ImageEntry): string {
  return `
      <image:image>
        <image:loc>${img.loc}</image:loc>
        <image:title><![CDATA[${img.title}]]></image:title>
        <image:caption><![CDATA[${img.caption}]]></image:caption>
      </image:image>`;
}

function urlEntry(
  loc: string,
  changefreq: string,
  priority: string,
  images: ImageEntry[],
  today: string,
): string {
  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${images.map(imageBlock).join('')}
  </url>`;
}

// ── Route handler ────────────────────────────────────────────────────────────

export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  const all = readGalleryImages();

  // ── Categorised subsets for strategic page-level distribution ──────────────
  const byKeyword = (kw: string) =>
    all.filter((i) => i.title.toLowerCase().includes(kw));

  const ceramic   = byKeyword('ceramic');
  const interior  = byKeyword('interior');
  const exterior  = byKeyword('exterior');
  const detailing = all.filter((i) =>
    /detailing|polishing|correction/.test(i.title.toLowerCase()),
  );
  const valeting  = all.filter((i) =>
    /valeting|valet|van/.test(i.title.toLowerCase()),
  );

  // Fallback: if a subset is empty, use top 6 images
  const fallback = (arr: ImageEntry[]) => (arr.length ? arr : all.slice(0, 6));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- ── Gallery hub: all images ─────────────────────────────────────────── -->${urlEntry(`${BASE}/gallery`, 'monthly', '0.8', all, today)}${urlEntry(`${BASE}/gallery/detailing`, 'monthly', '0.7', fallback(detailing), today)}${urlEntry(`${BASE}/gallery/valeting`, 'monthly', '0.7', fallback(valeting), today)}

  <!-- ── Manchester service pages ────────────────────────────────────────── -->${urlEntry(`${BASE}/manchester/car-detailing`, 'weekly', '0.9', fallback(detailing), today)}${urlEntry(`${BASE}/manchester/car-detailing/ceramic-coating`, 'monthly', '0.8', fallback(ceramic), today)}${urlEntry(`${BASE}/manchester/car-detailing/interior-detailing`, 'monthly', '0.8', fallback(interior), today)}${urlEntry(`${BASE}/manchester/car-detailing/exterior-detailing`, 'monthly', '0.8', fallback(exterior), today)}${urlEntry(`${BASE}/manchester/car-valeting`, 'weekly', '0.9', fallback(valeting), today)}${urlEntry(`${BASE}/manchester/car-valeting/mobile-valeting`, 'monthly', '0.8', fallback(valeting), today)}

  <!-- ── Stockport service pages ─────────────────────────────────────────── -->${urlEntry(`${BASE}/stockport/car-detailing`, 'weekly', '0.8', fallback(detailing), today)}${urlEntry(`${BASE}/stockport/car-detailing/ceramic-coating`, 'monthly', '0.7', fallback(ceramic), today)}${urlEntry(`${BASE}/stockport/car-valeting`, 'weekly', '0.8', fallback(valeting), today)}

  <!-- ── Wilmslow service pages ──────────────────────────────────────────── -->${urlEntry(`${BASE}/wilmslow/car-detailing`, 'weekly', '0.8', fallback(detailing), today)}${urlEntry(`${BASE}/wilmslow/car-detailing/ceramic-coating`, 'monthly', '0.7', fallback(ceramic), today)}${urlEntry(`${BASE}/wilmslow/car-valeting`, 'weekly', '0.8', fallback(valeting), today)}

  <!-- ── Warrington service pages ────────────────────────────────────────── -->${urlEntry(`${BASE}/warrington/car-detailing`, 'weekly', '0.8', fallback(detailing), today)}${urlEntry(`${BASE}/warrington/car-valeting`, 'weekly', '0.8', fallback(valeting), today)}

  <!-- ── Homepage ────────────────────────────────────────────────────────── -->${urlEntry(BASE, 'weekly', '1.0', all.slice(0, 8), today)}

</urlset>`;

  return new NextResponse(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  });
}
