import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.jpg';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { PHONE_TEL, PHONE_DISPLAY } from './nav-data';

export function Header() {
  return (
    <>
      {/* Skip-to-content — first focusable element in DOM */}
      <a
        href="#main-content"
        className="
          fixed top-3 left-3 z-[100]
          sr-only focus:not-sr-only
          focus:inline-flex focus:items-center
          focus:bg-primary focus:text-white
          focus:px-4 focus:py-2 focus:rounded-lg
          focus:text-sm focus:font-semibold
          focus:shadow-lg focus:outline-none
        "
      >
        Skip to main content
      </a>

      {/* Sticky header — data-scroll-shadow triggers CSS scroll-driven box-shadow */}
      <header
        data-scroll-shadow
        className="sticky top-0 z-40 bg-white border-b border-zinc-100"
      >
        <div className="container mx-auto px-4 h-14 lg:h-[68px] flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <Link
            href="/"
            aria-label="SRV Detailing — return to home"
            className="flex items-center gap-2.5 flex-shrink-0"
          >
            <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={logo}
                alt="SRV Detailing logo"
                width={44}
                height={44}
                quality={95}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-heading font-bold text-lg lg:text-xl text-foreground hidden xs:block leading-none">
              SRV <span className="text-primary">Detailing</span>
            </span>
          </Link>

          {/* ── Desktop centre nav + mega menus ── */}
          <DesktopNav />

          {/* ── Desktop right: phone + book ── */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href={PHONE_TEL}
              className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-primary transition-colors duration-150"
            >
              {/* Phone icon inline SVG — no lucide import needed in server component */}
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{PHONE_DISPLAY}</span>
            </a>

            <Link
              href="/booking"
              className="inline-flex items-center gap-1 bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-transform duration-150 hover:scale-[1.03] shadow-button"
            >
              Book Now
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>

            {/* Admin — subdued, staff-only entry point */}
            <Link
              href="/admin"
              aria-label="Admin panel"
              title="Admin"
              className="flex items-center gap-1 text-zinc-400 hover:text-zinc-700 transition-colors duration-150 border-l border-zinc-200 pl-3"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="text-xs font-medium">Admin</span>
            </Link>
          </div>

          {/* ── Mobile: Google stars + hamburger (inside MobileNav) ── */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Google review stars — social proof on mobile */}
            <a
              href="https://share.google/TQvh6CIzVf4Y4als3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SRV Detailing Google Reviews — 5 stars"
              className="hidden xs:flex items-center gap-1 text-zinc-500"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="flex gap-px" aria-hidden="true">
                {[0,1,2,3,4].map((i) => (
                  <svg key={i} className="w-2.5 h-2.5 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </a>

            <MobileNav />
          </div>

        </div>
      </header>
    </>
  );
}
