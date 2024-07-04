/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "farmui.vercel.app",
      },
    ],
  },
};

export default nextConfig;
