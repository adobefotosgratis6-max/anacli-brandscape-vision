import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlideButtonProps {
  children: React.ReactNode;
  variant?: "fill" | "slide";
  direction?: "left" | "right" | "up" | "down";
  icon?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const SlideButton = React.forwardRef<HTMLButtonElement, SlideButtonProps>(
  ({ 
    children, 
    variant = "fill",
    direction = "right",
    icon, 
    className,
    onClick,
    disabled
  }, ref) => {
    const getSlideDirection = () => {
      switch (direction) {
        case "left": return { x: "-100%" };
        case "right": return { x: "100%" };
        case "up": return { y: "-100%" };
        case "down": return { y: "100%" };
        default: return { x: "100%" };
      }
    };

    const getInitialPosition = () => {
      switch (direction) {
        case "left": return { x: "100%" };
        case "right": return { x: "-100%" };
        case "up": return { y: "100%" };
        case "down": return { y: "-100%" };
        default: return { x: "-100%" };
      }
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative px-6 py-3 font-semibold text-base rounded-xl overflow-hidden group transition-all duration-300",
          variant === "fill" 
            ? "bg-accent text-white hover:shadow-lg" 
            : "border-2 border-accent text-accent hover:text-white",
          className
        )}
        onClick={onClick}
        disabled={disabled}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Sliding background */}
        <motion.div
          className={cn(
            "absolute inset-0 z-0",
            variant === "fill" 
              ? "bg-accent/90" 
              : "bg-accent"
          )}
          initial={getInitialPosition()}
          whileHover={{ x: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
          {icon && (
            <motion.span
              animate={{ 
                x: direction === "right" ? [0, 3, 0] : direction === "left" ? [0, -3, 0] : 0,
                y: direction === "up" ? [0, -3, 0] : direction === "down" ? [0, 3, 0] : 0
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              {icon}
            </motion.span>
          )}
        </span>
      </motion.button>
    );
  }
);

SlideButton.displayName = "SlideButton";

export { SlideButton };