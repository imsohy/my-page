import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    dirs: ["src"]
  },
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;

