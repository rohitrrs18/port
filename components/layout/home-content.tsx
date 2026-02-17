"use client";

import { KineticText } from "@/components/ui/kinetic-text";
import { GlitchText } from "@/components/ui/glitch-text";
import { LiquidChromeWrapper } from "@/components/canvas/liquid-chrome-wrapper";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically load heavy sections with ssr: false for high performance
const AboutMe = dynamic(() => import("@/components/sections/about-me").then(mod => mod.AboutMe), { ssr: false });
const CareerBlueprint = dynamic(() => import("@/components/sections/career-blueprint").then(mod => mod.CareerBlueprint), { ssr: false });
const KineticAccordion = dynamic(() => import("@/components/sections/kinetic-accordion").then(mod => mod.KineticAccordion), { ssr: false });
const WorkRedesign = dynamic(() => import("@/components/sections/work-redesign").then(mod => mod.WorkRedesign), { ssr: false });
const NeuralFeed = dynamic(() => import("@/components/sections/neural-feed").then(mod => mod.NeuralFeed), { ssr: false });
const Expertise = dynamic(() => import("@/components/sections/expertise").then(mod => mod.Expertise), { ssr: false });
const NeuralLink = dynamic(() => import("@/components/sections/neural-testimonials").then(mod => mod.NeuralLink), { ssr: false });
const MegaContact = dynamic(() => import("@/components/sections/mega-contact").then(mod => mod.MegaContact), { ssr: false });
const Footer = dynamic(() => import("@/components/layout/footer").then(mod => mod.Footer), { ssr: false });

interface HomeContentProps {
    posts: any[];
}

export function HomeContent({ posts }: HomeContentProps) {
    return (
        <main className="relative min-h-screen bg-neutral-950 text-neutral-100 selection:bg-neutral-100 selection:text-neutral-950 overflow-hidden">
            {/* 3D Background Layer */}
            <div className="fixed inset-0 z-0">
                <LiquidChromeWrapper />
            </div>

            {/* Content Layer */}
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="h-[90vh] md:h-screen flex flex-col justify-center items-center pointer-events-none px-4 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="z-20 text-center relative"
                    >
                        <div className="relative">
                            <KineticText text="BEYOND IMAGINATION" className="text-[12vw] md:text-[14vw] font-black leading-none tracking-tighter text-white drop-shadow-2xl" baseVelocity={1.5} />
                            <KineticText text="DIGITAL EXPERIENCE" className="text-[12vw] md:text-[14vw] font-black leading-none tracking-tighter text-white/50 drop-shadow-2xl" baseVelocity={-1.5} />
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="mt-16 pointer-events-auto"
                        >
                            <p className="text-xl md:text-2xl font-mono tracking-[0.3em] uppercase mb-4 text-center text-primary drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                                <GlitchText text="Rohit // Full Stack Developer" />
                            </p>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Editorial Content Layout */}
                <div className="bg-neutral-950/95 relative z-20 shadow-2xl">
                    <AboutMe />
                    <CareerBlueprint />
                    <KineticAccordion />
                    <WorkRedesign />
                    <NeuralFeed posts={posts} />
                    <Expertise />
                    <NeuralLink />
                    <MegaContact />
                    <Footer />
                </div>
            </div>
        </main>
    );
}
