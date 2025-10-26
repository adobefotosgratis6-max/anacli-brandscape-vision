import { Award, CheckCircle, Shield } from "lucide-react";

const certifications = [
  {
    icon: Award,
    name: "PALC",
    description: "Programa de Acreditação de Laboratórios Clínicos",
  },
  {
    icon: CheckCircle,
    name: "ISO 9001",
    description: "Sistema de Gestão da Qualidade",
  },
  {
    icon: Shield,
    name: "SBAC",
    description: "Sociedade Brasileira de Análises Clínicas",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certificacoes" className="section-spacing bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-4">Certificações que reforçam nossa credibilidade.</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Reconhecimentos que comprovam nosso compromisso com a qualidade, 
            a gestão e a segurança laboratorial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white border border-border/50 p-10 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:rotate-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <cert.icon className="h-10 w-10 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {cert.name}
              </h3>
              
              <p className="text-foreground/70">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
