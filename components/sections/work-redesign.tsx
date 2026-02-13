"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Folder, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/projects";

// Only taking first 4 for the home page highlight
const homeProjects = projects.slice(0, 4);

export function WorkRedesign() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <section className="bg-neutral-950 h-screen" id="work" />;
    }

    return (
        <section className="bg-neutral-950 relative" id="work">
            <div className="container mx-auto px-4 pt-40 pb-20">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 md:mb-40">
                    <div className="space-y-6">
                        <span className="text-xs font-mono text-primary uppercase tracking-[0.5em] block">Case Studies</span>
                        <h2 className="text-7xl md:text-[10rem] font-black text-white tracking-widest leading-[0.8] uppercase italic">
                            Works
                        </h2>
                    </div>
                    <p className="text-neutral-500 max-w-xs text-sm font-mono leading-relaxed pb-4 border-l border-neutral-800 pl-6">
                        A curated selection of experiments in digital tactility, system design, and brand storytelling. (2023—2024)
                    </p>
                </div>

                <div className="space-y-40 md:space-y-0">
                    {homeProjects.map((project, i) => (
                        <ProjectSection key={project.id} project={project} index={i} />
                    ))}
                </div>

                {/* View More CTA */}
                <div className="py-40 flex flex-col items-center">
                    <Link
                        href="/work"
                        className="group relative px-20 py-10 rounded-full border border-neutral-800 overflow-hidden transition-all hover:border-white"
                    >
                        <motion.div
                            className="absolute inset-0 bg-white"
                            initial={{ y: "100%" }}
                            whileHover={{ y: 0 }}
                            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        />
                        <span className="relative z-10 text-2xl font-black text-white group-hover:text-black uppercase tracking-tighter italic">
                            View All Experiments
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function ProjectSection({ project, index }: { project: typeof projects[0], index: number }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div ref={container} className="min-h-[80vh] md:h-[120vh] grid md:grid-cols-12 gap-10 items-center relative py-20 md:py-0">
            {/* Project Content - Pins on Desktop */}
            <div className={cn(
                "md:col-span-4 space-y-6 md:space-y-8 z-20 transition-all",
                index % 2 === 0 ? "md:order-1" : "md:order-2 md:text-right md:items-end flex flex-col"
            )}>
                <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    className="space-y-4 md:space-y-6"
                >
                    <div className="flex items-center gap-4 text-primary font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase">
                        <span className="w-8 h-[1px] bg-primary/30" />
                        {project.category}
                    </div>

                    <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none italic">
                        {project.title}
                    </h3>

                    <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-sm">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2 md:pt-4">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-[9px] md:text-[10px] font-mono px-3 py-1 rounded-full border border-neutral-800 text-neutral-500 uppercase">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <Link
                        href={`/work/${project.id}`}
                        className="inline-flex items-center gap-2 text-white font-bold group pt-6 md:pt-8"
                    >
                        <span className="text-sm md:text-base">Explore Deeply</span>
                        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </motion.div>
            </div>

            {/* Media Column */}
            <div className={cn(
                "md:col-span-8 relative h-[60vh] md:h-[80vh] overflow-hidden rounded-2xl md:rounded-[40px] border border-neutral-900 group",
                index % 2 === 0 ? "md:order-2" : "md:order-1"
            )}>
                <motion.div style={{ y }} className="absolute inset-0">
                    <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-125 group-hover:scale-110"
                    />
                </motion.div>

                {/* Index Number Layer */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
                    <motion.span
                        style={{ opacity }}
                        className="text-[40vw] md:text-[30vw] font-black text-white/5 italic select-none"
                    >
                        0{index + 1}
                    </motion.span>
                </div>

                {/* Glassmorphic Overlay for Mobile Context */}
                <div className="absolute bottom-6 left-6 right-6 md:hidden">
                    <div className="p-6 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl">
                        <h4 className="text-white font-black uppercase text-xl">{project.title}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
