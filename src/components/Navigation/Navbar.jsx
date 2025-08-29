import React, { useContext, useRef } from "react";
import { NavbarContext } from "../../context/NavContext";

const Navbar = () => {
  const navGreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext)

  return (
    <div className="z-4 p-1 flex fixed top-0 w-full items-start  justify-between">
      <div>
        <img
          className="w-50 invert -ml-10 -mt-10 "
          src="../../../../images/ss-logo-vector.png"
          alt=""
        />
      </div>
      <div onClick={()=>{
        setNavOpen(true)
      }}
        onMouseEnter={() => {
          navGreenRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = "0%";
        }}
        className="bg-black relative h-10 w-[16vw]"
      >
        <div ref={navGreenRef} className="bg-green-400 transition-all absolute top-0 h-0 w-full"></div>
        <div className="relative p-3 flex flex-col gap-2">
            <div className="w-15 ml-38 h-0.5 bg-white"></div>
            <div className="w-12 ml-41 h-0.5 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
