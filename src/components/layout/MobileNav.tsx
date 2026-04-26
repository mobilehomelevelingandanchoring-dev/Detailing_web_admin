'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.jpg';
import {
  LOCATIONS_NAV,
  DETAILING_NAV,
  VALETING_NAV,
  CENTRE_NAV_LINKS,
  PHONE_TEL,
  PHONE_DISPLAY,
} from './nav-data';

type OpenSection = 'detailing' | 'valeting' | null;

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<OpenSection>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    setOpenSection(null);
  }, []);

  // Scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus first element in overlay
      requestAnimationFrame(() => firstFocusRef.current?.focus());
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) close();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, close]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !overlayRef.current) return;
    const el = overlayRef.current;
    const focusable = el.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    el.addEventListener('keydown', trap);
    return () => el.removeEventListener('keydown', trap);
  }, [isOpen, openSection]);

  const toggleSection = (section: OpenSection) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <>
      {/* ── Hamburger trigger (shows in mobile header) ── */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-overlay"
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors duration-150"
      >
        <Menu className="w-6 h-6" aria-hidden />
      </button>

      {/* ── Full-screen overlay ── */}
      <div
        id="mobile-nav-overlay"
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-[280ms] ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-[280ms] ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={close}
          aria-hidden
        />

        {/* Panel — slides up from bottom */}
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`
            absolute bottom-0 inset-x-0 bg-white rounded-t-2xl
            max-h-[92dvh] flex flex-col overflow-hidden
            transition-transform ease-[cubic-bezier(0.32,0.72,0,1)]
            ${isOpen ? 'duration-[280ms] translate-y-0' : 'duration-[220ms] translate-y-full'}
          `}
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between h-14 px-4 border-b border-zinc-100 flex-shrink-0">
            <Link href="/" onClick={close} aria-label="SRV Detailing — home">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md overflow-hidden">
                  <Image
                    src={logo}
                    alt="SRV Detailing"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-heading font-bold text-base text-foreground">
                  SRV <span className="text-primary">Detailing</span>
                </span>
              </div>
            </Link>
            <button
              ref={firstFocusRef}
              onClick={close}
              aria-label="Close navigation menu"
              className="flex items-center justify-center w-10 h-10 rounded-lg text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100 transition-colors duration-150"
            >
              <X className="w-5 h-5" aria-hidden />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto flex-1">
            {/* Location pills */}
            <div className="px-4 pt-5 pb-4">
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3">
                Your Location
              </p>
              <div className="grid grid-cols-2 gap-2">
                {LOCATIONS_NAV.map((loc) => (
                  <Link
                    key={loc.href}
                    href={loc.href}
                    onClick={close}
                    className="flex items-center justify-center h-12 px-3 rounded-full border border-zinc-200 text-sm font-medium text-zinc-700 hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors duration-150"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="h-px bg-zinc-100 mx-4" />

            {/* Car Detailing accordion */}
            <MobileAccordionSection
              title="Car Detailing"
              links={DETAILING_NAV.links}
              isOpen={openSection === 'detailing'}
              onToggle={() => toggleSection('detailing')}
              onLinkClick={close}
            />

            {/* Car Valeting accordion */}
            <MobileAccordionSection
              title="Car Valeting"
              links={VALETING_NAV.links}
              isOpen={openSection === 'valeting'}
              onToggle={() => toggleSection('valeting')}
              onLinkClick={close}
            />

            <div className="h-px bg-zinc-100 mx-4" />

            {/* Simple links row */}
            <div className="flex flex-wrap gap-x-5 gap-y-1 px-4 py-4">
              {CENTRE_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="text-sm font-medium text-zinc-600 hover:text-primary py-2 transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="h-px bg-zinc-100 mx-4" />

            {/* CTAs */}
            <div className="p-4 space-y-3 pb-6">
              <Link
                href="/booking"
                onClick={close}
                className="flex items-center justify-center gap-2 w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold text-base transition-colors duration-150 active:scale-[0.98]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Book Now &mdash; It&rsquo;s Free
              </Link>
              <a
                href={PHONE_TEL}
                className="flex items-center justify-center gap-2 w-full h-12 border border-zinc-200 hover:border-primary rounded-xl font-medium text-sm text-zinc-700 hover:text-primary transition-colors duration-150"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call Us &mdash; {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Internal accordion section ────────────────────────────────────────────────

interface AccordionSectionProps {
  title: string;
  links: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
}

function MobileAccordionSection({
  title,
  links,
  isOpen,
  onToggle,
  onLinkClick,
}: AccordionSectionProps) {
  const panelId = `mobile-acc-${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex items-center justify-between w-full h-14 px-4 text-sm font-semibold text-zinc-800 hover:text-primary transition-colors duration-150"
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden
        />
      </button>

      <div
        id={panelId}
        className="overflow-hidden transition-[max-height] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ maxHeight: isOpen ? '600px' : '0px' }}
        aria-hidden={!isOpen}
      >
        <ul className="pb-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onLinkClick}
                tabIndex={isOpen ? 0 : -1}
                className="flex items-center h-13 min-h-[52px] px-6 text-sm text-zinc-600 hover:text-primary hover:bg-primary/5 transition-colors duration-120"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
