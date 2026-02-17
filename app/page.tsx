import { HomeContent } from "@/components/layout/home-content";
import { getSortedPostsData } from "@/lib/blog";

export default function Home() {
  const posts = getSortedPostsData().slice(0, 3);

  return <HomeContent posts={posts} />;
}
