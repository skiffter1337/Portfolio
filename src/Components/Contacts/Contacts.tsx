import React from 'react';
import s from './Contacts.module.scss'
import {Title} from "../../common/components/Title/Title";
import address from "../../assets/image/map-marker.svg"
import phone from "../../assets/image/call.svg"
import email from "../../assets/image/mail.svg"
import {Button} from "../../common/components/Button/Button";
import CONTACTS1 from "../../assets/particles/contacts/contacts-element-1.png";
import CONTACTS2 from "../../assets/particles/contacts/contacts-element-2.png";
import CONTACTS3 from "../../assets/particles/contacts/contacts-element-3.png";



export const Contacts = () => {





    return (
        <div className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <Title>Get in touch</Title>
                <div className={s.contacts_row}>
                    <div className={s.contact_block} data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
                        <div className={s.icon_box}>
                            <img src={address} className={s.icons}/>
                        </div>
                        <div className={s.info_wrapper} >
                            <h4>
                                Address
                            </h4>
                            <address>
                                Russia, Ivanovo
                            </address>
                        </div>
                    </div>
                    <div className={s.contact_block} data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">
                        <div className={s.icon_box}>
                            <img src={phone} className={s.icons}/>
                        </div>
                        <div className={s.info_wrapper}>
                            <h4>
                                Phone
                            </h4>
                            <a>
                                +79644923399
                            </a>
                        </div>
                    </div>
                    <div className={s.contact_block} data-aos="fade-down" data-aos-duration="1000" data-aos-delay="600">
                        <div className={s.icon_box}>
                            <img src={email} className={s.icons}/>
                        </div>
                        <div className={s.info_wrapper}>
                            <h4>
                                Email
                            </h4>
                            <a>
                                shulapov1999@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className={s.form_row}>
                    <div className={s.map} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1255.3201070645564!2d40.97419749297321!3d56.999309832411974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1683207755196!5m2!1sru!2sru"
                            width="600"
                            height="395"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>
                    <div className={s.contactsFormContainer} data-aos="fade-right" data-aos-duration="1500">
                        <form>
                            <h3>Write me a message</h3>
                            <div className={s.form_control}>
                                <input placeholder={"Name*"} required className={s.form_input}/>
                                <input type={"email"} placeholder={"Email*"} required className={s.form_input}/>
                            </div>
                            <textarea placeholder={"Your message here*"} required
                                      className={s.form_textarea}></textarea>
                            <Button title={"send message"} type={"submit"}/>
                        </form>
                    </div>
                </div>
            </div>
            <div className={s.design_element}>
                <img className={`${s.de_contacts1} ${s.elem_updown}`} src={CONTACTS1}/>
                <img className={`${s.de_contacts2} ${s.elem_updown}`} src={CONTACTS2}/>
                <img className={`${s.de_contacts3} ${s.elem_updown}`} src={CONTACTS3}/>
            </div>
        </div>
    );
};
