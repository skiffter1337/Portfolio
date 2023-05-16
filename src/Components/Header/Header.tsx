import React, {useEffect, useState} from 'react';
import s from './Header.module.css'
import logo from '../../assets/image/logoIS.png'
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {

    const [scrolled, setScrolled] = useState(false);

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

    let headerStyles = scrolled ? `${s.header} ${s.header_scroll}` : `${s.header}`

    return (
        <div className={headerStyles}>
            <div className={s.header_container}>
                <div>
                    <a>
                        <img src={logo}/>
                    </a>
                </div>
                <div className={s.burger_wrapper}>
                    <div className={s.burger_icon}>
                      <MenuIcon fontSize={"large"}/>
                    </div>
                </div>
                <nav className={s.nav_container}>
                    <div>
                        <ul className={s.nav_list}>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Main</a>
                            </li>
                            <li>
                                <a href="">About me</a>
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
                    </div>
                </nav>
            </div>
        </div>
    );
};

