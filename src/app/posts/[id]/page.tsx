"use client";

import React from "react";
import Spinner from "@/components/Spinner";
import { usePosts } from "@/contexts/PostsContext";
import { capitalizeFirstLetter } from "@/utils/utils";
import Image from "next/image";
import TrendingPosts from "@/components/TrendingPosts";

const SingleBlog = ({ params }: { params: { id: string } }) => {
  const { posts, loading, error } = usePosts();

  if (loading) return <Spinner />;

  if (error) return <div>Error: {error.message}</div>;
  const postId = parseInt(params.id, 10);

  const post = posts.find((post) => post.id === postId);

  if (!post) return <div>Post not found</div>;

  const repeatedContent = Array(25)
    .fill(capitalizeFirstLetter(post.body))
    .join(" ");

  const currentPostIndex = posts.findIndex((post) => post.id === postId);

  const nextThreePosts = posts.slice(
    currentPostIndex + 1,
    currentPostIndex + 4
  );

  return (
    <section className="md:px-5 py-9">
      <div className="mb-9">
        <h1 className="text-center text-4xl font-bold mb-5 text-gray-900 xl:px[10em]">
          {capitalizeFirstLetter(post.title)}
        </h1>
        <hr />
        <div className="flex justify-center p-9">
        <Image
          src="/dummy.jpeg"
          alt="dummy"
          width={1000}
          height={400}
          className="rounded-xl"
        />
      </div>
        <p className="text-lg rounded-2xl text-gray-700 leading-relaxed">
          {repeatedContent}
        </p>
      </div>
      <TrendingPosts posts={nextThreePosts} />
    </section>
  );
};

export default SingleBlog;
