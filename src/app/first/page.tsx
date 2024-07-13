import Image from "next/image";
import styles from "./first.module.css";

export default function First(){
    return(
        <div>
            
            <Image className={styles.wallpaper} src="/images/rectangle.png" alt="wallpaper" width={1349} height={500} />
            <h1 className={styles.h1}>Основные функции</h1>
            <div className={styles.planets}>
                <Image src="/images/mars.png" alt="mars" width={400} height={400} />
                <Image src="/images/moon.png" alt="moon" width={400} height={400} />
                <Image src="/images/earth.png" alt="earth" width={400} height={400} />
            </div>
        </div>
    )
}