import React from 'react';
import s from './Main.module.scss'
import KEKS_MAIN from './../../assets/image/keks_main.jpg'
import {Button} from "../../common/components/Button/Button";


export const Main = () => {
    return (
        <section className={s.main_block}>
            <div className={s.main_container}>
            <div className={s.greeting}>
                <h1>
                    <div className={s.small}>Hello, I'm</div>
                    Ilya
                    <div className={s.strong}>Shulapov</div>
                </h1>

                <p>I develop websites using...</p>
                <div>
                    <p>
                        {"             "}
                    </p>
                </div>
                <div className={s.button_container}>
                    <Button title={"contact me"}/>
                </div>
            </div>
            <div className={s.photo_block}>
                <img src={KEKS_MAIN} alt={"main photo"} className={s.photo}/>
            </div>
            </div>
        </section>
    );
};
