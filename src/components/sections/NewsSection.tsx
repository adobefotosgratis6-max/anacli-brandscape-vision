import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const news = [
  {
    title: "Anacli amplia portfólio de exames genéticos",
    date: "15 de Janeiro, 2025",
    summary: "Novos testes moleculares disponíveis para diagnóstico de doenças hereditárias.",
  },
  {
    title: "Novo horário de atendimento aos sábados",
    date: "10 de Janeiro, 2025",
    summary: "Estendemos nosso horário para oferecer mais conveniência aos pacientes.",
  },
  {
    title: "Certificação PALC renovada",
    date: "05 de Janeiro, 2025",
    summary: "Anacli renova certificação de excelência em análises clínicas.",
  },
];

const NewsSection = () => {
  return (
    <section className="section-spacing bg-gradient-olive-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-4">Notícias e atualizações.</h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card
              key={index}
              className="group hover-lift border-border/50 hover:border-primary/50 hover:shadow-elegant transition-all duration-300 bg-white overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
                  <Calendar className="h-12 w-12 text-primary/30" />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-foreground/70 leading-relaxed">
                    {item.summary}
                  </p>
                  
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-4 transition-all">
                      Ler mais
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
