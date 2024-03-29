import React from 'react';
import s from './Main.module.scss'
import ME from './../../assets/image/me.jpg'
import {Button} from "../../common/components/Button/Button";
import MAIN1 from '../../assets/particles/main/main-element-1G.png'
import MAIN2 from '../../assets/particles/main/main-element-2.png'
import MAIN3 from '../../assets/particles/main/main-element-3G.png'
import MAIN4 from '../../assets/particles/main/main-element-4G.png'
import MAIN5 from '../../assets/particles/main/main-element-5.png'
import {Socials} from "../../common/components/Socials/Socials";
import ReactTypingEffect from 'react-typing-effect';
import { Tilt } from 'react-tilt'
import {Link} from "react-scroll";
import KEKS from './../../assets/image/keks.jpg'




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
                            <Link
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                to={'contacts'}
                            >
                                <Button title={"contact me"}/>
                            </Link>
                        </div>
                        <div>
                            <Socials/>
                        </div>
                    </div>
                </div>
                    <Tilt options={defaultOptions} className={s.tilt}>
                        <div>
                            <img src={KEKS} alt={"Ilya Shulapov"} className={s.photo}/>
                        </div>
                    </Tilt>
            </div>
            <div className={s.design_element}>
                <img className={`${s.de_main1} ${s.elem_updown}`} src={MAIN1} alt={"particle"}/>
                <img className={`${s.de_main2} ${s.elem_move}`} src={MAIN2} alt={"particle"}/>
                <img className={`${s.de_main3} ${s.elem_updown}`} src={MAIN3} alt={"particle"}/>
                <img className={`${s.de_main4} ${s.elem_updown}`} src={MAIN4} alt={"particle"}/>
                <img className={`${s.de_main5} ${s.elem_move}`} src={MAIN5} alt={"particle"}/>
            </div>
        </section>
    );
};
