// pages/post/[id].js
"use client";

import styles from "./postD.module.css";
import React, { useEffect, useState, useContext } from "react";
import { APIContext } from "../../../context/MyContext";
import Image from "next/image";

export default function Post1({ id }) {
  const { data } = useContext(APIContext);

  console.log(id);

  const [item, setItem] = useState();

  const [formattedDate, setformattedDate] = useState("null");

  useEffect(() => {

    const post = data.find((post) => post.slug == id);
    setItem(post);
    if (item !== undefined) {
      const originalTimestamp = item.createdAt;
      const date = new Date(originalTimestamp);
      const options = { year: "numeric", month: "short", day: "numeric" };
      const Fdate = date.toLocaleDateString("en-US", options);
      setformattedDate(Fdate);
    }
  }, [data, id , item]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `https://658db9147c48dce94739a6eb.mockapi.io/blog/${params.id}`
  //     );
  //     const data = await response.json();
  //     setItem(data);

  //   };

  //   fetchData(params.id);
  // }, []);
  return (
    <>
      {item ? (
        <div className={`${styles.Main}`}>
          <div className={`${styles.inner}`}>
            <div className={`${styles.avatar}`}>
              <Image
                className={`${styles.avatarImage}`}
                src={item.avatar}
                alt={item.avatar}
                width={100}
                height={100}
              />
              <p>{item.name}</p>
              <p>{formattedDate}</p>
            </div>
            <h1 className={`${styles.title}`}>{item.title}</h1>
            <div className={`${styles.image}`}>
              <Image
                priority={true}
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
              />
            </div>

            <div className={`${styles.post}`}>
              <div className={`${styles.content}`}>
                <p className={`${styles.description}`}>{item.description}</p>
              </div>
              <hr />
              <div className={`${styles.share}`}>
                <p>Share : </p>
                <Image
                  alt="Share"
                  src="/assets/fbsvg.svg"
                  width={30}
                  height={30}
                />
                <Image
                  alt="Share"
                  src="/assets/twittersvg.svg"
                  width={30}
                  height={30}
                />
                <Image
                  alt="Share"
                  src="/assets/linkedinsvg.svg"
                  width={30}
                  height={30}
                />
                <Image
                  alt="Share"
                  src="/assets/pinterestsvg.svg"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
