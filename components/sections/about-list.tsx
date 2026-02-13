"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Full Stack",
        description: "Building scalable architectures.",
        id: "01",
        color: "bg-blue-500",
        img: "https://images.unsplash.com/photo-1607799275518-d58665d096b1?q=80&w=800"
    },
    {
        title: "Mobile Dev",
        description: "Native Android & iOS apps.",
        id: "02",
        color: "bg-purple-500",
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800"
    },
    {
        title: "WebGL 3D",
        description: "Immersive web experiences.",
        id: "03",
        color: "bg-emerald-500",
        img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800"
    },
    {
        title: "UI/UX",
        description: "Award-winning design systems.",
        id: "04",
        color: "bg-orange-500",
        img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800"
    },
];

export function AboutList() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-10 pl-10">
                    {/* Title Card */}
                    <div className="group relative h-[60vh] w-[40vw] md:w-[30vw] overflow-hidden bg-neutral-900 border border-neutral-800 shrink-0">
                        <div className="absolute inset-0 z-0 flex items-center justify-center">
                            <h2 className="text-[8vw] font-black text-white/10 leading-none">WHAT<br />I DO</h2>
                        </div>
                        <div className="absolute bottom-10 left-10 max-w-xs">
                            <p className="text-neutral-400 text-lg">
                                I combine technical expertise with artistic vision to create digital products that stand out.
                            </p>
                        </div>
                    </div>

                    {services.map((service) => (
                        <div key={service.id} className="group relative h-[60vh] w-[60vh] overflow-hidden bg-neutral-900 border border-neutral-800 shrink-0 transition-all hover:border-white/50">
                            <div
                                className="absolute inset-0 z-0 bg-cover bg-center opacity-0 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                                style={{ backgroundImage: `url(${service.img})` }}
                            />
                            <div className="absolute inset-0 z-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

                            <div className="absolute inset-0 z-10 flex flex-col justify-between p-10">
                                <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-neutral-800 to-neutral-950 group-hover:from-white group-hover:to-neutral-500 transition-colors duration-500 select-none">
                                    {service.id}
                                </span>
                                <div>
                                    <h3 className="text-5xl font-bold uppercase text-white mb-4 leading-none group-hover:translate-x-2 transition-transform">
                                        {service.title}
                                    </h3>
                                    <p className="text-xl text-neutral-400 max-w-xs group-hover:text-white transition-colors">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
