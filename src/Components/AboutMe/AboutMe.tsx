import React from 'react';
import s from '../AboutMe/AboutMe.module.scss'
import styleContainer from "../../common/styles/Container.module.css";
import KEKS from "../../assets/image/keks.jpg"


export const AboutMe = () => {
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eum harum molestiae, numquam optio quo ut voluptates? Aliquid dolorum hic numquam qui reiciendis suscipit? A libero recusandae ullam ut. Alias?"
    return (
        <section className={s.about_block}>
            <div className={`${styleContainer.container} ${s.about_container}`}>
                <div className={s.content_row}>
                    <div className={s.image_block}>
                        <img src={KEKS}/>
                    </div>
                    <div className={s.content_block}>
                        <h2>
                        <span>
                            About me
                        </span>
                            I develop Websites & Applications
                        </h2>
                        <p className={s.about_par}>
                            I am a skilled frontend React developer with a passion for creating visually appealing and
                            user-friendly web applications. With several years of experience in the field, I am
                            proficient in building dynamic and responsive interfaces using HTML, CSS, and JavaScript. My
                            expertise includes working with ReactJS, Redux, and other modern front-end frameworks, as
                            well as integrating APIs and designing databases.
                        </p>
                        <p className={s.about_par}>
                            I am committed to staying up-to-date with
                            the latest technologies and industry trends to deliver high-quality results. My attention to
                            detail, strong communication skills, and collaborative approach make me a valuable asset to
                            any development team. I thrive in fast-paced environments and enjoy taking on new challenges
                            to expand my skills and knowledge.
                        </p>
                        <div className={s.personal_info_block}>
                            <div className={s.personal_info_list}>
                                <ul>
                                    <li>
                                        <h4>
                                            NAME
                                        </h4>
                                        <p>
                                            Ilya Shulapov
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            EMAIL
                                        </h4>
                                        <p>
                                            shulapov1999@gmail.com
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            PHONE
                                        </h4>
                                        <p>
                                            +79644923399
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className={s.personal_info_list}>
                                <ul>
                                    <li>
                                        <h4>
                                            AGE
                                        </h4>
                                        <p>
                                            23
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            EDUCATION
                                        </h4>
                                        <p>
                                            IVGU
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            FREELANCE
                                        </h4>
                                        <p>
                                            Available
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button className={s.about_btn}>
                            <a>DOWNLOAD CV</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
