import React from "react";
import { NavLink } from "react-router-dom";

const HomeMainHero = () => {
  return (
    
        
<div className="grid grid-cols-3 mt-15 grid-rows-4 gap-1">
    <div className="border-4 border-white  uppercase col-span-2 row-span-3 rounded-2xl overflow-hidden">
        <img className="h-full w-full object-cover"
          src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/03/featured-image-tanjiro-kamado.jpg"
          alt=""
        />
    </div>
    <div className="col-start-1 row-start-4 border-4 border-white rounded-full uppercase px-8 overflow-hidden">
        <NavLink to="https://github.com/swaraj0769">
          <img
            src="https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000"
            alt=""
          />
        </NavLink>
    </div>
    <div className="col-start-2 row-start-4 border-4 border-white rounded-full uppercase px-8 overflow-hidden">
        <NavLink to="https://www.linkedin.com/in/swarajsanodiya/">
          <img
            src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
            alt=""
          />
        </NavLink>
    </div>
    <div className="row-span-2 col-start-3 row-start-1 border-4 border-white rounded-xl uppercase px-8 overflow-hidden">Hello</div>
    <div className="row-span-2 col-start-3 row-start-3 border-4 border-white rounded-xl uppercase px-8 overflow-hidden">Baby</div>
</div>
  );
};

export default HomeMainHero;
