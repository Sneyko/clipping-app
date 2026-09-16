import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  devIndicators: false,
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/poster-us", destination: "/regles", permanent: false },
      { source: "/shadowban", destination: "/regles", permanent: false },
      { source: "/process-assets", destination: "/aven-assets", permanent: false },
    ];
  },
};

export default nextConfig;
