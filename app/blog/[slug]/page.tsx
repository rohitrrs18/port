import { getPostData, getSortedPostsData } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostData(slug);
    return {
        title: `${post.title} - Rohit`,
        description: post.description,
    };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostData(slug);

    return (
        <article className="container px-4 md:px-8 py-20 mx-auto max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
            </Link>

            <header className="mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                    <time dateTime={post.date}>{post.date}</time>
                    <div className="flex gap-2">
                        {post.tags?.map(tag => (
                            <span key={tag} className="bg-secondary px-2 py-0.5 rounded-full text-xs text-secondary-foreground">#{tag}</span>
                        ))}
                    </div>
                </div>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-3xl prose-a:text-primary hover:prose-a:text-primary/80">
                <MDXRemote source={post.content} />
            </div>
        </article>
    );
}
