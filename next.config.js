/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Site uses remote images from Emergent CDN + Unsplash.
    remotePatterns: [
      { protocol: "https", hostname: "customer-assets.emergentagent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
