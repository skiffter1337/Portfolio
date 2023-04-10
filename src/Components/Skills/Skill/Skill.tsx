import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div><img className={s.icon} src={"https://placehold.co/60x60"} alt={"skill icon"}/></div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};
