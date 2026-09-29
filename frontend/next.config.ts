import type { NextConfig } from "next";

const isStaticExport =
  process.env.GITHUB_ACTIONS === "true" ||
  Object.prototype.hasOwnProperty.call(process.env, "PAGES_BASE_PATH");
const configuredBasePath = (process.env.PAGES_BASE_PATH ?? "").trim();
const basePath = configuredBasePath
  ? `/${configuredBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : "standalone",

  images: {
    unoptimized: isStaticExport,
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
      {
        protocol: "https",
        hostname: "d2yobq6ugd5avs.cloudfront.net",
        pathname: "/media/**",
      },
    ],
  },

  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: isStaticExport,
};

export default nextConfig;
