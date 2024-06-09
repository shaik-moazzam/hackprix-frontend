"use client";
import Padding from "@/components/padding";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Button from "@/components/button";
import Link from "next/link";
import Getallappointment from "@/api/getallappointment";
import { getToken } from "@/api/getToken";
const Appointments = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [pageLoad, setpageload] = useState(true);
  const [data, setdata] = useState(false);
  const [prevdata, setprevdata] = useState([]);

  const [appointment, setAppointments] = useState([
    {
      sNo: 1,
      appointment: "Consultation",
      speciality: "Cardiology",
      date: "2024-06-10",
    },
    {
      sNo: 2,
      appointment: "Follow-up",
      speciality: "Dermatology",
      date: "2024-06-11",
    },
    {
      sNo: 3,
      appointment: "Initial Visit",
      speciality: "Neurology",
      date: "2024-06-12",
    },
    {
      sNo: 4,
      appointment: "Routine Check",
      speciality: "Pediatrics",
      date: "2024-06-13",
    },
    {
      sNo: 5,
      appointment: "Emergency",
      speciality: "Orthopedics",
      date: "2024-06-14",
    },
  ]);

  useEffect(() => {
    const getdata = async () => {
      const token = getToken();
      const data = await Getallappointment(token);
      console.log(data);
      if (data) {
        setpageload(false);
        setdata(data);
        const filteredData = data.filter((item) => {
          return item.status.toString() == "true";
        });
        setprevdata(filteredData);
      }
    };
    getdata();
  }, []);

  if (pageLoad) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <div className="loader-line" />
      </div>
    );
  }
  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <Padding>
        <div className=" flex justify-between py-8">
          <div className=" w-[300px] ">
            <div className="grid grid-cols-2 rounded-full text-[0.95rem]  relative text-[#939393] overflow-hidden p-1 font-[600] bg-[#fff] font-Matter items-center border-2 border-[#EBECEE]">
              <motion.div
                className={clsx(
                  "relative z-40  font-circular hover:cursor-pointer flex justify-center w-[100%] items-center leading-none  rounded-full h-max xl:px-5 xl:py-4 px-5 py-4 transition-all duration-1000",
                  activeTab === 1 ? "text-[#000000]" : "text-[#000000]"
                )}
                onClick={() => changeTab(1)}
              >
                Upcoming
              </motion.div>
              <motion.div
                className={clsx(
                  "relative z-40  font-circular flex justify-center w-[100%] items-center leading-none rounded-full xl:px-5 xl:py-4 px-5 py-4 transition-all duration-1000 cursor-pointer",
                  activeTab === 2 ? "text-[#000000]" : "text-[#000000]"
                )}
                onClick={() => {
                  // if (user?.mode) {
                  changeTab(2);
                  // }
                }}
              >
                Previous
              </motion.div>

              <motion.span
                style={{
                  transform: `translateX(calc(${(activeTab - 1) * 100}% + (${
                    activeTab === 1 ? "0.25rem" : "0rem"
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
          <div>
            <Link href={"/dashboard/appointments/bookanappointment"}>
              <Button
                text={"Book an appointment"}
                className={" bg-[#9FE870] text-[#000000]"}
              />
            </Link>
          </div>
        </div>
        {activeTab == 1
          ? appointment &&
            appointment.length > 0 && (
              <div>
                <div className=" border-[#F0F0F0] w-[100%]   border-[1px] rounded-3xl">
                  <div className=" flex gap-2  font-circular text-[#000000]  font-medium rounded-t-3xl bg-[#FAFBFD] border-b-[1px] border-[#D9E1F1] py-[1rem] ">
                    <div className="w-[20%]   flex justify-center">S.No</div>
                    <div className=" w-[20%]  flex">Name</div>
                    <div className=" w-[20%]  flex justify-center">
                      Speciality
                    </div>
                    <div className=" w-[20%]  flex justify-center">Date</div>
                    <div className=" w-[20%]  flex justify-center">Mode</div>
                  </div>
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className={clsx(
                        "flex gap-2 font-circular text-[#000000] py-[1rem]",
                        index % 2 !== 0 ? "bg-[#F9FBFC]" : "bg-white"
                      )}
                    >
                      <div className="w-[20%] items-center flex justify-center">
                        {index + 1}
                      </div>
                      <div className="w-[20%] items-center flex">
                        {item.slot.doctor.name}
                      </div>
                      <div className="w-[20%] items-center flex justify-center">
                        {item.slot.doctor.specialization}
                      </div>
                      <div className="w-[20%] items-center     flex justify-center">
                        {item.date}
                      </div>
                      <div className="w-[20%] flex justify-center">Online</div>
                    </div>
                  ))}
                </div>
              </div>
            )
          : appointment &&
            appointment.length > 0 && (
              <div>
                <div className=" border-[#F0F0F0] w-[100%]   border-[1px] rounded-3xl">
                  <div className=" flex gap-2  font-circular text-[#000000]  font-medium rounded-t-3xl bg-[#FAFBFD] border-b-[1px] border-[#D9E1F1] py-[1rem] ">
                    <div className="w-[20%]   flex justify-center">S.No</div>
                    <div className=" w-[20%]  flex">Name</div>
                    <div className=" w-[20%]  flex justify-center">
                      Speciality
                    </div>
                    <div className=" w-[20%]  flex justify-center">Date</div>
                    <div className=" w-[20%]  flex justify-center"></div>
                  </div>
                  {prevdata.map((item, index) => (
                    <div
                      key={index}
                      className={clsx(
                        "flex gap-2 font-circular text-[#000000] py-[1rem]",
                        index % 2 !== 0 ? "bg-[#F9FBFC]" : "bg-white"
                      )}
                    >
                      <div className="w-[20%] items-center flex justify-center">
                        {index + 1}
                      </div>
                      <div className="w-[20%] items-center flex">
                        {item.slot.doctor.name}
                      </div>
                      <div className="w-[20%] items-center flex justify-center">
                        {item.slot.doctor.specialization}
                      </div>
                      <div className="w-[20%] items-center flex justify-center">
                        {item.date}
                      </div>
                      <div className="w-[20%] items-center flex justify-center">
                        <Link
                          href={`/dashboard/appointments/singleappointment?id=${item._id}`}
                        >
                          <Button
                            className={
                              " border-[#E2E4E8] border-[1px] bg-white"
                            }
                            text={"View"}
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
      </Padding>
    </div>
  );
};

export default Appointments;
