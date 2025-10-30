'use client';

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface HierarchicalButtonProps {
  children: React.ReactNode;
  hierarchy?: "primary" | "secondary" | "tertiary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  asChild?: boolean;
}

const  HierarchicalButton = React.forwardRef<HTMLButtonElement, HierarchicalButtonProps>(
  ({
    children,
    hierarchy = "secondary",
    size = "md",
    icon,
    iconPosition = "right",
    className,
    onClick,
    disabled,
    loading,
    fullWidth,
    ...props
  }, ref) => {
    const baseClasses = "relative overflow-hidden font-semibold transition-all duration-300 flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    // Hierarquia de importância com cores e estilos específicos da Anacli
    const hierarchies = {
      // Botão mais importante - Ações principais (CTA, Agendar, Contatar)
      primary: "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl hover:shadow-primary/25 focus:ring-primary border-0",

      // Botão secundário - Ações importantes mas não críticas (Ver mais, Localização)
      secondary: "bg-accent hover:bg-primary/90 text-white shadow-md hover:shadow-lg focus:ring-primary border-0",

      // Botão terciário - Ações de apoio (Links, navegação) - Hover com fundo magenta e texto branco
      tertiary: "bg-white hover:bg-accent text-accent hover:text-white border border-accent/40 hover:border-accent focus:ring-accent shadow-sm hover:shadow-md transition-colors duration-300",

      // Botão fantasma - Ações sutis (Ler mais, links internos) - Hover com fundo magenta e texto branco
      ghost: "bg-transparent hover:bg-accent text-accent hover:text-white border-0 focus:ring-accent transition-colors duration-300"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm rounded-lg min-h-[36px]",
      md: "px-6 py-3 text-base rounded-xl min-h-[44px]",
      lg: "px-8 py-4 text-lg rounded-2xl min-h-[52px]"
    };

    const getHoverAnimation = () => {
      switch (hierarchy) {
        case "primary":
          return { scale: 1.05, y: -2 };
        case "secondary":
          return { scale: 1.03, y: -1 };
        case "tertiary":
          return { scale: 1.02 };
        case "ghost":
          return { x: 4 };
        default:
          return { scale: 1.02 };
      }
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseClasses,
          hierarchies[hierarchy],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        whileHover={!disabled && !loading ? getHoverAnimation() : {}}
        whileTap={!disabled && !loading ? { scale: 0.95 } : {}}
        transition={{ duration: 0.2 }}
        onClick={onClick}
        disabled={disabled || loading}
        {...props}
      >
        {/* Efeito de brilho para botões primários */}
        {hierarchy === "primary" && (
          <>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full"
              transition={{ duration: 0.8 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 blur-xl opacity-0 group-hover:opacity-30"
              transition={{ duration: 0.3 }}
            />
          </>
        )}

        {/* Efeito sutil para botões secundários */}
        {hierarchy === "secondary" && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full"
            transition={{ duration: 0.6 }}
          />
        )}

        {/* Conteúdo */}
        <span className="relative z-10 flex items-center gap-2">
          {loading && (
            <Loader2 className="h-4 w-4 animate-spin" />
          )}

          {!loading && icon && iconPosition === "left" && (
            <motion.span
              className={hierarchy === "ghost" ? "group-hover:-translate-x-1" : ""}
              transition={{ duration: 0.2 }}
            >
              {icon}
            </motion.span>
          )}

          {children}

          {!loading && icon && iconPosition === "right" && (
            <motion.span
              className={hierarchy === "ghost" ? "group-hover:translate-x-1" : ""}
              transition={{ duration: 0.2 }}
            >
              {icon}
            </motion.span>
          )}
        </span>
      </motion.button>
    );
  }
);

HierarchicalButton.displayName = "HierarchicalButton";

export { HierarchicalButton };