/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  transpilePackages: ["next-mdx-remote"],
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
