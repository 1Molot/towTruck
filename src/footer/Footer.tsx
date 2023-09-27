import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";
import React from "react";
import {Title} from "../common/components/Title/Title";
import viber from "../assets/img/viber.svg";
import whatsapp from "../assets/img/whatsapp.svg";
import Telegram from "../assets/img/Telegram.svg";
import Instagram from "../assets/img/Instagram.svg";
import {Reveal} from "../common/components/Reveal/Reveal";


export const Footer = () => {

    const iconFooter = [{
        img: `${viber}`,
        link: 'viber://chat?number=%2B375256444333',
        alt: 'viber'
    }, {
        link: 'https://wa.me/80256444333',
        img: `${whatsapp}`,
        alt: 'whatsapp'
    }, {
        link: 'https://t.me/Pavel_kuzniatou',
        img: `${Telegram}`,
        alt: 'Telegram'
    }, {
        link: 'https://www.instagram.com/evakuatorzhlobin/',
        img: `${Instagram}`,
        alt: 'Instagram'
    }]

    return (
        <footer className={style.footerBlock}>
            <Reveal>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title text={'Мы в социальных сетях'}/>
                <ul className={style.footersCentre}>
                    {
                        iconFooter.map((el, index) => {
                            return (
                                <li key={index}>
                                    <a target={'_blank'} href={el.link}>
                                        {/*{el.Title}*/}
                                        <img style={{width: 80, height: 50}} src={el.img} alt={el.alt}/>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <p className={style.rights}>©2023 All rights reserved</p>
            </div>
                </Reveal>
        </footer>
    )
}