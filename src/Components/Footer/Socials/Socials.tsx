import React from 'react';
import s from './Socials.module.css';
import { ReactComponent as TelegramIcon } from './../../../assets/socials/telegram-plane.svg';
import { ReactComponent as FacebookIcon } from './../../../assets/socials/facebook-f.svg';
import { ReactComponent as LinkedinIcon } from './../../../assets/socials/linkedin-in.svg';
import { ReactComponent as WhatsappIcon } from './../../../assets/socials/whatsapp.svg';

export const Socials = () => {
    return (
        <div className={s.socialsLinks}>
            <div>
                <a href="#">
                    <TelegramIcon className={s.telegramIcon} />
                </a>
            </div>
            <div>
                <a href="#">
                    <FacebookIcon className={s.fbIcon} />
                </a>
            </div>
            <div>
                <a href="#">
                    <LinkedinIcon className={s.linkedinIcon} />
                </a>
            </div>
            <div>
                <a href="#">
                    <WhatsappIcon className={s.whatsappIcon} />
                </a>
            </div>
        </div>
    );
};
