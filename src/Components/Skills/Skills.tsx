import React from 'react';
import s from './Skills.module.scss'
import {Skill} from './Skill/Skill';
import styleContainer from './../../common/styles/Container.module.css'
import {Title} from "../../common/components/Title/Title";

export const Skills = () => {
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title>My skills</Title>
                <div className={s.skills}>
                    <Skill title={"React"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
                    <Skill title={"Redux"}
                           description={lorem}/>
                    <Skill title={"TypeScript"}
                           description={lorem}/>
                    <Skill title={"JavaScript"}
                           description={lorem}/>
                    <Skill title={"skill"}
                           description={lorem}/>

                </div>
            </div>
        </div>
    );
};


