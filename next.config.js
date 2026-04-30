/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // Ensure Hebrew letters aleph, bet, samekh, dalet stay in top-right across all pages
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Hebrew-Letters',
            value: 'אבסד',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig