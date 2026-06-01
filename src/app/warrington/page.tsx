import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
  Shield,
  Sparkles,
  Car,
  Droplets,
  CheckCircle,
  Award,
  ChevronRight,
  Star,
  Paintbrush,
  CircleDot,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WarringtonHero } from "@/components/pages/WarringtonHero";
import detailingImage from "@/assets/paintCorrection.jpg";
import valetingImage from "@/assets/interiorCleaning.jpg";

// -----------------------------------------------------------------------------
// Metadata (Next.js Metadata API)
// -----------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Car Detailing in Warrington | Mobile Service | SRV Detailing",
  description:
    "Professional mobile car detailing and valeting across Warrington. Ceramic coating, paint correction, full valets and more across WA1–WA5. 22+ years experience. We come to you.",
  keywords: [
    "car detailing warrington",
    "car valeting warrington",
    "mobile car detailing warrington",
    "mobile car valeting warrington",
    "ceramic coating warrington",
    "paint correction warrington",
    "car cleaning warrington",
    "mobile valeting warrington",
  ],
  alternates: {
    canonical: "https://www.srvdetailing.co.uk/warrington",
  },
  openGraph: {
    title: "Car Detailing in Warrington | Mobile Service | SRV Detailing",
    description:
      "Professional mobile car detailing and valeting across Warrington. Ceramic coating, paint correction, full valets and more. 22+ years experience.",
    url: "https://www.srvdetailing.co.uk/warrington",
    type: "website",
    images: [
      "https://www.srvdetailing.co.uk/images/car-detailing-manchester.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Detailing in Warrington | SRV Detailing",
    description:
      "Professional mobile car detailing and valeting in Warrington. 22+ years experience. We come to you.",
  },
};

// -----------------------------------------------------------------------------
// JSON-LD Structured Data
// -----------------------------------------------------------------------------
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.srvdetailing.co.uk/warrington#localbusiness",
      "name": "SRV Detailing — Warrington",
      "url": "https://www.srvdetailing.co.uk/warrington",
      "telephone": "+447375759686",
      "priceRange": "££",
      "image":
        "https://www.srvdetailing.co.uk/images/car-detailing-manchester.jpg",
      "description":
        "Professional mobile car detailing and valeting across Warrington and the surrounding Cheshire area. Ceramic coating, paint correction, full valets, interior cleaning and more. Over 22 years of experience.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Globe House, Globe Lane",
        "addressLocality": "Dukinfield",
        "addressRegion": "Greater Manchester",
        "postalCode": "SK16 4RG",
        "addressCountry": "GB",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "53.3900",
        "longitude": "-2.5970",
      },
      "areaServed": [
        { "@type": "City", "name": "Warrington" },
        { "@type": "AdministrativeArea", "name": "Cheshire" },
        { "@type": "Place", "name": "Birchwood" },
        { "@type": "Place", "name": "Stockton Heath" },
        { "@type": "Place", "name": "Lymm" },
        { "@type": "Place", "name": "Great Sankey" },
        { "@type": "Place", "name": "Penketh" },
        { "@type": "Place", "name": "Grappenhall" },
      ],
      "hasMap": "https://share.google/AZFyOF2xIb3XaZetX",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59",
        },
      ],
      "sameAs": ["https://share.google/AZFyOF2xIb3XaZetX"],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.srvdetailing.co.uk/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Warrington",
          "item": "https://www.srvdetailing.co.uk/warrington",
        },
      ],
    },
    {
      "@type": "Service",
      "name": "Mobile Car Detailing & Valeting in Warrington",
      "provider": {
        "@id": "https://www.srvdetailing.co.uk/warrington#localbusiness",
      },
      "areaServed": {
        "@type": "City",
        "name": "Warrington",
      },
      "serviceType": [
        "Car Detailing",
        "Car Valeting",
        "Ceramic Coating",
        "Paint Correction",
        "Interior Valeting",
        "Exterior Valeting",
      ],
    },
  ],
};

