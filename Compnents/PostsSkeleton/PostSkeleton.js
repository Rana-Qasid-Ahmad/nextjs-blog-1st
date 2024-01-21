import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./postsSkeleton.module.css";

export default function postSkeleton() {
  return (
    <div className={`${styles.Main}`}>
      <Skeleton className={styles.image} />
      <div className={`${styles.inner}`}>
        <Skeleton height={10} width={100} />

        <Skeleton height={20} className={`${styles}text3`} />

        <Skeleton height={60} className={`${styles.discP}  text4 textText`} />

        <div className={`${styles.person}`}>
          <div className={`${styles.personcol1}`}>
            <Skeleton circle width={60} height={60} />
          </div>
          <div className={`${styles.personcol2}`}>
            <p>
              <Skeleton width={100} />
              <Skeleton />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
