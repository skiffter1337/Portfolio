import React from 'react';
import s from './Skill.module.scss'
import {SkillsType} from "../Skills";
import { Tilt } from 'react-tilt'


export const Skill = (props: SkillsType) => {

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
        <Tilt options={defaultOptions} className={s.tilt}>
            <div
                className={s.skill_block}
                data-aos="fade-up"
                data-aos-delay={props.aosDelay}
            >
                <div className={s.icon_box}>
                    <img src={props.image} className={s.icons}/>
                </div>
                <div>
                    <h3>{props.title}</h3>
                    <span className={s.skill_description}>{props.description}</span>
                </div>
            </div>
        </Tilt>

    );
};
