import React from "react";
import { Link } from "react-router-dom";

function Button({ title, path, onClick }) {
  return (
    <>
      <Link to={path}>
        <button
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          onClick={onClick}
        >
          {title}
        </button>
      </Link>
    </>
  );
}

export default Button;
