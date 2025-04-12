import styles from "../../../styles/landing/section7.module.css";
import { Facebook, Instagram } from "iconic-react";

export default function Section7() {
    return (
        <main className={styles.main}>
            <div>
            <ul className={styles.ul}>
                <li className={`${styles.li} ${styles.heading}`}>Diagnosia</li>
                <li className={`${styles.li} ${styles.para}`}>It helps designers plan out where the content will sit, the content to be written and approved.</li>
            </ul>
            <div className={styles.container}>
                <div className={styles.box}><Facebook size="24" color="#ffffff" variant="Bold"
                /></div>
                <div className={styles.box}><Facebook size="24" color="#ffffff" variant="Bold"
                /></div>
                <div className={styles.box}><Facebook size="24" color="#ffffff" variant="Bold"
                /></div>
                <div className={styles.box}><Facebook size="24" color="#ffffff" variant="Bold"
                /></div>
            </div>
            </div>
            <div className={styles.right}>
                <ul className={`${styles.ul} ${styles.links}`}>
                    <li className={`${styles.li} ${styles.heading}`}>Quick Links</li>
                    <li className={styles.li}><a href="#Section2">Home</a></li>
                    <li className={styles.li}><a href="#Section3">About Us</a></li>
                    <li className={styles.li}><a href="#Section4">Services</a></li>
                    <li className={styles.li}><a href="#Section5">Blogs</a></li>
                    <li className={styles.li}><a href="#Section">Contact Us</a></li>
                </ul>
                <ul className={`${styles.ul} ${styles.contact}`}>
                    <li className={`${styles.li} ${styles.heading}`}>Contact Us</li>
                    <li className={`${styles.li} ${styles.text}`}>+91-8017-511-521</li>
                    <li className={`${styles.li} ${styles.text}`}>sayantandey506@gmail.com</li>
                    <li className={`${styles.li} ${styles.text}`}>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</li>
                </ul>
            </div>
        </main>
    )
}