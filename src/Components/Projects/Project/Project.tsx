import React from 'react';
import s from './Project.module.scss'
import {ProjectsType} from "../Projects";




export const Project = (props: ProjectsType) => {

    const imageStyles = {backgroundImage: `url(${props.image})`}

    return (
        <div className={s.project_block}>
            <div className={s.project_img} style={imageStyles}>
                <button className={s.project_btn}>View</button>
            </div>
            <div className={s.project_info}>
                <h3 className={s.project_title}>{props.title}</h3>
                <span className={s.project_description}>{props.description}</span>
            </div>
        </div>
    );
};
