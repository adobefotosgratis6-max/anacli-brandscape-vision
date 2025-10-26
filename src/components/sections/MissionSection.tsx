const MissionSection = () => {
  return (
    <section id="sobre" className="section-spacing bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up space-y-6">
            <h2 className="text-foreground">
              Excelência técnica, responsabilidade humana.
            </h2>
            
            <div className="w-16 h-1 bg-primary" />
            
            <p className="text-lg text-foreground/70 leading-relaxed">
              A Anacli une tecnologia de ponta e atendimento humanizado para oferecer 
              um serviço laboratorial de referência. Nosso compromisso é com a precisão 
              científica e o respeito a cada paciente.
            </p>
            
            <p className="text-lg text-foreground/70 leading-relaxed">
              Investimos continuamente em infraestrutura, capacitação e inovação para 
              garantir resultados rápidos, seguros e confiáveis. Nossa equipe é formada 
              por profissionais altamente qualificados, comprometidos com a excelência 
              em cada etapa do processo.
            </p>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/10 border border-primary/20 p-12 flex items-center justify-center">
              <div className="text-center space-y-8">
                <div className="space-y-2">
                  <div className="text-6xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Anos de experiência</div>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">15k+</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Exames/mês</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">95%</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Satisfação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
