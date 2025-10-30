'use client';

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowBadgeProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}

const GlowBadge = React.forwardRef<HTMLDivElement, GlowBadgeProps>(
    ({ children, icon, className }, ref) => {
        return (
            <motion.div
                ref={ref}
                className={cn(
                    "relative inline-flex items-center gap-2 px-4 py-2 rounded-full",
                    "bg-gray-50/80 border border-primary/30",
                    "backdrop-blur-sm",
                    "text-primary font-semibold text-xs tracking-wide",
                    className
                )}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Subtle background */}
                <div className="absolute inset-0 rounded-full bg-white/40" />





                {/* Content */}
                <div className="relative z-10 flex items-center gap-2">
                    {icon && (
                        <motion.span
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            {icon}
                        </motion.span>
                    )}
                    <span>{children}</span>
                </div>

                {/* Sparkle effects */}
                <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"
                    animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5
                    }}
                />

                <motion.div
                    className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-accent rounded-full"
                    animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 1
                    }}
                />
            </motion.div>
        );
    }
);

GlowBadge.displayName = "GlowBadge";

export { GlowBadge };