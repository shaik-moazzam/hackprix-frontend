"use client";
import Padding from "@/components/padding";
import Image from "next/image";
import React, { useState } from "react";
import src from "@/public/images/bodytest.png";
import src1 from "@/public/images/tube.png";
import { motion } from "framer-motion";
import Button from "@/components/button";
import clsx from "clsx";
import Link from "next/link";

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
  const [activetab, setactivetab] = useState(1);
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
            <div className="  mt-28   ">
              <Button text={" Book Now"} className={" bg-white"} />

            </div>
          </div>
          <div className=" w-[35%] ">
            <Image className="  " src={src} />
          </div>
        </div>
        <div>
          <div className=" w-[300px] pb-[1rem] pt-[3rem] ">
            <div className="grid grid-cols-2 rounded-full text-[0.95rem]  relative text-[#939393] overflow-hidden p-1 font-[600] bg-[#fff] font-Matter items-center border-2 border-[#EBECEE]">
              <motion.div
                className={clsx(
                  "relative z-40  font-circular hover:cursor-pointer flex justify-center w-[100%] items-center leading-none  rounded-full h-max xl:px-5 xl:py-4 px-5 py-4 transition-all duration-1000",
                  activetab === 1 ? "text-[#000000]" : "text-[#000000]"
                )}
                onClick={() => setactivetab(1)}
              >
                Available tests
              </motion.div>
              <motion.div
                className={clsx(
                  "relative z-40  font-circular flex justify-center w-[100%] items-center leading-none rounded-full xl:px-5 xl:py-4 px-5 py-4 transition-all duration-1000 cursor-pointer",
                  activetab === 2 ? "text-[#000000]" : "text-[#000000]"
                )}
                onClick={() => {
                  // if (user?.mode) {
                  setactivetab(2);
                  // }
                }}
              >
                Previous tests
              </motion.div>

              <motion.span
                style={{
                  transform: `translateX(calc(${(activetab - 1) * 100}% + (${activetab === 1 ? "0.25rem" : "0rem"
                    })))`, // Adjust translation with gap
                  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  width: "49.4%", // Set width to 1/3 of its parent
                  height: "calc(100% - 0.5rem)", // Adjust height with 0.25rem gap
                  top: "0.25rem", // Adjust top position to align with the gap
                }}
                className="bg-[#E9EBF1] up rounded-[2rem] leading-none border-[2px] absolute border-[#ECECEC]"
              />
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
                  className={`px-3 py-3 flex items-center gap-2 border-b border-[#F7F7F7] ${index % 2 !== 0 ? "bg-[#FFFFFF]" : "bg-[#F7F7F7]"
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
                  className={`px-3 py-3 flex items-center gap-2 border-b border-[#F7F7F7] ${index % 2 !== 0 ? "bg-[#FFFFFF]" : "bg-[#F7F7F7]"
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
                    <Link href={`/dashboard/medicaltest/details`}>

                      <Button
                        text={"View"}
                        className={
                          index % 2 !== 0
                            ? " bg-white border border-[#EAE7E7] "
                            : "bg-white"
                        }
                      />
                    </Link>
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
