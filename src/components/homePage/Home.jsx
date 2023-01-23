import React from 'react'
import { FirstSection } from './FirstSection'
import { SectionShortInfo } from './SectionShortInfo'
import { SectionBenefits } from './SectionBenefits'
import { SectionShortSecondInfo } from './SectionShortSecondInfo'
import { SectionImplementation } from './SectionImplementation'
import { SectionNetwork } from './SectionNetwork'
import { SectionWallets } from './SectionWallets'

export const Home = () => {
    return (
        <main className='main'>
            <FirstSection />
            <SectionShortInfo />
            <SectionBenefits />
            <SectionShortSecondInfo />
            <SectionImplementation />
            <SectionNetwork />
            <SectionWallets />
        </main>
    )
}
