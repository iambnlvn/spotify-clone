/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "misc.scdn.co",
        path: "/liked-songs/liked-songs-300.png",
        pathname: "/liked-songs/liked-songs-300.png",
      },
    ],
  },
};

module.exports = nextConfig;
