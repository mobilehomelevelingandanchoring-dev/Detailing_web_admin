'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { CENTRE_NAV_LINKS } from './nav-data';
import { MegaMenuServices } from './MegaMenuServices';
import { MegaMenuLocations } from './MegaMenuLocations';

type MegaMenu = 'services' | 'locations' | null;

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export function DesktopNav() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<MegaMenu>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout>>();
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const isServicesActive =
    pathname.includes('/car-detailing') || pathname.includes('/car-valeting');

  const isLocationsActive =
    ['/manchester', '/stockport', '/wilmslow', '/warrington'].some((l) =>
      pathname.startsWith(l),
    );

  const scheduleOpen = useCallback((menu: MegaMenu) => {
    clearTimeout(closeTimer.current);
    clearTimeout(openTimer.current);
    openTimer.current = setTimeout(() => setActiveMenu(menu), 150);
  }, []);

  const scheduleClose = useCallback(() => {
    clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 200);
  }, []);

  const cancelClose = useCallback(() => {
    clearTimeout(closeTimer.current);
  }, []);

  return (
    <>
      {/* ── Centre navigation ── */}
      <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
        {/* Services trigger */}
        <div
          className="relative"
          onMouseEnter={() => scheduleOpen('services')}
          onMouseLeave={scheduleClose}
        >
          <button
            aria-haspopup="true"
            aria-expanded={activeMenu === 'services'}
            aria-controls="mega-services"
            className={cn(
              'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
              isServicesActive || activeMenu === 'services'
                ? 'text-primary font-semibold'
                : 'text-zinc-600 hover:text-zinc-900',
            )}
          >
            Services
            <ChevronDown
              className={cn(
                'w-3.5 h-3.5 transition-transform duration-200',
                activeMenu === 'services' ? 'rotate-180' : '',
              )}
              aria-hidden
            />
          </button>

          {/* Services mega panel */}
          <div
            id="mega-services"
            role="region"
            aria-label="Services menu"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            className={cn(
              'fixed inset-x-0 top-[56px] lg:top-[68px] z-30',
              'bg-white border-b border-zinc-100 shadow-[0_4px_24px_rgba(0,0,0,0.07)]',
              'transition-all duration-[180ms] ease-out',
              activeMenu === 'services'
                ? 'visible opacity-100 translate-y-0'
                : 'invisible opacity-0 -translate-y-2 pointer-events-none',
            )}
          >
            <MegaMenuServices />
          </div>
        </div>

        {/* Locations trigger */}
        <div
          className="relative"
          onMouseEnter={() => scheduleOpen('locations')}
          onMouseLeave={scheduleClose}
        >
          <button
            aria-haspopup="true"
            aria-expanded={activeMenu === 'locations'}
            aria-controls="mega-locations"
            className={cn(
              'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
              isLocationsActive || activeMenu === 'locations'
                ? 'text-primary font-semibold'
                : 'text-zinc-600 hover:text-zinc-900',
            )}
          >
            Locations
            <ChevronDown
              className={cn(
                'w-3.5 h-3.5 transition-transform duration-200',
                activeMenu === 'locations' ? 'rotate-180' : '',
              )}
              aria-hidden
            />
          </button>

          {/* Locations mega panel */}
          <div
            id="mega-locations"
            role="region"
            aria-label="Locations menu"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            className={cn(
              'fixed inset-x-0 top-[56px] lg:top-[68px] z-30',
              'bg-white border-b border-zinc-100 shadow-[0_4px_24px_rgba(0,0,0,0.07)]',
              'transition-all duration-[180ms] ease-out',
              activeMenu === 'locations'
                ? 'visible opacity-100 translate-y-0'
                : 'invisible opacity-0 -translate-y-2 pointer-events-none',
            )}
          >
            <MegaMenuLocations />
          </div>
        </div>

        {/* Simple centre links */}
        {CENTRE_NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive(link.href) ? 'page' : undefined}
            className={cn(
              'px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
              isActive(link.href)
                ? 'text-primary font-semibold'
                : 'text-zinc-600 hover:text-zinc-900',
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Backdrop — closes menus on click outside */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-20 lg:block hidden"
          aria-hidden
          onClick={() => setActiveMenu(null)}
        />
      )}
    </>
  );
}
