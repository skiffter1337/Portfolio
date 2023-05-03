import React from 'react';
import s from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div className={s.nav_container}>
            <ul className={s.nav_list}>
                <li>
                    <a href="">Main</a>
                </li>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Contacts</a>
                </li>
            </ul>
        </div>
    );
};
