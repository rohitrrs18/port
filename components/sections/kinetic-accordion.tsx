"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        title: "Full Stack Engineering",
        desc: "Building robust, scalable distributed systems using Next.js, Node.js, and Golang. From microservices to monorepos, every architecture tells a story.",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        tags: ["Next.js", "Node.js", "Golang", "AWS", "Docker"],
        id: "01",
    },
    {
        title: "Creative Development",
        desc: "Crafting immersive digital worlds with Three.js, R3F, and custom GLSL shaders. Where mathematics meets visual poetry.",
        img: "https://images.unsplash.com/photo-1614726365723-40c302a99a3d?q=80&w=2670&auto=format&fit=crop",
        tags: ["Three.js", "WebGL", "GLSL", "React Three Fiber"],
        id: "02",
    },
    {
        title: "AI & Machine Learning",
        desc: "Integrating LLMs and neural networks to create intelligent, adaptive user interfaces that learn, evolve and surprise.",
        img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
        tags: ["OpenAI", "TensorFlow", "LLMs", "Python"],
        id: "03",
    },
    {
        title: "Design Systems",
        desc: "Pushing UI/UX boundaries with avant-garde layouts, fluid micro-interactions, and design tokens that scale across products.",
        img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2564&auto=format&fit=crop",
        tags: ["Figma", "Motion Design", "UI/UX", "Tokens"],
        id: "04",
    },
];

export function KineticAccordion() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const springX = useSpring(mousePos.x, { stiffness: 100, damping: 20 });
    const springY = useSpring(mousePos.y, { stiffness: 100, damping: 20 });

    useEffect(() => {
        springX.set(mousePos.x);
        springY.set(mousePos.y);
    }, [mousePos, springX, springY]);

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="py-32 md:py-60 bg-neutral-950 relative overflow-hidden"
            id="expertise"
        >
            {/* Background Image Reveal */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <AnimatePresence mode="wait">
                    {activeIndex !== null && (
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 0.15, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="absolute inset-0"
                        >
                            <img
                                src={services[activeIndex].img}
                                alt=""
                                className="w-full h-full object-cover filter grayscale"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col gap-4 mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 text-xs font-mono text-primary uppercase tracking-[0.8em]"
                    >
                        <span className="w-12 h-[1px] bg-primary/30" />
                        CORE_SERVICES_v1
                    </motion.div>
                    <h2 className="text-[12vw] md:text-[8vw] font-black text-white leading-none tracking-tighter uppercase italic">
                        SYSTEM<br />
                        <span className="text-neutral-800 italic-outline">CAPABILITIES</span>
                    </h2>
                </div>

                {/* Services List */}
                <div className="relative">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            onMouseEnter={() => setActiveIndex(i)}
                            className="group border-b border-white/[0.05] relative"
                        >
                            <div className="flex items-center justify-between py-10 md:py-16 cursor-pointer overflow-hidden">
                                <div className="flex items-center gap-8 md:gap-14">
                                    <span className="text-xs font-mono text-neutral-600 group-hover:text-primary transition-colors">
                                        {service.id}
                                    </span>
                                    <h3
                                        className={cn(
                                            "text-4xl md:text-7xl lg:text-9xl font-black uppercase italic tracking-tigh transition-all duration-500",
                                            activeIndex === i ? "text-white translate-x-4 md:translate-x-8" : "text-neutral-800 group-hover:text-neutral-500"
                                        )}
                                    >
                                        {service.title}
                                    </h3>
                                </div>

                                <motion.div
                                    className={cn(
                                        "w-12 h-12 md:w-20 md:h-20 border border-white/10 rounded-full flex items-center justify-center transition-all duration-500",
                                        activeIndex === i ? "bg-primary border-primary text-black" : "text-neutral-600 group-hover:border-white/20"
                                    )}
                                >
                                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                                </motion.div>
                            </div>

                            {/* Floating Preview Card (only visible on large screens) */}
                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                        animate={{ opacity: 1, scale: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, x: 20 }}
                                        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[400px] pointer-events-none z-20"
                                    >
                                        <div className="bg-neutral-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
                                            <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                                                <img
                                                    src={service.img}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <p className="text-neutral-300 text-lg leading-relaxed mb-6 font-light">
                                                {service.desc}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {service.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 bg-white/[0.05] border border-white/[0.05] text-[10px] font-mono text-neutral-400 uppercase tracking-widest"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile/Tablet Detail View */}
                <div className="mt-12 lg:hidden space-y-12">
                    {activeIndex !== null && (
                        <motion.div
                            key={`mobile-${activeIndex}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-neutral-900/50 backdrop-blur-md border border-white/5 p-6 rounded-xl"
                        >
                            <p className="text-neutral-400 text-lg leading-relaxed mb-6 font-light">
                                {services[activeIndex].desc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {services[activeIndex].tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-white/[0.05] border border-white/10 text-[9px] font-mono text-neutral-500 uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Custom Mouse Follower Decorative Element */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                }}
                className="hidden md:block pointer-events-none absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] z-0"
            />
        </section>
    );
}

