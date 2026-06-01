// NOTE: No layout-level canonical is exported here.
// A static canonical in a layout is inherited by every descendant page that
// doesn't set its own alternates, causing all sub-pages to report the same
// canonical URL to search engines — a duplicate-content signal.
// Each page.tsx under /stockport/ sets its own canonical via generateMetadata
// or a static metadata export, which is the correct App Router pattern.

export default function StockportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
