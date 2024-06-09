import React from "react";

const Arrowright = ({ color, h }) => {
  return (
    <svg
      width={h || "25"}
      height={h || "24"}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.41016 19.92L15.9302 13.4C16.7002 12.63 16.7002 11.37 15.9302 10.6L9.41016 4.08"
        stroke={color || "#646D78"}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Arrowright;
