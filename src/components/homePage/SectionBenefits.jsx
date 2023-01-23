import React from 'react'
import pieChart from '../../img/pie-chart.png'
import suitcase from '../../img/suitcase.png'
import objective from '../../img/objective.png'
import clock from '../../img/clock.png'
import './style/home.css'

export const SectionBenefits = () => {
  return (
    <section className='section__benefits'>
                <div className='benfits__container'>
                    <div className='purple-line__txt'>
                        <div className='purple-line'></div>
                        <p className='section-description'>02. BENEFITS</p>
                    </div>
                    <h1 className='benefits__title'>Lymcoin Benefits</h1>

                    <div className='benefits__rows'>
                        <div className='rows__column'>
                            <p className='rows__column_num'>01.</p>
                            <img src={pieChart} alt='pie-chart-picture' />
                            <h4>Lymcoin Benefits</h4>
                            <p className='rows__column_text'>Use Lymcoin to make instant</p>
                        </div>
                        <div className='rows__column'>
                            <p className='rows__column_num'>02.</p>
                            <img src={suitcase} alt='suitcase-picture' />
                            <h4>Lymcoin Benefits</h4>
                            <p className='rows__column_text'>Use Lymcoin to make instant</p>
                        </div>
                        <div className='rows__column'>
                            <p className='rows__column_num'>03.</p>
                            <img src={objective} alt='objective-picture' />
                            <h4>Lymcoin Benefits</h4>
                            <p className='rows__column_text'>Use Lymcoin to make instant</p>
                        </div>
                        <div className='rows__column'>
                            <p className='rows__column_num'>04.</p>
                            <img src={clock} alt='clock-picture' />
                            <h4>Lymcoin Benefits</h4>
                            <p className='rows__column_text'>Use Lymcoin to make instant</p>
                        </div>
                    </div>
                </div>
            </section>
  )
}
