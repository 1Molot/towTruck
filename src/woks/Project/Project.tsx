import React from 'react';
import s from './Project.module.css';
import {Reveal} from "../../common/components/Reveal/Reveal";

export type WorkProps = {
    title: string
    description: string
    img: string | undefined
    alt: string
}

export const Project = ({title, img, alt, description}: WorkProps) => {

    return (
        <Reveal>
            <div className={s.work}>
                <div className={s.imageWrapper}>
                    <img className={s.photo} src={img} alt={alt}/>
                    <div className={s.background}/>
                </div>
                <div className={s.workInfo}>
                    <h3 className={s.workTitle}>{title}</h3>
                    <p className={s.workDescription}>{description}</p>
                </div>
            </div>
        </Reveal>
    )
}
