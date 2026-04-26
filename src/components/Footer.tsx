import Link from "next/link";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16" aria-label="Site footer">
      <div className="container mx-auto px-4">

        {/* ── Main grid: brand (2 cols) + 4 mini-columns ─────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* ── Brand & description ──────────────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">SRV</span>
              </div>
              <span className="font-heading font-bold text-xl">Detailing</span>
            </div>

            {/* Primary description */}
            <p className="text-background/70 mb-3 max-w-sm leading-relaxed text-sm">
              Professional mobile car detailing and valeting across Greater Manchester.
              Specialising in ceramic coating, paint correction and full valets —
              fully mobile, delivered to your home or workplace.
            </p>

            {/* Local SEO service area line */}
            <p className="text-background/50 text-xs mb-6 max-w-sm leading-relaxed">
              Based in Stockport · Serving Manchester, Salford, Trafford,
              Cheadle, Bramhall, Didsbury, Altrincham, Warrington and all
              Greater Manchester postcodes.
            </p>

            {/* ── Social & directory icons ──────────────────────────── */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://instagram.com/srv.detailing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SRV Detailing on Instagram"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/showroomvaleting.srv/about/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SRV Detailing on Facebook"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://share.google/TQvh6CIzVf4Y4als3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SRV Detailing on Google — leave a review"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors font-bold text-sm"
              >
                G
              </a>
              <a
                href="https://www.youtube.com/@SrvDetailing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SRV Detailing on YouTube"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.yell.com/biz/srv-detailing-dukinfield-11004489/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SRV Detailing listed on Yell.com"
                className="h-10 px-4 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors text-xs font-semibold tracking-wide uppercase"
              >
                Yell
              </a>
              <a
                href="https://medium.com/@srvcarandautodetailing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SRV Detailing on Medium"
                className="h-10 px-4 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors text-xs font-semibold tracking-wide"
              >
                Medium
              </a>
              <a
                href="https://srvdetailing.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SRV Detailing Blog on Blogspot"
                className="h-10 px-4 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors text-xs font-semibold tracking-wide"
              >
                Blog
              </a>
            </div>
          </div>

          {/* ── Column 1: Services ───────────────────────────────────── */}
          <nav aria-label="Services navigation">
            <h4 className="font-heading font-bold text-base mb-4 text-background">Services</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/manchester/car-detailing" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Car Detailing Manchester
                </Link>
              </li>
              <li>
                <Link href="/manchester/car-valeting" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Car Valeting Manchester
                </Link>
              </li>
              <li>
                <Link href="/manchester/car-detailing/ceramic-coating" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Ceramic Coating Manchester
                </Link>
              </li>
              <li>
                <Link href="/manchester/car-detailing/paint-correction" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Paint Correction Manchester
                </Link>
              </li>
              <li>
                <Link href="/manchester/car-detailing/interior-detailing" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Interior Detailing
                </Link>
              </li>
              <li>
                <Link href="/manchester/car-detailing/exterior-detailing" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Exterior Detailing
                </Link>
              </li>
              <li>
                <Link href="/manchester/car-valeting/full-valet" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Full Valet Manchester
                </Link>
              </li>
              <li>
                <Link href="/manchester/car-valeting/mobile-valeting" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Mobile Valeting
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>

          {/* ── Column 2: Locations ──────────────────────────────────── */}
          <nav aria-label="Locations navigation">
            <h4 className="font-heading font-bold text-base mb-4 text-background">Locations</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/manchester" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Car Detailing Manchester
                </Link>
              </li>
              <li>
                <Link href="/stockport" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Car Detailing Stockport
                </Link>
              </li>
              <li>
                <Link href="/wilmslow" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Car Detailing Wilmslow
                </Link>
              </li>
              <li>
                <Link href="/wilmslow/car-detailing/ceramic-coating" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Ceramic Coating Wilmslow
                </Link>
              </li>
              <li>
                <Link href="/wilmslow/car-valeting" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Car Valeting Wilmslow
                </Link>
              </li>
              <li>
                <Link href="/warrington" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Car Detailing Warrington
                </Link>
              </li>
              <li>
                <Link href="/stockport/car-detailing/ceramic-coating" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Ceramic Coating Stockport
                </Link>
              </li>
              <li>
                <Link href="/stockport/car-valeting" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Car Valeting Stockport
                </Link>
              </li>
              <li>
                <Link href="/warrington/car-detailing/ceramic-coating" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Ceramic Coating Warrington
                </Link>
              </li>
              <li>
                <Link href="/warrington/car-valeting/mobile-valeting" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Mobile Valeting Warrington
                </Link>
              </li>
              <li>
                <Link href="/manchester/car-wash" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Car Wash Manchester
                </Link>
              </li>
            </ul>
          </nav>

          {/* ── Column 3: Guides & Resources ─────────────────────────── */}
          <nav aria-label="Guides and resources navigation">
            <h4 className="font-heading font-bold text-base mb-4 text-background">Guides &amp; Info</h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/gallery"
                  title="SRV Detailing Mobile Car Detailing Gallery — Stockport & Manchester"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Detailing Gallery
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Detailing Guides
                </Link>
              </li>
              <li>
                <Link href="/compare/car-detailing-vs-car-valeting" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Detailing vs Valeting
                </Link>
              </li>
              <li>
                <Link href="/guides/what-is-ceramic-coating" className="text-background/70 hover:text-primary transition-colors text-sm">
                  What Is Ceramic Coating?
                </Link>
              </li>
              <li>
                <Link href="/guides/what-is-car-detailing" className="text-background/70 hover:text-primary transition-colors text-sm">
                  What Is Car Detailing?
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-background/70 hover:text-primary transition-colors text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-background/70 hover:text-primary transition-colors text-sm">
                  About SRV Detailing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* ── Column 4: Contact ────────────────────────────────────── */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-background">Contact</h4>

            <address className="not-italic">
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+447375759686"
                    className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
                    aria-label="Call SRV Detailing"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    <span>07375 759 686</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:srv_detailing@icloud.com"
                    className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
                    aria-label="Email SRV Detailing"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    <span>srv_detailing@icloud.com</span>
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-background/70" aria-hidden="true" />
                  <a
                    href="https://share.google/AZFyOF2xIb3XaZetX"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View SRV Detailing on Google Maps"
                    className="text-sm leading-relaxed text-background/70 hover:text-primary transition-colors"
                  >
                    Mobile Car Detailing &amp; Valeting<br />
                    Based in Stockport<br />
                    Serving Greater Manchester
                  </a>
                </li>
              </ul>
            </address>

            <div className="mt-6">
              <Link
                href="/booking"
                className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Book Your Detail →
              </Link>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ────────────────────────────────────────────── */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-xs text-center md:text-left leading-relaxed">
            &copy; {new Date().getFullYear()} SRV Detailing. All rights reserved.
            {" "}Mobile car detailing &amp; valeting — based in Stockport, serving all of Greater Manchester.
          </p>
          <nav aria-label="Footer utility links" className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-xs">
            <a
              href="https://share.google/TQvh6CIzVf4Y4als3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/50 hover:text-primary transition-colors"
            >
              Google Reviews
            </a>
            <a
              href="https://www.yell.com/biz/srv-detailing-dukinfield-11004489/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/50 hover:text-primary transition-colors"
            >
              Yell.com
            </a>
            <Link href="/gallery" className="text-background/50 hover:text-primary transition-colors">Gallery</Link>
            <Link href="/contact" className="text-background/50 hover:text-primary transition-colors">Contact</Link>
            <Link href="/booking" className="text-background/50 hover:text-primary transition-colors">Book Now</Link>
            <Link href="/faq" className="text-background/50 hover:text-primary transition-colors">FAQ</Link>
          </nav>
        </div>

      </div>
    </footer>
  );
}
