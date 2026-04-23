import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/best-guinness/:path*',
        destination: 'https://best-guinness.vercel.app/best-guinness/:path*',
      },
      {
        source: '/ai-swing-coach/:path*',
        destination: 'https://fun-project-olive.vercel.app/ai-swing-coach/:path*',
      },
    ];
  },
};

export default nextConfig;
