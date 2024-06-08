import Padding from '@/components/padding'
import React from 'react'
import Dum1 from "../../public/images/dum1.jpg"
import Image from 'next/image'

const Details = () => {
    return (
        <div className=' py-[5rem]  w-full '>
            <Padding className={" relative flex gap-[4rem] w-[100%]"}>
                <div className=' h-max  sticky top-[10rem]'>
                    <div className="  font-circular font-medium text-[2rem]  md:max-w-[540px] ">
                        Details that matter.
                    </div>
                    <div className=" text-[#707E83] font-circular text-[0.95rem] md:max-w-[350px] ">
                        Our dashboard for managing and handling trademarks work like a charm.
                    </div>
                </div>
                <div className=' w-[500px] ml-[10rem] flex flex-col gap-[2rem]'>
                    <Image className='' src={Dum1} />
                    <Image src={Dum1} />
                    <Image src={Dum1} />

                </div>
                <div className=' h-max  flex flex-col gap-4 sticky top-[10rem]'>
                    <div className=' bg-[#E2E8ED] rounded-xl w-1 h-16'>
                        <div></div>
                    </div>
                    <div className=' bg-[#E2E8ED] rounded-xl w-1 h-16'>
                        <div></div>
                    </div>
                    <div className=' bg-[#E2E8ED] rounded-xl w-1 h-16'>
                        <div></div>
                    </div>
                </div>
            </Padding>
        </div>
    )
}

export default Details
