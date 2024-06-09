"use client";
import Padding from "@/components/padding";
import Image from "next/image";
import React, { useState } from "react";
import src from "@/public/images/bodytest.png";
import src1 from "@/public/images/tube.png";
import { motion } from "framer-motion";
import Button from "@/components/button";

const Medicaltest = () => {
  const testData = [
    {
      id: 1,
      name: "Diabetes Test",
      duration: "1-2 days",
      code: "DIA03652",
      description: "impaired glucose tolerance",
      price: "Rs: 1,299",
      imageSrc: src1,
    },
    {
      id: 2,
      name: "Diabetes Test",
      duration: "1-2 days",
      code: "DIA03652",
      description: "impaired glucose tolerance",
      price: "Rs: 1,299",
      imageSrc: src1,
    },
    {
      id: 3,
      name: "Diabetes Test",
      duration: "1-2 days",
      code: "DIA03652",
      description: "impaired glucose tolerance",
      price: "Rs: 1,299",
      imageSrc: src1,
    },
  ];
  const [activetab, setactivetab] = useState(0);
  return (
    <div>
      <Padding>
        <div className=" bg-[#1D55E5] flex justify-between overflow-hidden mt-6 rounded-3xl ">
          <div className=" p-[3rem]  ">
            <div className=" text-white font-thunder text-[6rem] leading-[6rem] font-bold max-w-[600px] ">
              GET 20% OFF ON FULL BODY TEST
            </div>
            <div className=" text-[#BBD8FA] text-[0.9rem] font-circular ">
              Offer valid till 20 June, 2024
            </div>
            <div className=" bg-[#FFFFFF] font-circular w-max px-4 py-2 rounded-full mt-28   ">
              Book Now
            </div>
          </div>
          <div className=" w-[35%] ">
            <Image className="  " src={src} />
          </div>
        </div>
        <div>
          <div className=" p-1 text-[0.95rem] font-circular border border-[#EBECEE] my-10 flex w-max gap-2 rounded-full ">
            <div
              className="  px-4 py-2 cursor-pointer relative "
              onClick={() => setactivetab(0)}
            >
              {activetab == 0 && (
                <motion.div
                  layoutId="tab"
                  className=" w-full h-full rounded-full absolute top-0 -z-10 left-0 bg-[#E9EBE8] "
                ></motion.div>
              )}
              Available tests
            </div>
            <div
              className=" px-4 py-2 cursor-pointer relative "
              onClick={() => setactivetab(1)}
            >
              {activetab == 1 && (
                <motion.div
                  layoutId="tab"
                  className=" w-full h-full rounded-full absolute top-0 -z-10 left-0 bg-[#E9EBE8] "
                ></motion.div>
              )}
              Previous tests
            </div>
          </div>
          {activetab == 0 ? (
            <div className=" my-6 border border-[#E4E4E4] text-[0.95rem] font-circular overflow-hidden rounded-3xl">
              <div className=" px-3 bg-[#F7F7F7] border-b-[1px] border-[#E5E5E5] py-3 flex gap-2 ">
                <div className=" w-[5%] text-center ">#</div>
                <div className=" w-[20%] ">Name</div>
                <div className=" w-[15%] ">Test-code</div>
                <div className=" w-[25%] ">Biological name</div>
                <div className=" w-[15%] ">Price</div>
                <div className=" w-[20%] "></div>
              </div>
              {testData.map((item, index) => (
                <div
                  key={item.id}
                  className={`px-3 py-3 flex items-center gap-2 border-b border-[#F7F7F7] ${
                    index % 2 !== 0 ? "bg-[#FFFFFF]" : "bg-[#F7F7F7]"
                  }`}
                >
                  <div className="w-[5%] text-center">{item.id}</div>
                  <div className="w-[20%] flex gap-2.5">
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      className="w-[45px]"
                    />
                    <div>
                      <div>{item.name}</div>
                      <div className="text-[#9F9D9D]">{item.duration}</div>
                    </div>
                  </div>
                  <div className="w-[15%]">{item.code}</div>
                  <div className="w-[25%]">{item.description}</div>
                  <div className="w-[15%]">{item.price}</div>
                  <div className="w-[20%]">
                    <Button
                      text={"Book Now"}
                      className={
                        index % 2 !== 0
                          ? " bg-white border border-[#EAE7E7] "
                          : "bg-white"
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className=" my-6 border border-[#E4E4E4] text-[0.95rem] font-circular overflow-hidden rounded-3xl">
              <div className=" px-3 bg-[#F7F7F7] border-b-[1px] border-[#E5E5E5] py-3 flex gap-2 ">
                <div className=" w-[5%] text-center ">#</div>
                <div className=" w-[20%] ">Name</div>
                <div className=" w-[15%] ">Test-code</div>
                <div className=" w-[25%] ">Biological name</div>
                <div className=" w-[15%] ">Price</div>
                <div className=" w-[20%] "></div>
              </div>
              {testData.map((item, index) => (
                <div
                  key={item.id}
                  className={`px-3 py-3 flex items-center gap-2 border-b border-[#F7F7F7] ${
                    index % 2 !== 0 ? "bg-[#FFFFFF]" : "bg-[#F7F7F7]"
                  }`}
                >
                  <div className="w-[5%] text-center">{item.id}</div>
                  <div className="w-[20%] flex gap-2.5">
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      className="w-[45px]"
                    />
                    <div>
                      <div>{item.name}</div>
                      <div className="text-[#9F9D9D]">{item.duration}</div>
                    </div>
                  </div>
                  <div className="w-[15%]">{item.code}</div>
                  <div className="w-[25%]">{item.description}</div>
                  <div className="w-[15%]">{item.price}</div>
                  <div className="w-[20%]">
                    <Button
                      text={"Book Now"}
                      className={
                        index % 2 !== 0
                          ? " bg-white border border-[#EAE7E7] "
                          : "bg-white"
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Padding>
    </div>
  );
};

export default Medicaltest;
