import React from 'react'
import Button from './button'
import clsx from 'clsx'

const Crowdfundingcard = () => {
    return (
        <div className=' border-[#E4E4E4] w-full border-[1px] rounded-3xl p-[1rem]'>
            <div className=' flex justify-between items-end'>
                <div className=' font-circular  font-medium text-[1.3rem]'>Urgent, Need help for chemo of my son.</div>
                <div className=' font-medium  text-[0.8ren] font-circular'>

                    <span className=' text-[#60646A]'>Created on</span>
                    <span className=' text-[#2C2E30]'> 29 May, 2024</span>
                </div>
            </div>
            <div className=' flex gap-[1rem] py-[1rem]'>
                <div className={clsx(" text-[#60646A]  font-circular hover:cursor-pointer  border-[1px] border-[#DAD8D8] flex justify-center  items-center  text-[0.9rem] md:text-[0.9rem] lg:text-[0.95rem] leading-none rounded-full     px-5 py-3.5 pb-3 w-max")}>
                    Medical Urgency
                </div>
                <div className={clsx("  text-[#60646A] font-circular hover:cursor-pointer  border-[1px] border-[#DAD8D8] flex justify-center  items-center  text-[0.9rem] md:text-[0.9rem] lg:text-[0.95rem] leading-none rounded-full     px-5 py-3.5 pb-3 w-max")}>
                    Blood Donation
                </div>

            </div>
            <div className='text-[#60646A] font-circular text-[0.9rem] w-[800px]'>
                Meeting with staff for the planning of upcoming sports events and also planning about the management, performance review.Meeting with staff for the planning of upcoming sports events and also planning about the management, performance review.Meeting with staff for the planning of.
            </div>

        </div>
    )
}

export default Crowdfundingcard
