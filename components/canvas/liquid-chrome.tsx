"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshDistortMaterial, Sphere, Float, Lightformer } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function LiquidSphere() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Subtle rotation
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere ref={meshRef} args={[1, 128, 128]} scale={2.5}>
                <MeshDistortMaterial
                    color="#e0e0e0" // Silver/Chrome
                    attach="material"
                    distort={0.6} // High distortion for liquid effect
                    speed={2} // Fast movement
                    roughness={0} // Maximum reflection
                    metalness={1} // Full metal
                    bumpScale={0.01}
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
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
                dpr={[1, 2]} // Optimize for high-DPI screens
            >
                <LiquidSphere />

                {/* Cinematic Lighting Environment */}
                <Environment resolution={512}>
                    {/* Ceiling lights for reflection */}
                    <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                    <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                    <group rotation={[Math.PI / 2, 1, 0]}>
                        <Lightformer intensity={5} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
                        <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
                        <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
                    </group>
                </Environment>
            </Canvas>
        </div>
    );
}
