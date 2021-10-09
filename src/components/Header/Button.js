import React from "react";
import { Link } from "react-router-dom";

function Button({ title, path }) {
  return (
    <>
      <Link to={path}>
        <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          {title}
        </button>
      </Link>
    </>
  );
}

export default Button;
