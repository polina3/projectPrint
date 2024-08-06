import styles from "./account.module.scss";

export default function Account(){
    return(
        <div className="all">
                    <div className={styles.profile}>
            <div className={styles.avatar}>ПС</div>
                <div className={styles.info}>
                    <h2 className={styles.h2} >Полина Супран</h2>
                    <a className={styles.a}  href="">Изменить профиль</a>
                    <ul className={styles.ul} >
                        <li className={styles.li1}  >Личная информация</li>
                        <li className={styles.li}  >Главная</li>
                        <li className={styles.li}  >Способы оплаты</li>
                        <li className={styles.li}  >Баланс средств</li>
                        <li className={styles.li}  >Заказы</li>
                        <li className={styles.li}  >Купленные товары</li>
                    </ul>
                </div>
        </div>
        <div className={styles.order}>
            <div className={styles.header}>
                <span>Заказ от 11 мая</span>
                <span>Оплачено 3 787€</span>
            </div>
            <div className={styles.details}>
                <span>123456789-101112</span>
                <span>Доставка в пункт выдачи</span>
                <span>Дата доставки: 15 мая</span>
            </div>
            <button >Оценить товар</button>
        </div> 
        <div className={styles.order}>
            <div className={styles.header}>
                <span>Заказ от 11 мая</span>
                <span>Оплачено 3 787€</span>
            </div>
            <div className={styles.details}>
                <span>123456789-101112</span>
                <span>Доставка в пункт выдачи</span>
                <span>Дата доставки: 15 мая</span>
            </div>
            <button >Оценить товар</button>
        </div> 
            <div className={styles.ordersInProgress}>
                    <h2>Заказы в ожидании</h2>
                    <div className={styles.steps}>
                    <div>Lorem</div>
                    <div>Lorem</div>
                    <div className={styles.active}>Lorem</div>
                    <div>Lorem</div>
                </div>
                <div className={styles.contents}>
                    <div>Video LIVE</div>
                    <div>Final Result</div>
                </div>
            </div>
        </div>
    )
}