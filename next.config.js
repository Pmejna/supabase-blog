/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: process.env.NEXT_PUBLIC_SUPABASE_API_URL,
  }
}

module.exports = nextConfig
