import clsx from 'clsx';
import React from 'react';

const Button = ({ text, className, wfull }) => {
  return (
    <div className={clsx("  font-circular hover:cursor-pointer flex justify-center border-[0] items-center  text-[0.9rem] md:text-[0.9rem] lg:text-[0.95rem] leading-none rounded-full     px-5 py-4 pb-3.5", className, wfull || "w-max")}>
      {text}
    </div>
  );
}

export default Button;
