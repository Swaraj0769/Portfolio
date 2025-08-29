// import React, { useContext, useRef } from "react";
// import { NavbarContext } from "../../context/NavContext";

// const Navbar = () => {
//   const navGreenRef = useRef(null);
//   const [navOpen, setNavOpen] = useContext(NavbarContext)

//   return (
//     <div className="z-4 p-1 flex fixed top-0 w-full items-start  justify-between">
//       <div>
//         <img
//           className="w-50 invert -ml-10 -mt-10 "
//           src="../../../../images/ss-logo-vector.png"
//           alt=""
//         />
//       </div>
//       <div onClick={()=>{
//         setNavOpen(true)
//       }}
//         onMouseEnter={() => {
//           navGreenRef.current.style.height = "100%";
//         }}
//         onMouseLeave={() => {
//           navGreenRef.current.style.height = "0%";
//         }}
//         className="bg-black relative h-10 w-[16vw]"
//       >
//         <div ref={navGreenRef} className="bg-green-400 transition-all absolute top-0 h-0 w-full"></div>
//         <div className="relative p-3 flex flex-col gap-2">
//             <div className="w-15 ml-38 h-0.5 bg-white"></div>
//             <div className="w-12 ml-41 h-0.5 bg-white"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext, useRef } from 'react'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'

const Navbar = () => {

    const navGreenRef = useRef(null)
    const [navOpen,setNavOpen] = useContext(NavbarContext)
    const [navColor, setNavColor] = useContext(NavbarColorContext)

    return (
        <div className='z-4 flex fixed top-0 w-full items-start justify-between'>
            <div >
                <div>
                  <img
                    className="w-50 invert -ml-10 -mt-10 "
                    src="../../../../images/ss-logo-vector.png"
                    alt=""
                  />
                </div>
            </div>
            <div onClick={()=>{
                setNavOpen(true)
            }} onMouseEnter={() => {
                navGreenRef.current.style.height = '100%'
            }}
                onMouseLeave={() => {
                    navGreenRef.current.style.height = '0%'
                }}
                className='lg:h-12 h-10 bg-black relative lg:w-[16vw] w-48'>
                <div ref={navGreenRef} className='bg-[#D3FD50] transition-all absolute top-0 h-0 w-full'></div>
                <div className='relative h-full lg:px-10 px-8 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5'>
                    <div className="lg:w-18 w-12 h-0.5 bg-white"></div>
                    <div className="lg:w-10 w-6 h-0.5 bg-white"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar