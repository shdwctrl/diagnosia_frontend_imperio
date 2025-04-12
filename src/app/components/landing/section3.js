import styles from "../../../styles/landing/section3.module.css";
import { ArchiveTick } from "iconic-react";

export default function Section3() {
    return (
        <main className={styles.main} id="Section3">
            <div className={styles.left}>
                <h2 className={styles.header}>HEALTH & CARE</h2>
                <h1 className={styles.h1}>We Give You The Perfect Smile You Want</h1>
                <p className={styles.para}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                    <ArchiveTick color="#087fe0" size="38" variant="Bold" />
                    <p className={styles.p}>Mauris mattis lectus eget ligula dapibus, ac maximus ipsum</p>
                    </li>
                    <li className={styles.li}>
                    <ArchiveTick color="#087fe0" size="38" variant="Bold" />
                    <p className={styles.p}>Mauris mattis lectus eget ligula dapibus, ac maximus ipsum</p>
                    </li>
                    <li className={styles.li}>
                    <ArchiveTick color="#087fe0" size="38" variant="Bold" />
                    <p className={styles.p}>Mauris mattis lectus eget ligula dapibus, ac maximus ipsum</p>
                    </li>
                </ul>
                <div className={styles.hr}></div>
                <div className={styles.contact}>
                    <div className={styles.pic}></div>
                    <div className={styles.details}>
                        <p className={styles.ph}>+1 (212) 255-5511</p>
                        <p className={styles.text}>Do you have any question?</p>
                    </div>
                </div>
            </div>
            <div className={styles.right}></div>
        </main>
    );
}