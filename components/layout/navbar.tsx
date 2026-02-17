"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { Menu, X, Github, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { LogoRS } from "@/components/ui/logo-rs";
import Magnetic from "@/components/ui/magnetic";

const navLinks = [
    { name: "Expertise", href: "#expertise" },
    { name: "Work", href: "#work" },
    { name: "Thoughts", href: "#blog" },
    { name: "Launch", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    // Dynamic styles based on scroll
    const width = useTransform(scrollY, [0, 100], ["100%", "90%"]);
    const border = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"]);
    const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.5]);
    const y = useTransform(scrollY, [0, 100], [0, 20]);

    return (
        <>
            <motion.header
                style={{ width, y }}
                className={cn(
                    "fixed top-0 left-1/2 -translate-x-1/2 z-[100] transition-all flex items-center justify-between",
                    "px-6 md:px-12 h-20 overflow-hidden rounded-full"
                )}
            >
                {/* Glass Background */}
                <motion.div
                    style={{
                        opacity: backgroundOpacity,
                        borderColor: border
                    }}
                    className="absolute inset-0 bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-full -z-10"
                />

                {/* Logo */}
                <Link href="/" className="relative z-10 flex items-center justify-center group">
                    <LogoRS className="w-10 h-10" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <Magnetic key={link.name}>
                            <Link
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors uppercase tracking-widest font-mono group"
                            >
                                {link.name}
                                <motion.span
                                    className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                                />
                            </Link>
                        </Magnetic>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-6 relative z-10">
                    <div className="hidden lg:flex gap-4" suppressHydrationWarning>
                        <Twitter className="w-4 h-4 text-neutral-500 hover:text-white transition-colors cursor-pointer" />
                        <Github className="w-4 h-4 text-neutral-500 hover:text-white transition-colors cursor-pointer" />
                    </div>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="group flex flex-col items-end gap-1.5 focus:outline-none"
                        suppressHydrationWarning
                    >
                        <span className="w-8 h-[2px] bg-white transition-all group-hover:w-12" />
                        <span className="w-5 h-[2px] bg-white transition-all group-hover:w-8" />
                    </button>
                </div>
            </motion.header>

            {/* Expansive Mobile/Full Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] bg-neutral-950 flex flex-col pointer-events-auto"
                    >
                        {/* Close Button */}
                        <div className="container mx-auto px-8 h-32 flex items-center justify-end">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="group p-4 bg-white rounded-full text-black hover:rotate-90 transition-transform duration-500"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <div className="container mx-auto px-8 flex-grow flex flex-col justify-center">
                            <div className="grid lg:grid-cols-2 gap-20">
                                <div className="col-span-full lg:col-span-2 space-y-6">
                                    <Link href="/" className="flex items-center w-fit">
                                        <LogoRS className="w-12 h-12" />
                                    </Link>
                                    <nav className="flex flex-col">
                                        {navLinks.map((link, i) => (
                                            <motion.div
                                                key={link.name}
                                                initial={{ x: -50, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: i * 0.1 }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="text-[12vw] lg:text-[6vw] font-black uppercase leading-none text-neutral-800 hover:text-white transition-colors"
                                                >
                                                    {link.name}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </nav>
                                </div>

                                <div className="flex flex-col justify-end space-y-12 pb-12">
                                    <div className="space-y-4">
                                        <span className="text-sm font-mono text-neutral-600 uppercase tracking-[0.3em]">Social</span>
                                        <div className="flex flex-col gap-2">
                                            {["Instagram", "Twitter", "Linkedin", "Github"].map((social, i) => (
                                                <Link key={i} href="#" className="text-2xl font-bold text-white hover:text-primary transition-colors flex items-center gap-2 group">
                                                    {social} <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -rotate-45 group-hover:rotate-0 transition-all" />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-neutral-500 font-mono">Based in Earth, Milky Way</p>
                                        <p className="text-white font-mono">rohit@beyond.inc</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Marquee/Footer thing */}
                        <div className="h-20 border-t border-neutral-900 flex items-center overflow-hidden">
                            <div className="flex whitespace-nowrap animate-infinite-scroll">
                                {[...Array(10)].map((_, i) => (
                                    <span key={i} className="text-sm font-mono text-neutral-700 px-10 uppercase tracking-widest leading-none">
                                        Available for new projects • Let's build the future • Beyond conventional design •
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
