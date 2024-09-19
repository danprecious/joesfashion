import CustomButton from "../utilities/button";
import { FaDownload, FaBlenderPhone } from "react-icons/fa";
import { BiMenu, BiCollection, BiSolidContact } from "react-icons/bi";
import Logo from "./logo";

import NavBar from "./nav";
import { MobileMenuButton, MobileNav } from "./nav/mobile";

const Header = () => {
  return (
    <header className="w-[100%] py-8 items-center justify-between md:px-12 px-4 flex relative">
      <Logo />
      <div className="flex lg:w-[40%] xl:w-[40%] md:w-[60%] justify-center items-center">
        <NavBar />
      </div>
      <div className="hidden md:flex">
        <CustomButton text="Get an Attire">
          <FaBlenderPhone />
        </CustomButton>
      </div>
      <div className="md:hidden ">
      <MobileMenuButton />
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;
