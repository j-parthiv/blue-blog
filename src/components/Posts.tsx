"use client";
import React, { useState, useEffect, useRef } from "react";
import PostCard from "./PostCard";
import Pagination from "./Pagination";
import Badge from "./Badge";
import { usePostContext } from "@/contexts/PostsContext";
import ErrorMessage from "./ErrorMessage";

const Posts: React.FC<PostProps> = ({ posts, error }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<Post[] | undefined>(posts);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 10;
  const postsContainerRef = useRef<HTMLDivElement>(null);
  const [_, dispatch] = usePostContext();

  // Update posts context when component mounts
  useEffect(() => {
    dispatch({ type: "UPDATE_POSTS", payload: posts });
  }, [dispatch, posts]);

  // Filter posts based on search query
  useEffect(() => {
    const newFilteredPosts = posts?.filter((post: Post) =>
      post?.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(newFilteredPosts);
    setCurrentPage(1); // Reset to first page on new search
  }, [searchQuery, posts]);

  // Calculate current posts for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts?.slice(indexOfFirstPost, indexOfLastPost);

  // Handle pagination
  const paginate = (pageNumber: number) => {
    if (pageNumber > currentPage && postsContainerRef.current) {
      postsContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setCurrentPage(pageNumber);
  };

  // Display error message if there's an error
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <section className="py-9" ref={postsContainerRef}>
        <div className="flex flex-col justify-center items-center text-center">
          <Badge title="Our Blogs" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-snug my-5 mx-4">
            Explore diverse categories of our articles
          </h1>
          <input
            type="text"
            className="w-3/4 xl:w-1/2 my-5 p-3 border border-black rounded-3xl outline-none bg-transparent"
            placeholder="Search our blogs by titles"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div>
          {currentPosts?.length === 0 ? (
            <div className="flex justify-center items-center py-10">
              <p className="text-2xl font-semibold">No Blogs Found</p>
            </div>
          ) : (
            <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {currentPosts?.map((post: Post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          <Pagination
            currentPage={currentPage}
            totalPosts={filteredPosts?.length || 0}
            postsPerPage={postsPerPage}
            paginate={paginate}
          />
        </div>
      </section>
    </>
  );
};

export default Posts;
