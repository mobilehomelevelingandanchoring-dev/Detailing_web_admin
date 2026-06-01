import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Detailing Blog | Tips & Guides | SRV Detailing",
  description:
    "Expert car detailing tips, guides and industry insights from SRV Detailing Manchester. Ceramic coating, paint correction, valeting advice and seasonal car care.",
  keywords: [
    "car detailing blog",
    "car care tips Manchester",
    "ceramic coating guide",
    "paint correction advice",
    "mobile valeting tips",
    "car detailing guides UK",
  ],
  alternates: {
    canonical: "https://www.srvdetailing.co.uk/blog",
  },
  openGraph: {
    title: "Car Detailing Blog | Tips & Guides | SRV Detailing",
    description:
      "Expert car detailing tips, guides and industry insights from SRV Detailing Manchester.",
    url: "https://www.srvdetailing.co.uk/blog",
    type: "website",
    locale: "en_GB",
    siteName: "SRV Detailing",
    images: [
      {
        url: "/mobile-van.webp",
        width: 1200,
        height: 630,
        alt: "SRV Detailing car care blog — expert guides and tips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Detailing Blog | SRV Detailing Manchester",
    description:
      "Expert car detailing tips and guides from SRV Detailing.",
    images: ["/mobile-van.webp"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
