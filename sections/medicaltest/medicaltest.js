"use client";
import Padding from "@/components/padding";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import src from "@/public/images/bodytest.png";
import src1 from "@/public/images/tube.png";
import { motion } from "framer-motion";
import Button from "@/components/button";
import clsx from "clsx";
import Link from "next/link";
import getAllTests from "@/api/getAllTests";
import { getToken } from "@/api/getToken";
import Arrowdown from "@/public/icons/arrowdown";
import testProviders from "@/api/testProviders";
import { DatePicker } from "@/components/ui/datepicker";
import bookTests from "@/api/bookTests";
import { toast, useToast } from "@/components/ui/use-toast";

const Medicaltest = () => {
  const [data, setdata] = useState();
  const [activetab, setactivetab] = useState(0);
  const [testname, settestname] = useState("Test12355");
  const [loading, setloading] = useState(true);
  const [labprovider, setlabprovider] = useState()
  const [selectedlab, setselectedlab] = useState()
  const [selectedlabid, setselectedlabid] = useState()

  const [starttime, setstarttime] = useState()
  const [showOptions, setShowOptions] = useState(false);
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);
  const [pop, setpop] = useState(false)
  const { toast } = useToast()
  const [dob, setdob] = useState()
  useEffect(() => {
    const getdata = async () => {
      const token = getToken();
      const data = await getAllTests(token);
      const d = await testProviders()
      setlabprovider(d)
      console.log(data);
      if (data) {
        setloading(false);
        setdata(data);
      }
    };
    getdata();
  }, []);

  const testData = [
    {
      id: 1,
      name: "Blood Test",
      duration: "1 day",
      code: "BLD01234",
      description: "Complete blood count",
      price: "Rs: 499",
      imageSrc: src1,
    },
    {
      id: 2,
      name: "Thyroid Test",
      duration: "2-3 days",
      code: "THY05678",
      description: "Thyroid function test",
      price: "Rs: 899",
      imageSrc: src1,
    },
    {
      id: 3,
      name: "Liver Function Test",
      duration: "1-2 days",
      code: "LFT09123",
      description: "Assess liver health",
      price: "Rs: 1,099",
      imageSrc: src1,
    },
    {
      id: 4,
      name: "Kidney Function Test",
      duration: "2-3 days",
      code: "KFT04567",
      description: "Evaluate kidney function",
      price: "Rs: 1,199",
      imageSrc: src1,
    },
    {
      id: 5,
      name: "Lipid Profile Test",
      duration: "1 day",
      code: "LIP07890",
      description: "Cholesterol and triglycerides",
      price: "Rs: 799",
      imageSrc: src1,
    },
    {
      id: 6,
      name: "Vitamin D Test",
      duration: "1-2 days",
      code: "VIT02345",
      description: "Check vitamin D levels",
      price: "Rs: 1,499",
      imageSrc: src1,
    },
    {
      id: 7,
      name: "Complete Health Checkup",
      duration: "3-4 days",
      code: "CHC01112",
      description: "Comprehensive health assessment",
      price: "Rs: 4,999",
      imageSrc: src1,
    },
    {
      id: 8,
      name: "Glucose Test",
      duration: "1 day",
      code: "GLU05678",
      description: "Blood sugar levels",
      price: "Rs: 299",
      imageSrc: src1,
    },
    {
      id: 9,
      name: "HIV Test",
      duration: "2-3 days",
      code: "HIV03456",
      description: "HIV screening",
      price: "Rs: 1,299",
      imageSrc: src1,
    },
    {
      id: 10,
      name: "COVID-19 Test",
      duration: "1-2 days",
      code: "COV01923",
      description: "SARS-CoV-2 detection",
      price: "Rs: 999",
      imageSrc: src1,
    },
  ];

  if (loading) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <div className="loader-line" />
      </div>
    );
  }
  const submit = async () => {
    if (testname && selectedlabid && dob && starttime) {

      const bookTests1 = await bookTests(testname, selectedlabid, dob, starttime)
    }
    else {
      toast({
        title: "Please fill all the fields",

      })
    }
  }
  const dedlinedate = (dd) => {
    const date = new Date(dd);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() returns month from 0-11
    const year = date.getFullYear();

    const formatteddate = `${day}/${month}/${year}`;
    console.log(formatteddate);
    setdob(formatteddate);
  };
  const timearray = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']

  return (
    <div>
      <div className={clsx(" h-[100vh]  bg-[#00000025] z-[10] flex justify-center items-center w-[100vw] fixed left-0 top-0 ", pop ? " " : " hidden")}>
        <div
          className=" bg-white rounded-3xl  w-[400px] p-[1.5rem] ">
          <div className=" font-circular text-center font-medium text-[1.5rem]  pb-[1rem]">{testname}</div>
          <div className=" flex flex-col gap-[1rem]">
            <div className=" flex flex-col gap-2">
              <div className="  font-circular font-medium tracking-wide text-[0.85rem]">
                Test provider
              </div>
              <div onClick={() => { setShowOptions(!showOptions) }} className=" w-full relative">
                <div
                  style={{ ease: [0.43, 0.13, 0.23, 0.96] }}
                  className={clsx(
                    showOptions ? "rotate-180" : "rotate-0",
                    " transition-all absolute top-[50%] -translate-y-[50%]  right-3   duration-500"
                  )}
                >
                  <Arrowdown color={"#292D32"} />
                </div>

                <input

                  readOnly
                  value={selectedlab}
                  className=" outline-none cursor-pointer focus:border-[#205FFF] bg-[#FAFBFC] w-[100%]   px-4 py-3.5 border-[#EDEEF4] border-[1px]  text-[.9rem]   font-circular  rounded-lg"
                  placeholder="Select Your drinking  habits"
                  type="text"
                />
                <motion.div
                  initial={{
                    height: 0,
                  }}
                  animate={{
                    height: showOptions ? "auto" : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  id=""
                  className={clsx(
                    "  overflow-hidden rounded-xl  z-20 absolute w-full  bg-white my-1 "
                  )}
                >
                  <div
                    id="nested-content1"
                    className=" border-[1px] grid gap-1 border-[#EDEEF4] rounded-xl overflow-scroll"
                  >
                    {labprovider?.map((value) => (
                      <div
                        onClick={() => {
                          if (value.hospital) {
                            setselectedlab(value.hospital.name)
                            setselectedlabid(value.hospital._id)
                          }
                          else {

                            setselectedlab(value.name);
                            setselectedlabid(value._id);
                          }
                          setShowOptions(false);
                        }}
                        className="   hover:cursor-pointer px-3 text-[#000000]  py-3 duration-300  font-circular font-medium tracking-wide w-full h85er:text-[#8f8f8f] hover:bg-[#EDEDED]       h-max   leading-none"
                      >
                        {value.hospital ? value.hospital.name : value.name}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <div className="  font-circular font-medium tracking-wide text-[0.85rem]">
                Test Time
              </div>
              <div onClick={() => { setShowOptions1(!showOptions1) }} className=" w-full relative">
                <div
                  style={{ ease: [0.43, 0.13, 0.23, 0.96] }}
                  className={clsx(
                    showOptions1 ? "rotate-180" : "rotate-0",
                    " transition-all absolute top-[50%] -translate-y-[50%]  right-3   duration-500"
                  )}
                >
                  <Arrowdown color={"#292D32"} />
                </div>

                <input

                  readOnly
                  value={starttime}
                  className=" outline-none cursor-pointer focus:border-[#205FFF] bg-[#FAFBFC] w-[100%]   px-4 py-3.5 border-[#EDEEF4] border-[1px]  text-[.9rem]   font-circular  rounded-lg"
                  placeholder="Select Your drinking  habits"
                  type="text"
                />
                <motion.div
                  initial={{
                    height: 0,
                  }}
                  animate={{
                    height: showOptions1 ? "auto" : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  id=""
                  className={clsx(
                    "  overflow-hidden rounded-xl  z-20 absolute w-full  bg-white my-1 "
                  )}
                >
                  <div
                    id="nested-content1"
                    className=" border-[1px]  p-[1rem] flex flex-wrap border-[#EDEEF4] rounded-xl overflow-scroll"
                  >
                    {timearray?.map((value) => (
                      <div
                        onClick={() => {
                          setstarttime(value);
                          setShowOptions1(false);
                        }}
                        className="   hover:cursor-pointer w-max px-3 text-[#000000]  py-3 duration-300  font-circular font-medium tracking-wide  hover:text-[#8f8f8f] hover:bg-[#EDEDED]       h-max   leading-none"
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <div className="  font-circular font-medium text-[0.85rem]">
                Date Of Test
              </div>
              <div>
                <DatePicker deadline={dob} dedlinedate={dedlinedate} />
              </div>
            </div>
            <div className=" w-full grid grid-cols-2 gap-[1rem]">
              <div
                className=" text-[0.9rem]  text-[#d41212] border-[#d41212] border-[1px] w-full    font-circular cursor-pointer justify-center    font-medium py-4 rounded-full flex gap-3 items-center "
                onClick={() => { setpop(false) }}
              >
                <div >Cancel</div>

              </div>
              <div
                className=" text-[0.9rem]  bg-[#52C509] w-full  font-circular cursor-pointer justify-center  text-white   font-medium py-4 rounded-full flex gap-3 items-center min-h-[30px]"
                onClick={submit}
              >
                <div className={clsx("", loading ? "hidden" : "")}>Continue</div>
                <div className={clsx("", loading ? "" : "hidden")}>
                  <div class="loader"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
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
                  activetab === 0 ? "text-[#000000]" : "text-[#000000]"
                )}
                onClick={() => setactivetab(0)}
              >
                Available tests
              </motion.div>
              <motion.div
                className={clsx(
                  "relative z-40  font-circular flex justify-center w-[100%] items-center leading-none rounded-full xl:px-5 xl:py-4 px-5 py-4 transition-all duration-1000 cursor-pointer",
                  activetab === 1 ? "text-[#000000]" : "text-[#000000]"
                )}
                onClick={() => {
                  // if (user?.mode) {
                  setactivetab(1);
                  // }
                }}
              >
                Previous tests
              </motion.div>

              <motion.span
                style={{
                  transform: `translateX(calc(${activetab * 100}% + (${activetab == 0 ? "0.25rem" : "0rem"
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
                <div className=" w-[10%] text-center ">S.no</div>
                <div className=" w-[30%] ">Name</div>
                <div className=" w-[20%] ">Test-code</div>
                <div className=" w-[25%] ">Biological name</div>
                <div className=" w-[15%] ">Price</div>

              </div>
              {testData.map((item, index) => (
                <div
                  key={item.id}
                  className={`px-3 py-3 flex items-center gap-2 border-b border-[#F7F7F7] ${index % 2 !== 0 ? "bg-[#FFFFFF]" : "bg-[#F7F7F7]"
                    }`}
                >
                  <div className="w-[10%] text-center">{index + 1}</div>
                  <div className="w-[30%] flex gap-2.5">
                    <Image src={src1} alt={item.title} className="w-[45px]" />
                    <div>
                      <div>{item.name}</div>
                      <div className="text-[#9F9D9D]">1-2 days</div>
                    </div>
                  </div>
                  <div className="w-[20%]">{item.code}</div>
                  <div className="w-[25%]">{item.description}</div>
                  <div className="w-[15%]">{item.price}</div>
                  <div onClick={() => { setpop(true); settestname(item.name) }} className="w-[20%]">

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
              {data.map((item, index) => (
                <div
                  key={item.id}
                  className={`px-3 py-3 flex items-center gap-2 border-b border-[#F7F7F7] ${index % 2 !== 0 ? "bg-[#FFFFFF]" : "bg-[#F7F7F7]"
                    }`}
                >
                  <div className="w-[5%] text-center">{index + 1}</div>
                  <div className="w-[20%] flex gap-2.5">
                    <Image src={src1} alt={item.title} className="w-[45px]" />
                    <div>
                      <div>{item.title}</div>
                      <div className="text-[#9F9D9D]">1-2 days</div>
                    </div>
                  </div>
                  <div className="w-[15%]">{item.testId}</div>
                  <div className="w-[25%]">{item.biologicalname}</div>
                  <div className="w-[15%]">Rs:{item.price}</div>
                  <div className="w-[20%]">
                    <Link href={`/dashboard/medicaltest/details?id=${item._id}`}>
                      <Button
                        text={"View Result"}
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
