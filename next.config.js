// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  assetPrefix: '',
  basePath: '', // ← AJOUTEZ CETTE LIGNE
}

module.exports = nextConfig