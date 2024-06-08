"use client"
import Padding from '@/components/padding'
import React, { useEffect, useRef, useState } from 'react'
import Dum1 from "../../public/images/dum1.jpg"
import Image from 'next/image'

const Details = () => {
    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);
    const [progress3, setProgress3] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            const containerTop = container.offsetTop;
            const containerHeight = container.clientHeight - window.innerHeight;
            const scrollTop = window.scrollY;

            const relativeScroll = scrollTop - containerTop;
            const progress = (relativeScroll / containerHeight) * 100;

            const cappedProgress = Math.min(Math.max(progress, 0), 100);

            // Calculate progress for the three ranges
            if (cappedProgress <= 33) {
                setProgress1((cappedProgress / 33) * 100);
                setProgress2(0);
                setProgress3(0);
            } else if (cappedProgress <= 66) {
                setProgress1(100);
                setProgress2(((cappedProgress - 33) / 33) * 100);
                setProgress3(0);
            } else {
                setProgress1(100);
                setProgress2(100);
                setProgress3(((cappedProgress - 66) / 34) * 100);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className=' py-[5rem]  w-full '>
            <div ref={containerRef} className={" relative lg:flex lg:gap-[10rem] xl:gap-[20rem] w-[100%] "}>
                <div className=' h-max bg-white  sticky lg:top-[10rem] px-[1rem] md:px-[2rem] lg:px-[3rem]'>
                    <div className="  font-circular font-medium text-[2rem]  w-[300px] ">
                        Details that matter.
                    </div>
                    <div className=" text-[#707E83] font-circular text-[0.95rem] md:max-w-[350px] ">
                        Our dashboard for managing and handling trademarks work like a charm.
                    </div>
                </div>
                <div className=' flex w-[100vw]  px-[1rem] md:px-[2rem] relative  lg:px-[3rem] py-[5rem] lg:py-0 lg:w-full  gap-[2rem]'>

                    <div className=' w-[80%] md:w-[90%] lg:w-[300px] xl:w-[500px]   flex flex-col gap-[2rem]'>
                        <Image className='' src={Dum1} />
                        <Image src={Dum1} />
                        <Image src={Dum1} />

                    </div>
                    <div className=' h-max  flex flex-col gap-4 sticky top-[10rem]'>
                        <div className=' bg-[#E2E8ED] rounded-xl w-1 h-16'>
                            <div style={{ height: `${progress1}%` }} className=' bg-[#1662E2] rounded-xl w-full '></div>
                        </div>
                        <div className=' bg-[#E2E8ED] rounded-xl w-1 h-16'>
                            <div style={{ height: `${progress2}%` }} className=' bg-[#1662E2] rounded-xl w-full '></div>
                        </div>
                        <div className=' bg-[#E2E8ED] rounded-xl w-1 h-16'>
                            <div style={{ height: `${progress3}%` }} className=' bg-[#1662E2] rounded-xl w-full '></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
