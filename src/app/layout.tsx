import type { Metadata } from "next";
import styles from "./layout.module.scss";
import './globals.scss'
import Script from 'next/script'
import Link from "next/link"; 
import {montserrat} from '../constant/fonts'
import Button from "@/components/Button/Button";
import Select from "@/components/Select/Select";


export const metadata: Metadata = {
  title: "INSTANT FORGE PRO"
};

type TypeProps = {
  children: React.ReactNode
}

export default function RootLayout(props: TypeProps) {
  return (
    <html lang="en">
      <body className={`${styles.all} ${montserrat.variable}` }>
        <div className={styles.header_box}>
          <header className={styles.header}>
            <nav>
              <ul className={styles.ul}>
                <li><Link className={styles.nav_link} href="/">Главная</Link></li>
                <li><Link className={styles.nav_link} href="/about">О нас</Link></li>
                <li><Link className={styles.nav_link} href="/where">Где забрать</Link></li>
                <li><Link className={styles.nav_link} href="/services">Услуги</Link></li>
                <li><Link className={styles.nav_link} href="/calculator">Калькулятор</Link></li>
              </ul>
            </nav>
            <div className={styles.rightSide} >
            <p>languages are not connected -&gt;</p>
              <div className={styles.language}>
                <span>RU</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </div>
              <Button type='link' variant='primary' href="calculator" >Заказать</Button>
              <Button type='link' variant='default' href="register" >Регистрироваться</Button>
              <Button type='link' variant='default' href="login" >Войти</Button>
            </div>
          </header>
        </div>
        <main>
          {props.children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
