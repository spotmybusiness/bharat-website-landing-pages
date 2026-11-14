import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  distDir: process.env.DIST_DIR || '.next',
  images: {
    remotePatterns: imageHosts,
    minimumCacheTTL: 60,
    qualities: [75, 85, 100],
  },
  async redirects() {
    return [
      {
        source: '/moving-guides',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/blogs/packers-and-movers-kolkata-charges',
        destination: '/blogs/packers-and-movers-kolkata-charges-rate-card',
        permanent: true,
      },
    ];
  },
  webpack(
    config,
    {
      dev: dev
    }
  ) {
    if (dev) {
      // Disabled @dhiwise/component-tagger/nextLoader as it breaks Next.js 15 dev mode CSS injection
      const ignoredPaths = (process.env.WATCH_IGNORED_PATHS || '')
        .split(',')
        .map((p) => p.trim())
        .filter(Boolean);
      config.watchOptions = {
        ignored: ignoredPaths.length
          ? ignoredPaths.map((p) => `**/${p.replace(/^\/+|\/+$/g, '')}/**`)
          : undefined,
      };
    }
    return config;
  },
};
export default nextConfig;