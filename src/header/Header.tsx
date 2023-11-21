import React from 'react';
import s from './Header.module.css';
import {Nav} from "../nav/Nav";
import {BurgerNav} from "../burgerNav/BurgerNav";

export const Header = () => {

    return (
        <header className={s.header}>
            <Nav/>
            <BurgerNav/>
        </header>
    )
}
