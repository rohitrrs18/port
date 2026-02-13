"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Terminal, Calendar, Code, Briefcase, ChevronRight, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const timelineEvents = [
    {
        id: "DEPLOY_04",
        date: "2024 — PRESENT",
        title: "Full Stack Architect",
        location: "Freelance & Open Source",
        description: "Orchestrating complex digital systems using advanced React patterns and native Android optimization techniques.",
        metrics: ["+40% Perf", "12+ Apps", "Zero Downtime"],
        icon: Terminal,
        active: true
    },
    {
        id: "DEPLOY_03",
        date: "2023 — 2024",
        title: "Android Ecosystem Lead",
        location: "Tech Innovation Hub",
        description: "Redesigning mobile architectures for scalability. Specialized in Jetpack Compose and custom Gradle plugin development.",
        metrics: ["10k+ Users", "4.8 App Rating", "99% Crash-Free"],
        icon: Code,
        active: false
    },
    {
        id: "DEPLOY_02",
        date: "2022 — 2023",
        title: "Interactive UI Developer",
        location: "Creative Design Studio",
        description: "Bridging architectural logic with avant-garde aesthetics. Created 3D-heavy web experiences for premium brands.",
        metrics: ["Awwwards X 2", "1M+ Impressions", "Smooth 60FPS"],
        icon: Briefcase,
        active: false
    },
    {
        id: "DEPLOY_01",
        date: "2021 — 2022",
        title: "Junior Systems Engineer",
        location: "Global Tech Solutions",
        description: "Layering the foundation in cloud infrastructure and low-level system performance tuning.",
        metrics: ["Backend Lead", "AWS Optimized", "Agile Core"],
        icon: Activity,
        active: false
    }
];

export function CareerBlueprint() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

    return (
        <section className="py-40 bg-neutral-950 relative overflow-hidden" id="experience" ref={containerRef}>
            {/* Background Data Matrix */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
                <div className="absolute top-0 right-10 text-[15vw] font-black uppercase tracking-tighter italic">LOGBOOK</div>
                <div className="absolute bottom-0 left-10 text-[15vw] font-black uppercase tracking-tighter italic opacity-50">ARCHIVE_SYSTEM</div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-32 space-y-6">
                    <div className="flex items-center gap-4 text-xs font-mono text-primary uppercase tracking-[0.8em]">
                        <Activity className="w-4 h-4 animate-pulse" />
                        Professional_History_Stream
                    </div>
                    <h2 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase italic shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        Career <br /> <span className="text-neutral-800 italic-outline">Blueprint</span>.
                    </h2>
                </div>

                <div className="relative">
                    {/* Central Vertical Path */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-neutral-900 md:-translate-x-1/2" />
                    <motion.div
                        style={{ scaleY: pathLength, originY: 0 }}
                        className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary md:-translate-x-1/2 z-20"
                    />

                    {/* Timeline Nodes */}
                    <div className="space-y-32">
                        {timelineEvents.map((event, i) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={cn(
                                    "relative flex flex-col md:flex-row items-start md:items-center gap-12",
                                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                                )}
                            >
                                {/* Center Dot */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-neutral-950 border-2 border-neutral-800 md:-translate-x-1/2 z-30 flex items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0.5 }}
                                        whileInView={{ scale: 1 }}
                                        className={cn("w-1.5 h-1.5 rounded-full", event.active ? "bg-primary animate-pulse shadow-[0_0_10px_#7c3aed]" : "bg-neutral-600")}
                                    />
                                </div>

                                {/* Date HUD */}
                                <div className={cn(
                                    "flex-1 flex flex-col items-start gap-4",
                                    i % 2 === 0 ? "md:items-start md:pl-20" : "md:items-end md:pr-20 text-right"
                                )}>
                                    <div className="flex items-center gap-3 font-mono text-[10px] text-neutral-500 bg-neutral-900/50 px-4 py-2 rounded-full border border-white/5">
                                        <Calendar className="w-3 h-3 text-primary" />
                                        <span className="tracking-widest uppercase">{event.date}</span>
                                    </div>
                                    <span className="text-xs font-mono text-neutral-700 font-black tracking-[0.2em]">{event.id}</span>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1">
                                    <div className="group relative p-8 md:p-12 rounded-[2.5rem] bg-neutral-900/30 border border-white/5 backdrop-blur-3xl hover:border-primary/50 transition-all duration-700">
                                        <div className="absolute top-6 right-8 text-[12px] font-mono text-neutral-800 select-none group-hover:text-primary transition-colors">OS_DEPLOYMENT_HANDLED</div>

                                        <div className="flex items-start gap-6 mb-8">
                                            <div className="w-14 h-14 rounded-2xl bg-neutral-900 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all">
                                                <event.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter">{event.title}</h4>
                                                <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">{event.location}</p>
                                            </div>
                                        </div>

                                        <p className="text-neutral-400 text-sm leading-relaxed mb-10 max-w-md">
                                            {event.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            {event.metrics.map(metric => (
                                                <span key={metric} className="text-[9px] font-mono text-white/40 bg-neutral-950 px-3 py-1.5 rounded-lg border border-white/5 uppercase tracking-widest flex items-center gap-1.5">
                                                    <ChevronRight className="w-2.5 h-2.5 text-primary" />
                                                    {metric}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute -bottom-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}
