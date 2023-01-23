import React from 'react'
import world from '../../img/picture-world.png'
import bittrex from '../../img/bittrex.png'
import bitfinex from '../../img/bitfinex.png'
import poloniex from '../../img/poloniex.png'
import './style/home.css'

export const SectionNetwork = () => {
  return (
    <section className='section__network'>
                <div className='network__container'>
                    <div className='network__content'>
                        <div className='purple-line__txt'>
                            <div className='purple-line'></div>
                            <p className='section-description'>05. NETWORK</p>
                        </div>
                        <h2 className='network__title'>
                            Growing Global Network
                        </h2>
                        <p className='network__text'>
                            Lymcoin is rapidly gaining popularity among crypto community. Lots of real
                            companies and exchanges have adopted our coin already. There is much more to
                            come. Stay tuned.
                        </p>
                        <div className='network__nums'>
                            <div className='network__num'>50<span>+</span><p>Exchanges</p></div>
                            <div className='network__num'>180<span>+</span> <p>Companies</p></div>
                        </div>
                        <div className='network__images'>
                            <img src={bittrex} />
                            <img src={bitfinex} />
                            <img src={poloniex} />
                        </div>
                    </div>
                    <img className='network__img-world' src={world} />
                </div>
            </section>
  )
}
