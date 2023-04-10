import React from 'react';
import s from './Skills.module.css'
import {Skill} from './Skill/Skill';
import styleContainer from './../../common/styles/Container.module.css'

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2>My skills</h2>
                <div className={s.skills}>
                    <Skill title={"skill"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
                    <Skill title={"skill"}
                           description={"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                    <Skill title={"skill"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>

                </div>
            </div>
        </div>
    );
};

