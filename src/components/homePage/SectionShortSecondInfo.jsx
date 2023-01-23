import React from 'react'
import phone from '../../img/phone.png'
import './style/home.css'

export const SectionShortSecondInfo = () => {
  return (
    <section className='section__short-second-info'>
                <div className='short-second-info__container'>
                    <img className='short-second-info__img' src={phone} alt='picture-phone' />
                    <div className='short-second-info__content'>
                        <div className='purple-line__txt'>
                            <div className='purple-line'></div>
                            <p className='section-description'>01. WELCOME</p>
                        </div>
                        <h2 className='shorts-second-info__title'>
                            Lymcoin is Digital Cash You Can Spend Anywhere
                        </h2>
                        <p className='shorts-second-info__text'>
                            Use Lymcoin to make instant, private payments online or in-store using our
                            secure open-source platform hosted by thousands of users around the world.
                        </p>
                        <button className='shorts-second-info__btn'>contuct us</button>
                    </div>
                </div>
            </section>
  )
}
