import Hero from "@/components/Hero";
import Posts from "@/components/Posts";
import TrendingPosts from "@/components/TrendingPosts";
import { getPosts } from "@/utils/api";

export interface PostProps {
  posts: Post[];
  loading: boolean;
  error: any;
}

export default async function Home() {
  const { posts, loading, error }: PostProps = await getPosts();
  const nextThreePosts = posts?.slice(posts.length - 3, posts.length);
  return (
    <>
      <section className="flex flex-col gap-5 justify-center items-center	py-7">
        <Hero />
        <Posts posts={posts} loading={loading} error={error} />
        <TrendingPosts posts={nextThreePosts} />
      </section>
    </>
  );
}
