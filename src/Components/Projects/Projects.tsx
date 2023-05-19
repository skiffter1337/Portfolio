import React from 'react';
import s from './Projects.module.scss'
import styleContainer from './../../common/styles/Container.module.css'
import {Project} from './Project/Project';
import {Title} from '../../common/components/Title/Title';
import socialImg2 from './../../assets/image/social_network2.png'
import socialImg4 from './../../assets/image/social_network4.png'
import todoListImg from './../../assets/image/todoList.webp'

export type ProjectsType = {
    title: string
    description: string
    image: string
}
export const Projects = () => {
    let lorem = "Duis aute irure dolor in it esse cillum dolore eu fugiat nulla pari erunt mollit anim id est laborum."

    const projects: ProjectsType[] = [
        {
            title: "Social Network",
            description: lorem,
            image: socialImg4
        },
        {
            title: "Counter",
            description: lorem,
            image: socialImg2
        },
        {
            title: "TodoList",
            description: lorem,
            image: todoListImg
        },
        {
            title: "Some shit",
            description: lorem,
            image: todoListImg
        }
    ]

    const mappedProjects = projects.map((p, i) => <Project key={i} title={p.title} description={p.description} image={p.image}/>)
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title>Projects</Title>
                <div className={s.projects}>
                    {mappedProjects}
                </div>
            </div>
        </div>
    );
};



