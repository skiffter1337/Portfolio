import React, {useEffect, useState} from 'react';
import s from './Header.module.scss'
import logo from '../../assets/image/logoIS.png'
import {Burger} from "./Burger/Burger";
import {Links} from "./Links";

export const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    let headerStyles = scrolled ? `${s.header} ${s.header_scroll}` : `${s.header}`

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const useWindowSize = () => {

        const [windowSize, setWindowSize] = useState(0);

        useEffect(() => {
            const handleResize = () => setWindowSize(window.innerWidth)

            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }

    const size = useWindowSize()


    return (
        <div className={headerStyles}>
            <div className={s.header_container}>
                <div>
                    <a>
                        <img src={logo}/>
                    </a>
                </div>
                {size < 1230 ?
                <Burger/>
                    :
                <nav>
                    <Links classes={s.nav_list}/>
                </nav>
                }
            </div>
        </div>
    );
};

