"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Stockport-primary, then broader Manchester/Greater Manchester images
const heroImages = [
  {
    src: "/images/gallery/srv-detailing-ceramic-coating-stockport-01.webp.webp",
    alt: "SRV Detailing mobile ceramic coating in Stockport — mirror-like gloss and long-lasting SiO2 paint protection applied at your home",
  },
  {
    src: "/images/gallery/srv-detailing-car-detailing-greater-manchester-stockport-01.webp.webp",
    alt: "SRV Detailing professional mobile car detailing in Stockport and Greater Manchester — showroom-quality finish delivered to your driveway",
  },
  {
    src: "/images/gallery/srv-detailing-interior-car-cleaning-manchester-01.webp.webp",
    alt: "SRV Detailing mobile interior car cleaning in Manchester — deep vacuum, leather conditioning, and full trim dressing at your location",
  },
];

export function GalleryHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % heroImages.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[55vh] flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden text-white text-center">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/72 to-black/80 z-10" />

      <div className="relative z-20 w-full max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white font-medium" aria-current="page">
              Gallery
            </li>
          </ol>
        </nav>

        <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-5">
          Our Work
        </span>

        {/* H1 — primary keyword: mobile + service type + Stockport first */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto leading-tight drop-shadow-lg">
          Mobile Car Detailing &amp; Valeting Gallery —{" "}
          <span className="text-primary">Stockport &amp; Manchester</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium mb-6">
          Real results from SRV Detailing&apos;s mobile team — ceramic coating, paint
          correction, and valeting delivered to your driveway across Stockport, Manchester &amp;
          Greater Manchester.
        </p>

        {/* Rotation indicators */}
        <div
          className="flex gap-2 justify-center"
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