// -----------------------------------------------------------------------------
// Data
// -----------------------------------------------------------------------------
const detailingServices = [
  {
    name: "Ceramic Coating",
    href: "/warrington/car-detailing/ceramic-coating",
    description:
      "Long-lasting paint protection against Warrington's motorway grime, road salt and damp Mersey Valley conditions. 2 to 7+ year packages available.",
    icon: Shield,
  },
  {
    name: "Paint Correction",
    href: "/warrington/car-detailing/paint-correction",
    description:
      "Multi-stage machine polishing to remove swirl marks, scratches and oxidation. Restore showroom gloss on any make or model.",
    icon: Sparkles,
  },
  {
    name: "Interior Detailing",
    href: "/warrington/car-detailing/interior-detailing",
    description:
      "Deep interior restoration including steam cleaning, leather conditioning and UV sanitisation.",
    icon: CircleDot,
  },
  {
    name: "Exterior Detailing",
    href: "/warrington/car-detailing/exterior-detailing",
    description:
      "Full exterior decontamination, clay bar treatment, machine polish and sealant application.",
    icon: Paintbrush,
  },
  {
    name: "New Car Protection",
    href: "/warrington/car-detailing/ceramic-coating",
    description:
      "Protect your new car from day one. Ceramic coating, paint protection and interior safeguarding.",
    icon: Car,
  },
  {
    name: "Headlight Restoration",
    href: "/warrington/car-detailing/paint-correction",
    description:
      "Restore clarity to oxidised, foggy headlights. Improve visibility and pass your MOT.",
    icon: Wrench,
  },
];

const valetingServices = [
  {
    name: "Full Valet",
    href: "/warrington/car-valeting/full-valet",
    description:
      "Complete interior and exterior valet — our most thorough cleaning package. 3 to 4 hours of meticulous care.",
    icon: Star,
  },
  {
    name: "Mini Valet",
    href: "/warrington/car-valeting/mini-valet",
    description:
      "Quick maintenance clean in 60 to 90 minutes. Perfect between full valets to keep your car fresh.",
    icon: Droplets,
  },
  {
    name: "Interior Valeting",
    href: "/warrington/car-valeting/full-valet",
    description:
      "Deep cabin cleaning — vacuuming, upholstery treatment, dashboard detailing and odour removal.",
    icon: CheckCircle,
  },
  {
    name: "Exterior Valeting",
    href: "/warrington/car-valeting/full-valet",
    description:
      "Professional hand wash, wheel cleaning, tyre dressing and wax protection. Safe, scratch-free methods.",
    icon: Car,
  },
  {
    name: "Mobile Valeting",
    href: "/warrington/car-valeting/mobile-valeting",
    description:
      "We come to your home, office or workplace anywhere in Warrington. Fully equipped mobile unit.",
    icon: MapPin,
  },
  {
    name: "Pet Hair Removal",
    href: "/warrington/car-valeting/full-valet",
    description:
      "Specialist extraction using compressed air, detailing brushes and professional techniques.",
    icon: Wrench,
  },
];

const warringtonAreas = [
  { name: "Town Centre", postcodes: "WA1" },
  { name: "Birchwood", postcodes: "WA3" },
  { name: "Stockton Heath", postcodes: "WA4" },
  { name: "Lymm", postcodes: "WA13" },
  { name: "Great Sankey", postcodes: "WA5" },
  { name: "Penketh", postcodes: "WA5" },
  { name: "Grappenhall", postcodes: "WA4" },
  { name: "Thelwall", postcodes: "WA4" },
  { name: "Padgate", postcodes: "WA1–WA2" },
  { name: "Fearnhead", postcodes: "WA2" },
  { name: "Winwick", postcodes: "WA2" },
  { name: "Culcheth", postcodes: "WA3" },
];

const trustPoints = [
  { icon: Award, label: "22+ Years Experience" },
  { icon: Shield, label: "Fully Insured" },
  { icon: Car, label: "Fully Mobile Service" },
  { icon: CheckCircle, label: "Premium Products Only" },
];

