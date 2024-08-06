import Image from "next/image"
import styles from "./services.module.scss"

export default function Services(){
    return(
        <div className={styles.container}>
        <div className={styles.card}>
            <Image src="/images/earth2.png" alt="Image 1" width={150} height={150}/>
            <div className={styles.textContent}>
                <h2 className={styles.h2}>Lorem ipsum dolor sit amet consectetuer</h2>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetuer. Lectus sed quam aliquet diam fermentum et semper. Mauris commodo eget bibendum fusce sociis consectetuer ut posuere venenatis. Eget tempus.</p>
                <button className={styles.button}><a href="/about" className={styles.a}>Know More About It</a></button>
            </div>
        </div>
        <div className={styles.card}>
            <Image src="/images/mars2.png" alt="Image 2" width={150} height={150}/>
            <div className={styles.textContent}>
                <h2 className={styles.h2}>Lorem ipsum dolor sit amet consectetuer</h2>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetuer. Lectus sed quam aliquet diam fermentum et semper. Mauris commodo eget bibendum fusce sociis consectetuer ut posuere venenatis. Eget tempus.</p>
                <button className={styles.button}><a href="/about" className={styles.a}>Know More About It</a></button>
            </div>
        </div>
        <div className={styles.card}>
            <Image src="/images/luna2.png" alt="Image 3" width={150} height={150}/>
            <div className={styles.textContent}>
                <h2 className={styles.h2}>Lorem ipsum dolor sit amet consectetuer</h2>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetuer. Lectus sed quam aliquet diam fermentum et semper. Mauris commodo eget bibendum fusce sociis consectetuer ut posuere venenatis. Eget tempus.</p>
                <button className={styles.button}><a href="/about" className={styles.a}>Know More About It</a></button>
            </div>
        </div>
        <div className={styles.card}>
            <Image src="/images/earth2.png" alt="Image 3" width={150} height={150}/>
            <div className={styles.textContent}>
                <h2 className={styles.h2}>Lorem ipsum dolor sit amet consectetuer</h2>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetuer. Lectus sed quam aliquet diam fermentum et semper. Mauris commodo eget bibendum fusce sociis consectetuer ut posuere venenatis. Eget tempus.</p>
                <button className={styles.button}><a href="/about" className={styles.a}>Know More About It</a></button>
            </div>
        </div>
        <div className={styles.card}>
            <Image src="/images/mars2.png" alt="Image 3" width={150} height={150}/>
            <div className={styles.textContent}>
                <h2 className={styles.h2}>Lorem ipsum dolor sit amet consectetuer</h2>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetuer. Lectus sed quam aliquet diam fermentum et semper. Mauris commodo eget bibendum fusce sociis consectetuer ut posuere venenatis. Eget tempus.</p>
                <button className={styles.button}><a href="/about" className={styles.a}>Know More About It</a></button>
            </div>
        </div>
        <div className={styles.card}>
            <Image src="/images/luna2.png" alt="Image 3" width={150} height={150}/>
            <div className={styles.textContent}>
                <h2 className={styles.h2}>Lorem ipsum dolor sit amet consectetuer</h2>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetuer. Lectus sed quam aliquet diam fermentum et semper. Mauris commodo eget bibendum fusce sociis consectetuer ut posuere venenatis. Eget tempus.</p>
                <button className={styles.button}><a href="/about" className={styles.a}>Know More About It</a></button>
            </div>
        </div>
    </div>
    )
}