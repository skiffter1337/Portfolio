import React, {useState} from 'react';
import s from "./Header.module.scss";
import {Link} from "react-scroll";

type LinksPropsType = {
    classes?: string
    toggleBurger?: () => void
}
type LinksType = {
    title: string
    to: string
    linksSettings: LinksSettingsType

}
type LinksSettingsType = {
    activeClass: string
    isSpy: boolean
    isSmooth: boolean
    offSet: number
    duration: number
    onClick: () => void
}
export const Links: React.FC<LinksPropsType> = ({classes, toggleBurger}) => {


    const handleClick = () => {
        if(toggleBurger) toggleBurger()
    }

    const linksSettings = {
        activeClass: s.active,
        isSpy: true,
        isSmooth: true,
        offSet: -70,
        duration: 1000,
        onClick: () => {},
    }
    const links: LinksType[] = [
        {
            title: "Home",
            to: 'home',
            linksSettings
        },
        {
            title: "About",
            to: 'about',
            linksSettings
        },
        {
            title: "Skills",
            to: 'skills',
            linksSettings
        },
        {
            title: "Projects",
            to: 'projects',
            linksSettings
        },
        {
            title: "Contacts",
            to: 'contacts',
            linksSettings

        }
    ]


    const mappedLinks = links.map(l =>  {
        return <li>
            <Link
                activeClass={l.linksSettings.activeClass}
                spy={l.linksSettings.isSpy}
                smooth={l.linksSettings.isSmooth}
                offset={l.linksSettings.offSet}
                duration={l.linksSettings.duration}
                to={l.to}
                onClick={handleClick}
            >{l.title}</Link>
        </li>
    })

    return (
        <ul className={classes}>
            {mappedLinks}
        </ul>
    );
};

