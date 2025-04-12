"use client";

import Section1 from "./section1";
import { useState, useEffect, useRef } from "react";
import styles from "../../../styles/mainapp/page.module.css";

export default function Description({ params }) {
    const [disease, setDisease] = useState({});

    const getData = async() => {
        try {
            const response = await fetch(`/api/search?disease=${params.disease}`);
            const result = await response.json();

            setDisease(result);
        } catch (error) {
            console.log("An error occured" + error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
    <main className={styles.main}>

    <Section1 />
    
    <div className={styles.right}>
        <h1 className={styles.h1}>{disease.Disease}</h1>
        <p className={styles.para}>{disease.Description}</p>
        <p className={`${styles.h1}`} style={{ fontSize: '20px', fontWeight: '400', color: '#282828', marginBottom: '16px', letterSpacing: '0px' }}>Precautions :</p>
        {disease.Precaution && disease.Precaution.map((precaution, index) => (
            <>
            <p key={index} className={styles.question}>{precaution}</p>
            </>
        ))}
    </div>

    </main>
    );
}