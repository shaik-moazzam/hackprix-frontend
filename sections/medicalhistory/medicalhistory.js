import Padding from "@/components/padding";
import Arrowright from "@/public/icons/arrowright";
import clsx from "clsx";
import React from "react";

const Medicalhistory = () => {
  const medicalHistoryData = [
    {
      date: "24, May 2024",
      title: "Cardiac Arrest",
      description:
        "Had high cholesterol leading to artery blockage and Cardiac arrest",
    },
    {
      date: "15, April 2023",
      title: "Diabetes Diagnosis",
      description: "Diagnosed with Type 2 diabetes",
    },
    {
      date: "10, March 2022",
      title: "Hypertension",
      description: "Diagnosed with high blood pressure",
    },
    {
      date: "5, February 2021",
      title: "Flu",
      description: "Suffered from a severe case of the flu",
    },
    {
      date: "20, January 2020",
      title: "Fractured Arm",
      description: "Fractured right arm in a skiing accident",
    },
  ];

  return (
    <div className=" py-12 ">
      <Padding className={" flex gap-5 "}>
        <div className=" w-[35%] h-max ">
          {medicalHistoryData.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex relative flex-col items-center">
                <div
                  className={clsx(
                    "w-4 h-4 rounded-full bg-[#D9D9D9]",
                    index == 0 ? "" : " translate-y-9 "
                  )}
                />
                <div className="h-full absolute  bg-[#D9D9D9] w-[1px]"></div>
              </div>
              <div
                className={clsx(
                  "flex flex-col  gap-1.5 font-circular",
                  index + 1 == medicalHistoryData.length ? "" : "pb-20"
                )}
              >
                <div className="text-[#6C6E71] text-[0.95rem]">{item.date}</div>
                <div className="pt-1 pr-4 text-[#2F3133] text-[1rem]">
                  {item.title}
                </div>
                <div className="text-[#90959B] max-w-[260px] pr-4 text-[0.9rem]">
                  {item.description}
                </div>
                <div className="flex gap-2 items-center text-[#52C509] pt-2">
                  View details
                  <Arrowright h={20} color={"#52C509"} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" w-[65%] h-full bg-[#F7F7F7] px-[2rem] rounded-3xl py-[1.5rem] ">
          <div className=" font-circular text-[#2F3133] pb-[1.5rem] text-[1.5rem] ">
            Recent health history details of Narayana
          </div>
          <div className=" bg-white p-[1rem] text-[0.9rem] font-circular rounded-3xl border border-[#E4E4E4] ">
            <div className=" text-[1.15rem] ">Critical details</div>
          </div>
          <div>
            <div className=" text-[#7A7D7F] ">Heart rate</div>
            <div className=" text-[#2F3133] ">140 BPM</div>
          </div>
          <div>
            <div className=" text-[#7A7D7F] ">Sugar level (before fasting)</div>
            <div className=" text-[#2F3133] ">130</div>
          </div>
          <div>
            <div className=" text-[#7A7D7F] ">Sugar level (after fasting)</div>
            <div className=" text-[#2F3133] ">99</div>
          </div>
          <div>
            <div className=" text-[#7A7D7F] ">BMI</div>
            <div className=" text-[#2F3133] ">6.7 (Obese)</div>
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Medicalhistory;
