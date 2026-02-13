"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Cpu, Layers, Globe, Zap, Database, Terminal, Shield, Code } from "lucide-react";
import { cn } from "@/lib/utils";

const TECH_NODES = [
    { id: "nextjs", name: "Next.js", icon: Globe, x: "50%", y: "15%", color: "text-white", desc: "Core Application Framework" },
    { id: "react", name: "React", icon: Code, x: "30%", y: "40%", color: "text-blue-400", desc: "Component Architecture" },
    { id: "tailwind", name: "Tailwind", icon: Layers, x: "70%", y: "40%", color: "text-sky-400", desc: "Atomic Styling Engine" },
    { id: "framer", name: "Framer Motion", icon: Zap, x: "50%", y: "55%", color: "text-primary", desc: "Kinetic Animation Core" },
    { id: "three", name: "Three.js", icon: Cpu, x: "15%", y: "65%", color: "text-emerald-400", desc: "3D Rendering Pipeline" },
    { id: "prisma", name: "Prisma", icon: Database, x: "85%", y: "65%", color: "text-indigo-400", desc: "ORM & Data Modeling" },
    { id: "node", name: "Node.js", icon: Terminal, x: "40%", y: "85%", color: "text-green-400", desc: "Server-side Runtime" },
    { id: "postgres", name: "PostgreSQL", icon: Shield, x: "60%", y: "85%", color: "text-blue-500", desc: "Relational Persistence" },
];

const CONNECTIONS = [
    { from: "nextjs", to: "react" },
    { from: "nextjs", to: "tailwind" },
    { from: "react", to: "framer" },
    { from: "react", to: "three" },
    { from: "tailwind", to: "framer" },
    { from: "framer", to: "node" },
    { from: "prisma", to: "node" },
    { from: "prisma", to: "postgres" },
    { from: "node", to: "postgres" },
];

export function TechSchematic() {
    const [activeNode, setActiveNode] = useState<string | null>(null);

    return (
        <section className="py-40 bg-neutral-950 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 text-xs font-mono text-primary uppercase tracking-[0.5em] mb-4"
                    >
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        System_Infrastructure
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6 leading-none">
                        Tech Stack<br />
                        <span className="text-neutral-900 italic-outline">Architecture</span>.
                    </h2>
                    <p className="text-xl text-neutral-500 max-w-xl font-mono leading-relaxed">
                        A visualized blueprint of the technologies powering this digital architect ecosystem.
                    </p>
                </div>

                {/* Schematic Container */}
                <div className="relative aspect-[16/10] md:aspect-[21/9] bg-neutral-900/20 border border-white/5 rounded-[3rem] p-12 overflow-hidden backdrop-blur-3xl group/schematic shadow-2xl">
                    {/* SVG Connections Layer */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 group-hover/schematic:opacity-40 transition-opacity duration-1000">
                        {CONNECTIONS.map((conn, i) => {
                            const from = TECH_NODES.find(n => n.id === conn.from);
                            const to = TECH_NODES.find(n => n.id === conn.to);
                            if (!from || !to) return null;

                            const isActive = activeNode === from.id || activeNode === to.id;

                            return (
                                <motion.line
                                    key={i}
                                    x1={from.x}
                                    y1={from.y}
                                    x2={to.x}
                                    y2={to.y}
                                    stroke={isActive ? "hsl(var(--primary))" : "white"}
                                    strokeWidth={isActive ? "1" : "0.5"}
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 2, delay: i * 0.1 }}
                                    strokeDasharray="4 4"
                                    animate={isActive ? { strokeDashoffset: [-10, 0] } : {}}
                                />
                            );
                        })}
                    </svg>

                    {/* Nodes Layer */}
                    <div className="absolute inset-0">
                        {TECH_NODES.map((node) => (
                            <motion.div
                                key={node.id}
                                style={{ left: node.x, top: node.y }}
                                className="absolute -translate-x-1/2 -translate-y-1/2 group/node cursor-crosshair z-20"
                                onMouseEnter={() => setActiveNode(node.id)}
                                onMouseLeave={() => setActiveNode(null)}
                            >
                                <div className={cn(
                                    "relative w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-neutral-950 border transition-all duration-500 flex items-center justify-center overflow-hidden",
                                    activeNode === node.id ? "border-primary shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] scale-110" : "border-white/10"
                                )}>
                                    {/* Animated scan line */}
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20 -translate-y-full group-hover/node:translate-y-[40px] transition-transform duration-1000" />

                                    <node.icon className={cn("w-6 h-6 md:w-8 md:h-8 transition-colors duration-500", node.color, activeNode === node.id && "scale-110")} />
                                </div>

                                {/* Label */}
                                <div className={cn(
                                    "absolute top-full left-1/2 -translate-x-1/2 mt-4 text-center transition-all duration-500 whitespace-nowrap",
                                    activeNode === node.id ? "opacity-100 scale-100" : "opacity-0 scale-90"
                                )}>
                                    <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">{node.name}</span>
                                    <p className="text-[8px] font-mono text-neutral-500 max-w-[120px] leading-tight mt-1">{node.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* HUD Overlays */}
                    <div className="absolute top-8 left-8 text-[9px] font-mono text-neutral-700 tracking-[0.3em] uppercase">
                        Protocol_Status: Encrypted
                    </div>
                    <div className="absolute bottom-8 right-8 text-[9px] font-mono text-neutral-700 tracking-[0.3em] uppercase">
                        Access_Point: 0x88F2
                    </div>
                </div>
            </div>
        </section>
    );
}
