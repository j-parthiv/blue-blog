"use client";

import React from "react";
import Spinner from "@/components/Spinner";
import { usePosts } from "@/contexts/PostsContext";
import { capitalizeFirstLetter } from "@/utils/utils";
import Image from "next/image";

const SingleBlog = ({ params }: { params: { id: string } }) => {
  const { posts, loading, error } = usePosts();

  if (loading) return <Spinner />;

  if (error) return <div>Error: {error.message}</div>;
  const postId = parseInt(params.id, 10);

  const post = posts.find((post) => post.id === postId);

  if (!post) return <div>Post not found</div>;

  return (
    <section className="px-9 py-9 rounded-lg">
      <h1 className="text-4xl font-bold text-gray-900 mb-9">
        {capitalizeFirstLetter(post.title)}
      </h1>
      <Image
        src="/dummy.jpeg"
        alt={post.title}
        height={500}
        width={500}
        className="w-full h-auto rounded mb-9"
      />
      <p className="text-lg text-gray-700 leading-relaxed">
        {capitalizeFirstLetter(post.body)}
      </p>
    </section>
  );
};

export default SingleBlog;
