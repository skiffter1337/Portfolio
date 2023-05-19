import React from 'react';
import s from './Skills.module.scss'
import {Skill} from './Skill/Skill';
import styleContainer from './../../common/styles/Container.module.css'
import {Title} from "../../common/components/Title/Title";
import ts from "../../assets/image/ts.svg"
import react from "../../assets/image/react.svg"
import redux from "../../assets/image/redux.svg"

export type SkillsType = {
    title: string
    description: string
    image: string
}

export const Skills = () => {
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"

    const skills: SkillsType[] = [
        {
            title: "React",
            description: lorem,
            image: react
        },
        {
            title: "Redux",
            description: lorem,
            image: redux
        },
        {
            title: "TypeScript",
            description: lorem,
            image: ts
        },
        {
            title: "JavaScript",
            description: lorem,
            image: ts
        }
    ]

    const mappedSkills = skills.map((s, i) => <Skill key={i} title={s.title} description={s.description} image={s.image}/>)

    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title>My skills</Title>
                <div className={s.skills}>
                    {mappedSkills}
                </div>
            </div>
        </div>
    );
};


