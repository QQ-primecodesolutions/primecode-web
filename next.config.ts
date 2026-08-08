import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/aboutUs.html", destination: "/about", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
