"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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

                <div className="space-y-40 md:space-y-0 flex flex-col gap-y-20 md:gap-y-80">
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

    const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

    // Mouse follow parallax for images
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);
    const springMouseX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springMouseY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        mouseX.set((clientX - left) / width);
        mouseY.set((clientY - top) / height);
    };

    const imageX = useTransform(springMouseX, [0, 1], ["5%", "-5%"]);
    const imageY = useTransform(springMouseY, [0, 1], ["5%", "-5%"]);

    return (
        <div
            ref={container}
            className="min-h-[80vh] md:h-[120vh] grid md:grid-cols-12 gap-10 items-center relative py-20 md:py-0 group"
            onMouseMove={handleMouseMove}
            data-cursor="view"
        >
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

                    <div className="flex flex-wrap gap-4 pt-6 md:pt-8">
                        <Link
                            href={project.id === "medicore" ? "https://github.com" : "#"} // Placeholder
                            className="inline-flex items-center gap-2 text-white font-bold group"
                        >
                            <span className="text-sm md:text-base">Explore Deeply</span>
                            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>

                        <div className="flex gap-4 items-center">
                            <a href="#" className="text-neutral-500 hover:text-primary transition-colors text-xs font-mono uppercase tracking-widest flex items-center gap-1">
                                [ Live_Site ]
                            </a>
                            <a href="#" className="text-neutral-500 hover:text-primary transition-colors text-xs font-mono uppercase tracking-widest flex items-center gap-1">
                                [ GitHub ]
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Media Column */}
            <div className={cn(
                "md:col-span-12 lg:col-span-8 relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden rounded-[2rem] md:rounded-none",
                index % 2 === 0 ? "lg:order-2" : "lg:order-1"
            )}>
                <motion.div
                    style={{ y, x: imageX, top: imageY }}
                    className="absolute -inset-[10%] w-[120%] h-[120%]"
                >
                    <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-[filter,transform] duration-700 scale-125 md:group-hover:scale-110"
                    />
                </motion.div>

                {/* Index Number Layer */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
                    <motion.span
                        className="text-[60vw] md:text-[30vw] font-black text-white/5 md:text-white/5 italic select-none"
                    >
                        0{index + 1}
                    </motion.span>
                </div>

                {/* Glassmorphic Overlay for Mobile Context */}
                <div className="absolute bottom-4 left-4 right-4 md:hidden">
                    <div className="p-4 backdrop-blur-xl bg-black/60 border border-white/10 rounded-xl">
                        <div className="flex justify-between items-center">
                            <h4 className="text-white font-black uppercase text-lg tracking-tighter">{project.title}</h4>
                            <span className="text-[8px] font-mono text-primary/80 uppercase tracking-widest">{project.category}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
