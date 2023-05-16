const { config } = require('process');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
    
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "bs.plantnet.org",
      },
    ],
  },
};

module.exports = nextConfig;
