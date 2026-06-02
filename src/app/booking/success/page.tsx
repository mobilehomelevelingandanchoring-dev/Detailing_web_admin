import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'Booking Confirmed | SRV Detailing',
  description: 'Your booking request has been received. SRV Detailing will confirm your appointment within 2 hours.',
  alternates: { canonical: 'https://www.srvdetailing.co.uk/booking/success' },
  robots: { index: false, follow: false },
};

export default function BookingSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="flex items-center justify-center px-4 py-20 sm:py-32">
        <div className="max-w-lg w-full text-center">

          {/* Checkmark */}
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-8">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Booking Request Received!
          </h1>

          <p className="text-gray-600 mb-2 text-lg">
            Thank you — we&apos;ll review your request and confirm your appointment within 2 hours.
          </p>

          <p className="text-gray-500 text-sm mb-10">
            A confirmation will be sent to your email shortly. If you need to speak to us urgently,
            call{' '}
            <a href="tel:+447375759686" className="text-[#0A5A3B] font-medium hover:underline">
              07375 759686
            </a>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-[#0A5A3B] text-white rounded-lg hover:bg-[#084830] transition-colors font-semibold"
            >
              Back to Home
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Explore Services
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
