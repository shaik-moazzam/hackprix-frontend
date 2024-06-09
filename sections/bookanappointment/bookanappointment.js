"use client";
import Padding from "@/components/padding";
import Arrowleft from "@/public/icons/arrowleft";
import Arrowright from "@/public/icons/arrowright";
import Filter from "@/public/icons/filter";
import Notselected from "@/public/icons/notselected";
import Search from "@/public/icons/search";
import Selected from "@/public/icons/selected";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Doctorcard from "@/components/doctorcard";
import getAllDoctors from "@/api/getAllDoctors";
import { toast } from "@/components/ui/use-toast";

const specializations = {
  "General Practitioner": "A medical doctor who provides primary and continuing care for patients of all ages.",
  "Cardeologist": "A doctor specializing in the diagnosis and treatment of heart and blood vessel conditions.",
  "Dermatologist": "A specialist focused on the diagnosis and treatment of skin disorders.",
  "Endocrinologist": "A doctor who specializes in the treatment of hormone imbalances and endocrine system disorders.",
  "Gastroenterologist": "A specialist in the diagnosis and treatment of digestive system disorders.",
  "Hematologist": "A doctor who specializes in diseases of the blood and blood-forming organs.",
  "Neurologist": "A medical specialist who diagnoses and treats disorders of the nervous system.",
  "Oncologist": "A doctor who specializes in the treatment of cancer.",
  "Ophthalmologist": "A medical doctor specializing in the diagnosis and treatment of eye disorders.",
  "Orthopedic Surgeon": "A surgeon who specializes in the treatment of the musculoskeletal system.",
  "Otolaryngologist (ENT)": "A doctor who specializes in the treatment of ear, nose, and throat disorders.",
  "Pediatrician": "A medical doctor who manages the health of children, including physical, behavior, and mental health issues.",
  "Psychiatrist": "A medical doctor specializing in the diagnosis, treatment, and prevention of mental illness and emotional problems.",
  "Pulmonologist": "A specialist in the diagnosis and treatment of lung and respiratory tract diseases.",
  "Rheumatologist": "A doctor specializing in the diagnosis and treatment of arthritis and other diseases of the joints, muscles, and bones.",
  "Urologist": "A doctor who specializes in diseases of the urinary tract and the male reproductive system.",
  "Therapist": "A professional trained to treat mental and emotional disorders through counseling and other techniques."
};

const Bookanappointment = () => {
  const [fillter, setfillter] = useState(false);
  const [filltervalue, setfilltervalue] = useState("teacher");
  const easing = [0, 0.99, 1, 1];
  const [doctors, setDoctors] = useState();
  const [pageLoad, setPageLoad] = useState(true);
  useEffect(() => {
    const allDoctors = async () => {
      const data = await getAllDoctors();
      console.log(data);
      if (data.error) {
        toast({ title: data.error });
      }
      else {
        setDoctors(data);
      }
      setPageLoad(false);
    }
    allDoctors();
  }, [])

  if (pageLoad) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <div className="loader-line" />
      </div>
    )
  }
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
          {doctors?.map((obj, index) => (
            obj.specialization &&
            <Doctorcard
              name={obj.name}
              qualification={obj.hospital ? obj.hospital : "None"}
              feild={obj.specialization}
              desc={specializations[`${obj.specialization}`] || "None"}
              id={obj._id}
            />))}
        </div>
      </Padding>
    </div>
  );
};

export default Bookanappointment;
