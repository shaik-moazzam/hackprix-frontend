"use client";
import React from "react";
import Padding from "./padding";
import Healtyme from "@/public/icons/healtyme";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div
      className={clsx(
        " bg-[#163300] text-white font-circular ",
        pathname.includes("dashboard") ? " hidden " : ""
      )}
    >
      <Padding className={" py-20 flex  "}>
        <div className=" w-[40%]  font-circular ">
          <div className=" text-[#9FE870] text-[1.1rem] ">Healthyme</div>
          <div className=" md:max-w-[320px] font-normal pt-1 text-white">
            Elevate your established trademark with our expert design services –
            Redefine, Refresh, and Captivate
          </div>
          <div className=" text-white pt-20 ">©2024 healthyme.</div>
        </div>
        <div className=" w-[50%] ">
          <div className=" grid  md:flex justify-between ">
            <div className=" grid gap-3 ">
              <div className="text-[#9FE870] text-[1.1rem] pb-2">Links</div>
              <div>Home</div>
              <div>Search Trademark</div>
              <div>Blogs</div>
              <div>FAQs</div>
            </div>
            <div className=" flex flex-col gap-3 ">
              <div className="text-[#9FE870] text-[1.1rem] pb-2">Company</div>
              <div>About us</div>
              <div>Company</div>
            </div>
            <div className=" flex flex-col gap-3 ">
              <div className="text-[#9FE870] text-[1.1rem] pb-2">Legal</div>
              <div>Privacy policy</div>
              <div>Terms and conditions</div>
              <div>Refund policy</div>
            </div>
          </div>
          <div className=" w-full flex justify-between pt-32 ">
            <div>Instagram</div>
            <div>X</div>
            <div>Linkedin</div>
            <div>Github</div>
            <div>Dribbble</div>
            <div>Behance</div>
          </div>
        </div>
      </Padding>
      <div className=" mx-auto w-max ">
        <Healtyme />
      </div>
    </div>
  );
};

export default Footer;
