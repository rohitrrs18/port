"use client";

import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Cpu, Layers, Globe, Zap } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

export default function WorkArchive() {
    return (
        <div className="bg-neutral-950 text-white min-h-screen font-sans selection:bg-primary selection:text-black">
            {/* HUD Header */}
            <header className="container mx-auto px-6 pt-40 pb-20 border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4 text-xs font-mono text-primary uppercase tracking-[0.5em] mb-8"
                >
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    Archive_Index_v2.0
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-8xl md:text-[15vw] font-black leading-[0.7] tracking-tighter uppercase italic"
                >
                    Project<br />
                    <span className="text-neutral-900 italic-outline">Vault</span>.
                </motion.h1>
            </header>

            {/* Holographic Bento Grid */}
            <section className="container mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {projects.map((project, i) => {
                        // Vary card sizes for bento effect
                        const isLarge = i % 4 === 0;
                        const isTall = i % 3 === 1;

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className={cn(
                                    "group relative rounded-[2rem] overflow-hidden bg-neutral-900/40 border border-white/5 hover:border-primary/50 transition-all duration-700",
                                    isLarge ? "md:col-span-8 md:row-span-2" : "md:col-span-4",
                                    isTall && !isLarge ? "md:row-span-2" : ""
                                )}
                            >
                                <Link href={`/work/${project.id}`} className="block h-full relative">
                                    {/* Image Layer */}
                                    <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000">
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-30 group-hover:opacity-60 scale-110 group-hover:scale-100 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                                    </div>

                                    {/* Content Layer */}
                                    <div className="relative h-full p-8 md:p-10 flex flex-col justify-between z-10">
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-1">
                                                <div className="text-[10px] font-mono text-primary uppercase tracking-widest">{project.category}</div>
                                                <h3 className={cn(
                                                    "font-black uppercase italic tracking-tighter leading-none transition-colors group-hover:text-primary",
                                                    isLarge ? "text-5xl md:text-7xl" : "text-3xl"
                                                )}>
                                                    {project.title}
                                                </h3>
                                            </div>
                                            <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:text-black transition-all">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <p className="text-neutral-500 text-sm max-w-sm line-clamp-2 md:line-clamp-none">
                                                {project.description}
                                            </p>

                                            {/* Technical HUD Metadata */}
                                            <div className="flex flex-wrap gap-3 pt-6 border-t border-white/5">
                                                {project.tags.slice(0, 3).map(tag => (
                                                    <span key={tag} className="text-[9px] font-mono text-neutral-600 bg-black/40 px-3 py-1.5 rounded-full border border-white/5 uppercase tracking-widest group-hover:text-neutral-400 transition-colors">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Interaction Scan Line */}
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <Footer />
        </div>
    );
}
