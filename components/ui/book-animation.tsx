"use client";

import { motion } from "framer-motion";

export function BookAnimation() {
    return (
        <div className="relative w-64 h-80 group perspective-1000">
            {/* Book Spine */}
            <div className="absolute left-0 top-0 w-8 h-full bg-neutral-800 rounded-l-sm transform translate-z-4 origin-left -rotate-y-90" />

            {/* Front Cover */}
            <motion.div
                className="absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-r-lg shadow-2xl origin-left z-20"
                whileHover={{ rotateY: -140 }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            >
                <div className="p-6 h-full flex flex-col justify-between">
                    <div className="w-12 h-1 bg-primary mb-4" />
                    <div>
                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-2">Original Story</span>
                        <div className="text-2xl font-serif italic text-white leading-tight">Beyond the Digital Veil</div>
                    </div>
                </div>
            </motion.div>

            {/* Internal Pages (Static for now) */}
            <div className="absolute inset-2 bg-neutral-100/10 rounded-r-lg z-10" />
            <div className="absolute inset-4 bg-neutral-100/20 rounded-r-lg z-0" />

            {/* Back Cover */}
            <div className="absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-r-lg shadow-inner z-[-1]" />
        </div>
    );
}
