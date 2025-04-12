"use client";

import Section1 from "./section1";
import Section2 from "./section2";
import styles from "../../../styles/mainapp/page.module.css";

export default function MainApp() {
    return (
    <main className={styles.main}>

    <Section1 />
    <Section2 />

    </main>
    );
}