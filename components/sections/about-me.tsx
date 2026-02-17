"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";
import Magnetic from "@/components/ui/magnetic";

const METRICS = [
    { num: "40+", label: "Projects" },
    { num: "10K", label: "Community" },
    { num: "3+", label: "Years" },
];

export function AboutMe() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, margin: "-10%" });
    const [hovering, setHovering] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const imgScale = useTransform(scrollYProgress, [0.1, 0.5], [1.3, 1]);
    const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const textX = useTransform(scrollYProgress, [0.2, 0.6], [120, 0]);
    const textO = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
    const nameSlide = useTransform(scrollYProgress, [0.1, 0.45], ["110%", "0%"]);
    const bgTextX = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);

    const smoothScale = useSpring(imgScale, { stiffness: 50, damping: 20 });
    const smoothNameSlide = useSpring(nameSlide, { stiffness: 40, damping: 20 });

    const handleImageMouse = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden bg-neutral-950 py-24 md:py-0 md:min-h-[150vh]"
            id="about"
        >
            {/* ═══ MASSIVE BACKGROUND NAME ═══ */}
            <motion.div
                style={{ x: bgTextX }}
                className="absolute top-[15%] md:top-[20%] left-0 pointer-events-none select-none z-0 whitespace-nowrap"
            >
                <span className="text-[22vw] font-black text-white/[0.015] uppercase italic tracking-tighter leading-none">
                    ROHIT SAWANT
                </span>
            </motion.div>

            {/* ═══ STICKY WRAPPER ═══ */}
            <div className="md:sticky md:top-0 md:h-screen flex items-center">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-0 items-center relative">

                        {/* ──── LEFT: THE PORTRAIT ──── */}
                        <div className="relative z-20 lg:-mr-24">
                            <motion.div
                                ref={imageRef}
                                onMouseEnter={() => setHovering(true)}
                                onMouseLeave={() => setHovering(false)}
                                onMouseMove={handleImageMouse}
                                className="relative aspect-[3/4] max-w-[500px] mx-auto lg:mx-0 overflow-hidden cursor-none group"
                                style={{ y: imgY }}
                            >
                                {/* Image */}
                                <motion.img
                                    src="/rohit.jpeg"
                                    alt="Rohit Sawant"
                                    className="w-full h-full object-cover will-change-transform"
                                    style={{ scale: smoothScale }}
                                />

                                {/* Gradient Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-70" />
                                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/50 via-transparent to-transparent" />

                                {/* Hover Spotlight */}
                                {hovering && (
                                    <div
                                        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none mix-blend-soft-light transition-opacity duration-300"
                                        style={{
                                            left: cursorPos.x - 150,
                                            top: cursorPos.y - 150,
                                            background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
                                        }}
                                    />
                                )}

                                {/* Custom Cursor Dot */}
                                {hovering && (
                                    <motion.div
                                        className="absolute w-3 h-3 border border-white rounded-full pointer-events-none z-50 mix-blend-difference"
                                        animate={{ x: cursorPos.x - 6, y: cursorPos.y - 6 }}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}

                                {/* ── Measurement Annotations ── */}
                                <div className="absolute top-0 right-0 h-full w-8 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="h-full w-px bg-white/20 relative">
                                        <div className="absolute top-0 w-3 h-px bg-white/20 -translate-x-1" />
                                        <div className="absolute bottom-0 w-3 h-px bg-white/20 -translate-x-1" />
                                        <span className="absolute top-1/2 -translate-y-1/2 -rotate-90 text-[7px] font-mono text-white/30 tracking-[0.4em] whitespace-nowrap">
                                            1920 × 2560
                                        </span>
                                    </div>
                                </div>

                                {/* ── Corner Markers ── */}
                                <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* ── Bottom Label ── */}
                                <div className="absolute bottom-8 left-8 z-30">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-[1px] bg-primary" />
                                            <span className="text-[9px] font-mono text-primary uppercase tracking-[0.5em] whitespace-nowrap">
                                                PUNE, INDIA
                                            </span>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Metrics Row - Below Image */}
                            <div className="flex gap-12 mt-10 max-w-[500px] mx-auto lg:mx-0">
                                {METRICS.map((m, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        className="group"
                                    >
                                        <span className="text-4xl md:text-5xl font-black text-white italic tracking-tighter leading-none">
                                            {m.num}
                                        </span>
                                        <span className="block text-[9px] font-mono text-neutral-600 uppercase tracking-[0.4em] mt-2">
                                            {m.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* ──── RIGHT: EDITORIAL TEXT ──── */}
                        <div className="relative z-10 lg:pl-16 xl:pl-24 flex flex-col gap-10 md:gap-16">

                            {/* Name Reveal */}
                            <div className="overflow-hidden">
                                <motion.div style={{ y: smoothNameSlide }}>
                                    <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-[1em] block mb-6">
                                        IDENTITY
                                    </span>
                                    <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase italic">
                                        Rohit
                                        <br />
                                        <span className="text-neutral-900 italic-outline">Sawant</span>
                                    </h2>
                                </motion.div>
                            </div>

                            {/* Bio */}
                            <motion.div
                                style={{ x: textX, opacity: textO }}
                                className="space-y-6 max-w-lg"
                            >
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-12 h-[1px] bg-primary" />
                                    <span className="text-[10px] font-mono text-primary uppercase tracking-[0.5em]">
                                        AI_SYSTEMS_ARCHITECT
                                    </span>
                                </div>
                                <p className="text-2xl md:text-3xl text-neutral-300 font-light leading-snug">
                                    I build <span className="text-white font-bold italic">intelligent systems</span> where{" "}
                                    <span className="text-white font-bold italic">agentic logic</span>{" "}
                                    meets{" "}
                                    <span className="text-white font-bold italic">immersive experience</span>.
                                </p>
                                <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                                    From legacy PHP conquests to the frontiers of LLM engineering, I specialize in crafting
                                    autonomous digital entities that learn, evolve, and redefine human-system interaction.
                                </p>

                                {/* Technical Specification Block - Add Depth */}
                                <div className="pt-8 mt-8 border-t border-white/[0.05] grid grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Active_Stack</span>
                                        <div className="flex flex-wrap gap-2">
                                            {["LLMs", "React", "Rust", "Kotlin"].map(t => (
                                                <span key={t} className="text-[10px] text-white/40 font-mono border border-white/5 px-2 py-0.5 rounded-sm">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-2 text-right">
                                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Current_Focus</span>
                                        <p className="text-[11px] text-primary font-mono lowercase tracking-tighter">
                                            agentic_workflows.v4
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Social + CTA Row */}

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center gap-8"
                            >
                                <div className="flex gap-3">
                                    {[Github, Twitter, Linkedin].map((Icon, i) => (
                                        <Magnetic key={i}>
                                            <a
                                                href="#"
                                                className="w-12 h-12 bg-white/[0.03] border border-white/5 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-all duration-500 group"
                                            >
                                                <Icon className="w-4 h-4 text-neutral-600 group-hover:text-primary transition-colors" />
                                            </a>
                                        </Magnetic>
                                    ))}
                                </div>

                                <div className="h-8 w-px bg-white/10" />

                                <Magnetic>
                                    <a
                                        href="#contact"
                                        className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                                    >
                                        <span className="text-xs font-mono uppercase tracking-[0.3em]">
                                            Let&apos;s Talk
                                        </span>
                                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </a>
                                </Magnetic>
                            </motion.div>

                            {/* Decorative Line */}
                            <div className="hidden lg:block">
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-px bg-gradient-to-r from-primary/40 via-white/10 to-transparent origin-left max-w-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══ AMBIENT GLOWS ═══ */}
            <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />
            <div className="absolute bottom-[20%] left-0 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />
        </section>
    );
}
