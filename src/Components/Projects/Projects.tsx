import React from 'react';
import s from './Projects.module.css'
import styleContainer from './../../common/styles/Container.module.css'
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <h2>My works</h2>
                <div className={s.projects}>
                    <Project title={"Project name"} description={"Description"}/>
                    <Project title={"Project name"} description={"Description"}/>
                    <Project title={"Project name"} description={"Description"}/>
                </div>
            </div>
        </div>
    );
};
