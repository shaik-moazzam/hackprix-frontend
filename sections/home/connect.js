import Padding from "@/components/padding";
import Savecards from "@/components/savecards";
import React from "react";

const Connect = () => {
  return (
    <div className=" py-60 pt-80 ">
      <Padding>
        <div className=" font-thunder font-bold text-[#80EC3A]  leading-[7rem] flex flex-col gap-60 text-center text-[3rem] md:text-[6rem] w-max mx-auto ">
          <div className=" text-black sticky top-80 ">
            <div className="  -translate-y-[200%] ">A NEW WAY TO CONNECT</div>
          </div>
          <div className=" sticky top-80 ">
            <div className="  -translate-y-full ">PATIENTS</div>
          </div>
          <div className=" sticky top-80 ">
            <div className="  ">DOCTORS</div>
          </div>
          <div className=" sticky top-[30rem] ">
            <div className="  translate-y-full ">AND HOSPITALS</div>
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Connect;
