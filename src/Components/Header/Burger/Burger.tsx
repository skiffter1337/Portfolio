import React, {useState} from 'react';
import s from './Burger.module.scss'

import MenuIcon from "@mui/icons-material/Menu";
import {Links} from "../Links";


export const Burger = () => {

    const [isActive, setIsActive] = useState(false)
    const toggleBurger = () => setIsActive(!isActive)

     const burgerClasses = `${s.burger_menu_content} ${isActive ? s.burger_show : ""}`

    return (
        <>
        <div>
            <div className={s.burger_icon}>
                <button className={s.btn} onClick={toggleBurger}><MenuIcon fontSize={"large"}/></button>
            </div>
        </div>
           <div className={burgerClasses}>
               <Links classes={s.burger_list} toggleBurger={toggleBurger}/>
            </div>
        </>
    );
};

