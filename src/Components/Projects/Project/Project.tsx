import React from 'react';
import s from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}
export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.projectImage}>
                <button className={s.btn}>View</button>
            </div>
            <div>
                <div><span>{props.title}</span></div>
                <div><span>{props.description}</span></div>
            </div>
        </div>
    );
};
