import React from 'react';
import s from './Main.module.scss'
import styleContainer from './../../common/styles/Container.module.css'
import KEKS_MAIN from './../../assets/image/keks_main.jpg'

export const Main = () => {
    return (
        <section className={s.main_block}>
            <div className={`${styleContainer.container} ${s.main_container}`}>
            <div className={s.greeting}>
                <h1>
                    <div className={s.small}>Hello, I'm</div>
                    Ilya
                    <div className={s.strong}>Shulapov</div>
                </h1>

                <p>I develop websites using...</p>
                <div>
                    <p>
                        {"             "}
                    </p>
                </div>
                <div>
                    <button className={s.contact_me_btn}>
                        contact me
                    </button>
                </div>
            </div>
            <div className={s.photo_block}>
                <img src={KEKS_MAIN} alt={"main photo"} className={s.photo}/>
            </div>
            </div>
        </section>
    );
};
