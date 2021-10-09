import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import BackButton from "../BackButton";

function Form() {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const [tags, setTags] = useState("");
  const [desc, setDesc] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (title === "" || language === "" || tags === "" || code === "") {
      alert("Error");
    } else {
      const docRef = await addDoc(collection(db, "snippets"), {
        title: title,
        code: code,
        language: language,
        tags: tags.split(","),
        createdBy: {
          name: auth.currentUser.displayName,
          uid: auth.currentUser.uid,
          email: auth.currentUser.email,
          photoURL: auth.currentUser.photoURL,
        },
        userID: auth.currentUser.uid,
        createdOn: new Date().toDateString(),
        desc: desc,
      });
      console.log("Document written with ID: ", docRef.id);
      setTitle("");
      setCode("");
      setTags("");
      setLanguage("");
      setDesc("");
    }
  }

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <BackButton />
        <div className="container px-5 py-5 mx-auto flex">
          <div className="max-w-md mx-auto bg-gray-900 shadow-md rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 className="text-white text-lg mb-1 font-medium title-font">
              Snippet Details
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Description
              </label>
              <input
                type="text"
                id="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-400">
                Code
              </label>
              <textarea
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Tags
              </label>
              <input
                type="text"
                id="title"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Language
              </label>
              <input
                type="text"
                id="title"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={handleSubmit}
            >
              Button
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;
