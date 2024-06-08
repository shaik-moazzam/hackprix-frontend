import Padding from "@/components/padding";
import Lock from "@/public/icons/lock";
import React from "react";
import src from "@/public/images/security.png";
import Image from "next/image";
import Securitycard from "@/components/securitycard";
import src1 from "@/public/images/security1.png";
import src2 from "@/public/images/security2.png";

const Datasecurity = () => {
  return (
    <div className="py-20">
      <Padding className={" pb-40"}>
        <div className=" pb-20 flex flex-col items-center text-[5rem] gap-10 font-thunder font-bold text-center leading-[5rem] justify-center mx-auto md:max-w-[680px] ">
          <Lock />
          DATA SECURITY IS EVERYTHING IN THIS WORLD
        </div>
        <div>
          <Image
            className=" max-h-[500px] overflow-hidden w-full object-cover rounded-xl "
            src={src}
          />
        </div>
      </Padding>
      <Padding className={" py-20"}>
        <div className=" text-[2rem] md:text-[5rem] md:leading-[5rem] font-thunder font-bold uppercase  text-center ">
          Still not sure about us?
        </div>
        <div className=" md:max-w-[420px] pt-1 text-[#8994A3] text-[0.95rem] font-circular font-[450] mx-auto text-center ">
          We keep patients data, insurances, booking tests, medical bills,
          online therapies all in one place
        </div>
        <div className=" grid md:flex w-max gap-20 md:gap-32 py-32 mx-auto ">
          <div className=" max-w-[300px] ">
            <Securitycard
              tag={"Seamless"}
              title={" Detailed Reports"}
              imgtext={" All your health data in one place"}
              description={
                "See all the data like doctor visits, diagnosis & test results in one place."
              }
              src={src1}
              textcolor={"text-[#1D55E5]"}
              className={" flex flex-col"}
              w={"max-w-[175px]"}
            />
          </div>
          <div className=" max-w-[300px] ">
            <Securitycard
              tag={"Simple"}
              title={"Online consultation"}
              imgtext={" Register your trademark in few simple steps"}
              description={
                "Online consultation and doctor availability in minutes."
              }
              src={src2}
              textcolor={"text-[#00C978]"}
              className={" flex flex-col-reverse"}
              w={"max-w-[205px]"}
            />
          </div>
        </div>
        <div>
          <div className=" text-[3rem] md:text-[7rem] md:leading-[7rem] mx-auto text-center    font-thunder font-bold  md:max-w-[700px] ">
            YOUR HEALTH WILL LOVE IT
          </div>
          <div className=" bg-[#9FE870] px-4 py-2 w-max rounded-full font-circular mx-auto mt-5 ">
            Get started with healthyme account
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Datasecurity;
