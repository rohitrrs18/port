"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-neutral-900 relative">
            <div className="container px-4 md:px-8 mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Currently looking for new opportunities, my inbox is always open.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-10"
                >
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Email</h3>
                                <p className="text-muted-foreground">hello@example.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Phone</h3>
                                <p className="text-muted-foreground">+91 98765 43210</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Location</h3>
                                <p className="text-muted-foreground">Mumbai, India</p>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <input type="text" placeholder="Name" className="w-full p-3 rounded-md bg-transparent border border-neutral-800 focus:outline-none focus:border-white transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <input type="email" placeholder="Email" className="w-full p-3 rounded-md bg-transparent border border-neutral-800 focus:outline-none focus:border-white transition-colors" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <input type="text" placeholder="Subject" className="w-full p-3 rounded-md bg-transparent border border-neutral-800 focus:outline-none focus:border-white transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <textarea rows={4} placeholder="Message" className="w-full p-3 rounded-md bg-transparent border border-neutral-800 focus:outline-none focus:border-white resize-none transition-colors" />
                        </div>
                        <Button className="w-full size-lg text-lg bg-white text-black hover:bg-neutral-200 rounded-none">Send Message</Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
