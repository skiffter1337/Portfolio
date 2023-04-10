import React from 'react';
import s from './Contacts.module.css'
import styleContainer from './../../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2>Contacts</h2>
                <form className={s.contactsFormContainer}>
                    <input/>
                    <input/>
                    <textarea></textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
};
