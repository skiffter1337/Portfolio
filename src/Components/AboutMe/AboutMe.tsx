import React from 'react';
import s from '../AboutMe/AboutMe.module.scss'
import ABOUT from "../../assets/image/about.png"
import {Button} from "../../common/components/Button/Button";
import ABOUT1 from "../../assets/particles/about/about-element-1G.png";
import ABOUT2 from "../../assets/particles/about/about-element-2G.png";
import ABOUT3 from "../../assets/particles/about/about-element-3G.png";
import 'aos/dist/aos.css';
import {Tilt} from "react-tilt";


export const AboutMe = () => {
    const defaultOptions = {
        reverse:        false,
        max:            25,
        perspective:    1000,
        scale:          1,
        speed:          1000,
        transition:     true,
        axis:           null,
        reset:          true,
        easing:         "cubic-bezier(.03,.98,.52,.99)",
    }


    let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eum harum molestiae, numquam optio quo ut voluptates? Aliquid dolorum hic numquam qui reiciendis suscipit? A libero recusandae ullam ut. Alias?"
    return (
        <section className={s.about_block} id={"about"}>
            <div className={s.about_container}>
                <div className={s.content_row}>
                    <Tilt options={defaultOptions} className={s.tilt}>
                        <div className={s.image_block} data-aos="fade-right" data-aos-delay="200" data-aos-duration="2000">
                            <img src={ABOUT}/>
                        </div>
                    </Tilt>
                    <div className={s.content_block} data-aos="fade-right" data-aos-delay="400" data-aos-duration="2000">
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
                        <Button title={"download cv"}/>
                    </div>
                </div>
            </div>
            <div className={s.design_element}>
                <img className={`${s.de_about1} ${s.elem_updown}`} src={ABOUT1}/>
                <img className={`${s.de_about2} ${s.elem_updown}`} src={ABOUT2}/>
                <img className={`${s.de_about3} ${s.elem_updown}`} src={ABOUT3}/>
            </div>
        </section>
    );
};
