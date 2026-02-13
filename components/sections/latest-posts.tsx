"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
}

interface LatestPostsProps {
    posts: BlogPost[];
}

export function LatestPosts({ posts }: LatestPostsProps) {
    if (!posts || posts.length === 0) return null;

    return (
        <section id="blog" className="py-24 bg-neutral-950 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-16 flex items-end justify-between">
                    <h2 className="text-[8vw] md:text-[5vw] leading-none font-black text-white/90">
                        LATEST<br /><span className="text-neutral-600">THOUGHTS</span>
                    </h2>
                    <Link href="/blog" className="hidden md:flex items-center gap-2 text-white hover:text-neutral-400 mb-2 transition-colors">
                        View all posts <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <Link href={`/blog/${post.slug}`} className="block space-y-4">
                                <div className="aspect-video w-full bg-neutral-900 rounded-lg overflow-hidden relative border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                                    {/* Simple gradient pattern for now since we don't have images */}
                                    {index % 2 === 0 ? (
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-teal-900/20" />
                                    )}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                        <div className="flex gap-2 mb-2">
                                            {post.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-black/50 text-white border border-white/10 backdrop-blur-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                                    <p className="text-neutral-400 line-clamp-2">{post.description}</p>
                                    <div className="flex items-center gap-2 mt-4 text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                                        Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-12 md:hidden">
                    <Link href="/blog" className="flex items-center gap-2 text-white hover:text-neutral-400 transition-colors">
                        View all posts <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
