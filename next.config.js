/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: ['styles'],
    prependData: `@import "@/styles/shared/mixins.scss";`
  },
  async rewrites() {
    return [
      {
        source: '/shop',
        destination: '/shop/index.html',
      },
    ];
  },
}



module.exports = nextConfig

