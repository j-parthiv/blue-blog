"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Spinner from "@/components/Spinner";
import { usePostContext } from "@/contexts/PostsContext";
import { capitalizeFirstLetter } from "@/utils/utils";
import { getPostById } from "@/utils/api";
import ErrorMessage from "@/components/ErrorMessage";

interface SingleBlogProps {
  params: {
    id: string;
  };
}

const SingleBlog: FC<SingleBlogProps> = ({ params }) => {
  const [state] = usePostContext();
  const [post, setPost] = useState<Post | null>(null);

  const { posts, loading: contextLoading, error } = state;

  const [loading, setLoading] = useState(contextLoading);

  // Fetch the post by ID if not already available in context
  useEffect(() => {
    console.log(posts);
    if (!posts.length) {
      const fetchPost = async () => {
        try {
          const res = await getPostById(params.id);
          console.log(res);
          setPost(res.post);
          setLoading(false);
        } catch (err) {
          setLoading(false);
        }
      };
      fetchPost();
    } else {
      setPost(posts.find((post: any) => post.id === parseInt(params.id, 10)));
    }
  }, [posts]);

  // Show spinner while loading
  if (loading) return <Spinner />;

  // Show error message if there's an error
  if (error) return <div>Error: {error.message}</div>;
  const postId = parseInt(params.id, 10);

  // Show not found message if the post is not found
  if (!post) return <ErrorMessage message="Post not found" />;

  // Generate repeated content for demonstration
  const repeatedContent = Array(25)
    .fill(capitalizeFirstLetter(post?.body))
    .join(" ");

  return (
    <section className="md:px-5 py-9">
      <div className="my-9">
        <h1 className="text-center text-4xl font-bold mb-5 text-gray-900 xl:px[10em]">
          {capitalizeFirstLetter(post.title)}
        </h1>
        <hr />
        <div className="py-5 px-5 flex justify-between">
          <p className="text-gray-500">
           Author: <strong>Anoymous</strong>
          </p>
          <p className="text-gray-500">
            Date Published: <strong>5 April 2024</strong>
          </p>
        </div>
        <hr />
        <div className="flex justify-center p-9">
          <Image
            src="/dummy-2.jpeg"
            alt="post image"
            width={1000}
            height={400}
            className="rounded-xl"
          />
        </div>
        <p className="text-lg rounded-2xl text-gray-700 leading-relaxed">
          {repeatedContent}
        </p>
      </div>
    </section>
  );
};

export default SingleBlog;
