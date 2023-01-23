import React from 'react'
import scaleLine from '../../img/scale-line.png'
import copixel from '../../img/copixel.png'
import remark from '../../img/remark.png'
import remote from '../../img/remote.png'
import frameo from '../../img/frameo.png'
import denvers from '../../img/denvers.png'
import alpha from '../../img/alpha.png'
import lineVertical from '../../img/lineVertical.png'
import './style/home.css'

export const SectionImplementation = () => {
    return (
        <section className='section__implementation'>
            <div className='implementation__container'>
                <div className='purple-line__txt implementation__purple-line_txt'>
                    <div className='purple-line'></div>
                    <p className='section-description'>004. ROADMAP</p>
                </div>
                <h2 className='implementation__title'>Implementation Sheet</h2>
                <p className='implementation__text'>
                    At Lymcoin we have one focus - creating a viable data marketplace to start returning
                    value to token holders in the shortest time possible.
                </p>
                <div className='implementation__columns_rows'>
                    <img className='implementation__line-vertical_img' src={lineVertical} />
                    <div>
                        <div className='implementation__rows'>
                            <div className='implementation__rows_column'>
                                <h4 className='implementation__title-hidden'></h4>
                                <p className='implementation__rows_column_text'>November 2017</p>
                            </div>
                            <div className='implementation__rows_column'>
                                <h4>Tracking services for different smart contract types</h4>
                                <p>March 2018</p>
                            </div>
                            <div className='implementation__rows_column'>
                                <h4>Release of a decentralized app for affiliate networks</h4>
                                <p>May 2020</p>
                            </div>
                        </div>
                        <img className='implementation__img' src={scaleLine} />
                        <div className='implementation__second-rows'>
                            <div>
                                <div className='implementation__second-rows_column'>
                                    <h4>
                                        Development of different types of smart contracts (CPA, CPL, CPC, CPS, CPI)
                                    </h4>
                                    <p>January 2018</p>
                                </div>
                                <div className='implementation__second-rows_column'>
                                    <h4>Release of a decentralized app for merchants / affiliates</h4>
                                    <p>March 2019</p>
                                </div>
                                <div className='implementation__second-rows_column'>
                                    <h4>Launch of the world's first decentralized affiliate network based on the HOQU platform</h4>
                                    <p>September 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='implementation__images'>
                    <img src={copixel} />
                    <img src={remark} />
                    <img src={remote} />
                    <img src={frameo} />
                    <img src={denvers} />
                    <img src={alpha} />
                </div>
            </div>
        </section>
    )
}
