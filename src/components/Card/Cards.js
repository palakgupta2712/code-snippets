import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";
import Card from "./Card";

function Cards() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const q = query(collection(db, "snippets"));
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
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -my-8">
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

export default Cards;
