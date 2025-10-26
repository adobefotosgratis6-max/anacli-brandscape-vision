import { MapPin, Phone, Mail, Clock } from "lucide-react";

const locations = [
  {
    name: "Laboratório Anacli - Unidade Principal",
    address: "Rua Aristides Novís, 288 – Kalilândia",
    city: "Feira de Santana – BA",
    phone: "(75) 3030-0030",
    email: "contato@anacli.com.br",
    hours: "Seg - Sex: 6h às 18h | Sáb: 6h às 12h",
  },
  {
    name: "Anacli Toxicológico",
    address: "Av. Getúlio Vargas, 1256 – Centro",
    city: "Feira de Santana – BA",
    phone: "(75) 3030-0031",
    email: "toxico@anacli.com.br",
    hours: "Seg - Sex: 7h às 17h | Sáb: 7h às 12h",
  },
];

const ContactSection = () => {
  return (
    <section id="contato" className="section-spacing bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-4">Nossas unidades.</h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-primary/20 p-10 space-y-6 hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-foreground border-b border-primary/20 pb-4">
                {location.name}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{location.address}</div>
                    <div className="text-foreground/70">{location.city}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <a href={`tel:${location.phone.replace(/\D/g, '')}`} className="font-medium text-foreground hover:text-primary transition-colors">
                    {location.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <a href={`mailto:${location.email}`} className="font-medium text-foreground hover:text-primary transition-colors">
                    {location.email}
                  </a>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-foreground/70">
                    {location.hours}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
