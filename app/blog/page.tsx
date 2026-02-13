import Link from "next/link";
import { getSortedPostsData } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Blog - Rohit",
    description: "Thoughts on web development, 3D graphics, and more.",
};

export default function Blog() {
    const posts = getSortedPostsData();

    return (
        <div className="container px-4 md:px-8 py-20 mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                    Latest Articles
                </span>
            </h1>

            <div className="grid gap-10">
                {posts.map((post) => (
                    <article key={post.slug} className="group relative flex flex-col space-y-3">
                        <h2 className="text-2xl font-bold pt-4 group-hover:text-primary transition-colors">
                            <Link href={`/blog/${post.slug}`} className="absolute inset-0">
                                <span className="sr-only">View Article</span>
                            </Link>
                            {post.title}
                        </h2>
                        <p className="text-muted-foreground line-clamp-2">
                            {post.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <time dateTime={post.date}>{post.date}</time>
                            <div className="flex gap-2">
                                {post.tags?.map(tag => (
                                    <span key={tag} className="bg-secondary px-2 py-0.5 rounded-full text-xs text-secondary-foreground">#{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center text-primary font-medium pt-2">
                            Read Article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
