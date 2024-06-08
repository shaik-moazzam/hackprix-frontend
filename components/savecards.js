import React from "react";

const Savecards = ({ heading, content }) => {
  return (
    <div className=" max-w-[340px] ">
      <div className=" font-circular font-bold text-white text-[2.25rem] ">
        {heading}
      </div>
      <div className=" text-[#95AEEF] font-circular text-[0.95rem]   font-[450] ">
        {content}
      </div>
    </div>
  );
};

export default Savecards;
