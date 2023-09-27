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
                <ul className={style.remoBtn}>
                    <li>
                        <a href="tel:80256444333" type={"phone"} target="_blank"><img src={phone}/></a>
                    </li>
                </ul>
            </div>
        </section>
)
}