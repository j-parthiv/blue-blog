import React, { useState, useEffect, useRef } from "react";
import { usePosts } from "../contexts/PostsContext";
import PostCard from "./PostCard";
import Image from "next/image";
import { capitalizeFirstLetter } from "../utils/utils";
import Spinner from "./Spinner";
import Link from "next/link";
import Pagination from "./Pagination";
import Badge from "./Badge";
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
      <section className="py-9" ref={postsContainerRef}>
        <div className=" flex flex-col justify-center items-center text-center">
        <Badge title="Our Blogs" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-snug  my-5">
            Explore diverse categories of our articles
          </h1>
          {/* <p>Discover article that inspire and motivate you to reach new heights. Explore out content for valuable insighhhts and empowering stories that will fuel your ambition, Check it out</p> */}
          <input
            type="text"
            className="w-1/2 my-5 p-3 border border-black rounded-3xl outline-none bg-transparent"
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
            <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
              {currentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          <Pagination
            currentPage={currentPage}
            totalPosts={filteredPosts.length}
            postsPerPage={postsPerPage}
            paginate={paginate}
          />
        </div>
      </section>
    </>
  );
};

export default Posts;
