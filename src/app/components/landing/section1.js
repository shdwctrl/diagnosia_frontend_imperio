import styles from "../../../styles/landing/section1.module.css";
import { Add } from "iconic-react";

export default function Section1() {
    return (
        <main className={styles.nav}>
            <h1 className={styles.h1}>Diagnosia</h1>
            <div className={styles.wrapper}>
                <ul className={styles.ul}>
                    <li className={styles.link}><a href="#Section2">Home</a></li>
                    <li className={styles.link}><a href="#Section3">About Us</a></li>
                    <li className={styles.link}><a href="#Section4">Services</a></li>
                    <li className={styles.link}><a href="#Section5">Blogs</a></li>
                    <li className={styles.link}><a href="#Section">Contact Us</a></li>
                </ul>
                <a href="/components/mainapp">
                <button className={styles.btn}>
                CHECKUP
                <Add size="26" color="#FFFF" style={{ marginLeft: '6px' }} />
                </button>
                </a>
            </div>
        </main>
    );
}