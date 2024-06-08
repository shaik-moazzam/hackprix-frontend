import Button from '@/components/button'
import React from 'react'

const Hero = () => {
    return (
        <div className=' h-[200vh]  relative  w-[100vw]'>
            <div className='  h-[90vh] px-[1rem] w-[100vh] md:px-[2rem] lg:px-[3rem] absolute grid-cols-2 grid-rows-3 grid '>
                <div className='h-full w-full col-start-1 row-start-1 lg:row-start-2 row-span-2  relative'>
                    <video
                        autoPlay
                        muted
                        loop
                        className=" h-[50%] md:h-[55%] md:w-[70%] lg:h-[85%] absolute top-[1.5rem] left-0 md:left-[-2rem]  lg:left-[3rem] w-[90%] lg:w-[60%] object-cover"
                    >
                        <source src="/images/5998418-hd_1080_1920_30fps.mp4" type="video/mp4" />
                    </video>
                </div>

            </div>
            <div className=' w-full h-[90vh] px-[1rem] md:px-[2rem] lg:px-[3rem] absolute grid-cols-2 grid-rows-3 grid '>
                <div className='h-full w-full col-start-2 row-start-3 relative'>
                    <video
                        autoPlay
                        muted
                        loop
                        className="h-[75%] absolute top-0 md:w-[50%]  lg:left-[50%] w-[80%] right-[1rem] md:right-[2rem] lg:right-0 lg:w-[20%] object-cover"
                    >
                        <source src="/images/7579595-hd_1080_1920_25fps (1).mp4" type="video/mp4" />
                    </video>
                </div>

            </div>
            <div className=' h-[90vh] mix-blend-difference sticky top-[6.5rem]  flex items-center lg:block'>

                <div className=' flex  mix-blend-difference   flex-col items-center relative z-[100]  lg:pt-[6rem]'>
                    <div className=' font-thunder font-[700] text-[#fff]  tracking-wide text-center uppercase leading-none text-[4rem] lg:w-[1000px] lg:text-[6rem]'>A better health ecosystem
                        for the future.</div>
                    <div className=' text-[#454745] tracking-[-2%] font-circular text-[0.8rem]  font-normal leading-tight w-[350px] text-center md:w-[400px] lg:w-full'>Get access to your medical history, appointments, insurances an all in one healthcare system.</div>
                    <div className=' py-[2rem]'>
                    </div>
                    <Button
                        text={"Get started"}
                        className={" bg-[#60178F] text-[#000000]"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
