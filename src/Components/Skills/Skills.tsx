import React from 'react';
import s from './Skills.module.scss'
import {Skill} from './Skill/Skill';
import {Title} from "../../common/components/Title/Title";
import react from "../../assets/image/techs/react2.svg"
import redux from "../../assets/image/techs/redux2.svg"
import ts from "../../assets/image/techs/ts2.svg"
import js from "../../assets/image/techs/js.svg"
import axios from "../../assets/image/techs/axios.svg"
import git from "../../assets/image/techs/git.svg"
import html from "../../assets/image/techs/html.svg"
import css from "../../assets/image/techs/css.svg"
import mui from "../../assets/image/techs/mui.svg"
import SKILLS1 from "../../assets/particles/skills/skills-element-1.png";
import SKILLS2 from "../../assets/particles/skills/skills-element-2.png";
import SKILLS3 from "../../assets/particles/skills/skills-element-3G.png";


export type SkillsType = {
    title: string
    description: string
    image: string
    aosDelay: string
}

export const Skills = () => {
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"

    const skills: SkillsType[] = [
        {
            title: "React",
            description: '',
            image: react,
            aosDelay: "200"
        },
        {
            title: "Redux",
            description: '',
            image: redux,
            aosDelay: "400"
        },
        {
            title: "TypeScript",
            description: '',
            image: ts,
            aosDelay: "600"
        },
        {
            title: "JavaScript",
            description: '',
            image: js,
            aosDelay: "800"
        },
        {
            title: "Material UI",
            description: '',
            image: mui,
            aosDelay: "1000"
        },
        {
            title: "Axios",
            description: '',
            image: axios,
            aosDelay: "1200"
        },
        {
            title: "HTML",
            description: '',
            image:html,
            aosDelay: "1200"
        },
        {
            title: "CSS",
            description: '',
            image: css,
            aosDelay: "1200"
        },
        {
            title: "GIT",
            description: '',
            image: git,
            aosDelay: "1200"
        },

    ]

    const mappedSkills = skills.map((s, i) => <Skill key={i} title={s.title} description={s.description} image={s.image} aosDelay={s.aosDelay}/>)

    return (
        <div className={s.skillsBlock} id={"skills"}>
            <div className={s.skillsContainer}>
                <Title>My skills</Title>
                <div className={s.skills}>
                    {mappedSkills}
                </div>
            </div>
            <div className={s.design_element}>
                <img className={`${s.de_skills1} ${s.elem_updown}`} src={SKILLS1}/>
                <img className={`${s.de_skills2} ${s.elem_updown}`} src={SKILLS2}/>
                <img className={`${s.de_skills3} ${s.elem_updown}`} src={SKILLS3}/>
            </div>
        </div>
    );
};


