import React from 'react';
import s from './Contacts.module.css'
import styleContainer from './../../common/styles/Container.module.css'
import {Title} from "../../common/components/Title";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title>Contacts</Title>
                <form className={s.contactsFormContainer}>
                    <input/>
                    <input/>
                    <textarea></textarea>
                    <button type="submit" className={s.submitBtn}>Send</button>
                </form>
            </div>
        </div>
    );
};
