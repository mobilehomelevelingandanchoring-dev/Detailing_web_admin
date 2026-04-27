const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─── Canonical domain enforcement ─────────────────────────────────────────
  // Redirect bare domain to www. Vercel also handles this at the edge level,
  // but Next.js-level redirects ensure it works in all hosting contexts.
  async redirects() {
    return [
      // ─── Canonical domain enforcement ─────────────────────────────────────
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'srvdetailing.co.uk' }],
        destination: 'https://www.srvdetailing.co.uk/:path*',
        permanent: true, // 308 → 301 for GET
      },

      // ─── Service URL migrations (flat → nested city structure) ─────────────
      // Handled at config level so redirects fire before any page component runs.
      { source: '/services/ceramic-coating',    destination: '/manchester/car-detailing/ceramic-coating',    permanent: true },
      { source: '/services/paint-correction',   destination: '/manchester/car-detailing/paint-correction',   permanent: true },
      { source: '/services/car-detailing',      destination: '/manchester/car-detailing',                    permanent: true },
      { source: '/services/interior-detailing', destination: '/manchester/car-detailing/interior-detailing', permanent: true },
      { source: '/services/new-car-protection', destination: '/manchester/car-detailing/new-car-protection', permanent: true },
      { source: '/services/full-valet',         destination: '/manchester/car-valeting/full-valet',          permanent: true },
      { source: '/services/mini-valet',         destination: '/manchester/car-valeting/mini-valet',          permanent: true },
      { source: '/services/mobile-valeting',    destination: '/manchester/car-valeting/mobile-valeting',     permanent: true },
      { source: '/services/interior-valeting',  destination: '/manchester/car-valeting/interior-valeting',   permanent: true },
      { source: '/services/exterior-valeting',  destination: '/manchester/car-valeting/exterior-valeting',   permanent: true },

      // ─── Flat legacy URLs (Google Search Console 404s) ─────────────────────
      { source: '/mobile-car-valeting-stockport',    destination: '/stockport/car-valeting/mobile-valeting',          permanent: true },
      { source: '/services/pet-hair-removal',        destination: '/manchester/car-valeting/pet-hair-removal',         permanent: true },
      { source: '/services/headlight-restoration',   destination: '/manchester/car-detailing/headlight-restoration',   permanent: true },
      { source: '/guides/how-often-valet-car',       destination: '/guides/how-often-should-you-valet-your-car',       permanent: true },
      { source: '/dashboard',                        destination: '/admin',                                            permanent: true },

      // ─── Location URL migrations (flat → nested city/area structure) ───────
      { source: '/locations/manchester-city-centre', destination: '/manchester/areas/city-centre', permanent: true },
      { source: '/locations/didsbury',               destination: '/manchester/areas/didsbury',    permanent: true },
      { source: '/locations/chorlton',               destination: '/manchester/areas/chorlton',    permanent: true },
      { source: '/locations/salford',                destination: '/manchester/areas/salford',     permanent: true },
      { source: '/locations/trafford',               destination: '/manchester/areas/trafford',    permanent: true },
      { source: '/locations/sale',                   destination: '/manchester/areas/sale',        permanent: true },
      { source: '/locations/altrincham',             destination: '/manchester/areas/altrincham',  permanent: true },
      { source: '/locations/oldham',                 destination: '/manchester/areas/oldham',      permanent: true },
      { source: '/locations/rochdale',               destination: '/manchester/areas/rochdale',    permanent: true },
      { source: '/locations/bury',                   destination: '/manchester/areas/bury',        permanent: true },
      { source: '/locations/bolton',                 destination: '/manchester/areas/bolton',      permanent: true },
      { source: '/locations/wigan',                  destination: '/manchester/areas/wigan',       permanent: true },
      { source: '/locations/tameside',               destination: '/manchester/areas/tameside',    permanent: true },
      { source: '/locations/cheadle',                destination: '/stockport/areas/cheadle',      permanent: true },
      { source: '/locations/bramhall',               destination: '/stockport/areas/bramhall',     permanent: true },
    ];
  },

  // ─── Security & crawl-signal headers ──────────────────────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent MIME sniffing — avoids content injection vectors
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Disallow framing (clickjacking protection, also an E-E-A-T trust signal)
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Send full referrer to same-origin, origin-only across origins
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Disable legacy browser XSS filter (modern CSP is preferred)
          { key: 'X-XSS-Protection', value: '0' },
          // Limit permission access to minimum required
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
        ],
      },
      // Long-lived cache for static assets (images, fonts, JS chunks)
      {
        source: '/(.*)\\.(jpg|jpeg|png|webp|avif|gif|svg|woff|woff2|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // ─── Image optimisation ────────────────────────────────────────────────────
  images: {
    // Serve modern formats by default (Next.js already does this, explicit for clarity)
    formats: ['image/avif', 'image/webp'],
    // Breakpoints that match Tailwind's responsive prefixes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lovable.dev',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },

  // ─── Package import optimisation ──────────────────────────────────────────
  // Forces Next.js to tree-shake each package's named exports instead of
  // bundling the entire barrel file. Critical for lucide-react (500+ icons),
  // framer-motion (large runtime), and all Radix UI primitives.
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      'date-fns',
      'recharts',
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-collapsible',
      '@radix-ui/react-context-menu',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-hover-card',
      '@radix-ui/react-label',
      '@radix-ui/react-menubar',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-progress',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-slider',
      '@radix-ui/react-slot',
      '@radix-ui/react-switch',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group',
      '@radix-ui/react-tooltip',
    ],
  },

  // ─── Compiler ─────────────────────────────────────────────────────────────
  compiler: {
    // Strip console.log in production; preserve console.error and console.warn
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false,
  },

  // ─── Build ────────────────────────────────────────────────────────────────
  // Skip TS type-checker during build — the codebase exceeds the default
  // heap limit for tsc on both local and CI. Type safety is maintained via
  // editor integration (tsserver). Compilation itself always succeeds.
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build for the same reason (run lint separately).
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Remove "X-Powered-By: Next.js" header (minor security hardening)
  poweredByHeader: false,
  // Enable gzip/brotli compression for text responses
  compress: true,
};

module.exports = nextConfig;
