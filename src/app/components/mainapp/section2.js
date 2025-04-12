'use client';

import styles from "../../../styles/mainapp/section2.module.css";
import { useEffect, useRef, useState } from "react";

export default function Section2() {
    // const [symptom, setSymptom] = useState('');
    const [selectedSymptom, setSelectedSymptom] = useState([]);
    const [report, setReport] = useState('');

    const [param, setParam] = useState({
        'stomach_pain': 0,
        'acidity': 0,
        'ulcers_on_tongue': 0,
        'vomiting': 0,
        'cough': 0,
        'fatigue': 0,
        'high_fever': 0,
        'headache': 0,
        'nausea': 0,
        'loss_of_appetite': 0,
        'muscle_pain': 0,
        'dizziness': 0,
    });

    const symptoms = [
        'stomach_pain',
        'acidity',
        'ulcers_on_tongue',
        'vomiting',
        'cough',
        'fatigue',
        'high_fever',
        'headache',
        'nausea',
        'loss_of_appetite',
        'muscle_pain',
        'dizziness',
    ];

    const toggleSymptom = (symptom) => {
        if (selectedSymptom.includes(symptom)) {
          // Remove symptom if already selected
          setSelectedSymptom(selectedSymptom.filter((s) => s !== symptom));
          setParam({ ...param, [symptom]: 0 });
        } else {
          // Add symptom if not selected
          setSelectedSymptom([...selectedSymptom, symptom]);
          setParam({ ...param, [symptom]: 1 });
        }
    };

    const getData = async() => {
        const payload = {
            "symptoms": selectedSymptom
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if(response.ok) {
                const result = await response.json();
                setReport(result.prediction);
            } else {
                console.log("An error occured while getting a response.");
            }
        } catch (error) {
            console.log("An error occured" + error);
        }
    }

    return (
        <main className={styles.main}>

        <h1 className={styles.h1}>Disease Prediction Application</h1>
        <p className={styles.para}>Choose atleast one of the following symptoms to predict your disease.Remember this is an AI model and may not always accurately predict the disease. For emergency contact a docter immediately.</p>
        <p className={styles.question}>What are your Symptoms? (Max 6)</p>
        <div className={styles.container}>
        {symptoms.map((symptom) => (
        <p
          key={symptom}
          className={styles.option}
          onClick={() => toggleSymptom(symptom)}
          style={{
            backgroundColor: selectedSymptom.includes(symptom) ? "rgb(21, 99, 255)" : "rgba(164, 191, 246, 0.432)",
            color: selectedSymptom.includes(symptom) ? "#ffff" : "rgb(13, 51, 128)",
          }}
        >
          {symptom}
        </p>
      ))}
        </div>
        <button className={styles.btn} onClick={() => getData()}>Predict</button>
        <div className={styles.result}>
            {report !== '' ? (
                <p className={styles.result}>
                    You seem to have <a href={`/components/${report}`}>{report}</a>
                </p>
            ) : (
                <p></p>
            ) }
        </div>
        </main>
    );
}