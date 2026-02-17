"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Code2, Smartphone, Cpu, Zap, ArrowDownRight, Globe, Layers, Terminal } from "lucide-react";
import Magnetic from "@/components/ui/magnetic";

const expertiseNodes = [
    {
        id: "01",
        title: "Front-End Logic",
        description: "Executing complex state management and high-order component architectures with Next.js and React. Specialized in crafting performance-first digital hulls.",
        icon: Globe,
        tags: ["React", "Next.js", "Zustand", "TS"],
        accent: "#8B5CF6",
        className: "md:col-span-4 md:row-span-2"
    },
    {
        id: "02",
        title: "Native Systems",
        description: "Deploying high-performance Android applications with Gradle-level optimizations.",
        icon: Smartphone,
        tags: ["Kotlin", "Compose"],
        accent: "#ffffff",
        className: "md:col-span-2 md:row-span-1"
    },
    {
        id: "03",
        title: "System Design",
        description: "Drafting micro-service blueprints and neural pathway simulations.",
        icon: Cpu,
        tags: ["AWS", "Node"],
        accent: "#ffffff",
        className: "md:col-span-2 md:row-span-1"
    },
    {
        id: "04",
        title: "Motion UX",
        description: "Bridging the gap between static design and kinetic reality using math-driven engines.",
        icon: Zap,
        tags: ["Framer", "3D"],
        accent: "#8B5CF6",
        className: "md:col-span-6 md:row-span-1"
    }
];

export function Expertise() {
    return (
        <section className="py-24 md:py-60 bg-neutral-950 relative overflow-hidden" id="expertise">
            {/* Industrial Decorative Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] overflow-hidden select-none">
                <div className="absolute top-1/4 -left-20 text-[20vw] font-black uppercase tracking-tighter text-white">
                    TECH
                </div>
                <div className="absolute bottom-1/4 -right-20 text-[20vw] font-black uppercase tracking-tighter text-white">
                    CORE
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-4 mb-16 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 text-xs font-mono text-primary uppercase tracking-[0.8em]"
                    >
                        <span className="w-12 h-[1px] bg-primary/30" />
                        CAPABILITY_MATRIX_v3.0
                    </motion.div>
                    <h2 className="text-5xl md:text-[8vw] font-black text-white leading-none tracking-tighter uppercase italic">
                        TECHNICAL<br />
                        <span className="text-neutral-800 italic-outline">EXPERTISE</span>
                    </h2>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    {expertiseNodes.map((node, i) => (
                        <div
                            key={node.id}
                            className={cn(
                                "group relative bg-neutral-900/20 backdrop-blur-xl border border-white/[0.05] p-8 md:p-12 overflow-hidden flex flex-col justify-between transition-all duration-700 hover:border-primary/40",
                                node.className
                            )}
                        >
                            {/* Card Content */}
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-12">
                                    <span className="text-5xl md:text-8xl font-black text-neutral-900/30 group-hover:text-primary/10 transition-colors duration-700 leading-none">
                                        {node.id}
                                    </span>
                                    <Magnetic>
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/5 flex items-center justify-center text-neutral-500 group-hover:bg-primary group-hover:text-black transition-all duration-500 cursor-pointer">
                                            <node.icon className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                    </Magnetic>
                                </div>

                                <div className="mt-auto">
                                    <h4 className={cn(
                                        "font-black text-white uppercase italic tracking-tighter mb-4 transition-all duration-500 group-hover:translate-x-2",
                                        i === 0 ? "text-4xl md:text-7xl" : "text-2xl md:text-4xl"
                                    )}>
                                        {node.title}
                                    </h4>
                                    <p className="text-neutral-500 text-base md:text-lg leading-relaxed font-light max-w-md group-hover:text-neutral-300 transition-colors duration-500">
                                        {node.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-12 mt-12 border-t border-white/[0.03]">
                                    <div className="flex flex-wrap gap-2">
                                        {node.tags.map((tag) => (
                                            <span key={tag} className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest px-3 py-1 border border-neutral-900 group-hover:border-primary/20 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <ArrowDownRight className="w-6 h-6 text-primary scale-0 group-hover:scale-100 transition-transform duration-500" />
                                </div>
                            </div>

                            {/* Hover Reveal Effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Scanning Laser Line - Performance Optimized */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{ y: ["-10%", "110%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent pointer-events-none z-0 shadow-[0_0_15px_rgba(124,58,237,0.5)]"
            />
        </section>
    );
}
