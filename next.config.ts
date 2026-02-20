import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath is /polished when hosted at lecroy.github.io/polished.
  // Remove this line when using a custom domain (e.g. getpolished.com).
  basePath: process.env.BASE_PATH || "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
