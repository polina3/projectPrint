import styles from "./register.module.css";

export default function Register(){
    return(
        <div>
            <form className={styles.form}>
                <h3 className={styles.h3}>Регистрация:</h3>
                <input className={styles.text} type="text" placeholder="ФИО"/>
                <input className={styles.email} type="email" placeholder="Почта"/>
                <input className={styles.password} type="password" placeholder="Пароль"/>
                <input className={styles.password} type="password" placeholder="Потвердите пароль"/>
                <input className={styles.btn} type="button" value="Регистрироватсья" />
            </form>
        </div>
    )
}