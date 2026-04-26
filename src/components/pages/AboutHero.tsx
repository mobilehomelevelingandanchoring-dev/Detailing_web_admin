"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// About page hero: brand storytelling + trust signals
// Images chosen to show the full scope of SRV's work — van (mobile credibility), ceramic (premium),
// and active detailing (people see the process) — Stockport/Manchester ALT text for local SEO
const heroImages = [
  {
    src: "/images/gallery/mobile-van.webp.webp",
    alt: "SRV Detailing fully equipped mobile van — professional car detailing and valeting delivered to homes and businesses across Manchester and Stockport",
  },
  {
    src: "/images/gallery/srv-detailing-ceramic-coating-stockport-01.webp.webp",
    alt: "SRV Detailing ceramic coating application in Stockport — 22 years of accredited SiO2 paint protection expertise serving Greater Manchester",
  },
  {
    src: "/images/gallery/srv-detailing-car-detailing-greater-manchester-stockport-01.webp.webp",
    alt: "SRV Detailing professional car detailing in Greater Manchester and Stockport — showroom-quality results delivered to your driveway since 2003",
  },
];

export function AboutHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % heroImages.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center bg-gray-900 pt-24 overflow-hidden">
      {/* Rotating gallery background */}
      {heroImages.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== activeIndex}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover brightness-50"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay — uniform dark to keep text readable across all images */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 container mx-auto px-6 text-white max-w-6xl">
        <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full font-medium mb-4">
          Established 2003
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
          Professional Car Detailing Experts Serving Manchester &amp; Stockport
          Since 2003
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed text-gray-200">
          Twenty-two years of trusted mobile valeting, ceramic coating
          accreditation, and a commitment to excellence that keeps
          Manchester&apos;s finest vehicles looking showroom-perfect.
        </p>

        {/* Rotation indicators */}
        <div
          className="flex gap-2 mt-4"
          role="tablist"
          aria-label="Hero image navigation"
        >
          {heroImages.map((img, i) => (
            <button
              key={img.src}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Image ${i + 1}: ${img.alt}`}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-8 bg-white"
                  : "w-3 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
