"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { GraduationCap, Share2, Sparkles, ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export function AboutMe() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax & Reveal values
    const imageReveal = useTransform(scrollYProgress, [0.1, 0.4], ["100%", "0%"]);
    const textReveal = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
    const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

    // Smooth transitions
    const smoothImageReveal = useSpring(imageReveal, { stiffness: 40, damping: 20 });

    return (
        <section
            ref={sectionRef}
            className="py-40 md:py-80 relative overflow-hidden bg-neutral-950"
            id="about"
        >
            {/* Background Texture - Grain & Lines */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-150" />
                <div className="h-full w-px bg-white/10 absolute left-[15%] top-0" />
                <div className="h-full w-px bg-white/10 absolute left-[85%] top-0" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-20 items-stretch">

                    {/* 1. Cinematic Portrait - Shutter Reveal */}
                    <div className="lg:col-span-5 relative flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-[0_0_100px_rgba(0,0,0,0.5)]"
                        >
                            <motion.img
                                src="/rohit.jpeg"
                                alt="Rohit Sawant"
                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                            />

                            {/* Shutter Mask Effect */}
                            <motion.div
                                style={{ width: smoothImageReveal }}
                                className="absolute inset-0 right-0 bg-neutral-950 z-20 origin-right"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                            {/* Inner Badge */}
                            <div className="absolute bottom-10 left-10 overflow-hidden">
                                <motion.div
                                    initial={{ y: 50 }}
                                    whileInView={{ y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-12 h-px bg-primary" />
                                    <span className="text-xs font-mono text-primary uppercase tracking-[0.4em]">Designer & Dev</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Floating Credential - Magnetic Effect Concept */}
                        <motion.div
                            whileHover={{ y: -10, rotate: 2 }}
                            className="absolute -top-12 -right-12 p-8 bg-neutral-900/80 border border-white/10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl hidden md:block"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <Sparkles className="w-6 h-6 text-primary" />
                                <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest leading-none">Identity_Verified</span>
                            </div>
                            <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter">
                                Building <br /> <span className="text-neutral-600 italic-outline">Tomorrow</span>
                            </h4>
                        </motion.div>
                    </div>

                    {/* 2. Editorial Narrative - Bold Typography */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-16">
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-xs font-mono text-neutral-600 uppercase tracking-[1em] block"
                            >
                                Biography
                            </motion.span>

                            <motion.h2
                                style={{ y: textReveal, opacity: textOpacity }}
                                className="text-7xl md:text-[9rem] font-black text-white leading-[0.8] tracking-widest uppercase italic"
                            >
                                Rohit<br />
                                <span className="text-primary italic-outline">Sawant</span>.
                            </motion.h2>
                        </div>

                        <div className="max-w-2xl space-y-8">
                            <p className="text-2xl md:text-4xl text-neutral-400 font-light leading-snug">
                                An <span className="text-white font-bold italic">Engineering Architect</span> by trade, a <span className="text-white font-bold italic">Digital Voice</span> by choice.
                            </p>
                            <p className="text-lg text-neutral-500 font-medium leading-relaxed max-w-xl">
                                I specialize in crafting digital ecosystems where complex engineering logic meets human-centric design. Bridging the gap between the screen and the soul.
                            </p>

                            {/* Social Modules */}
                            <div className="flex gap-6 pt-6">
                                {[
                                    { icon: Github, href: "#" },
                                    { icon: Twitter, href: "#" },
                                    { icon: Linkedin, href: "#" }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/5 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all group"
                                    >
                                        <social.icon className="w-5 h-5 text-neutral-400 group-hover:text-primary transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* 3. The Role Cards - Refined Glassmorphism */}
                        <div className="grid md:grid-cols-2 gap-8 pt-10 border-t border-neutral-900">
                            {[
                                {
                                    icon: GraduationCap,
                                    title: "Scholar",
                                    desc: "Engineering student exploring neural networks and futuristic system logic."
                                },
                                {
                                    icon: Share2,
                                    title: "Influence",
                                    desc: "Leading a community of 10k+ through storytelling and tech insight."
                                }
                            ].map((card, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-primary/20 hover:bg-neutral-900/60 transition-all duration-500 group"
                                >
                                    <card.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                                    <h4 className="text-2xl font-black text-white uppercase italic mb-3 tracking-tighter">{card.title}</h4>
                                    <p className="text-neutral-500 text-sm leading-relaxed font-mono uppercase tracking-tight">{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Narrative Decoration - Cinematic Quote */}
            <div className="absolute bottom-10 left-[15%] overflow-hidden pointer-events-none select-none">
                <motion.div
                    style={{ x: useTransform(scrollYProgress, [0.5, 1], [-200, 200]) }}
                    className="text-[12vw] font-black text-white/[0.02] whitespace-nowrap leading-none italic uppercase italic-outline"
                >
                    CODE IS POETRY IN MOTION
                </motion.div>
            </div>

            {/* Glow Accents */}
            <div className="absolute top-1/4 right-[5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-[5%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
}
