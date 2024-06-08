import Padding from '@/components/padding'
import Arrowleft from '@/public/icons/arrowleft'
import Image from 'next/image'
import React from 'react'
import People1 from "../../public/images/people1.jpg"
const People = () => {
    return (
        <div className=' w-full  py-[5rem]'>
            <Padding className={" w-full flex h-full"}>
                <div>
                    <div className=' uppercase font-thunder tracking-wide text-[5rem] w-[400px] leading-none font-[700]'>
                        For people
                        DOCTORS AND INSTITUTIONS
                    </div>
                    <div className=' flex gap-[1rem] py-[1rem]'>
                        <div className=' bg-[#F7F8FA] border-[1px] border-[#E8E8EA] w-max p-3 px-4 rounded-full'>
                            <Arrowleft color={"#8A8F95"} />
                        </div>
                        <div className=' bg-[#9FE870] rotate-180 border-[1px] border-[#9FE870] w-max p-3 px-4 rounded-full'>
                            <Arrowleft />
                        </div>
                    </div>
                </div>
                <div className=' h-[80%] w-full'>
                    <Image className=' h-[100%] object-cover w-[300px]' src={People1} />
                </div>
            </Padding>
        </div>
    )
}

export default People
