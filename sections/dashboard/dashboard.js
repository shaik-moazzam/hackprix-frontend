"use client";
import Padding from "@/components/padding";
import Image from "next/image";
import React, { useRef, useState } from "react";
import src from "@/public/images/profile.png";
import clsx from "clsx";
import Copy from "@/public/icons/copy";
import { toast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const [points, setpoints] = useState(5);
  const ref = useRef();
  const copyToClipboard = () => {
    console.log(ref.current.textContent);
    navigator.clipboard.writeText(ref.current.textContent);
    toast({
      title: "Copied to clipboard",
    });
  };
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
      from: "Dr. Michael Brown",
      testName: "MRI",
      notes: "Minor inflammation",
      reportDate: "2024-06-05",
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
        <div className=" grid gap-8 py-10 grid-cols-2 ">
          <div className=" bg-[#F7F7F7] px-[2rem] py-6 rounded-3xl border border-[#F2F2F2] ">
            <div className=" font-circular text-[1.25rem] pb-10">
              Healthscore
            </div>
            <div className=" font-thunder font-bold text-[7rem] leading-[6rem] ">
              5
            </div>
            <div className=" font-circular text-[#90959B] pb-4 ">
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
            <div className=" text-[1.25rem] pb-6 font-circular ">
              Recent Reports
            </div>
            <div className="bg-[#FFFFFF] text-[0.9rem] rounded-3xl">
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
          <div className=" bg-[#F7F7F7] px-[2rem] flex flex-col justify-between pb-12 py-6 rounded-3xl border border-[#F2F2F2]">
            <div className=" text-[1.25rem]  font-circular   ">
              Health History
            </div>
            <div className=" grid grid-cols-3  ">
              <div className=" flex flex-col gap-1.5 font-circular">
                <div className=" text-[#3F4144] text-[0.95rem] ">
                  24, May 2024
                </div>
                <div className=" flex items-center ">
                  <div className=" w-4 h-4 rounded-full bg-[#D9D9D9] " />
                  <div className=" w-full bg-[#D9D9D9] h-[1px] "></div>
                </div>
                <div className=" pt-3 pr-4 text-[#2F3133] text-[0.95rem] ">
                  Cardiac Arrest
                </div>
                <div className=" text-[#90959B] pr-4 text-[0.9rem] ">
                  Had high cholesterol leading to artery blockage and Cardiac
                  arrest
                </div>
              </div>
              <div className="  flex flex-col gap-1.5  font-circular">
                <div className=" text-[#3F4144] text-[0.95rem] ">
                  24, May 2024
                </div>
                <div className=" flex items-center ">
                  <div className=" w-4 h-4 rounded-full bg-[#D9D9D9] " />
                  <div className=" w-full bg-[#D9D9D9] h-[1px] "></div>
                </div>
                <div className="  pt-3 text-[#2F3133] text-[0.95rem] ">
                  Cardiac Arrest
                </div>
                <div className=" text-[#90959B] pr-4 text-[0.9rem] ">
                  Had high cholesterol leading to artery blockage and Cardiac
                  arrest
                </div>
              </div>
              <div className="  flex flex-col gap-1.5  font-circular">
                <div className=" text-[#3F4144] text-[0.95rem] ">
                  24, May 2024
                </div>
                <div className=" flex items-center ">
                  <div className=" w-4 h-4 rounded-full bg-[#D9D9D9] " />
                  <div className=" w-full bg-[#D9D9D9] h-[1px] "></div>
                </div>
                <div className="  pt-3 text-[#2F3133] text-[0.95rem] ">
                  Cardiac Arrest
                </div>
                <div className=" text-[#90959B] text-[0.9rem] ">
                  Had high cholesterol leading to artery blockage and Cardiac
                  arrest
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7F7] px-[2rem] py-6 rounded-3xl border border-[#F2F2F2]">
            <div className=" text-[1.25rem] pb-6 font-circular   ">
              Insurance Details
            </div>
            <div className=" flex justify-between ">
              <div
                ref={ref}
                className=" font-thunder text-[7rem] leading-[7rem] pb-4 uppercase font-bold "
              >
                SN7326hhsh5
              </div>
              <div
                className=" cursor-pointer "
                onClick={() => copyToClipboard()}
              >
                <Copy />
              </div>
            </div>
            <div className=" flex justify-between ">
              <div className=" font-circular font-medium text-[0.9rem] ">
                <div className=" text-[#868A91] ">Package:</div>
                <div className=" text-[#26282B] text-[0.95rem] ">
                  Family plan
                </div>
                <div className=" text-[#868A91] ">Rs: 15,000/mo</div>
              </div>
              <div className=" font-circular font-medium text-[0.9rem] ">
                <div className=" text-[#868A91] ">Limit</div>
                <div className=" text-[#26282B] text-[0.95rem] ">
                  Rs: 10,000,00/10,000,00
                </div>
                <div className=" text-[#868A91] ">Available</div>
              </div>
            </div>
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Dashboard;
