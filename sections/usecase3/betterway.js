"use client";
import Button from "@/components/button";
import Padding from "@/components/padding";
import clsx from "clsx";
import React, { useEffect } from "react";

const Betterway = () => {
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      const heroSection1 = document.querySelector(".hero-section1");
      const scrollTop = window.pageYOffset;

      if (heroSection) {
        heroSection.style.transform = `translateY(${scrollTop * 0.5}px)`;
      }
      if (heroSection1) {
        heroSection1.style.transform = `translateY(${-scrollTop * 1}px)`;
      }
    };

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="relative w-[100vw] bg-[#163300] pb-[15rem] overflow-hidden">
      <div className="h-[90vh] hero-section1 px-[1rem] w-[100vw] md:px-[2rem] lg:px-[3rem] absolute grid-cols-2 grid-rows-2 grid">
        <div className="h-full w-full col-start-1 row-start-1   lg:row-start-2 lg:col-start-2 row-span-2 lg:row-span-1 relative">
          <video
            autoPlay
            muted
            loop
            className="h-[50%] md:h-[55%] md:w-[70%] lg:h-[85%] absolute top-[1.5rem] left-0 md:left-[-2rem]   lg:left-[70%]  lg:top-[20%] w-[90%] lg:w-[25%] object-cover"
          >
            <source
              src="/images/5998418-hd_1080_1920_30fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="w-full h-[90vh] px-[1rem] md:px-[2rem] lg:px-[3rem] absolute grid-cols-2 grid-rows-3 grid">
        <div className="h-full w-full col-start-2 row-start-1 relative">
          <video
            autoPlay
            muted
            loop
            className="h-[75%] absolute top-0 md:w-[50%] lg:left-[10%] lg:top-[30%] w-[80%] right-[1rem] md:right-[2rem] lg:right-0 lg:w-[20%] object-cover"
          >
            <source
              src="/images/7579595-hd_1080_1920_25fps (1).mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <Padding className="h-[90vh]   flex items-center ">
        <div className="flex hero-section flex-col  relative z-[100] ">
          <div className="font-thunder font-[700] text-[#9FE870] tracking-wide  uppercase  md:w-[400px]   leading-[0.9] text-[4rem] lg:w-[900px] lg:text-[6rem]">
            MANAGE YOUR DOCTORS A BETTER WAY
          </div>
          <div className="text-[#C0D1B3] tracking-[-2%] font-circular text-[0.9rem] font-normal leading-tight w-[350px] md:w-[400px] lg:w-[400px]">
            Get access to your medical history, appointments, insurances an all
            in one healthcare system.
          </div>
          <div className="py-[2rem]">
            <Button
              text={"Get started"}
              className={" bg-[#FFFFFF] text-[#000000]"}
            />
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Betterway;
