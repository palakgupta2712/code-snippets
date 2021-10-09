import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useParams } from "react-router";
import Highlight from "react-highlight";

function Snippet() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    getSnippetDetails();
  }, []);

  async function getSnippetDetails() {
    const docRef = doc(db, "snippets", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
      setUserData(docSnap.data().createdBy);
      setTags(docSnap.data().tags);
      console.log(auth.currentUser);
    } else {
      console.log("No such document!");
    }
  }
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                {data.createdOn}
              </h2>
              <h1 class="text-white text-3xl title-font font-medium mb-4">
                {data.title}
              </h1>
              <div class="flex mb-4">
                <div class="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  <Highlight language={data.language} class="w-full">
                    {data.code}
                  </Highlight>
                </div>
              </div>
              <p class="leading-relaxed mb-4">{data.desc}</p>
              <div class="flex border-t border-gray-800 py-2">
                <span class="text-gray-500">Tags</span>
                <span class="ml-auto text-white">
                  {tags.map((tag) => (
                    <span class="inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">
                      {tag}
                    </span>
                  ))}
                </span>
              </div>
              <div class="flex border-t border-gray-800 py-2">
                <span class="text-gray-500">Language</span>
                <span class="ml-auto text-white">{data.language}</span>
              </div>
              <div class="flex border-t border-b mb-6 border-gray-800 py-2">
                <span class="text-gray-500">Created By</span>
                <span class="ml-auto text-white flex justify-center items-center">
                  <img
                    alt={userData}
                    src={userData.photoURL}
                    class="w-8 h-8 mx-1 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  {userData.name}
                </span>
              </div>
              <div class="flex">
                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Share
                </button>
                <button class="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Snippet;
