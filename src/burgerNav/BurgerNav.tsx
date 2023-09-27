import React, {useState} from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from './BurgerNav.module.css';
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
        <div className={`${style.burgerNav} ${styleContainer.container}`}>
            <div className={style.logo}>
                <img className={style.logoPhoto} src={towedСar} alt={'logo'}/>
                <p className={style.textTyping}>
                    Эвакуатор круглосуточно 24/7</p>
            </div>
            {/*<Fade direction={"top-left"}>*/}
            <div onClick={onBurgerBtnClick} className={style.burgerBtn}>{menuIsOpen ? <img src={CloseIcon}/> :
                <img src={burgerMenu}/>}</div>
            <ul className={menuIsOpen ? `${style.linksList} ${style.show}` : style.linksList}>
                <li>
                    <Link activeClass={style.active} to="main" spy={true} smooth={true} offset={2}
                          duration={500}>Главная</Link>
                </li>
                <li>
                    <Link activeClass={style.active} to="skills" spy={true} smooth={true} offset={2}
                          duration={500}>Наши услуги</Link>
                </li>
                <li>
                    <Link activeClass={style.active} to="projects" spy={true} smooth={true} offset={2}
                          duration={500}>Цены</Link>
                </li>
                <li>
                    <Link activeClass={style.active} to="contacts" spy={true} smooth={true} offset={2}
                          duration={500}>Контакты</Link>
                </li>
            </ul>
            {/*</Fade>*/}
        </div>
    )
}