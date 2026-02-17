"use client";

import { motion } from "framer-motion";
import { Zap, Activity, Cpu, Hexagon } from "lucide-react";

const EXPERIMENTS = [
    { title: "Kinetic_Noise", type: "Shader", status: "STABLE", complexity: "High" },
    { title: "Fluid_Dynamics", type: "Compute", status: "OPTIMIZING", complexity: "Ultra" },
    { title: "Neural_Mesh", type: "Geometry", status: "STABLE", complexity: "Mid" },
    { title: "Void_Renderer", type: "Post-Processing", status: "EXPERIMENTAL", complexity: "High" },
];

export function TechnicalLab() {
    return (
        <section className="py-40 bg-neutral-950 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-4 text-xs font-mono text-primary uppercase tracking-[0.5em] mb-8 bg-primary/5 px-6 py-2 rounded-full border border-primary/10"
                    >
                        Research_And_Development
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    </motion.div>
                    <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase mb-6 leading-[0.8]">
                        Technical<br />
                        <span className="text-neutral-900 italic-outline">Lab</span>.
                    </h2>
                    <p className="text-xl text-neutral-500 max-w-xl mx-auto font-mono">
                        A proving ground for advanced web experiments, shader physics, and next-gen rendering patterns.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {EXPERIMENTS.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative h-[400px] bg-neutral-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-3xl hover:border-primary/30 transition-all duration-700"
                        >
                            <div className="absolute inset-0 overflow-hidden opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                                {[...Array(20)].map((_, j) => (
                                    <motion.div
                                        key={j}
                                        animate={{
                                            y: [-20, 420],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: Math.random() * 3 + 2,
                                            repeat: Infinity,
                                            delay: Math.random() * 2,
                                            ease: "linear"
                                        }}
                                        className="absolute w-[1px] bg-primary/50"
                                        style={{ left: `${Math.random() * 100}%`, height: `${Math.random() * 100 + 50}px` }}
                                    />
                                ))}
                            </div>

                            <div className="relative h-full p-8 flex flex-col justify-between z-10">
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                                        <Cpu className="w-5 h-5 text-neutral-500 group-hover:text-primary transition-colors" />
                                    </div>
                                    <div className="text-[8px] font-mono text-neutral-600 bg-black/40 px-3 py-1.5 rounded-full border border-white/5 uppercase tracking-widest">
                                        Status: {exp.status}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <div className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">{exp.type}</div>
                                        <h3 className="text-3xl font-black uppercase italic italic-outline-sm group-hover:text-white transition-colors tracking-tighter">
                                            {exp.title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                                        <div className="flex items-center gap-2">
                                            <Zap className="w-3 h-3 text-neutral-600" />
                                            <span className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest">{exp.complexity}</span>
                                        </div>
                                        <motion.div
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                            className="flex items-center gap-2"
                                        >
                                            <Activity className="w-3 h-3 text-primary/50" />
                                            <span className="text-[9px] font-mono text-primary/50 uppercase tracking-widest">PROVE_ACTIVE</span>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/20 -translate-y-full group-hover:translate-y-[400px] transition-transform duration-[2000ms] linear" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 flex flex-col items-center opacity-30">
                    <Hexagon className="w-8 h-8 text-neutral-800 animate-spin-slow" />
                    <span className="text-[9px] font-mono text-neutral-800 mt-4 uppercase tracking-[0.6em]">System_Integrity_Verified: 100%</span>
                </div>
            </div>
        </section>
    );
}