// -----------------------------------------------------------------------------
// Page Component
// -----------------------------------------------------------------------------
export default function WarringtonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* ----------------------------------------------------------------- */}
        {/* HERO SECTION — rotating gallery images via WarringtonHero client component */}
        {/* ----------------------------------------------------------------- */}
        <WarringtonHero />

        {/* ----------------------------------------------------------------- */}
        {/* TRUST BANNER */}
        {/* ----------------------------------------------------------------- */}
        <section className="bg-primary/5 py-8 border-y border-primary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {trustPoints.map((point) => (
                <div
                  key={point.label}
                  className="flex items-center gap-3 justify-center"
                >
                  <point.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-foreground">
                    {point.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* WHY WARRINGTON NEEDS PROFESSIONAL CAR CARE */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-center">
              Why Warrington Cars Need{" "}
              <span className="text-primary">Professional Care</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Warrington&apos;s position at the heart of the north-west
              motorway network creates unique and severe challenges for vehicle
              paintwork and interiors that ordinary car washes simply cannot
              address.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Motorway Grime & Diesel Deposits",
                  text: "At the junction of the M6, M62 and M56, Warrington vehicles are exposed to some of the highest concentrations of diesel particulates, tyre rubber and petrochemical fallout in the north-west. This contamination embeds in paintwork and requires professional decontamination to remove safely.",
                },
                {
                  title: "River Mersey Dampness & Corrosion",
                  text: "Warrington's position along the Mersey Valley means persistent humidity and damp conditions. Moisture accelerates paint etching, promotes rust on brake components and wheel arches, and leaves water-spot deposits that only professional correction reverses.",
                },
                {
                  title: "Cheshire Plain Wind & Dust",
                  text: "Open terrain to the south and east means airborne agricultural dust, pollen and contamination is carried across Warrington year-round. Fine particles act as abrasives on unprotected clear coat, creating micro-scratches visible in direct light.",
                },
                {
                  title: "Winter Road Salt on A-Roads",
                  text: "The A49, A57 and Warrington's ring roads are among the most heavily salted routes in Cheshire. Salt residue attacks wheel arches, sills and exhaust systems — areas professional detailing and undercarriage cleaning address directly.",
                },
                {
                  title: "Industrial Fallout from Business Parks",
                  text: "Birchwood, Gemini and Omega business parks generate significant industrial activity. Iron fallout from nearby manufacturing and warehousing operations bonds to paintwork as brown-orange spotting — removed only through professional iron fallout treatment and clay bar decontamination.",
                },
                {
                  title: "Open-Air Parking Exposure",
                  text: "Many Warrington workers and residents park in exposed open-air car parks at retail parks, business parks and town centre facilities. Prolonged UV exposure, bird droppings and tree sap from surrounding greenery cause permanent clear coat etching if left untreated.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 p-6 rounded-2xl"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* DETAILING vs VALETING EXPLAINER */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              Car Detailing vs Car Valeting:{" "}
              <span className="text-primary">Two Different Disciplines</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-14 leading-relaxed">
              Many people use these terms interchangeably, but they serve
              different purposes. We offer dedicated packages for each so you
              get exactly the level of care your vehicle needs.
            </p>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Detailing Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-56">
                  <Image
                    src={detailingImage}
                    alt="Professional paint correction and car detailing in Warrington"
                    fill
                    className="object-cover"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="inline-block bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                      HIGH-TICKET &middot; ENTHUSIAST &amp; LUXURY
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      Car Detailing
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Car detailing is a professional-grade restoration and
                    protection process. It involves{" "}
                    <strong>paint correction</strong> (removing swirl marks,
                    scratches and oxidation through machine polishing),{" "}
                    <strong>ceramic coating</strong> application for long-term
                    protection, and deep restoration of every interior and
                    exterior surface.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Detailing is typically performed annually or for specific
                    events — new car protection, pre-sale preparation or
                    correcting motorway-accumulated damage. It&apos;s the
                    higher-investment service that delivers transformative,
                    lasting results.
                  </p>
                  <Button asChild className="w-full" size="lg">
                    <Link href="/warrington/car-detailing">
                      Explore Detailing Services
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Valeting Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-56">
                  <Image
                    src={valetingImage}
                    alt="Professional interior car valeting service in Warrington"
                    fill
                    className="object-cover"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="inline-block bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                      REGULAR MAINTENANCE &middot; EVERYDAY DRIVERS
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      Car Valeting
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Car valeting is professional cleaning and maintenance. It
                    covers thorough{" "}
                    <strong>interior and exterior washing</strong>, upholstery
                    treatment, dashboard cleaning, wheel detailing and wax
                    protection. Think of it as the highest-quality version of
                    what a car wash should be.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Valeting is a regular service — monthly or quarterly
                    depending on usage. It maintains your car&apos;s
                    cleanliness, comfort and resale value without the deeper
                    correction work. Perfect for everyday family cars,
                    commuters and company vehicles.
                  </p>
                  <Button asChild className="w-full" size="lg">
                    <Link href="/warrington/car-valeting">
                      Explore Valeting Packages
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/compare/car-detailing-vs-car-valeting"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Not sure which you need? Read our full comparison
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* CAR DETAILING SERVICES */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mb-12">
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Professional Detailing
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Car Detailing Services in{" "}
                <span className="text-primary">Warrington</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Restoration-grade services that correct imperfections and
                apply long-term protection. Each service uses professional
                equipment, premium products and meticulous technique refined
                over two decades.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {detailingServices.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="group bg-gray-50 hover:bg-primary/5 border border-gray-100 hover:border-primary/20 rounded-2xl p-6 transition-all duration-200"
                >
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4">
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild size="lg">
                <Link href="/warrington/car-detailing">
                  View All Detailing Services
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* CAR VALETING SERVICES */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mb-12">
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Professional Valeting
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Car Valeting Packages in{" "}
                <span className="text-primary">Warrington</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Regular maintenance cleaning that keeps your car looking
                fresh, comfortable and well-maintained. Hand-wash only, no
                machines that could damage your paint.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {valetingServices.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="group bg-white hover:bg-primary/5 border border-gray-100 hover:border-primary/20 rounded-2xl p-6 transition-all duration-200"
                >
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4">
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild size="lg">
                <Link href="/warrington/car-valeting">
                  View All Valeting Packages
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* HOW OUR MOBILE SERVICE WORKS */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              How Our Mobile Service{" "}
              <span className="text-primary">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              No need to drive anywhere or wait around at a garage. We bring
              everything to you — anywhere in Warrington.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Book Your Service",
                  text: "Call us or use our online form. Tell us your vehicle, Warrington location and what you need.",
                },
                {
                  step: "2",
                  title: "We Come to You",
                  text: "Our fully equipped van arrives at your home, office or any Warrington location.",
                },
                {
                  step: "3",
                  title: "Professional Care",
                  text: "We work on your vehicle using professional-grade equipment and premium products.",
                },
                {
                  step: "4",
                  title: "Showroom Results",
                  text: "Walk out to a transformed car. We walk you through everything we've done.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* AREAS WE SERVE IN WARRINGTON */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              Areas We Serve Across{" "}
              <span className="text-primary">Warrington</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              We cover all WA postcodes across Warrington and the surrounding
              Cheshire area. If you&apos;re not sure whether we cover your
              postcode, just give us a call — we&apos;re happy to help.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {warringtonAreas.map((area) => (
                <div
                  key={area.name}
                  className="bg-white border border-gray-200 rounded-xl p-4"
                >
                  <h3 className="font-semibold text-foreground">{area.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {area.postcodes}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">
                Not listed? We cover the full WA1–WA5 postcode range.
              </p>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+447375759686">
                  <Phone className="w-4 h-4 mr-2" />
                  Call to Check Your Area
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* WHY CHOOSE SRV DETAILING */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Why Warrington Chooses{" "}
              <span className="text-primary">SRV Detailing</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Award,
                  title: "22+ Years of Hands-On Experience",
                  text: "We've been detailing and valeting vehicles across the north-west since 2003. That's over two decades of refining our techniques, understanding regional environmental challenges and building trust with thousands of customers.",
                },
                {
                  icon: Car,
                  title: "Genuinely Mobile — We Bring Everything",
                  text: "Our custom-equipped van carries its own water supply, power generator, professional lighting and every tool needed for any service. We don't need your electricity or water. We work on your driveway, in your office car park or wherever suits you in Warrington.",
                },
                {
                  icon: Sparkles,
                  title: "Premium Products, Professional Equipment",
                  text: "We use the same brands and equipment found in dedicated detailing studios — professional-grade machine polishers, IR curing lamps for ceramic coatings, hot water extractors for interiors and pH-neutral snow foam for safe washing.",
                },
                {
                  icon: Shield,
                  title: "Fully Insured & Certified",
                  text: "Complete public liability insurance, specialist vehicle-in-care coverage and manufacturer certifications for the ceramic coating products we apply. Your vehicle is fully protected in our hands.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* ALSO SERVING MANCHESTER & STOCKPORT */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-12 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <p className="text-muted-foreground text-center mb-8">
              We also serve Greater Manchester and Stockport
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Looking for car care in{" "}
                  <span className="text-primary">Manchester</span>?
                </h3>
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                  Our Manchester service covers the city centre, Didsbury,
                  Chorlton, Salford, Trafford, Sale, Altrincham and all
                  Greater Manchester areas.
                </p>
                <Button asChild variant="outline" size="lg">
                  <Link href="/manchester">
                    View Manchester Services
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Looking for car care in{" "}
                  <span className="text-primary">Stockport</span>?
                </h3>
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                  Our Stockport service covers Bramhall, Cheadle, Marple,
                  Hazel Grove, Heaton Moor, Edgeley, Reddish and surrounding
                  SK postcode areas.
                </p>
                <Button asChild variant="outline" size="lg">
                  <Link href="/stockport">
                    View Stockport Services
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* FINAL CTA */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-16 sm:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Book Your Warrington Car Care?
            </h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether you need a quick maintenance valet or a full paint
              correction and ceramic coating, we bring 22 years of expertise
              directly to your door anywhere across Warrington and Cheshire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-bold"
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
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-bold"
                asChild
              >
                <Link href="/booking">Book Online</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
