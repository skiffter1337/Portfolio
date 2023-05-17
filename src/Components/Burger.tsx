import React, {useState} from 'react';
import s from "./Header/Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";


export const Burger = () => {

    const [isActive, setIsActive] = useState(false)
    const activateBurger = () => {
        setIsActive(!isActive)
    }

    return (
        <>
        <div className={s.burger_wrapper}>
            <div className={s.burger_icon}>
                <button className={s.btn} onClick={activateBurger}><MenuIcon fontSize={"large"}/></button>
            </div>
        </div>
            {isActive && <div className={s.burger_menu_content}>
                <ul  className={s.burger_list} >
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
            </div>}
        </>
    );
};

