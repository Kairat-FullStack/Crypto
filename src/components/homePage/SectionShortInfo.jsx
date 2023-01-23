import React from 'react'
import undraw from '../../img/undraw_mobile_app.png'
import './style/home.css'


export const SectionShortInfo = () => {
    return (
        <section className='section__short-info'>
            <div className='short-info__container'>
                <img className='short-info__img' src={undraw} alt='picture' />
                <div className='short-info__content'>
                    <div className='purple-line__txt'>
                        <div className='purple-line'></div>
                        <p className='section-description'>01. WELCOME</p>
                    </div>
                    <h2 className='shorts-info__title'>
                        Lymcoin is Digital Cash You Can Spend Anywhere
                    </h2>
                    <p className='shorts-info__text'>
                        Use Lymcoin to make instant, private payments online or in-store using our
                        secure open-source platform hosted by thousands of users around the world.
                    </p>
                </div>
            </div>
        </section>
    )
}
