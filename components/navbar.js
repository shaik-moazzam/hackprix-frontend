"use client"
import React, { useEffect, useState } from 'react'
import Padding from './padding'

import clsx from 'clsx'
import Arrowdown from '@/public/icons/arrowdown'
import Link from 'next/link'
import Logo from '@/public/icons/logo'
import Button from './button'
import { NavigationMenuDemo } from './menu'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    const params = usePathname();
    useEffect(() => {

        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsScrolling(currentScrollPos > prevScrollPos);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={clsx(' py-[1rem]  sticky top-0 z-[200]', isScrolling
            ? " translate-y-[-101%]  transition-all duration-1000  ease-in-out"
            : "  translate-y-0 transition-all duration-1000 ease-in-out", params.includes("usecase1") ? " bg-[#1D55E5]" : params.includes("usecase2") ? "bg-[#EDF1F4]" : params.includes("usecase3") ? " bg-[#163300]" : "")}>
            <Padding className={""}>
                <div className=' flex justify-between items-center'>
                    <div className=' flex gap-10 items-center'>
                        <Logo color={params.includes("usecase1") ? "#fff" : params.includes("usecase3") ? " #fff" : "#000000"} />
                        <div
                            className={clsx(
                                "   gap-[1rem]     hidden lg:flex   font-circular font-[450] text-[0.95rem] ", params.includes("usecase1") ? " text-[#95AEEF]" : params.includes("usecase2") ? "text-[#858A98]" : params.includes("usecase3") ? "text-[#C0D1B3]" : "text-[#454745]",

                            )}
                        >
                            {/* <div

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
                            </div> */}
                            <NavigationMenuDemo />
                        </div>
                    </div>
                    <div
                        className={clsx(
                            "  gap-[2rem] items-center hidden md:flex",

                        )}
                    >

                        <Link href={"/login"}>
                            <div className={clsx(" text-[0.95rem] leading-none font-circular font-[450]  ", params.includes("usecase1") ? " text-[#95AEEF]" : params.includes("usecase2") ? "text-[#858A98]" : params.includes("usecase3") ? "text-[#C0D1B3]" : "text-[#454745]")}>Login</div>
                        </Link>
                        <div

                        >

                            <Button
                                text={"Get started"}
                                className={clsx("  text-[#000000]", params.includes("usecase1") ? " bg-[#fff]" : params.includes("usecase2") ? " bg-[#fff]" : params.includes("usecase3") ? " bg-[#fff]" : "bg-[#9FE870]")}
                            />

                        </div>
                    </div>
                </div>
            </Padding>
        </div>
    )
}

export default Navbar
