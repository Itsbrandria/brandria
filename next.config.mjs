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
      {
        hostname: "wordpress-1021214-4677805.cloudwaysapps.com",
      },
    ],
  },
};

export default nextConfig;
