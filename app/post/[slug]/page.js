import apiURL from "@/api";
import styles from "./postD.module.css";
import axios from "axios";
import Image from "next/image";


// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const response = await axios.get(apiURL);
  const posts = await response.data;
  // const posts = await response.data.data;

  return posts.map((post) => ({
    slug: String(post.id),
  }));
}

export default async function Post({ params }) {
  const { slug } = params;
  // console.log(slug);
  const res = await axios.get(`${apiURL}${slug}`);
  // const res = await axios.get(`${apiURL}/blog/${slug}`);
  // const item = await res.data.data;
  const item = await res.data;
  // console.log(item);
  // // function formattedDate() {
  //   if (item !== "undefined") {
  //     const originalTimestamp = item.createdAt;
  //     const date = new Date(originalTimestamp);
  //     const options = { year: "numeric", month: "short", day: "numeric" };
  //     const Fdate = date.toLocaleDateString("en-US", options);
  //     console.log(Fdate);
  //     return Fdate;
  //   }
  // }

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
      {item !== "undefined" ? (
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
              <p>{item.author}</p>
              {/* {formattedDate()} */}
            </div>
            <h1 className={`${styles.title}`}>{item.title}</h1>
            <div className={`${styles.image}`}>
              <Image
                // priority={true}
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
