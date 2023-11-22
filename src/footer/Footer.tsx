import s from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";
import React from "react";
import {Title} from "../common/components/Title/Title";
import viber from "../assets/img/viber.svg";
import whatsapp from "../assets/img/whatsapp.svg";
import Telegram from "../assets/img/Telegram.svg";
import Instagram from "../assets/img/Instagram.svg";
import vk from "../assets/img/vk.svg";
import {Reveal} from "../common/components/Reveal/Reveal";

export const Footer = () => {

    const iconFooter = [{
        img: `${viber}`,
        link: 'viber://chat?number=%2B375296924577',
        alt: 'viber'
    }, {
        link: 'https://wa.me/+375296924577',
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
    }, {
        link: 'https://vk.com/evakuatorzhlobin375256444333',
        img: `${vk}`,
        alt: 'vk'
    }]

    return (
        <footer className={s.footerBlock}>
            <Reveal>
                <div className={`${styleContainer.container} ${s.footerContainer}`}>
                    <Title text={'Мы в социальных сетях'}/>
                    <ul className={s.footersCentre}>
                        {
                            iconFooter.map((el, index) => {
                                return (
                                    <li key={index}>
                                        <a target={'_blank'} href={el.link}>
                                            <img style={{width: 80, height: 50}} src={el.img} alt={el.alt}/>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Title/>
                    <p className={s.rights}>ИП Кузнецов П.С. <br/>УНП 491466505</p>
                </div>
            </Reveal>
        </footer>
    )
}
