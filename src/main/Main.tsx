import React from 'react';
import s from './Main.module.css';
import mainFoto from "../assets/img/main.jpg";

export const MainInform = () => {

    return (
        <section id="main" className={s.mainBlock}>
            <div className={s.mainFoto}>
                <img
                    src={mainFoto}
                    alt={'mainFoto'}
                />
            </div>
        </section>
    )
}
