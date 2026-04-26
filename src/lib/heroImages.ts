/**
 * heroImages.ts
 * Centralised image selection for rotating gallery heroes on pillar and service pages.
 * Maps location + service slug → 3 gallery images with geo-targeted ALT text.
 *
 * Strategy:
 *  - Stockport: Stockport-named images first (strongest local SEO signal)
 *  - Manchester: Manchester-named images
 *  - Wilmslow: ceramic/premium images (SK9 luxury market)
 *  - Warrington: mobile van + Manchester images (no Warrington-specific gallery shots yet)
 *  - Service-type images are matched to the visual content on the page
 */

const BASE = '/images/gallery/';

export interface HeroImage {
  src: string;
  alt: string;
}

const IMG: Record<string, HeroImage> = {
  ceramicStockport: {
    src: BASE + 'srv-detailing-ceramic-coating-stockport-01.webp.webp',
    alt: 'SRV Detailing mobile ceramic coating in Stockport — SiO2 paint protection applied at your driveway across all SK postcodes',
  },
  ceramicMcrStockport: {
    src: BASE + 'srv-detailing-ceramic-coating-manchester-stockport-01.webp.webp',
    alt: 'SRV Detailing mobile ceramic coating serving Stockport and Greater Manchester — expert SiO2 application at your door',
  },
  ceramicMcr1: {
    src: BASE + 'srv-detailing-ceramic-coating-manchester-01.webp.webp',
    alt: 'SRV Detailing ceramic coating Manchester — hydrophobic SiO2 protection bonded to your clear coat',
  },
  ceramicMcr2: {
    src: BASE + 'srv-detailing-ceramic-coating-manchester-02.webp.webp',
    alt: 'SRV Detailing professional ceramic coating in Manchester — long-lasting paint protection with UV and chemical resistance',
  },
  ceramicMcr3: {
    src: BASE + 'srv-detailing-ceramic-coating-manchester-03.webp.webp',
    alt: 'SRV Detailing premium ceramic coating application — mirror-like gloss and chemical resistance for luxury vehicles',
  },
  ceramicMcr5: {
    src: BASE + 'srv-detailing-ceramic-coating-manchester-05.webp.webp',
    alt: 'SRV Detailing luxury ceramic coating Manchester — showroom-quality SiO2 protection delivered to your driveway',
  },
  carDetailingStockport1: {
    src: BASE + 'srv-detailing-car-detailing-greater-manchester-stockport-01.webp.webp',
    alt: 'SRV Detailing professional car detailing in Stockport and Greater Manchester — showroom finish delivered to your driveway',
  },
  carDetailingStockport2: {
    src: BASE + 'srv-detailing-car-detailing-greater-manchester-stockport-02.webp.webp',
    alt: 'SRV Detailing mobile car detailing Greater Manchester — expert paint correction and protection across SK postcodes',
  },
  mobileValetingStockport: {
    src: BASE + 'srv-detailing-mobile-car-valeting-manchester-stockport-01.webp.webp',
    alt: 'SRV Detailing mobile car valeting serving Stockport and Manchester — professional wash and valet at your door',
  },
  interiorMcr1: {
    src: BASE + 'srv-detailing-interior-car-cleaning-manchester-01.webp.webp',
    alt: 'SRV Detailing mobile interior car cleaning Manchester — deep vacuum, leather conditioning and full trim dressing at your location',
  },
  interiorMcr3: {
    src: BASE + 'srv-detailing-interior-car-cleaning-manchester-03.webp.webp',
    alt: 'SRV Detailing professional interior detailing — steam extraction, odour removal and leather treatment across Greater Manchester',
  },
  exteriorMcr: {
    src: BASE + 'srv-detailing-exterior-car-detailing-manchester-01.webp.webp',
    alt: 'SRV Detailing mobile exterior car detailing Manchester — clay bar decontamination, paint protection and panel polish',
  },
  polishingMcr: {
    src: BASE + 'srv-detailing-car-polishing-manchester-01.webp.webp',
    alt: 'SRV Detailing professional car polishing Manchester — machine polish to remove swirl marks, scratches and paint haze',
  },
  valetingMcr: {
    src: BASE + 'srv-detailing-car-valeting-manchester-02.webp.webp',
    alt: 'SRV Detailing professional mobile car valeting Manchester — showroom-quality cleaning and protection at your door',
  },
  mobileMcr1: {
    src: BASE + 'srv-detailing-mobile-car-detailing-manchester-01.webp.webp',
    alt: 'SRV Detailing mobile car detailing Manchester — professional service delivered to your driveway',
  },
  mobileMcr2: {
    src: BASE + 'srv-detailing-mobile-car-detailing-manchester-02.webp.webp',
    alt: 'SRV Detailing mobile car detailing Greater Manchester — expert paint correction and valeting at your location',
  },
  mobileMcr3: {
    src: BASE + 'srv-detailing-mobile-car-detailing-manchester-03.webp.webp',
    alt: 'SRV Detailing mobile detailing service Manchester — fully equipped van brings professional results to you',
  },
  mobileMcr4: {
    src: BASE + 'srv-detailing-mobile-car-detailing-manchester-04.webp.webp',
    alt: 'SRV Detailing mobile car detailing van Greater Manchester — professional equipment, no travel needed',
  },
  mobileMcr5: {
    src: BASE + 'srv-detailing-mobile-car-detailing-manchester-05.webp.webp',
    alt: 'SRV Detailing mobile car detailing service — ceramic coating, paint correction and valeting across Greater Manchester',
  },
  mobileVan: {
    src: BASE + 'mobile-van.webp.webp',
    alt: 'SRV Detailing fully equipped mobile van — professional car detailing and valeting across Greater Manchester and Cheshire',
  },
};

