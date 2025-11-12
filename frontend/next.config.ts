import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com","lh3.googleusercontent.com"],
  },
  eslint: {
    ignoreDuringBuilds: true, // 👈 ye line add karo
  },
};

export default nextConfig;
