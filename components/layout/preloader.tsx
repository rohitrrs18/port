"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoRS } from "@/components/ui/logo-rs";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [logs, setLogs] = useState<string[]>([]);

    const diagnosticMessages = [
        "[OK] LIQUID_CHROME_ENGINE_LOADED",
        "[OK] NEURAL_BUFFER_INITIALIZED",
        "[SYNC] IST_TIME_SERVER_STABLE",
        "[DECRYPT] IDENTITY_SECTOR_V4",
        "[ACCESS] PROJECT_ARCHIVES_OPEN",
        "[LOAD] CINEMATIC_SHUTTER_DRIVERS",
        "[READY] SYSTEM_STATUS_OPERATIONAL"
    ];

    useEffect(() => {
        let index = 0;
        const logInterval = setInterval(() => {
            if (index < diagnosticMessages.length) {
                setLogs(prev => [...prev, diagnosticMessages[index]]);
                index++;
            } else {
                clearInterval(logInterval);
            }
        }, 150);

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2200);

        return () => {
            clearTimeout(timer);
            clearInterval(logInterval);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[9999] bg-neutral-950 flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Log Stream - Left Side */}
                    <div className="absolute left-6 top-6 bottom-6 w-64 hidden md:flex flex-col gap-1 font-mono text-[8px] text-primary/30 pointer-events-none overflow-hidden">
                        {logs.map((log, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="whitespace-nowrap"
                            >
                                {log}
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative">
                        <motion.div
                            animate={{
                                x: [0, -2, 2, -1, 0],
                                filter: ["none", "hue-rotate(90deg) blur(1px)", "none"]
                            }}
                            transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
                        >
                            <LogoRS className="text-6xl md:text-8xl" />
                        </motion.div>

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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-16 flex flex-col items-center gap-2"
                    >
                        <span className="text-[10px] font-mono text-primary animate-pulse tracking-[0.8em] uppercase">
                            Establishing_Connection
                        </span>
                        <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                                    className="w-1.5 h-1.5 bg-primary rounded-full"
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Matrix-like vertical text on right */}
                    <div className="absolute right-6 top-6 font-mono text-[9px] text-neutral-800 writing-vertical-rl select-none tracking-widest">
                        AUTHENTIC_ACCESS_GRANTED_V2.1 // 2026.02.14
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
