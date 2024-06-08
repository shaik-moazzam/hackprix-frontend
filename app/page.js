import Connect from "@/sections/home/connect";
import Datasecurity from "@/sections/home/datasecurity";
import Hero from "@/sections/home/hero";
import Hospitals from "@/sections/home/hospitals";
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
      <Hospitals />
      <Datasecurity />
    </div>
  );
};

export default Page;
