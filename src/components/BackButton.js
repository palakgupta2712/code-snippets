import React from "react";
import { useHistory } from "react-router";

function BackButton() {
  let history = useHistory();

  return (
    <div>
      <button
        className="flex mx-10 text-white bg-gray-800 border-0 py-2 px-3 focus:outline-none hover:bg-gray-600 rounded"
        onClick={() => history.goBack()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
        Go Back{" "}
      </button>
    </div>
  );
}

export default BackButton;
