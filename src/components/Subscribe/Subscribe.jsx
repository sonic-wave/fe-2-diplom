import './Subscribe.css';
import youtubeIcon from '../../public/img/youtube.png';
import linkedinIcon from '../../public/img/linkedin.png';
import googlePlusIcon from '../../public/img/googleplus.png';
import facebookIcon from '../../public/img/facebook.png';
import twitterIcon from '../../public/img/twitter.png';

export const Subscribe = () => {
    return (
        <div className="subscribe">
            <h3 className="subscribe-title">Подписка</h3>
            <form className="subscribe-form">
                <label className="subscribe-label" htmlFor="subscribe-email">Будьте в курсе событий</label>
                <div className="subscribe-form-container">
                    <input type="text" id='subscribe-email' className="subscribe-input" placeholder="e-mail" />
                    <button className="subscribe-button">Отправить</button>
                </div>
            </form>
            <div className="subscribe-socials">
                <h3 className="subscribe-socials-title">Подписывайтесь на нас</h3>
                <div className="subscribe-socials-icons">
                    <img src={youtubeIcon} alt="youtubeIcon" className="subscribe-socials-icon" />
                    <img src={linkedinIcon} alt="linkedinIcon" className="subscribe-socials-icon" />
                    <img src={googlePlusIcon} alt="googlePlusIcon" className="subscribe-socials-icon" />
                    <img src={facebookIcon} alt="facebookIcon" className="subscribe-socials-icon" />
                    <img src={twitterIcon} alt="twitterIcon" className="subscribe-socials-icon" />
                </div>
            </div>
        </div>
    )
}
