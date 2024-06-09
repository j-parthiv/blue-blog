import React from "react";

interface BadgeProp {
  title: string;
}

const Badge: React.FC<BadgeProp> = ({ title }) => {
  return (
    <span className="text-xs sm:text-sm  bg-red-100 text-red-600 px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 rounded-2xl">
      {title}
    </span>
  );
};

export default Badge;
