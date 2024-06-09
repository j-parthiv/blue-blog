import React from "react";

const Spinner = () => {
  return (
    <div className="my-[10em] flex flex-col items-center">
      <div className="loader my-4"></div>
      <p>Loading</p>
    </div>
  );
};

export default Spinner;
