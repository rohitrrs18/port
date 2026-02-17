"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export function AudioToggle() {
    const [isMuted, setIsMuted] = useState(true);

    // In a real app, we'd use a global audio state/context
    // For now, this is the UI and simulated state

    return (
        <div className="fixed bottom-8 left-8 z-50">
            <motion.button
                suppressHydrationWarning
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMuted(!isMuted)}
                className="group relative w-12 h-12 bg-neutral-900 border border-white/5 rounded-2xl flex items-center justify-center backdrop-blur-xl shadow-2xl overflow-hidden active:bg-primary transition-colors duration-300"
            >
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <AnimatePresence mode="wait">
                    {isMuted ? (
                        <motion.div
                            key="muted"
                            initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
                        >
                            <VolumeX className="w-5 h-5 text-neutral-500 group-hover:text-white" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="active"
                            initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
                            className="flex items-center justify-center"
                        >
                            <Volume2 className="w-5 h-5 text-primary group-hover:text-black" />
                            {/* Animated sound bars */}
                            <div className="absolute -right-4 flex items-end gap-[2px] h-3">
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: [2, 10, 2] }}
                                        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                                        className="w-[2px] bg-primary group-hover:bg-black"
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* HUD Ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                    <motion.circle
                        cx="24"
                        cy="24"
                        r="22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-primary/20"
                        initial={{ pathLength: 1 }}
                    />
                    {!isMuted && (
                        <motion.circle
                            cx="24"
                            cy="24"
                            r="22"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-primary"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    )}
                </svg>
            </motion.button>
        </div>
    );
}
