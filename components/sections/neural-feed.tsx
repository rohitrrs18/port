"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
}

interface NeuralFeedProps {
    posts: BlogPost[];
}

import { BookAnimation } from "@/components/ui/book-animation";

export function NeuralFeed({ posts }: NeuralFeedProps) {
    const [hoveredPost, setHoveredPost] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse tracking for floating image
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 50, stiffness: 400 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(springY, [0, 600], [15, -15]);
    const rotateY = useTransform(springX, [0, 800], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top } = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0 };
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen bg-neutral-950 py-32 overflow-hidden cursor-crosshair"
        >
            {/* Background Chaos */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                {/* Grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-20">
                    <h2 className="text-sm font-mono text-neutral-500 mb-4 track-widest">/// LATEST_TRANSMISSIONS</h2>
                    <h3 className="text-[10vw] font-black leading-[0.8] text-white tracking-tighter">
                        NEURAL<br />FEED
                    </h3>
                </div>

                <div className="flex flex-col">
                    {posts.map((post, index) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group relative border-t border-neutral-800 py-12 transition-colors hover:bg-white/5"
                            onMouseEnter={() => setHoveredPost(post.slug)}
                            onMouseLeave={() => setHoveredPost(null)}
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 relative z-10 mix-blend-difference">
                                <div className="flex items-center gap-6">
                                    <span className="text-xl font-mono text-neutral-500 group-hover:text-white transition-colors">0{index + 1}</span>
                                    <h4 className="text-4xl md:text-6xl font-bold text-neutral-400 group-hover:text-white transition-colors">
                                        {post.title}
                                    </h4>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-neutral-500 font-mono text-sm">{post.date}</span>
                                    <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                                </div>
                            </div>

                            {/* Glitch Overlay Text */}
                            <div className="absolute inset-0 pointer-events-none flex items-center opacity-0 group-hover:opacity-10 transition-opacity overflow-hidden">
                                <span className="text-[15vw] font-black text-white whitespace-nowrap animate-pulse">
                                    {post.title} {post.title}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Floating Book Preview */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    rotateX: rotateX,
                    rotateY: rotateY,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                className={cn(
                    "pointer-events-none fixed top-0 left-0 z-30 hidden md:block",
                    hoveredPost ? "opacity-100" : "opacity-0"
                )}
            >
                <BookAnimation />
            </motion.div>

        </section>
    );
}
