import React, {useState} from 'react';
import styleContainer from "../common/styles/Container.module.css";
import s from './BurgerNav.module.css';
import towedСar from "../assets/img/towedСar.png";
import {Link} from "react-scroll";
import burgerMenu from ".././assets/img/burgerMenu.svg";
import CloseIcon from ".././assets/img/CloseIcon.svg";


export const BurgerNav = () => {

    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    let onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div className={`${s.burgerNav} ${styleContainer.container}`}>
            <div className={s.logo}>
                <img className={s.logoPhoto} src={towedСar} alt={'logo'}/>
                <p className={s.textTyping}>
                    +375256444333</p>
            </div>
            <div onClick={onBurgerBtnClick} className={s.burgerBtn}>{menuIsOpen ? <img src={CloseIcon}/> :
                <img src={burgerMenu}/>}</div>
            <ul className={menuIsOpen ? `${s.linksList} ${s.show}` : s.linksList}>
                <li>
                    <Link activeClass={s.active} to="main" spy={true} smooth={true} offset={2}
                          duration={500}>Главная</Link>
                </li>
                <li>
                    <Link activeClass={s.active} to="skills" spy={true} smooth={true} offset={2}
                          duration={500}>Наши услуги</Link>
                </li>
                <li>
                    <Link activeClass={s.active} to="projects" spy={true} smooth={true} offset={2}
                          duration={500}>Цены</Link>
                </li>
                <li>
                    <Link activeClass={s.active} to="contacts" spy={true} smooth={true} offset={2}
                          duration={500}>Контакты</Link>
                </li>
            </ul>
        </div>
    )
}
