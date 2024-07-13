import Image from "next/image";
import styles from "./galery.module.css";

export default function Galery(){
    return(
        <div>
            <h3 className={styles.h3}>Примеры успешных проектов:</h3>
            <span className={styles.span}>
                Наши клиенты уже достигли значительных успехов с помощью Instant Forge Pro. От деталей для <br /> устаревшего оборудования до уникальных дизайнерских проектов - возможности безграничны.
            </span>
            <div className={styles.all}>
            <div className={styles.card}>
                <div className={styles.icon}>
                <svg className={styles.img}  xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="#fff"><path d="M440-181 240-296q-19-11-29.5-29T200-365v-230q0-22 10.5-40t29.5-29l200-115q19-11 40-11t40 11l200 115q19 11 29.5 29t10.5 40v230q0 22-10.5 40T720-296L520-181q-19 11-40 11t-40-11Zm0-92v-184l-160-93v185l160 92Zm80 0 160-92v-185l-160 93v184ZM80-680v-120q0-33 23.5-56.5T160-880h120v80H160v120H80ZM280-80H160q-33 0-56.5-23.5T80-160v-120h80v120h120v80Zm400 0v-80h120v-120h80v120q0 33-23.5 56.5T800-80H680Zm120-600v-120H680v-80h120q33 0 56.5 23.5T880-800v120h-80ZM480-526l158-93-158-91-158 91 158 93Zm0 45Zm0-45Zm40 69Zm-80 0Z"/></svg>
                </div>
                <div className={styles.text}>
                    <h3>Title</h3>
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.icon}>
                <svg className={styles.img}  xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="#fff"><path d="M440-181 240-296q-19-11-29.5-29T200-365v-230q0-22 10.5-40t29.5-29l200-115q19-11 40-11t40 11l200 115q19 11 29.5 29t10.5 40v230q0 22-10.5 40T720-296L520-181q-19 11-40 11t-40-11Zm0-92v-184l-160-93v185l160 92Zm80 0 160-92v-185l-160 93v184ZM80-680v-120q0-33 23.5-56.5T160-880h120v80H160v120H80ZM280-80H160q-33 0-56.5-23.5T80-160v-120h80v120h120v80Zm400 0v-80h120v-120h80v120q0 33-23.5 56.5T800-80H680Zm120-600v-120H680v-80h120q33 0 56.5 23.5T880-800v120h-80ZM480-526l158-93-158-91-158 91 158 93Zm0 45Zm0-45Zm40 69Zm-80 0Z"/></svg>
                </div>
                <div className={styles.text}>
                    <h3>Title</h3>
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.icon}>
                <svg className={styles.img}  xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="#fff"><path d="M440-181 240-296q-19-11-29.5-29T200-365v-230q0-22 10.5-40t29.5-29l200-115q19-11 40-11t40 11l200 115q19 11 29.5 29t10.5 40v230q0 22-10.5 40T720-296L520-181q-19 11-40 11t-40-11Zm0-92v-184l-160-93v185l160 92Zm80 0 160-92v-185l-160 93v184ZM80-680v-120q0-33 23.5-56.5T160-880h120v80H160v120H80ZM280-80H160q-33 0-56.5-23.5T80-160v-120h80v120h120v80Zm400 0v-80h120v-120h80v120q0 33-23.5 56.5T800-80H680Zm120-600v-120H680v-80h120q33 0 56.5 23.5T880-800v120h-80ZM480-526l158-93-158-91-158 91 158 93Zm0 45Zm0-45Zm40 69Zm-80 0Z"/></svg>
                </div>
                <div className={styles.text}>
                    <h3>Title</h3>
                    <p>Lorem ipsum</p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.icon}>
                <svg className={styles.img}  xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="#fff"><path d="M440-181 240-296q-19-11-29.5-29T200-365v-230q0-22 10.5-40t29.5-29l200-115q19-11 40-11t40 11l200 115q19 11 29.5 29t10.5 40v230q0 22-10.5 40T720-296L520-181q-19 11-40 11t-40-11Zm0-92v-184l-160-93v185l160 92Zm80 0 160-92v-185l-160 93v184ZM80-680v-120q0-33 23.5-56.5T160-880h120v80H160v120H80ZM280-80H160q-33 0-56.5-23.5T80-160v-120h80v120h120v80Zm400 0v-80h120v-120h80v120q0 33-23.5 56.5T800-80H680Zm120-600v-120H680v-80h120q33 0 56.5 23.5T880-800v120h-80ZM480-526l158-93-158-91-158 91 158 93Zm0 45Zm0-45Zm40 69Zm-80 0Z"/></svg>
                </div>
                <div className={styles.text}>
                    <h3>Title</h3>
                    <p>Lorem ipsum</p>
                </div>
            </div>
            </div>
        </div>
    )
}