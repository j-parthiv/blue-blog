import Hero from "@/components/Common/Hero";
import Posts from "@/components/Posts/Posts";
import TrendingPosts from "@/components/Posts/TrendingPosts";
import { getPosts } from "@/utils/api";

export default async function Home() {
  const { posts, error }: PostProps = await getPosts();

  // Determine the posts to be shown in TrendingPosts
  const nextThreePosts =
    posts?.length >= 3 ? posts.slice(posts.length - 3, posts.length) : posts;
  return (
    <>
      <section className="flex flex-col gap-5 justify-center items-center	py-7">
        <Hero />
        <Posts posts={posts} error={error} />
        {posts && posts.length > 0 && <TrendingPosts posts={nextThreePosts} />}
      </section>
    </>
  );
}
