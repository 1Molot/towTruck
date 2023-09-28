import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from './Nav.module.css';
import towedСar from "../assets/img/towedСar.png";
import {Link} from "react-scroll";
import {Reveal} from "../common/components/Reveal/Reveal";


export const Nav = () => {

    return (
        <div className={`${style.nav} ${styleContainer.container}`}>
            <div className={style.logo}>
                <img className={style.logoPhoto} src={towedСar} alt={'logo'}/>
                <p className={style.textTyping}>+375256444333</p>
            </div>
            <Reveal>
            <ul className={style.linksList}>
                <Link activeClass={style.active} to="main" spy={true} smooth={true} offset={2}
                      duration={500}>Главная</Link>
                <Link activeClass={style.active} to="skills" spy={true} smooth={true} offset={2}
                      duration={500}>Наши услуги</Link>
                <Link activeClass={style.active} to="projects" spy={true} smooth={true} offset={2}
                      duration={500}>Цены</Link>
                <Link activeClass={style.active} to="contacts" spy={true} smooth={true} offset={2}
                      duration={500}>Контакты</Link>
            </ul>
            </Reveal>
        </div>
    )
}