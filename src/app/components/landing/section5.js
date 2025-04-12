import styles from "../../../styles/landing/section5.module.css";

export default function Section5() {
    return (
        <main className={styles.main} id="Section5">
            <h2 className={styles.header}>OUR SERVICES</h2>
            <h1 className={styles.h1}>Our Trusted & Professional Services</h1>
            <div className={styles.container}>
                <div className={styles.left}>
                <div className={styles.point}>
                        <div className={styles.logo_div}>
                            <img className={styles.icon} src="/icon1.svg" alt="404" />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.heading}>AI-Powered Disease Prediction</h3>
                            <p className={styles.text}>It is a long established fact that a reader will be distracted by the readable content.</p>
                        </div>
                </div>
                <div className={styles.point}>
                        <div className={styles.logo_div}>
                            <img className={styles.icon} src="/icon1.svg" alt="404" />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.heading}>Personalized Health Risk Assessment</h3>
                            <p className={styles.text}>It is a long established fact that a reader will be distracted by the readable content.</p>
                        </div>
                </div>
                </div>
                <div className={styles.middle}></div>
                <div className={styles.right}>
                <div className={styles.point}>
                        <div className={styles.content}>
                            <h3 className={styles.heading}>Virtual Medical Consultation</h3>
                            <p className={styles.text}>It is a long established fact that a reader will be distracted by the readable content.</p>
                        </div>
                        <div className={styles.logo_div}>
                            <img className={styles.icon} src="/icon1.svg" alt="404" />
                        </div>
                </div>
                <div className={styles.point}>
                        <div className={styles.content}>
                            <h3 className={styles.heading}>Comprehensive Symptom Analysis</h3>
                            <p className={styles.text}>It is a long established fact that a reader will be distracted by the readable content.</p>
                        </div>
                        <div className={styles.logo_div}>
                            <img className={styles.icon} src="/icon1.svg" alt="404" />
                        </div>
                </div>
                </div>
            </div>
        </main>
    );
}