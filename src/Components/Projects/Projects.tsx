import React from 'react';
import s from './Projects.module.scss'
import {Project} from './Project/Project';
import {Title} from '../../common/components/Title/Title';
import socialImg2 from './../../assets/image/social_network2.png'
import socialImg4 from './../../assets/image/social_network4.png'
import todoListImg from './../../assets/image/todoList.webp'
import PROJECT1 from '../../assets/particles/projects/projects-element-1.png'
import PROJECT2 from '../../assets/particles/projects/projects-element-2.png';


export type ProjectsType = {
    title: string
    description: string
    image: string
    aosDelay: string
}
export const Projects = () => {
    let lorem = "Duis aute irure dolor in it esse cillum dolore eu fugiat nulla pari erunt mollit anim id est laborum."

    const projects: ProjectsType[] = [
        {
            title: "Social Network",
            description: lorem,
            image: socialImg4,
            aosDelay: "200"
        },
        {
            title: "Counter",
            description: lorem,
            image: socialImg2,
            aosDelay: "400"
        },
        {
            title: "TodoList",
            description: lorem,
            image: todoListImg,
            aosDelay: "600"
        },
        {
            title: "Some shit",
            description: lorem,
            image: todoListImg,
            aosDelay: "800"
        }
    ]

    const mappedProjects = projects.map((p, i) => <Project key={i} title={p.title} description={p.description} image={p.image} aosDelay={p.aosDelay}/>)
    return (
        <div className={s.projectsBlock} id={"projects"}>
            <div className={s.projectsContainer}>
                <Title>Projects</Title>
                <div className={s.projects}>
                    {mappedProjects}
                </div>
            </div>
            <div className={s.design_element}>
                <img className={`${s.de_project1} ${s.elem_updown}`} alt={""} src={PROJECT1}/>
                <img className={`${s.de_project2} ${s.elem_updown}`} alt={""} src={PROJECT2}/>
            </div>
        </div>
    );
};



