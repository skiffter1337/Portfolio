import React, {useState} from 'react';
import s from './Main.module.scss'
import KEKS_MAIN from './../../assets/image/keks_main.jpg'
import {Button} from "../../common/components/Button/Button";
import MAIN1 from '../../assets/particles/main/main-element-1.png'
import MAIN2 from '../../assets/particles/main/main-element-2.png'
import MAIN3 from '../../assets/particles/main/main-element-3.png'
import MAIN4 from '../../assets/particles/main/main-element-4.png'
import MAIN5 from '../../assets/particles/main/main-element-5.png'
import {Socials} from "../Footer/Socials/Socials";
import ReactTypingEffect from 'react-typing-effect';
import { Tilt } from 'react-tilt'





export const Main = () => {


    const defaultOptions = {
        reverse:        false,
        max:            25,
        perspective:    1000,
        scale:          1,
        speed:          1000,
        transition:     true,
        axis:           null,
        reset:          true,
        easing:         "cubic-bezier(.03,.98,.52,.99)",
    }
    return (
        <section className={s.main_block} id={"home"}>
            <div className={s.main_container}>
                <div className={s.greeting}>
                    <h1>
                        <div className={s.small}>Hello, I'm</div>
                        Ilya
                        <div className={s.strong}>Shulapov</div>
                    </h1>
                    <div className={s.techsBlock}>
                        <p>I develop websites using...</p>
                        <div className={s.typingEffect}>
                            <ReactTypingEffect
                                text={["React.", "Redux.", "TypeScript."]}
                            />
                        </div>
                   </div>
                    <div className={s.button_container}>
                        <div>
                            <Button title={"contact me"}/>
                        </div>
                        <div>
                            <Socials/>
                        </div>
                    </div>
                </div>
                    <Tilt options={defaultOptions}>
                        <div className={s.photo_block}>
                            <img src={KEKS_MAIN} alt={"Ilya Shulapov"} className={s.photo}/>
                        </div>
                    </Tilt>
            </div>
            <div className={s.design_element}>
                <img className={`${s.de_main1} ${s.elem_updown}`} src={MAIN1}/>
                <img className={`${s.de_main2} ${s.elem_move}`} src={MAIN2}/>
                <img className={`${s.de_main3} ${s.elem_updown}`} src={MAIN3}/>
                <img className={`${s.de_main4} ${s.elem_updown}`} src={MAIN4}/>
                <img className={`${s.de_main5} ${s.elem_move}`} src={MAIN5}/>
            </div>
        </section>
    );
};
