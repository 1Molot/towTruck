import React from 'react';
import s from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css'
import {Project} from "./Project/Project";
import {Title} from "../common/components/Title/Title";
import Evo1 from "../assets/img/Evo1.jpg";
import Evo2 from "../assets/img/Evo2.jpg";
import Evo3 from "../assets/img/Evo3.jpg";
import autoHelp from "../assets/img/autoHelp.png";

export const Projects = () => {

    const projects = [{
        title: 'Грузоперевозки',
        description: 'От 30р',
        img: `${Evo1}`,
        alt: 'Evo1'
    },
        {
            title: 'Внедорожная перевозка',
            description: 'От 60р',
            img: `${Evo2}`,
            alt: 'Evo2'
        }, {
            title: 'Легковая перевозка',
            description: 'От 60р',
            img: `${Evo3}`,
            alt: 'Evo3'
        }, {
            title: 'Авто-помощь',
            description: 'Цена Договорная',
            img: `${autoHelp}`,
            alt: 'autoHelp'
        }]

    return (
        <section id="projects" className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={'ЭВАКУАТОР ЖЛОБИН - ПРОФИ ПО ДОСТУПНОЙ ЦЕНЕ'}/>
                <div className={s.skills}>
                    {projects.map((el, index) => <Project
                        key={index}
                        img={el.img} alt={el.alt} title={el.title} description={el.description}/>)}
                </div>
            </div>

        </section>
    )
}
