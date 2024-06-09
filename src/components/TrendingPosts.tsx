import React from "react";
import PostCard from "@/components/PostCard";

interface TrendingPostsProps {
  posts: Post[];
}

const TrendingPosts: React.FC<TrendingPostsProps> = ({ posts }) => {
  return (
    <div className="mt-9">
      <h2 className="text-2xl font-semibold mb-4">Trending Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
