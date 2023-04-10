import React from 'react';
import s from './Footer.module.css'
import styleContainer from './../../common/styles/Container.module.css'
import {Socials} from "./Socials/Socials";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2>Lorem Ipsum</h2>
                <Socials/>
                <span>© 2023 all rights reserved</span>
            </div>
        </div>
    );
};
