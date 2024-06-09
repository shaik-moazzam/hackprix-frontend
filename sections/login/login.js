"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Padding from "@/components/padding";
import Link from "next/link";
import { BACK_KEY, BASE_URL } from "@/api/variables";
import { useToast } from "@/components/ui/use-toast";

import clsx from "clsx";
import Eye from "@/public/icons/eye";
import Eyeslash from "@/public/icons/eyeslash";
import Google from "@/public/icons/google";
import { ToastAction } from "@/components/ui/toast";
import Register from "@/api/register";
import { useUser } from "@/redux/userContext";
import { useRouter, useSearchParams } from "next/navigation";
import login1 from "@/api/login";

const Login = () => {
  const { dispatch, state } = useUser();
  const user = state.user;
  const { toast, handleToastClick } = useToast();
  const [isEmpty, setIsEmpty] = useState(0);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [loading, setloading] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [pageLoad, setPageLoad] = useState(true);
  const params = useSearchParams();
  const token = params.get("tkn123");
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token + BACK_KEY);
      router.push("/login");
    } else {
      if (user) {
        console.log(user);
        if (!user.phone ) {
          router.push("/verification");
        } else {
          router.push("/dashboard");
        }
      } else {
        setPageLoad(false);
      }
    }
  }, [user]);
  const handleEnterKeyPress = (e, nextInputRef) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      e.preventDefault();
      nextInputRef.current.focus();
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const validatePassword = (password) => {
    // Example: Check if password length is at least 6 characters
    return password?.length >= 6;
  };
  const handleSignup = async () => {
    if (
      emailRef.current.value.trim() === "" ||
      passwordRef.current.value.trim() === ""
    ) {
      if (
        emailRef.current.value.trim() === "" &&
        passwordRef.current.value.trim() === ""
      ) {
        setIsEmpty(1);
      } else if (emailRef.current.value.trim() === "") {
        setIsEmpty(2);
      } else {
        setIsEmpty(3);
      }
    } else if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please provide a valid email address.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } else if (!validatePassword(password)) {
      toast({
        title: "Invalid Password",
        description: "Please provide a valid password.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } else {
      let user;
      try {
        setloading(true);
        user = await login1(email, password);

        console.log(user, "user111");
        if (user.error) {
          console.log(user, "setting");
          if (user.error.error.includes("exists")) {
            console.log(user, "setting1");
            toast({
              title: "Uh oh! Something went wrong.",
              description: user.error.error,

              action: (
                <ToastAction altText="Try again">
                  <Link href={"/signup"}>
                    <div onClick={() => handleToastClick(toast.id)}>
                      Sign up
                    </div>
                  </Link>
                </ToastAction>
              ),
            });
          } else if (user.error.error.includes("incorrect")) {
            console.log(user, "setting2");
            toast({
              title: "Uh oh! Something went wrong.",
              description: user.error.error,

              action: (
                <ToastAction altText="Try again">
                  <Link href={"/signup"}>
                    <div onClick={() => handleToastClick(toast.id)}>
                      Sign up
                    </div>
                  </Link>
                </ToastAction>
              ),
            });
          } else {
            console.log(user, "setting3");
            // const error = user.error;
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "We will be fixing it soon!!",

              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }
        } else {
          dispatch({ type: "SET_USER", payload: user });
          setPageLoad(true);
          router("/dashboard");
        }
      } catch (error) {
        if (error.message) {
          console.log(error.message, "Error");
        }
      } finally {
        setloading(false);
      }
    }
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior (e.g., adding a newline)
      handleSignup();
    }
  };
  if (pageLoad) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <div className="loader-line" />
      </div>
    );
  }
  return (
    <div className=" grid grid-cols-1 justify-center lg:grid-cols-2  relative  min-h-[100vh] md:max-h-[100vh]  gap-[3rem] overflow-hidden">
      <div className=" absolute hidden lg:flex left-[1rem] md:left-[2rem] lg:left-[2rem] top-[2rem]  z-20">
        <Link href={"/"}>
          {/* <Zainii /> */}
          HOME
        </Link>
      </div>
      <div className=" h-full hidden lg:block  w-full">
        {/* <Image className=" h-full  w-full" src={Sign} /> */}
      </div>
      <div className=" h-full flex justify-center lg:block  bg-[#f9fafb] lg:bg-white  items-center">
        <div
          className={
            "py-10  px-[1rem] md:px-[2rem] lg:px-0 w-[450px]  md:w-max  lg:flex  items-center  lg:w-full"
          }
        >
          <div className=" w-full   relative md:max-w-[450px] bg-white border-[1px] lg:border-[0px]  border-[#dadcdd]  rounded-3xl px-[1rem] md:px-[2rem]  md:min-w-[450px] z-10">
            <div className="  pt-[3rem] lg:pt-0 pb-[2rem] md:pb-[5rem] text-[#252525]  font-Avant font-[700] up fontstyle text-center lg:text-start text-[2rem] ">
              log in
            </div>
            <Link href={`${BASE_URL}student/auth/google`}>
              <div className=" bg-white w-full justify-center border-[1px]  font-Matter font-[500] border-[#E5E7EB] py-4  rounded-[10rem] flex gap-3 items-center ">
                <Google g={true} /> Log In with google
              </div>
            </Link>
            <div className=" flex w-full items-center py-[3rem]">
              <div className=" w-full h-[0.75px] bg-[#D5D5D5] "></div>
              <div className=" px-2 text-[#D5D5D5]  font-Matter">Or</div>
              <div className=" w-full h-[0.75px] bg-[#D5D5D5] "></div>
            </div>
            <div className=" text-[0.9rem] font-Matter  flex flex-col gap-6 pb-6">
              <input
                onClick={() => {
                  setIsEmpty(0);
                }}
                ref={emailRef}
                onChange={(e) => setemail(e.target.value)}
                onKeyPress={(e) => handleEnterKeyPress(e, passwordRef)}
                type="email"
                className={clsx(
                  " text-[#858585]  px-3 outline-none border-[1px] duration-300   active:border-[1px] focus:border-[1px] focus:border-[#205FFF] w-full rounded-xl leading-none pt-3.5  pb-[0.9rem] bg-[#fff]",
                  isEmpty === 1 || isEmpty === 2
                    ? "border-[#F42F4E]"
                    : "border-[#EDEEF4]"
                )}
                placeholder="Email"
              />
              <div>
                <div className="relative">
                  <input
                    ref={passwordRef}
                    onClick={() => {
                      setIsEmpty(0);
                    }}
                    onChange={(e) => setpassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    onKeyDown={handleInputKeyDown}
                    className={clsx(
                      "text-[#858585]  px-3 outline-none border-[1px]  duration-300  active:border-[1px] focus:border-[1px] focus:border-[#205FFF] w-full rounded-xl pt-3.5  pb-[0.9rem] flex  leading-none bg-[#fff]",
                      isEmpty === 1 || isEmpty === 3
                        ? "border-[#F42F4E]"
                        : "border-[#EDEEF4]"
                    )}
                    placeholder="Password"
                  />
                  <div
                    onClick={togglePasswordVisibility}
                    className="absolute top-[50%] -translate-y-[50%]  right-3 cursor-pointer"
                  >
                    {/* Replace with actual SVG path for eye open or closed */}
                    {showPassword ? <Eye /> : <Eyeslash />}
                  </div>
                </div>
                <Link href={"/forgotpassword"}>
                  <div className=" font-Matter font-medium  text-end py-2">
                    Forgot password ?
                  </div>
                </Link>
              </div>
            </div>

            <div
              className=" text-[0.9rem] bg-[#205FFF] w-full  font-Matter cursor-pointer justify-center mt-5 text-white   font-medium py-4 rounded-full flex gap-3 items-center min-h-[60px]"
              onClick={handleSignup}
            >
              <div className={clsx("", loading ? "hidden" : "")}>Sign up</div>
              <div className={clsx("", loading ? "" : "hidden")}>
                <div class="loader-line"></div>
              </div>
            </div>
            <div className=" text-[0.9rem] text-[#858585] font-Matter flex py-6  pb-[3rem] lg:pb-10 justify-center gap-2">
              Don’t have an account yet ?
              <Link href={"/signup"}>
                <div className=" font-medium cursor-pointer text-[#205FFF]">
                  Sign up
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
