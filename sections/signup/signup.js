"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BASE_URL } from "@/api/variables";
import { useToast } from "@/components/ui/use-toast";
import clsx from "clsx";
import Eye from "@/public/icons/eye";
import Eyeslash from "@/public/icons/eyeslash";
import Google from "@/public/icons/google";
import { ToastAction } from "@/components/ui/toast";
import Register from "@/api/register";
import { useRouter } from "next/navigation";
import { useUser } from "@/redux/userContext";
import People1 from "../../public/images/people1.jpg";
import Image from "next/image";
import Arrowright from "@/public/icons/arrowright";

const Signup = () => {
  const { dispatch, state } = useUser();
  const user = state.user;
  const { toast, handleToastClick } = useToast();
  const [isEmpty, setIsEmpty] = useState(0);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [loading, setloading] = useState(false);
  const [pageloading, setpageloading] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    } else {
      setpageloading(false);
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
        user = await Register(email, password);

        if (user.error) {
          const error = user.error;

          if (error.includes("already")) {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: error,

              action: (
                <ToastAction altText="Try again">
                  <Link href={"/login"}>
                    <div onClick={() => handleToastClick(toast.id)}>Login</div>
                  </Link>
                </ToastAction>
              ),
            });
          } else {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: error,

              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }
        } else {
          dispatch({ type: "SET_USER", payload: user });
          router("/dashboard");
        }
      } catch (error) {
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

  if (pageloading) {
    return (
      <div className="  flex justify-center items-center">
        <div className="loader-line" />
      </div>
    );
  }

  return (
    <div className=" grid grid-cols-1 relative justify-center lg:grid-cols-3   min-h-[100vh] gap-[3rem] overflow-hidden">
      <div className=" absolute left-[1rem] md:left-[2rem] lg:left-[2rem] top-[2rem]  hidden lg:flex z-20">
        <Link
          className=" font-thunder tracking-wider font-medium text-[2rem] "
          href={"/"}
        >
          HOME
        </Link>
      </div>
      <div className=" h-full hidden bg-[#F5F5F5] lg:block grid-cols-1  w-full">
        <Image
          className=" h-full w-[70%] object-contain mx-auto "
          src={People1}
        />
      </div>
      <div className=" h-full col-span-2 flex justify-center lg:block  bg-[#f9fafb] lg:bg-white  w-full items-center">
        <div className={"py-10  px-[1rem] md:px-[2rem] w-full lg:px-0 "}>
          <div className=" w-full   relative  bg-whit   border-[#dadcdd]  rounded-3xl px-[1rem] md:px-[2rem]    z-10">
            <div className="  pt-[3rem] lg:pt-0 pb-[2rem] md:pb-[5rem] text-[#252525] font-circular text-center flex gap-5 w-max mx-auto text-[1rem] ">
              <div className=" flex items-center gap-4 ">
                <div className=" bg-black text-white h-[2.5rem] p-4 text-center flex justify-center items-center rounded-full w-[2.5rem]">
                  1
                </div>
                <div>Sign up</div>
                <Arrowright />
              </div>
              <div className=" flex items-center gap-4 text-[#646D78] ">
                <div className="  border-[#646D78] border h-[2.5rem] p-4 text-center flex justify-center items-center rounded-full w-[2.5rem]">
                  2
                </div>
                <div>Personal details</div>
                <Arrowright />
              </div>
              <div className=" flex items-center gap-4 text-[#646D78] ">
                <div className="  border-[#646D78] border h-[2.5rem] p-4 text-center flex justify-center items-center rounded-full w-[2.5rem]">
                  3
                </div>
                <div>Onboarding</div>
                <Arrowright />
              </div>
              <div className=" flex items-center gap-4 text-[#646D78] ">
                <div className="  border-[#646D78] border h-[2.5rem] p-4 text-center flex justify-center items-center rounded-full w-[2.5rem]">
                  4
                </div>
                <div>Initial Data</div>
                <Arrowright />
              </div>
            </div>
            <div className=" w-[60%] mx-auto ">
              <Link href={`${BASE_URL}student/auth/google`}>
                <div className=" bg-white w-full justify-center border-[1px] font-circular font-[500] border-[#E5E7EB] py-4  rounded-[10rem] flex gap-3 items-center ">
                  <Google g={true} /> Sign Up with google
                </div>
              </Link>
              <div className=" flex w-full items-center py-[3rem]">
                <div className=" w-full h-[0.75px] bg-[#D5D5D5] "></div>
                <div className=" px-2 text-[#D5D5D5]  font-Matter">Or</div>
                <div className=" w-full h-[0.75px] bg-[#D5D5D5] "></div>
              </div>
              <div className=" text-[0.9rem] font-circular  flex flex-col gap-8 pb-6">
                <div className=" flex gap-2 flex-col ">
                  Name
                  <input
                    ref={emailRef}
                    onClick={() => {
                      setIsEmpty(0);
                    }}
                    onChange={(e) => setemail(e.target.value)}
                    onKeyPress={(e) => handleEnterKeyPress(e, passwordRef)}
                    type="email"
                    className={clsx(
                      " text-[#858585]  px-3 outline-none border-[1px] duration-300   active:border-[1px] focus:border-[1px] focus:border-[#205FFF] w-full rounded-xl leading-none pt-3.5  pb-[0.9rem] bg-[#fff]",
                      isEmpty === 1 || isEmpty === 2
                        ? "border-[#F42F4E]"
                        : "border-[#EDEEF4]"
                    )}
                    placeholder="Name"
                  />
                </div>
                <div className=" flex gap-2 flex-col ">
                  Email
                  <input
                    ref={emailRef}
                    onClick={() => {
                      setIsEmpty(0);
                    }}
                    onChange={(e) => setemail(e.target.value)}
                    type="email"
                    className={clsx(
                      " text-[#858585]  px-3 outline-none border-[1px] duration-300   active:border-[1px] focus:border-[1px] focus:border-[#205FFF] w-full rounded-xl leading-none pt-3.5  pb-[0.9rem] bg-[#fff]",
                      isEmpty === 1 || isEmpty === 2
                        ? "border-[#F42F4E]"
                        : "border-[#EDEEF4]"
                    )}
                    placeholder="Email"
                  />
                </div>
                <div className=" flex flex-col gap-2 font-circular ">
                  Password
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
                        "text-[#858585]  px-3 outline-none border-[1px] duration-300   active:border-[1px] focus:border-[1px] focus:border-[#205FFF] w-full rounded-xl pt-3.5  pb-[0.9rem] flex  leading-none bg-[#fff]",
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
                </div>
              </div>

              <div
                className=" text-[0.9rem] bg-[#205FFF] w-full cursor-pointer justify-center mt-5 text-white  font-Matter font-medium py-4 rounded-full flex gap-3 items-center min-h-[60px]"
                onClick={handleSignup}
              >
                <div className={clsx("", loading ? "hidden" : "")}>
                  Continue
                </div>
                <div className={clsx("", loading ? "" : "hidden")}>
                  <div class="loader-line"></div>
                </div>
              </div>
              <div className=" text-[0.9rem] text-[#858585] font-Matter flex py-6  pb-[3rem] lg:pb-10 justify-center gap-2">
                Already have an account?
                <div className=" font-medium cursor-pointer text-[#205FFF]">
                  <Link href={"/login"}>Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
