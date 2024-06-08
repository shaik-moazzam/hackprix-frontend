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
import People1 from "../../public/images/signup.png";
import Image from "next/image";
import Arrowright from "@/public/icons/arrowright";

const Signup = () => {
  const { dispatch, state } = useUser();
  const user = state.user;
  const { toast, handleToastClick } = useToast();
  const [isEmpty, setIsEmpty] = useState(0);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
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
      name.trim().length == 0 ||
      emailRef.current.value.trim() === "" ||
      passwordRef.current.value.trim() === ""
    ) {
      setIsEmpty(true);
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
        user = await Register(email, password, name);

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
          // router("/dashboard");
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
      <div className="  flex h-[100vh] justify-center items-center">
        <div className="loader-line" />
      </div>
    );
  }

  return (
    <div className=" grid grid-cols-1 relative justify-center lg:grid-cols-5   min-h-[100vh] gap-[3rem] overflow-hidden">
      <div className=" h-full hidden bg-[#F5F5F5] lg:block grid-cols-1  col-span-2 w-full">
        <Image
          className=" h-full w-[70%] object-contain mx-auto "
          src={People1}
        />
      </div>
      <div className=" h-full col-span-3 flex justify-center lg:block  bg-[#f9fafb] lg:bg-white  w-full items-center">
        <div
          className={
            "py-10  px-[1rem] md:px-[2rem] w-full max-w-[640px] mx-auto "
          }
        >
          <div className=" w-full   relative  bg-white   border-[#dadcdd]  rounded-3xl px-[1rem] md:px-[2rem]    z-10">
            {/* <div className="  pt-[3rem] lg:pt-0 pb-[2rem] md:pb-[5rem] text-[#252525] font-circular text-center flex gap-5 w-max mx-auto text-[0.95rem] ">
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
            </div> */}
            <div className="py-[3rem]">
              <svg width="508" height="30" viewBox="0 0 508 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" rx="15" fill="black" />
                <path d="M14.82 21V12.21C14.17 12.81 13.34 13.2 12.33 13.38V12.165C13.41 11.935 14.31 11.38 15.03 10.5H16.11V21H14.82Z" fill="white" />
                <path d="M53.265 12.355L51.645 12.865C51.54 12.205 50.985 11.23 49.56 11.23C48.48 11.23 47.73 11.95 47.73 12.76C47.73 13.435 48.15 13.945 48.975 14.125L50.505 14.44C52.38 14.815 53.385 16 53.385 17.5C53.385 19.15 52.05 20.725 49.62 20.725C46.92 20.725 45.675 18.985 45.51 17.455L47.19 16.975C47.295 18.085 48.09 19.105 49.62 19.105C50.895 19.105 51.555 18.46 51.555 17.635C51.555 16.945 51.045 16.39 50.13 16.195L48.63 15.88C47.01 15.55 45.93 14.485 45.93 12.895C45.93 11.11 47.565 9.64 49.545 9.64C52.05 9.64 53.025 11.17 53.265 12.355ZM55.8855 20.5H54.1605V13.195H55.8855V20.5ZM53.8905 10.63C53.8905 10 54.4005 9.49 55.0155 9.49C55.6455 9.49 56.1555 10 56.1555 10.63C56.1555 11.26 55.6455 11.755 55.0155 11.755C54.4005 11.755 53.8905 11.26 53.8905 10.63ZM56.7053 20.905L58.3103 20.485C58.4303 21.385 59.1353 22.06 60.1403 22.06C61.5203 22.06 62.2103 21.355 62.2103 19.87V19.105C61.8953 19.675 61.1603 20.17 60.0953 20.17C58.1453 20.17 56.7203 18.67 56.7203 16.615C56.7203 14.665 58.0853 13.06 60.0953 13.06C61.2353 13.06 61.9403 13.525 62.2553 14.125V13.195H63.9353V19.81C63.9353 21.76 62.9303 23.575 60.1853 23.575C58.2503 23.575 56.9003 22.375 56.7053 20.905ZM60.3803 18.685C61.4903 18.685 62.2553 17.875 62.2553 16.615C62.2553 15.37 61.4603 14.56 60.3803 14.56C59.2703 14.56 58.4753 15.37 58.4753 16.615C58.4753 17.89 59.2403 18.685 60.3803 18.685ZM66.9033 16.285V20.5H65.1633V13.195H66.8583V14.17C67.3383 13.33 68.2083 12.985 69.0183 12.985C70.8033 12.985 71.6583 14.275 71.6583 15.88V20.5H69.9183V16.18C69.9183 15.28 69.5133 14.56 68.4183 14.56C67.4283 14.56 66.9033 15.325 66.9033 16.285ZM80.4523 19.69C80.0923 20.35 79.2373 20.71 78.3823 20.71C76.6423 20.71 75.6223 19.42 75.6223 17.8V13.195H77.3623V17.485C77.3623 18.385 77.7823 19.15 78.8323 19.15C79.8373 19.15 80.3623 18.475 80.3623 17.515V13.195H82.1023V19.165C82.1023 19.765 82.1473 20.23 82.1773 20.5H80.5123C80.4823 20.335 80.4523 19.99 80.4523 19.69ZM85.1795 23.35H83.4545V13.195H85.1345V14.185C85.4945 13.555 86.3345 13.03 87.4595 13.03C89.6195 13.03 90.8345 14.68 90.8345 16.84C90.8345 19.03 89.4995 20.68 87.3995 20.68C86.3495 20.68 85.5545 20.23 85.1795 19.675V23.35ZM89.0945 16.84C89.0945 15.475 88.2995 14.575 87.1295 14.575C85.9895 14.575 85.1645 15.475 85.1645 16.84C85.1645 18.235 85.9895 19.135 87.1295 19.135C88.2845 19.135 89.0945 18.235 89.0945 16.84Z" fill="black" />
                <path d="M127.91 22.92L134.43 16.4C135.2 15.63 135.2 14.37 134.43 13.6L127.91 7.08" stroke="#646D78" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <rect x="170.5" y="0.5" width="29" height="29" rx="14.5" stroke="#646D78" />
                <path d="M180.95 21L180.935 19.815L184.88 16.41C186.05 15.4 186.635 14.44 186.635 13.53C186.635 12.94 186.45 12.47 186.08 12.12C185.72 11.77 185.235 11.595 184.625 11.595C183.895 11.595 183.335 11.835 182.945 12.315C182.555 12.785 182.4 13.41 182.48 14.19L181.16 14.1C181.08 13 181.36 12.105 182 11.415C182.65 10.725 183.525 10.38 184.625 10.38C185.655 10.38 186.48 10.67 187.1 11.25C187.73 11.82 188.045 12.58 188.045 13.53C188.045 14.17 187.86 14.795 187.49 15.405C187.12 16.015 186.53 16.66 185.72 17.34L182.87 19.77H188.045V21H180.95Z" fill="#737A82" />
                <path d="M218.075 14.755H219.95C221.09 14.755 221.78 14.125 221.78 13.12C221.78 12.1 221.09 11.455 219.95 11.455H218.075V14.755ZM220.22 16.345H218.075V20.5H216.275V9.865H220.22C222.26 9.865 223.61 11.245 223.61 13.105C223.61 14.98 222.26 16.345 220.22 16.345ZM224.936 16.045H228.521C228.491 15.19 227.921 14.425 226.721 14.425C225.626 14.425 224.996 15.265 224.936 16.045ZM228.716 17.95L230.186 18.415C229.796 19.69 228.641 20.725 226.886 20.725C224.906 20.725 223.151 19.285 223.151 16.81C223.151 14.5 224.861 12.97 226.706 12.97C228.956 12.97 230.276 14.455 230.276 16.765C230.276 17.05 230.246 17.29 230.231 17.32H224.891C224.936 18.43 225.806 19.225 226.886 19.225C227.936 19.225 228.476 18.67 228.716 17.95ZM235.314 13.15V14.92C235.119 14.89 234.924 14.875 234.744 14.875C233.394 14.875 232.779 15.655 232.779 17.02V20.5H231.039V13.195H232.734V14.365C233.079 13.57 233.889 13.105 234.849 13.105C235.059 13.105 235.239 13.135 235.314 13.15ZM235.236 18.52L236.751 18.1C236.811 18.76 237.306 19.345 238.236 19.345C238.956 19.345 239.331 18.955 239.331 18.505C239.331 18.115 239.061 17.815 238.476 17.695L237.396 17.455C236.106 17.17 235.431 16.33 235.431 15.325C235.431 14.05 236.601 12.97 238.116 12.97C240.156 12.97 240.816 14.29 240.936 15.01L239.466 15.43C239.406 15.01 239.091 14.335 238.116 14.335C237.501 14.335 237.066 14.725 237.066 15.175C237.066 15.565 237.351 15.85 237.801 15.94L238.911 16.165C240.291 16.465 241.011 17.305 241.011 18.385C241.011 19.495 240.111 20.725 238.251 20.725C236.136 20.725 235.326 19.345 235.236 18.52ZM245.003 19.165C246.083 19.165 247.043 18.37 247.043 16.84C247.043 15.325 246.083 14.545 245.003 14.545C243.938 14.545 242.963 15.325 242.963 16.84C242.963 18.355 243.938 19.165 245.003 19.165ZM245.003 12.97C247.193 12.97 248.798 14.605 248.798 16.84C248.798 19.09 247.193 20.725 245.003 20.725C242.828 20.725 241.223 19.09 241.223 16.84C241.223 14.605 242.828 12.97 245.003 12.97ZM251.319 16.285V20.5H249.579V13.195H251.274V14.17C251.754 13.33 252.624 12.985 253.434 12.985C255.219 12.985 256.074 14.275 256.074 15.88V20.5H254.334V16.18C254.334 15.28 253.929 14.56 252.834 14.56C251.844 14.56 251.319 15.325 251.319 16.285ZM256.842 18.52C256.842 17.215 257.802 16.495 259.047 16.315L260.922 16.03C261.342 15.97 261.462 15.76 261.462 15.505C261.462 14.89 261.042 14.395 260.082 14.395C259.167 14.395 258.657 14.98 258.582 15.715L256.992 15.355C257.127 14.095 258.267 12.97 260.067 12.97C262.317 12.97 263.172 14.245 263.172 15.7V19.33C263.172 19.99 263.247 20.425 263.262 20.5H261.642C261.627 20.455 261.567 20.155 261.567 19.57C261.222 20.125 260.502 20.725 259.317 20.725C257.787 20.725 256.842 19.675 256.842 18.52ZM259.647 19.36C260.622 19.36 261.462 18.895 261.462 17.47V17.14L259.557 17.425C259.017 17.515 258.582 17.815 258.582 18.415C258.582 18.91 258.957 19.36 259.647 19.36ZM266.116 20.5H264.376V9.64H266.116V20.5ZM271.451 16.825C271.451 18.22 272.231 19.15 273.416 19.15C274.556 19.15 275.351 18.205 275.351 16.81C275.351 15.415 274.571 14.545 273.431 14.545C272.291 14.545 271.451 15.43 271.451 16.825ZM277.031 9.64V19.165C277.031 19.825 277.091 20.38 277.106 20.5H275.441C275.411 20.335 275.366 19.855 275.366 19.555C275.021 20.17 274.256 20.68 273.221 20.68C271.121 20.68 269.711 19.03 269.711 16.825C269.711 14.725 271.136 13 273.191 13C274.466 13 275.111 13.585 275.336 14.05V9.64H277.031ZM279.619 16.045H283.204C283.174 15.19 282.604 14.425 281.404 14.425C280.309 14.425 279.679 15.265 279.619 16.045ZM283.399 17.95L284.869 18.415C284.479 19.69 283.324 20.725 281.569 20.725C279.589 20.725 277.834 19.285 277.834 16.81C277.834 14.5 279.544 12.97 281.389 12.97C283.639 12.97 284.959 14.455 284.959 16.765C284.959 17.05 284.929 17.29 284.914 17.32H279.574C279.619 18.43 280.489 19.225 281.569 19.225C282.619 19.225 283.159 18.67 283.399 17.95ZM287.927 10.96V13.195H289.442V14.74H287.927V18.13C287.927 18.775 288.212 19.045 288.857 19.045C289.097 19.045 289.382 19 289.457 18.985V20.425C289.352 20.47 289.022 20.59 288.392 20.59C287.042 20.59 286.202 19.78 286.202 18.415V14.74H284.852V13.195H285.227C286.007 13.195 286.352 12.7 286.352 12.055V10.96H287.927ZM289.895 18.52C289.895 17.215 290.855 16.495 292.1 16.315L293.975 16.03C294.395 15.97 294.515 15.76 294.515 15.505C294.515 14.89 294.095 14.395 293.135 14.395C292.22 14.395 291.71 14.98 291.635 15.715L290.045 15.355C290.18 14.095 291.32 12.97 293.12 12.97C295.37 12.97 296.225 14.245 296.225 15.7V19.33C296.225 19.99 296.3 20.425 296.315 20.5H294.695C294.68 20.455 294.62 20.155 294.62 19.57C294.275 20.125 293.555 20.725 292.37 20.725C290.84 20.725 289.895 19.675 289.895 18.52ZM292.7 19.36C293.675 19.36 294.515 18.895 294.515 17.47V17.14L292.61 17.425C292.07 17.515 291.635 17.815 291.635 18.415C291.635 18.91 292.01 19.36 292.7 19.36ZM299.153 20.5H297.428V13.195H299.153V20.5ZM297.158 10.63C297.158 10 297.668 9.49 298.283 9.49C298.913 9.49 299.423 10 299.423 10.63C299.423 11.26 298.913 11.755 298.283 11.755C297.668 11.755 297.158 11.26 297.158 10.63ZM302.238 20.5H300.498V9.64H302.238V20.5ZM302.937 18.52L304.452 18.1C304.512 18.76 305.007 19.345 305.937 19.345C306.657 19.345 307.032 18.955 307.032 18.505C307.032 18.115 306.762 17.815 306.177 17.695L305.097 17.455C303.807 17.17 303.132 16.33 303.132 15.325C303.132 14.05 304.302 12.97 305.817 12.97C307.857 12.97 308.517 14.29 308.637 15.01L307.167 15.43C307.107 15.01 306.792 14.335 305.817 14.335C305.202 14.335 304.767 14.725 304.767 15.175C304.767 15.565 305.052 15.85 305.502 15.94L306.612 16.165C307.992 16.465 308.712 17.305 308.712 18.385C308.712 19.495 307.812 20.725 305.952 20.725C303.837 20.725 303.027 19.345 302.937 18.52Z" fill="#646D78" />
                <path d="M345.91 22.92L352.43 16.4C353.2 15.63 353.2 14.37 352.43 13.6L345.91 7.08" stroke="#646D78" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <rect x="388.5" y="0.5" width="29" height="29" rx="14.5" stroke="#646D78" />
                <path d="M402.625 21.12C401.595 21.12 400.735 20.845 400.045 20.295C399.365 19.745 398.975 19.01 398.875 18.09L400.165 17.895C400.235 18.505 400.495 18.99 400.945 19.35C401.395 19.71 401.955 19.89 402.625 19.89C403.355 19.89 403.935 19.69 404.365 19.29C404.805 18.89 405.025 18.36 405.025 17.7C405.025 17.02 404.82 16.49 404.41 16.11C404 15.73 403.43 15.54 402.7 15.54C402.28 15.54 401.895 15.65 401.545 15.87L400.96 15L404.275 11.715H399.175V10.5H405.88V11.685L402.895 14.595C403.935 14.495 404.785 14.735 405.445 15.315C406.105 15.895 406.435 16.7 406.435 17.73C406.435 18.75 406.085 19.57 405.385 20.19C404.695 20.81 403.775 21.12 402.625 21.12Z" fill="#646D78" />
                <path d="M435.475 15.175C435.475 17.74 437.245 19.015 439.03 19.015C440.83 19.015 442.6 17.74 442.6 15.175C442.6 12.61 440.83 11.335 439.03 11.335C437.245 11.335 435.475 12.61 435.475 15.175ZM433.63 15.175C433.63 11.695 436.24 9.64 439.03 9.64C441.82 9.64 444.445 11.695 444.445 15.175C444.445 18.67 441.82 20.725 439.03 20.725C436.24 20.725 433.63 18.67 433.63 15.175ZM447.035 16.285V20.5H445.295V13.195H446.99V14.17C447.47 13.33 448.34 12.985 449.15 12.985C450.935 12.985 451.79 14.275 451.79 15.88V20.5H450.05V16.18C450.05 15.28 449.645 14.56 448.55 14.56C447.56 14.56 447.035 15.325 447.035 16.285ZM454.704 20.5H453.009V9.64H454.719V14.095C455.049 13.525 455.889 13 457.014 13C459.204 13 460.389 14.665 460.389 16.81C460.389 19.015 459.084 20.68 456.954 20.68C455.919 20.68 455.124 20.23 454.704 19.525V20.5ZM458.634 16.825C458.634 15.37 457.824 14.545 456.669 14.545C455.559 14.545 454.704 15.37 454.704 16.825C454.704 18.265 455.559 19.135 456.669 19.135C457.809 19.135 458.634 18.265 458.634 16.825ZM464.371 19.165C465.451 19.165 466.411 18.37 466.411 16.84C466.411 15.325 465.451 14.545 464.371 14.545C463.306 14.545 462.331 15.325 462.331 16.84C462.331 18.355 463.306 19.165 464.371 19.165ZM464.371 12.97C466.561 12.97 468.166 14.605 468.166 16.84C468.166 19.09 466.561 20.725 464.371 20.725C462.196 20.725 460.591 19.09 460.591 16.84C460.591 14.605 462.196 12.97 464.371 12.97ZM468.498 18.52C468.498 17.215 469.458 16.495 470.703 16.315L472.578 16.03C472.998 15.97 473.118 15.76 473.118 15.505C473.118 14.89 472.698 14.395 471.738 14.395C470.823 14.395 470.313 14.98 470.238 15.715L468.648 15.355C468.783 14.095 469.923 12.97 471.723 12.97C473.973 12.97 474.828 14.245 474.828 15.7V19.33C474.828 19.99 474.903 20.425 474.918 20.5H473.298C473.283 20.455 473.223 20.155 473.223 19.57C472.878 20.125 472.158 20.725 470.973 20.725C469.443 20.725 468.498 19.675 468.498 18.52ZM471.303 19.36C472.278 19.36 473.118 18.895 473.118 17.47V17.14L471.213 17.425C470.673 17.515 470.238 17.815 470.238 18.415C470.238 18.91 470.613 19.36 471.303 19.36ZM480.306 13.15V14.92C480.111 14.89 479.916 14.875 479.736 14.875C478.386 14.875 477.771 15.655 477.771 17.02V20.5H476.031V13.195H477.726V14.365C478.071 13.57 478.881 13.105 479.841 13.105C480.051 13.105 480.231 13.135 480.306 13.15ZM481.956 16.825C481.956 18.22 482.736 19.15 483.921 19.15C485.061 19.15 485.856 18.205 485.856 16.81C485.856 15.415 485.076 14.545 483.936 14.545C482.796 14.545 481.956 15.43 481.956 16.825ZM487.536 9.64V19.165C487.536 19.825 487.596 20.38 487.611 20.5H485.946C485.916 20.335 485.871 19.855 485.871 19.555C485.526 20.17 484.761 20.68 483.726 20.68C481.626 20.68 480.216 19.03 480.216 16.825C480.216 14.725 481.641 13 483.696 13C484.971 13 485.616 13.585 485.841 14.05V9.64H487.536ZM490.634 20.5H488.909V13.195H490.634V20.5ZM488.639 10.63C488.639 10 489.149 9.49 489.764 9.49C490.394 9.49 490.904 10 490.904 10.63C490.904 11.26 490.394 11.755 489.764 11.755C489.149 11.755 488.639 11.26 488.639 10.63ZM493.719 16.285V20.5H491.979V13.195H493.674V14.17C494.154 13.33 495.024 12.985 495.834 12.985C497.619 12.985 498.474 14.275 498.474 15.88V20.5H496.734V16.18C496.734 15.28 496.329 14.56 495.234 14.56C494.244 14.56 493.719 15.325 493.719 16.285ZM499.167 20.905L500.772 20.485C500.892 21.385 501.597 22.06 502.602 22.06C503.982 22.06 504.672 21.355 504.672 19.87V19.105C504.357 19.675 503.622 20.17 502.557 20.17C500.607 20.17 499.182 18.67 499.182 16.615C499.182 14.665 500.547 13.06 502.557 13.06C503.697 13.06 504.402 13.525 504.717 14.125V13.195H506.397V19.81C506.397 21.76 505.392 23.575 502.647 23.575C500.712 23.575 499.362 22.375 499.167 20.905ZM502.842 18.685C503.952 18.685 504.717 17.875 504.717 16.615C504.717 15.37 503.922 14.56 502.842 14.56C501.732 14.56 500.937 15.37 500.937 16.615C500.937 17.89 501.702 18.685 502.842 18.685Z" fill="#646D78" />
              </svg>

            </div>
            <div className=" w-[508px] mx-auto ">
              <Link href={`${BASE_URL}student/auth/google`}>
                <div className=" bg-white w-full justify-center border-[1px] font-circular font-[500] border-[#E5E7EB] py-4  rounded-[10rem] flex gap-3 items-center ">
                  <Google g={true} /> Sign Up with google
                </div>
              </Link>
              <div className=" flex w-full items-center py-[2rem]">
                <div className=" w-full h-[0.75px] bg-[#D5D5D5] "></div>
                <div className=" px-2 text-[#D5D5D5]  font-Matter">Or</div>
                <div className=" w-full h-[0.75px] bg-[#D5D5D5] "></div>
              </div>
              <div className=" text-[0.9rem] font-circular  flex flex-col gap-4 pb-6">
                <div className=" flex gap-2 flex-col ">
                  Name
                  <input
                    ref={emailRef}
                    onClick={() => {
                      setIsEmpty(0);
                    }}
                    onChange={(e) => setname(e.target.value)}
                    onKeyPress={(e) => handleEnterKeyPress(e, passwordRef)}
                    type="email"
                    className={clsx(
                      " text-[#858585]  px-3 outline-none border-[1px] duration-300   active:border-[1px] focus:border-[1px] focus:border-[#205FFF] w-full rounded-xl leading-none pt-3.5  pb-[0.9rem] bg-[#fff]",
                      isEmpty && name.trim().length == 0
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
                      isEmpty && email.trim().length == 0
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
                        isEmpty && password.trim() < 6
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
                className=" text-[0.9rem] bg-[#205FFF] w-full cursor-pointer justify-center mt-5 text-white font-circular font-medium py-4 rounded-full flex gap-3 items-center min-h-[60px]"
                onClick={handleSignup}
              >
                <div className={clsx("", loading ? "hidden" : "")}>
                  Continue
                </div>
                <div className={clsx("", loading ? "" : "hidden")}>
                  <div class="loader"></div>
                </div>
              </div>
              <div className=" text-[0.9rem] text-[#858585] font-circular flex py-6  pb-[3rem] lg:pb-10 justify-center gap-2">
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
