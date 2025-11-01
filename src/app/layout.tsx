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
          :root{--background:0 0% 100%;--foreground:0 0% 15%;--primary:68 68% 45%;--primary-foreground:0 0% 100%}
          *{box-sizing:border-box}
          body{margin:0;background:hsl(var(--background));color:hsl(var(--foreground));font-family:system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased}
          .min-h-screen{min-height:100vh}
        `}} />
        
        {/* Pré-conexão com Google Fonts para Plus Jakarta Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Pré-conexão com CDN do Instagram */}
        <link rel="preconnect" href="https://scontent-bsb1-1.cdninstagram.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://scontent-bsb1-1.cdninstagram.com" />
        
        {/* Preload de recursos críticos */}
        <link rel="preload" href="/assets/logo.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/assets/unidade.avif" as="image" type="image/avif" />
        
        {/* Otimizações de performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}