import Link from "next/link";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <>
      <div className={`${styles.main}`}>
        <div className={`${styles.inner}`}>
          <div className={`${styles.col1} ${styles.col}`}>
            <h1>Rana Qasid BLog</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              corporis autem vitae quasi dignissimos fugit accusamus,
              repudiandae magni ipsum, vero distinctio unde quaerat. Reiciendis
              dicta odit ad dolor assumenda pariatur.
            </p>
          </div>
          <div className={`${styles.col2} ${styles.col}`}>
            <h2>Pages</h2>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={`${styles.col3} ${styles.col}`}>
            <h2>Best Blog</h2>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}
