"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Twitter, Linkedin, Mail, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { GlitchText } from "@/components/ui/glitch-text";

export function MegaContact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        // Using Web3Forms - you can get a free access key at web3forms.com
        // For now, using the email directly as the 'access_key' which Web3Forms supports
        formData.append("access_key", "c8d76920-5690-410c-99f6-13d800913c8e"); // This is a public key for testing or you can replace with your own

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
                (e.target as HTMLFormElement).reset();
            } else {
                setError("Something went wrong. Please try again or email me directly.");
            }
        } catch (err) {
            setError("Failed to send message. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative bg-neutral-950 min-h-screen flex flex-col justify-between overflow-hidden pt-20">
            {/* Giant Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                <span className="text-[40vw] font-black leading-none text-white whitespace-nowrap">HELLO</span>
            </div>

            <div className="container mx-auto px-4 z-10 flex-grow flex flex-col justify-center">
                <div className="grid lg:grid-cols-2 gap-20 items-end">

                    {/* Left Column: CTA */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-4 text-xs font-mono text-primary uppercase tracking-[0.5em]"
                            >
                                <span className="w-8 h-[1px] bg-primary/30" />
                                Contact_Initiation
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="text-[10vw] font-black leading-[0.8] text-white tracking-tighter uppercase italic"
                            >
                                LET'S<br />
                                <span className="text-neutral-800 italic-outline">COLLAB</span>
                                <span className="inline-block w-[0.2em] h-[0.2em] bg-[#8B5CF6] rounded-full ml-2 translate-y-[-0.1em]" />
                            </motion.h2>
                        </div>

                        <div className="space-y-8">
                            <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-md">
                                Got a crazy idea? I love crazy ideas. Let's push the boundaries of what's possible on the web.
                            </p>

                            <div className="flex flex-col gap-6 pt-6">
                                <a href="mailto:rohitsawant.dev@gmail.com" className="group flex items-center gap-4 text-sm md:text-base font-bold text-white transition-colors">
                                    <span className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                        <Mail className="w-5 h-5" />
                                    </span>
                                    rohitsawant.dev@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 p-8 md:p-12 rounded-3xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                                            <CheckCircle2 className="w-10 h-10 text-primary" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                                        <p className="text-neutral-400">I'll get back to you faster than light.</p>
                                        <Button
                                            variant="ghost"
                                            onClick={() => setIsSuccess(false)}
                                            className="text-neutral-500 hover:text-white"
                                        >
                                            Send another?
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-12">
                                        <div className="space-y-4">
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                suppressHydrationWarning
                                                className="w-full bg-transparent border-b border-neutral-800 py-6 text-2xl text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors font-light"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-mono text-neutral-600 uppercase tracking-[0.3em]">Your Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                suppressHydrationWarning
                                                className="w-full bg-transparent border-b border-neutral-800 py-6 text-2xl text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors font-light"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-mono text-neutral-600 uppercase tracking-[0.3em]">The Idea</label>
                                            <textarea
                                                rows={1}
                                                name="message"
                                                required
                                                suppressHydrationWarning
                                                className="w-full bg-transparent border-b border-neutral-800 py-6 text-2xl text-white placeholder:text-neutral-600 focus:outline-none focus:border-white resize-none transition-colors font-light overflow-hidden"
                                                placeholder="Tell me about it..."
                                                onInput={(e) => {
                                                    const target = e.target as HTMLTextAreaElement;
                                                    target.style.height = 'auto';
                                                    target.style.height = target.scrollHeight + 'px';
                                                }}
                                            />
                                        </div>

                                        {error && (
                                            <p className="text-red-500 text-sm font-mono italic">{error}</p>
                                        )}

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full h-20 text-xl font-bold bg-white text-black hover:bg-neutral-200 rounded-3xl mt-12 transition-all group overflow-hidden relative"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center">Sending Transmission... <Loader2 className="ml-3 w-6 h-6 animate-spin" /></div>
                                            ) : (
                                                <div className="flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-tighter">
                                                    Launch Project <ArrowRight className="w-6 h-6" />
                                                </div>
                                            )}
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
