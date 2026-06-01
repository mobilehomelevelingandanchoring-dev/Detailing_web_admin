import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CtaSection } from '@/components/shared/CtaSection';
import { Camera, Sparkles, ArrowRight } from 'lucide-react';
import { GalleryHero } from '@/components/pages/GalleryHero';

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
// Title: primary keyword first, GEO signals (Stockport leads), brand last
// Description: under 160 chars, mobile + Stockport + service types + CTA implied
export const metadata: Metadata = {
  title: 'Mobile Car Detailing Gallery — Stockport & Manchester | SRV Detailing',
  description:
    'See real results from SRV Detailing — mobile ceramic coating, paint correction, and car valeting across Stockport, Manchester & Greater Manchester. 22 years of professional mobile car care.',
  keywords: [
    'mobile car detailing gallery Stockport',
    'ceramic coating Stockport photos',
    'mobile car valeting gallery Manchester',
    'paint correction results Stockport',
    'SRV Detailing gallery',
    'mobile detailing Greater Manchester',
    'car detailing before after Stockport',
    'professional car valeting photos Manchester',
  ],
  alternates: { canonical: 'https://www.srvdetailing.co.uk/gallery' },
  openGraph: {
    title: 'Mobile Car Detailing Gallery — Stockport & Manchester | SRV Detailing',
    description:
      'Real mobile detailing results from SRV Detailing — ceramic coatings, paint correction, and valeting across Stockport & Manchester.',
    url: 'https://www.srvdetailing.co.uk/gallery',
    type: 'website',
    locale: 'en_GB',
    siteName: 'SRV Detailing',
    images: [
      {
        url: '/images/gallery/srv-detailing-ceramic-coating-stockport-01.webp.webp',
        width: 1200,
        height: 630,
        alt: 'SRV Detailing mobile ceramic coating result in Stockport — professional paint protection service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Car Detailing Gallery — Stockport & Manchester | SRV Detailing',
    description:
      'Real mobile detailing results from SRV Detailing — ceramic coatings, paint correction, and valeting across Stockport & Manchester.',
    images: ['/images/gallery/srv-detailing-ceramic-coating-stockport-01.webp.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

// ─── Gallery Image Data ────────────────────────────────────────────────────────
// Each entry: unique alt text (brand + service + location + mobile context),
// caption (short, visible on hover — Stockport-led where applicable).
// Add new images by appending to this array — no other changes needed.
const galleryImages = [
  {
    src: '/images/gallery/srv-detailing-ceramic-coating-stockport-01.webp.webp',
    alt: 'SRV Detailing mobile ceramic coating in Stockport — mirror-like gloss and long-lasting paint protection applied at your home',
    caption: 'Ceramic Coating Specialist · Stockport',
  },
  {
    src: '/images/gallery/srv-detailing-ceramic-coating-manchester-stockport-01.webp.webp',
    alt: 'SRV Detailing accredited ceramic coating serving Stockport and Manchester — premium 5-year SiO2 paint protection mobile service',
    caption: 'Ceramic Coating · Stockport & Manchester',
  },
  {
    src: '/images/gallery/srv-detailing-car-detailing-greater-manchester-stockport-01.webp.webp',
    alt: 'SRV Detailing mobile car detailing in Stockport — showroom-quality finish delivered directly to your driveway',
    caption: 'Mobile Car Detailing · Stockport',
  },
  {
    src: '/images/gallery/srv-detailing-mobile-car-valeting-manchester-stockport-01.webp.webp',
    alt: 'SRV Detailing mobile car valeting in Stockport and Manchester — professional valet service at your home or workplace',
    caption: 'Mobile Car Valeting · Stockport & Manchester',
  },
  {
    src: '/images/gallery/srv-detailing-mobile-car-detailing-manchester-01.webp.webp',
    alt: 'SRV Detailing mobile car detailing van set up at a customer driveway near Stockport — no garage or travel required',
    caption: 'Mobile Detailing at Home · Stockport',
  },
  {
    src: '/images/gallery/srv-detailing-mobile-car-detailing-manchester-02.webp.webp',
    alt: 'SRV Detailing fully self-contained mobile detailing unit on a residential driveway in Manchester — water and power on-board',
    caption: 'Self-Contained Mobile Unit · Manchester',
  },
  {
    src: '/images/gallery/srv-detailing-car-detailing-greater-manchester-stockport-02.webp.webp',
    alt: 'SRV Detailing professional car detailing covering Greater Manchester and Stockport — exterior finish restored by our mobile team',
    caption: 'Car Detailing · Greater Manchester & Stockport',
  },
  {
    src: '/images/gallery/srv-detailing-ceramic-coating-manchester-01.webp.webp',
    alt: 'SRV Detailing mobile ceramic coating application in Manchester — accredited SiO2 hydrophobic protection at your door',
    caption: 'Mobile Ceramic Coating · Manchester',
  },
  {
    src: '/images/gallery/srv-detailing-car-polishing-manchester-01.webp.webp',
    alt: 'SRV Detailing mobile machine polishing in Manchester — swirl marks removed and gloss restored at the customer\'s location',
    caption: 'Paint Correction & Polishing · Manchester',
  },
  {
    src: '/images/gallery/srv-detailing-car-valeting-manchester-02.webp.webp',
    alt: 'SRV Detailing mobile car valeting in Stockport — snow foam pre-wash, two-bucket hand wash, and wax protection on your driveway',
    caption: 'Mobile Car Valeting · Stockport',
  },
  {
    src: '/images/gallery/srv-detailing-ceramic-coating-manchester-02.webp.webp',
    alt: 'SRV Detailing ceramic coating creating a deep gloss and hydrophobic finish — mobile service available across Stockport and Manchester',
    caption: 'Ceramic Coating Results · Manchester',
  },
  {
    src: '/images/gallery/srv-detailing-exterior-car-detailing-manchester-01.webp.webp',
    alt: 'SRV Detailing exterior car detailing in Manchester — clay bar decontamination and ceramic sealant applied by our mobile team',
    caption: 'Exterior Car Detailing · Manchester',
  },
  {
    src: '/images/gallery/srv-detailing-interior-car-cleaning-manchester-01.webp.webp',
    alt: 'SRV Detailing mobile interior car cleaning in Stockport — deep vacuum, leather conditioning, and full trim dressing at your home',
    caption: 'Interior Car Cleaning · Stockport',
  },
  {
    src: '/images/gallery/srv-detailing-ceramic-coating-manchester-03.webp.webp',
    alt: 'SRV Detailing professional SiO2 ceramic coating protecting vehicle paintwork — mobile service across Stockport and Greater Manchester',
    caption: 'Ceramic Coating · Stockport & Greater Manchester',
  },
  {
    src: '/images/gallery/srv-detailing-mobile-car-detailing-manchester-03.webp.webp',
    alt: 'SRV Detailing mobile detailing van equipped with pressure washer, dual-action polisher, and ceramic products — serving Stockport and Manchester',
    caption: 'Mobile Detailing Van · Stockport Based',
  },
  {
    src: '/images/gallery/srv-detailing-interior-car-cleaning-manchester-03.webp.webp',
    alt: 'SRV Detailing interior detailing with hot water extraction — upholstery and carpet deep clean performed on-site in Manchester',
    caption: 'Interior Deep Clean · Manchester',
  },
  {
    src: '/images/gallery/srv-detailing-ceramic-coating-manchester-05.webp.webp',
    alt: 'SRV Detailing ceramic coating showing exceptional water-beading effect — mobile application by our accredited team in Manchester',
    caption: 'Ceramic Coating Water-Beading · Manchester',
  },
  {
    src: '/images/gallery/srv-detailing-mobile-car-detailing-manchester-04.webp.webp',
    alt: 'SRV Detailing delivering professional mobile car detailing results across Greater Manchester — showroom finish at your location',
    caption: 'Professional Mobile Detailing · Greater Manchester',
  },
  {
    src: '/images/gallery/srv-detailing-mobile-car-detailing-manchester-05.webp.webp',
    alt: 'SRV Detailing mobile team completing multi-stage exterior wash and paint protection in Manchester — fully equipped, no mains required',
    caption: 'Multi-Stage Mobile Detail · Manchester',
  },
  {
    src: '/images/gallery/mobile-van.webp.webp',
    alt: 'SRV Detailing mobile valeting and detailing van — fully equipped to bring professional car care to Stockport, Manchester, and Greater Manchester',
    caption: 'SRV Detailing Mobile Unit · Stockport Based',
  },
];

// ─── Sub-gallery Navigation ────────────────────────────────────────────────────
const galleries = [
  {
    title: 'Car Detailing Gallery',
    description:
      'Paint correction, ceramic coating, headlight restoration and interior detailing — see the transformations our mobile detailing service delivers in Stockport & Manchester.',
    href: '/gallery/detailing',
    icon: Sparkles,
  },
  {
    title: 'Car Valeting Gallery',
    description:
      'Full valets, interior deep cleans, and mobile valeting results — before and after photos from Stockport, Manchester & Greater Manchester.',
    href: '/gallery/valeting',
    icon: Camera,
  },
];

// ─── JSON-LD Structured Data ───────────────────────────────────────────────────
// Three nodes: LocalBusiness (Stockport-anchored), ImageGallery, WebPage
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. LocalBusiness — Stockport address, mobile service area, 5 representative images
    {
      '@type': ['LocalBusiness', 'AutoDetailing'],
      '@id': 'https://www.srvdetailing.co.uk/#business',
      name: 'SRV Detailing',
      description:
        'Professional mobile car detailing and valeting service based in Stockport, Greater Manchester. Specialising in ceramic coating, paint correction, exterior and interior detailing. Fully self-contained mobile unit — we come to your home or workplace across Stockport, Manchester, and Greater Manchester.',
      url: 'https://www.srvdetailing.co.uk',
      telephone: '+44 7375 759686',
      email: 'srv_detailing@icloud.com',
      foundingDate: '2003',
      priceRange: '££',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Globe House, Globe Lane',
        addressLocality: 'Dukinfield',
        addressRegion: 'Greater Manchester',
        postalCode: 'SK16 4RG',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '53.4746',
        longitude: '-2.0873',
      },
      areaServed: [
        { '@type': 'City', name: 'Stockport' },
        { '@type': 'City', name: 'Manchester' },
        { '@type': 'AdministrativeArea', name: 'Greater Manchester' },
        { '@type': 'City', name: 'Tameside' },
        { '@type': 'City', name: 'Wilmslow' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Mobile Car Detailing & Valeting Services — Stockport',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile Ceramic Coating Stockport',
              description: 'Accredited SiO2 ceramic coating applied at your home or workplace in Stockport and Manchester.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile Paint Correction Stockport',
              description: 'Machine polishing to remove swirl marks and scratches — delivered by our mobile team in Stockport.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile Car Valeting Stockport',
              description: 'Full and mini mobile valet service in Stockport — snow foam, hand wash, interior clean, and protection.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile Interior Car Cleaning Stockport',
              description: 'Deep interior clean including hot water extraction, leather conditioning, and sanitisation in Stockport.',
            },
          },
        ],
      },
      // 5 representative gallery images surfaced in LocalBusiness entity
      image: [
        {
          '@type': 'ImageObject',
          contentUrl: 'https://www.srvdetailing.co.uk/images/gallery/srv-detailing-ceramic-coating-stockport-01.webp.webp',
          name: 'SRV Detailing Ceramic Coating Stockport',
          description: 'SRV Detailing mobile ceramic coating in Stockport — mirror-like gloss and long-lasting paint protection applied at your home',
          encodingFormat: 'image/webp',
        },
        {
          '@type': 'ImageObject',
          contentUrl: 'https://www.srvdetailing.co.uk/images/gallery/srv-detailing-mobile-car-valeting-manchester-stockport-01.webp.webp',
          name: 'SRV Detailing Mobile Car Valeting Stockport',
          description: 'SRV Detailing mobile car valeting in Stockport and Manchester — professional valet service at your home or workplace',
          encodingFormat: 'image/webp',
        },
        {
          '@type': 'ImageObject',
          contentUrl: 'https://www.srvdetailing.co.uk/images/gallery/srv-detailing-car-detailing-greater-manchester-stockport-01.webp.webp',
          name: 'SRV Detailing Mobile Car Detailing Stockport',
          description: 'SRV Detailing mobile car detailing in Stockport — showroom-quality finish delivered directly to your driveway',
          encodingFormat: 'image/webp',
        },
        {
          '@type': 'ImageObject',
          contentUrl: 'https://www.srvdetailing.co.uk/images/gallery/srv-detailing-interior-car-cleaning-manchester-01.webp.webp',
          name: 'SRV Detailing Mobile Interior Cleaning Stockport',
          description: 'SRV Detailing mobile interior car cleaning in Stockport — deep vacuum, leather conditioning, and full trim dressing at your home',
          encodingFormat: 'image/webp',
        },
        {
          '@type': 'ImageObject',
          contentUrl: 'https://www.srvdetailing.co.uk/images/gallery/mobile-van.webp.webp',
          name: 'SRV Detailing Mobile Valeting Van Stockport',
          description: 'SRV Detailing mobile valeting and detailing van — fully equipped to bring professional car care to Stockport, Manchester, and Greater Manchester',
          encodingFormat: 'image/webp',
        },
      ],
      sameAs: ['https://share.google/AZFyOF2xIb3XaZetX', 'https://instagram.com/srv.detailing'],
    },

    // 2. ImageGallery — all 20 images with keyword-rich descriptions
    {
      '@type': 'ImageGallery',
      '@id': 'https://www.srvdetailing.co.uk/gallery#image-gallery',
      name: 'SRV Detailing Mobile Car Detailing Gallery — Stockport & Manchester',
      description:
        'Gallery of professional mobile car detailing, ceramic coating, paint correction, and valeting results by SRV Detailing across Stockport, Manchester, and Greater Manchester.',
      url: 'https://www.srvdetailing.co.uk/gallery',
      author: { '@id': 'https://www.srvdetailing.co.uk/#business' },
      publisher: { '@id': 'https://www.srvdetailing.co.uk/#business' },
      image: galleryImages.map((img) => ({
        '@type': 'ImageObject',
        contentUrl: `https://www.srvdetailing.co.uk${img.src}`,
        name: img.caption,
        description: img.alt,
        creator: { '@id': 'https://www.srvdetailing.co.uk/#business' },
        copyrightHolder: { '@id': 'https://www.srvdetailing.co.uk/#business' },
        encodingFormat: 'image/webp',
        representativeOfPage: false,
      })),
    },

    // 3. WebPage — breadcrumb + canonical signals
    {
      '@type': 'WebPage',
      '@id': 'https://www.srvdetailing.co.uk/gallery#webpage',
      url: 'https://www.srvdetailing.co.uk/gallery',
      name: 'Mobile Car Detailing Gallery — Stockport & Manchester | SRV Detailing',
      description:
        'See real results from SRV Detailing — mobile ceramic coating, paint correction, and car valeting across Stockport, Manchester & Greater Manchester.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://www.srvdetailing.co.uk/#website' },
      about: { '@id': 'https://www.srvdetailing.co.uk/#business' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.srvdetailing.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://www.srvdetailing.co.uk/gallery' },
        ],
      },
    },
  ],
};

