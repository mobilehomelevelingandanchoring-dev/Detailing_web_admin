"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import type { BreadcrumbItem } from '@/data/types';
import { PHONE, PHONE_DISPLAY } from '@/data/constants';

export interface HeroImage {
  src: string;
  alt: string;
}

interface HeroSectionProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description: string;
  badge?: string;
  /**
   * Set to true when the parent template outputs BreadcrumbList inside a
   * consolidated @graph block (via generatePageSchema). Prevents duplicate
   * BreadcrumbList scripts on the same page.
   * @default false
   */
  suppressBreadcrumbSchema?: boolean;
  /**
   * Optional gallery images for the hero background.
   * - 1 image  → static full-bleed background
   * - 2+ images → auto-rotating carousel (6s interval, CSS fade)
   * - omitted   → falls back to the existing dark gradient design
   */
  heroImages?: HeroImage[];
}

export function HeroSection({
  breadcrumbs,
  title,
  description,
  badge,
  suppressBreadcrumbSchema = false,
  heroImages,
}: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasImages = heroImages && heroImages.length > 0;
  const isRotating = heroImages && heroImages.length > 1;

  useEffect(() => {
    if (!isRotating) return;
    const id = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % heroImages.length),
      6000,
    );
    return () => clearInterval(id);
  }, [isRotating, heroImages]);

  /* ── Image-backed hero ──────────────────────────────────────────────── */
  if (hasImages) {
    return (
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-12 overflow-hidden text-white">
        {/* Rotating / static gallery background */}
        {heroImages.map((img, i) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={i !== activeIndex}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Dark overlay — left-heavy for readable text on any image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30 z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <Breadcrumbs items={breadcrumbs} renderSchema={!suppressBreadcrumbSchema} />

          {badge && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mt-4 mb-4">
              {badge}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-2 leading-tight drop-shadow-lg">
            {title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed font-medium">
            {description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-gray-100 transition"
            >
              <Phone className="w-5 h-5" />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href="/booking"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-primary/80 shadow-lg hover:bg-primary/90 transition"
            >
              Book Now
            </a>
          </div>

          {/* Rotation indicators */}
          {isRotating && (
            <div className="flex gap-2 mt-8" role="tablist" aria-label="Hero image navigation">
              {heroImages.map((img, i) => (
                <button
                  key={img.src}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Image ${i + 1}: ${img.alt}`}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-8 bg-white' : 'w-3 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }

  /* ── Gradient fallback (all existing pages unchanged) ───────────────── */
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Breadcrumbs items={breadcrumbs} renderSchema={!suppressBreadcrumbSchema} />

        {badge && (
          <div className="flex items-center gap-2 mt-4 mb-2">
            <span className="text-blue-200 font-semibold">{badge}</span>
          </div>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-4 leading-tight">
          {title}
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-50 transition"
          >
            <Phone className="w-5 h-5" />
            Call {PHONE_DISPLAY}
          </a>
          <a
            href="/booking"
            className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-blue-500 shadow-lg hover:bg-blue-600 transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
