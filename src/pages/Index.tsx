import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import MissionSection from "@/components/sections/MissionSection";

// Lazy load componentes não críticos
const ConveniosSection = lazy(() => import("@/components/sections/ConveniosSection"));
const HybridBentoSection = lazy(() => import("@/components/sections/HybridBentoSection"));
const NewsSection = lazy(() => import("@/components/sections/NewsSection"));
const InstagramSection = lazy(() => import("@/components/sections/InstagramSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));
const FinalStatementSection = lazy(() => import("@/components/sections/FinalStatementSection"));

// Componente de loading
const SectionSkeleton = () => (
  <div className="w-full h-96 bg-gray-100 animate-pulse rounded-lg" />
);

const Index = () => {
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
  );
};

export default Index;
