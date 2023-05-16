import React from 'react';
import s from './Skills.module.scss'
import {Skill} from './Skill/Skill';
import styleContainer from './../../common/styles/Container.module.css'
import {Title} from "../../common/components/Title/Title";
import ts from "../../assets/image/ts.svg"
import react from "../../assets/image/react.svg"
import redux from "../../assets/image/redux.svg"

export const Skills = () => {
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title>My skills</Title>
                <div className={s.skills}>
                    <Skill title={"React"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
                           img={react}
                    />
                    <Skill title={"Redux"}
                           description={lorem}
                    img={redux}
                    />
                    <Skill title={"TypeScript"}
                           description={lorem}
                    img={ts}
                    />
                    <Skill title={"JavaScript"}
                           description={lorem}
                    img={ts}
                    />

                </div>
            </div>
        </div>
    );
};


