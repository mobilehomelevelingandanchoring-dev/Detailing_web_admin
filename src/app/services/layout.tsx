import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Valeting & Detailing Services | SRV Detailing Manchester",
  description:
    "Professional car valeting and detailing services in Manchester. Mobile valeting, paint correction, ceramic coating, interior deep cleaning. 22 years experience.",
  keywords: [
    "car valeting Manchester",
    "car detailing Manchester",
    "mobile car valeting",
    "paint correction Manchester",
    "ceramic coating Manchester",
    "interior car detailing",
  ],
  alternates: {
    canonical: "https://www.srvdetailing.co.uk/services",
  },
  openGraph: {
    title: "Car Valeting & Detailing Services | SRV Detailing Manchester",
    description:
      "Professional car valeting and detailing services in Manchester. Mobile valeting, paint correction, ceramic coating, interior deep cleaning.",
    url: "https://www.srvdetailing.co.uk/services",
    type: "website",
    locale: "en_GB",
    siteName: "SRV Detailing",
    images: [
      {
        url: "/mobile-van.webp",
        width: 1200,
        height: 630,
        alt: "SRV Detailing professional mobile car valeting and detailing services Manchester",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Valeting & Detailing Services | SRV Detailing",
    description:
      "Professional car valeting and detailing services in Manchester. 22 years experience.",
    images: ["/mobile-van.webp"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
