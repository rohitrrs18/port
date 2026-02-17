"use client";

import { KineticText } from "@/components/ui/kinetic-text";
import { GlitchText } from "@/components/ui/glitch-text";
import { LiquidChromeWrapper } from "@/components/canvas/liquid-chrome-wrapper";
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
                <section className="h-[90vh] md:h-screen flex flex-col justify-center items-center pointer-events-none px-4">
                    <div className="mix-blend-difference z-20 text-center">
                        <KineticText text="BEYOND IMAGINATION" className="text-[12vw] md:text-[15vw] font-black leading-none tracking-tighter opacity-80" baseVelocity={2} />
                        <KineticText text="DIGITAL EXPERIENCE" className="text-[12vw] md:text-[15vw] font-black leading-none tracking-tighter opacity-80" baseVelocity={-2} />
                    </div>

                    <div className="mt-20 mix-blend-difference pointer-events-auto">
                        <p className="text-xl md:text-2xl font-mono tracking-widest uppercase mb-4 text-center">
                            <GlitchText text="Rohit // Full Stack Developer" />
                        </p>
                    </div>
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
