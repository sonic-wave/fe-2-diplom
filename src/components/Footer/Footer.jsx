import React from 'react';
import './Footer.css';
import { Contacts } from '../Contacts/Contacts';
import { Subscribe } from '../Subscribe/Subscribe';
import arrowupIcon from '../../public/svg/arrowup.svg'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='contacts-container'>
                <Contacts />
                <Subscribe />
            </div>
            <div className='footer-line'></div>
            <div className="footer-credentials">
                <div className="footer-logo">Лого</div>
                <img className="footer-image" src={arrowupIcon} alt="arrowupIcon" />
                <span className="footer-year">2018 WEB</span>
            </div>
        </footer>
    )
}
