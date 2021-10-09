import React from "react";
import { Link } from "react-router-dom";

function Card({ item, id }) {
  return (
    <>
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">
              {item.createdOn.split(" ")[1]}
            </span>
            <span className="font-medium text-lg leading-none text-gray-300 title-font">
              {item.createdOn.split(" ")[2]}
            </span>
          </div>
          <div className="flex-grow pl-6">
            {item.tags.map((tag) => (
              <span className="inline-block py-1 px-2 mr-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">
                {tag}
              </span>
            ))}
            <h1 className="title-font text-xl font-medium text-white mb-3">
              <Link to={`/snippet/${id}/`}>{item.title}</Link>
            </h1>
            <p className="leading-relaxed mb-5">
              {item.desc.substring(0, 120)}...
            </p>
            <div className="inline-flex items-center">
              <img
                alt={item.createdBy.name}
                src={item.createdBy.photoURL}
                className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-white">
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
