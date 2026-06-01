import Link from 'next/link';
import { FooterColumn } from './FooterColumn';
import { FooterAccordion } from './FooterAccordion';
import { FOOTER_LINKS, POPULAR_SEARCHES, PHONE_TEL, PHONE_DISPLAY, EMAIL } from './nav-data';

const siteNavSchema = {
  '@context': 'https://schema.org',
  '@type': 'SiteNavigationElement',
  name: ['Car Detailing', 'Car Valeting', 'Locations', 'Pricing', 'About', 'Blog', 'Contact', 'Booking'],
  url: [
    'https://www.srvdetailing.co.uk/manchester/car-detailing',
    'https://www.srvdetailing.co.uk/manchester/car-valeting',
    'https://www.srvdetailing.co.uk/manchester',
    'https://www.srvdetailing.co.uk/pricing',
    'https://www.srvdetailing.co.uk/about-us',
    'https://www.srvdetailing.co.uk/blog',
    'https://www.srvdetailing.co.uk/contact',
    'https://www.srvdetailing.co.uk/booking',
  ],
};

export function Footer() {
  return (
    <footer
      className="bg-[#0f0f0f] text-zinc-300"
      aria-label="Site footer"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavSchema) }}
      />

      <div className="container mx-auto px-4 pt-14 pb-8">

        {/* ── Brand row ── */}
        <div className="mb-10 pb-10 border-b border-zinc-800 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Brand identity */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white font-heading font-bold text-base">SRV</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">Detailing</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-2">
              Professional mobile car detailing and valeting across Greater Manchester.
              Ceramic coating, paint correction and full valets — delivered to your door.
            </p>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Based in Stockport &middot; Serving Manchester, Wilmslow, Warrington,
              Cheadle, Bramhall, Didsbury, Altrincham and all Greater Manchester postcodes.
            </p>
          </div>

          {/* Contact + social */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-3">
              <a
                href={PHONE_TEL}
                className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors duration-150"
                aria-label="Call SRV Detailing"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors duration-150"
                aria-label="Email SRV Detailing"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                {EMAIL}
              </a>
              <a
                href="https://share.google/TQvh6CIzVf4Y4als3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-zinc-300 hover:text-white transition-colors duration-150"
                aria-label="SRV Detailing Google Reviews — 5 stars"
              >
                <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span>Google Reviews</span>
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              <SocialIcon
                href="https://instagram.com/srv.detailing"
                label="SRV Detailing on Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </SocialIcon>
              <SocialIcon
                href="https://www.facebook.com/showroomvaleting.srv/"
                label="SRV Detailing on Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </SocialIcon>
              <SocialIcon
                href="https://share.google/AZFyOF2xIb3XaZetX"
                label="SRV Detailing on Google Maps"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm-1.293 17.707l-4.414-4.414 1.414-1.414 3 3 6.293-6.293 1.414 1.414-7.707 7.707z"/></svg>
              </SocialIcon>
              <SocialIcon
                href="https://www.youtube.com/@SrvDetailing"
                label="SRV Detailing on YouTube"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </SocialIcon>
              <a
                href="https://www.yell.com/biz/srv-detailing-dukinfield-11004489/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SRV Detailing on Yell.com"
                className="h-9 px-3 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center text-xs font-semibold text-zinc-300 hover:text-white transition-colors duration-150"
              >
                Yell
              </a>
            </div>
          </div>
        </div>

        {/* ── Desktop 5-column link grid ── */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8 mb-10">
          <FooterColumn title="Car Detailing" links={FOOTER_LINKS.detailing} />
          <FooterColumn title="Car Valeting"  links={FOOTER_LINKS.valeting} />
          <FooterColumn title="Locations"     links={FOOTER_LINKS.locations} />
          <FooterColumn title="Areas Served"  links={FOOTER_LINKS.areas} />
          <FooterColumn title="Company"       links={FOOTER_LINKS.company} />
        </div>

        {/* ── Mobile accordion columns ── */}
        <div className="lg:hidden mb-8">
          <FooterAccordion title="Car Detailing" links={FOOTER_LINKS.detailing} />
          <FooterAccordion title="Car Valeting"  links={FOOTER_LINKS.valeting} />
          <FooterAccordion title="Locations"     links={FOOTER_LINKS.locations} />
          <FooterAccordion title="Areas Served"  links={FOOTER_LINKS.areas} />
          <FooterAccordion title="Company"       links={FOOTER_LINKS.company} />
        </div>

        {/* ── Popular Searches (SEO keyword-match pills) ── */}
        <div className="border-t border-zinc-800 pt-8 mb-8">
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">
            Popular Searches
          </p>
          <div className="flex flex-wrap gap-2">
            {POPULAR_SEARCHES.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-300 hover:text-white transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Book Now CTA ── */}
        <div className="border-t border-zinc-800 pt-8 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-base mb-1">
              Ready for a showroom finish?
            </p>
            <p className="text-sm text-zinc-400">
              Mobile service &mdash; we come to your home or workplace across Greater Manchester.
            </p>
          </div>
          <Link
            href="/booking"
            className="flex-shrink-0 inline-flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-6 py-3 rounded-full transition-transform duration-150 hover:scale-[1.02]"
          >
            Book Your Detail &rarr;
          </Link>
        </div>

        {/* ── Legal bar ── */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-zinc-500 text-center md:text-left leading-relaxed">
            &copy; {new Date().getFullYear()} SRV Detailing. All rights reserved.
            &nbsp;Mobile car detailing &amp; valeting &mdash; based in Stockport, Greater Manchester.
          </p>
          <nav aria-label="Legal links" className="flex flex-wrap gap-x-5 gap-y-1.5 justify-center text-xs">
            <a
              href="https://share.google/TQvh6CIzVf4Y4als3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition-colors duration-150"
            >
              Google Reviews
            </a>
            <a
              href="https://www.yell.com/biz/srv-detailing-dukinfield-11004489/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition-colors duration-150"
            >
              Yell.com
            </a>
            <Link href="/gallery"  className="text-zinc-500 hover:text-zinc-300 transition-colors duration-150">Gallery</Link>
            <Link href="/faq"      className="text-zinc-500 hover:text-zinc-300 transition-colors duration-150">FAQ</Link>
            <Link href="/contact"  className="text-zinc-500 hover:text-zinc-300 transition-colors duration-150">Contact</Link>
            <Link href="/booking"  className="text-zinc-500 hover:text-zinc-300 transition-colors duration-150">Book Now</Link>
          </nav>
        </div>

      </div>
    </footer>
  );
}

// ── Social icon button ────────────────────────────────────────────────────────

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-primary flex items-center justify-center text-zinc-300 hover:text-white transition-colors duration-150"
    >
      {children}
    </a>
  );
}
