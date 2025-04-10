/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
