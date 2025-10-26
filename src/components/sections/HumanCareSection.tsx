import humanCareImage from "@/assets/human-care.jpg";

const HumanCareSection = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={humanCareImage}
                alt="Atendimento humanizado"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 animate-fade-in-up space-y-6">
            <h2 className="text-foreground relative inline-block">
              Cada exame é sobre pessoas.
              <span className="absolute -bottom-2 left-0 w-24 h-1 bg-accent" />
            </h2>
            
            <div className="w-16 h-1 bg-primary mt-8" />
            
            <p className="text-xl text-foreground/80 leading-relaxed">
              Na Anacli, entendemos que cada resultado é parte de uma história de vida. 
              Por isso, nosso atendimento é feito com respeito, empatia e sigilo.
            </p>
            
            <p className="text-lg text-foreground/70 leading-relaxed">
              Nossos profissionais são treinados não apenas para executar procedimentos 
              técnicos com excelência, mas também para acolher cada pessoa que nos procura. 
              Acreditamos que a confiança se constrói no dia a dia, com atenção aos detalhes 
              e comprometimento genuíno.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanCareSection;
