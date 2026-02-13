"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "Typescript", level: 90 },
    { name: "React / Next.js", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "Android / Kotlin", level: 80 },
    { name: "Three.js / R3F", level: 75 },
    { name: "Tailwind CSS", level: 95 },
    { name: "PostgreSQL", level: 80 },
    { name: "GraphQL", level: 70 },
];

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-secondary/20 relative">
            <div className="container px-4 md:px-8 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Tech <span className="text-primary">Stack</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, rotate: 1 }}
                                className="bg-background/80 backdrop-blur-sm border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-default"
                            >
                                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-primary"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
