import React from 'react';
import s from './Socials.module.css'
import telegram from './../../../assets/image/telegram.svg'
import facebook from './../../../assets/image/facebook.svg'
import linkedin from './../../../assets/image/in.svg'
import whatsapp from './../../../assets/image/whatsapp.svg'

export const Socials = () => {
    return (
        <div className={s.socialsLinks}>
            <div><a><img src={telegram}/></a></div>
            <div><a><img src={facebook}/></a></div>
            <div><a><img src={linkedin}/></a></div>
            <div><a><img src={whatsapp}/></a></div>
        </div>
    );
};

