import React from 'react'
import twitter from '../../img/twitter.png'
import youtube from '../../img/youtube.png'
import skype from '../../img/skype.png'
import facebook from '../../img/facebook.png'
import pinterest from '../../img/pinterest.png'
import './footer.css'
import './media.css'


export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <h2 className='footer__title'>
                    I’d Like to Learn More About Lymcoin
                </h2>
                <div className='footer__purple-line'></div>
                <form className='footer__form_email'>
                    <input placeholder='Enter your Email' className='footer__input-email' />
                    <button className='footer__btn_email'>Sign in</button>
                </form>
                <div className='footer__confidential'>
                    <input className='confidential__checkbox' type={'checkbox'} />
                    <a className='confidential__link' href='https:google.com'>
                        I have read and agree to the terms & conditions
                    </a>
                </div>
                <div className='footer__icons'>
                    <img src={twitter} />
                    <img src={facebook} />
                    <img src={youtube} />
                    <img src={skype} />
                    <img src={pinterest} />
                </div>
                <a className='footer__link' href='http:youtube.com'>
                    AncoraThemes © 2019. All Rights Reserved.
                </a>
            </div>
        </footer>
    )
}
