"use client";
import React, { useEffect, useRef, useState } from "react";
import { useToast } from "./ui/use-toast";
import { useUser } from "@/redux/userContext";
import Arrowleft from "@/public/icons/arrowleft";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
// import updatestudent from "@/api/updatestudent";
// import validatestudentotp from "@/api/validatestudentotp";

const Otppop = ({
  phone,
  handleprocess,
  popupclose,
  otpcountdownw,
  userclass,
  setdemoteacher,
  sendOtpMessage,
}) => {
  const params = useSearchParams();
  const demo = params.get("demo");
  const { toast, handleToastClick } = useToast();
  const { state, dispatch } = useUser();
  const user = state?.user;
  const router = useRouter();
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (isRunning && seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (seconds === 0) {
      setIsRunning(false);
    }
  }, [isRunning, seconds]);
  useEffect(() => {
    setIsRunning(true);
    setSeconds(60);
  }, [otpcountdownw]);
  const otpInputs = useRef([]);
  const handleKeyPress = (e, index) => {
    if (
      e.key === "Enter" &&
      index < otpDigits.length - 1 &&
      otpDigits[index] !== ""
    ) {
      otpInputs.current[index + 1].focus();
    }
  };
  const handlePaste = (e, index) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "");
    const newOtpDigits = [...otpDigits];
    for (
      let i = 0;
      i < pastedData.length && index + i < otpDigits.length;
      i++
    ) {
      newOtpDigits[index + i] = pastedData[i];
    }
    setOtpDigits(newOtpDigits);
  };
  const handleBackspace = (e, index) => {
    if (e.key === "Backspace") {
      const newOtpDigits = [...otpDigits];
      if (otpDigits[index] === "" && index > 0) {
        otpInputs.current[index - 1].focus();
      } else {
        newOtpDigits[index] = "";
        setOtpDigits(newOtpDigits);
      }
    }
  };
  const handleInput = (e, index) => {
    const digit = e.target.value;
    if (digit.match(/^\d$/) || digit === "") {
      const newOtpDigits = [...otpDigits];
      newOtpDigits[index] = digit;
      setOtpDigits(newOtpDigits);
      if (index < otpDigits.length - 1 && digit) {
        otpInputs.current[index + 1].focus();
      }
    }
  };
  const validateotp = async () => {
    setloading(true);
    const otpString = otpDigits.join("");
    console.log(otpString);
    if (otpString.length === 6) {
      const otp = await validatestudentotp(phone, otpString, user?.token);
      if (otp.error) {
        toast({
          title: otp.error,
        });
      }
      if (otp.phone) {
        const token = user?.token;
        const object1 = {
          standard: userclass,
        };
        const updateuserdetails = await updatestudent(object1, token);
        dispatch({ type: "SET_USER", payload: updateuserdetails });
        if (demo == "true") {
          router.push("/freedemo");
        } else {
          router.push("/dashboard");
        }
      }
    } else {
      toast({
        title: "Otp must have 6 digits",
      });
    }
    setloading(false);
  };

  return (
    <div className="min-h-[100vh] min-w-[100vw] flex justify-center items-center ">
      <div className=" flex flex-col items-center p-10 rounded-3xl   bg-[#F9F9F9] relative w-[340px] md:w-[600px]  h-[32rem] transition-transform shadow-2xl duration-1000  z-10">
        <div
          onClick={popupclose}
          className=" absolute top-11 left-6  hover:cursor-pointer"
        >
          <Arrowleft />
        </div>
        <div className="text-center pb-2 text-[2rem] text-[#252525]   font-thunder tracking-wide fontstyle font-[700]">
          Enter OTP
        </div>
        <div className="text-[#6C6F72] w-[100%] text-[0.95rem]  font-circular font-medium text-center">
          <div>Please enter the OTP sent to </div>
          <div>
            {phone}.<span className=" text-[#205FFF]">Incorrect Number?</span>
          </div>
        </div>
        <div className="flex justify-center w-full gap-3 md:gap-5 py-10 pb-20">
          {otpDigits.map((digit, index) => (
            <input
              key={index}
              ref={(input) => (otpInputs.current[index] = input)}
              className="font-medium text-[1.2rem] duration-300 bg-[#FFFFFF] h-12 w-10 md:h-12 md:w-12 outline-[#205FFF]  border-[#EAEBEF] border-[1px] text-center rounded-lg"
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInput(e, index)}
              onKeyDown={(e) => {
                handleBackspace(e, index);
                handleKeyPress(e, index);
                //  index==5? handleInputKeyDown(e):''
              }}
              onPaste={(e) => handlePaste(e, index)}
            />
          ))}
        </div>
        <div className="text-[0.9rem] text-[#6C6F72]  font-circular  py-6 pb-10  text-center gap-2">
          Didn’t receive the OTP ?
          <div
            className={clsx(
              "font-medium text-[#1E2124]",
              isRunning ? "" : "hidden"
            )}
          >
            Resend in {seconds}
          </div>
          <div
            onClick={() => {
              {
                sendOtpMessage();
              }
            }}
            className={clsx(
              "font-medium cursor-pointer text-[#205FFF]",
              isRunning ? "hidden" : ""
            )}
          >
            Resend otp
          </div>
        </div>
        <div
          onClick={() => {
            validateotp();
          }}
          className="text-[0.9rem] bg-[#205FFF] w-full md:w-[90%] cursor-pointer justify-center text-white    font-circular font-medium py-4 rounded-full min-h-[55px] flex gap-3 items-center"
        >
          <div className={clsx("", loading ? "hidden" : "")}>Continue</div>
          <div className={clsx("", loading ? "" : "hidden")}>
            <div className=" loader1   " />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Otppop;
