"use client";
import Button from "@/components/button";
import Padding from "@/components/padding";
import clsx from "clsx";
import React, { useEffect } from "react";

const Betterway = () => {
  return (
    <div className="relative w-[100vw] bg-[#163300] overflow-hidden">
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
