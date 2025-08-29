import React, { useRef } from "react";

const Navbar = () => {
  const navGreenRef = useRef(null);

  return (
    <div className="z-4 p-1 flex fixed top-0 w-full items-start  justify-between">
      <div>
        <img
          className="w-50 invert -ml-10 -mt-10 "
          src="../../../../images/ss-logo-vector.png"
          alt=""
        />
      </div>
      <div
        onMouseEnter={() => {
          navGreenRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = "0%";
        }}
        className="bg-black relative h-10 w-[16vw]"
      >
        <div ref={navGreenRef} className="bg-green-400 transition-all absolute top-0 h-0 w-full"></div>
        {/* <div className="relative"></div> */}
      </div>
    </div>
  );
};

export default Navbar;
