import Connect from "@/sections/home/connect";
import Hero from "@/sections/home/hero";
import People from "@/sections/home/people";
import Save from "@/sections/home/save";
import React from "react";

const Page = () => {
  return (
    <div>
      <Hero />
      <People />
      <Connect />
      <Save />
    </div>
  );
};

export default Page;
