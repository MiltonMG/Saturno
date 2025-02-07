import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.itl.cat',
        port: '',
        pathname: '/pngfile/**',
        search: '',
      },
    ],
  }
};


export default nextConfig;
