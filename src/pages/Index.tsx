import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import InfrastructureSection from "@/components/sections/InfrastructureSection";
import PartnershipsSection from "@/components/sections/PartnershipsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import HumanCareSection from "@/components/sections/HumanCareSection";
import NewsSection from "@/components/sections/NewsSection";
import ContactSection from "@/components/sections/ContactSection";
import FinalStatementSection from "@/components/sections/FinalStatementSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <ExpertiseSection />
        <InfrastructureSection />
        <PartnershipsSection />
        <CertificationsSection />
        <HumanCareSection />
        <NewsSection />
        <ContactSection />
        <FinalStatementSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
