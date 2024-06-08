import React from "react";
import Link from "next/link";
import Image from "next/image";
import { capitalizeFirstLetter } from "../utils/utils";

const PostCard = ({ post }: any) => {
  return (
    <Link href={`/posts/${post.id}`} className="hover:-translate-y-5 duration-300">
    <div className="h-[28em] px-4 rounded-lg">
      <Image
        src={"/dummy.jpeg"}
        alt="Hero"
        height={500}
        width={500}
        className="rounded-lg h-3/4"
      />
      <p className="text-lg py-3"> {capitalizeFirstLetter(post.title)}</p>
    </div>
    </Link>
  );
};

export default PostCard;
