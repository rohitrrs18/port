"use client";

import { motion } from "framer-motion";
import { GitBranch, GitCommit, GitMerge } from "lucide-react";
import { cn } from "@/lib/utils";

const CAREER_NODES = [
    {
        date: "2024 - PRESENT",
        title: "Senior Digital Architect",
        location: "Freelance / Remote",
        desc: "Building high-end immersive web ecosystems for technical brands.",
        branch: "main",
        status: "active",
        tags: ["Next.js", "Three.js", "Lead"]
    },
    {
        date: "2023 - 2024",
        title: "Full Stack Developer",
        location: "Tech Corp",
        desc: "Optimized distributed systems and led frontend modernization initiatives.",
        branch: "main",
        tags: ["Modernization", "Microservices"]
    },
    {
        date: "2022 - 2023",
        title: "Frontend Engineer",
        location: "Startup Inc",
        desc: "Developed high-performance React components and design systems.",
        branch: "feature/ui-ux",
        tags: ["Design System", "Storybook"]
    },
    {
        date: "2021",
        title: "Software Intern",
        location: "Growth Labs",
        desc: "Initial commit into professional software engineering.",
        branch: "init",
        tags: ["Fundamentals", "JavaScript"]
    }
];

export function SystemRoadmap() {
    return (
        <section className="py-40 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto mb-32 text-right">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center justify-end gap-4 text-xs font-mono text-primary uppercase tracking-[0.5em] mb-4"
                    >
                        Timeline_Archival
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6 leading-none">
                        System<br />
                        <span className="text-neutral-900 italic-outline">History</span>.
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Vertical Git Line */}
                    <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-px bg-neutral-800 -translate-x-1/2 md:translate-x-0" />

                    <div className="space-y-32">
                        {CAREER_NODES.map((node, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className={cn(
                                    "relative flex flex-col md:flex-row items-center gap-10 md:gap-20",
                                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                                )}
                            >
                                {/* Content Card */}
                                <div className="flex-1 w-full md:w-auto ml-16 md:ml-0 group">
                                    <div className="bg-neutral-900/40 border border-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] group-hover:border-primary/30 transition-all duration-700 shadow-xl">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">{node.date}</span>
                                            <div className="text-[10px] font-mono text-primary px-2 py-1 bg-primary/10 rounded uppercase">
                                                Branch: {node.branch}
                                            </div>
                                        </div>
                                        <h3 className="text-3xl font-black uppercase italic italic-outline-sm mb-2 group-hover:text-primary transition-colors">
                                            {node.title}
                                        </h3>
                                        <div className="text-xs font-mono text-neutral-500 mb-6 uppercase tracking-widest">{node.location}</div>
                                        <p className="text-neutral-400 leading-relaxed mb-8">
                                            {node.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                            {node.tags.map(tag => (
                                                <span key={tag} className="text-[8px] font-mono text-neutral-600 uppercase tracking-widest letter-spacing-wider">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Central Node */}
                                <div className="absolute left-[30px] md:left-1/2 top-0 md:top-12 -translate-x-1/2 md:translate-x-[-50%] z-20">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 90 }}
                                        className={cn(
                                            "w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-500",
                                            node.status === "active"
                                                ? "bg-primary border-primary text-black shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]"
                                                : "bg-neutral-950 border-neutral-800 text-neutral-500"
                                        )}
                                    >
                                        {node.branch === "main" ? <GitCommit className="w-5 h-5" /> : <GitBranch className="w-5 h-5" />}
                                    </motion.div>
                                </div>

                                {/* Placeholder for balance */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final Merge Point */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-col items-center mt-32"
                >
                    <div className="w-16 h-16 rounded-full border border-dashed border-neutral-800 flex items-center justify-center">
                        <GitMerge className="w-6 h-6 text-neutral-800" />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-800 mt-4 uppercase tracking-[0.4em]">End_of_Sequence</span>
                </motion.div>
            </div>
        </section>
    );
}
