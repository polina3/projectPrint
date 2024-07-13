import type { Metadata } from "next";
import styles from "./layout.module.scss";
import First from "./first/page";
import Script from 'next/script'

export const metadata: Metadata = {
  title: "INSTANT FORGE PRO"
};

type TypeProps = {
  children: React.ReactNode
}

export default function RootLayout(props: TypeProps) {
  return (
    <html lang="en">
      <body className={styles.all}>
        <div className={styles.header_box}> 
          <header className={styles.header}>
                <ul className={styles.ul}>
                  <li className={styles.li}><a className={styles.a} href="/first">Главная</a></li>
                  <li className={styles.li}><a className={styles.a} href="/about">О нас</a></li>
                  <li className={styles.li}><a className={styles.a} href="/where">Где забрать</a></li>
                  <li className={styles.li}><a className={styles.a} href="/services">Услуги</a></li>
                  <li className={styles.li}><a className={styles.a} href="/calculator">Калькулятор</a></li>
                </ul>
                <div className={styles.rightSide} >
                  <div className={styles.language}>
                    <span>RU</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                  </div>
                  <button className={styles.btnBuy}>Заказать</button>
                  <button className={styles.btnLogin}>Вход</button>
                </div>
          </header>
        </div>
        <main>
          {props.children}
        </main>
        <footer></footer>
        <>
          <Script src="./script.js" />
        </>
      </body>
    </html>
  );
}
