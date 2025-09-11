/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com", // allow these remote images
    ],
  },
};

module.exports = nextConfig;
