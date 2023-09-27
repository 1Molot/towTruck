import React from 'react';
import style from './Remote.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/Title/Title";
import phone from "../assets/img/phone.svg"

export const Remote = () => {

    return (
        <section id="contacts" className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <Title text={'Позвонить нам'}/>
                <span className={style.remoBtn}>
                        <a href="tel:+375256444333" rel="noopener noreferrer" target="_blank"><img src={phone} alt="Phone"/></a>
                </span>
            </div>
        </section>
)
}