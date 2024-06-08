import React from "react";

interface BadgeProp {
  title: string;
}

const Badge: React.FC<BadgeProp> = ({ title }) => {
  return (
    <span className="text-sm bg-red-100 text-red-600 border px-5 py-2 rounded-2xl">
      {title}
    </span>
  );
};

export default Badge;
