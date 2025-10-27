import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import MissionSection from "@/components/sections/MissionSection";
import ConveniosSection from "@/components/sections/ConveniosSection";
import HybridBentoSection from "@/components/sections/HybridBentoSection";
import NewsSection from "@/components/sections/NewsSection";
import InstagramSection from "@/components/sections/InstagramSection";
import ContactSection from "@/components/sections/ContactSection";
import FinalStatementSection from "@/components/sections/FinalStatementSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CertificatesSection />
        <MissionSection />
        <ConveniosSection />
        <HybridBentoSection />
        <NewsSection />
        <InstagramSection />
        <ContactSection />
        <FinalStatementSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
