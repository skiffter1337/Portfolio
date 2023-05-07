import React from 'react';
import s from './Projects.module.scss'
import styleContainer from './../../common/styles/Container.module.css'
import {Project} from './Project/Project';
import {Title} from '../../common/components/Title/Title';
import socialImg from './../../assets/image/social_network.png'
import socialImg2 from './../../assets/image/social_network2.png'
import socialImg4 from './../../assets/image/social_network4.png'
import todoListImg from './../../assets/image/todoList.webp'

export const Projects = () => {
    let lorem = "Duis aute irure dolor in it esse cillum dolore eu fugiat nulla pari erunt mollit anim id est laborum."
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title>Projects</Title>
                <div className={s.projects}>
                    <Project title={"Social Network"} description={lorem + lorem + lorem} image={socialImg4}/>
                    <Project title={"Counter"} description={lorem} image={socialImg2}/>
                    <Project title={"TodoList"} description={lorem} image={todoListImg}/>
                    <Project title={"Some shit"} description={lorem} image={"https://placehold.co/700x700"}/>
                </div>
            </div>
        </div>
    );
};



