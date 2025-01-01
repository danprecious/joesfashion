import CustomButton from "@/components/utilities/button";
import Link from "next/link";
import React from "react";

import images from '../../../utils/images.json'
import Image from "next/image";

const FirstSection = () => {
  return (
    <section className="lg:flex justify-between">
      <div className="lg:w-[55%] md:py-14 relative lg:px-10 px-4 py-4">
        <div className="flex justify-end border-blue-900">
          <div className="md:w-[80%] w-[100%] h-[20em] bg-orange-800 md:mr-6 mx-2">
            <Image alt="cloth style image" width={1000} height={1000} src={images.firstSection1} className="image" />

          </div>
          <div className="absolute top-0 left-10 h-[4em] md:h-[7em] w-[4em] md:w-[7em] hidden lg:block bg-stone-600 rounded-md">
          <Image alt="cloth style image" width={1000} height={1000} src={images.firstSection2} className="image" />
          </div>
          <div className="absolute bottom-0 md:left-28 left-20 h-[4em] md:h-[7em] w-[4em] hidden lg:block md:w-[7em] bg-stone-600 rounded-md">
          <Image alt="cloth style image" width={1000} height={1000} src={images.firstSection3} className="image" />
          </div>
          <div className="absolute bottom-10 h-[6em] md:h-[10em] w-[6em] md:w-[10em] hidden lg:block bg-stone-600 rounded-md">
          <Image alt="cloth style image" width={1000} height={1000} src={images.firstSection4} className="image" />
          </div>
          <div className=""></div>
          <div></div>
        </div>
      </div>
      <div className="lg:w-[40%] flex flex-col justify-center px-2 md:px-6 my-10 lg:my-0">
        <p className="text-justify text-wrap">
          At Joe’s Fashion, we redefine elegance with every piece. Explore
          collections designed to inspire confidence, combining timeless
          classics and modern trends. From sleek, sophisticated attire to
          comfortable everyday wear, our styles are crafted to elevate your
          wardrobe and complement every moment of your journey
        </p>
        <div className="my-10 flex justify-center md:justify-end">
          <Link href="/collection/ankara">
            <CustomButton text="See collection"></CustomButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
