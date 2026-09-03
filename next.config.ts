import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  transpilePackages: ["@sanity/workbench"],
  async redirects() {
    return [
      {
        source: "/sanity",
        destination: "/studio",
        permanent: false,
      },
      {
        source: "/sanity/:path*",
        destination: "/studio/:path*",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
