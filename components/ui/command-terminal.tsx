"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, ChevronRight, CornerDownLeft, Command } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const COMMANDS = [
    { cmd: "help", desc: "List available system commands" },
    { cmd: "about", desc: "Navigate to identity sector" },
    { cmd: "work", desc: "Navigate to project archives" },
    { cmd: "contact", desc: "Initialize communication bridge" },
    { cmd: "clear", desc: "Purge terminal buffer" },
    { cmd: "status", desc: "Display core system vitals" },
    { cmd: "whoami", desc: "Retrieve visitor identification" },
];

export function CommandTerminal() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>(["SYSTEM_INITIALIZED", "READY_FOR_INPUT"]);
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === "Escape") setIsOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const [contactStep, setContactStep] = useState<number | null>(null);
    const [contactData, setContactData] = useState({ name: "", email: "", message: "" });

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const trimInput = input.trim();
        const lowerInput = trimInput.toLowerCase();
        if (!trimInput && contactStep === null) return;

        const newHistory = [...history];

        // If in contact flow
        if (contactStep !== null) {
            newHistory.push(`> ${trimInput}`);
            if (contactStep === 0) {
                setContactData(prev => ({ ...prev, name: trimInput }));
                newHistory.push("ENTER_EMAIL:");
                setContactStep(1);
            } else if (contactStep === 1) {
                setContactData(prev => ({ ...prev, email: trimInput }));
                newHistory.push("ENTER_MESSAGE:");
                setContactStep(2);
            } else if (contactStep === 2) {
                setContactData(prev => ({ ...prev, message: trimInput }));
                newHistory.push("DECRYPTING_PACKET...", "DISPATCHING_TO_ROHIT...", "STATUS: SUCCESSFUL_TRANSMISSION");
                setContactStep(null);
            }
            setInput("");
            setHistory(newHistory);
            return;
        }

        newHistory.push(`> ${input}`);

        switch (lowerInput) {
            case "help":
                newHistory.push(...COMMANDS.map(c => `${c.cmd.padEnd(10)} - ${c.desc}`));
                newHistory.push("contact    - Start secure message dispatch");
                break;
            case "contact":
                newHistory.push("INITIALIZING_CONTACT_PROTOCOL...", "ENTER_NAME:");
                setContactStep(0);
                break;
            case "about":
            case "work":
            case "contact":
                newHistory.push(`REDIRECTING_TO: /${lowerInput}`);
                router.push(`#${lowerInput}`);
                setTimeout(() => setIsOpen(false), 500);
                break;
            case "clear":
                setHistory(["BUFFER_PURGED"]);
                setInput("");
                return;
            case "status":
                newHistory.push("CPU: OPTIMIZED", "MEMORY: 0x7FF8A2", "UPTIME: 99.99%", "STATUS: OPERATIONAL");
                break;
            case "whoami":
                newHistory.push("VISITOR_TYPE: ELITE_GUEST", "PERMISSIONS: READ_ONLY");
                break;
            default:
                newHistory.push(`ERR: UNKNOWN_COMMAND '${lowerInput}'. TYPE 'HELP' FOR LIST.`);
        }

        setHistory(newHistory);
        setInput("");
    };

    return (
        <>
            {/* Fixed Toggle Button (Mobile/Tablet accessibility) */}
            <div className="fixed bottom-8 right-8 z-[60] md:hidden">
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 bg-primary text-black rounded-full flex items-center justify-center shadow-2xl active:scale-95 transition-transform"
                >
                    <Terminal className="w-6 h-6" />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-none">
                        {/* Overlay Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md pointer-events-auto"
                        />

                        {/* Terminal Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="w-full max-w-3xl h-[60vh] bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden pointer-events-auto relative"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    </div>
                                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest ml-4">Terminal@Rohit_Core_V1</span>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-white transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Output Area */}
                            <div
                                ref={scrollRef}
                                className="flex-1 overflow-y-auto p-6 font-mono text-sm space-y-2 custom-scrollbar"
                            >
                                {history.map((line, i) => (
                                    <div key={i} className={cn(
                                        "flex gap-3",
                                        line.startsWith(">") ? "text-primary" : "text-neutral-400"
                                    )}>
                                        {line.startsWith(">") ? <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" /> : <div className="w-4" />}
                                        <span className="break-all">{line}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Input Area */}
                            <form
                                onSubmit={handleCommand}
                                className="p-6 bg-white/5 border-t border-white/5 flex items-center gap-4"
                            >
                                <div className="flex items-center gap-2 text-primary font-mono text-xs">
                                    <span>visitor@rrs</span>
                                    <span>:</span>
                                    <span className="text-white">~</span>
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Enter command (e.g., 'help')"
                                    className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm placeholder:text-neutral-700"
                                    autoFocus
                                />
                                <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-600 bg-black/40 px-3 py-1.5 rounded-md border border-white/5 hidden md:flex">
                                    <CornerDownLeft className="w-3 h-3" />
                                    Enter
                                </div>
                            </form>

                            {/* Footer Hint */}
                            <div className="px-6 py-3 bg-black/40 border-t border-white/5 hidden md:flex items-center justify-between">
                                <span className="text-[10px] font-mono text-neutral-600">COMMAND_INTERFACE: ACTIVE</span>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-500">
                                        <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded text-neutral-300">Esc</kbd> Close
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-500">
                                        <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded text-neutral-300">Tab</kbd> Auto-Complete
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
