import Image from "next/image";
import React from "react";
import clsx from "clsx";

const Securitycard = ({
  className,
  textcolor,
  imgtext,
  tag,
  title,
  description,
  src,
  w,
}) => {
  return (
    <div className={clsx("  font-circular  ", className)}>
      <div
        className={clsx(
          " text-[#2A2C2F] bg-[#EBEDF0]  rounded-xl  font-medium text-[1.1rem] ",
          className
        )}
      >
        <div className={clsx("py-10 text-center   mx-auto ", w)}>{imgtext}</div>
        <div className=" max-w-[195px] mx-auto">
          <Image className=" w-full " src={src} />
        </div>
      </div>
      <div className=" py-5  ">
        <div className={clsx("  font-circular font-medium ", textcolor)}>
          {tag}
        </div>
        <div className=" text-[#272D31] font-medium text-[1.25rem] ">
          {title}
        </div>
        <div className=" w-[90%] text-[0.85rem]  text-[#8994A3] ">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Securitycard;
