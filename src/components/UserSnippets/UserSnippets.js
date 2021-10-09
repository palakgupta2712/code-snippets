import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Card from "../Card/Card";

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
