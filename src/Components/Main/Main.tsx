import React from 'react';
import s from './Main.module.css'
import styleContainer from './../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
            <div className={s.greeting}>
                <span>Hello</span>
                <h1>My name is Lorem Ipsum</h1>
                <p>I am frontend developer</p>
            </div>
            <div className={s.photo}><img src={"https://placehold.co/300x400"} alt={"main photo"}/></div>
            </div>
        </div>
    );
};
