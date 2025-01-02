/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash',
      },
      {
        protocol: 'https',
        hostname: 'cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
