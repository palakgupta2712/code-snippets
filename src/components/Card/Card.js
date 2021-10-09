import React from "react";
import { Link } from "react-router-dom";

function Card({ item, id }) {
  return (
    <>
      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span class="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">
              {item.createdOn.split(" ")[1]}
            </span>
            <span class="font-medium text-lg leading-none text-gray-300 title-font">
              {item.createdOn.split(" ")[2]}
            </span>
          </div>
          <div class="flex-grow pl-6">
            {item.tags.map((tag) => (
              <span class="inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">
                {tag}
              </span>
            ))}
            <h1 class="title-font text-xl font-medium text-white mb-3">
              <Link to={`/snippet/${id}/`}>{item.title}</Link>
            </h1>
            <p class="leading-relaxed mb-5">{item.desc.substring(0, 120)}...</p>
            <div class="inline-flex items-center">
              <img
                alt={item.createdBy.name}
                src={item.createdBy.photoURL}
                class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span class="flex-grow flex flex-col pl-3">
                <span class="title-font font-medium text-white">
                  {item.createdBy.name}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
