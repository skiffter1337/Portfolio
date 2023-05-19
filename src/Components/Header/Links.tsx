import React from 'react';
import s from "./Header.module.scss";

type LinksPropsType = {
    classes?: string
}
export const Links: React.FC<LinksPropsType> = ({classes}) => {
    return (
        <ul className={classes}>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Main</a>
            </li>
            <li>
                <a href="">About</a>
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
    );
};

