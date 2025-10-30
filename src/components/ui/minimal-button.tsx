'use client';

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MinimalButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const MinimalButton = React.forwardRef<HTMLButtonElement, MinimalButtonProps>(
  ({ 
    children, 
    variant = "primary",
    icon, 
    className,
    onClick,
    disabled
  }, ref) => {
    const variants = {
      primary: "bg-accent hover:bg-accent/90 text-white",
      secondary: "bg-primary-dark hover:bg-primary-dark/90 text-white"
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative px-6 py-3 font-semibold text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden",
          variants[variant],
          className
        )}
        onClick={onClick}
        disabled={disabled}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Simple background overlay */}
        <motion.div
          className="absolute inset-0 bg-white/5"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {icon && (
            <motion.span
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              {icon}
            </motion.span>
          )}
        </span>

        {/* Bottom border accent */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-white/30"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.button>
    );
  }
);

MinimalButton.displayName = "MinimalButton";

export { MinimalButton };