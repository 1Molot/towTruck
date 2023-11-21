import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import s from './Nav.module.css';
import towedСar from "../assets/img/towedСar.png";
import {Link} from "react-scroll";
import {Reveal} from "../common/components/Reveal/Reveal";

export const Nav = () => {

    return (
        <div className={`${s.nav} ${styleContainer.container}`}>
            <div className={s.logo}>
                <img className={s.logoPhoto} src={towedСar} alt={'logo'}/>
                <p className={s.textTyping}>+375256444333</p>
            </div>
            <Reveal>
            <ul className={s.linksList}>
                <Link activeClass={s.active} to="main" spy={true} smooth={true} offset={2}
                      duration={500}>Главная</Link>
                <Link activeClass={s.active} to="skills" spy={true} smooth={true} offset={2}
                      duration={500}>Наши услуги</Link>
                <Link activeClass={s.active} to="projects" spy={true} smooth={true} offset={2}
                      duration={500}>Цены</Link>
                <Link activeClass={s.active} to="contacts" spy={true} smooth={true} offset={2}
                      duration={500}>Контакты</Link>
            </ul>
            </Reveal>
        </div>
    )
}
