"use client";
import Padding from "@/components/padding";
import Image from "next/image";
import React, { useState } from "react";
import src from "@/public/images/profile.png";
import clsx from "clsx";

const Dashboard = () => {
  const [points, setpoints] = useState(5);
  const recentReports = [
    {
      from: "Dr. John Smith",
      testName: "Blood Test",
      notes: "Normal levels",
      reportDate: "2024-06-01",
    },
    {
      from: "Dr. Emily Johnson",
      testName: "X-ray",
      notes: "No fractures detected",
      reportDate: "2024-05-28",
    },
    {
      from: "Dr. Michael Brown",
      testName: "MRI",
      notes: "Minor inflammation",
      reportDate: "2024-06-05",
    },
    {
      from: "Dr. Olivia Davis",
      testName: "Allergy Test",
      notes: "Mild pollen allergy",
      reportDate: "2024-05-30",
    },
    {
      from: "Dr. William Martinez",
      testName: "Blood Sugar Test",
      notes: "Elevated glucose levels",
      reportDate: "2024-06-02",
    },
  ];

  return (
    <div>
      <Padding>
        <div className=" bg-[#1D55E5] mt-5 px-[3rem] py-8 pt-12 rounded-3xl ">
          <div className=" text-[5rem] pb-20 text-white leading-[5rem] md:max-w-[600px] font-thunder font-bold ">
            YOU HAVE AN UPCOMING APPOINTMENT
          </div>
          <div>
            <div>
              <div className=" text-[#BBD8FA] py-5 font-circular ">
                On <span className=" text-white ">Thursday, May 17, 2024</span>
              </div>
            </div>
            <div className=" flex justify-between w-full items-end ">
              <div className=" bg-[#1847C0] font-circular rounded-full flex gap-3 p-3 pr-6 w-max ">
                <Image className=" w-[3rem] " src={src} />
                <div>
                  <div className=" text-white ">Miss Sheena</div>
                  <div className=" text-[#8FAAF1] text-[0.9rem] ">
                    Cardiologist
                  </div>
                </div>
              </div>
              <div className=" text-white bg-[#1847C0] font-circular py-2 px-5 w-max rounded-full ">
                2 Days : 09 Hours : 30 Seconds
              </div>
            </div>
          </div>
        </div>
        <div className=" grid gap-8 pt-10 grid-cols-2 ">
          <div className=" bg-[#F7F7F7] px-[2rem] py-6 rounded-3xl border border-[#F2F2F2] ">
            <div className=" font-circular text-[1.25rem] pb-10">
              Healthscore
            </div>
            <div className=" font-thunder font-bold text-[7rem] leading-[6rem] ">
              5
            </div>
            <div className=" font-circular font-medium text-[#90959B] pb-4 ">
              Out of 10 points
            </div>
            <div className=" bg-[#EBEBEB] h-[10px] my-4 w-full rounded-full overflow-hidden relative ">
              <div
                style={{ width: `${points * 10}%` }}
                className={clsx(` absolute bg-[#EB8425] rounded-full h-full `)}
              ></div>
            </div>
            <div className=" w-full flex gap-3 ">
              <div>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11" cy="11" r="11" fill="#EAEAEA" />
                  <path
                    d="M11.85 16H10.125V8.695H11.85V16ZM9.855 6.13C9.855 5.5 10.365 4.99 10.98 4.99C11.61 4.99 12.12 5.5 12.12 6.13C12.12 6.76 11.61 7.255 10.98 7.255C10.365 7.255 9.855 6.76 9.855 6.13Z"
                    fill="#9A9FA5"
                  />
                </svg>
              </div>
              <div className=" text-[#90959B] ">
                These points are given after seeing your latest medical report
              </div>
            </div>
          </div>
          <div className=" bg-[#F7F7F7] px-[1rem] py-6 rounded-3xl border border-[#F2F2F2]">
            <div className=" text-[1.25rem] font-circular ">Recent Reports</div>
            <div className="bg-[#FFFFFF] rounded-3xl">
              <div className="  border-b border-[#E2E7ED] py-3 grid grid-cols-4 text-[#90959B] font-circular  px-[1rem] ">
                <div>From</div>
                <div>Test Name</div>
                <div>Notes</div>
                <div>Report Date</div>
              </div>
              {recentReports.map((report, index) => (
                <div
                  key={index}
                  className={clsx(
                    " py-3 grid grid-cols-4 text-[#90959B] font-circular px-[1rem]",
                    index + 1 == recentReports.length
                      ? ""
                      : "border-[#E2E7ED] border-b "
                  )}
                >
                  <div className=" text-[#26282B] ">{report.from}</div>
                  <div>{report.testName}</div>
                  <div>{report.notes}</div>
                  <div>{report.reportDate}</div>
                </div>
              ))}
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </Padding>
    </div>
  );
};

export default Dashboard;
