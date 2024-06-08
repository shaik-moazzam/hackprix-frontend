import Padding from "@/components/padding";
import Savecards from "@/components/savecards";
import React from "react";

const Save = () => {
  return (
    <div className=" py-20 bg-[#1D55E5] ">
      <Padding>
        <div className=" pb-40 ">
          <div className=" font-thunder uppercase tracking-wide md:leading-[5rem] font-bold text-[2rem] md:text-[5rem] md:max-w-[730px] text-white ">
            Save your time And Money choose the right hospital for you
          </div>
          <div className=" text-[#95AEEF] font-circular font-[450] text-[0.95rem] md:max-w-[400px] pt-3 ">
            We keep patients data, insurances, booking tests, medical bills,
            online therapies all in one place
          </div>
        </div>
        <Savecards />
      </Padding>
    </div>
  );
};

export default Save;
