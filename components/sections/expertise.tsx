"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Code2, Smartphone, Cpu, Palette, Globe, Layers, Zap, Terminal } from "lucide-react";

const expertiseNodes = [
    {
        id: "NODE_01",
        title: "Front-End Logic",
        description: "Executing complex state management and high-order component architectures with Next.js and React.",
        icon: Globe,
        className: "lg:col-span-2 lg:row-span-1",
        tags: ["React", "Next.js", "Recoil"],
        accent: "primary"
    },
    {
        id: "NODE_02",
        title: "Native Systems",
        description: "Deploying high-performance Android applications with Gradle-level optimizations and fluid UX.",
        icon: Smartphone,
        className: "lg:col-span-1 lg:row-span-2",
        tags: ["Kotlin", "Compose", "Firebase"],
        accent: "white"
    },
    {
        id: "NODE_03",
        title: "Architecture",
        description: "Drafting micro-service blueprints and neural pathway simulations for futuristic digital hulls.",
        icon: Cpu,
        className: "lg:col-span-1 lg:row-span-1",
        tags: ["AWS", "Terraform", "Node"],
        accent: "white"
    },
    {
        id: "NODE_04",
        title: "Motion UX",
        description: "Bridging the gap between static design and kinetic reality using math-driven Framer Motion engines.",
        icon: Zap,
        className: "lg:col-span-2 lg:row-span-1",
        tags: ["Framer", "3D", "GSAP"],
        accent: "primary"
    }
];

export function Expertise() {
    return (
        <section className="py-40 md:py-60 bg-neutral-950 relative overflow-hidden" id="expertise">
            {/* Background Narrative - Scanning Text */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] overflow-hidden select-none">
                <div className="absolute top-20 left-10 text-[20vw] font-black uppercase italic leading-none whitespace-nowrap">
                    CAPABILITY_MATRIX
                </div>
                <div className="absolute bottom-20 right-10 text-[15vw] font-black uppercase leading-none whitespace-nowrap text-right">
                    SYSTEM_ACCESS
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-10 items-end mb-32">
                    <div className="lg:col-span-8 space-y-6">
                        <div className="flex items-center gap-4 text-xs font-mono text-primary uppercase tracking-[0.6em]">
                            <Terminal className="w-4 h-4" />
                            Initialization_Sequence
                        </div>
                        <h2 className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] tracking-widest uppercase italic border-l-[20px] border-primary pl-10 shadow-[0_0_50px_rgba(var(--primary-rgb),0.1)]">
                            Technical<br /> <span className="text-neutral-900 italic-outline">Versatility</span>.
                        </h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-8 lg:gap-10">
                    {expertiseNodes.map((node, i) => (
                        <motion.div
                            key={node.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className={cn(
                                "group relative p-10 rounded-[3rem] border border-white/5 bg-neutral-900/30 backdrop-blur-3xl overflow-hidden hover:border-primary/50 transition-all duration-700",
                                node.className
                            )}
                        >
                            {/* HUD Corner Brackets */}
                            <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-primary/20 group-hover:border-primary transition-colors" />
                            <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-white/10 group-hover:border-primary transition-colors" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-10">
                                    <div className={cn(
                                        "w-16 h-16 rounded-[1.5rem] flex items-center justify-center transition-all duration-500",
                                        node.accent === "primary" ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black" : "bg-white/5 text-white group-hover:bg-white group-hover:text-black"
                                    )}>
                                        <node.icon className="w-8 h-8" />
                                    </div>
                                    <span className="text-[10px] font-mono text-neutral-700 font-bold group-hover:text-primary transition-colors tracking-widest">{node.id}</span>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter">{node.title}</h4>
                                    <p className="text-neutral-500 text-sm leading-relaxed font-medium group-hover:text-neutral-400 transition-colors">
                                        {node.description}
                                    </p>
                                </div>

                                <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-3">
                                    {node.tags.map((tag) => (
                                        <span key={tag} className="text-[9px] font-mono text-neutral-600 border border-neutral-800 px-3 py-1 rounded-full uppercase tracking-widest group-hover:border-primary/20 group-hover:text-neutral-400 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Active Scan Laser Effect */}
                            <motion.div
                                animate={{ y: ["-100%", "200%"] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-x-0 h-[2px] bg-primary/20 blur-sm pointer-events-none opacity-0 group-hover:opacity-100"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Side-Scrolling Accent lines */}
            <div className="absolute top-1/4 right-0 w-32 h-[1px] bg-gradient-to-l from-primary/50 to-transparent" />
            <div className="absolute bottom-1/4 left-0 w-48 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
        </section>
    );
}
