import Padding from '@/components/padding'
import Image from 'next/image'
import React from 'react'
import People1 from "../../public/images/people1.jpg"

const Manage = () => {
    return (
        <div className=' py-[8rem]'>
            <Padding>
                <div className=' uppercase w-[600px] leading-none tracking-wide font-thunder font-[700] text-[4rem]'>Manage ALL YOUR health data in one place </div>
                <div className=' items-center py-[4rem] lg:py-0   grid grid-cols-1 gap-20 lg:grid-cols-2'>

                    <div className='  flex flex-col gap-[2rem]'>
                        <div>
                            <div className=' font-circular  font-medium text-[1.1rem] text-[#272D31] '>Detailed Reports</div>
                            <div className=' text-[0.8rem] font-circular  font-thin w-[280px] text-[#8994A3]'>See all the data like doctor visits, diagnosis &
                                test results in one place.</div>
                        </div>
                        <div>
                            <div className=' font-circular  font-medium text-[1.1rem] text-[#272D31] '>Medical Enquiries</div>
                            <div className=' text-[0.8rem] font-circular  font-thin w-[280px] text-[#8994A3]'>See all the data like doctor visits, diagnosis &
                                test results in one place.</div>
                        </div>
                        <div>
                            <div className=' font-circular  font-medium text-[1.1rem] text-[#272D31] '>Online Tests</div>
                            <div className=' text-[0.8rem] font-circular  font-thin w-[280px] text-[#8994A3]'>See all the data like doctor visits, diagnosis &
                                test results in one place.</div>
                        </div>
                        <div>
                            <div className=' font-circular  font-medium text-[1.1rem] text-[#272D31] '>AI Assisted Support</div>
                            <div className=' text-[0.8rem] font-circular  font-thin w-[280px] text-[#8994A3]'>See all the data like doctor visits, diagnosis &
                                test results in one place.</div>
                        </div>
                    </div>
                    <div className=' h-[520px] flex lg:justify-center w-full '>
                        <Image className=' h-[100%]   object-cover  w-[400px]' src={People1} />
                    </div>
                </div>
            </Padding>
        </div>
    )
}

export default Manage
