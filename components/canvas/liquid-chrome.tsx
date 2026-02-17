"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshDistortMaterial, Sphere, Float, Lightformer } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function LiquidSphere() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere ref={meshRef} args={[1, 32, 32]} scale={2.5}>
                <MeshDistortMaterial
                    color="#ffffff"
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0.1}
                    metalness={0.9}
                    bumpScale={0.005}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    radius={1}
                />
            </Sphere>
        </Float>
    );
}

export function LiquidChromeScene() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-neutral-950">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{
                    antialias: false,
                    alpha: true,
                    powerPreference: "high-performance",
                    stencil: false,
                    depth: true
                }}
                dpr={[1, 1.5]} // Capped for performance
            >
                <LiquidSphere />

                <Environment resolution={256}>
                    <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                    <group rotation={[Math.PI / 2, 1, 0]}>
                        <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
                        <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
                    </group>
                </Environment>
            </Canvas>
        </div>
    );
}

