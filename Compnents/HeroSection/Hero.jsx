import styles from './hero.module.css';
import Image from 'next/image';

export default function wHero() {
  return (
    <>
    <div className={`${styles.MainDiv}` }>
        <div className={`${styles.MainHeading}` }>Trending</div>
        <div className={`${styles.InnerDiv}` }>
            <div className={`${styles.innerCol1}` }>
                <img priority="true" alt='None' src="/assets/1st.webp" width={400} height={350}/>
            </div>
            <div className={`${styles.innerCol2}` }>
                <p><b>Business, Travel</b> — July 2, 2020</p>
                <h2 className={`${styles} text1` }>Your most unhappy customers are your greatest source of learning.</h2>
                <span><p className={`${styles} text4 textText` }>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></span>
                <div className={`${styles.person}` }>
                    <div className={`${styles.personcol1}` }>
                        <img alt='None' src="/assets/person1.webp" width={100} height={100}/>
                    </div>
                    <div className={`${styles.personcol2}` }> <b>Sergy Campbell </b><br /> CEO and Founder
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}
