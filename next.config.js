/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  fiber: false,
  includePaths: [path.join(__dirname, 'styles')],
}

module.exports = nextConfig
