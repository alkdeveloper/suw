import path from "node:path";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname),
  images: {
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
};

export default nextConfig;
