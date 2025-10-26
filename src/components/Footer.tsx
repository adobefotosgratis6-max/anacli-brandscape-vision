import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Sobre",
      links: [
        { label: "Institucional", href: "#sobre" },
        { label: "Nossa História", href: "#sobre" },
        { label: "Certificações", href: "#certificacoes" },
      ],
    },
    {
      title: "Exames",
      links: [
        { label: "Análises Clínicas", href: "#exames" },
        { label: "Toxicológicos", href: "#exames" },
        { label: "Check-up", href: "#exames" },
      ],
    },
    {
      title: "Estrutura",
      links: [
        { label: "Infraestrutura", href: "#estrutura" },
        { label: "Convênios", href: "#convenios" },
        { label: "Unidades", href: "#contato" },
      ],
    },
    {
      title: "Políticas",
      links: [
        { label: "Privacidade", href: "#" },
        { label: "Termos de Uso", href: "#" },
        { label: "LGPD", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-white border-t border-primary/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="text-2xl font-bold text-primary">Anacli</div>
              <div className="text-xs text-white/60 tracking-wide mt-1">
                Excelência em Análises Clínicas
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Mais de 20 anos de compromisso com a ciência, a ética e o cuidado humano.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8 pt-8 border-t border-white/10">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-accent flex items-center justify-center transition-all duration-300 group"
            >
              <social.icon className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <div>
            © {currentYear} Laboratório Anacli — Todos os direitos reservados.
          </div>
          <div>
            Desenvolvido por{" "}
            <span className="text-primary font-semibold">Tacitus Digital</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
