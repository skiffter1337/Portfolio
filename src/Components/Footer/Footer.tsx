import React from 'react';
import s from './Footer.module.scss'
import {Socials} from "./Socials/Socials";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <div className={s.footer_title}>
                    <span>
                        Ilya Shulapov
                    </span>
                    <span>
                        Frontend developer
                    </span>
                </div>
                <Socials/>
                <div>
                    <span>© 2023 all rights reserved</span>
                </div>
            </div>
        </div>
    );
};
