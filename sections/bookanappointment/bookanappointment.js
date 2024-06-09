"use client";
import Padding from "@/components/padding";
import Arrowleft from "@/public/icons/arrowleft";
import Arrowright from "@/public/icons/arrowright";
import Filter from "@/public/icons/filter";
import Notselected from "@/public/icons/notselected";
import Search from "@/public/icons/search";
import Selected from "@/public/icons/selected";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Doctorcard from "@/components/doctorcard";
const Bookanappointment = () => {
  const [fillter, setfillter] = useState(false);
  const [filltervalue, setfilltervalue] = useState("teacher");
  const easing = [0, 0.99, 1, 1];
  return (
    <div>
      <Padding>
        <div className=" flex justify-between py-[2rem] ">
          <div className=" flex items-center gap-2">
            <Arrowleft />
            <div className=" relative">
              <input
                placeholder="Search here"
                className=" border-[1px] font-circular text-[0.85rem] border-[#EDEDED] focus:border-[#205FFF] outline-none px-4 py-3 rounded-3xl w-[400px]"
              />
              <div className=" absolute    top-0  flex items-center h-full right-4">
                <Search color={"#AFB2B6"} />
              </div>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                setfillter(!fillter);
              }}
              className={
                " border-[1px] cursor-pointer relative w-max leading-none px-5  font-circular font-medium  py-3 rounded-full border-[#DAD8D8]"
              }
            >
              <div className=" flex  items-center gap-2">
                <Filter />
                Filter
              </div>

              <motion.div
                initial={{
                  height: 0,
                }}
                animate={{
                  height: fillter ? "auto" : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: fillter ? easing : "easeOut",
                }}
                className="  font-circular  font-normal overflow-hidden left-[-100%] -top-[-3.25rem] absolute"
              >
                <div className="   w-[12rem] border-[1px] bg-white rounded-xl border-[#F2F2F2]">
                  <div
                    onClick={() => {
                      setfilltervalue("teacher");
                    }}
                    className=" flex gap-2 items-center py-4 px-6 border-b-[1px] border-[#EEF2F8]"
                  >
                    {filltervalue == "teacher" ? <Selected /> : <Notselected />}{" "}
                    Tutor
                  </div>
                  <div
                    onClick={() => {
                      setfilltervalue("student");
                    }}
                    className=" flex gap-2 items-center py-4 px-6 "
                  >
                    {filltervalue != "teacher" ? <Selected /> : <Notselected />}{" "}
                    Student
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-4">
          <Doctorcard
            name={"Miss. Shehnazz"}
            qualification={"Apollo hospitals"}
            feild={"Psychologist"}
            desc={
              "As a science teacher, I specialise in guiding students through the captivating realms of biology, chemistry, and physics through the captivating realms of biology, chemistry, and physics"
            }
          />
        </div>
      </Padding>
    </div>
  );
};

export default Bookanappointment;
