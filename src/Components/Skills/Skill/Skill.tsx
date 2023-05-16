import React from 'react';
import s from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
    img: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill_block}>
            <div className={s.icon_box} >
                <img src={props.img} className={s.icons}/>
            </div>
            <div className={s.skill_info}>
                <h3>{props.title}</h3>
                <span className={s.skill_description}>{props.description}</span>
            </div>
        </div>
    );
};
