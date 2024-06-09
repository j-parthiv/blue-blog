import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPosts: number | undefined;
  postsPerPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPosts,
  postsPerPage,
  paginate,
}) => {
  // Ensure totalPosts is not undefined
  totalPosts = totalPosts || 0;

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const maxPageButtons = 3;

  // Generate page numbers to display
  const generatePageNumbers = () => {
    const pageNumbers: number[] = [];
    const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  // Disable both buttons if there are no posts
  const disableButtons = totalPosts === 0;

  return (
    <div className="flex justify-center items-center mx-2 space-x-2 mt-4">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1 || disableButtons}
        className="px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {currentPage > Math.ceil(maxPageButtons / 2) && totalPages > maxPageButtons && (
        <>
          <button
            onClick={() => paginate(1)}
            className={`px-4 py-2 rounded-full ${
              currentPage === 1
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          >
            1
          </button>
          <span className="px-2">...</span>
        </>
      )}

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`px-4 py-2 rounded-full ${
            currentPage === number
              ? "bg-black text-white"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          }`}
        >
          {number}
        </button>
      ))}

      {currentPage < totalPages - Math.floor(maxPageButtons / 2) && totalPages > maxPageButtons && (
        <>
          <span className="px-2">...</span>
          <button
            onClick={() => paginate(totalPages)}
            className={`px-4 py-2 rounded-full ${
              currentPage === totalPages
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages || disableButtons}
        className="px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
