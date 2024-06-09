"use client";
import Padding from "@/components/padding";
import Arrowright from "@/public/icons/arrowright";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import src from "@/public/images/tube.png";
import Gettimeline from "@/api/medicaltimeline";
import { getToken } from "@/api/getToken";
import { useUser } from "@/redux/userContext";
import { BASE_URL, IMGBASE_URL } from "@/api/variables";
import Link from "next/link";

const Medicalhistory = () => {
  const { state } = useUser();
  const user = state.user;
  const [data, setdata] = useState();
  const [loading, setloading] = useState(true);
  const [criticaldetails, setcriticaldetails] = useState();
  useEffect(() => {
    const getData = async () => {
      const token = getToken();
      const data = await Gettimeline(token);
      if (data) {
        console.log(data);
        setdata(data);
        setcriticaldetails(data.slice().reverse()[0]);
      }
      setloading(false);
    };
    getData();
  }, []);

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
  function formatDate(dateString) {
    const date = new Date(dateString);

    // Options for the date format
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleDateString("en-US", options);
  }
  const update = (index) => {
    setcriticaldetails(data.slice().reverse()[index]);
  };

  if (loading || data.length <= 0) {
    return (
      <div className="flex justify-center items-center h-[100vh] ">
        <div className=" loader-line "></div>
      </div>
    );
  }

  return (
    <div className=" py-12 ">
      <Padding className={" flex gap-5 "}>
        <div className=" w-[35%] h-max ">
          {data
            .slice()
            .reverse()
            .map((item, index) => (
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
                  <div className="text-[#6C6E71] text-[0.95rem]">
                    {formatDate(item.date)}
                  </div>
                  <div className="pt-1 pr-4 text-[#2F3133] text-[1rem]">
                    {item.Issue}
                  </div>
                  <div className="text-[#90959B] max-w-[260px] pr-4 text-[0.9rem]">
                    {item.Remark}
                  </div>
                  <div
                    className="flex gap-2 cursor-pointer items-center text-[#52C509] pt-2"
                    onClick={() => update(index)}
                  >
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
          <div className=" w-full bg-[#FFFFFF] p-[1.5rem] rounded-3xl border-[1px] border-[#E4E4E4]">
            <div className=" font-circular font-medium text-[1.25rem] pb-[1rem]">
              Appointment Details:
            </div>
            <div className=" grid grid-cols-2 gap-[2rem]">
              {criticaldetails.critical_details.map((data) => (
                <div>
                  <div className=" text-[#7A7D7F] font-circular text-[0.9rem] font-medium">
                    {data.description}
                  </div>
                  <div className=" text-[#2F3133] font-circular text-[1rem] font-medium">
                    {data.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" w-full my-10 bg-[#FFFFFF] p-[1.5rem] rounded-3xl border-[1px] border-[#E4E4E4]">
            <div className=" font-circular font-medium text-[1.25rem] pb-[1rem]">
              Consultation details
            </div>
            <div className=" grid grid-cols-2 gap-[2rem]">
              <div>
                <div className=" text-[#7A7D7F] font-circular text-[0.9rem] font-medium">
                  Doctor
                </div>
                <div className=" text-[#2F3133] font-circular text-[1rem] font-medium">
                  {criticaldetails.doctor}
                </div>
              </div>
              <div>
                <div className=" text-[#7A7D7F] font-circular text-[0.9rem] font-medium">
                  Remark
                </div>
                <div className=" text-[#2F3133] font-circular text-[1rem] font-medium">
                  {criticaldetails.Remark}
                </div>
              </div>
              {criticaldetails.hospital && (
                <div>
                  <div className=" text-[#7A7D7F] font-circular text-[0.9rem] font-medium">
                    Hospital
                  </div>
                  <div className=" text-[#2F3133] font-circular text-[1rem] font-medium">
                    {criticaldetails.hospital}
                  </div>
                </div>
              )}

              <div>
                <div className=" text-[#7A7D7F] font-circular text-[0.9rem] font-medium">
                  Issue
                </div>
                <div className=" text-[#2F3133] font-circular text-[1rem] font-medium">
                  {criticaldetails.Issue}
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full my-10 bg-[#FFFFFF] p-[1.5rem] rounded-3xl border-[1px] border-[#E4E4E4]">
            <div className=" font-circular font-medium text-[1.25rem] pb-[1rem]">
              Patient habits
            </div>
            <div className=" grid grid-cols-4 gap-[2rem]">
              <div>
                <div className=" text-[#7A7D7F] font-circular text-[0.9rem] font-medium">
                  Smoking
                </div>
                <div className=" text-[#2F3133] font-circular text-[1rem] font-medium">
                  {user?.smoking}
                </div>
              </div>
              <div>
                <div className=" text-[#7A7D7F] font-circular text-[0.9rem] font-medium">
                  Drinking
                </div>
                <div className=" text-[#2F3133] font-circular text-[1rem] font-medium">
                  {user.alchohol}
                </div>
              </div>
              <div>
                <div className=" text-[#7A7D7F] font-circular text-[0.9rem] font-medium">
                  Physical
                </div>
                <div className=" text-[#2F3133] font-circular text-[1rem] font-medium">
                  {user.exercise}
                </div>
              </div>
              <div>
                <div className=" text-[#7A7D7F] font-circular text-[0.9rem] font-medium">
                  Diet preference
                </div>
                <div className=" text-[#2F3133] font-circular text-[1rem] font-medium">
                  {user.diet}
                </div>
              </div>
            </div>
          </div>
          {criticaldetails.docs.length > 0 && (
            <div className=" w-full my-10 bg-[#FFFFFF] p-[1.5rem] rounded-3xl border-[1px] border-[#E4E4E4]">
              <div className=" font-circular font-medium text-[1.25rem] pb-[1rem]">
                Attachments & Reports
              </div>
              <div className=" flex gap-4 ">
                {criticaldetails.docs.map((data) => (
                  <Link target="blank" href={IMGBASE_URL + data.url}>
                    <Image className=" w-[45px] h-[50px] " src={src} />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Padding>
    </div>
  );
};

export default Medicalhistory;
