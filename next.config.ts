import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "coolhunting.com" },
      { protocol: "https", hostname: "www.surfacemag.com" },
      { protocol: "http", hostname: "www.surfacemag.com" },
    ],
  },
};

export default nextConfig;
