import React, { useEffect, useState } from "react";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { Redirect, useParams } from "react-router";
import Highlight from "react-highlight";
import { useAuthState } from "react-firebase-hooks/auth";
import BackButton from "../BackButton";

function Snippet() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [tags, setTags] = useState([]);
  const [copied, setCopied] = useState(false);
  const [text, setText] = useState("");
  const CopyToClipboard = (id) => navigator.clipboard.writeText(id);
  const [user] = useAuthState(auth);

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
  async function deleteSnippet() {
    await deleteDoc(doc(db, "snippets", id));
    <Redirect to="/" />;
  }
  return (
    <div>
      {copied ? (
        <section>
          <div
            className="items-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold mr-5">Copied!</strong>
            <p className="block sm:flex">{text}</p>
            <span
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
              onClick={() => {
                setText("");
                setCopied(false);
              }}
            >
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        </section>
      ) : null}

      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <BackButton />
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {data.createdOn}
              </h2>
              <div className="flex">
                <h1 className="text-white text-3xl title-font font-medium mb-4">
                  {data.title}
                </h1>
                <button className="hover:fill-current hover:text-red-600 rounded-full ml-auto w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
                <button
                  className="hover:fill-current hover:text-white rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                  onClick={() => {
                    setText(window.location.href);
                    CopyToClipboard(window.location.href);
                    setCopied(true);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
                <button
                  className="hover:fill-current hover:text-white rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                  onClick={() => {
                    CopyToClipboard(`${data.code}`);
                    setCopied(true);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex mb-4">
                <div className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  <Highlight language={data.language} className="w-full">
                    {data.code}
                  </Highlight>
                </div>
              </div>
              <p className="leading-relaxed mb-4">{data.desc}</p>
              <div className="flex border-t border-gray-800 py-2">
                <span className="text-gray-500">Tags</span>
                <span className="ml-auto text-white">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block py-1 px-2 ml-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </span>
              </div>
              <div className="flex border-t border-gray-800 py-2">
                <span className="text-gray-500">Language</span>
                <span className="ml-auto text-white">{data.language}</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                <span className="text-gray-500">Created By</span>
                <span className="ml-auto text-white flex justify-center items-center">
                  <img
                    alt={userData}
                    src={userData.photoURL}
                    className="w-8 h-8 mx-1 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  {userData.name}
                </span>
              </div>
              <div className="flex">
                {user && user.uid === userData.uid && (
                  <button
                    className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    onClick={deleteSnippet}
                  >
                    Delete
                  </button>
                )}
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
