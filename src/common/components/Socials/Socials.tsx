import React from 'react';
import s from './Socials.module.css';
import { ReactComponent as TelegramIcon } from '../../../assets/socials/telegram-plane.svg';
import { ReactComponent as LinkedinIcon } from '../../../assets/socials/linkedin-in.svg';
import { ReactComponent as WhatsappIcon } from '../../../assets/socials/whatsapp.svg';
import { ReactComponent as GitHubIcon } from '../../../assets/socials/github.svg';

export const Socials = () => {
    return (
        <div className={s.socialsLinks}>
            <div>
                <a href="https://t.me/break_the_rules_eat_mushrooms" target="_blank">
                    <TelegramIcon className={s.telegramIcon} />
                </a>
            </div>
            <div>
                <a href="https://github.com/skiffter1337" target="_blank">
                    <GitHubIcon className={s.gitIcon} />
                </a>
            </div>
            <div>
                <a href="#" target="_blank">
                    <LinkedinIcon className={s.linkedinIcon} />
                </a>
            </div>
            <div>
                <a href="https://wa.me/+79644923399" target="_blank">
                    <WhatsappIcon className={s.whatsappIcon} />
                </a>
            </div>
        </div>
    );
};
