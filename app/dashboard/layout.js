import Dashboardnavbar from "@/components/dashboardnavbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Dashboardnavbar />
      {children}
    </div>
  );
};

export default Layout;
