"use client";
import React, { useEffect, useRef, useState } from "react";
import { useToast } from "./ui/use-toast";
import { useUser } from "@/redux/userContext";
import Arrowleft from "@/public/icons/arrowleft";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import verifyCode from "@/api/verifyCode";
import newPassword from "@/api/newPassword";
import { BACK_KEY } from "@/api/variables";

const VerificationPop = ({
  popupclose,
  otpcountdownw,
  sendOtpMessage,
  email,
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
  const [isFlipped, setIsFlipped] = useState(false);

  const [isEmpty, setIsEmpty] = useState(0);
  const [password, setPassword] = useState("");
  const [loading1, setloading1] = useState(false);

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
      const otp = await verifyCode(email, otpString);
      if (otp.error) {
        toast({
          title: otp.error,
        });
      } else {
        localStorage.setItem("token", otp.token + BACK_KEY);
        setIsFlipped(true);
      }
    } else {
      toast({
        title: "Otp must have 6 digits",
      });
    }
    setloading(false);
  };

  const validatePassword = (password) => {
    return password?.length >= 6;
  };

  const changePassword = async () => {
    setloading1(true);
    if (password.length <= 0) {
      setIsEmpty(1);
    }
    if (!validatePassword(password)) {
      toast({ title: "Please Enter At least 6 characters" });
    }
    const data = await newPassword(password);
    if (data.error) {
      toast({ title: "Something went wrong please try again later" });
    } else {
      toast({ title: data.message });
      router.push("/login");
    }
    setloading1(false);
  };

  return (
    <div
      onScroll={(e) => {
        e.stopPropagation();
      }}
      className={clsx(
        "min-h-[100vh] min-w-[100vw] flex justify-center items-center "
      )}
    >
      <div style={{ perspective: "1000px" }} className="bg-transparent">
        <div
          style={{
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          }}
          className={clsx(
            "relative w-[340px] md:w-[600px] rounded-3xl h-[32rem] transition-transform shadow-2xl duration-1000 bg-white"
          )}
        >
          <div
            style={{
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
            }}
            className="absolute h-full w-full "
          >
            <div className="">
              <div className=" flex flex-col items-center p-10 rounded-3xl   bg-[#F9F9F9] relative w-[340px] md:w-[600px]  h-[32rem] transition-transform shadow-2xl duration-1000  z-10">
                <div
                  onClick={popupclose}
                  className=" absolute top-11 left-6  hover:cursor-pointer"
                >
                  <Arrowleft />
                </div>
                <div className="text-center pb-2 text-[2rem] text-[#252525]  font-Avant fontstyle font-[700]">
                  Enter Code
                </div>
                <div className="text-[#6C6F72] w-[100%] text-[0.95rem] font-Matter font-medium text-center">
                  <div>Please enter the Code sent </div>
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
                <div className="text-[0.9rem] text-[#6C6F72] font-Matter  py-6 pb-10  text-center gap-2">
                  Didn’t receive the Code ?
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
                    Resend Code
                  </div>
                </div>
                <div
                  onClick={() => {
                    validateotp();
                  }}
                  className="text-[0.9rem] bg-[#205FFF] w-full md:w-[90%] cursor-pointer justify-center text-white   font-Matter font-medium py-4 rounded-full min-h-[55px] flex gap-3 items-center"
                >
                  <div className={clsx("", loading ? "hidden" : "")}>
                    Continue
                  </div>
                  <div className={clsx("", loading ? "" : "hidden")}>
                    <div class="loader-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              transform: "rotateY(180deg)",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
            }}
            className="absolute h-full w-full rounded-3xl z-[1000]"
          >
            <div
              className={clsx(
                "h-[100%] rounded-3xl bg-[#F9F9F9] py-[6rem] relative"
              )}
            >
              <div className="h-full w-full flex flex-col gap-4 items-center">
                <div className="text-center pb-2 text-[2rem] text-[#252525]  font-Avant fontstyle font-[700]">
                  Enter new Password
                </div>
                <div className="flex flex-col gap-8 w-full items-center mt-[4rem]">
                  <div className="w-[60%]">
                    <input
                      onClick={() => {
                        setIsEmpty(0);
                      }}
                      onChange={(e) => setPassword(e.target.value)}
                      type={"text"}
                      placeholder="New Password"
                      className={clsx(
                        " text-[#AFB2B6]  px-3 outline-none border-[1px] duration-300   active:border-[1px] focus:border-[1px] focus:border-[#205FFF] w-full rounded-xl leading-none pt-3.5  pb-[0.9rem] bg-[#fff]",
                        isEmpty === 1 ? "border-[#F42F4E]" : "border-[#EDEEF4]"
                      )}
                    />
                  </div>
                  <div
                    onClick={() => {
                      changePassword();
                    }}
                    className="text-[0.9rem] bg-[#205FFF] w-full md:w-[60%] cursor-pointer justify-center text-white   font-Matter font-medium py-4 rounded-full min-h-[55px] flex gap-3 items-center"
                  >
                    <div className={clsx("", loading1 ? "hidden" : "")}>
                      Continue
                    </div>
                    <div className={clsx("", loading1 ? "" : "hidden")}>
                      <div class="loader-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPop;
