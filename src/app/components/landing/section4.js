import styles from "../../../styles/landing/section4.module.css";
import { HeartAdd } from "iconic-react";

export default function Section3() {
    return (
        <main className={styles.main} id="Section4">
            <h2 className={styles.header}>WHAT WE DO</h2>
            <h1 className={styles.h1}>Quality Care With Modern Facilities</h1>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.box}>
                    <HeartAdd size="44" color="#087fe0" />
                        <h1 className={styles.number}>01</h1>
                    </div>
                    <h1 className={styles.heading}>Symptom Checker</h1>
                    <div className={styles.hr}></div>
                    <p className={styles.para}>It is a long established fact that a reader will be distracted by the readable content</p>
                    <button className={styles.btn}>Read More</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.box}>
                    <HeartAdd size="44" color="#087fe0" />
                        <h1 className={styles.number}>02</h1>
                    </div>
                    <h1 className={styles.heading}>Disease Prediction</h1>
                    <div className={styles.hr}></div>
                    <p className={styles.para}>It is a long established fact that a reader will be distracted by the readable content</p>
                    <button className={styles.btn}>Read More</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.box}>
                    <HeartAdd size="44" color="#087fe0" />
                        <h1 className={styles.number}>03</h1>
                    </div>
                    <h1 className={styles.heading}>Free Consultation</h1>
                    <div className={styles.hr}></div>
                    <p className={styles.para}>It is a long established fact that a reader will be distracted by the readable content</p>
                    <button className={styles.btn}>Read More</button>
                </div>
            </div>
        </main>
    );
}