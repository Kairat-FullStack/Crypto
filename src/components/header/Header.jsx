import React from 'react'
import logo from '../../img/logo.png'
import burgerLogo from '../../img/crypto-logo.png'
import twitter from '../../img/twitter.png'
import youtube from '../../img/youtube.png'
import skype from '../../img/skype.png'
import facebook from '../../img/facebook.png'
import pinterest from '../../img/pinterest.png'
import './header.css'
import './media.css'

export const Header = () => {
    return (
        <header className='header'>
            <div className='header__container'>
                <a href='https://www.google.com' className='header__link_logo'>
                    <img src={logo} alt='logo' className='header__logo' />
                </a>
                <ul className='header__menu'>
                    <li className='menu__link'><a href='https://www.google.com/'>home</a></li>
                    <li className='menu__link'><a href='https://www.google.com/'>resources</a></li>
                    <li className='menu__link'><a href='https://www.google.com/'>team</a></li>
                    <li className='menu__link'><a href='https://www.google.com/'>features</a></li>
                    <li className='menu__link'><a href='https://www.google.com/'>community</a></li>
                    <li className='menu__link'><a href='https://www.google.com/'>downloads</a></li>
                    <li className='menu__link'><a href='https://www.google.com/'>contuct us</a></li>
                </ul>

                {/* ------------------- Burger menu ------------------ */}
                <div class="burger-menu">
                    <input id="burger__toggle" type="checkbox" />
                    <label class="burger__btn" for="burger__toggle">
                        <span></span>
                    </label>
                    <ul class="burger__box">
                        <a href='https://www.google.com'>
                            <img src={burgerLogo} alt='logo' className='header__burger-logo' />
                        </a>
                        <li className='burger__item'><a href='https://www.google.com/'>home</a></li>
                        <li className='burger__item'><a href='https://www.google.com/'>resources</a></li>
                        <li className='burger__item'><a href='https://www.google.com/'>team</a></li>
                        <li className='burger__item'><a href='https://www.google.com/'>features</a></li>
                        <li className='burger__item'><a href='https://www.google.com/'>community</a></li>
                        <li className='burger__item'><a href='https://www.google.com/'>downloads</a></li>
                        <li className='burger__item'><a href='https://www.google.com/'>contuct us</a></li>
                        <div className='header__burger-icons'>
                            <img src={twitter} />
                            <img src={facebook} />
                            <img src={youtube} />
                            <img src={skype} />
                            <img src={pinterest} />
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    )
}
