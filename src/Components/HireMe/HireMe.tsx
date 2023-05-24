import React from 'react';
import s from './HireMe.module.scss'
import {Button} from "../../common/components/Button/Button";

export const HireMe = () => {
    return (
        <div className={s.hireMeBlock}>
            <div className={s.hireMeContainer}>
                <h2>I am looking for remote work</h2>
                <Button title={"hire me"}/>
            </div>
        </div>
    );
};
