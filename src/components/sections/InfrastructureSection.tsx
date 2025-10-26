import infrastructureImage from "@/assets/infrastructure.jpg";

const InfrastructureSection = () => {
  return (
    <section id="estrutura" className="section-spacing bg-background relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={infrastructureImage}
          alt="Infraestrutura Anacli"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-primary/5" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl animate-fade-in-up">
          <h2 className="mb-6 text-foreground">
            Ambientes modernos, tecnologia de precisão.
          </h2>
          
          <div className="w-16 h-1 bg-primary mb-8" />
          
          <p className="text-xl text-foreground/80 leading-relaxed mb-8">
            Investimos continuamente em infraestrutura e inovação para garantir 
            resultados rápidos, seguros e confiáveis.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-foreground/70">
                Equipamentos de última geração para diagnósticos precisos
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-foreground/70">
                Ambientes climatizados e seguros conforme normas sanitárias
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-foreground/70">
                Sistema de gestão integrado para agilidade nos resultados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
