import React from 'react';
import s from './HireMe.module.scss'
import {Button} from "../../common/components/Button/Button";
import {Link} from "react-scroll";

export const HireMe = () => {
    return (
        <div className={s.hireMeBlock}>
            <div className={s.hireMeContainer}>
                <h2>I am looking for remote work</h2>
                <Link
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    to={'contacts'}
                >
                    <Button title={"hire me"}/>
                </Link>
            </div>
        </div>
    );
};
