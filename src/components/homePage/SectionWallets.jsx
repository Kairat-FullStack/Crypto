import React from 'react'
import apple from '../../img/apple.png'
import windows from '../../img/windows.png'
import linux from '../../img/linux.png'
import imgWallets from '../../img/img-wallets.png'
import android from '../../img/android.png'
import './style/home.css'

export const SectionWallets = () => {
    return (
        <section className='section__wallets'>
            <div className='wallet__container'>
                <img className='wallet__img' src={imgWallets} />
                <div className='wallets__content'>
                    <div className='purple-line__txt'>
                        <div className='purple-line'></div>
                        <p className='section-description'>06. WALLETS</p>
                    </div>
                    <h2 className='wallets__title'>Lymcoin Wallets</h2>
                    <div className='wallets__buttons'>
                        <button className='wallets__button'>contuct us</button>
                        <button className='wallets__button'>contuct us</button>
                        <button className='wallets__button'>contuct us</button>
                        <button className='wallets__button'>contuct us</button>
                    </div>
                    <div className='wallets__rows'>
                        <div className='wallets__rows_column'>
                            <img src={android} />
                            <div className='wallets__texts'>
                                <p className='wallets__text'>Android Lymcoin Wallet</p>
                                <span>Download</span>
                            </div>
                        </div>
                        <div className='wallets__rows_column'>
                            <img src={apple} />
                            <div className='wallets__texts'>
                                <p className='wallets__text'>OSX Lymcoin Wallet</p>
                                <span>Download</span>
                            </div>
                        </div>
                        <div className='wallets__rows_column'>
                            <img src={windows} />
                            <div className='wallets__texts'>
                                <p className='wallets__text'>Windows Lymcoin Wallet</p>
                                <span>Download</span>
                            </div>
                        </div>
                        <div className='wallets__rows_column'>
                            <img src={linux} />
                            <div className='wallets__texts'>
                                <p className='wallets__text'>Linux Lymcoin Wallet</p>
                                <span>Download</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
