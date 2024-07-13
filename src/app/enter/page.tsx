import styles from "./enter.module.css";

export default function Enter(){
    return(
        <div>
            <form className={styles.form}>
                <h3 className={styles.h3}>Вход:</h3>
                <input className={styles.email} type="email" placeholder="Почта"/>
                <input className={styles.password} type="password" placeholder="Пароль"/>
                <input className={styles.btn} type="button" value="Войти" />
            </form>
        </div>
    )
}