"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import sendVerificationCode from "@/api/sendVerficationCode";
import VerificationPop from "@/components/verificationPop";

const ForgotPassword = () => {
  const { toast, handleToastClick } = useToast();
  const [isEmpty, setIsEmpty] = useState(0);
  const router = useRouter();
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);
  const emailRef = useRef(null);
  const [popup, setPopup] = useState(false);

  function isValidEmail(email) {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const sendCodeFunction = async () => {
    const data = await sendVerificationCode(email);
    if (data.error) {
      toast({ title: data.error });
    }
    if (data.message) {
      toast({ title: "Please check your email for the verification code" });

      setPopup(true);
    }
  };

  const sendVerification = async () => {
    if (email.length <= 0) {
      setIsEmpty(1);
      return;
    }
    if (!isValidEmail(email)) {
      toast({ title: "Please enter a valid email" });
      return;
    }
    setloading(true);
    await sendCodeFunction();
    setloading(false);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior (e.g., adding a newline)
      sendVerification();
    }
  };
  //   if (pageLoad) {
  //     return (
  //       <div className="h-[100vh] flex justify-center items-center">
  //         <div className="loader-line" />
  //       </div>
  //     );
  //   }
  return (
    <>
      <div className={clsx("     sticky top-0 z-[100]")}>
        <div
          className={clsx(
            "   transition-all z-[50000] h-[100vh] flex justify-center  items-center  absolute w-[100vw]  ",
            popup ? " " : " hidden"
          )}
        >
          <motion.div
            initial={{
              opacity: 0,
              backdropFilter: "blur(0px)", // Initial backdrop blur
            }}
            animate={{
              opacity: popup ? 1 : 0,
              backdropFilter: popup ? "blur(10px)" : "blur(0px)", // Adjust blur amount as needed
            }}
            transition={{
              duration: 1,
            }}
          >
            <VerificationPop
              popupclose={() => setPopup(false)}
              sendOtpMessage={sendCodeFunction}
              email={email}
            />
          </motion.div>
        </div>
      </div>
      <div className=" grid grid-cols-1 justify-center lg:grid-cols-2 bg-[#F7F8F9] relative  min-h-[100vh] md:max-h-[100vh]   gap-[3rem] overflow-hidden">
        <div className=" absolute hidden lg:flex left-[1rem] md:left-[2rem] lg:left-[2rem] top-[2rem]  z-20">
          <Link href={"/"}>HOME</Link>
        </div>

        <div className=" h-[100vh] hidden lg:block overflow-hidden  w-full">
          {/* <Image className=" h-full object-cover w-full" src={Sign} /> */}
        </div>

        <div className=" h-full flex  justify-center   bg-[#f9fafb] lg:bg-[#F7F8F9]  ">
          <div
            className={
              "py-10  px-[1rem] md:px-[2rem] lg:px-0 w-[450px]  md:w-max  lg:flex lg:w-full"
            }
          >
            <div className=" w-full  relative md:max-w-[450px] bg-[#F7F8F9]] border-[1px] lg:border-[0px]  border-[#dadcdd]  rounded-3xl px-[1rem] md:px-[2rem]  md:min-w-[450px] z-10">
              <div className="  pt-[3rem] lg:pt-0 text-[#252525]  font-Avant font-[700] up fontstyle text-center lg:text-start text-[2rem] ">
                Forget Password
              </div>

              <div className="h-full w-full flex items-center">
                <div className="w-full">
                  <div className="flex flex-col gap-4">
                    <div className="w-full flex justify-center text-[#000000] font-Matter font-medium">
                      Enter your e-mail to reset your password
                    </div>
                    <div className=" text-[0.9rem] font-Matter  flex flex-col gap-6 pb-6">
                      <input
                        ref={emailRef}
                        onClick={() => {
                          setIsEmpty(0);
                        }}
                        onChange={(e) => setemail(e.target.value)}
                        type={"text"}
                        className={clsx(
                          " text-[#AFB2B6]  px-3 outline-none border-[1px] duration-300   active:border-[1px] focus:border-[1px] focus:border-[#205FFF] w-full rounded-xl leading-none pt-3.5  pb-[0.9rem] bg-[#fff]",
                          isEmpty === 1
                            ? "border-[#F42F4E]"
                            : "border-[#EDEEF4]"
                        )}
                        placeholder="Email"
                        onKeyPress={(e) => handleInputKeyDown(e)}
                      />
                    </div>
                  </div>

                  <div
                    className=" text-[0.9rem] bg-[#205FFF] w-full  font-Matter cursor-pointer justify-center mt-2 text-white   font-medium py-4 rounded-full flex gap-3 items-center min-h-[60px]"
                    onClick={() => sendVerification()}
                  >
                    <div className={clsx("", loading ? "hidden" : "")}>
                      Send Code
                    </div>
                    <div className={clsx("", loading ? "" : "hidden")}>
                      <div class="loader-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
