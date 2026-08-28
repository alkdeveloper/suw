import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubPages ? "/suw" : "";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : "standalone",

  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cms.alk.com.tr",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.alk.com.tr",
        pathname: "/**",
      },
    ],
  },

  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: isGithubPages,
};

export default nextConfig;
