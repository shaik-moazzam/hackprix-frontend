"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";

const Lenis1 = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {
      // console.log(e)
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default Lenis1;
