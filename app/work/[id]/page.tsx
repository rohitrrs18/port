"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Cpu, Calendar, User, Target, BarChart } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";

export default function ProjectDetail() {
    const { id } = useParams();
    const router = useRouter();
    const project = projects.find(p => p.id === id);

    if (!project) return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-black italic">PROJECT NOT FOUND</h1>
                <Link href="/" className="text-primary hover:underline font-mono uppercase">Go Home</Link>
            </div>
        </div>
    );

    return (
        <div className="bg-neutral-950 text-white min-h-screen">
            {/* Nav */}
            <nav className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center mix-blend-difference">
                <button onClick={() => router.back()} className="group flex items-center gap-2 hover:text-primary transition-colors">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-xs uppercase tracking-widest">Back</span>
                </button>
            </nav>

            {/* Hero Section */}
            <header className="relative h-[80vh] flex items-end pb-20 px-6 md:px-20 overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale"
                    />
                </motion.div>

                <div className="relative z-10 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-4 text-primary font-mono text-xs tracking-[0.5em] uppercase mb-4"
                    >
                        <span className="w-10 h-[1px] bg-primary" />
                        {project.category}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase italic"
                    >
                        {project.title}
                    </motion.h1>
                </div>
            </header>

            {/* Content Section */}
            <section className="container mx-auto px-6 md:px-20 py-40 grid lg:grid-cols-12 gap-20">
                {/* Meta Grid */}
                <div className="lg:col-span-4 space-y-12">
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <div className="flex items-center gap-2 text-neutral-500 font-mono text-[10px] uppercase tracking-widest mb-2">
                                <Calendar className="w-3 h-3" /> Year
                            </div>
                            <p className="text-xl font-bold uppercase">{project.year}</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 text-neutral-500 font-mono text-[10px] uppercase tracking-widest mb-2">
                                <User className="w-3 h-3" /> Role
                            </div>
                            <p className="text-xl font-bold uppercase">{project.role}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-neutral-500 font-mono text-[10px] uppercase tracking-widest">
                            <Cpu className="w-3 h-3" /> Technologies
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full border border-neutral-800 text-neutral-400 text-xs font-mono">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Narrative */}
                <div className="lg:col-span-8 space-y-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black uppercase italic tracking-tight">The Vision</h2>
                        <p className="text-2xl text-neutral-400 leading-relaxed font-medium">
                            {project.longDescription}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-20 pt-20 border-t border-neutral-900">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-[0.3em]">
                                <Target className="w-4 h-4" /> The Challenge
                            </div>
                            <p className="text-neutral-300 leading-relaxed italic">
                                "{project.challenge}"
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-green-500 font-mono text-xs uppercase tracking-[0.3em]">
                                <BarChart className="w-4 h-4" /> The Outcome
                            </div>
                            <p className="text-neutral-300 leading-relaxed">
                                {project.outcome}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Media Gallery Placeholder */}
            <section className="px-6 md:px-20 pb-40">
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800">
                    <img src={project.img} className="w-full h-full object-cover opacity-60" alt="" />
                </div>
            </section>

            <Footer />
        </div>
    );
}
