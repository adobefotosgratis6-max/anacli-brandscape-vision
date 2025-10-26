const partnerships = [
  "Unimed",
  "Bradesco Saúde",
  "SulAmérica",
  "Amil",
  "Golden Cross",
  "Porto Seguro Saúde",
  "NotreDame Intermédica",
  "Hapvida",
];

const PartnershipsSection = () => {
  return (
    <section id="convenios" className="section-spacing bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-4">Comprometidos com acessibilidade e excelência.</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Atendemos os principais convênios e oferecemos condições exclusivas para parceiros.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {partnerships.map((partner, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-8 rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-elegant transition-all duration-300 bg-white hover-lift"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-lg font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
