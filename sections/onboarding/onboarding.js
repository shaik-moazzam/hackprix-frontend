"use client"
import Logo from '@/public/icons/logo';
import Link from 'next/link';
import React, { useState } from 'react'
import People1 from "../../public/images/signup.png";
import Image from 'next/image';
import clsx from 'clsx';
import Arrowdown from '@/public/icons/arrowdown';
import { motion } from 'framer-motion';
import { toast, useToast } from '@/components/ui/use-toast';
const Onboarding = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [showOptions1, setShowOptions1] = useState(false);
    const [showOptions2, setShowOptions2] = useState(false);
    const [showOptions3, setShowOptions3] = useState(false);
    const [showOptions4, setShowOptions4] = useState(false);
    const { toast } = useToast()
    const [loading, setloading] = useState(false);
    const [pageLoad, setPageLoad] = useState(false);
    const [drinkingHabits, setDrinkingHabits] = useState();
    const [exercise, setExercise] = useState();
    const [eatingSchedule, setEatingSchedule] = useState();
    const [dietPreference, setDietPreference] = useState();
    const [smokingHabits, setSmokingHabits] = useState();
    const smokingHabitsOptions = ["Non-Smoker", "Occasional Smoker", "Regular Smoker"];

    const drinkingHabitsOptions = ["None", "Occasional", "Regular"];
    const exerciseOptions = ["None", "Occasional", "Regular"];
    const eatingScheduleOptions = ["3 meals a day", "2 meals a day", "Intermittent Fasting"];
    const dietPreferenceOptions = ["Vegan", "Vegetarian", "Non-Vegetarian"];
    if (pageLoad) {
        return (
            <div className="h-[100vh] flex justify-center items-center">
                <div className="loader-line" />
            </div>
        );
    }
    const submit = () => {
        setloading(true)
        if (!drinkingHabits) {
            toast({
                title: "Please choose drinking habits"
            });
        } else if (!exercise) {
            toast({
                title: "Please choose exercise level"
            });
        } else if (!eatingSchedule) {
            toast({
                title: "Please choose eating schedule"
            });
        } else if (!dietPreference) {
            toast({
                title: "Please choose diet preference"
            });
        } else if (!smokingHabits) {
            toast({
                title: "Please choose smoking habits"
            });
        } else {
            console.log({
                drinkingHabits,
                exercise,
                eatingSchedule,
                dietPreference,
                smokingHabits
            });
            toast({
                title: "Preferences submitted successfully!"
            });
        }
        setloading(false)
    }
    return (
        <div className=" grid grid-cols-1 justify-center lg:grid-cols-5  relative  min-h-[100vh] md:max-h-[100vh]  gap-[3rem] overflow-hidden">

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
            <div className=' col-span-3  flex flex-col   justify-center'>
                <div className=' flex pb-[3rem] justify-center'><svg width="644" height="30" viewBox="0 0 644 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" rx="15" fill="black" />
                    <path d="M14.82 21V12.21C14.17 12.81 13.34 13.2 12.33 13.38V12.165C13.41 11.935 14.31 11.38 15.03 10.5H16.11V21H14.82Z" fill="white" />
                    <path d="M53.265 12.355L51.645 12.865C51.54 12.205 50.985 11.23 49.56 11.23C48.48 11.23 47.73 11.95 47.73 12.76C47.73 13.435 48.15 13.945 48.975 14.125L50.505 14.44C52.38 14.815 53.385 16 53.385 17.5C53.385 19.15 52.05 20.725 49.62 20.725C46.92 20.725 45.675 18.985 45.51 17.455L47.19 16.975C47.295 18.085 48.09 19.105 49.62 19.105C50.895 19.105 51.555 18.46 51.555 17.635C51.555 16.945 51.045 16.39 50.13 16.195L48.63 15.88C47.01 15.55 45.93 14.485 45.93 12.895C45.93 11.11 47.565 9.64 49.545 9.64C52.05 9.64 53.025 11.17 53.265 12.355ZM55.8855 20.5H54.1605V13.195H55.8855V20.5ZM53.8905 10.63C53.8905 10 54.4005 9.49 55.0155 9.49C55.6455 9.49 56.1555 10 56.1555 10.63C56.1555 11.26 55.6455 11.755 55.0155 11.755C54.4005 11.755 53.8905 11.26 53.8905 10.63ZM56.7053 20.905L58.3103 20.485C58.4303 21.385 59.1353 22.06 60.1403 22.06C61.5203 22.06 62.2103 21.355 62.2103 19.87V19.105C61.8953 19.675 61.1603 20.17 60.0953 20.17C58.1453 20.17 56.7203 18.67 56.7203 16.615C56.7203 14.665 58.0853 13.06 60.0953 13.06C61.2353 13.06 61.9403 13.525 62.2553 14.125V13.195H63.9353V19.81C63.9353 21.76 62.9303 23.575 60.1853 23.575C58.2503 23.575 56.9003 22.375 56.7053 20.905ZM60.3803 18.685C61.4903 18.685 62.2553 17.875 62.2553 16.615C62.2553 15.37 61.4603 14.56 60.3803 14.56C59.2703 14.56 58.4753 15.37 58.4753 16.615C58.4753 17.89 59.2403 18.685 60.3803 18.685ZM66.9033 16.285V20.5H65.1633V13.195H66.8583V14.17C67.3383 13.33 68.2083 12.985 69.0183 12.985C70.8033 12.985 71.6583 14.275 71.6583 15.88V20.5H69.9183V16.18C69.9183 15.28 69.5133 14.56 68.4183 14.56C67.4283 14.56 66.9033 15.325 66.9033 16.285ZM80.4523 19.69C80.0923 20.35 79.2373 20.71 78.3823 20.71C76.6423 20.71 75.6223 19.42 75.6223 17.8V13.195H77.3623V17.485C77.3623 18.385 77.7823 19.15 78.8323 19.15C79.8373 19.15 80.3623 18.475 80.3623 17.515V13.195H82.1023V19.165C82.1023 19.765 82.1473 20.23 82.1773 20.5H80.5123C80.4823 20.335 80.4523 19.99 80.4523 19.69ZM85.1795 23.35H83.4545V13.195H85.1345V14.185C85.4945 13.555 86.3345 13.03 87.4595 13.03C89.6195 13.03 90.8345 14.68 90.8345 16.84C90.8345 19.03 89.4995 20.68 87.3995 20.68C86.3495 20.68 85.5545 20.23 85.1795 19.675V23.35ZM89.0945 16.84C89.0945 15.475 88.2995 14.575 87.1295 14.575C85.9895 14.575 85.1645 15.475 85.1645 16.84C85.1645 18.235 85.9895 19.135 87.1295 19.135C88.2845 19.135 89.0945 18.235 89.0945 16.84Z" fill="black" />
                    <path d="M161.91 22.92L168.43 16.4C169.2 15.63 169.2 14.37 168.43 13.6L161.91 7.08" stroke="#646D78" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <rect x="238" width="30" height="30" rx="15" fill="black" />
                    <path d="M248.95 21L248.935 19.815L252.88 16.41C254.05 15.4 254.635 14.44 254.635 13.53C254.635 12.94 254.45 12.47 254.08 12.12C253.72 11.77 253.235 11.595 252.625 11.595C251.895 11.595 251.335 11.835 250.945 12.315C250.555 12.785 250.4 13.41 250.48 14.19L249.16 14.1C249.08 13 249.36 12.105 250 11.415C250.65 10.725 251.525 10.38 252.625 10.38C253.655 10.38 254.48 10.67 255.1 11.25C255.73 11.82 256.045 12.58 256.045 13.53C256.045 14.17 255.86 14.795 255.49 15.405C255.12 16.015 254.53 16.66 253.72 17.34L250.87 19.77H256.045V21H248.95Z" fill="white" />
                    <path d="M286.075 14.755H287.95C289.09 14.755 289.78 14.125 289.78 13.12C289.78 12.1 289.09 11.455 287.95 11.455H286.075V14.755ZM288.22 16.345H286.075V20.5H284.275V9.865H288.22C290.26 9.865 291.61 11.245 291.61 13.105C291.61 14.98 290.26 16.345 288.22 16.345ZM292.936 16.045H296.521C296.491 15.19 295.921 14.425 294.721 14.425C293.626 14.425 292.996 15.265 292.936 16.045ZM296.716 17.95L298.186 18.415C297.796 19.69 296.641 20.725 294.886 20.725C292.906 20.725 291.151 19.285 291.151 16.81C291.151 14.5 292.861 12.97 294.706 12.97C296.956 12.97 298.276 14.455 298.276 16.765C298.276 17.05 298.246 17.29 298.231 17.32H292.891C292.936 18.43 293.806 19.225 294.886 19.225C295.936 19.225 296.476 18.67 296.716 17.95ZM303.314 13.15V14.92C303.119 14.89 302.924 14.875 302.744 14.875C301.394 14.875 300.779 15.655 300.779 17.02V20.5H299.039V13.195H300.734V14.365C301.079 13.57 301.889 13.105 302.849 13.105C303.059 13.105 303.239 13.135 303.314 13.15ZM303.236 18.52L304.751 18.1C304.811 18.76 305.306 19.345 306.236 19.345C306.956 19.345 307.331 18.955 307.331 18.505C307.331 18.115 307.061 17.815 306.476 17.695L305.396 17.455C304.106 17.17 303.431 16.33 303.431 15.325C303.431 14.05 304.601 12.97 306.116 12.97C308.156 12.97 308.816 14.29 308.936 15.01L307.466 15.43C307.406 15.01 307.091 14.335 306.116 14.335C305.501 14.335 305.066 14.725 305.066 15.175C305.066 15.565 305.351 15.85 305.801 15.94L306.911 16.165C308.291 16.465 309.011 17.305 309.011 18.385C309.011 19.495 308.111 20.725 306.251 20.725C304.136 20.725 303.326 19.345 303.236 18.52ZM313.003 19.165C314.083 19.165 315.043 18.37 315.043 16.84C315.043 15.325 314.083 14.545 313.003 14.545C311.938 14.545 310.963 15.325 310.963 16.84C310.963 18.355 311.938 19.165 313.003 19.165ZM313.003 12.97C315.193 12.97 316.798 14.605 316.798 16.84C316.798 19.09 315.193 20.725 313.003 20.725C310.828 20.725 309.223 19.09 309.223 16.84C309.223 14.605 310.828 12.97 313.003 12.97ZM319.319 16.285V20.5H317.579V13.195H319.274V14.17C319.754 13.33 320.624 12.985 321.434 12.985C323.219 12.985 324.074 14.275 324.074 15.88V20.5H322.334V16.18C322.334 15.28 321.929 14.56 320.834 14.56C319.844 14.56 319.319 15.325 319.319 16.285ZM324.842 18.52C324.842 17.215 325.802 16.495 327.047 16.315L328.922 16.03C329.342 15.97 329.462 15.76 329.462 15.505C329.462 14.89 329.042 14.395 328.082 14.395C327.167 14.395 326.657 14.98 326.582 15.715L324.992 15.355C325.127 14.095 326.267 12.97 328.067 12.97C330.317 12.97 331.172 14.245 331.172 15.7V19.33C331.172 19.99 331.247 20.425 331.262 20.5H329.642C329.627 20.455 329.567 20.155 329.567 19.57C329.222 20.125 328.502 20.725 327.317 20.725C325.787 20.725 324.842 19.675 324.842 18.52ZM327.647 19.36C328.622 19.36 329.462 18.895 329.462 17.47V17.14L327.557 17.425C327.017 17.515 326.582 17.815 326.582 18.415C326.582 18.91 326.957 19.36 327.647 19.36ZM334.116 20.5H332.376V9.64H334.116V20.5ZM339.451 16.825C339.451 18.22 340.231 19.15 341.416 19.15C342.556 19.15 343.351 18.205 343.351 16.81C343.351 15.415 342.571 14.545 341.431 14.545C340.291 14.545 339.451 15.43 339.451 16.825ZM345.031 9.64V19.165C345.031 19.825 345.091 20.38 345.106 20.5H343.441C343.411 20.335 343.366 19.855 343.366 19.555C343.021 20.17 342.256 20.68 341.221 20.68C339.121 20.68 337.711 19.03 337.711 16.825C337.711 14.725 339.136 13 341.191 13C342.466 13 343.111 13.585 343.336 14.05V9.64H345.031ZM347.619 16.045H351.204C351.174 15.19 350.604 14.425 349.404 14.425C348.309 14.425 347.679 15.265 347.619 16.045ZM351.399 17.95L352.869 18.415C352.479 19.69 351.324 20.725 349.569 20.725C347.589 20.725 345.834 19.285 345.834 16.81C345.834 14.5 347.544 12.97 349.389 12.97C351.639 12.97 352.959 14.455 352.959 16.765C352.959 17.05 352.929 17.29 352.914 17.32H347.574C347.619 18.43 348.489 19.225 349.569 19.225C350.619 19.225 351.159 18.67 351.399 17.95ZM355.927 10.96V13.195H357.442V14.74H355.927V18.13C355.927 18.775 356.212 19.045 356.857 19.045C357.097 19.045 357.382 19 357.457 18.985V20.425C357.352 20.47 357.022 20.59 356.392 20.59C355.042 20.59 354.202 19.78 354.202 18.415V14.74H352.852V13.195H353.227C354.007 13.195 354.352 12.7 354.352 12.055V10.96H355.927ZM357.895 18.52C357.895 17.215 358.855 16.495 360.1 16.315L361.975 16.03C362.395 15.97 362.515 15.76 362.515 15.505C362.515 14.89 362.095 14.395 361.135 14.395C360.22 14.395 359.71 14.98 359.635 15.715L358.045 15.355C358.18 14.095 359.32 12.97 361.12 12.97C363.37 12.97 364.225 14.245 364.225 15.7V19.33C364.225 19.99 364.3 20.425 364.315 20.5H362.695C362.68 20.455 362.62 20.155 362.62 19.57C362.275 20.125 361.555 20.725 360.37 20.725C358.84 20.725 357.895 19.675 357.895 18.52ZM360.7 19.36C361.675 19.36 362.515 18.895 362.515 17.47V17.14L360.61 17.425C360.07 17.515 359.635 17.815 359.635 18.415C359.635 18.91 360.01 19.36 360.7 19.36ZM367.153 20.5H365.428V13.195H367.153V20.5ZM365.158 10.63C365.158 10 365.668 9.49 366.283 9.49C366.913 9.49 367.423 10 367.423 10.63C367.423 11.26 366.913 11.755 366.283 11.755C365.668 11.755 365.158 11.26 365.158 10.63ZM370.238 20.5H368.498V9.64H370.238V20.5ZM370.937 18.52L372.452 18.1C372.512 18.76 373.007 19.345 373.937 19.345C374.657 19.345 375.032 18.955 375.032 18.505C375.032 18.115 374.762 17.815 374.177 17.695L373.097 17.455C371.807 17.17 371.132 16.33 371.132 15.325C371.132 14.05 372.302 12.97 373.817 12.97C375.857 12.97 376.517 14.29 376.637 15.01L375.167 15.43C375.107 15.01 374.792 14.335 373.817 14.335C373.202 14.335 372.767 14.725 372.767 15.175C372.767 15.565 373.052 15.85 373.502 15.94L374.612 16.165C375.992 16.465 376.712 17.305 376.712 18.385C376.712 19.495 375.812 20.725 373.952 20.725C371.837 20.725 371.027 19.345 370.937 18.52Z" fill="black" />
                    <path d="M447.91 22.92L454.43 16.4C455.2 15.63 455.2 14.37 454.43 13.6L447.91 7.08" stroke="#646D78" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <rect x="524" width="30" height="30" rx="15" fill="black" />
                    <path d="M538.625 21.12C537.595 21.12 536.735 20.845 536.045 20.295C535.365 19.745 534.975 19.01 534.875 18.09L536.165 17.895C536.235 18.505 536.495 18.99 536.945 19.35C537.395 19.71 537.955 19.89 538.625 19.89C539.355 19.89 539.935 19.69 540.365 19.29C540.805 18.89 541.025 18.36 541.025 17.7C541.025 17.02 540.82 16.49 540.41 16.11C540 15.73 539.43 15.54 538.7 15.54C538.28 15.54 537.895 15.65 537.545 15.87L536.96 15L540.275 11.715H535.175V10.5H541.88V11.685L538.895 14.595C539.935 14.495 540.785 14.735 541.445 15.315C542.105 15.895 542.435 16.7 542.435 17.73C542.435 18.75 542.085 19.57 541.385 20.19C540.695 20.81 539.775 21.12 538.625 21.12Z" fill="white" />
                    <path d="M571.475 15.175C571.475 17.74 573.245 19.015 575.03 19.015C576.83 19.015 578.6 17.74 578.6 15.175C578.6 12.61 576.83 11.335 575.03 11.335C573.245 11.335 571.475 12.61 571.475 15.175ZM569.63 15.175C569.63 11.695 572.24 9.64 575.03 9.64C577.82 9.64 580.445 11.695 580.445 15.175C580.445 18.67 577.82 20.725 575.03 20.725C572.24 20.725 569.63 18.67 569.63 15.175ZM583.035 16.285V20.5H581.295V13.195H582.99V14.17C583.47 13.33 584.34 12.985 585.15 12.985C586.935 12.985 587.79 14.275 587.79 15.88V20.5H586.05V16.18C586.05 15.28 585.645 14.56 584.55 14.56C583.56 14.56 583.035 15.325 583.035 16.285ZM590.704 20.5H589.009V9.64H590.719V14.095C591.049 13.525 591.889 13 593.014 13C595.204 13 596.389 14.665 596.389 16.81C596.389 19.015 595.084 20.68 592.954 20.68C591.919 20.68 591.124 20.23 590.704 19.525V20.5ZM594.634 16.825C594.634 15.37 593.824 14.545 592.669 14.545C591.559 14.545 590.704 15.37 590.704 16.825C590.704 18.265 591.559 19.135 592.669 19.135C593.809 19.135 594.634 18.265 594.634 16.825ZM600.371 19.165C601.451 19.165 602.411 18.37 602.411 16.84C602.411 15.325 601.451 14.545 600.371 14.545C599.306 14.545 598.331 15.325 598.331 16.84C598.331 18.355 599.306 19.165 600.371 19.165ZM600.371 12.97C602.561 12.97 604.166 14.605 604.166 16.84C604.166 19.09 602.561 20.725 600.371 20.725C598.196 20.725 596.591 19.09 596.591 16.84C596.591 14.605 598.196 12.97 600.371 12.97ZM604.498 18.52C604.498 17.215 605.458 16.495 606.703 16.315L608.578 16.03C608.998 15.97 609.118 15.76 609.118 15.505C609.118 14.89 608.698 14.395 607.738 14.395C606.823 14.395 606.313 14.98 606.238 15.715L604.648 15.355C604.783 14.095 605.923 12.97 607.723 12.97C609.973 12.97 610.828 14.245 610.828 15.7V19.33C610.828 19.99 610.903 20.425 610.918 20.5H609.298C609.283 20.455 609.223 20.155 609.223 19.57C608.878 20.125 608.158 20.725 606.973 20.725C605.443 20.725 604.498 19.675 604.498 18.52ZM607.303 19.36C608.278 19.36 609.118 18.895 609.118 17.47V17.14L607.213 17.425C606.673 17.515 606.238 17.815 606.238 18.415C606.238 18.91 606.613 19.36 607.303 19.36ZM616.306 13.15V14.92C616.111 14.89 615.916 14.875 615.736 14.875C614.386 14.875 613.771 15.655 613.771 17.02V20.5H612.031V13.195H613.726V14.365C614.071 13.57 614.881 13.105 615.841 13.105C616.051 13.105 616.231 13.135 616.306 13.15ZM617.956 16.825C617.956 18.22 618.736 19.15 619.921 19.15C621.061 19.15 621.856 18.205 621.856 16.81C621.856 15.415 621.076 14.545 619.936 14.545C618.796 14.545 617.956 15.43 617.956 16.825ZM623.536 9.64V19.165C623.536 19.825 623.596 20.38 623.611 20.5H621.946C621.916 20.335 621.871 19.855 621.871 19.555C621.526 20.17 620.761 20.68 619.726 20.68C617.626 20.68 616.216 19.03 616.216 16.825C616.216 14.725 617.641 13 619.696 13C620.971 13 621.616 13.585 621.841 14.05V9.64H623.536ZM626.634 20.5H624.909V13.195H626.634V20.5ZM624.639 10.63C624.639 10 625.149 9.49 625.764 9.49C626.394 9.49 626.904 10 626.904 10.63C626.904 11.26 626.394 11.755 625.764 11.755C625.149 11.755 624.639 11.26 624.639 10.63ZM629.719 16.285V20.5H627.979V13.195H629.674V14.17C630.154 13.33 631.024 12.985 631.834 12.985C633.619 12.985 634.474 14.275 634.474 15.88V20.5H632.734V16.18C632.734 15.28 632.329 14.56 631.234 14.56C630.244 14.56 629.719 15.325 629.719 16.285ZM635.167 20.905L636.772 20.485C636.892 21.385 637.597 22.06 638.602 22.06C639.982 22.06 640.672 21.355 640.672 19.87V19.105C640.357 19.675 639.622 20.17 638.557 20.17C636.607 20.17 635.182 18.67 635.182 16.615C635.182 14.665 636.547 13.06 638.557 13.06C639.697 13.06 640.402 13.525 640.717 14.125V13.195H642.397V19.81C642.397 21.76 641.392 23.575 638.647 23.575C636.712 23.575 635.362 22.375 635.167 20.905ZM638.842 18.685C639.952 18.685 640.717 17.875 640.717 16.615C640.717 15.37 639.922 14.56 638.842 14.56C637.732 14.56 636.937 15.37 636.937 16.615C636.937 17.89 637.702 18.685 638.842 18.685Z" fill="#646D78" />
                </svg>

                </div>
                <div className=' w-[644px] grid gap-[2rem]  grid-cols-2 py-[5rem]  mx-auto'>
                    <div className=" flex flex-col gap-2">
                        <div className="  font-circular font-medium tracking-wide text-[0.85rem]">
                            Drinking Habits
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
                                value={drinkingHabits}
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
                                    "  overflow-hidden rounded-xl  z-20 absolute w-full  bg-white my-2 "
                                )}
                            >
                                <div
                                    id="nested-content1"
                                    className=" border-[1px] grid gap-1 border-[#EDEEF4] rounded-xl overflow-scroll"
                                >
                                    {drinkingHabitsOptions?.map((value) => (
                                        <div
                                            onClick={() => {
                                                setDrinkingHabits(value);
                                                setShowOptions(false);
                                            }}
                                            className="   hover:cursor-pointer px-3 text-[#000000]  py-3 duration-300  font-circular font-medium tracking-wide w-full h85er:text-[#8f8f8f] hover:bg-[#EDEDED]       h-max   leading-none"
                                        >
                                            {value}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <div className="  font-circular font-medium tracking-wide text-[0.85rem]">
                            Exercise
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
                                value={exercise}
                                className=" outline-none cursor-pointer focus:border-[#205FFF] bg-[#FAFBFC] w-[100%]   px-4 py-3.5 border-[#EDEEF4] border-[1px]  text-[.9rem]   font-circular  rounded-lg"
                                placeholder="Select Exercise Level"
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
                                    "  overflow-hidden rounded-xl  z-20  absolute w-full  bg-white my-2 "
                                )}
                            >
                                <div
                                    id="nested-content1"
                                    className=" border-[1px] grid gap-1 border-[#EDEEF4] rounded-xl overflow-scroll"
                                >
                                    {exerciseOptions?.map((value) => (
                                        <div
                                            onClick={() => {
                                                setExercise(value);
                                                setShowOptions1(false);
                                            }}
                                            className="   hover:cursor-pointer px-3 text-[#000000]  py-3 duration-300  font-circular font-medium tracking-wide w-full h85er:text-[#8f8f8f] hover:bg-[#EDEDED]       h-max   leading-none"
                                        >
                                            {value}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <div className="  font-circular font-medium tracking-wide text-[0.85rem]">
                            Eating Schedule                        </div>
                        <div onClick={() => { setShowOptions2(!showOptions2) }} className=" w-full relative">
                            <div
                                style={{ ease: [0.43, 0.13, 0.23, 0.96] }}
                                className={clsx(
                                    showOptions2 ? "rotate-180" : "rotate-0",
                                    " transition-all absolute top-[50%] -translate-y-[50%]  right-3   duration-500"
                                )}
                            >
                                <Arrowdown color={"#292D32"} />
                            </div>

                            <input

                                readOnly
                                value={eatingSchedule}
                                className=" outline-none cursor-pointer focus:border-[#205FFF] bg-[#FAFBFC] w-[100%]   px-4 py-3.5 border-[#EDEEF4] border-[1px]  text-[.9rem]   font-circular  rounded-lg"
                                placeholder="Select Your Eating Shedule"
                                type="text"
                            />
                            <motion.div
                                initial={{
                                    height: 0,
                                }}
                                animate={{
                                    height: showOptions2 ? "auto" : 0,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: [0.43, 0.13, 0.23, 0.96],
                                }}
                                id=""
                                className={clsx(
                                    "  overflow-hidden rounded-xl z-20  absolute w-full  bg-white my-2 "
                                )}
                            >
                                <div
                                    id="nested-content1"
                                    className=" border-[1px] grid gap-1 border-[#EDEEF4] rounded-xl overflow-scroll"
                                >
                                    {eatingScheduleOptions?.map((value) => (
                                        <div
                                            onClick={() => {
                                                setEatingSchedule(value);
                                                setShowOptions2(false);
                                            }}
                                            className="   hover:cursor-pointer px-3 text-[#000000]  py-3 duration-300  font-circular font-medium tracking-wide w-full h85er:text-[#8f8f8f] hover:bg-[#EDEDED]       h-max   leading-none"
                                        >
                                            {value}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <div className="  font-circular font-medium tracking-wide text-[0.85rem]">
                            Diet Preference
                        </div>
                        <div onClick={() => { setShowOptions3(!showOptions3) }} className=" w-full relative">
                            <div
                                style={{ ease: [0.43, 0.13, 0.23, 0.96] }}
                                className={clsx(
                                    showOptions3 ? "rotate-180" : "rotate-0",
                                    " transition-all absolute top-[50%] -translate-y-[50%]  right-3   duration-500"
                                )}
                            >
                                <Arrowdown color={"#292D32"} />
                            </div>

                            <input

                                readOnly
                                value={dietPreference}
                                className=" outline-none cursor-pointer focus:border-[#205FFF] bg-[#FAFBFC] w-[100%]   px-4 py-3.5 border-[#EDEEF4] border-[1px]  text-[.9rem]   font-circular  rounded-lg"
                                placeholder="Select Your Diet"
                                type="text"
                            />
                            <motion.div
                                initial={{
                                    height: 0,
                                }}
                                animate={{
                                    height: showOptions3 ? "auto" : 0,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: [0.43, 0.13, 0.23, 0.96],
                                }}
                                id=""
                                className={clsx(
                                    "  overflow-hidden z-20  rounded-xl  absolute w-full  bg-white my-2 "
                                )}
                            >
                                <div
                                    id="nested-content1"
                                    className=" border-[1px] grid gap-1 border-[#EDEEF4] rounded-xl overflow-scroll"
                                >
                                    {dietPreferenceOptions?.map((value) => (
                                        <div
                                            onClick={() => {
                                                setDietPreference(value);
                                                setShowOptions3(false);
                                            }}
                                            className="   hover:cursor-pointer px-3 text-[#000000]  py-3 duration-300  font-circular font-medium tracking-wide w-full h85er:text-[#8f8f8f] hover:bg-[#EDEDED]       h-max   leading-none"
                                        >
                                            {value}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <div className="  font-circular font-medium tracking-wide text-[0.85rem]">
                            Smoking Habit
                        </div>
                        <div onClick={() => { setShowOptions4(!showOptions4) }} className=" w-full relative">
                            <div
                                style={{ ease: [0.43, 0.13, 0.23, 0.96] }}
                                className={clsx(
                                    showOptions4 ? "rotate-180" : "rotate-0",
                                    " transition-all absolute top-[50%] -translate-y-[50%]  right-3   duration-500"
                                )}
                            >
                                <Arrowdown color={"#292D32"} />
                            </div>

                            <input

                                readOnly
                                value={smokingHabits}
                                className=" outline-none cursor-pointer focus:border-[#205FFF] bg-[#FAFBFC] w-[100%]   px-4 py-3.5 border-[#EDEEF4] border-[1px]  text-[.9rem]   font-circular  rounded-lg"
                                placeholder="Select Your Smoking habit"
                                type="text"
                            />
                            <motion.div
                                initial={{
                                    height: 0,
                                }}
                                animate={{
                                    height: showOptions4 ? "auto" : 0,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: [0.43, 0.13, 0.23, 0.96],
                                }}
                                id=""
                                className={clsx(
                                    "  overflow-hidden z-20 rounded-xl  absolute w-full  bg-white my-2 "
                                )}
                            >
                                <div
                                    id="nested-content1"
                                    className=" border-[1px] grid gap-1 border-[#EDEEF4] rounded-xl overflow-scroll"
                                >
                                    {smokingHabitsOptions?.map((value) => (
                                        <div
                                            onClick={() => {
                                                setSmokingHabits(value);
                                                setShowOptions4(false);
                                            }}
                                            className="   hover:cursor-pointer px-3 text-[#000000]  py-3 duration-300  font-circular font-medium tracking-wide w-full h85er:text-[#8f8f8f] hover:bg-[#EDEDED]       h-max   leading-none"
                                        >
                                            {value}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div
                        className=" text-[0.9rem] col-span-2 bg-[#205FFF] w-full  font-circular cursor-pointer justify-center mt-5 text-white   font-medium py-4 rounded-full flex gap-3 items-center min-h-[60px]"
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
    )
}

export default Onboarding
