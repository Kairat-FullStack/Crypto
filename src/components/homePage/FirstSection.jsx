import React from 'react'
import './style/home.css'
import './style/media.css'


export const FirstSection = () => {
  return (
    <section className='first-section'>
                <div className='first-section__container'>
                    <h1 className='first-section__title'>
                        Secure and Anonymous Cryptocurrency
                    </h1>
                    <div className='purple-line'></div>
                    <p className='first-section__text'>
                        Lymcoin is a decentralized, hybrid blockhain that is fully open-source.
                    </p>
                    <div className='first-section__buttons'>
                        <button>contuct us</button>
                        <button>contuct us</button>
                    </div>
                </div>
            </section>
  )
}
