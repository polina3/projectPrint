'use client';

import { ChangeEvent, useMemo, useState } from "react";
import styles from "./register.module.css";
import axios from "axios";

const iniForm = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    country: '',
    city: '',
}

export default function Register() {
    const [dataForm, setDataForm] = useState(iniForm)

    const handleSetDataForm = (e: ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target
        setDataForm({
            ...dataForm,
            [name]: value
        })
    }

    const valid = useMemo(() => {
        let f = true
        Object.values(dataForm).forEach(el => {
            if (el == '' && f) {
                f = !f
            }
        })
        return f;
    }, [dataForm])

    const handleSubmit = async () => {

        try {
            const response = await axios.post('http://31.128.44.66:3003/api/users/create/', dataForm, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            console.log('Успех:', response);
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    return (
        <div>
            <div className={styles.registerForm}>
                <label className={styles.label}>Регистрация:</label>
                <input className={styles.input} name="first_name" onChange={handleSetDataForm} type="text" placeholder="Имя" />
                <input className={styles.input} name="last_name" onChange={handleSetDataForm} type="text" placeholder="Фамилия" />
                <input className={styles.input} name="email" onChange={handleSetDataForm} type="email" placeholder="Почта" />
                <input className={styles.input} name="password" onChange={handleSetDataForm} type="password" placeholder="Пароль" />
                <input className={styles.input} name="country" onChange={handleSetDataForm} type="text" placeholder="Страна" />
                <input className={styles.input} name="city" onChange={handleSetDataForm} type="text" placeholder="Город" />
                {/* <input className={styles.input} type="password" placeholder="Потвердите пароль"/> */}
                <button className={styles.button} disabled={!valid} onClick={handleSubmit}>Регистрироваться</button>
            </div>
        </div>
    )
}