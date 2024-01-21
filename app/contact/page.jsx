"use client"
import styles from "./contact.module.css";
export default function contact() {
  function handleMail(event) {
    console.log("email")
  }
  return (
    <>
      <div className={`${styles.main}`}>
        <div className={`${styles.inner}`}>
          <div className={`${styles.col1}`}>
            <h2>Send Us A Message</h2>
            <form action="" method="post">
              <input type="text" placeholder="Name" />
              <input type="email" name="Email" id="Email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea
                name="Message"
                id="Message"
                placeholder="Message"
                cols="30"
                rows="5"
              ></textarea>
              <button onClick={handleMail}>Submit</button>
            </form>
          </div>
          <div className={`${styles.col2}`}>
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className={`${styles.info}`}>
              <div className={`${styles.address}`}>
                <div className={`${styles.addressCol1}`}>Logo</div>
                <div className={`${styles.addressCol2}`}>asassa</div>
              </div>
              <div className={`${styles.phone}`}>
                <div className={`${styles.phoneCol1}`}>Logo</div>
                <div className={`${styles.phoneCol2}`}>asassa</div>
              </div>
              <div className={`${styles.email}`}>
                <div className={`${styles.emailCol1}`}>Logo</div>
                <div className={`${styles.emailCol2}`}>asassa</div>
              </div>
              <div className={`${styles.website}`}>
                <div className={`${styles.websiteCol1}`}>Logo</div>
                <div className={`${styles.websiteCol2}`}>asassa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
