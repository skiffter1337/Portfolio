import React from 'react';
import s from './Button.module.scss'


type ButtonType = {
    title: string
    callback?: () => void
    type?: "button" | "submit" | "reset" | undefined
}
export const Button: React.FC<ButtonType> = ({title , callback, type}) => {
    return (
        <button className={s.button} type={type}>
            {title}
        </button>
    );
};

