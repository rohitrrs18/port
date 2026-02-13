"use client";

import { motion, useScroll, useVelocity, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Activity, Cpu, Database, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function VitalsHUD() {
    const { scrollYProgress } = useScroll();
    const scrollVelocity = useVelocity(scrollYProgress);
    const smoothVelocity = useSpring(scrollVelocity, { stiffness: 100, damping: 30 });

    // Transform velocity for display (as percentage or throughput)
    const velocityValue = useTransform(smoothVelocity, [-1, 0, 1], [100, 0, 100]);
    const [displayVelocity, setDisplayVelocity] = useState(0);

    // Simulated Vitals
    const [vitals, setVitals] = useState({
        cpu: 12,
        mem: 42,
        latency: 14
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setVitals({
                cpu: Math.floor(Math.random() * 15) + 5,
                mem: Math.floor(Math.random() * 5) + 40,
                latency: Math.floor(Math.random() * 20) + 10
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        return velocityValue.on("change", (latest) => {
            setDisplayVelocity(Math.min(Math.round(latest * 1000), 999));
        });
    }, [velocityValue]);

    const [istTime, setIstTime] = useState("");
    useEffect(() => {
        const update = () => {
            setIstTime(new Date().toLocaleTimeString("en-IN", {
                timeZone: "Asia/Kolkata",
                hour12: false,
                hour: "2-digit",
                minute: "2-digit"
            }));
        };
        update();
        const ci = setInterval(update, 1000);
        return () => clearInterval(ci);
    }, []);

    return (
        <div className="fixed top-24 right-6 z-40 hidden lg:block pointer-events-none select-none">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
            >
                {/* Scroll Throughput Monitor */}
                <div className="bg-neutral-900/40 border border-white/5 backdrop-blur-md p-4 rounded-2xl w-48 shadow-2xl">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Throughput</span>
                        <Zap className={cn("w-3 h-3 transition-colors", displayVelocity > 50 ? "text-primary" : "text-neutral-700")} />
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-white italic tracking-tighter tabular-nums">
                            {displayVelocity.toString().padStart(3, "0")}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-600">MB/s</span>
                    </div>
                    {/* Tiny visual chart */}
                    <div className="mt-3 h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
                            style={{ width: `${Math.min(displayVelocity / 10, 100)}%` }}
                        />
                    </div>
                </div>

                {/* System Vitals Grid */}
                <div className="bg-neutral-900/40 border border-white/5 backdrop-blur-md p-4 rounded-2xl w-48 shadow-2xl space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Neural_Load</span>
                        <Activity className="w-3 h-3 text-neutral-700" />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        <div className="space-y-1">
                            <div className="text-[8px] font-mono text-neutral-600 uppercase">CPU</div>
                            <div className="text-xs font-bold text-white tabular-nums">{vitals.cpu}%</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[8px] font-mono text-neutral-600 uppercase">MEM</div>
                            <div className="text-xs font-bold text-white tabular-nums">{vitals.mem}%</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[8px] font-mono text-neutral-600 uppercase">LAT</div>
                            <div className="text-xs font-bold text-white tabular-nums">{vitals.latency}ms</div>
                        </div>
                    </div>

                    {/* Animated Sine-ish Wave */}
                    <div className="pt-2 flex items-center justify-center gap-0.5 h-6">
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ height: [4, 16, 4] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                                className="w-1 bg-primary/20 rounded-full"
                            />
                        ))}
                    </div>
                </div>

                {/* Session Identification */}
                <div className="bg-neutral-900/40 border border-white/5 backdrop-blur-md px-4 py-2 rounded-full w-48 shadow-2xl flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[8px] font-mono text-neutral-600 uppercase tracking-[0.2em]">CORE_V2.1.0</span>
                        <span className="text-[10px] font-mono text-primary tabular-nums tracking-wider">{istTime} IST</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[8px] text-green-500">
                        <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                        LIVE
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
