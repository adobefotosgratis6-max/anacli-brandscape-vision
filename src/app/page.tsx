'use client';

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import CertificatesSection from '@/components/sections/CertificatesSection'
import MissionSection from '@/components/sections/MissionSection'

// Lazy load componentes não críticos com Next.js dynamic
const ConveniosSection = dynamic(() => import('@/components/sections/ConveniosSection'), {
  loading: () => <SectionSkeleton />,
  ssr: false
})

const HybridBentoSection = dynamic(() => import('@/components/sections/HybridBentoSection'), {
  loading: () => <SectionSkeleton />,
  ssr: false
})

const NewsSection = dynamic(() => import('@/components/sections/NewsSection'), {
  loading: () => <SectionSkeleton />,
  ssr: false
})

const InstagramSection = dynamic(() => import('@/components/sections/InstagramSection'), {
  loading: () => <SectionSkeleton />,
  ssr: false
})

const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
  loading: () => <SectionSkeleton />,
  ssr: false
})

const FinalStatementSection = dynamic(() => import('@/components/sections/FinalStatementSection'), {
  loading: () => <SectionSkeleton />,
  ssr: false
})

// Componente de loading otimizado
const SectionSkeleton = () => (
  <div className="w-full h-96 bg-gray-100 animate-pulse rounded-lg mx-auto max-w-7xl" />
)

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CertificatesSection />
        <MissionSection />
        <Suspense fallback={<SectionSkeleton />}>
          <ConveniosSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <HybridBentoSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <NewsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <InstagramSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ContactSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FinalStatementSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}