"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoRS } from "@/components/ui/logo-rs";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[10000] bg-neutral-950 flex flex-col items-center justify-center overflow-hidden"
                >
                    <div className="relative flex flex-col items-center">
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.8, 1, 0.8],
                                filter: ["none", "hue-rotate(30deg)", "none"]
                            }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        >
                            <LogoRS className="text-7xl md:text-9xl" />
                        </motion.div>

                        {/* Progress Bar Container */}
                        <div className="mt-12 w-48 h-[1px] bg-neutral-900 relative overflow-hidden">
                            <motion.div
                                className="h-full bg-primary"
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 1.2, ease: "circIn" }}
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-8 flex flex-col items-center gap-4"
                        >
                            <span className="text-[10px] font-mono text-primary/50 tracking-[1em] uppercase">
                                SYSTEM_READY
                            </span>
                        </motion.div>
                    </div>

                    {/* Industrial corners - minimal decoration for mobile/desktop */}
                    <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-white/10" />
                    <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-white/10" />
                    <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-white/10" />
                    <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-white/10" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

