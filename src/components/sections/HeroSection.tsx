import heroImage from "@/assets/hero-lab.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Laboratório Anacli"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-secondary/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="mb-6 text-foreground leading-tight">
            Confiança construída com ciência e cuidado.
          </h1>
          
          <div className="w-20 h-1 bg-primary mb-8" />
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 leading-relaxed font-light">
            Há mais de 20 anos, o Laboratório Anacli realiza exames com precisão técnica, 
            ética e dedicação humana.
          </p>
          
          <a
            href="#sobre"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300 group"
          >
            Saiba mais sobre o Anacli
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
