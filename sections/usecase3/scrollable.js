"use client";
import Padding from "@/components/padding";
import useDraggableScroll from "@/components/usedrag";
import Image from "next/image";
import React from "react";
import People1 from "../../public/images/people1.jpg";
import People2 from "../../public/images/people2.jpg";
import People3 from "../../public/images/people3.jpg";
import People4 from "../../public/images/people4.jpg";

const Scrollable = () => {
  const {
    scrollContainerRef,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
    dragged,
  } = useDraggableScroll();
  return (
    <div className=" py-32 ">
      <Padding>
        <div className=" font-thunder font-bold test-[2rem] md:text-[5rem] md:leading-[5rem] text-center md:max-w-[700px] mx-auto ">
          GET YOUR PATIENTS DATA FROM MINUTE TO BIG DETAILS
        </div>
        <div className=" text-[#73827A] font-circular text-center">
          Our dashboard for managing and handling trademarks work like a charm.
        </div>
      </Padding>
      <div
        id="scrollable-div"
        ref={scrollContainerRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        className=" flex gap-10 px-[1rem] py-20 md:px-[3rem] overflow-x-scroll w-full "
      >
        <Image
          // draggable={false}
          className="  rounded-2xl w-[25rem] "
          src={People1}
        />
        <Image
          draggable={false}
          className=" rounded-2xl w-[25rem] "
          src={People2}
        />
        <Image
          draggable={false}
          className=" rounded-2xl w-[25rem] "
          src={People3}
        />
        <Image
          draggable={false}
          className=" rounded-2xl w-[25rem] "
          src={People4}
        />
        <Image
          draggable={false}
          className="  rounded-2xl w-[25rem] "
          src={People1}
        />
        <Image
          draggable={false}
          className=" rounded-2xl w-[25rem] "
          src={People2}
        />
        <Image
          draggable={false}
          className=" rounded-2xl w-[25rem] "
          src={People3}
        />
        <Image
          draggable={false}
          className=" rounded-2xl w-[25rem] "
          src={People4}
        />
      </div>
    </div>
  );
};

export default Scrollable;
