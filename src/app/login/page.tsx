import styles from "./login.module.scss";

export default function Login(){
    return(
            <form className={styles.loginForm}>
                <label className={styles.label}>Вход:</label>
                <input type="email" className={styles.input} placeholder="Почта" />
                <input type="password" className={styles.input} placeholder="Пароль" />
                <button className={styles.button}><a className={styles.a} href="/account">Войти</a></button>
            </form>
    )
}