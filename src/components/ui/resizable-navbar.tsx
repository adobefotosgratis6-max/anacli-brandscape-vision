"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
}

interface ResizableNavbarProps {
  className?: string;
  navItems?: NavItem[];
}

const ResizableNavbar: React.FC<ResizableNavbarProps> = ({
  className,
  navItems = [
    { name: "Sobre", link: "#sobre" },
    { name: "Exames", link: "#exames" },
    { name: "Convênios", link: "#convenios" },
    { name: "Estrutura", link: "#estrutura" },
    { name: "Certificações", link: "#certificacoes" },
    { name: "Contato", link: "#contato" },
  ],
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      {/* Top Bar - Magenta Background */}
      <div className="hidden md:block bg-accent relative z-50">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between text-sm text-white">
            <div className="flex items-center gap-6">
              <a href="tel:7530300030" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Phone className="h-3.5 w-3.5" />
                (75) 3030-0030
              </a>
              <a href="mailto:contato@anacli.com.br" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Mail className="h-3.5 w-3.5" />
                contato@anacli.com.br
              </a>
            </div>
            <div className="text-white/90">
              Feira de Santana – BA
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={cn(
          "fixed left-0 right-0 z-40 w-full",
          className
        )}
        animate={{
          top: isScrolled ? "0px" : isMobile ? "0px" : "40px",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.1)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(4px)",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
        style={{
          borderBottom: isScrolled ? "1px solid rgba(219, 219, 219, 0.3)" : "none",
          boxShadow: isScrolled ? "0 1px 0 0 rgba(166, 192, 34, 0.1)" : "none",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="/assets/logo.svg"
                alt="Anacli Laboratorial"
                className="h-8 md:h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xs tracking-wide text-primary/80 hidden sm:block">
                  Excelência em Análises Clínicas
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors duration-300 relative group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
              <motion.a
                href="#resultados"
                className="text-sm font-semibold px-4 py-2 rounded-full bg-accent text-white hover:bg-accent/90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Resultados de Exames
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.div
              className="lg:hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-border/50 bg-white/95 backdrop-blur-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.link}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#resultados"
                  className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  Resultados de Exames
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default ResizableNavbar;