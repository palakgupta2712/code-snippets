import React from "react";

function SignIn({ title, signInWith }) {
  return (
    <div>
      <button
        class="bg-gray-800 m-3 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none"
        onClick={signInWith}
      >
        <span class="ml-4 flex items-start flex-col leading-none ">
          <span class="text-xs text-gray-400 mb-1">Sign in with</span>
          <span class="title-font font-medium">{title} </span>
        </span>
      </button>
    </div>
  );
}

export default SignIn;