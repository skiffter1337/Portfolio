import React from 'react';
import s from './Skill.module.scss'
import {SkillsType} from "../Skills";


export const Skill = (props: SkillsType) => {
    return (
        <div className={s.skill_block}>
            <div className={s.icon_box} >
                <img src={props.image} className={s.icons}/>
            </div>
            <div>
                <h3>{props.title}</h3>
                <span className={s.skill_description}>{props.description}</span>
            </div>
        </div>
    );
};
