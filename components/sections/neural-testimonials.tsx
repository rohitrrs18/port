"use client";

import { motion } from "framer-motion";
import { Quote, ShieldCheck, Zap, MessageSquare, Fingerprint } from "lucide-react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
    {
        name: "Alex Rivera",
        role: "CTO, Nexus Dynamics",
        text: "Rohit delivered an architectural masterpiece. The speed and technical depth of the platform exceeded every metric we set.",
        id: "PKT_0x881",
        status: "VERIFIED"
    },
    {
        name: "Sarah Chen",
        role: "Founder, Zenith AI",
        text: "The most innovative developer I've worked with. The system's immersive features have significantly increased our user retention.",
        id: "PKT_0x9A2",
        status: "AUTHENTICATED"
    },
    {
        name: "David Miller",
        role: "Product Lead, Quantum UI",
        text: "Exceptional mastery of modern web architecture. The integration of Three.js and real-time analytics is flawless.",
        id: "PKT_0xC43",
        status: "ENCRYPTED"
    }
];

export function NeuralLink() {
    return (
        <section className="py-40 bg-neutral-950 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 text-xs font-mono text-primary uppercase tracking-[0.5em] mb-4"
                    >
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        Neural_Verification_Bridge
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6 leading-none">
                        Client<br />
                        <span className="text-neutral-900 italic-outline">Transmissions</span>.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-neutral-900/40 border border-white/5 p-8 rounded-[2.5rem] relative group backdrop-blur-xl hover:border-primary/50 transition-all duration-700"
                        >
                            {/* HUD Header */}
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                                <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">{t.id}</span>
                                <div className="flex items-center gap-1.5 text-[8px] font-mono text-primary uppercase tracking-wider">
                                    <ShieldCheck className="w-3 h-3" />
                                    {t.status}
                                </div>
                            </div>

                            <Quote className="w-10 h-10 text-primary/20 mb-6" />

                            <p className="text-neutral-300 font-medium leading-relaxed italic mb-8 relative z-10">
                                "{t.text}"
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                    <Fingerprint className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black uppercase italic tracking-tighter text-white">{t.name}</h4>
                                    <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">{t.role}</span>
                                </div>
                            </div>

                            {/* Background decoration */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        </motion.div>
                    ))}
                </div>

                {/* Final Protocol Line */}
                <div className="mt-24 border-t border-white/5 pt-8 flex items-center justify-between opacity-30">
                    <div className="flex items-center gap-4 text-[8px] font-mono text-neutral-500 uppercase tracking-[0.4em]">
                        <MessageSquare className="w-3 h-3" />
                        Inbound_Signals_Authenticated
                    </div>
                    <div className="text-[8px] font-mono text-neutral-500 uppercase tracking-[0.4em]">
                        Security_Protocol: 0xFD21
                    </div>
                </div>
            </div>
        </section>
    );
}
