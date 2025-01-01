import React from "react";
import { BiSolidLocationPlus } from "react-icons/bi";
import { RiUserLocationFill } from "react-icons/ri";
import { FaLocationArrow, FaSearchLocation } from "react-icons/fa";
import localFont from "next/font/local";
import Link from "next/link";

export const heroFont = localFont({
  // recoleta-regulardemo.otf
  // octoberdreams.otf
  // SinosansRegular-aYxZ5.otf
  // WsParadoseRegular-1jPAe.ttf
  // ModernAesthetic-DemoVersion-Regular.otf
  src: "../../../public/fonts/ModernAesthetic-DemoVersion-Regular.otf",
  variable: "--font-heroFont",
});

const Footer = () => {
  return (
    <footer
      className={`${heroFont.variable} w-full bg-black text-white min-h-[20em] lg:py-32  px-5 py-12 mt-40`}
    >
      <div className="w-full justify-center flex pb-20">
        <h2 className="font-heroFont text-[2rem] text-center">
          Elevate your style with Joes' Fashion
        </h2>
      </div>
      <div className="flex flex-col md:flex-row lg:justify-between lg:mx-[20%] lg:items-start ">
        <div className="lg:mx-8">
          <p className="font-bold">Address</p>
          <div className="flex items-center">
            <BiSolidLocationPlus />
            <p className="py-1 ml-3 text-stone-500">
              Warri, Delta State, Nigeria
            </p>
          </div>
        </div>
        <div className="lg:mx-8 my-10 lg:my-0">
          <p className="font-bold">Collections</p>
          <div className="mx-3">
            <ul>
              <li className="my-3">
                {" "}
                <Link className="text-stone-500 my-3" href="/collection/ankara">
                  Ankara
                </Link>{" "}
              </li>
              <li className="my-3">
                {" "}
                <Link className="text-stone-500 my-3" href="/collection/cooperate">
                  Corporate wears
                </Link>{" "}
              </li>
              <li className="my-3">
                {" "}
                <Link className="text-stone-500 my-3" href="/collection/senators">
                  Senators
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:mx-8 my-10 lg:my-0">
          <p className="font-bold">Quick links</p>
          <ul className="mx-3">
            <li className="my-3">
              <Link href="/home" className="text-stone-500 my-3">
                Home
              </Link>
            </li>
            <li className="my-3">
              <Link href="/about-us" className="text-stone-500 my-3">
                About
              </Link>
            </li>
            <li className="my-3">
              <Link href="/training" className="text-stone-500 my-3">
                Training
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
