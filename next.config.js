/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [70, 75, 80, 85, 90, 95, 100],
    // Site uses remote images from Emergent CDN + Unsplash.
    remotePatterns: [
      { protocol: "https", hostname: "customer-assets.emergentagent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
