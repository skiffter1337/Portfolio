import React from 'react';
import s from './Map.module.css'

export const Map = () => {
    return (
        <div className={s.map}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1255.3201070645564!2d40.97419749297321!3d56.999309832411974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1683207755196!5m2!1sru!2sru"
                width="500"
                height="400"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>
    );
};
