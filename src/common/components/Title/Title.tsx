import React from 'react';
import s from './Title.module.css';

type titleProps = {
    text?: string
}

export const Title = ({text}:titleProps) => {

    return (
        <div className={s.title}>
            <h2>{text}</h2>
        </div>
    )
}
