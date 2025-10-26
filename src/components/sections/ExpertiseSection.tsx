import { Microscope, Shield, HeartPulse, Baby } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const expertiseAreas = [
  {
    icon: Microscope,
    title: "Exames Laboratoriais",
    description: "Diagnóstico e monitoramento com precisão e segurança.",
  },
  {
    icon: Shield,
    title: "Exames Toxicológicos",
    description: "Atenda às exigências da CNH com rapidez e segurança.",
  },
  {
    icon: HeartPulse,
    title: "Check-up Completo",
    description: "Prevenção com exames personalizados.",
  },
  {
    icon: Baby,
    title: "Atendimento Gestante",
    description: "Acompanhamento pré-natal com cuidado e sigilo.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="exames" className="section-spacing bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-4">Nossas áreas de atuação.</h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card
              key={index}
              className="group hover-lift border-border/50 hover:border-primary/50 hover:shadow-elegant transition-all duration-300 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <area.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground">
                  {area.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
