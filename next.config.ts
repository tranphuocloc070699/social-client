import type {NextConfig} from "next";

const nextConfig: NextConfig = {

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
