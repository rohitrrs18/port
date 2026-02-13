"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "E-Commerce",
        img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        color: "#a29bfe",
    },
    {
        title: "AI Chat",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        color: "#74b9ff",
    },
    {
        title: "Health",
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        color: "#55efc4",
    },
    {
        title: "Finance",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        color: "#ffeaa7",
    },
];

interface Project {
    title: string;
    img: string;
    color: string;
}

function ProjectCard({ project, i, progress, total }: { project: Project; i: number; progress: any; total: number }) {
    const scaleRange = i === total - 1 ? [1, 1] : [1, 0];
    const scale = useTransform(progress, [i * 0.25, 1], scaleRange);
    const y = useTransform(progress, [i * 0.25, 1], [0, -100 * (total - i)]);
    const rotate = useTransform(progress, [i * 0.25, 1], [0, (i % 2 === 0 ? 1 : -1) * 5]);

    return (
        <motion.div
            style={{ scale, y, rotate, zIndex: total - i }}
            className="absolute w-[80vw] md:w-[60vw] h-[60vh] bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl origin-top"
        >
            <div className="absolute inset-0 bg-neutral-950/20 z-10 hover:bg-transparent transition-colors duration-500" />
            <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-700">
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                    style={{ backgroundColor: project.color, backgroundImage: `url(${project.img})` }}
                />
            </div>
            <div className="absolute bottom-10 left-10 z-20 mix-blend-difference">
                <h3 className="text-6xl font-black text-white">{project.title}</h3>
            </div>
        </motion.div>
    );
}

export function ScatterGallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} className="h-[250vh] relative bg-neutral-950">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
                <h2 className="text-[12vw] font-black text-neutral-800 absolute z-0 pointer-events-none">
                    WORK
                </h2>

                <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center">
                    {projects.map((project, i) => (
                        <ProjectCard
                            key={i}
                            project={project}
                            i={i}
                            progress={scrollYProgress}
                            total={projects.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
