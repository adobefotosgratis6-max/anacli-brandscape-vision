import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Reduzido para apenas pesos essenciais
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
  adjustFontFallback: true, // Ajusta métricas da fonte fallback
  variable: '--font-jakarta', // CSS variable para melhor performance
})

export const metadata: Metadata = {
  title: 'Anacli Laboratorial - Excelência em Análises Clínicas',
  description: 'Laboratório de análises clínicas em Feira de Santana - BA. Mais de 56 anos de experiência, tecnologia de ponta e atendimento humanizado. Exames laboratoriais, toxicológicos e check-ups.',
  authors: [{ name: 'Anacli Laboratorial' }],
  keywords: ['laboratório', 'análises clínicas', 'exames', 'Feira de Santana', 'Bahia', 'toxicológico', 'check-up'],
  openGraph: {
    title: 'Anacli Laboratorial - Excelência em Análises Clínicas',
    description: 'Laboratório de análises clínicas em Feira de Santana - BA. Mais de 56 anos de experiência com precisão técnica e atendimento humanizado.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Anacli Laboratorial',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={plusJakartaSans.className}>
      <head>
        {/* Critical CSS inline para evitar render blocking */}
        <style dangerouslySetInnerHTML={{__html: `
          :root{--background:0 0% 100%;--foreground:0 0% 15%;--primary:68 68% 45%;--primary-foreground:0 0% 100%;--accent:335 100% 50%;--radius:0.75rem}
          *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:hsl(0 0% 90%)}
          html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:system-ui,-apple-system,sans-serif}
          body{margin:0;line-height:inherit;background:hsl(var(--background));color:hsl(var(--foreground));-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
          .min-h-screen{min-height:100vh}
          img,video{max-width:100%;height:auto;content-visibility:auto}
          button{cursor:pointer}
          a{color:inherit;text-decoration:inherit}
          h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}
        `}} />
        
        {/* Pré-conexão com Google Fonts para Plus Jakarta Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Pré-conexão com CDN do Instagram - com dns-prefetch como fallback */}
        <link rel="preconnect" href="https://scontent-bsb1-1.cdninstagram.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://scontent-bsb1-1.cdninstagram.com" />
        
        {/* Preload de recursos críticos com fetchpriority */}
        <link rel="preload" href="/assets/logo.svg" as="image" type="image/svg+xml" fetchPriority="high" />
        <link rel="preload" href="/assets/unidade.avif" as="image" type="image/avif" fetchPriority="high" />
        
        {/* Otimizações de performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}