"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoRS } from "@/components/ui/logo-rs";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time or wait for window.load
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[9999] bg-neutral-950 flex flex-col items-center justify-center"
                >
                    <div className="relative">
                        <LogoRS className="text-6xl md:text-8xl" />

                        {/* Progress Bar */}
                        <motion.div
                            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-neutral-800 overflow-hidden"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 128, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                className="h-full bg-primary"
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-16 text-xs font-mono text-neutral-500 tracking-[0.5em] uppercase"
                    >
                        Loading Experience
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
