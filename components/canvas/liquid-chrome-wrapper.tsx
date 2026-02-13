"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(
    () => import("@/components/canvas/liquid-chrome").then((mod) => mod.LiquidChromeScene),
    { ssr: false }
);

export function LiquidChromeWrapper() {
    return <Scene />;
}
