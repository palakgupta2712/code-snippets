import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Card from "../Card/Card";
import { Link } from "react-router-dom";

function UserSnippets() {
  const [user, loading, error] = useAuthState(auth);

  const [data, setData] = useState([]);
  useEffect(() => {
    if (loading) {
      console.log("LOad");
      return;
    }
    if (user) {
      getData();
    }
  }, [user, loading]);
  async function getData() {
    console.log(user.uid);
    const userRef = collection(db, "snippets");
    const q = await query(userRef, where("userID", "==", user.uid));
    // const q = query(collection(db, "snippets"));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length) {
      setData(querySnapshot.docs);

      console.log(querySnapshot.docs);
    } else {
      console.log("No such document!");
    }
  }

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <Link to="/new">
          <button className="flex mr-10 ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            New Snippet
          </button>
        </Link>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -my-8">
            {data.map((item) => (
              <>
                <Card item={item.data()} key={item.id} id={item.id} />
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default UserSnippets;
