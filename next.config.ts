import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [new URL("https://img.itch.zone/**")],
    unoptimized: true,
  },
};
export default nextConfig;
