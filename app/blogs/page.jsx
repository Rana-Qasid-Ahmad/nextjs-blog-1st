"use client";
import styles from "./blogs.module.css";
import { APIContext } from "../../context/MyContext";
import { useState, useEffect, useContext } from "react";
import PostCard from "../../Compnents/Card/PostCard";
import PostSkeleton from "../../Compnents/PostsSkeleton/PostSkeleton";

export default function Postscatalogue() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  const { data } = useContext(APIContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(data);
  }, [data]);
  return (
    <>
    <h1 className={styles.h1}>All The Blogs</h1>
      <div
        className={`${styles.PostCardsS} ${
          isLoading ? `` : `${styles.hidden}`
        }`}
      >
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </div>

      <div
        className={`${styles.PostCards}  ${
          isLoading ? `` : `${styles.active}`
        }`}
      >
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </>
  );
}
