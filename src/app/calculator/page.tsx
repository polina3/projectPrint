import styles from "./calculator.module.scss"

export default function Calculator(){
    return(
        <div className={styles.formContainer}>
        <div className={styles.formSection}>
          <h2>Заполните форму:</h2>
          <form>
              <input className={styles.inputElement} type="text" placeholder="ФИО"/>
              <input className={styles.inputElement} type="email" placeholder="Почта"/>
              <input className={styles.inputElement} type="tel" placeholder="Телефон"/>
              <input className={styles.inputElement} type="file" />
          </form>
        </div>
        <div className={styles.formSection}>
          <h2>Выбор материалов и места:</h2>
          <form>
              <select className={styles.inputElement}>
                <option>Выберите материал:</option>
                <option>PLA</option>
                <option>ABS</option>
                <option>Нейлон</option>
                <option>Резина</option>
                <option>Металл</option>
              </select>
              <select className={styles.inputElement}>
                <option>Выберите место:</option>
                <option>Barcelona, Spain</option>
              </select>
              <select className={styles.inputElement}>
                <option>Выберите размер:</option>
                <option>Большой</option>
                <option>Средний</option>
                <option>Маленкий</option>
              </select>
            <button className={styles.button} type="submit">Оплатить</button>
          </form>
        </div>
      </div>
    )
}