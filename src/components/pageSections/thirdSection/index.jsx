"use client";

import CustomButton from "@/components/utilities/button";
import Link from "next/link";
import { BiLogoSketch, BiSolidContact } from "react-icons/bi";
import { FaPhone, FaPhoneAlt, FaPhoneSlash } from "react-icons/fa";

import { useContext } from "react";
import { GlobalState } from "@/stateManager/context";

import images from '../../../utils/images.json'
import Image from "next/image";

const ThirdSection = () => {
  const { state, dispatch } = useContext(GlobalState);

  const openGetAnAttire = () => {
    console.log(state?.getAnAttireOpen);

    dispatch({ type: "OPEN_GET_AN_ATTIRE", payload: true });
  };

  return (
    <section className="">
      <div className="lg:flex justify-between">
        <div className="lg:w-[40%] flex flex-col justify-center px-2 md:px-6 my-10 lg:my-0">
          <p className="text-justify text-wrap">
            Experience the ultimate convenience with Joe's Fashion. From vibrant
            Ankara styles to sleek corporate attire and elegant Senator outfits,
            we deliver fashion directly to your doorstep. Wherever you are,
            trust us to provide seamless service that combines quality, style,
            and prompt delivery.
          </p>
          <div className="my-10 flex justify-center md:justify-start">
            <CustomButton
              fn={openGetAnAttire}
              text="Get an Attire"
            ></CustomButton>
          </div>
        </div>
        <div className="lg:w-[55%] md:py-14 relative lg:px-10 px-4 py-4">
          <div className="flex justify-end border-blue-900">
            <div className="md:w-[80%] w-[100%] h-[20em] bg-orange-800 md:mr-6 mx-2">
                <Image alt="cloth style image" width={500} height={500} src={images.thirdSection1} className="image" />
            </div>
            <div className="absolute bottom-10 left-6 h-[6em] md:h-[10em] w-[6em] md:w-[10em] hidden lg:block bg-stone-600 rounded-md">
            <Image alt="cloth style image" width={500} height={500} src={images.thirdSection2} className="image" />
            </div>
            <div className=""></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
