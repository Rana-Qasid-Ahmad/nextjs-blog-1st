import styles from './category.module.css'

export default function Categories() {
  return (
    <>
    <div className={`${styles.Main}` }>
        <div className={`${styles.inner}` }>
            <div className={`${styles.col1} ${styles.col}` }>Business</div>
            <div className={`${styles.col2} ${styles.col}` }>Business</div>
            <div className={`${styles.col3} ${styles.col}` }>Business</div>
            <div className={`${styles.col4} ${styles.col}` }>Business</div>
            <div className={`${styles.col5} ${styles.col}` }>Business</div>
            <div className={`${styles.col6} ${styles.col}` }>Business</div>
        </div>
    </div>
    </>
  )
}
