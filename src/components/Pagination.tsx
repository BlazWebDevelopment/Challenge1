import React from "react";
import "./style/pagination.css";

interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
}) => {
  const pages = [];

  for (let i = 1; i <= totalPosts / postsPerPage; i++) {
    pages.push(i);
  }

  return (
    <div className="buttons">
      {pages.map((page, i) => {
        return (
          <button
            key={i}
            onClick={() => setCurrentPage(page)}
            className="page-btn"
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
