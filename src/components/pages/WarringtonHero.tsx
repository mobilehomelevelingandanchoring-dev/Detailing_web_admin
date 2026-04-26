"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, Car, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Warrington hero images — mobile van + Manchester gallery images (no Warrington-specific shots)
// WA postcodes: motorway-grime market; mobile service emphasis is the key visual story
const heroImages = [
  {
    src: "/images/gallery/mobile-van.webp.webp",
    alt: "SRV Detailing fully equipped mobile van serving Warrington — professional car detailing and valeting across WA postcodes and Cheshire",
  },
  {
    src: "/images/gallery/srv-detailing-mobile-car-detailing-manchester-04.webp.webp",
    alt: "SRV Detailing mobile car detailing service in Warrington — expert paint correction and ceramic coating delivered to your driveway",
  },
  {
    src: "/images/gallery/srv-detailing-ceramic-coating-manchester-02.webp.webp",
    alt: "SRV Detailing professional ceramic coating near Warrington — long-lasting SiO2 paint protection for vehicles across Cheshire and Greater Manchester",
  },
];

export function WarringtonHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % heroImages.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 lg:pt-24 pb-12 overflow-hidden">
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

      {/* Dark overlay — left-weighted for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40 z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-300">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 inline" />
              </li>
              <li className="text-white font-medium">Warrington</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            Serving All of Warrington &amp; Surrounding Areas
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Professional Car Detailing &amp; Valeting in{" "}
            <span className="text-primary">Warrington</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed font-medium">
            SRV Detailing brings professional mobile car care directly to
            Warrington. From ceramic coatings and paint correction to full
            valets and interior deep cleans, we deliver over 22 years of
            expertise to your driveway, workplace or car park — anywhere
            across Warrington and the surrounding Cheshire area.
          </p>

          <p className="text-base text-gray-300 mb-10 leading-relaxed">
            Sitting at the junction of the M6, M62 and M56, Warrington
            vehicles face some of the heaviest motorway grime and
            contamination in the north-west. Whether you commute through
            Birchwood or keep a classic in Stockton Heath, our fully
            equipped mobile unit delivers showroom-quality results without
            the hassle of dropping your car off.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-bold shadow-lg"
              asChild
            >
              <a href="tel:+447375759686">
                <Phone className="w-5 h-5 mr-2" />
                Call 07375 759686
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-bold bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
              asChild
            >
              <Link href="/booking">Book Online</Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-300 font-medium">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Based in Stockport
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              7 Days a Week
            </span>
            <span className="flex items-center gap-2">
              <Car className="w-4 h-4 text-primary" />
              Fully Mobile
            </span>
          </div>

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
      </div>
    </section>
  );
}
