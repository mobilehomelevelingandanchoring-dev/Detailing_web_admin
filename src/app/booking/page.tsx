'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, Car, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";

// ── Hero images — Stockport-primary, Manchester-secondary ─────────────────────
const bookingHeroImages = [
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
    alt: 'SRV Detailing fully self-contained mobile car detailing unit on a Manchester driveway — no mains water or power needed',
  },
];

export default function BookingPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % bookingHeroImages.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[52vh] flex items-center pt-20 pb-10 overflow-hidden text-white">
        {/* Rotating gallery background */}
        {bookingHeroImages.map((img, i) => (
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

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/70 to-black/40 z-10" />

        {/* Hero content */}
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

            {/* Rotation indicators */}
            <div className="flex gap-2 mt-6" role="tablist" aria-label="Hero image navigation">
              {bookingHeroImages.map((img, i) => (
                <button
                  key={img.src}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Image ${i + 1}`}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-8 bg-white' : 'w-3 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Complete Your Booking
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
              Schedule your professional car detailing or valeting service with our mobile team
            </p>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="lg:flex">
              
              {/* Form Section */}
              <div className="lg:w-2/3 p-5 lg:p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Fill out the form below and we&apos;ll contact you to confirm your appointment.
                </p>

                <div className="w-full">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfQ_psKKr32ImlSywvgWqqASJM-AReOWnmKzk7Wrr47TOD7nw/viewform?embedded=true"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="rounded-xl border border-gray-200 shadow-sm"
                    title="Booking Form"
                  >
                    Loading…
                  </iframe>
                </div>

                <div className="mt-2 text-xs text-gray-500">
                  <p>
                    Can't see the form? <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQ_psKKr32ImlSywvgWqqASJM-AReOWnmKzk7Wrr47TOD7nw/viewform" target="_blank" rel="noopener noreferrer" className="text-[#0A5A3B] hover:underline">Open it in a new tab</a>
                  </p>
                </div>
              </div>

              {/* Info Sidebar */}
              <div className="lg:w-1/3 bg-gray-50 p-5 lg:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Service Info</h3>

                <div className="space-y-3 text-xs md:text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#0A5A3B] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Service Areas</h4>
                      <p className="text-gray-600">Manchester, Stockport, Tameside & nearby</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[#0A5A3B] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Working Hours</h4>
                      <p className="text-gray-600">Mon-Sun: 8 AM - 8 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-[#0A5A3B] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Contact</h4>
                      <p className="text-gray-600">+44 7375 759686</p>
                      <p className="text-gray-600">srv_detailing@icloud.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Car className="w-4 h-4 text-[#0A5A3B] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Popular Services</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 mt-1">
                        <li>Full Valet (£60)</li>
                        <li>Mini Valet (£40)</li>
                        <li>Car Detailing (£120)</li>
                        <li>Ceramic Coating (£300)</li>
                        <li>Paint Correction (£250)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">Customer Feedback</h4>
                  <div className="bg-white rounded-lg p-2 shadow-sm text-xs md:text-sm">
                    <p className="text-gray-600 italic">"Outstanding service! My car looks brand new. Highly recommend SRV Detailing."</p>
                    <p className="text-gray-900 font-medium mt-1">- Sarah M.</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}