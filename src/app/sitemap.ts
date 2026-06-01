import { MetadataRoute } from 'next';
import { getAllGuideSlugs } from '@/data/guides/guides-data';
import { getAllComparisonSlugs } from '@/data/compare/comparisons-data';
import { getAllManchesterAreaSlugs } from '@/data/manchester/areas/areas-data';
import { getAllStockportAreaSlugs } from '@/data/stockport/areas/areas-data';
import { getAllWilmslowAreaSlugs } from '@/data/wilmslow/areas/areas-data';
import { faqTopicsData } from '@/data/faq/faq-data';
import { getAllBlogSlugs } from '@/data/blog/blog-data';

const BASE = 'https://www.srvdetailing.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static core pages
  const corePages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/about-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/locations`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE}/booking`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Manchester hub + pillars + all services
  const manchesterPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/manchester`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/manchester/reviews`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/manchester/car-wash`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Car Detailing pillar + services
    { url: `${BASE}/manchester/car-detailing`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/manchester/car-detailing/ceramic-coating`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-detailing/paint-correction`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-detailing/interior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-detailing/new-car-protection`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-detailing/exterior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-detailing/engine-bay-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/manchester/car-detailing/headlight-restoration`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/manchester/car-detailing/leather-conditioning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/manchester/car-detailing/swirl-mark-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/manchester/car-detailing/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Car Valeting pillar + services
    { url: `${BASE}/manchester/car-valeting`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/manchester/car-valeting/full-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-valeting/mini-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-valeting/mobile-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-valeting/interior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-valeting/exterior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-valeting/pet-hair-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/manchester/car-valeting/odour-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/manchester/car-valeting/upholstery-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/manchester/car-valeting/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Manchester areas (dynamic)
  const manchesterAreaPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/manchester/areas`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...getAllManchesterAreaSlugs().map((slug) => ({
      url: `${BASE}/manchester/areas/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  // Wilmslow hub + pillars + all services
  const wilmslowPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/wilmslow`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/wilmslow/reviews`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/wilmslow/car-wash`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Car Detailing pillar + services
    { url: `${BASE}/wilmslow/car-detailing`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/wilmslow/car-detailing/ceramic-coating`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-detailing/paint-correction`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-detailing/interior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-detailing/new-car-protection`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-detailing/exterior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-detailing/engine-bay-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wilmslow/car-detailing/headlight-restoration`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wilmslow/car-detailing/leather-conditioning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wilmslow/car-detailing/swirl-mark-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wilmslow/car-detailing/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Car Valeting pillar + services
    { url: `${BASE}/wilmslow/car-valeting`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/wilmslow/car-valeting/full-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-valeting/mini-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-valeting/mobile-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-valeting/interior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-valeting/exterior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-valeting/pet-hair-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wilmslow/car-valeting/odour-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wilmslow/car-valeting/upholstery-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wilmslow/car-valeting/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Wilmslow areas (dynamic)
  const wilmslowAreaPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/wilmslow/areas`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...getAllWilmslowAreaSlugs().map((slug) => ({
      url: `${BASE}/wilmslow/areas/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  // Warrington hub + service silos
  const warringtonPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/warrington`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    // Car Detailing pillar + Phase 2 subservices
    { url: `${BASE}/warrington/car-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/warrington/car-detailing/ceramic-coating`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/warrington/car-detailing/paint-correction`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/warrington/car-detailing/interior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/warrington/car-detailing/exterior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Car Valeting pillar + Phase 2 subservices
    { url: `${BASE}/warrington/car-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/warrington/car-valeting/full-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/warrington/car-valeting/mini-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/warrington/car-valeting/mobile-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Stockport hub + pillars + all services
  const stockportPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/stockport`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/stockport/reviews`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/stockport/car-wash`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Car Detailing
    { url: `${BASE}/stockport/car-detailing`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/stockport/car-detailing/ceramic-coating`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-detailing/paint-correction`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-detailing/headlight-restoration`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-detailing/new-car-protection`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-detailing/interior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-detailing/exterior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-detailing/swirl-mark-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-detailing/engine-bay-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-detailing/leather-conditioning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-detailing/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Car Valeting
    { url: `${BASE}/stockport/car-valeting`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/stockport/car-valeting/full-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-valeting/mini-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-valeting/interior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-valeting/exterior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-valeting/mobile-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-valeting/pet-hair-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-valeting/odour-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-valeting/upholstery-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-valeting/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Stockport areas (dynamic)
  const stockportAreaPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/stockport/areas`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...getAllStockportAreaSlugs().map((slug) => ({
      url: `${BASE}/stockport/areas/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  // Poynton area hub + dedicated service silos (static pages — SK12 location cluster)
  const poyntonPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/stockport/areas/poynton`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Car Detailing hub + services
    { url: `${BASE}/stockport/areas/poynton/car-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/stockport/areas/poynton/car-detailing/ceramic-coating`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-detailing/paint-correction`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-detailing/headlight-restoration`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-detailing/new-car-protection`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-detailing/interior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-detailing/exterior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-detailing/swirl-mark-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-detailing/engine-bay-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-detailing/leather-conditioning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Car Valeting hub + services
    { url: `${BASE}/stockport/areas/poynton/car-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/stockport/areas/poynton/car-valeting/full-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-valeting/mini-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-valeting/interior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-valeting/exterior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-valeting/mobile-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-valeting/pet-hair-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-valeting/odour-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-valeting/upholstery-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Guides (dynamic)
  const guidePages: MetadataRoute.Sitemap = [
    { url: `${BASE}/guides`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...getAllGuideSlugs().map((slug) => ({
      url: `${BASE}/guides/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  // Compare (dynamic)
  const comparePages: MetadataRoute.Sitemap = [
    { url: `${BASE}/compare`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...getAllComparisonSlugs().map((slug) => ({
      url: `${BASE}/compare/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  // Pricing
  const pricingPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/pricing/car-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/pricing/car-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // FAQ (dynamic)
  const faqPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...faqTopicsData.map((topic) => ({
      url: `${BASE}/faq/${topic.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  // Blog (dynamic)
  const blogPages: MetadataRoute.Sitemap = [
    ...getAllBlogSlugs().map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];

  // Gallery
  const galleryPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/gallery/detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/gallery/valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  return [
    ...corePages,
    ...manchesterPages,
    ...manchesterAreaPages,
    ...wilmslowPages,
    ...wilmslowAreaPages,
    ...warringtonPages,
    ...stockportPages,
    ...stockportAreaPages,
    ...poyntonPages,
    ...guidePages,
    ...comparePages,
    ...pricingPages,
    ...faqPages,
    ...blogPages,
    ...galleryPages,
  ];
}
