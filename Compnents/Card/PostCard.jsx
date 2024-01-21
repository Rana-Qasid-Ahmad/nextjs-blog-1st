import Image from "next/image";
import styles from "./postcard.module.css";
import Link from "next/link";

export default function PostCard({ post }) {
  const originalTimestamp = post.createdAt;
  const date = new Date(originalTimestamp);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return (
    <div className={`${styles.Main}`}>
      <Link href={`/post/${post.id}`}>
       
        <img fetchPriority="high" className={`${styles.mainImage}`} alt="None" src={post.image} width={360} height={210} />
        <div className={`${styles.inner}`}>
          <p>
            {/* <b>{post.category.slice(0, 20)}</b> — {formattedDate} */}
          </p>
          <h2 className={`${styles}text3`}>{post.title.slice(0, 50)} ...</h2>

          <p className={`${styles.discP}  text4 textText`}>
            {post.description.slice(0, 100)} ...
          </p>

          <div className={`${styles.person}`}>
            <div className={`${styles.personcol1}`}>
              <img alt="None" src={post.avatar} width={100} height={100} />
            </div>
            <div className={`${styles.personcol2}`}>
              <p>
                <b>{post.name}</b>
                <br /> CEO and Founder
              </p>
            </div>
            <div className={`${styles.arrow}`}>
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
	l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
	c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
	c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
	S1.293,9.212,1.729,9.212z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
