/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    remotePatterns: [
      {
        hostname: "s3.amazonaws.com",
      },
      {
        hostname: "cloudflare-ipfs.com",
      },
      {
        hostname: "loremflickr.com",
      },
    ],
  },
  // images: {
  //   loader: "custom",
  //   loaderFile: "./my-loader.js",
  // },
};

module.exports = nextConfig;
