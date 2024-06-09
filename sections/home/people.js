"use client"
import Padding from '@/components/padding'
import Arrowleft from '@/public/icons/arrowleft'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import People1 from "../../public/images/people1.jpg"
import People2 from "../../public/images/people2.jpg"
import People3 from "../../public/images/people3.jpg"
import People4 from "../../public/images/people4.jpg"
import { motion } from 'framer-motion'
import clsx from 'clsx'
const People = () => {
    const [image, setimage] = useState(1)
    const easing = [0, 0.99, 1, 1];
    useEffect(() => {
        console.log(image, "image")
    }, [image])
    return (
        <div className='  select-none w-full  overflow-hidden py-[5rem]'>
            <Padding className={" w-full lg:flex gap-[8rem] h-full"}>
                <div>
                    <div className=' uppercase font-thunder tracking-wide text-[5rem] w-[350px] leading-none font-[700]'>
                        For people
                        DOCTORS AND INSTITUTIONS
                    </div>
                    <div className=' flex gap-[1rem] py-[1rem]'>
                        <div onClick={() => {
                            if (image > 1) {
                                setimage(prevImage => prevImage - 1);

                            }
                        }} className={clsx('  w-max p-3 px-4 rounded-full', image > 1 ? "bg-[#9FE870] border-[#9FE870]" : "bg-[#F7F8FA] border-[1px] border-[#E8E8EA]")}>
                            <Arrowleft color={image > 1 ? "#000000" : "#8A8F95"} />
                        </div>
                        <div onClick={() => {
                            if (image >= 0 && image < 4) {
                                setimage(prevImage => prevImage + 1);
                            }
                        }} className={clsx('  rotate-180 border-[1px]  w-max p-3 px-4 rounded-full', image >= 0 && image < 4 ? "bg-[#9FE870] border-[#9FE870]" : "bg-[#F7F8FA] border-[1px] border-[#E8E8EA]")}>
                            <Arrowleft color={image >= 0 && image < 4 ? "#000000" : "#8A8F95"} />
                        </div>
                    </div>
                </div>
                <div className={clsx('  pt-[2rem] lg:pt-0 flex items-center ', image == 4 ? "gap-0" : "gap-[1rem]")}>
                    <div className=' relative'>
                        <motion.div initial={{
                            height: "520px",
                            width: "350px",
                            opacity: 1,
                            translateX: 0
                        }}
                            animate={{
                                height: image <= 1 ? "520px" : 0,
                                width: image <= 1 ? "350px" : 0,
                                opacity: image <= 1 ? 1 : 0,
                                translateX: image <= 1 ? 0 : "260px",

                            }}
                            transition={{
                                delay: image > 1 ? 0.2 : 0,
                                duration: image > 1 ? 0.25 : 0.25,
                            }} className=' flex items-center justify-center'>

                            <motion.div
                                initial={{
                                    height: "520px",
                                    width: "350px",
                                    opacity: 1,
                                    translateX: 0
                                }}
                                animate={{
                                    height: image <= 1 ? "520px" : 0,
                                    width: image <= 1 ? "350px" : 0,
                                    opacity: image <= 1 ? 1 : 0,


                                }}
                                transition={{
                                    duration: image > 1 ? 1 : 1.5,
                                    ease: easing
                                }}
                                className=' absolute overflow-hidden '>
                                <Image className=' h-[100%] w-[100%]' src={People1} />
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className=' relative'>
                        <motion.div initial={{
                            height: "520px",
                            width: "350px",
                            opacity: 1,
                            translateX: 0
                        }}
                            animate={{
                                height: image <= 2 ? "520px" : 0,
                                width: image <= 2 ? "350px" : 0,
                                opacity: image <= 2 ? 1 : 0,
                                translateX: image <= 2 ? 0 : "260px",

                            }}
                            transition={{
                                delay: image > 2 ? 0.2 : 0,
                                duration: image > 2 ? 0.25 : 0.25,
                            }} className=' flex items-center justify-center'>

                            <motion.div
                                initial={{
                                    height: "520px",
                                    width: "350px",
                                    opacity: 1,
                                    translateX: 0
                                }}
                                animate={{
                                    height: image <= 2 ? "520px" : 0,
                                    width: image <= 2 ? "350px" : 0,
                                    opacity: image <= 2 ? 1 : 0,


                                }}
                                transition={{
                                    duration: image > 2 ? 1 : 1.5,

                                    ease: easing
                                }}
                                className=' absolute overflow-hidden '>
                                <Image className=' h-[100%] w-[100%]' src={People2} />
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className=' relative'>
                        <motion.div initial={{
                            height: "520px",
                            width: "350px",
                            opacity: 1,
                            translateX: 0
                        }}
                            animate={{
                                height: image <= 3 ? "520px" : 0,
                                width: image <= 3 ? "350px" : 0,
                                opacity: image <= 3 ? 1 : 0,
                                translateX: image <= 3 ? 0 : "260px",

                            }}
                            transition={{
                                delay: image > 3 ? 0.2 : 0,
                                duration: image > 3 ? 0.25 : 0.25,
                            }} className=' flex items-center justify-center'>

                            <motion.div
                                initial={{
                                    height: "520px",
                                    width: "350px",
                                    opacity: 1,
                                    translateX: 0
                                }}
                                animate={{
                                    height: image <= 3 ? "520px" : 0,
                                    width: image <= 3 ? "350px" : 0,
                                    opacity: image <= 3 ? 1 : 0,


                                }}
                                transition={{
                                    duration: image > 3 ? 1 : 1.5,
                                    ease: easing
                                }}
                                className=' absolute overflow-hidden '>
                                <Image className=' h-[100%] w-[100%]' src={People3} />
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className=' relative'>
                        <motion.div initial={{
                            height: "520px",
                            width: "350px",
                            opacity: 1,
                            translateX: 0
                        }}
                            animate={{
                                height: image <= 4 ? "520px" : 0,
                                width: image <= 4 ? "350px" : 0,
                                opacity: image <= 4 ? 1 : 0,
                                translateX: image <= 4 ? 0 : "260px",

                            }}
                            transition={{
                                delay: image > 4 ? 0.2 : 0,
                                duration: image > 4 ? 0.25 : 0.25,
                            }} className=' flex items-center justify-center'>

                            <motion.div
                                initial={{
                                    height: "520px",
                                    width: "350px",
                                    opacity: 1,
                                    translateX: 0
                                }}
                                animate={{
                                    height: image <= 4 ? "520px" : 0,
                                    width: image <= 4 ? "350px" : 0,
                                    opacity: image <= 4 ? 1 : 0,


                                }}
                                transition={{
                                    duration: image > 4 ? 1 : 1.5,

                                    ease: easing
                                }}
                                className=' absolute overflow-hidden '>
                                <Image className=' h-[100%] w-[100%]' src={People4} />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </Padding>
        </div>
    )
}

export default People
