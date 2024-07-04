/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "farmui.vercel.app",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "dbrandria.com",
      },
    ],
  },
};

export default nextConfig;
