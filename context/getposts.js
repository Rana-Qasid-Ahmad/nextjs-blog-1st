import apiURL from "@/api";

// lib/getPost.js
export async function getPost(id) {
    const res = await fetch(`${apiURL}${id}`);
    const postData = await res.json();
    return postData;
  }
  