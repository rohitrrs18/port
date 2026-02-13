"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Heart, Mail } from "lucide-react";
import Link from "next/link";
import { LogoRS } from "@/components/ui/logo-rs";

export function Footer() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const istTime = now.toLocaleTimeString("en-IN", {
                timeZone: "Asia/Kolkata",
                hour12: true,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });
            const istDate = now.toLocaleDateString("en-IN", {
                timeZone: "Asia/Kolkata",
                day: "2-digit",
                month: "short",
                year: "numeric"
            });
            setTime(`${istDate} | ${istTime}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="bg-neutral-950 pt-12 pb-6 relative overflow-hidden border-t border-white/5">
            {/* Architectural Grid Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div className="h-full w-px bg-white absolute left-1/4 top-0" />
                <div className="h-full w-px bg-white absolute left-2/4 top-0" />
                <div className="h-full w-px bg-white absolute left-3/4 top-0" />
                <div className="w-full h-px bg-white absolute top-1/2 left-0" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20">

                    {/* Clock & Status */}
                    <div className="order-2 md:order-1 flex flex-col items-center md:items-start gap-2">
                        <div className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            System_Time_IST
                        </div>
                        <div className="text-sm font-mono text-white tracking-widest tabular-nums">
                            {time || "SYNCING..."}
                        </div>
                    </div>

                    {/* Logo Alone - The Hero */}
                    <div className="order-1 md:order-2 relative group">
                        <motion.div
                            whileHover={{ rotate: 90, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            style={{ willChange: "transform" }}
                        >
                            <LogoRS className="w-16 h-16 md:w-20 md:h-20" />
                        </motion.div>
                        <div className="absolute -inset-4 border border-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10" />
                    </div>

                    {/* Technical Links - Row Layout */}
                    <div className="order-3 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                        {[
                            { name: "Expertise", href: "#expertise" },
                            { name: "Experiments", href: "#work" },
                            { name: "Identity", href: "#about" },
                            { name: "Direct", href: "#contact" }
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-neutral-500 hover:text-primary transition-all flex items-center gap-2 group"
                            >
                                <span className="w-1 h-1 bg-neutral-800 rounded-full group-hover:bg-primary transition-colors" />
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Fast Socials */}
                    <div className="flex items-center gap-3">
                        {[
                            { icon: Twitter, href: "#" },
                            { icon: Github, href: "#" },
                            { icon: Linkedin, href: "#" },
                            { icon: Mail, href: "mailto:rohitsawant.dev@gmail.com" }
                        ].map((social, i) => (
                            <Link
                                key={i}
                                href={social.href}
                                className="w-8 h-8 flex items-center justify-center text-neutral-600 hover:text-white transition-colors"
                            >
                                <social.icon className="w-4 h-4" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="mt-12 pt-6 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-6 text-[9px] font-mono text-neutral-700 uppercase tracking-widest">
                        <span>© {new Date().getFullYear()} ROHIT_CORE_V1</span>
                        <div className="flex items-center gap-1.5 opacity-50">
                            <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                            Performance Optimized
                        </div>
                    </div>

                    <div className="text-[9px] font-mono text-neutral-700 uppercase tracking-widest flex items-center gap-2">
                        Crafted with <Heart className="w-2.5 h-2.5 text-primary fill-primary" /> for the future
                    </div>
                </div>
            </div>
        </footer>
    );
}
