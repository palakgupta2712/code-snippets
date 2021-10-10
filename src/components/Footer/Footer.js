import React from "react";

function Footer() {
  return (
    <div>
      <footer class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4  sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            Code Snippets By —
            <a
              href="https://linkedin.com/in/palakgupta2712"
              class="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Palak Gupta
            </a>
          </p>
          <a
            class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4"
            href="https://github.com/palakgupta2712/code-snippets"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
