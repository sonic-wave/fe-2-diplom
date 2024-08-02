import React from 'react'
import './Contacts.css'
import phoneIcon from '../../public/img/phone.png';
import mailIcon from '../../public/img/mail.png';
import skypeIcon from '../../public/img/skype.png';
import navigationIcon from '../../public/svg/navigation.svg';

export const Contacts = () => {
    return (
            <div className='contacts'>
                <h3 className="contacts-title">Свяжитесь с нами</h3>
                <div className="contact">
                    <img src={phoneIcon} alt="phoneIcon" className="contact-icon" />
                    <div className="contact-text">8 (800) 000 00 00</div>
                </div>
                <div className="contact">
                    <img src={mailIcon} alt="mailIcon" className="contact-icon" />
                    <div className="contact-text">inbox@mail.ru</div>
                </div>
                <div className="contact">
                    <img src={skypeIcon} alt="skypeIcon" className="contact-icon" />
                    <div className="contact-text">tu.train.tickets</div>
                </div>
                <div className="contact">
                    <img src={navigationIcon} alt="navigationIcon" className="contact-icon" />
                    <div className="contact-text">г. Москва ул. Московская 27-35 555 555</div>
                </div>
            </div>
    )
}
