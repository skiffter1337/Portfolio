import React, {useState} from 'react';
import s from './Contacts.module.scss'
import styleContainer from './../../common/styles/Container.module.css'
import {Title} from "../../common/components/Title/Title";
import {Map} from "../../common/components/Map/Map";
import address from "../../assets/image/map-marker.svg"
import phone from "../../assets/image/call.svg"
import email from "../../assets/image/mail.svg"


export const Contacts = () => {





    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title>Get in touch</Title>

                <div className={s.contacts_row}>
                    <div className={s.contact_block}>
                        <div className={s.icon_box}>
                            <img src={address} className={s.icons}/>
                        </div>
                        <div className={s.info_wrapper}>
                            <h4>
                                Address
                            </h4>
                            <address>
                                Russia, Ivanovo
                            </address>
                        </div>
                    </div>
                    <div className={s.contact_block}>
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
                    <div className={s.contact_block}>
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
                    <Map/>
                    <div className={s.contactsFormContainer}>
                        <form>
                            <h3>Write me a message</h3>
                            <div className={s.from_control}>
                                <input placeholder={"Name*"} required className={s.form_input}/>
                                <input type={"email"} placeholder={"Email*"} required className={s.form_input}/>
                            </div>
                            <textarea placeholder={"Your message here*"} required
                                      className={s.form_textarea}></textarea>
                            <button type="submit" className={s.submitBtn}>Send message</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};
