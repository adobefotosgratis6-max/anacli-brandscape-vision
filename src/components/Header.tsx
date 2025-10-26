import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Exames", href: "#exames" },
    { label: "Convênios", href: "#convenios" },
    { label: "Estrutura", href: "#estrutura" },
    { label: "Certificações", href: "#certificacoes" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-background border-b border-border/50">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <a href="tel:7530300030" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-3.5 w-3.5" />
                (75) 3030-0030
              </a>
              <a href="mailto:contato@anacli.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-3.5 w-3.5" />
                contato@anacli.com.br
              </a>
            </div>
            <div className="text-muted-foreground">
              Feira de Santana – BA
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-soft"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">Anacli</span>
                <span className="text-xs text-muted-foreground tracking-wide">
                  Excelência em Análises Clínicas
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="#resultados"
                className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                Resultados de Exames
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border/50 bg-white/95 backdrop-blur-md animate-fade-in">
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#resultados"
                className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resultados de Exames
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