// ─── Page Component ────────────────────────────────────────────────────────────
export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <GalleryHero />

      <main>
        {/* ── SEO Content ───────────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-4 pt-14 pb-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Welcome to the SRV Detailing gallery — a showcase of professional mobile car detailing, ceramic coating, paint correction, and valeting results across Stockport, Manchester, and the wider Greater Manchester area. Based in Dukinfield with a 25-mile mobile service radius, every result you see here was achieved at the customer's own home or workplace using our fully self-contained mobile unit, which carries its own water, power, and professional-grade equipment.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5">
            Our Stockport and Manchester customers choose SRV Detailing because we bring the workshop to them. Whether it's a ceramic coating on a prestige vehicle in Stockport, a multi-stage paint correction in Manchester city centre, or a full interior deep clean in Salford — our mobile setup delivers the same showroom-quality results as a fixed-location detailer, without the inconvenience of travel. With over 22 years of experience and accredited ceramic coating certification, our work is trusted by car enthusiasts, fleet managers, and everyday drivers alike.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Browse the full photo gallery below to see ceramic coating hydrophobic effects, swirl-free paint correction results, and spotless interior transformations. For side-by-side before-and-after comparisons, visit our dedicated{' '}
            <Link href="/gallery/detailing" className="text-primary font-medium hover:underline">
              car detailing gallery
            </Link>{' '}
            and{' '}
            <Link href="/gallery/valeting" className="text-primary font-medium hover:underline">
              mobile valeting gallery
            </Link>.
          </p>
        </section>

        {/* ── Photo Grid ────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 pb-16" aria-label="SRV Detailing mobile car detailing gallery — Stockport and Manchester">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <figure
                key={image.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={index < 8 ? 'eager' : 'lazy'}
                  priority={index < 4}
                />
                <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-medium truncate">{image.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ── Sub-gallery Links ──────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Browse by Service
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {galleries.map((gallery) => (
              <Link
                key={gallery.href}
                href={gallery.href}
                className="bg-card rounded-xl shadow-lg overflow-hidden border border-border hover:shadow-xl hover:border-primary/40 transition-all duration-300 p-8 block group"
              >
                <gallery.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {gallery.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{gallery.description}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                  View gallery <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Internal Links ─────────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <div className="bg-slate-50 border border-border rounded-xl p-8">
            <h2 className="text-xl font-bold mb-1 text-foreground">Our Mobile Services</h2>
            <p className="text-sm text-muted-foreground mb-5">Serving Stockport, Manchester &amp; Greater Manchester</p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm">
              {[
                { label: 'Mobile Car Detailing Stockport', href: '/stockport/car-detailing' },
                { label: 'Mobile Car Valeting Stockport', href: '/stockport/car-valeting' },
                { label: 'Ceramic Coating Stockport', href: '/stockport/car-detailing/ceramic-coating' },
                { label: 'Mobile Car Detailing Manchester', href: '/manchester/car-detailing' },
                { label: 'Mobile Car Valeting Manchester', href: '/manchester/car-valeting' },
                { label: 'Ceramic Coating Manchester', href: '/manchester/car-detailing/ceramic-coating' },
                { label: 'Paint Correction Manchester', href: '/manchester/car-detailing/paint-correction' },
                { label: 'Interior Detailing Manchester', href: '/manchester/car-detailing/interior-detailing' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-1"
                  >
                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 pb-16">
          <CtaSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
