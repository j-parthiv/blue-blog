import React from "react";
import Link from "next/link";
import Image from "next/image";
import { capitalizeFirstLetter } from "../utils/utils";
import Badge from "./Badge";
const PostCard = ({ post }: any) => {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="hover:-translate-y-5 duration-300 px-2"
    >
      <div className="flex justify-center rounded-lg my-5">
        <Image
          src={"/dummy-2.jpeg"}
          alt="Hero"
          height={500}
          width={500}
          className="rounded-lg h-3/4"
        />
      </div>
      <Badge title=" Anonymous - 5 April 2024" />
      <p className="font-bold	px-1 text-lg pt-4 pb-2 mt-3"> {capitalizeFirstLetter(post.title)}</p>
      <p className="px-1 text-md">
        {post.body}
      </p>
      
    </Link>
  );
};

export default PostCard;
