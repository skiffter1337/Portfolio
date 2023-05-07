import React from 'react';
import s from './HireMe.module.scss'
import styleContainer from './../../common/styles/Container.module.css'
export const HireMe = () => {
    return (
        <div className={s.hireMeBlock}>
            <div className={`${styleContainer.container} ${s.hireMeContainer}`}>
                <h2>I am looking for remote work</h2>
                <button>Hire me</button>
            </div>
        </div>
    );
};
