import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPosts: number;
  postsPerPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPosts,
  postsPerPage,
  paginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
        className="px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
