import React from 'react';
import s from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill_block}>
            <div className={s.skill_icon} >
                <i>

                </i>
            </div>
            <div className={s.skill_info}>
                <h3>{props.title}</h3>
                <span className={s.skill_description}>{props.description}</span>
            </div>
        </div>
    );
};
