"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Cpu, Network, Zap, Binary } from "lucide-react";
import { cn } from "@/lib/utils";
import { StatusTicker } from "@/components/ui/status-ticker";

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
}

interface NeuralFeedProps {
    posts: BlogPost[];
}

const statusItems = [
    "Exploring Neural Networks",
    "Designing Digital Ecosystems",
    "Building Tomorrow's Web",
    "Writing Advanced Logic",
    "Creating Visual Poetry",
    "Optimizing System Archetypes"
];

// Data Packet Component for the background animation
const DataPacket = ({ delay = 0, duration = 3 }) => (
    <motion.div
        initial={{ left: "-10%", opacity: 0 }}
        animate={{
            left: "110%",
            opacity: [0, 1, 1, 0],
        }}
        transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "linear"
        }}
        className="absolute top-1/2 -translate-y-1/2 w-4 h-[1px] bg-primary group-hover:bg-white transition-colors blur-[1px]"
    />
);

export function NeuralFeed({ posts }: NeuralFeedProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen bg-neutral-950 pt-32 pb-40 overflow-hidden"
        >
            {/* Background Grid & Particles */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_50%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="mb-24 md:mb-32 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 text-xs font-mono text-primary uppercase tracking-[0.8em] mb-6"
                    >
                        <span className="w-12 h-[1px] bg-primary/30" />
                        CORE_TRANSMISSIONS_v2
                    </motion.div>
                    <h2 className="text-[12vw] md:text-[8vw] font-black text-white leading-none tracking-tighter uppercase italic mb-12">
                        NEURAL<br />
                        <span className="text-neutral-800 italic-outline">FEED_SCAN</span>
                    </h2>
                    <StatusTicker items={statusItems} />
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
                    {posts.slice(0, 3).map((post, index) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className={cn(
                                "group relative overflow-hidden bg-neutral-900/20 backdrop-blur-sm border border-white/[0.05] p-8 md:p-12 hover:border-primary/30 transition-all duration-500",
                                index === 0 ? "md:col-span-4 md:row-span-2" : "md:col-span-2 md:row-span-1"
                            )}
                        >
                            {/* Hover Reveal Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-12">
                                        <div className="p-3 border border-white/10 rounded-lg text-neutral-500 group-hover:text-primary transition-colors">
                                            {index === 0 ? <Network className="w-6 h-6" /> : index === 1 ? <Cpu className="w-6 h-6" /> : <Zap className="w-6 h-6" />}
                                        </div>
                                        <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest">{post.date}</span>
                                    </div>

                                    <h3 className={cn(
                                        "font-black uppercase italic tracking-tighter mb-6 transition-all duration-500 group-hover:translate-x-2",
                                        index === 0 ? "text-4xl md:text-7xl text-white" : "text-2xl md:text-4xl text-neutral-400 group-hover:text-white"
                                    )}>
                                        {post.title}
                                    </h3>

                                    <p className="text-neutral-500 text-lg md:text-xl leading-relaxed font-light group-hover:text-neutral-300 transition-colors duration-500 line-clamp-3">
                                        {post.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-12 pt-12 border-t border-white/[0.05]">
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <span key={tag} className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest px-3 py-1 border border-neutral-900 group-hover:border-primary/20 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <ArrowUpRight className="w-6 h-6 text-primary scale-0 group-hover:scale-100 transition-transform duration-500" />
                                </div>
                            </div>

                            {/* Animated Grid Decoration */}
                            <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
                                <DataPacket delay={0} duration={2} />
                                <DataPacket delay={1} duration={2.5} />
                            </div>
                            <div className="absolute top-0 right-0 h-full w-[1px] overflow-hidden">
                                <motion.div
                                    initial={{ top: "-10%", opacity: 0 }}
                                    animate={{ top: "110%", opacity: [0, 1, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-1/2 -translate-x-1/2 h-8 w-[1px] bg-primary blur-[1px]"
                                />
                            </div>
                        </Link>
                    ))}

                    {/* Decorative Bento Cell */}
                    <div className="hidden md:flex md:col-span-2 bg-neutral-900/10 border border-white/[0.03] p-12 flex-col justify-center items-center gap-6 group overflow-hidden relative">
                        <Binary className="w-12 h-12 text-neutral-800 group-hover:text-primary transition-colors duration-700 animate-pulse" />
                        <span className="text-[9px] font-mono text-neutral-700 uppercase tracking-[0.5em] text-center">
                            AWAITING_NEW_TRANSMISSIONS...
                        </span>
                        {/* Scanning beam */}
                        <motion.div
                            animate={{ y: ["0%", "400%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-x-0 top-0 h-[2px] bg-primary/20 blur-sm pointer-events-none"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

