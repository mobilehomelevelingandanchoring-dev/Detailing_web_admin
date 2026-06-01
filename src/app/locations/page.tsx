import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Car Detailing & Valeting Locations | SRV Detailing',
  description:
    'SRV Detailing provides professional mobile car detailing and valeting across Manchester, Stockport, Wilmslow, and Warrington. Find your nearest service area.',
  alternates: {
    canonical: 'https://www.srvdetailing.co.uk/locations',
  },
  openGraph: {
    title: 'Car Detailing & Valeting Locations | SRV Detailing',
    description:
      'Professional mobile car detailing and valeting across Greater Manchester, Stockport, Wilmslow, and Warrington.',
    url: 'https://www.srvdetailing.co.uk/locations',
    type: 'website',
  },
};

const locations = [
  {
    city: 'Manchester',
    href: '/manchester',
    description:
      'Full mobile car detailing and valeting service across Manchester city centre and all surrounding areas including Didsbury, Chorlton, Salford, Trafford, and more.',
    areas: [
      { name: 'Manchester City Centre', href: '/manchester/areas/city-centre' },
      { name: 'Didsbury', href: '/manchester/areas/didsbury' },
      { name: 'Chorlton', href: '/manchester/areas/chorlton' },
      { name: 'Salford', href: '/manchester/areas/salford' },
      { name: 'Trafford', href: '/manchester/areas/trafford' },
      { name: 'Sale', href: '/manchester/areas/sale' },
    ],
    services: [
      { name: 'Car Detailing Manchester', href: '/manchester/car-detailing' },
      { name: 'Car Valeting Manchester', href: '/manchester/car-valeting' },
    ],
  },
  {
    city: 'Stockport',
    href: '/stockport',
    description:
      'Premium mobile detailing and valeting for Stockport and surrounding areas including Cheadle, Bramhall, Poynton, Hazel Grove, and Marple.',
    areas: [
      { name: 'Cheadle', href: '/stockport/areas/cheadle' },
      { name: 'Bramhall', href: '/stockport/areas/bramhall' },
      { name: 'Poynton', href: '/stockport/areas/poynton' },
      { name: 'Hazel Grove', href: '/stockport/areas/hazel-grove' },
      { name: 'Marple', href: '/stockport/areas/marple' },
      { name: 'Romiley', href: '/stockport/areas/romiley' },
    ],
    services: [
      { name: 'Car Detailing Stockport', href: '/stockport/car-detailing' },
      { name: 'Car Valeting Stockport', href: '/stockport/car-valeting' },
    ],
  },
  {
    city: 'Wilmslow',
    href: '/wilmslow',
    description:
      'Expert mobile car detailing and valeting for Wilmslow, Alderley Edge, Knutsford, and the wider Cheshire area. Trusted by prestige and executive car owners.',
    areas: [
      { name: 'Wilmslow Town', href: '/wilmslow/areas/wilmslow-town' },
      { name: 'Alderley Edge', href: '/wilmslow/areas/alderley-edge' },
      { name: 'Knutsford', href: '/wilmslow/areas/knutsford' },
      { name: 'Handforth', href: '/wilmslow/areas/handforth' },
      { name: 'Prestbury', href: '/wilmslow/areas/prestbury' },
    ],
    services: [
      { name: 'Car Detailing Wilmslow', href: '/wilmslow/car-detailing' },
      { name: 'Car Valeting Wilmslow', href: '/wilmslow/car-valeting' },
    ],
  },
  {
    city: 'Warrington',
    href: '/warrington',
    description:
      'Mobile car detailing and valeting across Warrington, serving town centre and outlying areas. Paint protection, ceramic coating, and full valet packages available.',
    areas: [],
    services: [
      { name: 'Car Detailing Warrington', href: '/warrington/car-detailing' },
      { name: 'Car Valeting Warrington', href: '/warrington/car-valeting' },
    ],
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoWash',
  name: 'SRV Detailing',
  url: 'https://www.srvdetailing.co.uk',
  telephone: '+447375759686',
  description:
    'Professional mobile car detailing and valeting across Manchester, Stockport, Wilmslow, and Warrington.',
  areaServed: [
    { '@type': 'City', name: 'Manchester' },
    { '@type': 'City', name: 'Stockport' },
    { '@type': 'City', name: 'Wilmslow' },
    { '@type': 'City', name: 'Warrington' },
  ],
  hasMap: 'https://maps.google.com/?q=SRV+Detailing+Manchester',
  priceRange: '££',
  image: 'https://www.srvdetailing.co.uk/og-image.jpg',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.srvdetailing.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.srvdetailing.co.uk/locations' },
  ],
};

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main id="main-content" className="bg-white">
        {/* Hero */}
        <section className="bg-zinc-50 border-b border-zinc-100 py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-1.5 text-sm text-zinc-500">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li aria-hidden>/</li>
                <li className="text-zinc-800 font-medium">Locations</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-zinc-900 mb-4 leading-tight">
              Our Service Areas
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              SRV Detailing brings professional mobile car detailing and valeting directly to your door
              across Greater Manchester, Stockport, Wilmslow, and Warrington.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-full transition-transform hover:scale-[1.02] shadow-sm"
              >
                Book in your area
              </Link>
              <a
                href="tel:+447375759686"
                className="inline-flex items-center gap-1.5 border border-zinc-300 hover:border-primary text-zinc-700 hover:text-primary font-semibold px-6 py-3 rounded-full transition-colors"
              >
                07375 759686
              </a>
            </div>
          </div>
        </section>

        {/* Location cards */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid gap-10 md:gap-12">
              {locations.map((loc) => (
                <article
                  key={loc.city}
                  className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 p-6 md:p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-zinc-900 mb-2">
                      <Link href={loc.href} className="hover:text-primary transition-colors">
                        {loc.city}
                      </Link>
                    </h2>
                    <p className="text-zinc-600 leading-relaxed mb-5">{loc.description}</p>

                    {loc.areas.length > 0 && (
                      <div className="mb-5">
                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                          Areas covered
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {loc.areas.map((area) => (
                            <Link
                              key={area.href}
                              href={area.href}
                              className="text-sm px-3 py-1 rounded-full border border-zinc-200 text-zinc-600 hover:border-primary hover:text-primary transition-colors duration-150"
                            >
                              {area.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3">
                      {loc.services.map((svc) => (
                        <Link
                          key={svc.href}
                          href={svc.href}
                          className="text-sm font-medium text-primary hover:underline underline-offset-2"
                        >
                          {svc.name} &rarr;
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="md:flex md:flex-col md:items-end md:justify-between gap-3 hidden">
                    <Link
                      href={loc.href}
                      className="inline-flex items-center gap-1 bg-primary/10 hover:bg-primary/20 text-primary font-semibold px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap text-sm"
                    >
                      View {loc.city}
                    </Link>
                    <Link
                      href="/booking"
                      className="inline-flex items-center gap-1 bg-primary hover:bg-primary/90 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap text-sm"
                    >
                      Book here
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why mobile section */}
        <section className="bg-zinc-50 border-t border-zinc-100 py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-zinc-900 mb-4">
              Why choose a mobile detailing service?
            </h2>
            <p className="text-zinc-600 mb-10 max-w-2xl mx-auto">
              We come to your home, office, or any location — no need to drop off your car or wait around.
              Our mobile setup carries everything needed for a showroom-quality result wherever you are.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              {[
                { title: 'We come to you', body: 'Home, office, or car park — we travel to your location across all service areas.' },
                { title: 'No waiting around', body: 'Get on with your day. Your car is ready when you are, without the drop-off hassle.' },
                { title: 'Professional-grade results', body: 'Machine polishers, ceramic coatings, steam cleaners — the full professional toolkit.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 border border-zinc-100">
                  <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-zinc-900 mb-4">
              Ready to book?
            </h2>
            <p className="text-zinc-600 mb-8">
              Select your location above or book directly — we&apos;ll confirm your area on the booking form.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full text-base transition-transform hover:scale-[1.02] shadow-sm"
            >
              Book your free quote
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