/**
 * Returns 3 gallery images for a rotating hero section, selected by location + service slug.
 * Used by PillarPageTemplate and ServicePageTemplate automatically.
 * Data files can override via heroImages?: HeroImage[] for page-specific tuning.
 */
export function getServiceHeroImages(location: string, serviceSlug: string): HeroImage[] {
  const loc = location.toLowerCase();
  const svc = serviceSlug.toLowerCase();

  const isStockport = loc.includes('stockport');
  const isWilmslow = loc.includes('wilmslow');
  const isWarrington = loc.includes('warrington');
  // Manchester is the default (also covers 'greater manchester')

  // ── Ceramic coating ──────────────────────────────────────────────────────────
  if (svc.includes('ceramic')) {
    if (isStockport) return [IMG.ceramicStockport, IMG.ceramicMcr1, IMG.ceramicMcrStockport];
    if (isWilmslow) return [IMG.ceramicMcr3, IMG.ceramicMcr5, IMG.ceramicMcrStockport];
    if (isWarrington) return [IMG.ceramicMcr2, IMG.ceramicMcr3, IMG.mobileVan];
    return [IMG.ceramicMcr1, IMG.ceramicMcr2, IMG.ceramicMcr3]; // manchester
  }

  // ── Interior services (interior detailing, leather, upholstery, odour, pet hair) ──
  if (
    svc.includes('interior') ||
    svc.includes('leather') ||
    svc.includes('upholstery') ||
    svc.includes('odour') ||
    svc.includes('pet-hair') ||
    svc.includes('pet_hair')
  ) {
    if (isStockport) return [IMG.interiorMcr1, IMG.mobileValetingStockport, IMG.interiorMcr3];
    return [IMG.interiorMcr1, IMG.interiorMcr3, IMG.mobileMcr1];
  }

  // ── Paint correction, swirl mark removal, polishing, headlight restoration ──
  if (
    svc.includes('paint-correction') ||
    svc.includes('paint_correction') ||
    svc.includes('swirl') ||
    svc.includes('headlight') ||
    svc.includes('polish')
  ) {
    if (isStockport)
      return [IMG.polishingMcr, IMG.ceramicStockport, IMG.carDetailingStockport1];
    return [IMG.polishingMcr, IMG.exteriorMcr, IMG.ceramicMcr1];
  }

  // ── Exterior detailing, engine bay ──────────────────────────────────────────
  if (svc.includes('exterior') || svc.includes('engine')) {
    if (isStockport)
      return [IMG.exteriorMcr, IMG.carDetailingStockport1, IMG.ceramicStockport];
    return [IMG.exteriorMcr, IMG.mobileMcr2, IMG.ceramicMcr1];
  }

  // ── New car protection ───────────────────────────────────────────────────────
  if (svc.includes('new-car') || svc.includes('new_car') || svc.includes('protection')) {
    if (isStockport) return [IMG.ceramicStockport, IMG.ceramicMcrStockport, IMG.carDetailingStockport1];
    if (isWilmslow) return [IMG.ceramicMcr3, IMG.ceramicMcr5, IMG.ceramicMcrStockport];
    return [IMG.ceramicMcr1, IMG.ceramicMcr2, IMG.mobileMcr1];
  }

  // ── Valeting services (pillar + full/mini/exterior/mobile/car-wash) ──────────
  if (
    svc.includes('valet') ||
    svc.includes('car-wash') ||
    svc.includes('car_wash') ||
    svc.includes('mini-valet') ||
    svc.includes('full-valet') ||
    svc.includes('mobile-valet')
  ) {
    if (isStockport) return [IMG.mobileValetingStockport, IMG.valetingMcr, IMG.mobileMcr1];
    if (isWarrington) return [IMG.mobileVan, IMG.valetingMcr, IMG.mobileMcr4];
    if (isWilmslow) return [IMG.valetingMcr, IMG.ceramicMcr3, IMG.mobileMcr1];
    return [IMG.valetingMcr, IMG.mobileValetingStockport, IMG.mobileMcr1];
  }

  // ── Car detailing pillar / generic detailing ─────────────────────────────────
  if (svc.includes('car-detailing') || svc.includes('car_detailing') || svc.includes('detailing')) {
    if (isStockport)
      return [IMG.ceramicStockport, IMG.carDetailingStockport1, IMG.mobileValetingStockport];
    if (isWilmslow) return [IMG.ceramicMcr3, IMG.ceramicMcr5, IMG.carDetailingStockport1];
    if (isWarrington) return [IMG.mobileVan, IMG.mobileMcr4, IMG.mobileMcr5];
    return [IMG.mobileMcr1, IMG.ceramicMcr1, IMG.interiorMcr1]; // manchester
  }

  // ── Fallback ─────────────────────────────────────────────────────────────────
  if (isStockport)
    return [IMG.carDetailingStockport1, IMG.ceramicStockport, IMG.mobileValetingStockport];
  if (isWilmslow) return [IMG.ceramicMcr3, IMG.carDetailingStockport1, IMG.ceramicMcr5];
  if (isWarrington) return [IMG.mobileVan, IMG.mobileMcr4, IMG.mobileMcr2];
  return [IMG.mobileMcr1, IMG.carDetailingStockport1, IMG.ceramicMcr1];
}
