import { MapPin, Phone, Mail, Clock, Map } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
  </svg>
);

const locations = [
  {
    name: "Laboratório Anacli - Unidade Principal",
    address: "Rua Aristides Novís, 288 – Kalilândia",
    city: "Feira de Santana – BA",
    phone: "(75) 3030-0030",
    email: "contato@anacli.com.br",
    hours: "Seg - Sex: 6h às 18h | Sáb: 6h às 12h",
    image: "/assets/unidade.jpg",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5234567890123!2d-38.9667890!3d-12.2547890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE1JzE3LjIiUyAzOMKwNTgnMDAuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr",
    whatsapp: "5575999999999"
  },
  {
    name: "Anacli Toxicológico",
    address: "Av. Getúlio Vargas, 1256 – Centro",
    city: "Feira de Santana – BA",
    phone: "(75) 3030-0031",
    email: "toxico@anacli.com.br",
    hours: "Seg - Sex: 7h às 17h | Sáb: 7h às 12h",
    image: "https://scontent-bsb1-1.cdninstagram.com/v/t39.30808-6/460718524_18340340380125231_4992479416768458381_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=102&ig_cache_key=MzQ2MDUyNDQ0MzUzOTM2MTI0Ng%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzIifQ%3D%3D&_nc_ohc=PE7-bJKAhDkQ7kNvwH4Lqt-&_nc_oc=AdlPgbZ3tqFCZjU5jB4AxSHcfndEy4GredrYdxjgyLhzauvHrgVDWF_A4OkIdpklaqI_yIj4ugaB4_7uHpD1Ooyi&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-bsb1-1.cdninstagram.com&_nc_gid=wawzJTDAOxfSuA7nKrmwrg&oh=00_Afc9rO95j2msebhUbCm400CRs_q5e67BErMs-iVzHSyPNQ&oe=6905BD2A",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1234567890123!2d-38.9567890!3d-12.2647890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE1JzUyLjciUyAzOMKwNTcnMjQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr",
    whatsapp: "5575888888888"
  },
];

const ContactSection = () => {
  return (
    <section id="contato" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-secondary/10">
        {/* Animated Sine Wave Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Primeira linha senoidal */}
          <motion.path
            d="M0,200 Q300,100 600,200 T1200,200"
            stroke="url(#waveGradient1)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
              d: [
                "M0,300 Q300,200 600,300 T1200,300",
                "M0,280 Q300,220 600,280 T1200,280",
                "M0,300 Q300,200 600,300 T1200,300"
              ]
            }}
            transition={{
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 1 },
              d: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Segunda linha senoidal */}
          <motion.path
            d="M0,480 Q300,580 600,480 T1200,480"
            stroke="url(#waveGradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
              d: [
                "M0,480 Q300,580 600,480 T1200,480",
                "M0,500 Q300,560 600,500 T1200,500",
                "M0,480 Q300,580 600,480 T1200,480"
              ]
            }}
            transition={{
              pathLength: { duration: 2.5, ease: "easeInOut", delay: 0.5 },
              opacity: { duration: 1, delay: 0.5 },
              d: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }
            }}
          />

          {/* Terceira linha senoidal */}
          <motion.path
            d="M0,680 Q300,630 600,680 T1200,680"
            stroke="url(#waveGradient1)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
              d: [
                "M0,680 Q300,630 600,680 T1200,680",
                "M0,660 Q300,650 600,660 T1200,660",
                "M0,680 Q300,630 600,680 T1200,680"
              ]
            }}
            transition={{
              pathLength: { duration: 3, ease: "easeInOut", delay: 1 },
              opacity: { duration: 1, delay: 1 },
              d: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }
            }}
          />
        </svg>

        {/* Glow orbs with Anacli colors */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nossas &nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Unidades
            </span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Encontre a unidade mais próxima de você e agende seus exames.
          </motion.p>
        </motion.div>

        {/* Units Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="bg-white rounded-2xl border border-gray-200 hover:border-primary transition-all duration-300 overflow-hidden">
                {/* Unit Image */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {location.name}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{location.address}</div>
                        <div className="text-gray-600">{location.city}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <a
                        href={`tel:${location.phone.replace(/\D/g, '')}`}
                        className="font-medium text-gray-900 hover:text-primary transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <a
                        href={`mailto:${location.email}`}
                        className="font-medium text-gray-900 hover:text-primary transition-colors"
                      >
                        {location.email}
                      </a>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-gray-600">
                        {location.hours}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {/* Maps Modal */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          <Map className="h-4 w-4 mr-2" />
                          Ver no Maps
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-bold text-gray-900">
                            {location.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-2 text-gray-700">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span className="font-medium">{location.address}, {location.city}</span>
                            </div>
                          </div>
                          <div className="aspect-video w-full rounded-lg overflow-hidden">
                            <iframe
                              src={location.mapUrl}
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title={`Mapa da ${location.name}`}
                            />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* WhatsApp Button */}
                    <Button
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white transition-all duration-300 shadow-md hover:shadow-lg"
                      onClick={() => window.open(`https://wa.me/${location.whatsapp}?text=Olá! Gostaria de mais informações sobre os serviços da ${location.name}.`, '_blank')}
                    >
                      <WhatsAppIcon className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
