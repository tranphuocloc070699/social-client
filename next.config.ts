import type {NextConfig} from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      },
      {
        protocol: "http",
        hostname: "localhost"
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        // destination: "http://social.tuoitre.vn/api/:path*"
        destination: `${process.env.BACKEND_DOMAIN}/api/:path*`
      }
    ];
  }
};

export default nextConfig;
