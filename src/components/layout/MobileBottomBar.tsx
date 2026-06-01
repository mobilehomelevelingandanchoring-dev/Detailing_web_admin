'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Home, List, Calendar } from 'lucide-react';
import type { BottomBarItem, BottomBarIconName } from './nav-data';
import { BOTTOM_BAR_ITEMS } from './nav-data';

const iconMap: Record<BottomBarIconName, React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>> = {
  phone:    Phone,
  home:     Home,
  list:     List,
  calendar: Calendar,
};

export function MobileBottomBar() {
  const pathname = usePathname();

  return (
    <>
      {/* Inline keyframes — avoids globals.css dependency */}
      <style>{`
        @keyframes srv-book-pulse {
          0%, 88%, 100% { transform: scale(1); }
          94% { transform: scale(1.04); }
        }
        .srv-book-pulse {
          animation: srv-book-pulse 3s ease-in-out 2s infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .srv-book-pulse { animation: none; }
        }
        .srv-tab-press:active { transform: scale(0.95); }
      `}</style>

      <nav
        aria-label="Quick navigation"
        className="fixed bottom-0 inset-x-0 z-50 lg:hidden will-change-transform"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="flex h-14 bg-white border-t border-zinc-200 shadow-[0_-1px_12px_rgba(0,0,0,0.08)]">
          {BOTTOM_BAR_ITEMS.map((item) => (
            <BottomTab
              key={item.href}
              item={item}
              isActive={
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href)
              }
            />
          ))}
        </div>
      </nav>
    </>
  );
}

function BottomTab({
  item,
  isActive,
}: {
  item: BottomBarItem;
  isActive: boolean;
}) {
  const Icon = iconMap[item.iconName];

  const baseClass =
    'flex flex-col items-center justify-center flex-1 gap-0.5 min-h-[48px] text-xs font-medium select-none touch-manipulation transition-colors duration-150 srv-tab-press';

  if (item.isAccent) {
    return (
      <Link
        href={item.href}
        aria-label={item.label}
        className={`${baseClass} bg-primary text-white srv-book-pulse`}
      >
        <Icon className="w-5 h-5" aria-hidden />
        <span>{item.label}</span>
      </Link>
    );
  }

  if (item.isPhone) {
    return (
      <a
        href={item.href}
        aria-label="Call SRV Detailing"
        className={`${baseClass} text-emerald-600 hover:text-emerald-700`}
      >
        <Icon className="w-5 h-5" aria-hidden />
        <span>{item.label}</span>
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      aria-label={item.label}
      aria-current={isActive ? 'page' : undefined}
      className={`${baseClass} ${
        isActive
          ? 'text-primary border-t-2 border-primary -mt-0.5'
          : 'text-zinc-500 hover:text-zinc-700'
      }`}
    >
      <Icon className="w-5 h-5" aria-hidden />
      <span>{item.label}</span>
    </Link>
  );
}
