import React, { useState, useEffect, useRef } from "react";
import { usePosts } from "../contexts/PostsContext";
import PostCard from "./PostCard";
import Image from "next/image";
import { capitalizeFirstLetter } from "../utils/utils";
import Spinner from "./Spinner";
import Link from "next/link";
const Posts = () => {
  const { posts, loading, error } = usePosts();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 10;
  const postsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setCurrentPage(1); // Reset to first page on new search
  }, [searchQuery, posts]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    if (pageNumber > currentPage && postsContainerRef.current) {
      postsContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setCurrentPage(pageNumber);
  };

  if (loading) return <Spinner />;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <section className="py-9">
        <Link href={`/posts/${posts[0].id}`}>
          <div className="flex max-xl:flex-col gap-16 py-5">
            <Image
              src="/dummy.jpeg"
              alt="Hero"
              width={500}
              height={500}
              layout="responsive"
              className="rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <p className="flex gap-2 text-sm font-medium text-primary">
                Trending Blog
              </p>
              <h1 className="mt-4 text-4xl leading-[50px] font-bold tracking-[-1.2px] text-gray-900">
                {capitalizeFirstLetter(posts[0].title)}
              </h1>
            </div>
          </div>
        </Link>
        <div
          className="flex flex-col justify-center items-center py-6"
          ref={postsContainerRef}
        >
          <p className="text-2xl font-semibold py-4">All Blogs</p>
          <input
            type="text"
            className="text-input w-1/2 border border-black"
            placeholder="Search our blogs by titles"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div>
          {currentPosts.length === 0 ? (
            <div className="flex justify-center items-center py-10">
              <p className="text-2xl font-semibold text-gray-700">
                No Blogs Found
              </p>
            </div>
          ) : (
            <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {currentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          {currentPage > 1 && (
            <button
              onClick={() => paginate(currentPage - 1)}
              className="px-4 py-2 rounded bg-black text-white hover:-translate-y-1 duration-300"
            >
              Previous
            </button>
          )}
          {indexOfLastPost < filteredPosts.length && (
            <button
              onClick={() => paginate(currentPage + 1)}
              className="px-4 py-2 rounded bg-black text-white hover:-translate-y-1 duration-300"
            >
              Next
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default Posts;
