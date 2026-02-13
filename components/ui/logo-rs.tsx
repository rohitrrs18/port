"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoRSProps {
    className?: string;
    animate?: boolean;
}

export function LogoRS({ className, animate = true }: LogoRSProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <motion.span
                initial={animate ? { opacity: 0, scale: 0.5, rotate: -10 } : {}}
                animate={animate ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-serif italic text-4xl md:text-5xl text-white tracking-widest select-none"
                style={{ fontFamily: "'Great Vibes', cursive" }}
            >
                RS
            </motion.span>

            {/* Subtle glow effect */}
            <motion.div
                animate={animate ? {
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.1, 1]
                } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-white/10 blur-xl rounded-full -z-10"
            />
        </div>
    );
}
