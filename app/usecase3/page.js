import Datasecurity from "@/sections/home/datasecurity";
import Save from "@/sections/home/save";
import Manage from "@/sections/usecase1/manage";
import Betterway from "@/sections/usecase3/betterway";
import Scrollable from "@/sections/usecase3/scrollable";
import React from "react";

const Page = () => {
  return (
    <div>
      <Betterway />
      <Scrollable />
      <Manage />
      <Save />
      <Datasecurity />
    </div>
  );
};

export default Page;
