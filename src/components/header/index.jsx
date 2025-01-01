"use client";

import CustomButton from "../utilities/button";
import { FaDownload, FaBlenderPhone } from "react-icons/fa";
import { BiMenu, BiCollection, BiSolidContact } from "react-icons/bi";
import Logo from "./logo";

import NavBar from "./nav";
import { MobileMenuButton, MobileNav } from "./nav/mobile";
import { useContext } from "react";
import { GlobalState } from "@/stateManager/context";

const Header = () => {
  const { state, dispatch } = useContext(GlobalState);
  const getAnAttire = () => {
    console.log(state?.getAnAttireOpen);

    dispatch({ type: "OPEN_GET_AN_ATTIRE", payload: true });
  };

  return (
    <header className="w-[100%] py-8 items-center justify-between md:px-12 px-4 flex relative">
      <Logo />
      <div className="flex lg:w-[50%] xl:w-[40%] md:w-[70%] justify-center items-center">
        <NavBar />
      </div>
      <div className="hidden lg:flex">
        <CustomButton fn={getAnAttire} text="Get an Attire">
          <FaBlenderPhone />
        </CustomButton>
      </div>
      <div className="lg:hidden ">
        <MobileMenuButton />
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;
