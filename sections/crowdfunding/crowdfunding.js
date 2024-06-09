import Crowdfundingcard from '@/components/crowdfundingcard'
import React from 'react'

const Crowdfunding = () => {
    return (
        <div className=' px-[1rem] py-[2rem] flex flex-col gap-[1rem]'>
            <Crowdfundingcard />
            <Crowdfundingcard />
            <Crowdfundingcard />
            <Crowdfundingcard />
            <Crowdfundingcard />
            <Crowdfundingcard />
        </div>
    )
}

export default Crowdfunding
