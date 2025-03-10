import styles from "./about.module.css";
import Image from "next/image";

export default function AboutUs(){
    return(
        <div className={styles.container}>
        <div className={styles.card}>
            <Image src="/images/earth2.png" alt="Image 1" width={150} height={150}/>
            <div className={styles.textContent}>
                <h2 className={styles.h2}>Lorem ipsum dolor sit amet consectetuer</h2>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetuer. Lectus sed quam aliquet diam fermentum et semper. Mauris commodo eget bibendum fusce sociis consectetuer ut posuere venenatis. Eget tempus.</p>
            </div>
        </div>
        <div className={styles.card}>
            <Image src="/images/mars2.png" alt="Image 2" width={150} height={150}/>
            <div className={styles.textContent}>
                <h2 className={styles.h2}>Lorem ipsum dolor sit amet consectetuer</h2>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetuer. Lectus sed quam aliquet diam fermentum et semper. Mauris commodo eget bibendum fusce sociis consectetuer ut posuere venenatis. Eget tempus.</p>
            </div>
        </div>
        <div className={styles.card}>
            <Image src="/images/luna2.png" alt="Image 3" width={150} height={150}/>
            <div className={styles.textContent}>
                <h2 className={styles.h2}>Lorem ipsum dolor sit amet consectetuer</h2>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetuer. Lectus sed quam aliquet diam fermentum et semper. Mauris commodo eget bibendum fusce sociis consectetuer ut posuere venenatis. Eget tempus.</p>
            </div>
        </div>
        <div className={styles.card}>
            <Image src="/images/earth2.png" alt="Image 3" width={150} height={150}/>
            <div className={styles.textContent}>
                <h2 className={styles.h2}>Lorem ipsum dolor sit amet consectetuer</h2>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetuer. Lectus sed quam aliquet diam fermentum et semper. Mauris commodo eget bibendum fusce sociis consectetuer ut posuere venenatis. Eget tempus.</p>
            </div>
        </div>
        <div className={styles.card}>
            <Image src="/images/mars2.png" alt="Image 3" width={150} height={150}/>
            <div className={styles.textContent}>
                <h2 className={styles.h2}>Lorem ipsum dolor sit amet consectetuer</h2>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetuer. Lectus sed quam aliquet diam fermentum et semper. Mauris commodo eget bibendum fusce sociis consectetuer ut posuere venenatis. Eget tempus.</p>
            </div>
        </div>
        <div className={styles.card}>
            <Image src="/images/luna2.png" alt="Image 3" width={150} height={150}/>
            <div className={styles.textContent}>
                <h2 className={styles.h2}>Lorem ipsum dolor sit amet consectetuer</h2>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetuer. Lectus sed quam aliquet diam fermentum et semper. Mauris commodo eget bibendum fusce sociis consectetuer ut posuere venenatis. Eget tempus.</p>
            </div>
        </div>
    </div>
    )
}