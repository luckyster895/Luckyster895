import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH="/<repo-name>" when deploying to a project page
// (https://<user>.github.io/<repo>). Leave empty for <user>.github.io.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
