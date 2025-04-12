'use client';

import styles from "../../../styles/landing/section2.module.css";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Add } from "iconic-react";

export default function Section2() {
    return (
    <main className={styles.main} id="Section2">
    <Carousel className={styles.carousal}>
      <Carousel.Item className={styles.item}>
        <img
          className="d-block w-100"
          src="/carousal01.jpg"
          alt="First slide"
        />
        <div className={styles.img_div}>
        <img
        className={styles.doctor}
        src="/doc-3.png"
        alt="404"
        />
        </div>
        <div className={styles.left}>
        <h2 className={styles.header}>WE CARE FOR EVERY PATIENT</h2>
        <h1 className={styles.h1}>Advanced Healthcare Made Personal</h1>
        <p className={styles.para}>It is a long established fact that a reader will be distracted by the readable content</p>
        <button className={styles.btn}>
        Read More
        <Add size="26" color="#FFFF" style={{ marginLeft: '6px' }} />
        </button>
        </div>
      </Carousel.Item>

      <Carousel.Item className={styles.item}>
        <img
          className="d-block w-100"
          src="/carousal02.jpg"
          alt="Second slide"
        />
        <div className={styles.img_div}>
        <img
        className={`${styles.doctor} ${styles.slide}`}
        src="/doc-2.png"
        alt="404"
        />
        </div>
        <div className={styles.left}>
        <h2 className={styles.header}>WE CARE FOR EVERY PATIENT</h2>
        <h1 className={styles.h1}>Advanced Healthcare Made Personal</h1>
        <p className={styles.para}>It is a long established fact that a reader will be distracted by the readable content</p>
        <button className={styles.btn}>
        Read More
        <Add size="26" color="#FFFF" style={{ marginLeft: '6px' }} />
        </button>
        </div>
      </Carousel.Item>

      <Carousel.Item className={styles.item}>
        <img
          className="d-block w-100"
          src="/carousal03.jpg"
          alt="Third slide"
        />
        <div className={styles.img_div}>
        <img
        className={`${styles.doctor} ${styles.slide}`}
        src="/doc-1.png"
        alt="404"
        />
        </div>
        <div className={styles.left}>
        <h2 className={styles.header}>WE CARE FOR EVERY PATIENT</h2>
        <h1 className={styles.h1}>Advanced Healthcare Made Personal</h1>
        <p className={styles.para}>It is a long established fact that a reader will be distracted by the readable content</p>
        <button className={styles.btn}>
        Read More
        <Add size="26" color="#FFFF" style={{ marginLeft: '6px' }} />
        </button>
        </div>
      </Carousel.Item>
    </Carousel>
    </main>
    );
}