import styles from "../../../styles/landing/section6.module.css";
import { Add } from "iconic-react";

export default function Section6() {
    return (
        <main className={styles.main}>
            <h2 className={styles.header}>OUR BLOGS</h2>
            <h1 className={styles.h1}>See Our Latest Blogs</h1>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.img_div}>
                        <img className={styles.pic} src="/blog-01.jpg" alt="404" />
                        <p className={styles.date}>24 July, 2024</p>
                    </div>
                    <h1 className={styles.heading}>Get The Exercise You Need Daily</h1>
                    <p className={styles.para}>It is a long established fact that a reader will be distracted by the readable content</p>
                    <button className={styles.btn}>
                        Read More
                        <Add size="28" color="#087fe0" style={{ marginLeft: '6px' }} className={styles.add} />
                    </button>
                </div>
                <div className={styles.card}>
                    <div className={styles.img_div}>
                        <img className={styles.pic} src="/blog-01.jpg" alt="404" />
                        <p className={styles.date}>24 July, 2024</p>
                    </div>
                    <h1 className={styles.heading}>Get The Exercise You Need Daily</h1>
                    <p className={styles.para}>It is a long established fact that a reader will be distracted by the readable content</p>
                    <button className={styles.btn}>
                        Read More
                        <Add size="28" color="#087fe0" style={{ marginLeft: '6px' }} className={styles.add} />
                    </button>
                </div>
                <div className={styles.card}>
                    <div className={styles.img_div}>
                        <img className={styles.pic} src="/blog-01.jpg" alt="404" />
                        <p className={styles.date}>24 July, 2024</p>
                    </div>
                    <h1 className={styles.heading}>Get The Exercise You Need Daily</h1>
                    <p className={styles.para}>It is a long established fact that a reader will be distracted by the readable content</p>
                    <button className={styles.btn}>
                        Read More
                        <Add size="28" color="#087fe0" style={{ marginLeft: '6px' }} className={styles.add} />
                    </button>
                </div>
            </div>
        </main>
    );
}