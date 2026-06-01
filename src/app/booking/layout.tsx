import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Your Mobile Car Service — Stockport & Manchester | SRV Detailing',
  description:
    'Book your professional mobile car detailing, valeting, or ceramic coating with SRV Detailing. Serving Stockport, Manchester & Greater Manchester. 24/7 — we come to you.',
  keywords: [
    'book mobile car detailing stockport',
    'book car valeting manchester',
    'ceramic coating booking stockport',
    'mobile car care booking greater manchester',
    'SRV Detailing booking',
  ],
  alternates: { canonical: 'https://www.srvdetailing.co.uk/booking' },
  openGraph: {
    title: 'Book Your Mobile Car Service — Stockport & Manchester | SRV Detailing',
    description:
      'Professional mobile car detailing, valeting, and ceramic coating — Stockport & Manchester. Book online, 24/7.',
    url: 'https://www.srvdetailing.co.uk/booking',
    type: 'website',
    locale: 'en_GB',
    siteName: 'SRV Detailing',
    images: [
      {
        url: '/images/gallery/srv-detailing-ceramic-coating-stockport-01.webp.webp',
        width: 1200,
        height: 630,
        alt: 'SRV Detailing mobile ceramic coating in Stockport — book your mobile car service online',
      },
    ],
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}