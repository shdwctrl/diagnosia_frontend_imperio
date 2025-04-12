'use client';

import styles from "../../../styles/mainapp/section2.module.css";
import { useEffect, useRef, useState } from "react";

export default function Section2() {
    const [disease, setDisease] = useState({});

    const getData = async() => {
        try {
            
        } catch (error) {
            console.log("An error occured" + error);
        }
    }

    return (
        <main className={styles.main}>

        <h1 className={styles.h1}>Disease Prediction Application</h1>
        <p className={styles.para}>Choose atleast one of the following symptoms to predict your disease.Remember this is an AI model and may not always accurately predict the disease. For emergency contact a docter immediately.</p>
        <p className={styles.question}>What are your Symptoms? (Max 6)</p>
        </main>
    );
}