import React from 'react';
import s from './Project.module.scss'
import {ProjectsType} from "../Projects";
import {Button} from "../../../common/components/Button/Button";




export const Project = (props: ProjectsType) => {

    const imageStyles = {backgroundImage: `url(${props.image})`}

    return (
        <div className={s.project_block} data-aos="fade-up" data-aos-delay={props.aosDelay}>
            <div className={s.project_img} style={imageStyles}>
                <div className={s.project_btn} >
                    <a href={props.link} target="_blank">
                <Button title={"View"}/>
                    </a>
                </div>
            </div>
            <div className={s.project_info}>
                <h3 className={s.project_title}>{props.title}</h3>
                <span className={s.project_description}>{props.description}</span>
            </div>

        </div>
    );
};
