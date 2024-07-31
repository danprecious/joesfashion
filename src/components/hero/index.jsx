import React from "react";
import localFont from "next/font/local";

const heroFont = localFont({
  // recoleta-regulardemo.otf
  // octoberdreams.otf
  // SinosansRegular-aYxZ5.otf
  // WsParadoseRegular-1jPAe.ttf
  // ModernAesthetic-DemoVersion-Regular.otf
  src: "../../../public/fonts/ModernAesthetic-DemoVersion-Regular.otf",
  variable: "--font-heroFont",
});

const Hero = () => {
  return (
    <div className={`${heroFont.variable}`}>
      <div className="justify-center flex">
        <h1 className="text-center font-heroFont lg:text-[4rem] md:text-[2.5rem] text-[3rem] hero-text font-bod max-w-[89%] text-wrap md:max-w-[60%] mt-4 mb-2">
          Unleash Your Style With Us
        </h1>
      </div>

      <div className="md:mx-24 mx-3 my-2">
        <div className="md:min-h-[18em] flex flex-col justify-center md:flex-row  md:justify-between">
          <div className="lg:w-[20%] h-[] md:w-[33.5%] w-[100%] flex  items-center px-3">
            <div className="h-[50%] w-[100%] min-h-[10em] bg-stone-600 rounded-lg"></div>
          </div>
          <div className="md:w-[20%] hidden lg:flex flex-col justify-center px-3">
            <div className="h-[30%] w-[100%] bg-stone-600 rounded-lg my-1"></div>
            <div className="h-[40%] w-[100%] bg-stone-600 rounded-lg my-1"></div>
          </div>
          <div className="lg:w-[20%] md:w-[33.5%] w-[100%] min-h-[20em] my-4 bg-amber-950 rounded-2xl"></div>
          <div className="md:w-[20%] lg:flex flex-col justify-center px-3 hidden">
            <div className="h-[40%] w-[100%] bg-stone-600 rounded-lg my-1"></div>
            <div className="h-[30%] w-[100%] bg-stone-600 rounded-lg my-1"></div>
          </div>
          <div className="lg:w-[20%] md:w-[33.5%] w-[100%] flex  items-center px-3">
            <div className="h-[50%] w-[100%] bg-stone-600 min-h-[10em] rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
