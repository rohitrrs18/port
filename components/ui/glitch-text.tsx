"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export function GlitchText({ text, className }: GlitchTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const scramble = () => {
        let iteration = 0;

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText((prev) =>
                prev
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
            }

            iteration += 1 / 2;
        }, 20);
    };

    return (
        <motion.span
            onHoverStart={scramble}
            onViewportEnter={scramble}
            className={className}
        >
            {displayText}
        </motion.span>
    );
}
