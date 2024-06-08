import Datasecurity from "@/sections/home/datasecurity";
import Save from "@/sections/home/save";
import Details from "@/sections/usecase1/details";
import Manage from "@/sections/usecase1/manage";
import Healthdata from "@/sections/usecase2/healthdata";
import React from "react";

const Page = () => {
  return (
    <div>
      <Healthdata />
      <Manage />
      <Details />
      <Save />
      <Datasecurity />
    </div>
  );
};

export default Page;
