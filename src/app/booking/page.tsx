import Image from "next/image";
import { Calendar, Clock, Car, MapPin, Phone, Shield, Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import BookingHeroCarousel from "@/components/BookingHeroCarousel";
import BookingForm from "@/components/BookingForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Mobile Car Detailing & Valeting | SRV Detailing",
  description:
    "Book your professional mobile car valeting or detailing service in Manchester and Stockport. Same-day and next-day appointments available, 7 days a week.",
  alternates: {
    canonical: "https://www.srvdetailing.co.uk/booking",
  },
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* ── Hero ── Client carousel extracted to its own small component */}
      <BookingHeroCarousel />

      {/* ── Main content ── */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Complete Your Booking
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
              Schedule your professional car detailing or valeting — our mobile team comes to you.
            </p>
          </div>

          {/* Form + sidebar */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="lg:flex">

              {/* ── Booking Form ── */}
              <div className="lg:w-2/3 p-5 lg:p-8">
                <p className="text-gray-600 text-sm mb-6">
                  Fill out the form below and we&apos;ll contact you within 2 hours to confirm your appointment.
                </p>
                <BookingForm />
              </div>

              {/* ── Info Sidebar ── static, no JS needed ── */}
              <aside className="lg:w-1/3 bg-gray-50 border-t lg:border-t-0 lg:border-l border-gray-200 p-5 lg:p-6 space-y-5">
                <h3 className="text-lg font-bold text-gray-900">Service Info</h3>

                <div className="space-y-4 text-sm">
                  <InfoRow icon={<MapPin className="w-4 h-4 text-[#0A5A3B]" />} title="Service Areas">
                    Manchester, Stockport, Tameside &amp; nearby postcodes
                  </InfoRow>

                  <InfoRow icon={<Clock className="w-4 h-4 text-[#0A5A3B]" />} title="Working Hours">
                    Open 24/7 — Every Day
                  </InfoRow>

                  <InfoRow icon={<Phone className="w-4 h-4 text-[#0A5A3B]" />} title="Contact">
                    <a href="tel:+447375759686" className="hover:text-[#0A5A3B] transition-colors font-medium">
                      07375 759686
                    </a>
                    <br />
                    <a href="mailto:srv_detailing@icloud.com" className="hover:text-[#0A5A3B] transition-colors break-all">
                      srv_detailing@icloud.com
                    </a>
                  </InfoRow>

                  <InfoRow icon={<Car className="w-4 h-4 text-[#0A5A3B]" />} title="Popular Services">
                    <ul className="space-y-0.5 text-gray-600 mt-0.5">
                      <li>Full Valet — <strong>£90</strong></li>
                      <li>Maintenance Valet — <strong>£45</strong></li>
                      <li>Car Detailing — <strong>£120</strong></li>
                      <li>Ceramic Coating — <strong>£300</strong></li>
                      <li>Paint Correction — <strong>£250</strong></li>
                    </ul>
                  </InfoRow>

                  <InfoRow icon={<Shield className="w-4 h-4 text-[#0A5A3B]" />} title="Our Promise">
                    Fully insured, self-contained mobile unit. No mains water or power needed.
                  </InfoRow>
                </div>

                {/* Testimonial */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex gap-0.5 mb-2" aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-gray-600 italic">
                    &ldquo;Outstanding service! My car looks brand new. Highly recommend SRV Detailing.&rdquo;
                  </blockquote>
                  <p className="text-sm font-medium text-gray-900 mt-1">— Sarah M., Stockport</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <div className="mt-0.5 flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-0.5">{title}</h4>
        <div className="text-gray-600 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
