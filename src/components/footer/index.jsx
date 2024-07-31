import React from "react";
import { BiSolidLocationPlus } from "react-icons/bi";
import { RiUserLocationFill } from "react-icons/ri";
import { FaLocationArrow, FaSearchLocation } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-100 bg-black text-white h-[20em] lg:p-10 flex">
          <div className="md:">
            <BiSolidLocationPlus />
      <p className="py-2">
        
        This is my address
      </p>
            </div>
            <div>Collections</div>
    </footer>
  );
};

export default Footer;
