"use client"
import Button from '@/components/button';
import clsx from 'clsx';
import React, { useEffect } from 'react';

const Hero = () => {


    return (
        <div className='relative w-[100vw]  bg-[#1D55E5] overflow-hidden'>

            <div className='h-[90vh] justify-center  flex items-center '>
                <div className='flex hero-section flex-col items-center relative z-[100] '>
                    <div className='font-thunder font-[700] text-[#fff] tracking-wide text-center uppercase  md:w-[400px]   leading-[0.9] text-[4rem] lg:w-[900px] lg:text-[8rem]'>
                        YOUR HEALTH DATA
                        ANTIME ANYWHERE
                    </div>
                    <div className='text-[#95AEEF] tracking-[-2%] font-circular text-[0.8rem] font-normal leading-tight w-[350px] text-center md:w-[400px] lg:w-full'>
                        Get access to your medical history, appointments, insurances an all in one healthcare system.
                    </div>
                    <div className='py-[2rem]'>

                        <Button
                            text={"Get started"}
                            className={" bg-[#FFFFFF] text-[#000000]"}
                        />
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Hero;
