import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // If using <Image> from next/image
  },
  trailingSlash: true, // Needed for GitHub Pages
  basePath: '/GOE', // Replace with your repo name
};

export default nextConfig;
