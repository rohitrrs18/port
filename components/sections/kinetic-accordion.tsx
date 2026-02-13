"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const items = [
    {
        id: "01",
        title: "Engineering",
        subtitle: "Full Stack Architecture",
        description: "Building robust, scalable distributed systems using Next.js, Node.js, and Golang.",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        tags: ["System Design", "Cloud Native", "Microservices"]
    },
    {
        id: "02",
        title: "Expression",
        subtitle: "3D & WebGL Experiences",
        description: "Crafting immersive digital worlds with Three.js, R3F, and custom GLSL shaders.",
        img: "https://images.unsplash.com/photo-1614726365723-40c302a99a3d?q=80&w=2670&auto=format&fit=crop",
        tags: ["Three.js", "WebGL", "Creative Coding"]
    },
    {
        id: "03",
        title: "Innovation",
        subtitle: "AI & Machine Learning",
        description: "Integrating LLMs and neural networks to create intelligent, adaptive user interfaces.",
        img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
        tags: ["OpenAI", "TensorFlow", "Adaptive UI"]
    },
    {
        id: "04",
        title: "Aesthetics",
        subtitle: "Award-Winning Design",
        description: "Pushing the boundaries of UI/UX with avant-garde layouts and fluid micro-interactions.",
        img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2564&auto=format&fit=crop",
        tags: ["Figma", "Motion Design", "Design Systems"]
    }
];

export function KineticAccordion() {
    const [active, setActive] = useState<number>(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <section className="py-32 bg-neutral-950 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <h2 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-neutral-800">
                        EXPERTISE
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row h-[80vh] w-full gap-2">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            onClick={() => setActive(index)}
                            onMouseEnter={() => setActive(index)}
                            className={cn(
                                "relative overflow-hidden cursor-pointer",
                                "border-b lg:border-b-0 lg:border-r border-neutral-800 last:border-0",
                                "bg-neutral-900 rounded-2xl"
                            )}
                            animate={{
                                flex: active === index ? 3 : 1,
                                opacity: active === index ? 1 : 0.5
                            }}
                            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                        >
                            {/* Background Image */}
                            <motion.div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${item.img})`,
                                    willChange: "transform, opacity"
                                }}
                                animate={{
                                    scale: active === index ? 1.05 : 1,
                                    opacity: active === index ? 0.6 : 0.1
                                }}
                                transition={{ duration: 0.8 }}
                            />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                <div className="flex justify-between items-start">
                                    <span className="text-4xl font-mono font-bold text-white/50">{item.id}</span>
                                    <motion.div
                                        animate={{ rotate: active === index ? 45 : 0, opacity: active === index ? 1 : 0 }}
                                        className="bg-white text-black p-3 rounded-full"
                                    >
                                        <ArrowUpRight className="w-6 h-6" />
                                    </motion.div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-4xl lg:text-5xl font-bold text-white uppercase break-all">
                                        {item.title}
                                    </h3>

                                    <AnimatePresence mode="wait">
                                        {active === index && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.3 }}
                                                className="space-y-4"
                                            >
                                                <p className="text-xl text-primary font-bold">{item.subtitle}</p>
                                                <p className="text-neutral-300 max-w-md">{item.description}</p>
                                                <div className="flex flex-wrap gap-2 pt-4">
                                                    {item.tags.map(tag => (
                                                        <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono uppercase tracking-wider text-white border border-white/10">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
