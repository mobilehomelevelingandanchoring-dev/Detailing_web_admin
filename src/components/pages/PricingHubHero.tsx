"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Pricing page hero: show the quality that justifies the investment
// Mix of ceramic (premium/protection), exterior (visible results), valeting (value)
const heroImages = [
  {
    src: "/images/gallery/srv-detailing-ceramic-coating-manchester-01.webp.webp",
    alt: "SRV Detailing ceramic coating in Manchester — premium SiO2 paint protection with transparent, competitive pricing",
  },
  {
    src: "/images/gallery/srv-detailing-exterior-car-detailing-manchester-01.webp.webp",
    alt: "SRV Detailing exterior car detailing Manchester — professional paint correction and protection at honest prices",
  },
  {
    src: "/images/gallery/srv-detailing-mobile-car-valeting-manchester-stockport-01.webp.webp",
    alt: "SRV Detailing mobile car valeting Stockport and Manchester — transparent pricing, no hidden costs, 7 days a week",
  },
];

export function PricingHubHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % heroImages.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[55vh] flex items-center pt-24 pb-12 overflow-hidden">
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
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30 z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
          Transparent Pricing — No Hidden Costs
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-lg">
          Car Detailing &amp; Valeting Prices —{" "}
          <span className="text-primary">Manchester &amp; Stockport</span>
        </h1>

        <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
          Honest, fixed pricing for professional mobile car care. Every package
          is quoted upfront — call or book online and we&apos;ll confirm your
          price before we start.
        </p>

        {/* Rotation indicators */}
        <div
          className="flex gap-2 mt-8"
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
