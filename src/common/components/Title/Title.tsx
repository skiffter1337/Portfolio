import s from './Title.module.scss'
import React, {ReactNode} from "react";

type TitlePropsType = {
    children?: ReactNode
}
export const Title: React.FC<TitlePropsType> = ({children}) => {
    return (
        <div className={s.block_title}>
            <h2>
                {children}
            </h2>
        </div>
    );
};

