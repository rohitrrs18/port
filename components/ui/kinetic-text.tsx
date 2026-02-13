"use client";

import { useRef } from "react";
import { useScroll, useTransform, useMotionValue, useVelocity, useSpring, motion, useAnimationFrame, wrap } from "framer-motion";

interface KineticTextProps {
    text: string;
    className?: string;
    baseVelocity?: number;
}

export function KineticText({ text, className, baseVelocity = 5 }: KineticTextProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${v}%`);
    const skew = useTransform(smoothVelocity, [-1000, 1000], [-10, 10]); // Kinetic skew effect

    const directionFactor = useRef<number>(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        // Add scroll velocity to movement
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(wrap(-50, -25, baseX.get() + moveBy));
    });

    return (
        <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
            <motion.div
                className={"flex flex-nowrap whitespace-nowrap " + className}
                style={{ x, skewX: skew, willChange: "transform, skew" }}
            >
                <span className="block mr-12">{text}</span>
                <span className="block mr-12">{text}</span>
                <span className="block mr-12">{text}</span>
                <span className="block mr-12">{text}</span>
            </motion.div>
        </div>
    );
}
