import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/favicon.ico',
      },
      {
        protocol: 'https',
        hostname: 'www.microsoft.com',
        pathname: '/favicon.ico',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        pathname: '/**', // allow all paths under this hostname
      },
      {
        protocol: 'https',
        hostname: 'clever.com',
        pathname: '/favicon.ico',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/wikipedia/commons/8/8f/Qr-2.png',
      },
    ],
  },
};

export default nextConfig;
