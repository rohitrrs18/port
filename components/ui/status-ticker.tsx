"use client";

import { motion } from "framer-motion";

interface StatusTickerProps {
    items: string[];
}

export function StatusTicker({ items }: StatusTickerProps) {
    // Duplicate items to ensure smooth infinite scroll
    const loopedItems = [...items, ...items, ...items, ...items];

    return (
        <div className="relative w-full overflow-hidden bg-neutral-900/50 py-4 border-y border-neutral-800 backdrop-blur-sm">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{
                    x: [0, -1000],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    },
                }}
            >
                {loopedItems.map((item, index) => (
                    <span
                        key={index}
                        className="text-sm font-mono text-neutral-400 px-8 uppercase tracking-[0.3em] flex items-center"
                    >
                        <span className="text-primary mr-2">//</span>
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
