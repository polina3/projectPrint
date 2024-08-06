import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.wallContainer}>
      <div className={styles.overlayer}>
        <h1 className={styles.h1}>Instant Forge Pro</h1>
        <h2 className={styles.h2}>Глобальная платформа для 3D-печати!</h2>
        <p className={styles.p}>
          С Instant Forge Pro вы можете легко создавать, персонализировать <br /> и печатать свои 3D проекты. Наша платформа включает в себя инновации, как никогда ранее, и делает доступными для всех.
        </p>
      </div>
    </div>
      <div className={styles.blocksContainer}>
        <h2 className={styles.title}>Основные функции</h2>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <img  className={styles.img} src="/images/earthwall.png" alt="Diversified Payment Methods" />
            <h3  className={styles.h3}>Диверсифицированные способы оплаты</h3>
            <p  className={styles.p}>Принимайте платежи с использованием Mastercard, Visa, American Express и других. Мы обеспечиваем безопасность и удобство обработки платежей для вашей уверенности и удобства.</p>
          </div>
          <div className={styles.card}>
            <img  className={styles.img} src="/images/marswall.png" alt="Personalized Location Picker" />
            <h3>Персонализированный выбор отметок</h3>
            <p>Выбирайте ваше местоположение и предпочтения для путешествий, включая предпочтительную страну, район и многие другие. Наша система рекомендаций поможет вам находить лучшие места на основе выбранных параметров.</p>
          </div>
          <div className={styles.card}>
            <img  className={styles.img} src="/images/lunawall.png" alt="Extended Tracking Features"  />
            <h3>Расширенные функции отслеживания</h3>
            <p>Отслеживайте статус и местоположение ваших заказов с помощью номера отслеживания и/или QR-кода. Получайте подробные отчеты и уведомления в реальном времени через нашу систему и оперативно реагируйте при необходимости.</p>
          </div>
        </div>
      </div>
    </>
  );
}
