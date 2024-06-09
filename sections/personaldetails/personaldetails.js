"use client"
import Logo from '@/public/icons/logo';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import People1 from "../../public/images/signup.png";
import Image from 'next/image';
import countries from '@/utils/countries';
import clsx from 'clsx';
import Arrowdown from '@/public/icons/arrowdown';
import { motion } from 'framer-motion';
import Search from '@/public/icons/search';
import { DatePicker } from '@/components/ui/datepicker';
import { useToast } from '@/components/ui/use-toast';
import Otppop from '@/components/otppop';
import { useUser } from '@/redux/userContext';
import sendOtp from '@/api/sendOtp';
import { useRouter } from 'next/navigation';
const Personaldetails = () => {
    const { state } = useUser();
    const user = state.user
    const route = useRouter()
    const [pageLoad, setPageLoad] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!user && !token) {
            route.push("/login")
            setPageLoad(false);
        }
        else if (user && user.phone && user.gender) {
            route.push("/onboarding")
        }
        else {
            setPageLoad(false);
        }
    }, [user])
    const genders = ["Male", "Female"];
    const [Mobile, setMobile] = useState();
    const [phone, setphone] = useState();
    const [gender, setGender] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [showOptions, setShowOptions] = useState(false);
    const [showOptions1, setShowOptions1] = useState(false);
    const [showOptions2, setShowOptions2] = useState(false);
    const [focus, setfocus] = useState(null);
    const [popup, setpopup] = useState(false);

    const [loading, setloading] = useState(false);
    const { toast, handleToastClick } = useToast();
    const [otpcountdownw, setotpcountdownw] = useState(false);


    const [dob, setdob] = useState()
    const [selectedCountry, setSelectedCountry] = useState({
        name: "India",
        code: "IN",
        phone: 91,

        phoneLength: 10,
    });


    const validatephone = (phone) => {
        // Destructure phone object
        if (!phone) {
            return "Mobile number is required";
        }

        if (phone) {
            const { mobileNumber, phoneLength } = phone;

            if (mobileNumber.length === parseInt(phoneLength)) {
                return true; // Mobile number length is valid
            } else {
                return `Mobile number should have ${phoneLength} digits.`; // Return error message
            }
        }
    };
    const filteredCountries = countries.filter(
        (country) =>
            country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            country.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
            country.phone.toString().includes(searchTerm)
    );
    const handleMobileNumberChange = (e) => {
        const maxMobileLength = selectedCountry.phoneLength;
        const inputNumber = e.target.value.replace(/\D/g, "");
        const numericInput = inputNumber.replace(/\D/g, "");
        const data = {
            countryCode: selectedCountry.code,
            PhoneCode: selectedCountry.phone,
            mobileNumber: numericInput,
            phoneLength: selectedCountry.phoneLength,
            phoneNumber: "+" + selectedCountry.phone + numericInput,
        };
        setMobile(data.phoneNumber);
        setphone(data);
    };
    const dedlinedate = (dd) => {
        const date = new Date(dd);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() returns month from 0-11
        const year = date.getFullYear();

        const formatteddate = `${day}/${month}/${year}`;
        console.log(formatteddate);
        setdob(formatteddate);
    };
    const submit = async () => {
        if (loading) {
            return
        }
        const validationResult = validatephone(phone);
        if (validationResult !== true) {
            toast({
                title: validationResult,
            });
        }
        else if (!dob)
            toast({
                title: "Date of Birth is required",
            });

        else if (!gender) {
            toast({
                title: "Gender is required",
            })
        }
        else {
            setloading(true);
            const data = await sendOtp(phone?.phoneNumber);

            if (!data.error) {
                if (data?.message?.includes("Duplicate -- Phone number")) {
                    toast({ title: "Duplicate Number, number already exists" })
                }
                else {
                    setpopup(true)
                    toast({ title: "Otp sent Successfully" });

                }
            }
            else {
                toast({ title: data.error })
            }
            setloading(false);
        }
    }
    const popupclose = () => {
        setpopup(false);
    };
    const sendOtpMessage = async () => {
        const token = getToken();
        setloading(true);
        const userotp = await sendOtp(phone?.phoneNumber);
        setotpcountdownw(!otpcountdownw);
        console.log(userotp, "read");
        if (userotp.error) {
            {
                console.log(userotp.error, "otp message");
                toast({ title: userotp.error });
                setloading(false);
                return;
            }
        }
        setpopup(true);
        toast({
            title: "otp sent succesfully",
        });
        {

            setloading(false);
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
        <div onClick={() => { setfocus(null) }} className=" grid grid-cols-1 justify-center lg:grid-cols-5  relative  min-h-[100vh] md:max-h-[100vh]  gap-[3rem] overflow-hidden">
            <div className={clsx("    absolute  top-0 z-[100]")}>
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
                        <Otppop
                            popupclose={popupclose}
                            phone={phone?.phoneNumber}
                            sendOtpMessage={sendOtpMessage}
                            otpcountdownw={otpcountdownw}
                            gender={gender}
                            dob={dob}
                        />
                    </motion.div>
                </div>
            </div>
            <div className=" absolute hidden lg:flex left-[1rem] md:left-[2rem] lg:left-[2rem] top-[2rem]  z-20">
                <Link href={"/"}>
                    <Logo />
                </Link>
            </div>
            <div className=" h-full hidden bg-[#F5F5F5] lg:block grid-cols-1 col-span-2  w-full">

                <Image
                    className=" h-full w-[70%] object-contain mx-auto "
                    src={People1}
                />
            </div>
            <div className=' col-span-3 py-[5rem]'>
                <div className=' flex justify-center'><svg width="524" height="30" viewBox="0 0 524 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" rx="15" fill="black" />
                    <path d="M14.82 21V12.21C14.17 12.81 13.34 13.2 12.33 13.38V12.165C13.41 11.935 14.31 11.38 15.03 10.5H16.11V21H14.82Z" fill="white" />
                    <path d="M53.265 12.355L51.645 12.865C51.54 12.205 50.985 11.23 49.56 11.23C48.48 11.23 47.73 11.95 47.73 12.76C47.73 13.435 48.15 13.945 48.975 14.125L50.505 14.44C52.38 14.815 53.385 16 53.385 17.5C53.385 19.15 52.05 20.725 49.62 20.725C46.92 20.725 45.675 18.985 45.51 17.455L47.19 16.975C47.295 18.085 48.09 19.105 49.62 19.105C50.895 19.105 51.555 18.46 51.555 17.635C51.555 16.945 51.045 16.39 50.13 16.195L48.63 15.88C47.01 15.55 45.93 14.485 45.93 12.895C45.93 11.11 47.565 9.64 49.545 9.64C52.05 9.64 53.025 11.17 53.265 12.355ZM55.8855 20.5H54.1605V13.195H55.8855V20.5ZM53.8905 10.63C53.8905 10 54.4005 9.49 55.0155 9.49C55.6455 9.49 56.1555 10 56.1555 10.63C56.1555 11.26 55.6455 11.755 55.0155 11.755C54.4005 11.755 53.8905 11.26 53.8905 10.63ZM56.7053 20.905L58.3103 20.485C58.4303 21.385 59.1353 22.06 60.1403 22.06C61.5203 22.06 62.2103 21.355 62.2103 19.87V19.105C61.8953 19.675 61.1603 20.17 60.0953 20.17C58.1453 20.17 56.7203 18.67 56.7203 16.615C56.7203 14.665 58.0853 13.06 60.0953 13.06C61.2353 13.06 61.9403 13.525 62.2553 14.125V13.195H63.9353V19.81C63.9353 21.76 62.9303 23.575 60.1853 23.575C58.2503 23.575 56.9003 22.375 56.7053 20.905ZM60.3803 18.685C61.4903 18.685 62.2553 17.875 62.2553 16.615C62.2553 15.37 61.4603 14.56 60.3803 14.56C59.2703 14.56 58.4753 15.37 58.4753 16.615C58.4753 17.89 59.2403 18.685 60.3803 18.685ZM66.9033 16.285V20.5H65.1633V13.195H66.8583V14.17C67.3383 13.33 68.2083 12.985 69.0183 12.985C70.8033 12.985 71.6583 14.275 71.6583 15.88V20.5H69.9183V16.18C69.9183 15.28 69.5133 14.56 68.4183 14.56C67.4283 14.56 66.9033 15.325 66.9033 16.285ZM80.4523 19.69C80.0923 20.35 79.2373 20.71 78.3823 20.71C76.6423 20.71 75.6223 19.42 75.6223 17.8V13.195H77.3623V17.485C77.3623 18.385 77.7823 19.15 78.8323 19.15C79.8373 19.15 80.3623 18.475 80.3623 17.515V13.195H82.1023V19.165C82.1023 19.765 82.1473 20.23 82.1773 20.5H80.5123C80.4823 20.335 80.4523 19.99 80.4523 19.69ZM85.1795 23.35H83.4545V13.195H85.1345V14.185C85.4945 13.555 86.3345 13.03 87.4595 13.03C89.6195 13.03 90.8345 14.68 90.8345 16.84C90.8345 19.03 89.4995 20.68 87.3995 20.68C86.3495 20.68 85.5545 20.23 85.1795 19.675V23.35ZM89.0945 16.84C89.0945 15.475 88.2995 14.575 87.1295 14.575C85.9895 14.575 85.1645 15.475 85.1645 16.84C85.1645 18.235 85.9895 19.135 87.1295 19.135C88.2845 19.135 89.0945 18.235 89.0945 16.84Z" fill="black" />
                    <path d="M131.91 22.92L138.43 16.4C139.2 15.63 139.2 14.37 138.43 13.6L131.91 7.08" stroke="#646D78" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <rect x="178" width="30" height="30" rx="15" fill="black" />
                    <path d="M188.95 21L188.935 19.815L192.88 16.41C194.05 15.4 194.635 14.44 194.635 13.53C194.635 12.94 194.45 12.47 194.08 12.12C193.72 11.77 193.235 11.595 192.625 11.595C191.895 11.595 191.335 11.835 190.945 12.315C190.555 12.785 190.4 13.41 190.48 14.19L189.16 14.1C189.08 13 189.36 12.105 190 11.415C190.65 10.725 191.525 10.38 192.625 10.38C193.655 10.38 194.48 10.67 195.1 11.25C195.73 11.82 196.045 12.58 196.045 13.53C196.045 14.17 195.86 14.795 195.49 15.405C195.12 16.015 194.53 16.66 193.72 17.34L190.87 19.77H196.045V21H188.95Z" fill="white" />
                    <path d="M226.075 14.755H227.95C229.09 14.755 229.78 14.125 229.78 13.12C229.78 12.1 229.09 11.455 227.95 11.455H226.075V14.755ZM228.22 16.345H226.075V20.5H224.275V9.865H228.22C230.26 9.865 231.61 11.245 231.61 13.105C231.61 14.98 230.26 16.345 228.22 16.345ZM232.936 16.045H236.521C236.491 15.19 235.921 14.425 234.721 14.425C233.626 14.425 232.996 15.265 232.936 16.045ZM236.716 17.95L238.186 18.415C237.796 19.69 236.641 20.725 234.886 20.725C232.906 20.725 231.151 19.285 231.151 16.81C231.151 14.5 232.861 12.97 234.706 12.97C236.956 12.97 238.276 14.455 238.276 16.765C238.276 17.05 238.246 17.29 238.231 17.32H232.891C232.936 18.43 233.806 19.225 234.886 19.225C235.936 19.225 236.476 18.67 236.716 17.95ZM243.314 13.15V14.92C243.119 14.89 242.924 14.875 242.744 14.875C241.394 14.875 240.779 15.655 240.779 17.02V20.5H239.039V13.195H240.734V14.365C241.079 13.57 241.889 13.105 242.849 13.105C243.059 13.105 243.239 13.135 243.314 13.15ZM243.236 18.52L244.751 18.1C244.811 18.76 245.306 19.345 246.236 19.345C246.956 19.345 247.331 18.955 247.331 18.505C247.331 18.115 247.061 17.815 246.476 17.695L245.396 17.455C244.106 17.17 243.431 16.33 243.431 15.325C243.431 14.05 244.601 12.97 246.116 12.97C248.156 12.97 248.816 14.29 248.936 15.01L247.466 15.43C247.406 15.01 247.091 14.335 246.116 14.335C245.501 14.335 245.066 14.725 245.066 15.175C245.066 15.565 245.351 15.85 245.801 15.94L246.911 16.165C248.291 16.465 249.011 17.305 249.011 18.385C249.011 19.495 248.111 20.725 246.251 20.725C244.136 20.725 243.326 19.345 243.236 18.52ZM253.003 19.165C254.083 19.165 255.043 18.37 255.043 16.84C255.043 15.325 254.083 14.545 253.003 14.545C251.938 14.545 250.963 15.325 250.963 16.84C250.963 18.355 251.938 19.165 253.003 19.165ZM253.003 12.97C255.193 12.97 256.798 14.605 256.798 16.84C256.798 19.09 255.193 20.725 253.003 20.725C250.828 20.725 249.223 19.09 249.223 16.84C249.223 14.605 250.828 12.97 253.003 12.97ZM259.319 16.285V20.5H257.579V13.195H259.274V14.17C259.754 13.33 260.624 12.985 261.434 12.985C263.219 12.985 264.074 14.275 264.074 15.88V20.5H262.334V16.18C262.334 15.28 261.929 14.56 260.834 14.56C259.844 14.56 259.319 15.325 259.319 16.285ZM264.842 18.52C264.842 17.215 265.802 16.495 267.047 16.315L268.922 16.03C269.342 15.97 269.462 15.76 269.462 15.505C269.462 14.89 269.042 14.395 268.082 14.395C267.167 14.395 266.657 14.98 266.582 15.715L264.992 15.355C265.127 14.095 266.267 12.97 268.067 12.97C270.317 12.97 271.172 14.245 271.172 15.7V19.33C271.172 19.99 271.247 20.425 271.262 20.5H269.642C269.627 20.455 269.567 20.155 269.567 19.57C269.222 20.125 268.502 20.725 267.317 20.725C265.787 20.725 264.842 19.675 264.842 18.52ZM267.647 19.36C268.622 19.36 269.462 18.895 269.462 17.47V17.14L267.557 17.425C267.017 17.515 266.582 17.815 266.582 18.415C266.582 18.91 266.957 19.36 267.647 19.36ZM274.116 20.5H272.376V9.64H274.116V20.5ZM279.451 16.825C279.451 18.22 280.231 19.15 281.416 19.15C282.556 19.15 283.351 18.205 283.351 16.81C283.351 15.415 282.571 14.545 281.431 14.545C280.291 14.545 279.451 15.43 279.451 16.825ZM285.031 9.64V19.165C285.031 19.825 285.091 20.38 285.106 20.5H283.441C283.411 20.335 283.366 19.855 283.366 19.555C283.021 20.17 282.256 20.68 281.221 20.68C279.121 20.68 277.711 19.03 277.711 16.825C277.711 14.725 279.136 13 281.191 13C282.466 13 283.111 13.585 283.336 14.05V9.64H285.031ZM287.619 16.045H291.204C291.174 15.19 290.604 14.425 289.404 14.425C288.309 14.425 287.679 15.265 287.619 16.045ZM291.399 17.95L292.869 18.415C292.479 19.69 291.324 20.725 289.569 20.725C287.589 20.725 285.834 19.285 285.834 16.81C285.834 14.5 287.544 12.97 289.389 12.97C291.639 12.97 292.959 14.455 292.959 16.765C292.959 17.05 292.929 17.29 292.914 17.32H287.574C287.619 18.43 288.489 19.225 289.569 19.225C290.619 19.225 291.159 18.67 291.399 17.95ZM295.927 10.96V13.195H297.442V14.74H295.927V18.13C295.927 18.775 296.212 19.045 296.857 19.045C297.097 19.045 297.382 19 297.457 18.985V20.425C297.352 20.47 297.022 20.59 296.392 20.59C295.042 20.59 294.202 19.78 294.202 18.415V14.74H292.852V13.195H293.227C294.007 13.195 294.352 12.7 294.352 12.055V10.96H295.927ZM297.895 18.52C297.895 17.215 298.855 16.495 300.1 16.315L301.975 16.03C302.395 15.97 302.515 15.76 302.515 15.505C302.515 14.89 302.095 14.395 301.135 14.395C300.22 14.395 299.71 14.98 299.635 15.715L298.045 15.355C298.18 14.095 299.32 12.97 301.12 12.97C303.37 12.97 304.225 14.245 304.225 15.7V19.33C304.225 19.99 304.3 20.425 304.315 20.5H302.695C302.68 20.455 302.62 20.155 302.62 19.57C302.275 20.125 301.555 20.725 300.37 20.725C298.84 20.725 297.895 19.675 297.895 18.52ZM300.7 19.36C301.675 19.36 302.515 18.895 302.515 17.47V17.14L300.61 17.425C300.07 17.515 299.635 17.815 299.635 18.415C299.635 18.91 300.01 19.36 300.7 19.36ZM307.153 20.5H305.428V13.195H307.153V20.5ZM305.158 10.63C305.158 10 305.668 9.49 306.283 9.49C306.913 9.49 307.423 10 307.423 10.63C307.423 11.26 306.913 11.755 306.283 11.755C305.668 11.755 305.158 11.26 305.158 10.63ZM310.238 20.5H308.498V9.64H310.238V20.5ZM310.937 18.52L312.452 18.1C312.512 18.76 313.007 19.345 313.937 19.345C314.657 19.345 315.032 18.955 315.032 18.505C315.032 18.115 314.762 17.815 314.177 17.695L313.097 17.455C311.807 17.17 311.132 16.33 311.132 15.325C311.132 14.05 312.302 12.97 313.817 12.97C315.857 12.97 316.517 14.29 316.637 15.01L315.167 15.43C315.107 15.01 314.792 14.335 313.817 14.335C313.202 14.335 312.767 14.725 312.767 15.175C312.767 15.565 313.052 15.85 313.502 15.94L314.612 16.165C315.992 16.465 316.712 17.305 316.712 18.385C316.712 19.495 315.812 20.725 313.952 20.725C311.837 20.725 311.027 19.345 310.937 18.52Z" fill="black" />
                    <path d="M357.91 22.92L364.43 16.4C365.2 15.63 365.2 14.37 364.43 13.6L357.91 7.08" stroke="#646D78" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <rect x="404.5" y="0.5" width="29" height="29" rx="14.5" stroke="#646D78" />
                    <path d="M418.625 21.12C417.595 21.12 416.735 20.845 416.045 20.295C415.365 19.745 414.975 19.01 414.875 18.09L416.165 17.895C416.235 18.505 416.495 18.99 416.945 19.35C417.395 19.71 417.955 19.89 418.625 19.89C419.355 19.89 419.935 19.69 420.365 19.29C420.805 18.89 421.025 18.36 421.025 17.7C421.025 17.02 420.82 16.49 420.41 16.11C420 15.73 419.43 15.54 418.7 15.54C418.28 15.54 417.895 15.65 417.545 15.87L416.96 15L420.275 11.715H415.175V10.5H421.88V11.685L418.895 14.595C419.935 14.495 420.785 14.735 421.445 15.315C422.105 15.895 422.435 16.7 422.435 17.73C422.435 18.75 422.085 19.57 421.385 20.19C420.695 20.81 419.775 21.12 418.625 21.12Z" fill="#646D78" />
                    <path d="M451.475 15.175C451.475 17.74 453.245 19.015 455.03 19.015C456.83 19.015 458.6 17.74 458.6 15.175C458.6 12.61 456.83 11.335 455.03 11.335C453.245 11.335 451.475 12.61 451.475 15.175ZM449.63 15.175C449.63 11.695 452.24 9.64 455.03 9.64C457.82 9.64 460.445 11.695 460.445 15.175C460.445 18.67 457.82 20.725 455.03 20.725C452.24 20.725 449.63 18.67 449.63 15.175ZM463.035 16.285V20.5H461.295V13.195H462.99V14.17C463.47 13.33 464.34 12.985 465.15 12.985C466.935 12.985 467.79 14.275 467.79 15.88V20.5H466.05V16.18C466.05 15.28 465.645 14.56 464.55 14.56C463.56 14.56 463.035 15.325 463.035 16.285ZM470.704 20.5H469.009V9.64H470.719V14.095C471.049 13.525 471.889 13 473.014 13C475.204 13 476.389 14.665 476.389 16.81C476.389 19.015 475.084 20.68 472.954 20.68C471.919 20.68 471.124 20.23 470.704 19.525V20.5ZM474.634 16.825C474.634 15.37 473.824 14.545 472.669 14.545C471.559 14.545 470.704 15.37 470.704 16.825C470.704 18.265 471.559 19.135 472.669 19.135C473.809 19.135 474.634 18.265 474.634 16.825ZM480.371 19.165C481.451 19.165 482.411 18.37 482.411 16.84C482.411 15.325 481.451 14.545 480.371 14.545C479.306 14.545 478.331 15.325 478.331 16.84C478.331 18.355 479.306 19.165 480.371 19.165ZM480.371 12.97C482.561 12.97 484.166 14.605 484.166 16.84C484.166 19.09 482.561 20.725 480.371 20.725C478.196 20.725 476.591 19.09 476.591 16.84C476.591 14.605 478.196 12.97 480.371 12.97ZM484.498 18.52C484.498 17.215 485.458 16.495 486.703 16.315L488.578 16.03C488.998 15.97 489.118 15.76 489.118 15.505C489.118 14.89 488.698 14.395 487.738 14.395C486.823 14.395 486.313 14.98 486.238 15.715L484.648 15.355C484.783 14.095 485.923 12.97 487.723 12.97C489.973 12.97 490.828 14.245 490.828 15.7V19.33C490.828 19.99 490.903 20.425 490.918 20.5H489.298C489.283 20.455 489.223 20.155 489.223 19.57C488.878 20.125 488.158 20.725 486.973 20.725C485.443 20.725 484.498 19.675 484.498 18.52ZM487.303 19.36C488.278 19.36 489.118 18.895 489.118 17.47V17.14L487.213 17.425C486.673 17.515 486.238 17.815 486.238 18.415C486.238 18.91 486.613 19.36 487.303 19.36ZM496.306 13.15V14.92C496.111 14.89 495.916 14.875 495.736 14.875C494.386 14.875 493.771 15.655 493.771 17.02V20.5H492.031V13.195H493.726V14.365C494.071 13.57 494.881 13.105 495.841 13.105C496.051 13.105 496.231 13.135 496.306 13.15ZM497.956 16.825C497.956 18.22 498.736 19.15 499.921 19.15C501.061 19.15 501.856 18.205 501.856 16.81C501.856 15.415 501.076 14.545 499.936 14.545C498.796 14.545 497.956 15.43 497.956 16.825ZM503.536 9.64V19.165C503.536 19.825 503.596 20.38 503.611 20.5H501.946C501.916 20.335 501.871 19.855 501.871 19.555C501.526 20.17 500.761 20.68 499.726 20.68C497.626 20.68 496.216 19.03 496.216 16.825C496.216 14.725 497.641 13 499.696 13C500.971 13 501.616 13.585 501.841 14.05V9.64H503.536ZM506.634 20.5H504.909V13.195H506.634V20.5ZM504.639 10.63C504.639 10 505.149 9.49 505.764 9.49C506.394 9.49 506.904 10 506.904 10.63C506.904 11.26 506.394 11.755 505.764 11.755C505.149 11.755 504.639 11.26 504.639 10.63ZM509.719 16.285V20.5H507.979V13.195H509.674V14.17C510.154 13.33 511.024 12.985 511.834 12.985C513.619 12.985 514.474 14.275 514.474 15.88V20.5H512.734V16.18C512.734 15.28 512.329 14.56 511.234 14.56C510.244 14.56 509.719 15.325 509.719 16.285ZM515.167 20.905L516.772 20.485C516.892 21.385 517.597 22.06 518.602 22.06C519.982 22.06 520.672 21.355 520.672 19.87V19.105C520.357 19.675 519.622 20.17 518.557 20.17C516.607 20.17 515.182 18.67 515.182 16.615C515.182 14.665 516.547 13.06 518.557 13.06C519.697 13.06 520.402 13.525 520.717 14.125V13.195H522.397V19.81C522.397 21.76 521.392 23.575 518.647 23.575C516.712 23.575 515.362 22.375 515.167 20.905ZM518.842 18.685C519.952 18.685 520.717 17.875 520.717 16.615C520.717 15.37 519.922 14.56 518.842 14.56C517.732 14.56 516.937 15.37 516.937 16.615C516.937 17.89 517.702 18.685 518.842 18.685Z" fill="#646D78" />
                </svg>
                </div>
                <div className=' flex flex-col w-[524px] py-[5rem] mx-auto gap-[2rem]'>
                    <div className=" flex flex-col gap-2">
                        <div className="  font-circular font-medium text-[0.95rem]">
                            Phone Number
                        </div>
                        <div className="country-list  w-[100%] ">
                            <div
                                onClick={(e) => {
                                    setfocus(1);
                                    e.stopPropagation();
                                }}
                                className={clsx(
                                    "flex border-[1px] px-1.5 gap-3 py-[0.3rem] bg-[#FAFBFC]  w-[100%] rounded-xl   ",

                                    focus == 1 ? " border-[#205FFF]" : "border-[#EDEEF4]"
                                )}
                            >
                                <div
                                    className="flex gap-1 bg-[#fff] border-[1px] border-[#EDEEF4] cursor-pointer px-2 py-2 rounded-xl"
                                    onClick={(e) => {
                                        setShowOptions(!showOptions);
                                    }}
                                >
                                    <div className="flex items-center">
                                        <img
                                            src={`/flags/${selectedCountry.code.toLowerCase()}.svg`}
                                            className="h-[1rem] inline-block w-[1rem] rounded-xl object-cover"
                                            alt=""
                                        />
                                    </div>
                                    <div className=" flex justify-center gap-1 items-center">
                                        <div className="flex justify-center items-center w-full  font-circular font-medium h-max leading-0">
                                            {` +${selectedCountry.phone}`}
                                        </div>
                                        <div
                                            style={{ ease: [0.43, 0.13, 0.23, 0.96] }}
                                            className={clsx(
                                                showOptions ? "rotate-180" : "rotate-0",
                                                " transition-all   duration-500"
                                            )}
                                        >
                                            <Arrowdown color={"#292D32"} />
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex items-center">
                                    <input
                                        // ref={numberref}
                                        id="1"
                                        className=" select-none bg-transparent px-1 hover:cursor-pointer outline-none  duration-300 focus:outline-none border-none  text-[.9rem]   font-circular w-[250px]"
                                        placeholder="Enter your mobile number"
                                        type="tel"
                                        value={phone?.mobileNumber}
                                        onChange={handleMobileNumberChange} // Call the new handler for mobile number change
                                        // onKeyDown={handleInputKeyDown}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            <div className=" relative">
                                <motion.div
                                    onClick={(e) => e.stopPropagation()}
                                    initial={{
                                        height: 0,
                                    }}
                                    animate={{
                                        height: showOptions ? "270px" : 0,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.43, 0.13, 0.23, 0.96],
                                    }}
                                    id=""
                                    className={clsx(
                                        "country-options     hover:cursor-pointer  w-[100%] absolute z-[100]     bg-[#FFFFFF] rounded-xl my-2   overflow-hidden "
                                    )}
                                >
                                    <div className=" px-3 border-[1px] h-[100%] w-[100%] border-[#EDEEF4] rounded-xl">
                                        <div
                                            onClick={(e) => e.stopPropagation()}
                                            className="relative w-[100%] "
                                        >
                                            <div className="absolute left-4 top-[18px]">
                                                <Search />
                                            </div>
                                            <input
                                                className="border-[#E5E7EB] hover:cursor-pointer w-[100%] duration-300 bg-[#F9FAFB]  outline-none rounded-xl pl-10 py-2 my-2 border-[1px]"
                                                type="text"
                                                placeholder="Search country"
                                                value={searchTerm}
                                                onChange={(e) => {
                                                    setSearchTerm(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="max-h-[14rem] absolute  overflow-scroll"
                                            id="nested"
                                        >
                                            <div id="nested-content">
                                                {filteredCountries.map((country) => (
                                                    <div
                                                        className="  "
                                                        key={country.code}
                                                        onClick={() => {
                                                            setSelectedCountry(country);
                                                            setShowOptions(false);
                                                        }}
                                                    >
                                                        <div className="flex gap-3 py-3">
                                                            <div className="flex justify-center items-center col-start-1 row-span-2">
                                                                {" "}
                                                                <img
                                                                    src={`/flags/${country.code.toLowerCase()}.svg`}
                                                                    className="h-[2rem] inline-block w-[2rem] rounded-xl object-cover"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="flex items-center ">
                                                                    {" "}
                                                                    +{country.phone}
                                                                </div>
                                                                <div className="">{country.name}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <div className="  font-circular font-medium text-[0.95rem]">
                            Date Of Birth
                        </div>
                        <div>
                            <DatePicker deadline={dob} dedlinedate={dedlinedate} />
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <div className=" font-circular font-medium text-[0.95rem]">
                            Gender
                        </div>
                        <div
                            onClick={() => {
                                setShowOptions1(!showOptions1);
                            }}
                            className=" w-full h-max relative"
                        >
                            <input
                                readOnly
                                value={gender}
                                className=" outline-none  cursor-pointer focus:border-[#205FFF] bg-[#FAFBFC] w-[100%]   px-4 py-3.5 border-[#EDEEF4] border-[1px]  text-[.9rem]  font-circular  rounded-xl"
                                placeholder="Enter Gender"
                                type="text"
                            />
                            <div
                                style={{ ease: [0.43, 0.13, 0.23, 0.96] }}
                                className={clsx(
                                    showOptions1 ? "rotate-180" : "rotate-0",
                                    " transition-all absolute top-[50%] -translate-y-[50%]  right-3   duration-500"
                                )}
                            >
                                <Arrowdown color={"#292D32"} />
                            </div>

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
                                    "  overflow-hidden  rounded-xl  absolute w-full z-10 bg-white my-2 "
                                )}
                            >
                                <div
                                    id="nested-content1"
                                    className=" border-[1px] grid gap-1 border-[#EDEEF4] rounded-xl overflow-scroll"
                                >
                                    {genders?.map((value) => (
                                        <div
                                            onClick={() => {
                                                setGender(value);
                                                setShowOptions1(false);
                                            }}
                                            className="   hover:cursor-pointer px-3 text-[#000000]  py-3  duration-300 font-circular font-medium w-full hover:text-[#8f8f8f] hover:bg-[#EDEDED]       h-max   leading-none"
                                        >
                                            {value}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div
                        className=" text-[0.9rem] bg-[#205FFF] w-full   font-circular cursor-pointer justify-center mt-5 text-white   font-medium py-4 rounded-full flex gap-3 items-center min-h-[60px]"
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
    );
};
export default Personaldetails
