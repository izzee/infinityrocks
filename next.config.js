/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: ['styles'],
    prependData: `@import "@/styles/shared/mixins.scss";`
  },
}

module.exports = nextConfig

