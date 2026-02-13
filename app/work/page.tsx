"use client";

import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/layout/footer";

export default function WorkArchive() {
    return (
        <div className="bg-neutral-950 text-white min-h-screen">
            <header className="container mx-auto px-6 py-40">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs font-mono text-primary uppercase tracking-[0.5em] block mb-6"
                >
                    Archive
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-7xl md:text-[12vw] font-black leading-[0.8] tracking-tighter uppercase italic"
                >
                    All<br />Experiments
                </motion.h1>
            </header>

            <section className="container mx-auto px-6 pb-40">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <Link href={`/work/${project.id}`} className="group block space-y-6">
                                <div className="aspect-[4/5] overflow-hidden rounded-xl border border-neutral-900 bg-neutral-900 grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">{project.category}</span>
                                        <ArrowUpRight className="w-4 h-4 text-neutral-700 group-hover:text-primary transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase italic group-hover:text-primary transition-colors leading-none tracking-tighter">
                                        {project.title}
                                    </h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
