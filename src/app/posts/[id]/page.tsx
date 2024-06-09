"use client";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import Spinner from "@/components/Spinner";
import { usePostContext } from "@/contexts/PostsContext";
import { capitalizeFirstLetter } from "@/utils/utils";
import { getPostById } from "@/utils/api";

const SingleBlog = ({ params }: { params: { id: string } }) => {
  const [state] = usePostContext();
  const [post, setPost] = useState<Post | null>(null);

  const { posts, loading: contextLoading, error } = state;

  const [loading, setLoading] = useState(contextLoading);

  useEffect(() => {
    console.log(posts);
    if (!posts.length) {
      const fetchPost = async () => {
        try {
          const res = await getPostById(params.id);
          console.log(res);
          setPost(res.post);
          setLoading(false);
        } catch (err) {}
      };

      fetchPost();
    } else {
      setPost(posts.find((post: any) => post.id === parseInt(params.id, 10)));
    }
  }, [posts]);

  if (loading) return <Spinner />;

  if (error) return <div>Error: {error.message}</div>;
  const postId = parseInt(params.id, 10);

  if (!post) return <div>Post not found</div>;

  const repeatedContent = Array(25)
    .fill(capitalizeFirstLetter(post?.body))
    .join(" ");

  return (
    <section className="md:px-5 py-9">
      <div className="mb-9">
        <h1 className="text-center text-4xl font-bold mb-5 text-gray-900 xl:px[10em]">
          {capitalizeFirstLetter(post.title)}
        </h1>
        <hr />
        <div className="flex justify-center p-9">
          <Image
            src="/dummy-2.jpeg"
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
    </section>
  );
};

export default SingleBlog;
