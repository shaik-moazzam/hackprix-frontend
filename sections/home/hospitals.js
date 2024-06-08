import Padding from "@/components/padding";
import Search from "@/public/icons/search";
import Image from "next/image";
import React from "react";
import src from "@/public/images/yashowda.png";
import src1 from "@/public/images/care.png";
import src2 from "@/public/images/virinchi.png";
import src3 from "@/public/images/prasad.png";
import src4 from "@/public/images/remedy.png";

const Hospitals = () => {
  return (
    <div className=" py-32 ">
      <Padding>
        <div className=" font-thunder font-bold text-[2rem] md:text-[5rem] md:leading-[5rem] md:max-w-[540px] ">
          ALL YOUR HOSPITALS IN ONE PLACE
        </div>
        <div className=" text-[#707E83] font-circular text-[0.95rem] md:max-w-[350px] ">
          We keep patients data, insurances, booking tests, medical bills,
          online therapies all in one place
        </div>
        <div className=" bg-[#F2F2F2] mt-10 w-full max-w-[420px] flex justify-between px-4 items-center rounded-full ">
          {" "}
          <input
            className=" bg-transparent w-full outline-none placeholder:text-[#989EA0] text-[0.95rem] py-3 "
            placeholder="Search if your hospital is available now"
          />{" "}
          <Search />
        </div>
        <div className=" pt-32 flex gap-10 flex-wrap justify-between ">
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" bg-blend-multiply w-[80px] " src={src} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" w-[80px]  mix-blend-multiply " src={src1} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" w-[80px] " src={src2} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" w-[80px]  mix-blend-multiply " src={src3} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" w-[80px]  mix-blend-multiply " src={src4} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" bg-blend-multiply w-[80px] " src={src} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" w-[80px]  mix-blend-multiply " src={src1} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" w-[80px] " src={src2} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" w-[80px]  mix-blend-multiply " src={src3} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" w-[80px]  mix-blend-multiply " src={src4} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" bg-blend-multiply w-[80px] " src={src} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" w-[80px]  mix-blend-multiply " src={src1} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" w-[80px] " src={src2} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" w-[80px]  mix-blend-multiply " src={src3} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" w-[80px]  mix-blend-multiply " src={src4} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" bg-blend-multiply w-[80px] " src={src} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" w-[80px]  mix-blend-multiply " src={src1} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" w-[80px] " src={src2} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" w-[80px]  mix-blend-multiply " src={src3} />
          </div>
          <div className=" px-4 py-3 bg-[#F2F2F2] rounded-xl w-[230px] flex justify-center ">
            <Image className=" w-[80px]  mix-blend-multiply " src={src4} />
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Hospitals;
