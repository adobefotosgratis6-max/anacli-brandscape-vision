import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  preload: true,
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
        <link rel="preconnect" href="https://scontent-bsb1-1.cdninstagram.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://scontent-bsb1-1.cdninstagram.com" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}