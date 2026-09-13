import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://localhost:3000", "http://192.168.1.37:3000", "192.168.1.37"],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
