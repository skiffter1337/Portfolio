import React from 'react';
import s from './Projects.module.scss'
import {Project} from './Project/Project';
import {Title} from '../../common/components/Title/Title';
import SOCIAL_NETWORK from '../../assets/image/projects/social_network4.png'
import TIME_TOOLS from '../../assets/image/projects/time-tools.jpg'
import TODO from '../../assets/image/projects/todoList.webp'
import PROJECT1 from '../../assets/particles/projects/projects-element-1G.png'
import PROJECT2 from '../../assets/particles/projects/projects-element-2G.png';
import CARDS from '../../assets/image/projects/cards.jpg'
import COUNTER from '../../assets/image/projects/counter.jpg'


export type ProjectsType = {
    title: string
    description: string
    image: string
    link: string
    aosDelay: string
}
export const Projects = () => {


    const projects: ProjectsType[] = [
        {
            title: "Social Network",
            description: 'Stack: React, Redux, Typescript, Javascript, Axios, Redux-form, React-Router-dom',
            image: SOCIAL_NETWORK,
            link: "https://github.com/skiffter1337/samurai-way-main",
            aosDelay: "200"
        },
        {
            title: "Counter",
            description: 'Stack: React, Redux, Typescript, Javascript',
            image: COUNTER,
            link: "https://github.com/skiffter1337/counter",
            aosDelay: "400"
        },
        {
            title: "TodoList",
            description: 'Stack: React, Redux, Typescript, Javascript, Formik, MUI, Axios, React-Router-dom',
            image: TODO,
            link: "https://github.com/skiffter1337/TodoList",
            aosDelay: "600"

        },
        {
            title: "Time tools",
            description: 'Stack: React, Redux Toolkit, Typescript, Javascript, React-Router-dom',
            image: TIME_TOOLS,
            link: "https://github.com/skiffter1337/time-tools",
            aosDelay: "800"
        },
        {
            title: "Flash cards",
            description: 'Stack: React, Redux Toolkit Query, Typescript, Javascript, React-Router-dom, Radix UI',
            image: CARDS,
            link: "https://github.com/skiffter1337/Cards",
            aosDelay: "800"
        }
    ]

    const mappedProjects = projects.map((p, i) => <Project key={i} title={p.title} description={p.description} image={p.image} aosDelay={p.aosDelay} link={p.link}/>)
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



