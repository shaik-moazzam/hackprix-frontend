import React from 'react'
import Padding from './padding'

import clsx from 'clsx'
import Arrowdown from '@/public/icons/arrowdown'
import Link from 'next/link'
import Logo from '@/public/icons/logo'
import Button from './button'

const Navbar = () => {
    return (
        <div className=' py-[2rem] sticky top-0 z-[200]'>
            <Padding>
                <div className=' flex justify-between items-center'>
                    <div className=' flex gap-10 items-center'>
                        <Logo />
                        <div
                            className={clsx(
                                "   gap-[1rem]     hidden lg:flex text-[#454745]  font-circular font-[450] text-[0.95rem] ",

                            )}
                        >
                            <div

                                className=" flex gap-1 leading-none  items-center"
                            >
                                <div className=" leading-none cursor-pointer">Use cases</div>
                                <div
                                    className={clsx(
                                        " flex items-center",

                                    )}
                                >
                                    <Arrowdown />
                                </div>
                            </div>
                            <div

                                className=" flex gap-1 items-center"
                            >
                                <div className=" leading-none cursor-pointer">Hospitals</div>
                                <div
                                    className={clsx(
                                        " flex items-center",

                                    )}
                                >
                                    <Arrowdown />
                                </div>
                            </div>

                            <div

                                className=" flex gap-1 leading-none  items-center"
                            >
                                <div className=" leading-none cursor-pointer">Organisations</div>
                                <div
                                    className={clsx(
                                        " flex items-center",

                                    )}
                                >
                                    <Arrowdown />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={clsx(
                            "  gap-[2rem] items-center hidden md:flex",

                        )}
                    >

                        <Link href={"/login"}>
                            <div className=" text-[0.95rem] leading-none font-circular font-[450] text-[#454745] ">Login</div>
                        </Link>
                        <div

                        >

                            <Button
                                text={"Get started"}
                                className={" bg-[#9FE870] text-[#000000]"}
                            />

                        </div>
                    </div>
                </div>
            </Padding>
        </div>
    )
}

export default Navbar
