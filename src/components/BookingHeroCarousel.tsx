'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, Car, Clock, Phone } from 'lucide-react';

const IMAGES = [
  {
    src: '/images/gallery/srv-detailing-ceramic-coating-stockport-01.webp.webp',
    alt: 'SRV Detailing mobile ceramic coating in Stockport — professional SiO2 paint protection applied at your home or workplace',
  },
  {
    src: '/images/gallery/srv-detailing-mobile-car-valeting-manchester-stockport-01.webp.webp',
    alt: 'SRV Detailing mobile car valeting across Stockport and Manchester — professional full valet service at your driveway',
  },
  {
    src: '/images/gallery/srv-detailing-mobile-car-detailing-manchester-02.webp.webp',
    alt: 'SRV Detailing fully self-contained mobile car detailing unit on a Manchester driveway',
  },
];

export default function BookingHeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % IMAGES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[52vh] flex items-center pt-20 pb-10 overflow-hidden text-white">
      {/* Only render the active image in full; preload next with low priority */}
      {IMAGES.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== active}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            // Only the first image is priority-loaded; others lazy until needed
            priority={i === 0}
            loading={i === 0 ? undefined : 'lazy'}
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/70 to-black/40 z-10" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-5">
            <MapPin className="w-4 h-4 text-primary" />
            Mobile Service — Stockport &amp; Manchester
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Book Your SRV Detailing Mobile Car Service —{' '}
            <span className="text-primary">Stockport &amp; Manchester</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-200 mb-3 leading-relaxed font-medium">
            Professional mobile car detailing, valeting, and ceramic coating brought directly to
            your home or workplace. Covering Stockport, Manchester, and all Greater Manchester
            postcodes — no garage visit required.
          </p>

          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            Our fully self-contained mobile unit carries its own water, power, and
            professional-grade equipment. Fill out the form below and we&apos;ll confirm your
            appointment — 7 days a week, 22+ years of expertise.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-300 font-medium">
            <span className="flex items-center gap-2">
              <Car className="w-4 h-4 text-primary" />
              Fully Mobile
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              7 Days a Week
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+447375759686" className="hover:text-white transition-colors">
                07375 759686
              </a>
            </span>
          </div>

          {/* Dot navigation */}
          <div className="flex gap-2 mt-6" role="tablist" aria-label="Hero image navigation">
            {IMAGES.map((img, i) => (
              <button
                key={img.src}
                role="tab"
                aria-selected={i === active}
                aria-label={`Image ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-white' : 'w-3 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
