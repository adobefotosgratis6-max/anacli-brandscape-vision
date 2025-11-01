/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  reactStrictMode: true,
  images: {
    unoptimized: true, // Necessário para output: 'export'
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-bsb1-1.cdninstagram.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      }
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: [
      'framer-motion', 
      'lucide-react', 
      '@radix-ui/react-dialog', 
      '@radix-ui/react-toast',
      'swiper',
      'swiper/react',
      'swiper/modules'
    ],
  },
  // Otimizações de build para reduzir JavaScript legado
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      // Otimizar chunks
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        chunks: 'all',
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          // Separar vendors grandes
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            reuseExistingChunk: true,
          },
          // Separar framer-motion
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            priority: 20,
            reuseExistingChunk: true,
          },
          // Separar CSS
          styles: {
            name: 'styles',
            test: /\.(css|scss|sass)$/,
            chunks: 'all',
            enforce: true,
            priority: 30,
          },
        },
      }
      
      config.optimization.minimize = true
      
      // Remover polyfills desnecessários
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  },
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig