"use client"
import Padding from '@/components/padding'
import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx';
import Button from '@/components/button';
import getDoctorSchedule from '@/api/getDoctorSchedule';
import { useSearchParams } from 'next/navigation';
import bookSlot from '@/api/bookSlot';
import { toast } from '@/components/ui/use-toast';
import { useUser } from '@/redux/userContext';

const Doctorschedule = () => {
    const { state } = useUser();
    const user = state.user;
    const param = useSearchParams();
    const id = param.get("id")
    const scrollContainerRef = useRef();
    const picRef = useRef(null);
    const map = [];
    const [pageLoad, setPageLoad] = useState(true);
    const [bookload, setbookload] = useState(false);

    const handleScroll = () => {
        if (!scrollContainerRef.current || !picRef.current) {
            return;
        }

        const container = scrollContainerRef.current;
        const scrollLeft = container.scrollLeft;

        // Update the horizontal scroll position of picRef based on containerRef's scroll
        picRef.current.scrollLeft = scrollLeft;
    };

    const [hoursArray, sethoursArray] = useState();
    const [daysArray, setdaysArray] = useState();
    const [data1, setdata1] = useState();

    function getDayFromDate(dateString) {
        // Split the date string into year, day, and month components
        const [year, day, month] = dateString.split('-');

        // Create a new Date object with the parsed components
        const date = new Date(`${month}/${day}/${year}`);

        // Get the day of the week from the Date object
        const dayOfWeek = date.toLocaleDateString('en', { weekday: 'long' });

        return dayOfWeek;
    }

    // Example usage:
    const date = "2024-06-10";
    const dayOfWeek = getDayFromDate(date);
    console.log(dayOfWeek); // Output: Saturday

    function generateMonthSchedule(weeklySchedule, busySlots) {
        const today = new Date();
        const endOfNextMonth = new Date(today);
        endOfNextMonth.setMonth(today.getMonth() + 1);
        endOfNextMonth.setDate(today.getDate());

        const monthSchedule = [];
        const allDates = [];

        // Function to format the date to year/day/month
        function formatDate(date) {
            const year = date.getFullYear();
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            return `${year}-${day}-${month}`;
        }

        // Function to format time to 24-hour format
        function formatTime(date) {
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            return `${hours}:${minutes}`;
        }

        // Iterate over days from today to the same date next month
        for (let date = new Date(today); date <= endOfNextMonth; date.setDate(date.getDate() + 1)) {
            const formattedDate = formatDate(date);
            allDates.push(formattedDate);

            const dayOfWeek = date.toLocaleString('en', { weekday: 'long' });
            const daySchedule = weeklySchedule.find(schedule => schedule.day === dayOfWeek);

            if (daySchedule) {
                daySchedule.slots.forEach(slot => {
                    const startTime = slot.start_time.split(':');
                    const startTimeHour = parseInt(startTime[0]);
                    const startTimeMinute = parseInt(startTime[1]);
                    const scheduleDate = new Date(date);
                    scheduleDate.setHours(startTimeHour);
                    scheduleDate.setMinutes(startTimeMinute);

                    const formattedTime = formatTime(scheduleDate);

                    const scheduleItem = {
                        date: formattedDate,
                        time: formattedTime,
                        startTime: slot.start_time,
                        busy: false,
                        slotId: slot._id
                    };

                    const busySlot = busySlots.find(busySlot => busySlot.date === formattedDate && busySlot.slot.start_time === scheduleItem.startTime);
                    if (busySlot) {
                        scheduleItem.busy = true;
                        scheduleItem.patient = busySlot.slot.patient; // Assuming patient ID is present in busy slot data
                    }

                    monthSchedule.push(scheduleItem);
                });
            }
        }

        return { monthSchedule, allDates };
    }


    function timeRangearray(start, end) {
        console.log(start, end)
        // Parse start and end times
        const startTime = new Date(`2000-01-01T${start}:00`);
        const endTime = new Date(`2000-01-01T${end}:00`);

        // Calculate one hour before start time
        const beforeStartTime = new Date(startTime.getTime());
        beforeStartTime.setHours(beforeStartTime.getHours() - 2);

        // Calculate one hour after end time
        const afterEndTime = new Date(endTime.getTime());
        afterEndTime.setHours(afterEndTime.getHours() + 2);

        const timeIncrements = [];

        // Increment current time until it reaches after end time
        let currentTime = new Date(beforeStartTime.getTime());
        while (currentTime <= afterEndTime) {
            // Format the current time
            const formattedTime = currentTime.toLocaleTimeString("en-US", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
            });
            // Add formatted time to the array
            timeIncrements.push(formattedTime);
            // Increment current time by 1 hour
            currentTime.setHours(currentTime.getHours() + 1);
        }

        return timeIncrements;
    }

    useEffect(() => {
        const dt = async () => {
            setPageLoad(true);
            try {
                const da = await getDoctorSchedule(id);
                const { monthSchedule, allDates } = generateMonthSchedule(da.schedule, da.busySlots);
                console.log(monthSchedule, allDates)
                setdata1(monthSchedule);
                setdaysArray(allDates)
                let smallestStartTime = monthSchedule[0].startTime;
                let largestStartTime = monthSchedule[0].startTime;

                // Iterate through the array
                monthSchedule.forEach((slot) => {
                    // Check if the current start time is smaller than the smallest start time
                    if (slot.startTime < smallestStartTime) {
                        smallestStartTime = slot.startTime;
                    }

                    // Check if the current start time is larger than the largest start time
                    if (slot.startTime > largestStartTime) {
                        largestStartTime = slot.startTime;
                    }
                });
                const hh = timeRangearray(
                    (smallestStartTime),
                    (largestStartTime)
                );
                console.log(hh, "bweducbuwebuc")
                sethoursArray(hh);
            } catch (error) {
                console.error("Error fetching student schedule:", error);
            } finally {
                setPageLoad(false);
            }
        };
        dt();

    }, [id]);




    const generateEmptyCombinations = () => {
        const emptyCombinations = [];

        for (let col = 1; col <= daysArray?.length; col++) {
            for (let row = 1; row <= hoursArray?.length; row++) {
                const exists = map.some((item) => item.col === col && item.row === row);
                if (!exists) {
                    emptyCombinations.push(
                        <div
                            key={`empty-${col}-${row}`}
                            style={{
                                gridColumnStart: col,
                                gridRowStart: row,
                            }}
                            className="border-[0.25px]  border-[#e8e8e8]"
                        ></div>
                    );
                }
            }
        }

        return emptyCombinations;
    };

    const getcolstart = (data) => {
        const col = daysArray.indexOf(data.date) + 1;
        const h = hoursArray;

        const row = h?.indexOf((data.startTime)) + 1;

        // Push both column and row values into the map array
        map.push({ col, row });
        return daysArray.indexOf(data.date) + 1;
    };
    const getrowstart = (time) => {
        return hoursArray?.indexOf(time) + 1;
    };

    const slotBooked = async (scheduleData) => {
        setbookload(true)
        const data = await bookSlot(scheduleData.slotId, scheduleData.date);
        console.log(data, "read");
        if (data.error) {
            toast({ title: "Something went wrong " });
        }
        else {
            toast({ title: "Slot have been booked " });
            window.location.reload();
        }
        setbookload(false)
    }


    if (pageLoad) {
        return (
            <div className='min-h-[100vh] bg-white flex justify-center items-center'>
                <div className='loader-line' />
            </div>
        )
    }

    return (

        <div className={pageLoad ? " hidden" : ""}>
            <Padding>
                <div className=' border-[#E2E4E8] relative  border-[1px]  bg-white rounded-3xl'>

                    <div className=' text-[#2F3133] font-circular p-[1.5rem] font-medium text-[1.3rem]'>Select an available time slot</div>
                    <div
                        ref={picRef}
                        className=" sticky max-w-full min-w-full overflow-scroll z-30 "
                    >
                        <div className="   ">
                            <div className=" flex bg-[#F9FBFC] border-b-[0.25px]  border-r-[0.25px] border-[#e8e8e8] w-max overflow-scroll">
                                <div className=" bg-[#F9FBFC]  border-r-[0.25px]  border-b-[0.25px] border-[#e8e8e8] ">
                                    <svg width="66" height="67" viewBox="0 0 66 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="65" y="1" width="66" height="65" transform="rotate(90 65 1)" fill="#F9FBFC" />
                                        <path d="M7.262 59.0625V50.6905H4.238V49.2625H11.924V50.6905H8.9V59.0625H7.262ZM13.8688 50.8305C13.3088 50.8305 12.8888 50.3965 12.8888 49.8505C12.8888 49.2905 13.3088 48.8565 13.8688 48.8565C14.4428 48.8565 14.8768 49.2905 14.8768 49.8505C14.8768 50.3965 14.4428 50.8305 13.8688 50.8305ZM13.1128 59.0625V52.0065H14.6388V59.0625H13.1128ZM16.4487 59.0625V52.0065H17.9747V53.1965C18.3527 52.4265 19.0247 51.8945 20.0467 51.8945C21.1807 51.8945 21.9927 52.3845 22.2867 53.2945C22.6647 52.5245 23.5047 51.8945 24.6107 51.8945C26.1227 51.8945 27.1027 52.8745 27.1027 54.3025V59.0625H25.5767V54.6805C25.5767 53.7985 25.0727 53.2105 24.1767 53.2105C23.1267 53.2105 22.5247 54.1345 22.5247 55.4925V59.0625H21.0127V54.6805C21.0127 53.7985 20.5227 53.2105 19.6267 53.2105C18.5767 53.2105 17.9747 54.1485 17.9747 55.4925V59.0625H16.4487ZM35.4281 55.2685C35.4281 55.4785 35.4141 55.7725 35.4001 55.8985H30.0101C30.1501 57.1165 30.9341 57.8725 32.0541 57.8725C32.9781 57.8725 33.6361 57.4385 33.8181 56.6685L35.2601 57.0325C34.8821 58.3905 33.6781 59.1745 32.0261 59.1745C29.7861 59.1745 28.5121 57.4385 28.5121 55.5345C28.5121 53.6305 29.7161 51.8945 31.9561 51.8945C34.2241 51.8945 35.4281 53.5465 35.4281 55.2685ZM30.0801 54.7365H33.8041C33.7061 53.7845 33.0761 53.0985 31.9561 53.0985C30.9901 53.0985 30.3041 53.6865 30.0801 54.7365Z" fill="#777778" />
                                        <path d="M32.966 24.0625V14.2625H36.046C38.776 14.2625 41.03 15.9285 41.03 19.1625C41.03 22.3965 38.776 24.0625 36.046 24.0625H32.966ZM34.576 22.6205H35.934C37.698 22.6205 39.35 21.6685 39.35 19.1625C39.35 16.6565 37.698 15.6905 35.934 15.6905H34.576V22.6205ZM45.127 16.8945C46.919 16.8945 48.151 17.9025 48.151 19.6665V24.0625H46.653V22.9845C46.247 23.6985 45.379 24.1745 44.441 24.1745C43.041 24.1745 42.075 23.2925 42.075 22.0885C42.075 20.7025 43.153 19.9605 45.323 19.7365L46.653 19.5965V19.4985C46.653 18.6305 46.051 18.0985 45.127 18.0985C44.273 18.0985 43.671 18.6025 43.573 19.4425L42.201 19.1905C42.425 17.8045 43.629 16.8945 45.127 16.8945ZM44.749 22.9985C45.939 22.9985 46.639 22.1725 46.653 21.0245V20.7305L45.309 20.8845C44.161 21.0105 43.573 21.4305 43.573 22.0465C43.573 22.6065 44.035 22.9985 44.749 22.9985ZM54.3054 17.0065H55.8734L52.1634 26.6105H50.5954L51.6594 23.8525L48.9154 17.0065H50.5674L52.4154 21.8925L54.3054 17.0065Z" fill="#777778" />
                                        <line x1="0.330743" y1="0.669257" x2="65.3307" y2="65.6693" stroke="#E8E8E8" stroke-width="0.935484" />
                                    </svg>
                                </div>
                                <div style={{
                                    gridTemplateColumns: `repeat(${daysArray?.length}, minmax(0, 1fr))`,

                                }} className="  grid  w-full">
                                    {daysArray?.map((day, index) => (
                                        <div
                                            className={clsx(
                                                " text-[#777778] w-[200px] font-Matter font-circular  border-x-[0.25px]  border-[#e8e8e8]    flex items-center  justify-center font-medium"
                                            )}
                                        >
                                            <div
                                                className={clsx(
                                                    " h-[55px]  font-circular  flex w-[120px] justify-center items-center",
                                                    index == 0 ? " bg-[#1D55E5] text-[#fff]  rounded-xl"
                                                        : ""

                                                )}
                                            >
                                                <div className=' leading-none'>
                                                    {getDayFromDate(day)}
                                                    <div className=' text-center'>

                                                        {day.split("-")[1]}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="max-w-full min-w-full overflow-scroll"
                        id="nested"
                    >
                        <div
                            id="nested-content"
                            className=" relative  w-max overflow-scroll  "
                        >
                            <div className=" flex bg-[] h-max      w-full">
                                <div className="bg-[#F9FBFC] flex h-max flex-col  border-r-[0.25px] border-[#e8e8e8] ">
                                    {hoursArray?.map((hour, index) => (
                                        <div
                                            key={`hour-${index}`}
                                            className=" items-center justify-center relative h-[150px] font-medium"
                                        >
                                            <span className=" opacity-0">
                                                <svg width="66" height="67" viewBox="0 0 66 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="65" y="1" width="66" height="65" transform="rotate(90 65 1)" fill="#F9FBFC" />
                                                    <path d="M7.262 59.0625V50.6905H4.238V49.2625H11.924V50.6905H8.9V59.0625H7.262ZM13.8688 50.8305C13.3088 50.8305 12.8888 50.3965 12.8888 49.8505C12.8888 49.2905 13.3088 48.8565 13.8688 48.8565C14.4428 48.8565 14.8768 49.2905 14.8768 49.8505C14.8768 50.3965 14.4428 50.8305 13.8688 50.8305ZM13.1128 59.0625V52.0065H14.6388V59.0625H13.1128ZM16.4487 59.0625V52.0065H17.9747V53.1965C18.3527 52.4265 19.0247 51.8945 20.0467 51.8945C21.1807 51.8945 21.9927 52.3845 22.2867 53.2945C22.6647 52.5245 23.5047 51.8945 24.6107 51.8945C26.1227 51.8945 27.1027 52.8745 27.1027 54.3025V59.0625H25.5767V54.6805C25.5767 53.7985 25.0727 53.2105 24.1767 53.2105C23.1267 53.2105 22.5247 54.1345 22.5247 55.4925V59.0625H21.0127V54.6805C21.0127 53.7985 20.5227 53.2105 19.6267 53.2105C18.5767 53.2105 17.9747 54.1485 17.9747 55.4925V59.0625H16.4487ZM35.4281 55.2685C35.4281 55.4785 35.4141 55.7725 35.4001 55.8985H30.0101C30.1501 57.1165 30.9341 57.8725 32.0541 57.8725C32.9781 57.8725 33.6361 57.4385 33.8181 56.6685L35.2601 57.0325C34.8821 58.3905 33.6781 59.1745 32.0261 59.1745C29.7861 59.1745 28.5121 57.4385 28.5121 55.5345C28.5121 53.6305 29.7161 51.8945 31.9561 51.8945C34.2241 51.8945 35.4281 53.5465 35.4281 55.2685ZM30.0801 54.7365H33.8041C33.7061 53.7845 33.0761 53.0985 31.9561 53.0985C30.9901 53.0985 30.3041 53.6865 30.0801 54.7365Z" fill="#777778" />
                                                    <path d="M32.966 24.0625V14.2625H36.046C38.776 14.2625 41.03 15.9285 41.03 19.1625C41.03 22.3965 38.776 24.0625 36.046 24.0625H32.966ZM34.576 22.6205H35.934C37.698 22.6205 39.35 21.6685 39.35 19.1625C39.35 16.6565 37.698 15.6905 35.934 15.6905H34.576V22.6205ZM45.127 16.8945C46.919 16.8945 48.151 17.9025 48.151 19.6665V24.0625H46.653V22.9845C46.247 23.6985 45.379 24.1745 44.441 24.1745C43.041 24.1745 42.075 23.2925 42.075 22.0885C42.075 20.7025 43.153 19.9605 45.323 19.7365L46.653 19.5965V19.4985C46.653 18.6305 46.051 18.0985 45.127 18.0985C44.273 18.0985 43.671 18.6025 43.573 19.4425L42.201 19.1905C42.425 17.8045 43.629 16.8945 45.127 16.8945ZM44.749 22.9985C45.939 22.9985 46.639 22.1725 46.653 21.0245V20.7305L45.309 20.8845C44.161 21.0105 43.573 21.4305 43.573 22.0465C43.573 22.6065 44.035 22.9985 44.749 22.9985ZM54.3054 17.0065H55.8734L52.1634 26.6105H50.5954L51.6594 23.8525L48.9154 17.0065H50.5674L52.4154 21.8925L54.3054 17.0065Z" fill="#777778" />
                                                    <line x1="0.330743" y1="0.669257" x2="65.3307" y2="65.6693" stroke="#E8E8E8" stroke-width="0.935484" />
                                                </svg>
                                            </span>
                                            <span
                                                className={clsx(
                                                    "  absolute text-[#4B5563] right-2 top-[-1rem]",
                                                    index == 0 ? "hidden" : ""
                                                )}
                                            >
                                                {hour}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div
                                    style={{
                                        gridTemplateRows: `repeat(${hoursArray?.length}, minmax(0, 1fr))`,
                                        gridTemplateColumns: `repeat(${daysArray?.length}, minmax(0, 1fr))`,

                                    }}
                                    className="grid  bg-white  border-r-[0.25px] border-[#e8e8e8]  w-full"
                                >
                                    {data1?.map((scheduleData, index) => {
                                        return (
                                            <div
                                                key={index}
                                                style={{
                                                    gridColumnStart: getcolstart(scheduleData), // Setting col-start dynamically
                                                    gridRowStart: getrowstart(
                                                        scheduleData.startTime
                                                    ), // Setting row-start dynamically based on start time
                                                }}
                                                className={clsx(
                                                    "h-[150px] w-[200px]   relative  border-[0.25px]  border-[#e8e8e8] "
                                                )}
                                            >
                                                <div className={clsx(' w-[100%] h-[100%] ', scheduleData.busy ? scheduleData.patient.toString() == user._id.toString() ? "bg-[#a7a5a5]" : "bg-[#F6F6F6]" : "hidden")}>

                                                </div>
                                                <div onClick={() => slotBooked(scheduleData)} className={clsx(' w-[100%] h-[100%] flex justify-center items-center ', !scheduleData.busy ? "" : "hidden")}>
                                                    <Button wfull={" w-[120px]"} text={bookload ? <div className='loader1' /> : "Book now"} className={" border-[1px] border-[#000]"} />
                                                </div>

                                            </div>
                                        );
                                    })}
                                    {generateEmptyCombinations()}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </Padding>
        </div>
    )
}

export default Doctorschedule
