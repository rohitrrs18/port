"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence, useVelocity, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function CustomCursor() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [cursorText, setCursorText] = useState("");

    // Calculate velocity for "squish" effect
    const velX = useVelocity(mouseX);
    const velY = useVelocity(mouseY);

    // Combining velocities manually since useTransform with multiple MotionValues 
    // needs to be handled carefully in some Framer Motion versions
    const [velocity, setVelocity] = useState(0);

    useEffect(() => {
        const unsubscribeX = velX.on("change", (latestX) => {
            const latestY = velY.get();
            setVelocity(Math.sqrt(latestX ** 2 + latestY ** 2));
        });
        const unsubscribeY = velY.on("change", (latestY) => {
            const latestX = velX.get();
            setVelocity(Math.sqrt(latestX ** 2 + latestY ** 2));
        });
        return () => {
            unsubscribeX();
            unsubscribeY();
        };
    }, [velX, velY]);

    const scaleXValue = 1 + Math.min(velocity / 3000, 0.5);
    const scaleYValue = 1 - Math.min(velocity / 3000, 0.5);

    // Spring configurations for different parts of the cursor
    const mainSpringConfig = { stiffness: 1000, damping: 50 };
    const trailSpringConfig = { stiffness: 300, damping: 30 };

    const springX = useSpring(mouseX, mainSpringConfig);
    const springY = useSpring(mouseY, mainSpringConfig);

    // Trail segments
    const trail1X = useSpring(mouseX, trailSpringConfig);
    const trail1Y = useSpring(mouseY, trailSpringConfig);
    const trail2X = useSpring(mouseX, { stiffness: 150, damping: 25 });
    const trail2Y = useSpring(mouseY, { stiffness: 150, damping: 25 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest("button, a") || target.classList.contains("cursor-pointer");

            if (interactive) {
                setIsHovering(true);
                // Check if it's a project/link that should show "View"
                if (target.closest("[data-cursor='view']")) {
                    setCursorText("VIEW");
                } else {
                    setCursorText("");
                }
            } else {
                setIsHovering(false);
                setCursorText("");
            }
        };

        const handleMouseDown = () => setIsPressed(true);
        const handleMouseUp = () => setIsPressed(false);

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            {/* Trail 2 (Slowest) */}
            <motion.div
                className="absolute w-12 h-12 border border-white/10 rounded-full"
                style={{
                    x: trail2X,
                    y: trail2Y,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Trail 1 (Medium) */}
            <motion.div
                className="absolute w-8 h-8 border border-white/20 rounded-full"
                style={{
                    x: trail1X,
                    y: trail1Y,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Main Cursor Dot */}
            <motion.div
                className={cn(
                    "absolute w-2 h-2 bg-white rounded-full mix-blend-difference flex items-center justify-center transition-all duration-300",
                    isHovering ? "w-20 h-20 bg-white/90" : "w-1.5 h-1.5",
                    isPressed && "scale-90"
                )}
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scaleX: scaleXValue,
                    scaleY: scaleYValue,
                }}
            >
                <AnimatePresence>
                    {isHovering && cursorText && (
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="text-[10px] font-black text-black tracking-widest"
                        >
                            {cursorText}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Interactive Ring */}
            <motion.div
                className={cn(
                    "absolute w-10 h-10 border border-white rounded-full transition-all duration-300",
                    isHovering ? "scale-150 opacity-0" : "scale-100 opacity-100"
                )}
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </div>
    );
}
