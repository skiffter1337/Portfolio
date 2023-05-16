import React from 'react';
import s from './Header.module.css'
import logo from '../../assets/image/logoIS.png'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header_container}>
            <div>
                <a>
                    <img src={logo}/>
                </a>
            </div>
            <nav className={s.nav_container}>
                <div>
                    <ul className={s.nav_list}>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Main</a>
                        </li>
                        <li>
                            <a href="">About me</a>
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
            </nav>
            </div>
        </div>
    );
};

