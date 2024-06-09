"use client";
import React, { useEffect, useState } from "react";
import Padding from "./padding";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useUser } from "@/redux/userContext";
import { useRouter } from "next/navigation";

const Dashboardnavbar = () => {
  const { state } = useUser();
  const user = state.user;
  const route = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (user && !user.phone) {
      route.push("/personaldetails");
      console.log("1")
    }
    else if (user && (!user.alchohol || !user.diet || !user.smoking || !user.exercise || !user.no_of_meals)) {
      route.push("/onboarding");
      console.log("2")
    }
    else {
      if (!token) {
        route.push("/login");
      }
    }
  }, [user])
  const [isactive, setactive] = useState(0);
  return (
    <div className=" py-2">
      <div>
        <div className="flex justify-between">
          <div className=" px-[3rem] font-circular text-[1.25rem] py-2 pb-10 ">
            Healthyme
          </div>
          <div onClick={() => {
            localStorage.removeItem("token")
            route.push("/login")
          }} className="text-red-500 py-2 px-4 h-max w-max border-[1px] cursor-pointer hover:text-white hover:bg-red-500 font-circular border-red-500 rounded-full mx-6 my-2">
            Logout
          </div>
        </div>
        <div className=" px-[3rem]  font-circular border-b border-b-[#DCE2EE] text-[#60636C] flex gap-14 ">
          <Link href={"/dashboard"}>

            <div
              onClick={() => setactive(0)}
              className={clsx(
                " pb-2 translate-y-[1px] cursor-pointer duration-300 relative ",
                isactive == 0 ? "text-[#52C509]   " : "text-[#60636C] "
              )}
            >
              Overview
              {isactive == 0 && (
                <motion.div
                  layoutId="tabs"
                  className=" absolute h-[1px] w-full bottom-0 bg-[#52C509] "
                ></motion.div>
              )}
            </div>
          </Link>
          <Link href={"/dashboard/medicalhistory"}>
            <div
              className={clsx(
                " pb-2 translate-y-[1px] cursor-pointer duration-300 relative ",
                isactive == 1 ? "text-[#52C509]   " : "text-[#60636C] "
              )}
              onClick={() => setactive(1)}
            >
              Medical history
              {isactive == 1 && (
                <motion.div
                  layoutId="tabs"
                  className=" absolute h-[1px] w-full bottom-0 bg-[#52C509] "
                ></motion.div>
              )}
            </div>

          </Link>
          <Link href={"/dashboard/appointments"}>

            <div
              onClick={() => setactive(2)}
              className={clsx(
                " pb-2 translate-y-[1px] relative cursor-pointer duration-300 ",
                isactive == 2 ? "text-[#52C509]   " : "text-[#60636C] "
              )}
            >
              Appointments
              {isactive == 2 && (
                <motion.div
                  layoutId="tabs"
                  className=" absolute h-[1px] w-full bottom-0 bg-[#52C509] "
                ></motion.div>
              )}
            </div>
          </Link>
          <Link href={"/dashboard/medicaltest"}>

            <div
              onClick={() => setactive(3)}
              className={clsx(
                " pb-2 translate-y-[1px] relative cursor-pointer duration-300 ",
                isactive == 3 ? "text-[#52C509]   " : "text-[#60636C] "
              )}
            >
              Medical tests
              {isactive == 3 && (
                <motion.div
                  layoutId="tabs"
                  className=" absolute h-[1px] w-full bottom-0 bg-[#52C509] "
                ></motion.div>
              )}
            </div>
          </Link>

          {/* <div
            onClick={() => setactive(4)}
            className={clsx(
              " pb-2 translate-y-[1px] relative cursor-pointer duration-300 ",
              isactive == 4 ? "text-[#52C509]   " : "text-[#60636C] "
            )}
          >
            Healthyme AI
            {isactive == 4 && (
              <motion.div
                layoutId="tabs"
                className=" absolute h-[1px] w-full bottom-0 bg-[#52C509] "
              ></motion.div>
            )}
          </div>
          <div
            onClick={() => setactive(5)}
            className={clsx(
              " pb-2 translate-y-[1px] relative cursor-pointer duration-300 ",
              isactive == 5 ? "text-[#52C509]   " : "text-[#60636C] "
            )}
          >
            Billing
            {isactive == 5 && (
              <motion.div
                layoutId="tabs"
                className=" absolute h-[1px] w-full bottom-0 bg-[#52C509] "
              ></motion.div>
            )} */}
          {/* </div> */}
          <Link href={"/dashboard/crowdfunding"}>

            <div
              onClick={() => setactive(6)}
              className={clsx(
                " pb-2 translate-y-[1px] cursor-pointer duration-300 relative ",
                isactive == 6 ? "text-[#62C509]   " : "text-[#60636C] "
              )}
            >
              Crowdfunding
              {isactive == 6 && (
                <motion.div
                  layoutId="tabs"
                  className=" absolute h-[1px] w-full bottom-0 bg-[#52C509] "
                ></motion.div>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboardnavbar;
